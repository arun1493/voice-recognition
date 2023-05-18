import { FunctionComponent } from "react";

import StyledPage from "./page.styled";

const Page: FunctionComponent = ({ children }) => <StyledPage>{children}</StyledPage>;

export { Page };

export default Page;
