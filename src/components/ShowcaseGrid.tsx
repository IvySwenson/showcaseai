"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Star, Github, ExternalLink, Tags, X, ChevronRight, Filter,
} from "lucide-react";

type Project = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tags: string[];
  stars: number;
  updatedAt: string; // ISO
  cover: string;
  links: { repo: string; demo: string };
};

const demoProjects: Project[] = [
  {
    id: "p1",
    name: "MovieHub",
    subtitle: "Full-stack MERN movie website",
    description:
      "Role-based pages (Viewer/Editor/Marketing), Dockerized Node+MongoDB, favorites & watch history, genre filters.",
    tags: ["Full-Stack", "Node.js", "MongoDB", "Docker", "Frontend"],
    stars: 123,
    updatedAt: "2025-10-28",
    cover:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1600&auto=format&fit=crop",
    links: { repo: "#", demo: "#" },
  },
  {
    id: "p2",
    name: "Wildfire ML",
    subtitle: "Geospatial modeling & EDA dashboard",
    description:
      "Alaska wildfire dataset; features: topography, weather indices; KMeans clustering & regression pipelines.",
    tags: ["Machine Learning", "Python", "EDA", "Visualization"],
    stars: 89,
    updatedAt: "2025-10-23",
    cover:
      "https://images.unsplash.com/photo-1502303756788-0e6ef78f387f?q=80&w=1600&auto=format&fit=crop",
    links: { repo: "#", demo: "#" },
  },
  {
    id: "p3",
    name: "AlgoBench",
    subtitle: "Algorithm runtime comparison",
    description:
      "Static site comparing sorting & graph algorithms with JSON-fed charts and clean UX.",
    tags: ["Algorithms", "Frontend", "Charts"],
    stars: 57,
    updatedAt: "2025-10-18",
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
    links: { repo: "#", demo: "#" },
  },
  {
    id: "p4",
    name: "ShowCaseAI",
    subtitle: "AI-driven project showcase builder",
    description:
      "Tailwind + React boilerplate with hero banner, cards grid, and AI-ready placeholders.",
    tags: ["Frontend", "React", "Tailwind"],
    stars: 31,
    updatedAt: "2025-11-01",
    cover:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    links: { repo: "#", demo: "#" },
  },
];

const allTags = Array.from(new Set(demoProjects.flatMap((p) => p.tags))).sort();
const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

function TagChip({ label, active, onToggle }: { label: string; active: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={cx(
        "px-3 py-1 rounded-full text-sm border transition shadow-sm",
        active
          ? "bg-black text-white border-black"
          : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
      )}
    >
      {label}
    </button>
  );
}

function Card({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="group relative rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={project.cover}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
            <p className="text-sm text-gray-600 mt-0.5">{project.subtitle}</p>
          </div>
          <div className="flex items-center gap-1 text-gray-700">
            <Star className="h-4 w-4" />
            <span className="text-sm font-medium">{project.stars}</span>
          </div>
        </div>

        <p className="text-sm text-gray-700 mt-3 line-clamp-2">{project.description}</p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs rounded-full bg-gray-100 px-2.5 py-1 text-gray-700">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm">
            <a
              href={project.links.repo}
              target="_blank"
              className="inline-flex items-center gap-1 text-gray-700 hover:text-black"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" /> Repo
            </a>
            <a
              href={project.links.demo}
              target="_blank"
              className="inline-flex items-center gap-1 text-gray-700 hover:text-black"
              rel="noreferrer"
            >
              <ExternalLink className="h-4 w-4" /> Live
            </a>
          </div>

          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1 rounded-xl border border-gray-200 px-3 py-1.5 text-sm hover:border-gray-300"
          >
            Details <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function QuickView({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div className="fixed inset-0 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="absolute left-1/2 top-1/2 w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-gray-100 p-4">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="inline-flex size-8 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-4">
              <div className="aspect-[16/9] overflow-hidden rounded-xl">
                <img src={project.cover} alt={project.name} className="h-full w-full object-cover" />
              </div>

              <p className="mt-4 text-sm text-gray-700 leading-6">{project.description}</p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-gray-100 px-2.5 py-1 text-gray-700">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <Star className="h-4 w-4" />
                  <span className="text-sm font-medium">{project.stars} stars</span>
                </div>
                <div className="text-sm text-gray-500">Updated: {project.updatedAt}</div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-1.5 text-sm hover:border-gray-300"
                >
                  <Github className="h-4 w-4" /> Open Repo
                </a>
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-1.5 text-sm hover:border-gray-300"
                >
                  <ExternalLink className="h-4 w-4" /> Open Live
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ShowcaseGrid() {
  const [q, setQ] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [sort, setSort] = useState<"recency" | "stars" | "name">("recency");
  const [selected, setSelected] = useState<Project | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    const byText = (p: Project) =>
      (p.name + " " + p.subtitle + " " + p.description).toLowerCase().includes(q.toLowerCase());
    const byTags = (p: Project) => activeTags.length === 0 || activeTags.every((t) => p.tags.includes(t));
    let arr = demoProjects.filter((p) => byText(p) && byTags(p));
    if (sort === "stars") arr.sort((a, b) => b.stars - a.stars);
    else if (sort === "name") arr.sort((a, b) => a.name.localeCompare(b.name));
    else arr.sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt));
    return arr;
  }, [q, activeTags, sort]);

  const toggleTag = (t: string) =>
    setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  return (
    <div className="min-h-[60vh] bg-gradient-to-b from-slate-50/0 to-white">
      {/* Top bar */}
      <header className="mx-auto max-w-6xl px-6 pt-4 pb-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm shadow-sm outline-none placeholder:text-gray-400 focus:border-gray-300"
              placeholder="Search projects, tech, keywords…"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters((v) => !v)}
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 px-3 py-2 text-sm hover:border-gray-300"
            >
              <Filter className="h-4 w-4" /> Filters
            </button>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as any)}
              className="rounded-2xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm"
            >
              <option value="recency">Sort: Recent</option>
              <option value="stars">Sort: Stars</option>
              <option value="name">Sort: Name</option>
            </select>
          </div>
        </div>

        {/* Filters row */}
        <AnimatePresence initial={false}>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-3 overflow-hidden"
            >
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
                  <Tags className="h-4 w-4" /> Choose tags to filter
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((t) => (
                    <TagChip key={t} label={t} active={activeTags.includes(t)} onToggle={() => toggleTag(t)} />
                  ))}
                  {activeTags.length > 0 && (
                    <button
                      onClick={() => setActiveTags([])}
                      className="ml-auto text-sm text-gray-600 underline decoration-gray-300 underline-offset-4 hover:text-black"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Grid */}
      <main className="mx-auto max-w-6xl px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 p-12 text-center text-gray-600">
            No projects match your filters.
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>{filtered.map((p) => <Card key={p.id} project={p} onOpen={setSelected} />)}</AnimatePresence>
          </motion.div>
        )}
      </main>

      <QuickView project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
