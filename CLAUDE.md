# 필수 항목
- 답변은 한글로 간단 명료
- 필요할 경우 ci-gateway hooking 기능 추가

# Cloudflare 알려진 주의사항
- cron 요일: 0(일요일) 미지원 → `7` 사용
- Pages 최초 배포: `wrangler pages project create` 필요 (deploy.yml에 포함됨)
- API URL: 계정 서브도메인 포함 필수 → `{name}.{account}.workers.dev`
- D1 API Token: `D1 Edit` 권한 필요 (Workers Scripts Edit만으론 부족)
- `migrations apply`: `wrangler.toml`에 `migrations_dir` 설정 필요
- Pages 배포: `--branch=main` 없으면 production alias(`{name}.pages.dev`) 미연결
- `SLACK_WEBHOOK_URL`: GitHub Secrets 아닌 Cloudflare Secrets에 등록
