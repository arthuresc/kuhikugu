import { CgClose } from 'react-icons/cg';
import { AiFillCheckCircle } from 'react-icons/ai';

export default function Notification({ notification, onClose }) {

  

  return (
    <div className="notification success top-4 pointer-events-auto transform -translate-x-1/2 left-1/2 bg-green-50 border border-green-200 rounded-sm shadow-lg p-4 min-w-[320px] max-w-md transition-all duration-300 translate-y-0 opacity-100 my-2">
      <div className="flex items-center h-full">
        <div className="flex-shrink-0">
          {/* ICONE PRINCIPAL */}
          <AiFillCheckCircle className="w-7 h-7 text-green-400" />
        </div>
        <div className="ml-3 w-0 flex-1">
          <p className="text-sm font-medium text-green-800">
            {notification.title}
          </p>
          <p className="mt-1 text-sm text-green-600">
            {notification.message}
          </p>
        </div>
        <div className="flex flex-col items-start h-full">
          <button
            className="notification-close ml-4 flex-shrink-0 h-full"
            onClick={onClose}
          >
            {/* FECHAR */}
            <CgClose className="w-4 h-4 text-green-400 hover:text-green-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

