import { useEffect, useRef, useState } from "react";
/* import Screenshot from "./assets/screenshot.png " */

import screenshot from "../screenshot.png";

/* ─── Data ───────────────────────── */
const projects = [
  {
    id: "01",
    type: "Front-end",
    title: "RwaCrypto",
    desc: "Real time Crypto Tracker that updates overtime.",
    tags: ["React", "Css", "reChart", "CoinGecko API"],
    img: screenshot,
    link: "https://rwacrypto.netlify.app/",
  },
  {
    id: "02",
    type: "Frontend",
    title: "Travelista",
    desc: "A responsive travel website to explore destinations and plan your next adventure.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    link: "#",
  },
  {
    id: "03",
    type: "Full Stack",
    title: "DevConnect",
    desc: "A developer social platform to connect, share ideas and grow together.",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    link: "#",
  },
];

/* ─── useInView Hook ─────────────── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}

/* ─── Project Row ────────────────── */
function ProjectRow({ project, index }) {
  const [ref, inView] = useInView();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center border-2 p-5 rounded-[18px] gap-8 md:gap-0 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div
        className={`w-full md:w-1/2 flex  ${
          isEven
            ? "md:justify-start md:pr-10 lg:pr-16"
            : "md:justify-end md:pl-10 lg:pl-16 md:order-2"
        }`}
      >
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <div className="group relative w-full max-w-sm sm:max-w-md overflow-hidden rounded-2xl shadow-lg border transition-all duration-500 hover:-translate-y-1.5">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-52 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md">
              <span className="text-xs font-black text-gray-800">
                {project.id}
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* Info */}
      <div
        className={`w-full md:w-1/2 flex ${
          isEven
            ? "md:justify-end md:pl-10 lg:pl-16"
            : "md:justify-start md:pr-10 lg:pr-16 md:order-1"
        }`}
      >
        <div
          className={`max-w-sm w-full transition-all duration-700 ${
            inView
              ? "opacity-100 translate-x-0"
              : isEven
              ? "opacity-0 translate-x-8"
              : "opacity-0 -translate-x-8"
          }`}
        >
          <p className="text-xs uppercase text-gray-400 mb-2">
            {project.type}
          </p>

          <h2 className="text-3xl font-bold mb-2">{project.title}</h2>

          <p className="text-gray-500 text-sm mb-4">{project.desc}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            className="text-sm font-bold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────── */
export const Projects = () => {

   return (
    <div id="Projects" className="min-h-screen bg-[#f7f7f5] py-28 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold mb-4">My Projects</h1>
          <p className="text-gray-500">A few Projects that I'm proud of</p>
        </div>

        <div className="flex flex-col gap-20">
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>

      </div>
    </div>
  );

}