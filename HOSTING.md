# ShortsWave AI Hosting Guide

## What This App Needs

- Node.js 22 or newer
- pnpm
- A Gemini API key in `GEMINI_API_KEY`
- Persistent enough temporary storage for uploads/exports. The app stores temporary videos in the OS temp folder.

## Local Production Run

```bash
pnpm install
pnpm build
pnpm start
```

Then open:

```text
http://127.0.0.1:8787
```

## Environment Variables

Copy `.env.example` to `.env` locally, or set these in your hosting dashboard:

```text
GEMINI_API_KEY=your_real_key
GEMINI_MODEL=gemini-2.5-flash
HOST=0.0.0.0
PORT=8787
MAX_UPLOAD_MB=750
```

Use `HOST=0.0.0.0` on Render, Railway, VPS, or most cloud hosts.

## Render Hosting

1. Upload this project to GitHub.
2. Create a new Render Web Service.
3. Build command:

```bash
pnpm install && pnpm build
```

4. Start command:

```bash
pnpm start
```

5. Add environment variables:

```text
GEMINI_API_KEY=your_real_key
GEMINI_MODEL=gemini-2.5-flash
HOST=0.0.0.0
MAX_UPLOAD_MB=750
```

Render supplies `PORT` automatically.

## Render Docker Hosting

If Render says `failed to read dockerfile`, you created the service as a Docker deployment. This package now includes a `Dockerfile`.

Render Docker settings:

```text
Dockerfile Path: ./Dockerfile
Root Directory: leave blank if package.json and Dockerfile are in repo root
```

Environment variables:

```text
GEMINI_API_KEY=your_real_key
GEMINI_MODEL=gemini-2.5-flash
HOST=0.0.0.0
MAX_UPLOAD_MB=750
```

Do not set a separate build/start command for Docker mode. Docker uses the Dockerfile.

## Railway Hosting

1. Upload this project to GitHub.
2. Create a Railway project from the repo.
3. Add environment variables:

```text
GEMINI_API_KEY=your_real_key
GEMINI_MODEL=gemini-2.5-flash
HOST=0.0.0.0
MAX_UPLOAD_MB=750
```

4. Railway should run:

```bash
pnpm install && pnpm build && pnpm start
```

If it asks for commands, use the same build/start commands as Render.

## Important Export Note

The app exports MP4 from uploaded videos or direct authorized video file URLs such as `.mp4`, `.mov`, `.webm`, `.mkv`, or `.avi`.

YouTube links are supported for analysis/preview, but not direct ripping/exporting.
