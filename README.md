# 🌟 ShowCaseAI — Your AI Project Analyst

> Built by ** Ivy Swenson **
> Transform your project notes or README into a clean summary, tech stack, and key highlights — ready for resumes, portfolios, and interviews.

---

## 🚀 About the Project
**ShowCaseAI** is an AI-powered tool that helps developers and students automatically **summarize, classify, and highlight** their projects.  
It’s designed for portfolio builders, resume writers, and creators who want to describe their work *better and faster*.

🧠 *“Think of it as your personal AI assistant that reads your README and writes the perfect highlight section for you.”*

---

## ✨ MVP Features (v0.1)
- 📂 Upload README or project text  
- 🤖 AI generates:  
  - concise project **summary**  
  - detected **tech stack**  
  - 3–5 **highlight bullets**  
- 💾 View generated project cards  
- 🧩 Future: PDF export, GitHub repo parser, interview Q&A generator  

---

## 🧱 Tech Stack
| Layer | Technology |
|--------|-------------|
| **Frontend** | Next.js 14, React 19, TypeScript, TailwindCSS |
| **Backend (planned)** | Node.js + Express |
| **Database (planned)** | MongoDB Atlas |
| **AI API (planned)** | OpenAI GPT models |

---
```
## 🧩 Project Structure
showcaseai/
├── web/ # Next.js frontend
│ ├── src/app/ # Main app entry (page.tsx, layouts, etc.)
│ ├── src/components/ # Shared UI (future)
│ └── tailwind.css
└── api/ # Express backend (coming soon)
```
---

## ▶️ Local Development

Clone and start the frontend locally:

```bash
# Clone this repo
git clone https://github.com/IvySwenson/showcaseai.git
cd showcaseai/web

# Install dependencies
pnpm install

# Run development server
pnpm dev
# → http://localhost:3000
```
🔐 Environment Variables (for later)

When backend & AI features are added, you’ll create a .env file like:
```bash
OPENAI_API_KEY=sk-xxxx
MONGODB_URI=mongodb+srv://...
```
## 🌍 Roadmap

- [x] Initialize frontend scaffold (Next.js + Tailwind + TS)
- [x] Create landing page with branding
- [ ] Add file upload for README
- [ ] Implement `/api/analyze` for AI summarization
- [ ] Store results in MongoDB
- [ ] Generate shareable project cards
- [ ] PDF export + Interview Q&A generator
- [ ] Deploy frontend (Vercel) + backend (Render/Fly.io)


## 👩‍💻 Author

**Ivy Swenson**
Computer Science Student @ University of Alaska Fairbanks
Interested in algorithms, system design, and AI-driven data visualization.

## 🪪 License

This project is released under the MIT License
.

