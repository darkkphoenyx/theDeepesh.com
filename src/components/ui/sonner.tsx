import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group text-red-600"
      style={
        {
          "--normal-bg": "var(--primary)",
          "--normal-text": "var(--background)",
          "--normal-border": "var(--primary)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
