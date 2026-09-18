import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Award,
  Code,
  Check,
  Calendar,
  LayoutDashboard,
} from 'lucide-react';
import { LearningTopic } from '../../types';
import { MOCK_TOPICS } from '../../data/mockData';

interface LearningQuizScreenProps {
  currentTopicId: string;
  onTopicChange: (topicId: string) => void;
  onCompleteQuiz: (topicId: string, score: number, total: number) => void;
  onNavigateToRevision: () => void;
  onNavigateToRoadmap: () => void;
  onNavigateToDashboard: () => void;
}

export const LearningQuizScreen: React.FC<LearningQuizScreenProps> = ({
  currentTopicId,
  onTopicChange,
  onCompleteQuiz,
  onNavigateToRevision,
  onNavigateToRoadmap,
  onNavigateToDashboard,
}) => {
  const topic: LearningTopic = MOCK_TOPICS[currentTopicId] || MOCK_TOPICS['topic-java-oop'];

  const [activeTab, setActiveTab] = useState<'study' | 'quiz'>('study');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Reset quiz state when topic changes
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setActiveTab('study');
  }, [currentTopicId]);

  const questions = topic.quiz;
  const currentQuestion = questions[currentQuestionIndex];
  const isSelected = selectedAnswers[currentQuestionIndex] !== undefined;

  const handleSelectOption = (optionIndex: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleCompleteQuiz = () => {
    setQuizSubmitted(true);
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });
    onCompleteQuiz(topic.id, correctCount, questions.length);
  };

  const handleRetakeQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setQuizSubmitted(false);
    setActiveTab('quiz');
  };

  // Calculate score if submitted
  const scoreCount = questions.reduce((acc, q, idx) => {
    return acc + (selectedAnswers[idx] === q.correctIndex ? 1 : 0);
  }, 0);
  const scorePercent = Math.round((scoreCount / questions.length) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Breadcrumb & Topic Selector Bar */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Interactive Learning & Assessment</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {topic.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Skill: <strong className="text-indigo-600">{topic.skillName}</strong> &bull; Estimated ~{topic.estimatedMinutes} mins
          </p>
        </div>

        {/* Quick Topic Selector Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
            Switch Module:
          </span>
          <select
            value={currentTopicId}
            onChange={(e) => onTopicChange(e.target.value)}
            className="text-xs font-medium border border-slate-300 rounded-lg px-3 py-2 bg-slate-50 text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none cursor-pointer"
          >
            {Object.values(MOCK_TOPICS).map((t) => (
              <option key={t.id} value={t.id}>
                {t.skillName}: {t.title.slice(0, 32)}...
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabs: Study Guide vs Quiz */}
      <div className="flex border-b border-slate-200 gap-6">
        <button
          onClick={() => setActiveTab('study')}
          className={`pb-3 text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
            activeTab === 'study'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>1. Concept Study Guide</span>
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`pb-3 text-sm font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
            activeTab === 'quiz'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>
            2. Knowledge Quiz ({questions.length} Questions)
          </span>
          {quizSubmitted && (
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.5 rounded-full">
              {scorePercent}%
            </span>
          )}
        </button>
      </div>

      {/* TAB 1: STUDY GUIDE */}
      {activeTab === 'study' && (
        <div className="space-y-6">
          {/* Summary Banner */}
          <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6">
            <h2 className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-1">
              Module Summary
            </h2>
            <p className="text-sm text-indigo-950 leading-relaxed font-normal">
              {topic.summary}
            </p>
          </div>

          {/* Deep Concept Overview */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Core Technical Concept
            </h3>
            <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700 whitespace-pre-line">
              {topic.conceptOverview}
            </div>

            {/* Code Snippet if applicable */}
            {topic.codeSnippet && (
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-indigo-600" />
                    {topic.codeSnippet.caption}
                  </span>
                  <span className="uppercase text-[10px] font-bold px-2 py-0.5 bg-slate-100 rounded">
                    {topic.codeSnippet.language}
                  </span>
                </div>
                <div className="bg-slate-950 text-slate-100 p-4 sm:p-5 rounded-xl text-xs font-mono overflow-x-auto shadow-inner">
                  <pre>{topic.codeSnippet.code}</pre>
                </div>
              </div>
            )}

            {/* Key Takeaways */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Key Takeaways for Technical Interviews:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topic.keyTakeaways.map((takeaway, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Study tab CTA to launch quiz */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                Ready to test your retention?
              </h4>
              <p className="text-xs text-slate-500">
                Complete a 3-minute quiz to lock in this concept and benchmark your readiness.
              </p>
            </div>
            <button
              id="start-quiz-btn"
              onClick={() => setActiveTab('quiz')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
            >
              <span>Launch Module Quiz ({questions.length} Qs)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: MULTIPLE-CHOICE QUIZ */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          {!quizSubmitted ? (
            /* Active Quiz Form */
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              {/* Question Stepper Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                    {currentQuestion.question}
                  </h3>
                </div>
                <div className="text-xs font-bold text-slate-400">
                  {Object.keys(selectedAnswers).length}/{questions.length} Answered
                </div>
              </div>

              {/* Multiple Choice Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, optIdx) => {
                  const isAnswerSelected =
                    selectedAnswers[currentQuestionIndex] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      id={`quiz-opt-${optIdx}`}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between cursor-pointer ${
                        isAnswerSelected
                          ? 'border-indigo-600 bg-indigo-50/50 text-indigo-950 font-semibold'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                            isAnswerSelected
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="text-xs sm:text-sm">{option}</span>
                      </div>
                      {isAnswerSelected && (
                        <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Navigation & Submission Controls */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={handlePrevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer ${
                    currentQuestionIndex === 0
                      ? 'text-slate-300 cursor-not-allowed'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-2">
                  {currentQuestionIndex < questions.length - 1 ? (
                    <button
                      id="next-question-btn"
                      onClick={handleNextQuestion}
                      disabled={!isSelected}
                      className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-bold cursor-pointer ${
                        !isSelected
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                          : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      }`}
                    >
                      <span>Next Question</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      id="complete-quiz-btn"
                      onClick={handleCompleteQuiz}
                      disabled={!isSelected}
                      className={`inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-xs font-bold shadow-sm cursor-pointer ${
                        !isSelected
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Complete Quiz</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Quiz Completed Results Screen */
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs text-center space-y-5">
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center font-black text-xl text-white bg-gradient-to-tr from-indigo-600 to-emerald-500 shadow-md">
                  {scorePercent}%
                </div>

                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    Quiz Completed!
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    You scored{' '}
                    <strong className="text-slate-900">
                      {scoreCount} out of {questions.length}
                    </strong>{' '}
                    correct on <strong>{topic.title}</strong>.
                  </p>
                </div>

                {/* Spaced repetition automatic scheduling callout */}
                <div className="max-w-xl mx-auto bg-amber-50 border border-amber-200/80 rounded-xl p-4 text-left flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-amber-900">
                      Spaced Repetition Scheduled
                    </p>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      SkillForge has calibrated your retention curve. Active recall for this topic is now scheduled to reinforce key memory pathways before natural degradation occurs.
                    </p>
                  </div>
                </div>

                {/* Post-quiz Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={handleRetakeQuiz}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Quiz</span>
                  </button>
                  <button
                    onClick={onNavigateToRevision}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-sm cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>View Scheduled Revisions</span>
                  </button>
                  <button
                    onClick={onNavigateToDashboard}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm cursor-pointer"
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>View Progress Dashboard</span>
                  </button>
                </div>
              </div>

              {/* Detailed Breakdown Review */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
                <h3 className="text-base font-bold text-slate-900">
                  Question-by-Question Review
                </h3>
                <div className="space-y-4">
                  {questions.map((q, idx) => {
                    const studentAns = selectedAnswers[idx];
                    const isCorrect = studentAns === q.correctIndex;

                    return (
                      <div
                        key={q.id}
                        className={`p-4 rounded-xl border ${
                          isCorrect
                            ? 'border-emerald-200 bg-emerald-50/30'
                            : 'border-rose-200 bg-rose-50/30'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <p className="text-xs font-bold text-slate-900">
                            Q{idx + 1}: {q.question}
                          </p>
                          {isCorrect ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">
                              <CheckCircle2 className="w-3 h-3" /> Correct
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full shrink-0">
                              <XCircle className="w-3 h-3" /> Needs Review
                            </span>
                          )}
                        </div>

                        <div className="space-y-1 text-xs text-slate-600 mt-2">
                          <p>
                            Your Answer:{' '}
                            <span
                              className={`font-semibold ${
                                isCorrect ? 'text-emerald-700' : 'text-rose-700'
                              }`}
                            >
                              {studentAns !== undefined
                                ? q.options[studentAns]
                                : 'No answer'}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p>
                              Correct Answer:{' '}
                              <strong className="text-emerald-800">
                                {q.options[q.correctIndex]}
                              </strong>
                            </p>
                          )}
                        </div>

                        <div className="mt-3 pt-2 border-t border-slate-200/60 text-xs text-slate-500">
                          <strong>Explanation:</strong> {q.explanation}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
