import React from "react";
import useKeydown from "../../hooks/useKeydown";

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = (message, variant) => {
    setToasts([...toasts, { message, variant, id: crypto.randomUUID() }]);
  };

  const removeToast = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  };

  const clearToasts = React.useCallback(() => setToasts([]), []);

  useKeydown("Escape", clearToasts);

  return (
    <ToastsContext.Provider
      value={{ toasts, setToasts, addToast, removeToast }}
    >
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastProvider;
