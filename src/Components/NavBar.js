import React,{useState} from 'react'

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes"
// import { useState } from 'react';


 const NavBar = () => {
  const [theme, setTheme] = useState('light');
    const themeToggler = (events) => {
      // events.preventDefault;
      theme === 'light' ? setTheme('dark') : setTheme('light')
    }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles/>
    <div ><nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">TextAnalyzer</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" target="_blank" href="https://jainam0401.github.io/Jainam-s-Profile/">About</a>
          </li>
        </ul>
          
          <button onClick={themeToggler} className="btn btn-outline-primary">DarkMode</button>
     
      </div>
    </div>
  </nav></div>
  </>
    </ThemeProvider>
  )
}

export default NavBar;