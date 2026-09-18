export type AppScreen =
  | 'home'
  | 'intake'
  | 'analysis'
  | 'roadmap'
  | 'learning'
  | 'revision'
  | 'dashboard';

export type SkillProficiency = 'Beginner' | 'Intermediate' | 'Required' | 'Mastered';

export interface SkillItem {
  id: string;
  name: string;
  category: 'Core Language' | 'CS Fundamentals' | 'Data & Storage' | 'DevOps & Tools' | 'Problem Solving' | 'Security & Cloud';
  status: SkillProficiency;
  priority: 'Critical' | 'High' | 'Medium';
  marketDemand: number; // e.g. 94%
  description: string;
  userProficiency?: number; // 0-100
}

export type StepStatus = 'Not Started' | 'In Progress' | 'Completed';

export interface RoadmapStep {
  id: string;
  stepNumber: number;
  title: string;
  skillName: string;
  status: StepStatus;
  estimatedHours: number;
  whyIncluded: string;
  keyObjectives: string[];
  topicId: string;
}

export interface TargetJob {
  id: string;
  title: string;
  category: string;
  iconName: string;
  tagline: string;
  description: string;
  marketDemandLevel: 'Very High' | 'High' | 'Rapidly Growing';
  marketMatchScore: number; // e.g. 88%
  averageSalary: string;
  openingsCount: string;
  skills: SkillItem[];
  roadmap: RoadmapStep[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LearningTopic {
  id: string;
  title: string;
  skillName: string;
  jobId: string;
  estimatedMinutes: number;
  summary: string;
  conceptOverview: string;
  codeSnippet?: {
    language: string;
    code: string;
    caption: string;
  };
  keyTakeaways: string[];
  quiz: QuizQuestion[];
}

export interface RevisionItem {
  id: string;
  title: string;
  skillName: string;
  topicId: string;
  dueLabel: 'Revision due today' | 'Revision due tomorrow' | 'Revision due in 3 days' | 'Revision due next week';
  urgency: 'critical' | 'moderate' | 'upcoming';
  lastStudied: string;
  nextInterval: string;
  retentionEstimate: number; // percentage (e.g. 64%)
  recallQuestion: string;
  answerSummary: string;
  completed: boolean;
}

export interface UserGoalProfile {
  targetJobId: string;
  currentLevel: 'Beginner / Student' | 'Intermediate' | 'Career Switcher';
  weeklyHours: number;
  targetTimeline: '3 Months (Intensive)' | '6 Months (Balanced)' | '9 Months (Self-Paced)';
}

export interface UserProgressState {
  profile: UserGoalProfile;
  completedSteps: string[];
  activeStepId: string;
  quizScores: Record<string, { score: number; total: number; percentage: number; timestamp: string }>;
  completedRevisions: string[];
  streakDays: number;
  totalStudyMinutes: number;
}
