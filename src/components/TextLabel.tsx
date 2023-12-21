import { FC, LabelHTMLAttributes, memo } from "react";

interface TextLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  value: string;
}

const TextLabelComponent: FC<TextLabelProps> = ({ ...props }) => {
  return (
    <label
      {...props}
      className="block text-sm font-medium leading-6 text-gray-100"
    >
      {props.value}
    </label>
  );
};

const TextLabel = memo(
  TextLabelComponent,
  (prevProps: TextLabelProps, nextProps: TextLabelProps) =>
    prevProps.value === nextProps.value
);

export default TextLabel;
