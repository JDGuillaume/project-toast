import React from "react";

import Toast from "../Toast";
import { ToastsContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, clearToasts } = React.useContext(ToastsContext);

  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        clearToasts();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [clearToasts]);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ message, id, variant }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast id={id} variant={variant}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
