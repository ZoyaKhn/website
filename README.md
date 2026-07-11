# Zoya Khan — Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Editing Content

All portfolio text, experience, projects, and skills live in a single file:

**`src/data/content.ts`**

Update that file to change copy without touching component code.

## Resume

The resume PDF is in `public/Zoya_Khan_Resume.pdf`. Replace that file to update the downloadable resume linked from the hero and navbar.

## Build for Production

```bash
npm run build
npm run preview
```

## AI Chatbot

This site includes a small chatbot backed by Google AI Studio / Gemini.

### Setup

1. Create an API key in Google AI Studio.
2. Add this environment variable on Vercel and locally:

```bash
GEMINI_API_KEY=your_api_key_here
```

3. Optional: change the model with `GEMINI_MODEL` if you want a different Gemini model.
4. For local development, you can copy `.env.example` to `.env.local` and replace the key with your real Gemini API key.

The chatbot reads from [`website-knowledge.md`](website-knowledge.md) and sends that file as the prompt context for each request.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Google Fonts: Cormorant Garamond (headings), DM Sans (body)
