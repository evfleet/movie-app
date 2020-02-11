import styled from "../../styles/themed-styled";

import { Wrapper } from "../../shared/styled";

const NavWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colours.darkBlue};
`;

export { NavWrapper };
