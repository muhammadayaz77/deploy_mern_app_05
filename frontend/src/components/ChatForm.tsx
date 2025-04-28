import { useState } from "react"
import Upload from "./upload/Upload"
import { IKImage } from "imagekitio-react"
interface Data {
  loading: boolean;
  error: string;
  dbData: {
    filePath: string;
  };
} 
function ChatForm() {
  let [img,setImg] = useState<Data>({
    loading : false,
    error : "",
    dbData : {
      filePath : ""
    }
  })
  
  return (
  <>
  <div>
    {img.loading && <span>Loading...</span>}
    {
      img.dbData?.filePath && (
        <IKImage
  urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
  path={img.dbData?.filePath}
/>
      )
    }
  </div>
    <div className="mt-auto bg-[#2c2937] p-3 rounded-md mb-1">
    <form action="" className="flex justify-between">
      <div className="flex gap-2">
      <Upload setImg={setImg} />
      <input id="file" type="file" multiple={false} hidden />
      <input type="text" className="border bg-transparent w-full mr-3 border-none outline-none text-[#ececec]" />
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