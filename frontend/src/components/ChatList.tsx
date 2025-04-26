import { Link } from "react-router-dom"

const ChatList = () => {
  return (
    <div className="flex flex-col h-full">
      <h3 className="font-semibold my-3">DASHBOARD</h3>
      <div className="flex flex-col mr-6">
        <Link to='/' className="hover:bg-[#2c2937] pl-3 py-1 rounded-lg text-sm">Create New Chat</Link>
        <Link to='/' className="hover:bg-[#2c2937] pl-3 py-1 rounded-lg text-sm">Explore Blyzr AI</Link>
        <Link to='/' className="hover:bg-[#2c2937] pl-3 py-1 rounded-lg text-sm">Contact</Link>
      </div>
      <hr className="my-3 opacity-15 rounded-xl ml-3 mr-6 bg-[#ddd] border-none h-[2px]" />
         <h3 className="font-semibold my-3">RECENT CHATS</h3>
          <div className="flex flex-col mr-6">
            <Link to='/' className="hover:bg-[#2c2937] pl-3 py-1 rounded-lg text-sm">chats to open</Link>
            <Link to='/' className="hover:bg-[#2c2937] pl-3 py-1 rounded-lg text-sm">chats to open</Link>
            <Link to='/' className="hover:bg-[#2c2937] pl-3 py-1 rounded-lg text-sm">chats to open</Link>
          </div>
          <hr className="my-3 opacity-15 rounded-xl ml-3 mr-6 bg-[#ddd] border-none h-[2px]" />

      <div className="upgrade flex text-sm mt-auto items-center mb-2">
        <img src="/logo.png" alt="logo" className="h-8 w-8" />
        <div className="text flex flex-col ml-3">
          <span className="text-sm">Upgrade to Blyzr AI Pro</span>
          <span className="text-[12px] text-gray-400">Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  )
}

export default ChatList