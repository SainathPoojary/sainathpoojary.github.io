import { cn } from "@/lib/utils";
import { SVGProps } from "react";

const icons = {
  docs: (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.375 2.39584V3.83334C14.375 5.18843 14.375 5.86597 14.7967 6.28668C15.2164 6.70834 15.894 6.70834 17.25 6.70834H18.6875"
        className="stroke-text dark:stroke-dark-text opacity-70"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.66658 10.5417H15.3333M7.66658 13.4167H15.3333M7.66658 16.2917H11.6628M3.83325 15.3333V7.66667C3.83325 4.9565 3.83325 3.60046 4.67563 2.75905C5.51704 1.91667 6.87308 1.91667 9.58325 1.91667H13.5814C13.9724 1.91667 14.1689 1.91667 14.3452 1.98951C14.5206 2.06234 14.6595 2.20034 14.9365 2.47826L18.605 6.14676C18.8829 6.42467 19.0209 6.56267 19.0938 6.73901C19.1666 6.91438 19.1666 7.11084 19.1666 7.50184V15.3333C19.1666 18.0435 19.1666 19.3995 18.3242 20.241C17.4828 21.0833 16.1268 21.0833 13.4166 21.0833H9.58325C6.87308 21.0833 5.51704 21.0833 4.67563 20.241C3.83325 19.3995 3.83325 18.0435 3.83325 15.3333Z"
        className="stroke-text dark:stroke-dark-text opacity-70"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  open: (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      className="fill-text dark:fill-dark-text opacity-70"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.8125 5.625C7.23234 5.625 6.67594 5.85547 6.2657 6.2657C5.85547 6.67594 5.625 7.23234 5.625 7.8125V17.1875C5.625 18.395 6.605 19.375 7.8125 19.375H17.1875C17.7677 19.375 18.3241 19.1445 18.7343 18.7343C19.1445 18.3241 19.375 17.7677 19.375 17.1875V14.6875C19.375 14.4389 19.4738 14.2004 19.6496 14.0246C19.8254 13.8488 20.0639 13.75 20.3125 13.75C20.5611 13.75 20.7996 13.8488 20.9754 14.0246C21.1512 14.2004 21.25 14.4389 21.25 14.6875V17.1875C21.25 18.2649 20.822 19.2983 20.0601 20.0601C19.2983 20.822 18.2649 21.25 17.1875 21.25H7.8125C6.73506 21.25 5.70175 20.822 4.93988 20.0601C4.17801 19.2983 3.75 18.2649 3.75 17.1875V7.8125C3.75 6.73506 4.17801 5.70175 4.93988 4.93988C5.70175 4.17801 6.73506 3.75 7.8125 3.75H10.3125C10.5611 3.75 10.7996 3.84877 10.9754 4.02459C11.1512 4.2004 11.25 4.43886 11.25 4.6875C11.25 4.93614 11.1512 5.1746 10.9754 5.35041C10.7996 5.52623 10.5611 5.625 10.3125 5.625H7.8125ZM13.125 4.6875C13.125 4.43886 13.2238 4.2004 13.3996 4.02459C13.5754 3.84877 13.8139 3.75 14.0625 3.75H20.3125C20.5611 3.75 20.7996 3.84877 20.9754 4.02459C21.1512 4.2004 21.25 4.43886 21.25 4.6875V10.9375C21.25 11.1861 21.1512 11.4246 20.9754 11.6004C20.7996 11.7762 20.5611 11.875 20.3125 11.875C20.0639 11.875 19.8254 11.7762 19.6496 11.6004C19.4738 11.4246 19.375 11.1861 19.375 10.9375V6.95L14.725 11.6C14.6392 11.6921 14.5357 11.766 14.4207 11.8172C14.3057 11.8685 14.1815 11.896 14.0557 11.8982C13.9298 11.9005 13.8047 11.8773 13.688 11.8302C13.5713 11.783 13.4652 11.7128 13.3762 11.6238C13.2872 11.5348 13.217 11.4287 13.1698 11.312C13.1227 11.1953 13.0995 11.0702 13.1018 10.9443C13.104 10.8185 13.1315 10.6943 13.1828 10.5793C13.234 10.4643 13.3079 10.3608 13.4 10.275L18.05 5.625H14.0625C13.8139 5.625 13.5754 5.52623 13.3996 5.35041C13.2238 5.1746 13.125 4.93614 13.125 4.6875Z" />
    </svg>
  ),
  github: (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-text dark:fill-dark-text opacity-70"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" />
    </svg>
  ),
  back: ({ className, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#fff"
      fill="none"
      className={cn("stroke-text dark:stroke-dark-text", className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  ),
};

export default icons;
