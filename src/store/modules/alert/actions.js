
export const openAlert = ({ message, severity, duration }) => ({
  type: '@alert/OPEN_ALERT',
  payload: {
    message,
    severity,
    duration,
  }
});

export const closeAlert = () => ({
  type: '@alert/CLOSE_ALERT',
});