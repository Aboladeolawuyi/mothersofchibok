"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  Circle,
  X,
  Image as ImageIcon,
  PlayCircle,
  ArrowUpRight,
} from "lucide-react";

const goals = [
  { value: 50, suffix: "", label: "Women beneficiaries targeted" },
  { value: 500, suffix: "+", label: "Bags of groundnuts projected" },
  { value: 25, suffix: "", label: "Hectares under cultivation" },
];

type PhaseStatus = "completed" | "ongoing" | "upcoming";

type TimelinePhase = {
  title: string;
  label: string;
  period: string;
  description: string;
  status: PhaseStatus;
  summary: string;
  image?: string;
  video?: string;
  highlights?: string[];
};

const timeline: TimelinePhase[] = [
  {
    title: "Farmer Selection & Baseline Assessment",
    label: "Phase 01",
    period: "Jan - Feb 2026",
    description:
      "Beneficiaries are identified, farm needs are documented, and the 2026 support baseline is established.",
    status: "completed",
    summary:
      "Every journey begins with understanding where it starts. Baseline assessments capture existing farming practices, harvest volumes, and household needs, helping identify participating women farmers and providing the foundation for measuring progress throughout the initiative.",
    image: "/assets/images/goals/img_0035.jpeg",
    // highlights: [
    //   "Beneficiary profiling",
    //   "Land and farm needs review",
    //   "Initial documentation",
    // ],
  },
  {
    title: "Training & Farm Preparation",
    label: "Phase 02",
    period: "Mar - Apr 2026",
    description:
      "Seeds, fertilizers, tools, herbicides, and practical agronomic training are provided to the women.",
    status: "completed",
    summary:
      "Before planting begins, women farmers receive practical training in Good Agronomic Practices, including land preparation, improved seed varieties, crop management, and sustainable farming techniques. They are also provided with farming inputs and ongoing technical support throughout the season.",
    image: "/assets/images/goals/IMG_0331 2.jpg.jpeg",
    // highlights: [
    //   "Input distribution",
    //   "Good agronomic practices",
    //   "Technical support",
    // ],
  },
  {
    title: "Mid-Season Assessment",
    label: "Phase 03",
    period: "May - Jun 2026",
    description:
      "The current active stage: planting, spacing, field supervision, documentation, and early crop support.",
    status: "completed",
    summary:
      "Farming is a continuous process. Throughout the growing season, Field Agents regularly visit each farm to monitor crop development, assess field conditions, identify challenges, and provide technical guidance to help farmers achieve stronger, healthier harvests.",
    image: "/assets/images/goals/IMG_2093.jpg.jpeg",
    // highlights: [
    //   "Current active phase",
    //   "Field monitoring",
    //   "Planting documentation",
    // ],
  },
  {
    title: "Pre-Harvest Training",
    label: "Phase 04",
    period: "Jul - Aug 2026",
    description:
      "Crop health, expected yield, field challenges, and corrective actions are reviewed and documented.",
    status: "ongoing",
    image: "/assets/images/goals/IMG_0066.JPG.jpeg",
    
    summary:
      "As harvest approaches, women farmers receive practical training on harvesting techniques, post-harvest handling, drying, sorting, quality management, and storage. These practices help preserve quality, minimise losses, and maximise the value of every harvest.",
    // highlights: ["Crop health review", "Yield expectation", "Field correction"],
  },
  {
    title: "Harvest & Storage",
    label: "Phase 05",
    period: "Sep - Oct 2026",
    description:
      "Harvesting, drying, grading, storage, and quality control are supported to protect product value.",
    status: "upcoming",
    summary:
      "Once harvested, groundnuts are carefully dried, sorted, and stored under appropriate conditions to protect their quality and reduce post-harvest losses. Proper storage ensures that months of hard work are preserved before processing and sale.",
    // highlights: ["Harvest support", "Drying and grading", "Storage"],
  },
  {
    title: "Market Access & Off-Take",
    label: "Phase 06",
    period: "Nov - Dec 2026",
    description:
      "The harvest is connected to buyers and product partners so the women retain stronger value from their labour.",
    status: "upcoming",
    summary:
      "The final stage connects women farmers with trusted processors, distributors, and buyers through structured off-take arrangements. Reliable market access helps ensure that successful harvests translate into sustainable household incomes.",
    // highlights: ["Buyer connection", "Product value chain", "Income cycle"],
  },
];

