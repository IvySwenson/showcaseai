import ShowcaseGrid from "../components/ShowcaseGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* ✅ 测试 Tailwind 是否工作 */}
      <div className="h-2 w-full bg-emerald-500"></div>

      {/* 顶部导航 */}
      <nav className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-xl bg-black" />
          <span className="font-semibold tracking-tight">ShowCaseAI</span>
        </div>
        <div className="text-sm text-slate-600">
          v0.1 • Next.js + Tailwind + TS
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 bg-white shadow-sm">
          🚧 MVP in progress
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
          Your <span className="text-emerald-600">AI Project Analyst</span>
        </h1>

        <p className="mt-4 max-w-2xl text-slate-600 md:text-lg leading-relaxed">
          Upload your README or project notes. We’ll extract the{" "}
          <span className="font-medium text-slate-800">summary</span>,{" "}
          <span className="font-medium text-slate-800">tech stack</span>, and{" "}
          <span className="font-medium text-slate-800">key highlights</span> — ready for resumes,
          portfolios, and interviews.
        </p>

        {/* 两个按钮 */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#"
            className="rounded-xl bg-black px-5 py-3 text-white text-sm font-medium hover:opacity-90 transition"
          >
            Upload a Project (soon)
          </a>
          <a
            href="#"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50 transition"
          >
            View Demo (placeholder)
          </a>
        </div>

        {/* 三个特性卡片 */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Smart Summary",
              desc: "Turn messy notes into a crisp project overview.",
            },
            {
              title: "Tech Stack Autotag",
              desc: "Detect frameworks, libraries, and tooling in seconds.",
            },
            {
              title: "Interview Ready",
              desc: "Auto-generate bullet points & sample Q&A.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg text-slate-800">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 下方 ShowcaseGrid */}
      <ShowcaseGrid />

      {/* 页脚 */}
      <footer className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-slate-500">
        <div className="flex flex-col items-center gap-1 md:flex-row md:justify-center md:gap-3">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-slate-700">ShowCaseAI</span> — Created by{" "}
            <span className="text-emerald-600 font-semibold hover:underline hover:decoration-emerald-500 transition">
              Ivy Swenson
            </span>{" "}
            with ❤️
          </p>
          <a
            href="https://github.com/IvySwenson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-600 text-xs"
          >
            GitHub ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
