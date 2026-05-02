@echo off
title API (Workers :8787)
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

cd /d "%~dp0apps\api"
echo Applying local D1 migrations...
call npx wrangler d1 migrations apply {{project-name}}-db --local

echo.
echo API server starting at http://localhost:8787
call npx wrangler dev
pause
