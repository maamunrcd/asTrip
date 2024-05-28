import Image from "next/image";
import React from "react";

interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, className }) => {
  return <Image className={className} src={src} alt={alt} />;
};

export default Icon;
