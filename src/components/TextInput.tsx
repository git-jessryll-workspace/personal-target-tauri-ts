import { FC, InputHTMLAttributes, RefObject, memo } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: RefObject<HTMLInputElement>;
}

const TextInputComponent: FC<TextInputProps> = ({ ...props }) => {
  return (
    <input
      {...props}
      className="block text-gray-900 p-2.5 w-full rounded-md border-0 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  );
};

const TextInput = memo(
  TextInputComponent,
  (prevProps: TextInputProps, nextProps: TextInputProps) =>
    prevProps.value === nextProps.value
);

export default TextInput;
