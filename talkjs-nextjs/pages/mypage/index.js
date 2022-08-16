import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { Layout } from '@/components/Layout';
import Talk from 'talkjs';

function MyPage() {
  const meta = {
    title: 'My Page Page',
    description: 'Welcome My Page',
  };

  const chatContainerRef = useRef(null);

  useEffect(() => {
    (async () => {
      const newSession = await makeTalkSession();

      const conversation = newSession.getOrCreateConversation('87654');
      conversation.setParticipant(newSession.me);

      const chatbox = newSession.createChatbox(conversation);
      chatbox.mount(chatContainerRef.current);
    })();
  }, []);

  async function makeTalkSession() {
    await Talk.ready;
    const me = new Talk.User({
      id: '765432',
      name: 'Alice',
      role: 'buyer',
    });
    return new Talk.Session({
      appId: 'tu2oWggq',
      me,
    });
  }

  return (
    <Layout params={{ page: 'my-page' }}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <h2>My Page</h2>
      <div>
        {/* TalkJS fills the available height of the container */}
        <style jsx>{`
          .chat-container {
            height: 500px;
            width: 400px;
          }
        `}</style>
        <div>Welcome to TalkJS on Next.js!</div>
        <div className="chat-container" ref={chatContainerRef}>
          loading chat...
        </div>
      </div>
    </Layout>
  );
}

export default MyPage;
