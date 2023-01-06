import { format, formatDistance } from "date-fns";
import { Notification } from "types/notification";

interface NotificationCardProps {
  notification: Notification
}

function NotificationCard({ notification }: NotificationCardProps) {
  const createdAt = parseInt(notification?.createdAt?.toString());

  return <div className="rounded w-full bg-white max-w-md drop-shadow-lg flex flex-col justify-center items-start p-4">
    <div className="flex justify-between w-full">
      <h2 className="font-bold text-xl gap-2">{notification.event}</h2>
      <small className="text-sm text-gray-800">{ (!isNaN(createdAt)) && formatDistance(createdAt, new Date(), { addSuffix: false})}</small>
    </div>

    <div className="flex w-full">
      {notification.description}
    </div>
    
    <div className="flex justify-end w-full">
      <span className="rounded-xl bg-gray-50 px-3 py-1.5 font-mono text-xs text-gray-700">{notification.channel}</span>
    </div>
  </div>
}

export default NotificationCard;