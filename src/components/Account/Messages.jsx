import { useState, useEffect, useRef } from 'react';

const currentUser = {
  userId: 'me',
  name: 'You',
};

const initialConversations = [
  {
    userId: 'user123',
    name: 'Buyer John',
    lastMessage: 'Is this still available?',
    conversation: [
      { from: 'user123', type: 'text', text: 'Is this still available?', timestamp: '14:32' },
      { from: 'me', type: 'text', text: 'Yes, still available. Are you interested?', timestamp: '14:35' },
    ],
  },
  {
    userId: 'user456',
    name: 'Seller Jane',
    lastMessage: 'Can you lower the price?',
    conversation: [
      { from: 'user456', type: 'text', text: 'Can you lower the price?', timestamp: '13:12' },
      { from: 'me', type: 'text', text: 'What’s your offer?', timestamp: '13:14' },
    ],
  },
];

const Messages = () => {
  const [conversations, setConversations] = useState(initialConversations);
  const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [activeChat]);

  const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const sendMessage = () => {
    if (!message && !image) return;

    const newMsg = {
      from: currentUser.userId,
      type: image ? 'image' : 'text',
      text: image ? URL.createObjectURL(image) : message,
      timestamp: getTime(),
    };

    const updated = conversations.map(chat => {
      if (chat.userId === activeChat.userId) {
        const updatedChat = {
          ...chat,
          lastMessage: newMsg.text,
          conversation: [...chat.conversation, newMsg],
        };
        setActiveChat(updatedChat);
        return updatedChat;
      }
      return chat;
    });

    setConversations(updated);
    setMessage('');
    setImage(null);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white shadow rounded-md overflow-hidden h-screen max-h-[90vh]">
      {/* Sidebar */}
      <div className={`w-full lg:w-1/3 border-r ${activeChat ? 'hidden lg:block' : 'block'}`}>
        <div className="p-4 font-bold text-lg border-b">Messages</div>
        <ul className="divide-y overflow-y-auto h-[calc(100vh-100px)]">
          {conversations.map((chat) => (
            <li
              key={chat.userId}
              className={`p-4 hover:bg-gray-50 cursor-pointer ${activeChat?.userId === chat.userId ? 'bg-gray-100' : ''}`}
              onClick={() => setActiveChat(chat)}
            >
              <p className="font-semibold">{chat.name}</p>
              <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat */}
      <div className={`flex-1 flex flex-col ${activeChat ? 'block' : 'hidden lg:block'}`}>
        {activeChat ? (
          <>
            <div className="p-4 border-b flex justify-between items-center">
              <span className="font-semibold">{activeChat.name}</span>
              <button
                onClick={() => setActiveChat(null)}
                className="lg:hidden text-sm text-blue-600"
              >
                ← Back
              </button>
            </div>

            <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {activeChat.conversation.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-xs md:max-w-md p-2 rounded-lg ${
                    msg.from === currentUser.userId ? 'bg-blue-100 ml-auto text-right' : 'bg-gray-200 text-left'
                  }`}
                >
                  {msg.type === 'text' ? (
                    <p className="text-sm">{msg.text}</p>
                  ) : (
                    <img src={msg.text} alt="Sent" className="w-40 rounded" />
                  )}
                  <span className="text-xs text-gray-500 block mt-1">{msg.timestamp}</span>
                </div>
              ))}
            </div>

            <div className="p-4 border-t flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
                className="flex-1 p-2 border rounded text-sm"
              />
              <input
                type="file"
                accept="image/*"
                id="image"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <label htmlFor="image" className="cursor-pointer text-xl">📷</label>
              <button
                onClick={sendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
              >
                Send
              </button>
            </div>

            {image && (
              <div className="p-2 text-sm text-gray-600 text-center border-t">
                <p>Image selected:</p>
                <img src={URL.createObjectURL(image)} alt="Preview" className="w-24 mx-auto rounded mt-1" />
              </div>
            )}
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400 p-8">
            <p>Select a conversation to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
