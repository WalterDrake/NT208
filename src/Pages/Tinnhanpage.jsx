import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import React from 'react'

const Tinnhanpage = (props) => {
  const chatProps = useMultiChatLogic(
    '86b7bb63-3690-4564-a0a5-76aec25b8ca4',
    props.user.username,
    props.user.secret
  )
  return (
    <div className="h-screen">
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow className="bg-pink-200" {...chatProps} style={{ height: '100%' }} />
    </div>
  )
}
export default Tinnhanpage

// import { PrettyChatWindow } from 'react-chat-engine-pretty'


// const Tinnhanpage = (props) => {

//   return (
//     <div style={{ height: '100hv' }}>
//       <PrettyChatWindow
//         projectId='86b7bb63-3690-4564-a0a5-76aec25b8ca4'
//         username={props.user.username}
// secret = { props.user.secret }
// style = {{ height: '100%' }}
// />
//     </div >
//   )
// }
// export default Tinnhanpage



