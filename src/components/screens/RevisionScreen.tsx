import React, { useState } from 'react';
import {
  RotateCcw,
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Brain,
  Check,
  Eye,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { RevisionItem } from '../../types';

interface RevisionScreenProps {
  revisionItems: RevisionItem[];
  onCompleteRevision: (itemId: string) => void;
  onNavigateToTopic: (topicId: string) => void;
}

export const RevisionScreen: React.FC<RevisionScreenProps> = ({
  revisionItems,
  onCompleteRevision,
  onNavigateToTopic,
}) => {
  const [activeFlashcardItem, setActiveFlashcardItem] = useState<RevisionItem | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [completedRevisionIds, setCompletedRevisionIds] = useState<string[]>([]);

  const handleStartRevision = (item: RevisionItem) => {
    setActiveFlashcardItem(item);
    setShowAnswer(false);
  };

  const handleFinishFlashcard = (rating: 'hard' | 'good' | 'easy') => {
    if (activeFlashcardItem) {
      setCompletedRevisionIds((prev) => [...prev, activeFlashcardItem.id]);
      onCompleteRevision(activeFlashcardItem.id);
      setActiveFlashcardItem(null);
      setShowAnswer(false);
    }
  };

  const dueTodayCount = revisionItems.filter(
    (item) => item.dueLabel.includes('today') && !completedRevisionIds.includes(item.id)
  ).length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold mb-2">
              <RotateCcw className="w-3.5 h-3.5 text-amber-600" />
              <span>Step 4: Active Recall & Scheduled Revisions</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Retention & Revision Hub
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              SkillForge continuously tracks your learning timeline and schedules micro-revisions using the Ebbinghaus Spaced Repetition model to make sure skills don&apos;t fade before your interview.
            </p>
          </div>

          {/* Due Today Alert Badge */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-lg">
              {dueTodayCount}
            </div>
            <div>
              <p className="text-xs font-bold text-amber-900">
                {dueTodayCount > 0 ? 'Revisions Due Today' : 'All Caught Up!'}
              </p>
              <p className="text-[11px] text-amber-700">
                {dueTodayCount > 0 ? 'Action required to maintain retention' : 'Next review due tomorrow'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How SkillForge Schedules Revision: Explainer Card */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-2xl p-6 text-white shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
          <Brain className="w-4 h-4" />
          <span>The Retention Science Behind SkillForge</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <div className="bg-white/10 rounded-xl p-3.5 backdrop-blur-xs border border-white/10">
            <p className="text-xs font-bold text-indigo-200">Day 1: Initial Spike</p>
            <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
              Immediate quiz checks initial concept grasping right after topic study.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-3.5 backdrop-blur-xs border border-white/10">
            <p className="text-xs font-bold text-amber-300">Days 3 & 7: Active Recall</p>
            <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
              SkillForge prompts flash reviews when your memory retention drops below 65%.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-3.5 backdrop-blur-xs border border-white/10">
            <p className="text-xs font-bold text-emerald-300">Day 14+: Interview Ready</p>
            <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
              Permanent memory consolidation so you answer technical questions effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* Active Recall Flashcard Modal / Drawer */}
      {activeFlashcardItem && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-indigo-600 shadow-xl ring-4 ring-indigo-500/10 space-y-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-bold uppercase text-indigo-600 tracking-wider">
                Active Recall Mode &bull; {activeFlashcardItem.skillName}
              </span>
            </div>
            <button
              onClick={() => setActiveFlashcardItem(null)}
              className="text-xs font-semibold text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              Cancel
            </button>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {activeFlashcardItem.recallQuestion}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Pause and attempt to mentally explain or answer the question before flipping.
            </p>
          </div>

          {!showAnswer ? (
            <div className="pt-2">
              <button
                id="reveal-answer-btn"
                onClick={() => setShowAnswer(true)}
                className="w-full py-4 rounded-xl border-2 border-dashed border-indigo-300 bg-indigo-50/50 hover:bg-indigo-50 text-indigo-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Click to Reveal Model Answer & Verification</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4 pt-2">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 leading-relaxed">
                <span className="font-bold text-slate-900 block mb-1">
                  Model Technical Answer:
                </span>
                {activeFlashcardItem.answerSummary}
              </div>

              {/* Self-evaluation options */}
              <div>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                  How well did you recall this concept?
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => handleFinishFlashcard('hard')}
                    className="p-3 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Hard
                    <span className="block text-[10px] font-normal text-rose-600 mt-0.5">
                      Review tomorrow
                    </span>
                  </button>
                  <button
                    onClick={() => handleFinishFlashcard('good')}
                    className="p-3 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Good
                    <span className="block text-[10px] font-normal text-indigo-600 mt-0.5">
                      Review in 3 days
                    </span>
                  </button>
                  <button
                    onClick={() => handleFinishFlashcard('easy')}
                    className="p-3 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Mastered
                    <span className="block text-[10px] font-normal text-emerald-600 mt-0.5">
                      Review in 7 days
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Revision Due Topics List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            Scheduled Revision Queue
          </h2>
          <span className="text-xs text-slate-500">
            {revisionItems.length} topics queued
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {revisionItems.map((item) => {
            const isCompleted = completedRevisionIds.includes(item.id) || item.completed;
            const isDueToday = item.dueLabel.includes('today');
            const isDueTomorrow = item.dueLabel.includes('tomorrow');

            return (
              <div
                key={item.id}
                id={`revision-card-${item.id}`}
                className={`bg-white rounded-2xl p-5 border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isCompleted
                    ? 'border-emerald-200 bg-emerald-50/20'
                    : isDueToday
                    ? 'border-amber-300 shadow-sm ring-1 ring-amber-400/20'
                    : 'border-slate-200 shadow-xs'
                }`}
              >
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Due Label */}
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                        isCompleted
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : isDueToday
                          ? 'bg-amber-100 text-amber-800 border-amber-300'
                          : isDueTomorrow
                          ? 'bg-blue-100 text-blue-800 border-blue-300'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {isCompleted ? 'Reviewed Today!' : item.dueLabel}
                    </span>

                    <span className="text-xs font-semibold text-slate-500">
                      &bull; Skill: <strong className="text-slate-800">{item.skillName}</strong>
                    </span>

                    <span className="text-xs text-slate-400">
                      &bull; {item.nextInterval}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-1">
                    Prompt: {item.recallQuestion}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
                    <span>Last studied: {item.lastStudied}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1 font-medium text-slate-600">
                      Estimated Retention: {isCompleted ? '95%' : `${item.retentionEstimate}%`}
                    </span>
                  </div>
                </div>

                {/* Action button */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onNavigateToTopic(item.topicId)}
                    className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    Study Guide
                  </button>

                  <button
                    id={`start-revision-btn-${item.id}`}
                    onClick={() => handleStartRevision(item)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                      isCompleted
                        ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                        : isDueToday
                        ? 'bg-amber-600 hover:bg-amber-700 text-white'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{isCompleted ? 'Review Again' : 'Start Revision'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
