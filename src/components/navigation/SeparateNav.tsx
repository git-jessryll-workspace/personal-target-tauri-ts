import { FC } from "react";

interface SeparateNavProps {}
const SeparateNav: FC<SeparateNavProps> = () => {
  return (
    <div
      className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
      aria-hidden="true"
    />
  );
};

export default SeparateNav;
