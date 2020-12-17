import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';

function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container >
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" />
                    Re-vents
                </Menu.Item>
                <Menu name="Events" />
                <Menu.Item>
                    <Button positive inverted content="Create Events" />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button positive inverted content="Login" />
                    <Button positive inverted content="Register" style={{ marginLeft: '0.5em' }} />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar;