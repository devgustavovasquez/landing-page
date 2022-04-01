import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;

    @media ${theme.medias.lteMedium} {
      flex-flow: column wrap;
      align-items: center;
    }
  `}
`;
