import { useState } from "react";

interface HoverPreviewProps {
  label: string;
  url: string;
}

const HoverPreview: React.FC<HoverPreviewProps> = ({ label, url }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {/* The clickable link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="border-b-2 cursor-none hover:text-primary"
      >
        {label}
      </a>

      {/* The iframe preview on hover, wrapped in a clickable link */}
      {show && (
        <a
          data-aos="zoom-in"
          data-aos-duration="150"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-none absolute z-50 bottom-full mb-2 left-0 w-[200px] h-[130px] shadow-lg rounded-md bg-primary hidden md:block"
        >
          <iframe
            src={url}
            className="w-full h-full rounded-md pointer-events-none"
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
          />
        </a>
      )}
    </div>
  );
};

export default HoverPreview;
