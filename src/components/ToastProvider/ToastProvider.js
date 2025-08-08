import React from "react";

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = ({ message, variant }) => {
    setToasts([...toasts, { message, variant, id: crypto.randomUUID() }]);
  };

  const removeToast = (id) => {
    const updatedToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(updatedToasts);
  };

  const clearToasts = () => {
    setToasts([]);
  };

  return (
    <ToastsContext.Provider
      value={{ toasts, setToasts, addToast, removeToast, clearToasts }}
    >
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastProvider;
