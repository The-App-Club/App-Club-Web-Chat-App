import React, { useState, useEffect, useContext } from 'react';

import { Context } from '../context';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const ChatEngine = dynamic(() =>
  import('react-chat-engine').then((module) => module.ChatEngine)
);

const MessageFormSocial = dynamic(() =>
  import('react-chat-engine').then((module) => module.MessageFormSocial)
);

export default function Home() {
  const { username, secret } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (username === '' || secret === '') {
      router.push('/');
    }
  }, [username, secret]);

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 212px)"
          projectID={process.env.NEXT_PUBLIC_CHAT_ENGINE_PROJECT_ID}
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
}
