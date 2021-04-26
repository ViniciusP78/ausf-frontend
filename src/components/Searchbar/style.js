import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

// export default useStyles((theme) => ({
//     root: {
//       padding: '2px 4px',
//       display: 'flex',
//       alignItems: 'center',
//       width: 400,
//     },
//     input: {
//       marginLeft: theme.spacing(1),
//       flex: 1,
//     },
//     iconButton: {
//       padding: 10,
//     },
//     divider: {
//       height: 28,
//       margin: 4,
//     },
//   }));

export const Container = styled.div`
  display:flex;
  flex-direction:row;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12);
  border-radius: 3px;
  padding:25px;
`;

