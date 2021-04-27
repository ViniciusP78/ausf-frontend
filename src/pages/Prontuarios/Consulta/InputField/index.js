import Avatar from "components/Avatar"
import Box from '@material-ui/core/Box';
import useStyles from './style';

export default function InputField(label, input) {
  const classes = useStyles();

  return (
    <InputContainer>
      <Label>{label}</Label>
      {input}
    </InputContainer>
  );
}
