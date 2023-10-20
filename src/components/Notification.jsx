const Notification = (toast, severity, summary, detail) => {
  toast.current.show({ severity, summary, detail, life: 3000 });
};

export default Notification;
