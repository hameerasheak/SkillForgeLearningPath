import React, { useState } from 'react';
import {
  Map,
  CheckCircle2,
  Clock,
  PlayCircle,
  Sparkles,
  ArrowRight,
  BookOpen,
  HelpCircle,
  RotateCcw,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { TargetJob, RoadmapStep, StepStatus } from '../../types';

interface LearningPathScreenProps {
  selectedJob: TargetJob;
  roadmapSteps: RoadmapStep[];
  onStartLearningStep: (step: RoadmapStep) => void;
  onUpdateStepStatus: (stepId: string, status: StepStatus) => void;
  onNavigateToQuiz: (topicId: string) => void;
}

export const LearningPathScreen: React.FC<LearningPathScreenProps> = ({
  selectedJob,
  roadmapSteps,
  onStartLearningStep,
  onUpdateStepStatus,
  onNavigateToQuiz,
}) => {
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [expandedStepId, setExpandedStepId] = useState<string | null>(roadmapSteps[1]?.id || roadmapSteps[0]?.id);

  const completedCount = roadmapSteps.filter((s) => s.status === 'Completed').length;
  const inProgressCount = roadmapSteps.filter((s) => s.status === 'In Progress').length;
  const totalHours = roadmapSteps.reduce((acc, s) => acc + s.estimatedHours, 0);
  const progressPercent = Math.round((completedCount / roadmapSteps.length) * 100);

  const filteredSteps =
    filterStatus === 'All'
      ? roadmapSteps
      : roadmapSteps.filter((s) => s.status === filterStatus);

  const getStatusBadge = (status: StepStatus) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Check className="w-3 h-3" /> Completed
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
            <PlayCircle className="w-3 h-3" /> In Progress
          </span>
        );
      case 'Not Started':
      default:
        return (
          <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
            Not Started
          </span>
        );
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header & Overview Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold mb-2">
              <Map className="w-3.5 h-3.5" />
              <span>Step 3: Personalized Learning Path</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {selectedJob.title} Career Roadmap
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              An ordered sequence of technical competencies designed to eliminate knowledge gaps.
            </p>
          </div>

          {/* Overall Stats Pill */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-3 rounded-xl shrink-0">
            <div className="text-right">
              <p className="text-[11px] font-semibold text-slate-500 uppercase">Roadmap Progress</p>
              <p className="text-lg font-bold text-slate-900">
                {completedCount} of {roadmapSteps.length} Steps
              </p>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-indigo-600/20 border-t-indigo-600 flex items-center justify-center font-bold text-xs text-indigo-600">
              {progressPercent}%
            </div>
          </div>
        </div>

        {/* Progress Bar & Summary */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span>
              <strong>{completedCount}</strong> completed &bull; <strong>{inProgressCount}</strong> in progress &bull;{' '}
              <strong>{roadmapSteps.length - completedCount - inProgressCount}</strong> remaining
            </span>
            <span className="font-semibold text-slate-700">~{totalHours} Total Hours</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-indigo-600 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Status Filter Bar */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Filter:</span>
            {(['All', 'In Progress', 'Completed', 'Not Started'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`text-xs px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                  filterStatus === status
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <p className="text-xs text-slate-400">
            Click any step to expand details and launch interactive modules.
          </p>
        </div>
      </div>

      {/* Ordered Roadmap Steps */}
      <div className="space-y-4">
        {filteredSteps.map((step) => {
          const isExpanded = expandedStepId === step.id;
          const isCurrentActive = step.status === 'In Progress';

          return (
            <div
              key={step.id}
              id={`roadmap-step-${step.id}`}
              className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                isCurrentActive
                  ? 'border-indigo-400 shadow-md ring-1 ring-indigo-500/20'
                  : 'border-slate-200 shadow-xs hover:border-slate-300'
              }`}
            >
              {/* Step Summary Row */}
              <div
                onClick={() => setExpandedStepId(isExpanded ? null : step.id)}
                className="p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {/* Step Number Circle */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                      step.status === 'Completed'
                        ? 'bg-emerald-500 text-white'
                        : step.status === 'In Progress'
                        ? 'bg-indigo-600 text-white shadow-xs shadow-indigo-600/30'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {step.status === 'Completed' ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      `0${step.stepNumber}`
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                        {step.skillName}
                      </span>
                      <span className="text-slate-300">&bull;</span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> ~{step.estimatedHours} hrs
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {getStatusBadge(step.status)}
                  <button
                    className="text-slate-400 p-1 hover:text-slate-600"
                    aria-label={isExpanded ? 'Collapse step' : 'Expand step'}
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Step Expanded Details */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-slate-100 bg-slate-50/30 space-y-5">
                  {/* CRITICAL: "Why each skill is included in the path" */}
                  <div className="bg-indigo-50/80 border border-indigo-100 rounded-xl p-4">
                    <div className="flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-indigo-900 uppercase tracking-wider">
                          Why this skill is included in your path
                        </p>
                        <p className="text-xs sm:text-sm text-indigo-950 leading-relaxed">
                          {step.whyIncluded}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Objectives Syllabus */}
                  <div>
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Key Competency Milestones:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.keyObjectives.map((obj, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2 rounded-lg border border-slate-200/80"
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 ${
                              step.status === 'Completed'
                                ? 'text-emerald-500'
                                : 'text-slate-300'
                            }`}
                          />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Action Controls */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    {/* Status switcher */}
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-500">Update Status:</span>
                      {(['Not Started', 'In Progress', 'Completed'] as const).map(
                        (st) => (
                          <button
                            key={st}
                            onClick={() => onUpdateStepStatus(step.id, st)}
                            className={`px-2.5 py-1 rounded text-xs font-medium border transition-colors cursor-pointer ${
                              step.status === st
                                ? 'bg-slate-900 text-white font-semibold border-slate-900'
                                : 'bg-white text-slate-600 hover:bg-slate-100 border-slate-200'
                            }`}
                          >
                            {st}
                          </button>
                        )
                      )}
                    </div>

                    {/* Start/Continue Learning Button */}
                    <button
                      id={`start-learning-btn-${step.id}`}
                      onClick={() => onStartLearningStep(step)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>
                        {step.status === 'Completed'
                          ? 'Review Topic & Quiz'
                          : step.status === 'In Progress'
                          ? 'Continue Learning'
                          : 'Start Learning'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
