# Boby — password-free Netlify edition

No Boby login. The studio opens automatically. All API endpoints and the shared workspace are accessible to anyone who can reach the deployment. **Do not make this site public with an API key or private data.** Enable Netlify site-level access protection that covers functions as well as pages, and verify unauthorized requests are denied before adding credentials. If unavailable, do not deploy with real data or credentials. No per-user isolation or rate limiting is included.

1. Extract this ZIP. Upload its contents to a private GitHub repository using the browser.
2. Import that repository into Netlify. Leave base directory empty. Publish directory: `public`. Functions: `netlify/functions`. Netlify installs dependencies from package.json. Static drag-and-drop alone is not sufficient.
3. Configure site-level protection and verify it covers API endpoints. Set `OPENAI_API_KEY` in Netlify environment variables (Functions scope). Use a fresh key; revoke previously exposed keys. Optional: OPENAI_TEXT_MODEL and OPENAI_IMAGE_MODEL. No BOBY_PASSWORD needed.
4. Deploy and open the URL. No Terminal or Boby sign-in required.

Storage uses Netlify Blobs, scoped to the site. New sites do not automatically inherit old workspace data. Import an existing workspace JSON through Settings if available. Existing local SQLite data is not included; keep boby.sqlite and export the kv row with key workspace as JSON for import. Last completed save wins; avoid concurrent edits. Interrupted uploads may leave temporary blobs. Text generation is subject to function timeout. Original PDF/video analysis limitations remain (ORIGINAL-README.md).

Verify homepage, project save/reload, script, title, thumbnail and caption generation on your deployed site. Live deployment and OpenAI calls have not been tested here.

## Revised build
Both text and image generation now use background functions with job polling to avoid the normal synchronous function timeout. The master brief is embedded as a JavaScript module to avoid runtime file resolution issues in the bundled function. The original interface is retained. Syntax, brief integrity, chunk transport and mocked text generation/approval gate tests passed. Real Netlify deployment, Blobs and OpenAI calls remain unverified. Git-backed build is required for this source ZIP; no static-only upload. Netlify access protection may require a paid plan; do not enable real credentials until both pages and functions are protected.
