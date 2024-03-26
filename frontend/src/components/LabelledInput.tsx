import { ChangeEvent } from "react";
interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const LabelledInput = ({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) => {
  return (
    <div>
      <div className="text-sm  font-bold text-left py-2">{label}</div>
      <input
        className=" border-2 border-gray-400 text-base text-start px-6 py-1 font-thin font-serif text-gray-900 rounded-md"
        type={type || "text"}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
