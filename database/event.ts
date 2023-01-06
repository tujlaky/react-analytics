import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  getDocs,
  getFirestore,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Notification, NotificationCreate } from "types/notification";

export function getEventCollection() {
  const db = getFirestore();

  const auth = getAuth();
  const userId = auth.currentUser?.uid;

  if (!userId) {
    return;
  }

  return collection(db, `events/${userId}/events`);
}

export function addEvent(event: NotificationCreate) {
  const collection = getEventCollection();

  if (!collection) {
    return;
  }

  addDoc(collection, event);
}

export function dataToNotification(
  doc: QueryDocumentSnapshot<DocumentData>
): Notification {
  const data = doc.data();

  return {
    id: doc.id,
    event: data.event,
    channel: data.channel,
    description: data.description,
    createdAt: data.createdAt.seconds,
  };
}

export function dataToNotifications(
  querySnapshot: QuerySnapshot<DocumentData>
): Notification[] {
  const notifications: Notification[] = [];

  querySnapshot.forEach((doc) => notifications.push(dataToNotification(doc)));

  return notifications;
}

export async function getLastEvents(lastId?: string) {
  const collection = getEventCollection();

  if (!collection) {
    throw new Error("No collection");
  }

  const querySnapshot = await getDocs(collection);

  return querySnapshot;
}
