import React from "react";

function useKeydown(key, action) {
  if (typeof key !== "string") {
    console.warn(
      "Invalid argument provided to useKeydown hook. Expected string."
    );
  }

  if (typeof action !== "function") {
    console.warn(
      "Invalid argument provided to useEscapeKey hook. Expected function."
    );
  }

  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.code === key) {
        action(event);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [key, action]);
}

export default useKeydown;
