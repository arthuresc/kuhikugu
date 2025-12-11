interface Notification {
  type: 'danger' | 'success' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  callback?: () => void;
}