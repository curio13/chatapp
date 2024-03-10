import React, { useEffect, useRef } from 'react';
import Message from "./Message";
import useGetMessages from '../../hooks/useGetMessages';
import useListenMessage from '../../hooks/useListenMessage';
import MessageSkeleton from "../skeletons/MessageSkeleton";
// import useConversation from '../../zustand/useConversation';

const Messages = () => {
	// const {selectedConversation,setSelectedConversation} = useConversation();
	const {messages,loading} = useGetMessages()
useListenMessage();
	const lastMessageRef = useRef();
	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	console.log("messages",messages)
	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

{/* {!loading &&
        messages.length > 0 &&
        messages.map((message) => {
          if (message.receiverId === selectedConversation._id || message.senderId === selectedConversation._id) { //Add this check to only render message if it belongs to current conversation
            return (
              <div key={message._id} ref={lastMessageRef}>
                <Message message={message} />
              </div>
            );
          }
})} */}

		{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
		{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;
