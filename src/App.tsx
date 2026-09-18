import React, { useState } from 'react';
import { AppScreen, TargetJob, RoadmapStep, RevisionItem, UserGoalProfile, StepStatus } from './types';
import { MOCK_TARGET_JOBS, MOCK_REVISION_ITEMS } from './data/mockData';
import { SkillForgeApi } from './services/api';
import { Navbar } from './components/Navbar';
import { HomeScreen } from './components/screens/HomeScreen';
import { GoalIntakeScreen } from './components/screens/GoalIntakeScreen';
import { SkillAnalysisScreen } from './components/screens/SkillAnalysisScreen';
import { LearningPathScreen } from './components/screens/LearningPathScreen';
import { LearningQuizScreen } from './components/screens/LearningQuizScreen';
import { RevisionScreen } from './components/screens/RevisionScreen';
import { DashboardScreen } from './components/screens/DashboardScreen';
import { Sparkles, Heart, Compass, Target, FileCheck, Map, BookOpen, RotateCcw, LayoutDashboard } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('home');
  const [selectedJobId, setSelectedJobId] = useState<string>('software-developer');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Initialize selected job and roadmap
  const selectedJob =
    MOCK_TARGET_JOBS.find((j) => j.id === selectedJobId) || MOCK_TARGET_JOBS[0];

  const [roadmapSteps, setRoadmapSteps] = useState<RoadmapStep[]>(selectedJob.roadmap);
  const [revisionItems, setRevisionItems] = useState<RevisionItem[]>(MOCK_REVISION_ITEMS);
  const [activeTopicId, setActiveTopicId] = useState<string>('topic-java-oop');
  const [quizScores, setQuizScores] = useState<
    Record<string, { score: number; total: number; percentage: number; timestamp: string }>
  >({
    'topic-fundamentals': { score: 2, total: 2, percentage: 100, timestamp: 'Yesterday' },
  });

  // Switch job and reset roadmap to that job's default roadmap
  const handleJobSelect = (jobId: string) => {
    setSelectedJobId(jobId);
    const newJob = MOCK_TARGET_JOBS.find((j) => j.id === jobId) || MOCK_TARGET_JOBS[0];
    setRoadmapSteps(newJob.roadmap);
    if (newJob.roadmap.length > 0) {
      setActiveTopicId(newJob.roadmap[0].topicId);
    }
  };

  // Quick select from Home page and launch into intake
  const handleSelectJobAndStart = (jobId: string) => {
    handleJobSelect(jobId);
    setCurrentScreen('analysis');
  };

  // Generate Personalized Path from Intake Screen
  const handleGeneratePath = async (jobId: string, profile: UserGoalProfile) => {
    setIsGenerating(true);
    try {
      const result = await SkillForgeApi.generatePersonalizedPath(jobId, profile);
      setRoadmapSteps(result.customizedRoadmap);
      setSelectedJobId(jobId);
      // Seamlessly transition to Skill Analysis
      setCurrentScreen('analysis');
    } catch (err) {
      console.error('Error generating path:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  // Update a step's completion status
  const handleUpdateStepStatus = (stepId: string, status: StepStatus) => {
    setRoadmapSteps((prev) =>
      prev.map((s) => (s.id === stepId ? { ...s, status } : s))
    );
  };

  // Launch a specific step in Learning / Quiz screen
  const handleStartLearningStep = (step: RoadmapStep) => {
    if (step.status === 'Not Started') {
      handleUpdateStepStatus(step.id, 'In Progress');
    }
    setActiveTopicId(step.topicId);
    setCurrentScreen('learning');
  };

  // Handle quiz submission
  const handleCompleteQuiz = (topicId: string, score: number, total: number) => {
    const percentage = Math.round((score / total) * 100);
    setQuizScores((prev) => ({
      ...prev,
      [topicId]: {
        score,
        total,
        percentage,
        timestamp: 'Just now',
      },
    }));

    // Auto mark matching roadmap step as completed if passed with >= 65%
    if (percentage >= 65) {
      setRoadmapSteps((prev) =>
        prev.map((s) => (s.topicId === topicId ? { ...s, status: 'Completed' } : s))
      );
    }
  };

  // Handle completing a spaced repetition flashcard
  const handleCompleteRevision = (itemId: string) => {
    setRevisionItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? {
              ...item,
              completed: true,
              dueLabel: 'Revision due next week',
              retentionEstimate: 95,
            }
          : item
      )
    );
  };

  const completedStepsCount = roadmapSteps.filter((s) => s.status === 'Completed').length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Persistent Navigation */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
        selectedJob={selectedJob}
        completedStepsCount={completedStepsCount}
        totalStepsCount={roadmapSteps.length}
      />

      {/* Main Content Area: Screen Switcher */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <HomeScreen
            onGetStarted={() => setCurrentScreen('intake')}
            onSelectJobAndStart={handleSelectJobAndStart}
            targetJobs={MOCK_TARGET_JOBS}
          />
        )}

        {currentScreen === 'intake' && (
          <GoalIntakeScreen
            targetJobs={MOCK_TARGET_JOBS}
            selectedJobId={selectedJobId}
            onJobSelect={handleJobSelect}
            onGeneratePath={handleGeneratePath}
            isGenerating={isGenerating}
          />
        )}

        {currentScreen === 'analysis' && (
          <SkillAnalysisScreen
            selectedJob={selectedJob}
            onViewLearningPath={() => setCurrentScreen('roadmap')}
            onBackToIntake={() => setCurrentScreen('intake')}
          />
        )}

        {currentScreen === 'roadmap' && (
          <LearningPathScreen
            selectedJob={selectedJob}
            roadmapSteps={roadmapSteps}
            onStartLearningStep={handleStartLearningStep}
            onUpdateStepStatus={handleUpdateStepStatus}
            onNavigateToQuiz={(topicId) => {
              setActiveTopicId(topicId);
              setCurrentScreen('learning');
            }}
          />
        )}

        {currentScreen === 'learning' && (
          <LearningQuizScreen
            currentTopicId={activeTopicId}
            onTopicChange={setActiveTopicId}
            onCompleteQuiz={handleCompleteQuiz}
            onNavigateToRevision={() => setCurrentScreen('revision')}
            onNavigateToRoadmap={() => setCurrentScreen('roadmap')}
            onNavigateToDashboard={() => setCurrentScreen('dashboard')}
          />
        )}

        {currentScreen === 'revision' && (
          <RevisionScreen
            revisionItems={revisionItems}
            onCompleteRevision={handleCompleteRevision}
            onNavigateToTopic={(topicId) => {
              setActiveTopicId(topicId);
              setCurrentScreen('learning');
            }}
          />
        )}

        {currentScreen === 'dashboard' && (
          <DashboardScreen
            selectedJob={selectedJob}
            roadmapSteps={roadmapSteps}
            revisionItems={revisionItems}
            quizScores={quizScores}
            activeTopicId={activeTopicId}
            onNavigateToRoadmap={() => setCurrentScreen('roadmap')}
            onNavigateToRevision={() => setCurrentScreen('revision')}
            onNavigateToTopic={(topicId) => {
              setActiveTopicId(topicId);
              setCurrentScreen('learning');
            }}
            onNavigateToIntake={() => setCurrentScreen('intake')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-xs">
              SF
            </div>
            <div>
              <p className="font-bold text-slate-900">
                SkillForge &bull; AI Personal Learning Path Generator
              </p>
              <p className="text-[11px] text-slate-500">
                Learn the skills your dream job actually needs.
              </p>
            </div>
          </div>

          {/* Quick Flow Jump Links */}
          <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-slate-600">
            <button
              onClick={() => setCurrentScreen('home')}
              className="hover:text-indigo-600 cursor-pointer"
            >
              Home
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setCurrentScreen('intake')}
              className="hover:text-indigo-600 cursor-pointer"
            >
              Goal Intake
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setCurrentScreen('analysis')}
              className="hover:text-indigo-600 cursor-pointer"
            >
              Skill Analysis
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setCurrentScreen('roadmap')}
              className="hover:text-indigo-600 cursor-pointer"
            >
              Learning Path
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setCurrentScreen('learning')}
              className="hover:text-indigo-600 cursor-pointer"
            >
              Learning / Quiz
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setCurrentScreen('revision')}
              className="hover:text-indigo-600 cursor-pointer"
            >
              Revision
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setCurrentScreen('dashboard')}
              className="hover:text-indigo-600 cursor-pointer"
            >
              Dashboard
            </button>
          </div>

          <p className="text-[11px] text-slate-400">
            Hackathon Frontend Prototype &bull; API & AI Architecture Ready
          </p>
        </div>
      </footer>
    </div>
  );
}
