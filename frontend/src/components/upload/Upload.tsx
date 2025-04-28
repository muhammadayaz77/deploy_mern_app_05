    import { IKContext, IKUpload } from "imagekitio-react";
    interface Data {
      loading : Boolean,
      error : String,
      dbData : {}
    }
  // required parameter to fetch images
  const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT;
  const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;
  const authenticator = async () => {
    const res = await fetch("http://localhost:3000/auth"); // from backend
    const data = await res.json();
    return data; // { signature, token, expire }
  };

  function Upload({setImg} : {setImg : any}) {


    const onUploadStart = (evt : Event) => {
      console.log('Started', evt);
      setImg((prev : Data) => ({...prev,loading:true}))
    };
    
    const onUploadProgress = (evt:ProgressEvent) => {
      console.log('Progress: ', evt);
    };
    
    const onError = (err:Error) => {
      console.log('Error');
      console.log(err);
    };
    
    const onSuccess = (res : any) => {
      console.log('Success');
      console.log(res);
      setImg((prev : Data) => ({...prev,loading:false,dbData : res}))

    };
    return (
      <IKContext 
      urlEndpoint={urlEndpoint}
      publicKey={publicKey}
      authenticator={authenticator}
      >
        <IKUpload   
        onError={onError}
        onSuccess={onSuccess}
        onUploadStart={onUploadStart}
        onUploadProgress={onUploadProgress}
        useUniqueFileName={true}
      />
    </IKContext>
    )
  }

  export default Upload