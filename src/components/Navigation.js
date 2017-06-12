import React from 'react';
import { Link } from 'react-router';

const Navigation = () => (
    <ul className="nav navbar-nav navbar-right">
        <li><Link to="/" activeClassName="activeLink" onlyActiveOnIndex>Wallet</Link></li>
        <li><Link to="/history" activeClassName="activeLink">Transactions</Link></li>
        <li><Link to="/receive" activeClassName="activeLink">Receive</Link></li>
        <li><Link to="/send" activeClassName="activeLink">Send</Link></li>
        <li><Link to="/settings" activeClassName="activeLink">Settings</Link></li>
    </ul>
);

export default Navigation;
