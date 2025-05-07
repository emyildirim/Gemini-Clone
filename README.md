# Gemini‑Clone Web Application

A full‑stack web application that recreates the **Gemini AI** chat experience while running entirely on your own infrastructure. It uses **Google Gemini AI’s REST API** under the hood, so you get the same model quality with total control over the UI, and future feature additions.

<img width="1468" alt="image" src="https://github.com/user-attachments/assets/ff72f287-48f4-4368-932a-18f35e37fd2d" />


## ✨ Features

| Category | Highlights |
| -------- | ---------- |
| **Chat** | • Streaming responses (token‑by‑token)<br>• Rich‑text & code block rendering (Markdown, syntax highlighting)<br>• Regenerative editing (“Regenerate”, “Continue”, “Insert above”) |
| **Conversations** | • Threaded history saved per session<br>• Search & filter chats<br>• Pin / delete / export |
| **System Prompts** | • Per‑chat or global system instructions<br>• Temperature & top‑p sliders in the UI |
| **Deployment** | • 1‑click **Vercel** / **Render** deploy.<br>• Dockerfile for any platform.<br> |



## 🚀 Quick Start

### Clone & install

    ```bash
    git clone https://github.com/your‑org/gemini‑clone.git
    cd gemini‑clone
    pnpm i     # or yarn / npm
    
    cp .env.example .env
    
    # Required
    GEMINI_API_KEY=   # get one from Google AI Studio

## 🤝 Contributing

1.  Fork 🍴 → feature branch → PR
    
2.  Follow commit conventions (`pnpm cz`).
    
3.  All PRs run lint, type‑check, test & build in CI.
    
4.  Code owners auto‑request review.
