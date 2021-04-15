export const openConfirmation = ({ title, content, onYes }) => ({
  type: '@confirmation/OPEN_CONFIRMATION',
  payload: { title, content, onYes },
});

export const closeConfirmation = () => ({
  type: '@confirmation/CLOSE_CONFIRMATION',
});
