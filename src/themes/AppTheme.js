import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import Toggle from '../components/Toggle';

function AppTheme() {
    
    const [theme, toggleTheme, componentMounted] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />
    };
    
    return (
    
    <ThemeProvider theme={themeMode}>
        <>
            <GlobalStyles />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            {/* <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1> */}
        </>
    </ThemeProvider>
    
    );

}

export default AppTheme;