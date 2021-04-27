import styled, { css } from 'styled-components';
import getColor from 'utils/getColor';

export const Container = styled.p`
  font-size: ${({ size }) => size};
  text-align: ${({ align }) => align};
  color: ${({ color, theme }) => getColor(color, theme) || color};
  margin: ${({ margin }) => margin};
  font-weight: ${({ weight }) => (weight ? weight : '400')};
  line-height: ${({ lineHeight }) => lineHeight ? lineHeight : 'normal'};
  text-transform: ${({ transform }) => transform ? transform : 'none'};

  ${({ noOverflow }) => noOverflow && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  ${({ pointer }) => pointer &&  css`
    cursor: pointer;
  `}

  ${({clamp}) => clamp && css`
    display: -webkit-box;
    -webkit-line-clamp: ${clamp};
    -webkit-box-orient: vertical;  
    overflow: hidden;
  `}
`;
