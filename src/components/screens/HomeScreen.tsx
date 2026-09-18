import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Target,
  FileCheck,
  Map,
  RotateCcw,
  CheckCircle2,
  TrendingUp,
  BrainCircuit,
  GraduationCap,
  Briefcase,
  Users,
} from 'lucide-react';
import { TargetJob } from '../../types';

interface HomeScreenProps {
  onGetStarted: () => void;
  onSelectJobAndStart: (jobId: string) => void;
  targetJobs: TargetJob[];
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onGetStarted,
  onSelectJobAndStart,
  targetJobs,
}) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-10 sm:pt-16 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI-Powered Career Readiness for Students & Graduates</span>
            </div>

            {/* Tagline & Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Learn the skills your dream job{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-600">
                actually needs.
              </span>
            </h1>

            {/* Platform Explanation */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              SkillForge reverse-engineers current tech job postings to identify the exact core languages, tools, and computer science concepts employers demand. Then, it crafts a personalized, step-by-step roadmap with adaptive quizzes and scheduled revision so you graduate job-ready.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <button
                id="hero-get-started-btn"
                onClick={onGetStarted}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all cursor-pointer"
              >
                <span>Get Started — Choose Target Job</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="hero-quick-sample-btn"
                onClick={() => onSelectJobAndStart('software-developer')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-medium text-base shadow-xs transition-colors cursor-pointer"
              >
                <span>View Software Developer Path</span>
              </button>
            </div>

            {/* Value metrics strip */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200/80 max-w-2xl mx-auto text-left">
              <div>
                <p className="text-2xl font-bold text-slate-900">100%</p>
                <p className="text-xs text-slate-500 font-medium">Job-Role Aligned</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">0 Fluff</p>
                <p className="text-xs text-slate-500 font-medium">No Irrelevant Modules</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">4x</p>
                <p className="text-xs text-slate-500 font-medium">Higher Retention</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">Free</p>
                <p className="text-xs text-slate-500 font-medium">Student Prototype</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Job Quick Selection Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase">
              Target Job Intakes
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Select what you want to become
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Click any in-demand career below to immediately explore its required skills and roadmap.
            </p>
          </div>
          <button
            onClick={onGetStarted}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1 cursor-pointer"
          >
            <span>View all roles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {targetJobs.map((job) => (
            <div
              key={job.id}
              id={`quick-job-card-${job.id}`}
              onClick={() => onSelectJobAndStart(job.id)}
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {job.category}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {job.marketDemandLevel}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {job.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                  {job.tagline}
                </p>

                {/* Skills Preview Badges */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key Required Skills:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {job.skills.slice(0, 4).map((s) => (
                      <span
                        key={s.id}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium"
                      >
                        {s.name}
                      </span>
                    ))}
                    {job.skills.length > 4 && (
                      <span className="text-[11px] px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 font-medium">
                        +{job.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{job.averageSalary}</span>
                <span className="font-semibold text-indigo-600 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                  Build Path <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 3-Step Educational Workflow */}
      <section className="bg-slate-100/70 border-y border-slate-200/80 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase">
              How SkillForge Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              From college ambiguity to hired engineer
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Most online tutorials teach isolated syntax without context. SkillForge gives you an end-to-end, employer-aligned game plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs relative">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                1. Job-Role Skill Reverse Engineering
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Choose your target job. SkillForge scans industry postings to pull the exact technologies, design patterns, and CS fundamentals required for hire.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs relative">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                2. Ordered, Bite-Sized Learning Roadmap
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Step-by-step ordered milestones with clear &ldquo;Why this skill is included&rdquo; justifications. Each module includes a rapid concept guide and interactive knowledge check.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs relative">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                3. Intelligent Active Recall & Revision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Forgetfulness kills job interviews. SkillForge automatically schedules flash revisions at 1, 3, 7, and 14 days so skills stay locked in your working memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Value Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200">
            <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Targeted Curriculum</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                No random disconnected tutorials. Every topic maps directly to real job requirements.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Adaptive Quizzes</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Instant interactive feedback with detailed explanations on both right and wrong answers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200">
            <div className="p-2.5 rounded-lg bg-amber-50 text-amber-600 shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Automated Retention Scheduling</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Prevents the forgetting curve by scheduling timely active recall flashcards before you forget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to build your personalized path?
          </h2>
          <p className="text-indigo-200 text-sm sm:text-base max-w-xl mx-auto">
            Choose your target career in seconds. Get an immediate skill gap analysis and step-by-step roadmap tailored to your schedule.
          </p>
          <div className="pt-2">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-indigo-900 font-bold text-base hover:bg-indigo-50 shadow-lg transition-colors cursor-pointer"
            >
              <span>Launch Goal Intake</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
