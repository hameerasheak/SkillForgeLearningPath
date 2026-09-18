/**
 * SkillForge API Service Layer
 *
 * This layer abstracts all data fetching and AI generation logic.
 * Currently uses realistic simulated latency and mock datasets.
 * To integrate with a real backend or Gemini AI API:
 * replace the simulated promises with fetch('/api/...') or GoogleGenAI calls.
 */

import { TargetJob, LearningTopic, RevisionItem, UserGoalProfile, RoadmapStep } from '../types';
import { MOCK_TARGET_JOBS, MOCK_TOPICS, MOCK_REVISION_ITEMS } from '../data/mockData';

const SIMULATED_DELAY_MS = 250;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SkillForgeApi = {
  /**
   * Fetch all supported target career profiles
   */
  async getTargetJobs(): Promise<TargetJob[]> {
    await delay(SIMULATED_DELAY_MS);
    return [...MOCK_TARGET_JOBS];
  },

  /**
   * Fetch a specific target job by its identifier
   */
  async getJobById(jobId: string): Promise<TargetJob | undefined> {
    await delay(SIMULATED_DELAY_MS);
    return MOCK_TARGET_JOBS.find((j) => j.id === jobId) || MOCK_TARGET_JOBS[0];
  },

  /**
   * Generate an AI personalized learning path based on user goals and intake
   * Ready for Gemini / backend prompt integration
   */
  async generatePersonalizedPath(
    jobId: string,
    profile: UserGoalProfile
  ): Promise<{
    job: TargetJob;
    customizedRoadmap: RoadmapStep[];
    aiInsights: {
      readinessAssessment: string;
      criticalFocusAreas: string[];
      estimatedWeeksToJobReady: number;
    };
  }> {
    // In production: POST /api/generate-learning-path with body { jobId, profile }
    await delay(600); // realistic AI analysis generation feel

    const baseJob = MOCK_TARGET_JOBS.find((j) => j.id === jobId) || MOCK_TARGET_JOBS[0];

    // Adapt estimated hours based on user's commitment & current experience level
    const multiplier =
      profile.currentLevel === 'Beginner / Student' ? 1.2 : profile.currentLevel === 'Career Switcher' ? 1.1 : 0.85;

    const customizedRoadmap = baseJob.roadmap.map((step) => ({
      ...step,
      estimatedHours: Math.round(step.estimatedHours * multiplier),
    }));

    const totalHours = customizedRoadmap.reduce((acc, curr) => acc + curr.estimatedHours, 0);
    const estimatedWeeks = Math.ceil(totalHours / profile.weeklyHours);

    return {
      job: baseJob,
      customizedRoadmap,
      aiInsights: {
        readinessAssessment: `Based on your ${profile.currentLevel} profile and ${profile.weeklyHours}h/week dedication, SkillForge structured a foundational-to-advanced pathway. Priority is placed on core programming depth and database persistence before algorithmic complexity.`,
        criticalFocusAreas: [
          'High enterprise demand for strong Object-Oriented patterns (Java)',
          'Algorithmic screening readiness for technical coding rounds',
          'Production database integrity and SQL query optimization',
        ],
        estimatedWeeksToJobReady: Math.max(8, estimatedWeeks),
      },
    };
  },

  /**
   * Fetch interactive learning content and quiz for a topic
   */
  async getTopicContent(topicId: string): Promise<LearningTopic> {
    await delay(SIMULATED_DELAY_MS);
    return MOCK_TOPICS[topicId] || MOCK_TOPICS['topic-java-oop'];
  },

  /**
   * Submit quiz results and update mastery metrics
   */
  async submitQuizResult(
    topicId: string,
    answers: number[]
  ): Promise<{
    score: number;
    total: number;
    percentage: number;
    feedback: string;
    nextRecommendedAction: string;
    scheduledRevisionDate: string;
  }> {
    await delay(300);
    const topic = MOCK_TOPICS[topicId] || MOCK_TOPICS['topic-java-oop'];
    let correct = 0;

    topic.quiz.forEach((q, idx) => {
      if (answers[idx] === q.correctIndex) {
        correct++;
      }
    });

    const percentage = Math.round((correct / topic.quiz.length) * 100);

    return {
      score: correct,
      total: topic.quiz.length,
      percentage,
      feedback:
        percentage >= 80
          ? 'Exceptional mastery! Concepts are well cemented into your active mental model.'
          : percentage >= 60
          ? 'Good foundation! Review the flagged questions below before starting practical exercises.'
          : 'Concept needs reinforcement. SkillForge has scheduled a quick revision flashcard session for tomorrow.',
      nextRecommendedAction:
        percentage >= 70 ? 'Proceed to the next module on the roadmap' : 'Review key takeaways and retake the quiz',
      scheduledRevisionDate: 'Scheduled for Active Recall in 24 hours',
    };
  },

  /**
   * Fetch revision schedule based on the forgetting curve engine
   */
  async getScheduledRevisions(): Promise<RevisionItem[]> {
    await delay(SIMULATED_DELAY_MS);
    return [...MOCK_REVISION_ITEMS];
  },
};
