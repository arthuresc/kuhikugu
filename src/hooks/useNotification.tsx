import { useContext } from 'react'
import {NotificationsContext} from '../components/Notifications/NotificationsContext'

function useNotification() {
  const context = useContext(NotificationsContext);

  if (!context) {
    
  }
}

export default useNotification