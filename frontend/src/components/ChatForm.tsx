import { useRef, useState } from "react"
import Upload from "./upload/Upload"

import {askGemini} from '../utils/gemini'

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


function ChatForm({img,setImg,question,setAnswer,setLoading,setQuestion} : {img : Data,setImg: React.Dispatch<React.SetStateAction<Data>>,question : string,setAnswer: React.Dispatch<React.SetStateAction<string | undefined>>,setLoading: React.Dispatch<React.SetStateAction<boolean | undefined>>,setQuestion: React.Dispatch<React.SetStateAction<string>>}) {
  let questionRef = useRef<HTMLInputElement>(null);
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const value = questionRef.current?.value?.trim();
    if (!value) return;
  
    setQuestion(value);
    setLoading(true);
    setAnswer("");
    if (questionRef.current) {
      questionRef.current.value = "";
    }
  
    try {
      // Check if there's image data and prepare the input accordingly
      const input = img?.aiData?.inlineData
        ? [img.aiData, value] // image + text
        : [value]; // text only
        
        console.log("🧠 Gemini Input Data", img?.aiData?.inlineData);

      const res = await askGemini(input);
      setAnswer(res);
    } catch (err) {
      console.error("Error during Gemini call:", err);
      setAnswer("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  console.log("Image filePath:::", img.dbData.filePath);
  
  
  return (
  <>
  <div>
  </div>
    <div className="mt-auto bg-[#2c2937] p-3 rounded-md mb-1">
    <form action="" className="flex justify-between"
    onSubmit={handleSubmit}
    >
      <div className="flex gap-2">
      <Upload
      setImg={setImg} />
     <input
  id="file"
  type="file"
  multiple={false}
  hidden
  // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     const file = e.target.files[0];
  //     setImg((prev) => ({
  //       ...prev,
  //       dbData: {
  //         ...prev.dbData,
  //         filePath: URL.createObjectURL(file), // Save the file path (temporary URL)
  //       },
  //     }));
  //   }
  // }}
/>
      <input
      // onChange={(e : React.ChangeEvent<HTMLInputElement>) => setQuestion(e?.target?.value)} 
      // name="text"
      ref={questionRef}
      type="text" className="border bg-transparent w-full mr-3 border-none outline-none text-[#ececec]" />
      </div>
      <button type='submit' className="bg-[#605e68] p-2 ">
        <img src="/arrow.png" alt="" className="h-5 w-5" />
      </button>
    </form>
</div>
  </>
  )
}

export default ChatForm