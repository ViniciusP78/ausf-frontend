export default (cpf) => {
  const newCpf = cpf.replace('.', '').replace('.', '').replace('-', '');

  let sum;
  let rest;
  sum = 0;

  const regex = /^(?:(\d)\1{10})$|(\D)|^(\d{12,})$|^(\d{0,10})$/g;

  if (newCpf.match(regex)) return false;

  for (let i = 1; i <= 9; i++)
    sum += parseInt(newCpf.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(newCpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(newCpf.substring(i - 1, i)) * (12 - i);
  }
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(newCpf.substring(10, 11))) return false;

  return true;
};
