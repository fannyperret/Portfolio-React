import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';

import MoonIcon from '../assets/img/icons/moon.png';
import SunIcon from '../assets/img/icons/sun.png';

const ToggleContainer = styled.button`
    position: relative;
    display: flex;
    justify-content: space-between;
    background: ${({ theme }) => theme.gradient};
    width: 8rem;
    height: 3.5rem;
    // height: 3rem;
    margin: 0 auto;   
    border-radius: 30px;
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    font-size: 0.5rem;
    padding: 0.5rem;
    overflow: hidden;

    outline: none;

    button {
        outline: none;
    }
    
    .icon-theme {
    width: 2.5rem;
    // width: 2rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
        transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    &:nth-child(2) {
        transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
}
`;


const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    
    return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
        <img src={SunIcon} className="icon-theme"alt={"logo"}/> 
        <img src={MoonIcon} className="icon-theme" alt={"logo"}/>
    </ToggleContainer>
    );
};

Toggle.propTypes = {
    toggleTheme: func.isRequired,
    theme: string.isRequired,
}

export default Toggle;