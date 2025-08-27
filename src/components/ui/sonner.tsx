import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group text-red-600 fixed top-0 right-0"
      style={
        {
          "--normal-bg": "var(--secondary)",
          "--normal-text": "green",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
