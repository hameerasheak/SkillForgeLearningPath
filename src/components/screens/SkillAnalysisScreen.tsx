import React, { useState } from 'react';
import {
  FileCheck,
  Map,
  ArrowRight,
  TrendingUp,
  Award,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Sliders,
  RotateCcw,
  Briefcase,
} from 'lucide-react';
import { TargetJob, SkillItem, SkillProficiency } from '../../types';

interface SkillAnalysisScreenProps {
  selectedJob: TargetJob;
  onViewLearningPath: () => void;
  onBackToIntake: () => void;
}

export const SkillAnalysisScreen: React.FC<SkillAnalysisScreenProps> = ({
  selectedJob,
  onViewLearningPath,
  onBackToIntake,
}) => {
  // Local state for interactive skill status adjustment
  const [skills, setSkills] = useState<SkillItem[]>(selectedJob.skills);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Update a skill's status/proficiency
  const handleStatusChange = (skillId: string, newStatus: SkillProficiency) => {
    setSkills((prev) =>
      prev.map((s) => (s.id === skillId ? { ...s, status: newStatus } : s))
    );
  };

  const categories = ['All', ...Array.from(new Set(skills.map((s) => s.category)))];

  const filteredSkills =
    filterCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === filterCategory);

  const getStatusBadgeClass = (status: SkillProficiency) => {
    switch (status) {
      case 'Mastered':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Intermediate':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Beginner':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Required':
      default:
        return 'bg-rose-50 text-rose-700 border-rose-200';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Step 2: Skill Gap & Requirements Analysis</span>
            </div>

            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {selectedJob.title}
              </h1>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                {selectedJob.category}
              </span>
            </div>

            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              SkillForge synthesized data from technical job requisitions. Below are the mandatory competencies interviewers will evaluate. Adjust your current proficiency to customize your path.
            </p>
          </div>

          {/* Quick Metrics Badge Card */}
          <div className="flex items-center gap-4 bg-slate-50 border border-slate-200/80 rounded-xl p-4 shrink-0">
            <div>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Industry Match Score
              </p>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-black text-indigo-600">
                  {selectedJob.marketMatchScore}%
                </span>
                <span className="text-xs font-bold text-emerald-600">High Demand</span>
              </div>
            </div>
            <div className="h-9 w-px bg-slate-200" />
            <div>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Active Tech Roles
              </p>
              <p className="text-sm font-bold text-slate-900 mt-0.5">
                {selectedJob.openingsCount}
              </p>
            </div>
          </div>
        </div>

        {/* Action button in header */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Identified Competencies:</span>
            <span>{skills.length} core technical areas</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToIntake}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Change Target Role
            </button>
            <button
              id="view-learning-path-header-btn"
              onClick={onViewLearningPath}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
            >
              <span>View My Learning Path</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-slate-500 mr-1">Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                filterCategory === cat
                  ? 'bg-slate-900 text-white font-semibold'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-400">
          Tip: Click any status pill to update your current starting knowledge.
        </div>
      </div>

      {/* Required Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            id={`skill-card-${skill.id}`}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-slate-900">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {skill.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Priority: <strong className="text-slate-700">{skill.priority}</strong>
                  </p>
                </div>

                {/* Status Dropdown/Toggle */}
                <div className="relative">
                  <select
                    value={skill.status}
                    onChange={(e) =>
                      handleStatusChange(skill.id, e.target.value as SkillProficiency)
                    }
                    className={`text-xs font-bold px-2.5 py-1 rounded-full border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${getStatusBadgeClass(
                      skill.status
                    )}`}
                  >
                    <option value="Required">Status: Required</option>
                    <option value="Beginner">Status: Beginner</option>
                    <option value="Intermediate">Status: Intermediate</option>
                    <option value="Mastered">Status: Mastered</option>
                  </select>
                </div>
              </div>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                {skill.description}
              </p>
            </div>

            {/* Demand & Proficiency Metrics */}
            <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">
                  Hiring Demand in {selectedJob.title}:
                </span>
                <span className="font-bold text-indigo-600">
                  {skill.marketDemand}% of job postings
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full"
                  style={{ width: `${skill.marketDemand}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Primary Action Footer Banner */}
      <div className="bg-indigo-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 font-bold text-lg">
            <Sparkles className="w-5 h-5 text-indigo-300" />
            <span>Ready to see your personalized learning roadmap?</span>
          </div>
          <p className="text-xs sm:text-sm text-indigo-200">
            We have sequenced these {skills.length} skills into an ordered milestone path with real-world practice modules.
          </p>
        </div>

        <button
          id="view-learning-path-footer-btn"
          onClick={onViewLearningPath}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-indigo-900 font-bold text-sm hover:bg-indigo-50 shadow-md transition-colors shrink-0 cursor-pointer"
        >
          <span>View My Learning Path</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
