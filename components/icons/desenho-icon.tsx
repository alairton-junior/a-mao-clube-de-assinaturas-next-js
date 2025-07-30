import { IconProps } from "./types";

export const DesenhoIcon = ({ width, height, color, className, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 37 37"
      fill={"none"}
      className={className}
      {...props}
    >
    <path d="M7.76514 28V17.6175C7.76514 15.6613 7.76514 14.6825 8.03389 13.76C8.30139 12.8362 8.82139 12.0225 9.86514 10.3937L13.1851 5.20625C14.1251 3.73375 14.5964 3 15.2651 3C15.9339 3 16.4051 3.735 17.3451 5.205L20.6651 10.3937C21.7076 12.0225 22.2276 12.8362 22.4964 13.76C22.7651 14.6825 22.7651 15.66 22.7651 17.6175V28" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.01514 14.25C9.80514 14.6538 10.8764 15.4662 11.8651 15.5C13.1389 15.54 13.9989 14.4213 15.2651 14.4213C16.5314 14.4213 17.3914 15.54 18.6651 15.4987C19.6539 15.4662 20.7264 14.6538 21.5151 14.25M15.2651 15.5V28M12.7651 6.75H17.7651" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      
    </svg>
  );
}   