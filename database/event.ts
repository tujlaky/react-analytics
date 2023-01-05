import {
  getDatabase,
  ref,
  query,
  push,
  limitToLast,
  endBefore,
  orderByKey,
} from "firebase/database";
import { getAuth } from "firebase/auth";

export function getEventRef() {
  const db = getDatabase();
  const auth = getAuth();
  const userId = auth.currentUser?.uid;

  return ref(db, `events/${userId}`);
}

export function getLastEvents(lastId?: string) {
  const ref = getEventRef();

  if (!lastId) {
    return query(ref, orderByKey(), limitToLast(5));
  }

  return query(ref, orderByKey(), endBefore(lastId), limitToLast(5));
}

export function getNewEventRef() {
  const ref = getEventRef();

  return push(ref);
}
