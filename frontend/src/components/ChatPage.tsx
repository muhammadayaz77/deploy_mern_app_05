import { useEffect, useRef } from "react";
import ChatForm from "./ChatForm"

function ChatPage() {
  
  const endRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    endRef?.current?.scrollIntoView({behavior : "smooth"})
  },[])
  return (
    <div className="flex flex-col h-full px-[20%] pt-3">

      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-3 pr-2 custom-scrollbar">
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">User</span>
        <span>AI</span>
        {/* repeat chat bubbles */}
  <div ref={endRef}></div>

      </div>
      

      {/* Chat input */}
      <div className="mt-3">
        <ChatForm />
      </div>
    </div>
  )
}

export default ChatPage
