import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `
        w-full
        2xl:container
        mx-auto
        px-3
        sm:px-12
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
