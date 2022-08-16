import { dummyUsers } from './Users';
import Talk from 'talkjs';

import { useState, useEffect, useRef } from 'react';

function MyNetwork() {
  const containerDomRef = useRef(null);

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const currentUserData = window.localStorage.getItem('currentTalkjsUser');
    setCurrentUser(JSON.parse(currentUserData));
  }, []);

  function handleClick(e, userId) {
    console.log(e, userId);
    // /* Retrieve the two users that will participate in the conversation */
    const user = dummyUsers.find((user) => user.id === userId);
    /* Session initialization code */
    Talk.ready
      .then(() => {
        // Create the two users that will participate in the conversation

        const me = new Talk.User(currentUser);
        const other = new Talk.User(user);

        /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: 'tu2oWggq',
            me: me,
          });
        }

        /* Get a conversation ID or create one */
        const conversationId = Talk.oneOnOneId(me, other);
        const conversation = window.talkSession.getOrCreateConversation(conversationId);

        /* Set participants of the conversations */
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        /* Create and mount chatbox in container */
        const chatbox = window.talkSession.createChatbox(conversation);
        // console.log(chatbox, containerDomRef.current);
        chatbox.mount(containerDomRef.current);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="users">
      <div className="current-user-container">
        {currentUser && (
          <div>
            <picture className="current-user-picture">
              <img alt={currentUser.name} src={currentUser.photoUrl} />
            </picture>
            <div className="current-user-info">
              <h3>{currentUser.name}</h3>
              <p>{currentUser.description}</p>
            </div>
          </div>
        )}
      </div>

      <div className="users-container">
        <ul>
          {dummyUsers.map((user) => (
            <li key={user.id} className="user">
              <picture className="user-picture">
                <img src={user.photoUrl} alt={`${user.name}`} />
              </picture>
              <div className="user-info-container">
                <div className="user-info">
                  <h4>{user.name}</h4>
                  <p>{user.info}</p>
                </div>
                <div className="user-action">
                  <button onClick={(e, userId) => handleClick(e, user.id)}>Message</button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="chatbox-container" ref={containerDomRef}>
          <div id="talkjs-container" style={{ height: '300px' }}>
            <i></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNetwork;
