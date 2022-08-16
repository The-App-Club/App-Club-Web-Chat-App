import { useEffect, useRef } from 'react';
import Talk from 'talkjs';

function Messaging() {
  const containerDomRef = useRef(null);

  useEffect(() => {
    const currentUserData = window.localStorage.getItem('currentTalkjsUser');
    const currentUser = JSON.parse(currentUserData);

    Talk.ready
      .then(() => {
        const me = new Talk.User(currentUser);

        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: 'tu2oWggq',
            me: me,
          });
        }

        const chatBox = window.talkSession.createInbox();
        chatBox.mount(containerDomRef.current);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ height: '500px' }} className="inbox-container" ref={containerDomRef}>
      Loading...
    </div>
  );
}

export default Messaging;
