import React from 'react'
import ScrollToBottom from './ScrollToBottom'
import MessageItem from './MessageItem'

function ListMessage({ listMessage , deleteMessage}) {
    return (
        <ScrollToBottom>
            <ul>
                {(listMessage.length > 0) && listMessage.map((message, index) => {
                    const previousMessage = listMessage[index - 1]; // Tin nhắn trước đó
                    const isSameSender = previousMessage && previousMessage.userid === message.userid;
                    return (
                        <li key={index}>
                            <MessageItem message={message} isSameSender={!isSameSender} deleteMessage={deleteMessage}/>
                        </li>
                    )
                })
                }
            </ul>
        </ScrollToBottom>
    )
}

export default ListMessage
