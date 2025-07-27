// Format duration in minutes to human-readable format
export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
};

// Format date to readable string
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Calculate course progress percentage
export const calculateProgress = (
  courseId: string,
  courseModules: Module[],
  progressData: { [courseId: string]: { [lessonId: string]: boolean } }
): number => {
  const courseProgress = progressData[courseId] || {};

  // Count total lessons
  let totalLessons = 0;
  courseModules.forEach((module) => {
    totalLessons += module.lessons.length;
  });

  // Count completed lessons
  let completedLessons = 0;
  courseModules.forEach((module) => {
    module.lessons.forEach((lesson) => {
      if (courseProgress[lesson.id]) {
        completedLessons++;
      }
    });
  });

  // Calculate percentage
  if (totalLessons === 0) return 0;
  return Math.round((completedLessons / totalLessons) * 100);
};

// Truncate text with ellipsis
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

// Generate unique ID
export const generateId = (prefix: string = "id"): string => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
