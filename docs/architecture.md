# Architecture Overview

## Modules delivered
- **Dashboard**: Daily metrics, upcoming exams, habit streaks, AI suggestion card.
- **Study Scheduler**: Tasks with checkboxes, AI adjustment callout, auto allocation helpers.
- **Notes Vault**: Upload actions, summaries, OCR-ready pipeline placeholders.
- **Exam Tracker**: Countdown-ready list with AI revision guidance.
- **Weekly Planner**: Board view for study/personal/project/deadline blocks.
- **To-Do List**: Priority sorting with AI suggestions.
- **Habit Tracker**: Streaks, weekly targets, AI focus insight.

## Data model (Firestore / MongoDB)
```ts
users/{userId}
  - name, email, studyGoal, timezone, preferences
subjects/{subjectId}
  - userId, name, difficulty, progress, nextExamId
notes/{noteId}
  - userId, subjectId, title, type, url, ocrText, aiSummary, tags
exams/{examId}
  - userId, subjectId, name, date, syllabus[], revisionPlan
plannerBlocks/{blockId}
  - userId, date, subjectId, title, status, duration, aiReasoning
habits/{habitId}
  - userId, name, targetPerWeek, streak, lastCompleted
habitEntries/{entryId}
  - habitId, date, value
```

## AI integration points
- **Schedule generation**: `lib/ai.ts` builds prompts; `/api/schedule` supplies allocations + prompt.
- **Dynamic adjustments**: `lib/schedule.ts` adjusts for missed/hard/early tasks.
- **Notes Q&A + summaries**: `/api/ocr` routes to OCR summary placeholders; `lib/ai.ts` includes summarization prompt.
- **Productivity insights**: `/api/ai` provides a prompt for user-specific feedback.

## File upload + OCR pipeline
1. Client requests `/api/upload` with file metadata.
2. Server returns `signedUrl` for cloud storage upload.
3. Client uploads file and stores metadata in `notes`.
4. If image: call `/api/ocr` for OCR text. If PDF: `/api/ocr` for summary.
5. Store OCR text, summary, and tags for AI search.

## Scheduling algorithm
- Allocate minutes by subject difficulty with `distributeStudyMinutes`.
- Use AI to map daily blocks, with fallback to weighted allocation.
- Apply `adjustSchedule` when a task is missed, flagged hard, or completed early.

## Next steps
- Hook OpenAI client in `lib/ai.ts`.
- Add auth (NextAuth/Firebase Auth) and persistent database.
- Implement drag-and-drop scheduling and calendar view.
