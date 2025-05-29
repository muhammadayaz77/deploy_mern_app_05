import { useEffect, useRef, useState } from "react";
import ChatForm from "./ChatForm"
import Markdown from 'react-markdown'
import { IKImage } from "imagekitio-react";

interface Data {
  loading: boolean;
  error: string;
  dbData: {
    filePath: string;
  };
  aiData ?: {
      inlineData : {
        data : string,
        mimeType : string
      }
  };
} 

function ChatPage() {
  let [img,setImg] = useState<Data>({
    loading : false,
    error : "",
    dbData : {
      filePath : ""
    },
    aiData : {
      inlineData : {
        data : "",
        mimeType : ""
      }
    }
    
  })

  
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string | undefined>("");
  const [loading, setLoading] = useState<boolean | undefined>(false);
  
  const endRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    endRef?.current?.scrollIntoView({behavior : "smooth"})
  },[answer,question,])
  // console.log(Response.filePath)
  return (
    <div className="chat flex flex-col h-full px-[20%] pt-3">

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
        

        {img.dbData.filePath && <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">{img.loading && <span>Loading...</span>}
    {
      img.dbData?.filePath && (
        <IKImage
  urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
  path={img.dbData?.filePath}
  transformation={[{width:380,height:380
  }]}
/>
      )
    }</span>}
        {/* <span>AI</span> */}

        {question && <span className="self-end bg-[#2c2937] p-3 rounded-lg ml-3">{question}</span>}
        {answer && <span><Markdown>{answer}</Markdown></span>}
        {/* repeat chat bubbles */}
  <div ref={endRef}></div>

      </div>
      

      {/* Chat input */}
      <div className="mt-3">
        <ChatForm 
        img={img}
        setImg={setImg}
        question={question} setAnswer={setAnswer} setLoading={setLoading} setQuestion={setQuestion} />
      </div>
    </div>
  )
}

export default ChatPage