const statusStyle: Record<
  PhaseStatus,
  {
    label: string;
    icon: React.ReactNode;
    card: string;
    connector: string;
    dot: string;
    number: string;
    badge: string;
  }
> = {
  completed: {
    label: "Done",
    icon: <CheckCircle2 className="h-5 w-5" />,
    card:
      "border-emerald-400/60 bg-emerald-950/35 text-white shadow-[0_0_35px_rgba(16,185,129,0.16)]",
    connector: "bg-emerald-400",
    dot: "bg-emerald-400 ring-emerald-400/30",
    number: "text-emerald-300",
    badge: "border-emerald-300/40 bg-emerald-400/15 text-emerald-200",
  },
  ongoing: {
    label: "In progress",
    icon: <Clock3 className="h-5 w-5" />,
    card:
      "border-[#D4AF37] bg-[#D4AF37]/12 text-white shadow-[0_0_45px_rgba(212,175,55,0.28)] animate-[mocGoldPulse_1.45s_ease-in-out_infinite]",
    connector:
      "bg-[#D4AF37] animate-[mocLinePulse_1.45s_ease-in-out_infinite]",
    dot: "bg-[#D4AF37] ring-[#D4AF37]/35 animate-[mocDotPulse_1.1s_ease-in-out_infinite]",
    number: "text-[#D4AF37]",
    badge:
      "border-[#D4AF37]/50 bg-[#D4AF37]/20 text-[#FFE8A3] animate-[mocBadgePulse_1.45s_ease-in-out_infinite]",
  },
  upcoming: {
    label: "Not started",
    icon: <Circle className="h-5 w-5" />,
    card: "border-white/10 bg-white/[0.035] grayscale text-white/55",
    connector: "bg-white/15",
    dot: "bg-neutral-800 ring-white/10",
    number: "text-white/30",
    badge: "border-white/10 bg-black/40 text-white/45",
  },
};

