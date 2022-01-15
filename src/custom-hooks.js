import { useCallback, useState } from "react";

export function useModalState(defaultValue = false) {
  const [isOpen, setState] = useState(defaultValue);
  const open = useCallback(() => {
    setState(true);
    console.log("open");
  }, []);
  const close = useCallback(() => {
    setState(false);
    console.log("close");
  }, []);

  return { isOpen, open, close };
}
