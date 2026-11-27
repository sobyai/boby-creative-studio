# Boby — Personal AI Creative Studio

Local-first single-user working prototype. Node.js 22.13+ (built-in SQLite, no npm dependencies). Run from this folder:

```sh
export OPENAI_API_KEY='your-key'
export BOBY_PASSWORD='a-long-unique-password'
node server.mjs
```

Open http://127.0.0.1:8787. Login user `boby`, password set above. Without key, manual workflow remains available; without password, localhost only is the intended mode. API calls are billed separately from ChatGPT. Set OPENAI_TEXT_MODEL and OPENAI_IMAGE_MODEL to supported models on your API account (defaults gpt-4.1-mini and gpt-image-1). PORT, HOST and DB_PATH are optional. Use HTTPS reverse proxy and a private persistent volume before remote access; do not expose plain HTTP Basic auth publicly. One shared workspace, not multi-user. Back up boby.sqlite. To access across devices deploy on a Node 22 server with persistent disk, TLS and password, then visit its HTTPS address. No cloud account or hosting has been provisioned. Hosting and generation costs depend on provider, model, image size and usage; no fixed cost quoted.

## Implemented
Single responsive workspace, project CRUD, SQLite persistence, stage gates, three script options, individual revision, manual script/title/caption, five title and three caption requests, character uploads, image generation/edit using official OpenAI endpoints, 1080x1920 PNG canvas export, version history, project JSON and text export, manual image upload, status and error handling. The original brief is included and passed as creative guidance. Local startup and syntax tested; live API calls require credentials and have not been tested.

## Limitations
PDF/video uploads are stored, not analyzed; paste transcripts or relevant details. Images are sent to the text model (up to five); image generation uses up to five saved character references. URLs are stored, not fetched. Discovery is original idea generation, not verified live trend research. Video generation not integrated. Uploads capped at 20 MB each and 65 MB per save request; compress large references. Shared database is not encrypted at rest by the app; secure the hosting volume. Authentication is single-user HTTP Basic, not a production account system. No automatic learning across approved assets beyond history and fixed brand guidance; no conversational chat history, no full production-plan regeneration after manual script changes (export labels the selected plan as needing review), no packaged ZIP export from UI, and no specialized per-element image editing UI beyond direction notes and variants. Thumbnail canvas crop and text overlay are approximate preview matches. Image identity is not guaranteed. No actual user reference videos have been analyzed or bundled. Do not use this as a public multi-user deployment without further engineering.
