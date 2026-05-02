@echo off
title Web (Astro :4321)
cd /d "%~dp0"

where pnpm >nul 2>&1
if errorlevel 1 (
    echo [ERROR] pnpm not found. Run: npm install -g pnpm
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo Installing dependencies...
    call pnpm install
)

cd /d "%~dp0apps\web"
echo Web server starting at http://localhost:4321
set PUBLIC_API_BASE=http://localhost:8787
call npx astro dev
pause
