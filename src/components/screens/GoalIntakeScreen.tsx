import React, { useState } from 'react';
import {
  Target,
  Sparkles,
  CheckCircle2,
  Clock,
  Calendar,
  GraduationCap,
  ArrowRight,
  TrendingUp,
  Search,
  Zap,
} from 'lucide-react';
import { TargetJob, UserGoalProfile } from '../../types';

interface GoalIntakeScreenProps {
  targetJobs: TargetJob[];
  selectedJobId: string;
  onJobSelect: (jobId: string) => void;
  onGeneratePath: (jobId: string, profile: UserGoalProfile) => void;
  isGenerating: boolean;
}

export const GoalIntakeScreen: React.FC<GoalIntakeScreenProps> = ({
  targetJobs,
  selectedJobId,
  onJobSelect,
  onGeneratePath,
  isGenerating,
}) => {
  const [currentLevel, setCurrentLevel] = useState<UserGoalProfile['currentLevel']>('Beginner / Student');
  const [weeklyHours, setWeeklyHours] = useState<number>(12);
  const [targetTimeline, setTargetTimeline] = useState<UserGoalProfile['targetTimeline']>('6 Months (Balanced)');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = targetJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleGenerate = () => {
    onGeneratePath(selectedJobId, {
      targetJobId: selectedJobId,
      currentLevel,
      weeklyHours,
      targetTimeline,
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold">
          <Target className="w-3.5 h-3.5" />
          <span>Step 1: Goal Intake & Target Career</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          What job do you want to be hired for?
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          SkillForge scans thousands of active junior and mid-level job postings to build a curriculum matched strictly to what interviewers test.
        </p>
      </div>

      {/* Main Intake Form Grid */}
      <div className="space-y-8">
        {/* Section 1: Choose Target Job */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                1. Select Target Job
              </h2>
              <p className="text-xs text-slate-500">
                Select from the high-demand industry profiles below.
              </p>
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter roles or skills..."
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Job Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredJobs.map((job) => {
              const isSelected = job.id === selectedJobId;
              return (
                <div
                  key={job.id}
                  id={`job-option-${job.id}`}
                  onClick={() => onJobSelect(job.id)}
                  className={`p-5 rounded-xl border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/40 shadow-xs ring-2 ring-indigo-500/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base text-slate-900">
                          {job.title}
                        </span>
                        {isSelected && (
                          <span className="inline-flex items-center text-xs font-semibold text-indigo-600">
                            <CheckCircle2 className="w-4 h-4 fill-indigo-600 text-white" />
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                        {job.marketDemandLevel}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {job.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {job.skills.map((s) => (
                        <span
                          key={s.id}
                          className={`text-[11px] px-2 py-0.5 rounded font-medium ${
                            isSelected
                              ? 'bg-indigo-100 text-indigo-800'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-medium text-slate-700">
                      Avg: {job.averageSalary}
                    </span>
                    <span>{job.openingsCount}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Student Learning Profile & Pace */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Current Experience Level */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <span>Current Experience</span>
            </div>
            <p className="text-xs text-slate-500">
              Helps calibrate the initial complexity of roadmap milestones.
            </p>
            <div className="space-y-2 pt-1">
              {(['Beginner / Student', 'Intermediate', 'Career Switcher'] as const).map(
                (level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setCurrentLevel(level)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium border transition-colors flex items-center justify-between cursor-pointer ${
                      currentLevel === level
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-semibold'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{level}</span>
                    {currentLevel === level && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                    )}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Weekly Commitment */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Clock className="w-4 h-4 text-indigo-600" />
              <span>Weekly Dedication</span>
            </div>
            <p className="text-xs text-slate-500">
              Hours per week you can consistently dedicate to studying.
            </p>
            <div className="pt-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-2">
                <span>Study Pace:</span>
                <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded text-sm">
                  {weeklyHours} hrs / week
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={30}
                step={1}
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>5h (Part-time)</span>
                <span>15h</span>
                <span>30h (Full-time)</span>
              </div>
            </div>
          </div>

          {/* Target Timeline */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Calendar className="w-4 h-4 text-indigo-600" />
              <span>Target Graduation Horizon</span>
            </div>
            <p className="text-xs text-slate-500">
              When you need to begin applying to technical roles.
            </p>
            <div className="space-y-2 pt-1">
              {(
                [
                  '3 Months (Intensive)',
                  '6 Months (Balanced)',
                  '9 Months (Self-Paced)',
                ] as const
              ).map((timeline) => (
                <button
                  key={timeline}
                  type="button"
                  onClick={() => setTargetTimeline(timeline)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium border transition-colors flex items-center justify-between cursor-pointer ${
                    targetTimeline === timeline
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-semibold'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{timeline}</span>
                  {targetTimeline === timeline && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Generate Path Action Banner */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-900 font-bold text-base">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Ready to analyze requirements?</span>
            </div>
            <p className="text-xs text-slate-500">
              SkillForge will evaluate skill priorities, identify core gaps, and build your ordered path.
            </p>
          </div>

          <button
            id="generate-path-btn"
            onClick={handleGenerate}
            disabled={isGenerating}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer ${
              isGenerating
                ? 'bg-indigo-400 text-white cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/25 hover:shadow-indigo-600/35'
            }`}
          >
            {isGenerating ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Synthesizing Learning Path...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate My Learning Path</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
