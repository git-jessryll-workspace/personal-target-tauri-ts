import { FC } from "react";

interface LogoProps {}
const Logo: FC<LogoProps> = () => {
  return (
    <div className="text-white mt-4">
      <div className="flex space-x-1">
        <h1 className="text-3xl font-bold italic" style={{ letterSpacing: 2 }}>
          Target
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <p
        className="font-semibold pt-0.5"
        style={{ letterSpacing: 0.7, fontSize: "0.6rem" }}
      >
        My Personal Budget
      </p>
    </div>
  );
};

export default Logo;