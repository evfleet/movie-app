import styled from "../../styles/themed-styled";

import { Wrapper } from "../../styles/components";

const NavWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colours.darkBlue};
`;

export { NavWrapper };
