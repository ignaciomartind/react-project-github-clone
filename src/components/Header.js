import logo from '../media/github-logo.png'

import './header.css'

import {Link} from 'react-router-dom'

export default function Header(){
    return <div className="header">
        <div className='header-left'>
            <img src={logo} alt="logo"/>
            <input type={"search"} placeholder="Search or jump to..." />
        </div>
        <nav>
            <ul>
                <li><Link to="/decoration">Pull requests</Link></li>
                <li><Link to="/decoration">Issues</Link></li>
                <li><Link to="/decoration">Marketplace</Link></li>
            </ul>
        </nav>
    </div>
}