import NotificationCard from "@/components/NotificationCard";
import Preview from "@/components/Preview";
import { getEventRef, getLastEvents } from "database/event";
import { onValue, onChildAdded, DataSnapshot } from "firebase/database";
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";
import React, { createRef, useEffect, useRef, useState } from "react";
import { Notification } from "types/notification";

import styles from './events.module.css';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import clsx from "clsx";
import Button from "@/components/Button";
import { Unsubscribe } from "firebase/auth";

function Home() {
  type NotificationWithRef = Notification & {
    ref: React.RefObject<HTMLDivElement>,
    animate: boolean
  };

  const [events, setEvents] = useState<NotificationWithRef[]>([]);
  const [startFromId, setStartFromId] = useState<string>();

  const onNewChild: (snapshot: DataSnapshot) => unknown = (snapshot) => {
    const createdAt = snapshot.val().createdAt;

    setEvents(events => [
      ...events.filter(x => x.createdAt > createdAt),
      {
        id: snapshot.key,
        ref: createRef<HTMLDivElement>(),
        animate: false,
        ...snapshot.val()
      },
      ...events.filter(x => x.createdAt <= createdAt)
    ]);
  };

  useEffect(() => {
    const ref = getLastEvents();
    const unsubscribes: Unsubscribe[] = [];
  
    unsubscribes.push(onChildAdded(ref, onNewChild));

    if (startFromId) {
      const ref2 = getLastEvents(startFromId);
      unsubscribes.push(onChildAdded(ref2, onNewChild));
    }
  
    return () => {
      unsubscribes.forEach(unsubscribe => unsubscribe());
    };
  }, [startFromId]);

  return <div className="flex flex-col items-center w-full space-y-6 p-6">
    <TransitionGroup className="flex items-center flex-col w-full space-y-6">
      {events.map(event => <CSSTransition enter={event.animate} timeout={1000} classNames={{ ...styles}} key={event.id} nodeRef={event.ref}>
            <div ref={event.ref} className={clsx("flex w-full justify-center")}>
              <NotificationCard notification={event} />
            </div>
          </CSSTransition>
        )}
    </TransitionGroup>

    <div>
      {events.length >= 5 && <Button color="primary" onClick={() => setStartFromId(events[events.length - 1].id)}>Load more</Button>}
    </div>
    
  </div>
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser({
  whenAuthed: AuthAction.RENDER,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(Home)