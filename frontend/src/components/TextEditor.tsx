import { ChangeEvent } from "react";
type TextEditorProps = {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TextEditor = ({ onChange }: TextEditorProps) => {
  return (
    <div className="  flex justify-center items-center ">
      <div className=" mt-10 w-full max-w-screen-md flex flex-col justify-center items-center">
        <textarea
          onChange={onChange}
          id="editor"
          rows={8}
          className="dark:bg-gray-100 focus:outline-none block w-full px-0  text-gray-800 bg-white border-2 text-lg border-slate-300 pl-2"
          placeholder="Write an article..."
          required
        />
      </div>
    </div>
  );
};
