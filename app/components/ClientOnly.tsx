"use client";

interface ClientOnlyProps {
  children: React.ReactNode;
}

import { FC, ReactNode, useEffect, useState } from "react";

const ClientOnly: FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};
export default ClientOnly;
