"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import swagger-ui-react only in browser
const SwaggerUI = dynamic(() => import("swagger-ui-react"), {
  ssr: false,
});

interface Props {
  specUrl: string;
}

const SwaggerUIWrapper: React.FC<Props> = ({ specUrl }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <SwaggerUI url={specUrl} />;
};

export default SwaggerUIWrapper;
