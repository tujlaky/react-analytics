import NotificationCard from "@/components/NotificationCard";
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";
import React, {  } from "react";

import clsx from "clsx";
import Button from "@/components/Button";
import useEvents from "hooks/useEvents";

function Home() {
  const events = useEvents();

  return <div className="flex flex-col items-center w-full space-y-6 p-6">
    <div className="flex items-center flex-col w-full space-y-6">
      {events.map(event => <div key={event.id} className={clsx("flex w-full justify-center")}>
          <NotificationCard notification={event} />
        </div>)}
    </div>

    <div>
      {events.length >= 5 && <Button color="primary">Load more</Button>}
    </div>
    
  </div>
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser({
  whenAuthed: AuthAction.RENDER,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(Home)