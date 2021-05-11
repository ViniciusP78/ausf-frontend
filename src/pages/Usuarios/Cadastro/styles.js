import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';

export const Content = styled.div`
  padding: 48px 24px;
`;
export const Container = styled.div`
`;

export default makeStyles(theme => ({
    selectItem: {
        width:'100%',
        fontSize: '14px',
        borderRadius: '5px',
        transition: 'border-color 200ms linear',
        '&::before':{borderBottom:'none !important'},
        '&::placeholder': {
            fontSize: '14px',
            color: '#aeaeb2',
        },
        padding:'11px',
        backgroundColor:theme.palette.grey.light
    },
    selectLabel: {
    display: 'inline-block',
    width:'100%',
    fontSize: '16px',
    fontWeight: '500',
    marginBottom:' 5px',
    color: '#B4B4B4',
    }
}));