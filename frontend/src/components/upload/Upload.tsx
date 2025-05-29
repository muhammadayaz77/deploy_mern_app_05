import React from "react";

interface Data {
  loading: boolean;
  error: string;
  dbData: {
    filePath: string;
  };
  aiData?: {
    inlineData: {
      data: string;
      mimeType: string;
    };
  };
}

interface Props {
  img: Data;
  setImg: React.Dispatch<React.SetStateAction<Data>>;
}

const Upload: React.FC<Props> = ({ img, setImg }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const mimeType = file.type; // Important!

    setImg(prev => ({ ...prev, loading: true, error: "" }));

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = (reader.result as string).split(",")[1];

      if (!mimeType) {
        setImg(prev => ({
          ...prev,
          loading: false,
          error: "Could not detect MIME type of image.",
        }));
        return;
      }

      setImg({
        loading: false,
        error: "",
        dbData: { filePath: file.name },
        aiData: {
          inlineData: {
            data: base64,
            mimeType, // Now it's set correctly!
          },
        },
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-3">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {img.error && <p className="text-red-500 text-sm">{img.error}</p>}
    </div>
  );
};

export default Upload;
