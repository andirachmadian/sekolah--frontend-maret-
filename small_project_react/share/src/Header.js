import React from 'react'
import './Header.css'

const abc = 'kecap';

function Header () {
    return(
        <div className='header'>
            <div>
                <h1>header</h1>
            </div>
        </div>
    )
}
function Footer () {
    return(
        <div className='header'>
            <div>
                <h1>Footer</h1>
            </div>
        </div>
    )
}

export {Header, Footer, abc}


