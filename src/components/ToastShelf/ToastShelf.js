import React from "react";

import Toast from "../Toast";
import { ToastsContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts } = React.useContext(ToastsContext);

  return (
    <ol className={styles.wrapper}>
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
