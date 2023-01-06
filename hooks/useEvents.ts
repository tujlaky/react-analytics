import { dataToNotifications, getEventCollection } from "database/event";
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Notification } from "types/notification";

function useEvents() {
  const [events, setEvents] = useState<Notification[]>([]);

  useEffect(() => {
    const collection = getEventCollection();

    if (collection) {
      return onSnapshot(collection, (doc) => {
        setEvents(dataToNotifications(doc));
      });
    }
  }, []);

  return events;
}

export default useEvents;
