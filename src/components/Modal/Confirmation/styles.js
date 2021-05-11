import styled, { keyframes, css } from 'styled-components';
import { fadeInUp } from 'react-animations';

import GenericButton from 'components/Button';
import getColor from 'utils/getColor';

const fadeInAnimation = keyframes`${fadeInUp}`;

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`; 

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.dark.main};
  font-weight: 600;
  font-size: 16px;
`;

export const CloseWrapper = styled.div`
  display: flex;
  margin-left: 14px;
  cursor: pointer;

  &:hover svg path {
  }
`;

export const Modal = styled.div`
  background-color: white;
  max-width: 320px;
  border-radius: 5px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.2);
  animation: .3s ${fadeInAnimation};
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
`;

export const ModalContent = styled.main`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.grey.main};

  line-height: 1.6;
  font-size: 16px;
  font-weight: 500;
`;

export const ModalControls = styled.div`
  margin-top: 16px;
  display: flex;
`;

export const Button = styled.button`
  background-color: ${({ backgroundColor, theme }) => getColor(backgroundColor, theme)};
  padding: 12px;
  border-radius: 5px;
  border: none;
  flex: 1;

  cursor: pointer;
  color: ${({ color, theme }) => getColor(color, theme)};;
  font-size: 16px;
  font-weight: 500;

  &:first-child {
    margin-right: 16px;
  }
`;