function PhaseDialog({
  phase,
  onClose,
}: {
  phase: TimelinePhase;
  onClose: () => void;
}) {
  const style = statusStyle[phase.status];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        initial={{ opacity: 0, y: 26, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 26, scale: 0.96 }}
        transition={{ duration: 0.28 }}
        className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-neutral-950 text-white shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 rounded-full bg-white p-2 text-black transition hover:bg-[#D4AF37]"
          aria-label="Close timeline details"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-[320px] bg-neutral-900 lg:min-h-full">
            {phase.image ? (
              <img
                src={phase.image}
                alt={phase.title}
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.25),transparent_42%)]" />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/25 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] ${style.badge}`}
              >
                {style.icon}
                {style.label}
              </span>

              <h3 className="mt-5 font-guthenBloots text-5xl leading-none md:text-7xl">
                {phase.label}
              </h3>
            </div>
          </div>

          <div className="p-7 md:p-10">
            <p className="font-productsFont text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
              {phase.period}
            </p>

            <h2 className="mt-4 font-productsFont text-3xl font-semibold leading-tight md:text-4xl">
              {phase.title}
            </h2>

            <p className="mt-5 font-productsFont text-base leading-8 text-white/75 md:text-lg">
              {phase.summary}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {(phase.highlights || []).map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* <div className="mt-7 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center gap-3">
               <ImageIcon className="h-5 w-5 text-[#D4AF37]" /> 
                <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                  Media documentation
                </p> 
              </div>

              { <p className="mt-4 text-sm leading-7 text-white/65">
                This area is ready for verified photos, videos, field notes,
                reports, and partner updates once each stage is documented.
              </p> }

              {phase.video && (
                <a
                  href={phase.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-bold text-black"
                >
                  <PlayCircle className="h-4 w-4" />
                  Watch phase video
                </a>
              )}
            </div> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GoalsTimeline() {
  const [selectedPhase, setSelectedPhase] = useState<TimelinePhase | null>(
    null
  );

  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-neutral-950 py-24 text-white font-productsFont"
      style={{
        // backgroundImage: "url('/assets/images/moc-background-dark.jpg')",
      }}
    >
      <style>{`
        @keyframes mocGoldPulse {
          0%, 100% { box-shadow: 0 0 26px rgba(212,175,55,.22); border-color: rgba(212,175,55,.72); }
          50% { box-shadow: 0 0 62px rgba(212,175,55,.62); border-color: rgba(255,232,163,1); }
        }

        @keyframes mocDotPulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.22); filter: brightness(1.8); }
        }

        @keyframes mocLinePulse {
          0%, 100% { opacity: .55; }
          50% { opacity: 1; }
        }

        @keyframes mocBadgePulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.55); }
        }
      `}</style>

      <div className="absolute inset-0 bg-black/72" />
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -right-24 top-72 h-80 w-80 rounded-full bg-[#D4AF37]/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* GOALS SECTION */}
        <section id="goals" className="text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-[#D4AF37]">
            2026 Farming Cycle
          </p>

          <h2 className="mt-4 font-guthenBloots text-6xl leading-none md:text-8xl">
            Goals
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.1, duration: 0.55 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 text-center backdrop-blur-md"
              >
                <div className="font-afolkalips text-7xl leading-none text-white md:text-8xl">
                  <CountUp
                    end={goal.value}
                    duration={2.5}
                    suffix={goal.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>

                <p className="mt-3 text-xs uppercase tracking-[0.28em] text-white/60">
                  {goal.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section id="farming-timeline" className="mt-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.45em] text-[#D4AF37]">
              Progress Tracker
            </p>

            <h2 className="mt-4 font-guthenBloots text-6xl leading-none md:text-8xl">
              Timeline
            </h2>
          </div>
          <div className="mt-16 overflow-x-auto pb-6">
            <div className="relative min-w-[1180px] px-3">
              <div className="absolute left-[7%] right-[7%] top-[84px] h-[3px] overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[42%] bg-emerald-400" />
                <div className="h-full w-[17%] bg-[#D4AF37] animate-[mocLinePulse_1.45s_ease-in-out_infinite]" />
              </div>

              <div className="grid grid-cols-6 gap-4">
                {timeline.map((phase, index) => {
                  const style = statusStyle[phase.status];

                  return (
                    <motion.button
                      type="button"
                      key={phase.title}
                      onClick={() => setSelectedPhase(phase)}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.55, delay: index * 0.08 }}
                      className="group relative text-left outline-none"
                    >
                      <div className="relative z-10 mx-auto mb-7 flex h-16 w-16 items-center justify-center">
                        {phase.status === "ongoing" && (
                          <>
                            <span className="absolute h-16 w-16 rounded-full bg-[#D4AF37]/20 animate-ping" />
                            <span className="absolute h-24 w-24 rounded-full border border-[#D4AF37]/35 animate-[mocBadgePulse_1.45s_ease-in-out_infinite]" />
                          </>
                        )}

                        <span
                          className={`relative flex h-12 w-12 items-center justify-center rounded-full ring-[10px] ${style.dot}`}
                        >
                          <span className="text-black">{style.icon}</span>
                        </span>
                      </div>

                      <article
                        className={`flex min-h-[230px] flex-col rounded-[30px] border p-5 transition-all duration-500 group-hover:-translate-y-2 group-focus-visible:ring-2 group-focus-visible:ring-[#D4AF37] ${style.card}`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span
                            className={`text-xs uppercase tracking-[0.28em] ${style.number}`}
                          >
                            {phase.label}
                          </span>

                          <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:text-[#D4AF37]" />
                        </div>

                        <h3 className="mt-5 text-xl font-semibold leading-tight text-white">
                          {phase.title}
                        </h3>

                        <div className="mt-4 flex flex-wrap items-center gap-2">
                          <span
                            className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${style.badge}`}
                          >
                            {style.label}
                          </span>

                          <span className="text-xs text-white/45">
                            {phase.period}
                          </span>
                        </div>

                        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37] opacity-80 transition group-hover:opacity-100">
                          Open details
                        </span>
                      </article>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-4 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.22em] text-white/50">
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              Done
            </span>

            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#D4AF37] animate-[mocDotPulse_1.1s_ease-in-out_infinite]" />
              In progress
            </span>

            <span className="inline-flex items-center gap-2 grayscale">
              <span className="h-3 w-3 rounded-full bg-neutral-800 ring-1 ring-white/20" />
              Not started
            </span>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedPhase && (
          <PhaseDialog
            phase={selectedPhase}
            onClose={() => setSelectedPhase(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}