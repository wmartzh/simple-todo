import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  onClickOutside: () => void;
}

export  const ClickOutsideDetector: React.FC<Props> = ({
  children,
  onClickOutside,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside]);

  return <div ref={ref}>{children}</div>;
};
