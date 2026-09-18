import React from 'react';
import {
  LayoutDashboard,
  Map,
  RotateCcw,
  CheckCircle2,
  BookOpen,
  Award,
  Clock,
  TrendingUp,
  ArrowRight,
  Flame,
  Calendar,
  Sparkles,
  Target,
  ChevronRight,
} from 'lucide-react';
import { TargetJob, RoadmapStep, RevisionItem, LearningTopic } from '../../types';
import { MOCK_TOPICS } from '../../data/mockData';

interface DashboardScreenProps {
  selectedJob: TargetJob;
  roadmapSteps: RoadmapStep[];
  revisionItems: RevisionItem[];
  quizScores: Record<string, { score: number; total: number; percentage: number; timestamp: string }>;
  activeTopicId: string;
  onNavigateToRoadmap: () => void;
  onNavigateToRevision: () => void;
  onNavigateToTopic: (topicId: string) => void;
  onNavigateToIntake: () => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
  selectedJob,
  roadmapSteps,
  revisionItems,
  quizScores,
  activeTopicId,
  onNavigateToRoadmap,
  onNavigateToRevision,
  onNavigateToTopic,
  onNavigateToIntake,
}) => {
  const completedSteps = roadmapSteps.filter((s) => s.status === 'Completed');
  const inProgressStep =
    roadmapSteps.find((s) => s.status === 'In Progress') || roadmapSteps[0];
  const progressPercent = Math.round(
    (completedSteps.length / roadmapSteps.length) * 100
  );

  const activeTopic = MOCK_TOPICS[activeTopicId] || MOCK_TOPICS['topic-java-oop'];

  const revisionsDueCount = revisionItems.filter((r) =>
    r.dueLabel.includes('today')
  ).length;

  // Calculate average quiz performance
  const scoreEntries = Object.values(quizScores);
  const averageQuizPercent =
    scoreEntries.length > 0
      ? Math.round(
          scoreEntries.reduce((acc, curr) => acc + curr.percentage, 0) /
            scoreEntries.length
        )
      : 85; // default realistic benchmark for demo

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Welcome Header */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold mb-2">
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Student Performance Overview</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Learning Progress Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Tracking your readiness for{' '}
            <strong className="text-indigo-600 font-bold">
              {selectedJob.title}
            </strong>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onNavigateToIntake}
            className="px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Switch Target Role
          </button>
          <button
            onClick={onNavigateToRoadmap}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
          >
            <span>View Roadmap</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* High-Level Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Overall Learning Progress */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Overall Progress
            </span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">
              {progressPercent}%
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {completedSteps.length} of {roadmapSteps.length} Steps Completed
            </p>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-indigo-600 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Card 2: Completed Skills */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Skills Mastered
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">
              {completedSteps.length}{' '}
              <span className="text-sm font-semibold text-slate-400">
                / {selectedJob.skills.length}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Verified by quiz assessments
            </p>
          </div>
          <p className="text-[11px] font-medium text-emerald-600">
            {selectedJob.skills.length - completedSteps.length} skills to achieve job readiness
          </p>
        </div>

        {/* Card 3: Upcoming Revisions */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Due Revisions
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <RotateCcw className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">
              {revisionsDueCount}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Topics scheduled for active recall
            </p>
          </div>
          <button
            onClick={onNavigateToRevision}
            className="text-xs font-bold text-amber-700 hover:text-amber-900 inline-flex items-center gap-1 cursor-pointer"
          >
            Review topics now <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Card 4: Quiz Performance */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Quiz Accuracy
            </span>
            <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">
              {averageQuizPercent}%
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Average mastery across {Math.max(1, scoreEntries.length)} assessments
            </p>
          </div>
          <p className="text-[11px] font-medium text-violet-600">
            Solid technical comprehension
          </p>
        </div>
      </div>

      {/* Main Row: Current Learning Topic & Upcoming Revisions Widget */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Spotlight: Current Learning Topic */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Current Learning Topic</span>
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                Active Module
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              {activeTopic.title}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Part of {selectedJob.title} Roadmap &bull; ~{activeTopic.estimatedMinutes} minutes
            </p>

            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              {activeTopic.summary}
            </p>

            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-2">
              {activeTopic.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium"
                >
                  &bull; {takeaway.slice(0, 45)}...
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400">
              Status: In Progress
            </span>
            <button
              id="resume-learning-btn"
              onClick={() => onNavigateToTopic(activeTopic.id)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
            >
              <span>Resume Learning & Quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Revisions Callout Box */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Upcoming Revisions
              </h3>
              <Calendar className="w-4 h-4 text-slate-400" />
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Calibrated by the forgetting curve algorithm:
            </p>

            <div className="mt-4 space-y-2.5">
              {revisionItems.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl border border-slate-100 bg-slate-50/50 space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">
                      {item.title}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        item.dueLabel.includes('today')
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {item.dueLabel.includes('today') ? 'Due Today' : 'Tomorrow'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Skill: {item.skillName}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onNavigateToRevision}
              className="w-full py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-600" />
              <span>Go to Revision Hub</span>
            </button>
          </div>
        </div>
      </div>

      {/* Skill Mastery Breakdown */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Required Skills Readiness Breakdown
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Compares your progress against junior-level technical interview benchmarks.
            </p>
          </div>
          <button
            onClick={onNavigateToRoadmap}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Open Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {selectedJob.skills.map((skill) => {
            const isCompleted = completedSteps.some(
              (s) => s.skillName.toLowerCase().includes(skill.name.toLowerCase())
            );
            const proficiency = isCompleted
              ? 85
              : skill.userProficiency || (skill.status === 'Intermediate' ? 65 : 40);

            return (
              <div
                key={skill.id}
                className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900">{skill.name}</span>
                    <span className="text-[10px] text-slate-400 ml-2">
                      ({skill.category})
                    </span>
                  </div>
                  <span className="font-bold text-indigo-600">{proficiency}%</span>
                </div>

                <div className="w-full h-2 rounded-full bg-slate-200/70 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      proficiency >= 80
                        ? 'bg-emerald-500'
                        : proficiency >= 60
                        ? 'bg-indigo-600'
                        : 'bg-amber-500'
                    }`}
                    style={{ width: `${proficiency}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Priority: {skill.priority}</span>
                  <span>Market Demand: {skill.marketDemand}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
