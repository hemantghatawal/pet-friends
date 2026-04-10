import { Nav, Brand, Links, StyledNavLink } from "./Navbar.styles";

export default function Navbar() {
    return (
        <Nav>
            <Brand to="/">🐾 PetFriends</Brand>
            <Links>
                <StyledNavLink to="/" end>Gallery</StyledNavLink>
                <StyledNavLink to="/about">About</StyledNavLink>
            </Links>
            <div> </div>
        </Nav>
    );
}
