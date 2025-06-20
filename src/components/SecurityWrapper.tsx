"use client";

import { useEffect, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function SecurityWrapper({ children }: Props) {
  useEffect(() => {
    const disableShortcuts = (e: KeyboardEvent) => {
      if (
        e.key === "F12" || // F12
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) || // Ctrl+Shift+I/J/C
        (e.ctrlKey && e.key === "U") // View Source
      ) {
        e.preventDefault();
      }
    };

    const disableContextMenu = (e: MouseEvent) => e.preventDefault();

    document.addEventListener("keydown", disableShortcuts);
    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      document.removeEventListener("keydown", disableShortcuts);
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

  return <>{children}</>;
}

export default SecurityWrapper;
