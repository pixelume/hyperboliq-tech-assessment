import styled, { css } from 'styled-components';
// import { Link } from 'gatsby';

export const TableContainer = styled.div`
  position: relative;
  padding: 5px;
  margin: 25px auto auto;
  overflow-x: auto;
  font-size: 0.7em;
  @media screen and (min-width: ${({theme}) => theme.mobileMenu}) {
    /* width: 80%; */
    font-size: 0.9em;
  }
`;

export const Table = styled.table`
  margin: auto;
  border-radius: 10px;
  font-size: 0.8em;
  border-collapse: collapse;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  min-width: 768px;
`;

export const Td = styled.td`
  text-align: left;
  padding: 20px;
  text-align: left;
  vertical-align: top;
  &:nth-child(1) {
    background-color: ${({ theme }) => theme.mediumLight1};
    padding: 30px;
  }
  & a,
  a:visited {
    color: inherit;
  }
`;

export const TdChildMultiLine = styled.div`
  margin-bottom: 5px;
  &:nth-last-child() {
    margin-bottom: 0px;
  }
`;

export const Thead = styled.thead`
  background-color: ${({ theme }) => theme.mediumLight1};
`;

export const Tbody = styled.tbody`
  color: grey;
`;

export const Th = styled.th`
  padding: 10px 20px;
  text-align: left;
  white-space: nowrap;
  &:nth-child(1) {
    text-align: center;
  }
`;

export const Tr = styled.tr`
  border-bottom: 1px solid rgb(238, 243, 246);
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.warmWhite};
  }
`;

export const Ul = styled.ul`
  padding-left: 15px;
`;
// export const StLink = styled(Link)`
//   cursor: pointer;
// `;
export const StCol = styled.col`
  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : null}
  ${({ minWidth }) =>
    minWidth
      ? css`
          min-width: ${minWidth};
        `
      : null}
`;
