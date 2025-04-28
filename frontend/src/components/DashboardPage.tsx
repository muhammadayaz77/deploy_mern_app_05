
function DashboardPage() {
  return (
    <div className="flex flex-col h-full w-1/2 mx-auto">
      <div className="mt-40">
        <div className="flex items-center justify-center gap-3">
            <img src="/logo.png" alt="" className="h-16 w-16 opacity-20" />
            <span className="logo-head text-6xl font-bold opacity-20 pb-2">Blyzr AI</span>
        </div>
        <div className="flex justify-between mt-8">
            <div className="border p-3 rounded-lg border-[#7c7c7c] w-[30%] h-fit">
              <img src="/chat.png" alt="" className="w-9 h-9" />
              <span className="text-[12px] font-semibold">Create New Chat</span>
            </div>
            <div className="border p-3 rounded-lg border-[#7c7c7c] w-[30%] h-fit">
              <img src="/image.png" alt="" className="w-9 h-9" />
              <span className="text-[12px] font-semibold">Analyze Images</span>
            </div>
            <div className="border p-3 rounded-lg border-[#7c7c7c] w-[33%] h-fit">
              <img src="/code.png" alt="" className="w-9 h-9" />
              <span className="text-[12px] font-semibold">Help me with my code</span>
            </div>
        </div>
      </div>
      <div className="mt-auto bg-[#2c2937] p-3 rounded-md mb-1">
          <form action="" className="flex justify-between">
            <input type="text" className="border bg-transparent w-full mr-3 border-none outline-none text-[#ececec]" />
            <button type='submit' className="bg-[#605e68] p-2 ">
              <img src="/arrow.png" alt="" className="h-5 w-5" />
            </button>
          </form>
      </div>
    </div>
  )
}

export default DashboardPage