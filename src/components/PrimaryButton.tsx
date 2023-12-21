import { ButtonHTMLAttributes, FC, memo } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const PrimaryButtonComponent: FC<PrimaryButtonProps> = ({ ...props }) => {
  return (
    <button
      {...props}
      className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {props.text}
    </button>
  );
};

const PrimaryButton = memo(
  PrimaryButtonComponent,
  (prevProps: PrimaryButtonProps, nextProps: PrimaryButtonProps) =>
    prevProps.text === nextProps.text
);

export default PrimaryButton;
