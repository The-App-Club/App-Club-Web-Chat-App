[ref](https://github.com/alamorre/nextjs-chat-tutorial/tree/3-chats)

- Stack

  - [Chat Engine](https://chatengine.io)
  - [vercel](https://vercel.io)
  - [Chat Engine](https://chatengine.io)

- Prepare

  - Go to [Chat Engine](https://chatengine.io) and create a account and project.

  - .env file "NEXT_PUBLIC_CHAT_ENGINE_PROJECT_ID" and "NEXT_PUBLIC_CHAT_ENGINE_PRIVATE_KEY" replaced with your API keys.

- Document

  - https://rest.chatengine.io/

- バグっぽい挙動

ライブラリのコンポーネントで window.addEventListner("scroll") に 対する イベントの unsubscribe ができていない

```
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
```
