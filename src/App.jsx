import React from "react";
import { FaGithub } from 'react-icons/fa';


const App = () => {
    return (
        <>
            <nav>
                <a 
                    href="https://www.gonza.gr/" 
                    target="_blank"
                >
                    <img src="/logo.png" alt="logo" className='logo' /> 
                </a>
                <a 
                    href="https://github.com/gonzagramaglia/social" 
                    className='github-logo-container'
                    target="_blank"
                >
                    <FaGithub size={23} style={{ color: '#a9a6c3' }} />
                </a>
            </nav>
            <div>
                <h1>Hello World!</h1>
            </div>
        </>
    )
}

export default App