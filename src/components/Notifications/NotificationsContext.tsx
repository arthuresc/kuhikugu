import {
  createContext,
  useState,
  useMemo,
  useContext,
  type ReactNode,
} from 'react';
import Notification from './Notification';

type NotificationType = {
  id: string;
  type: 'danger' | 'success' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  // callback?: () => void;
};

type NotificationContextType = {
  notifications: NotificationType[];
  criaNotification: (
    title: string,
    message: string,
    type: 'danger' | 'success' | 'warning' | 'info',
    duration?: number,
  ) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

type NotificationProviderProps = {
  children: ReactNode;
};
export function NotificationProvider({ children }: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const criaNotification = (
    title: string,
    message: string,
    type: 'danger' | 'success' | 'warning' | 'info',
    duration: number = 5000,
  ) => {

    // debugger;
    const newNotification: NotificationType = {
      id: Date.now().toString(),
      title,
      message,
      type,
      duration,
    };

    setNotifications((prev) => [newNotification, ...prev]);

    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((notific) => notific.id !== newNotification.id),
      );
    }, duration);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev.filter((notific) => notific.id !== id));
  };

  //Excluir depois
  const clearNotifications = () => {
    setNotifications([]);
  };

  const value: NotificationContextType = {
    notifications,
    criaNotification,
    removeNotification,
    clearNotifications,
  };


  return(
    <NotificationContext.Provider value={value}>
      {children}
      <Notifications />
    </NotificationContext.Provider>
  )
}


//hook
export function useNotification() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error('useNotification deve ser usado dentro de um NotificationProvider');
  }

  console.log(context, '😀')

  return context;
}

export function Notifications({ children }: { children?: React.ReactNode }) {
  const { notifications, removeNotification } = useNotification();

  return (
    <>
      <div className="notification-container w-full px-[50%] fixed inset-0 z-50 pointer-events-none flex-col justify-around items-center">
        {/* <Notification /> */}
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            notification={notification}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </>
  );
}

