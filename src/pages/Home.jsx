import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
    function activeClassName({isActive}) {
        return isActive ? "list-group-item demo" : "list-group-item"
      }
    return (
        <div>
            <h3>I am HOME</h3>
            <ul className="nav nav-tabs">
                <li>
                    <NavLink className={activeClassName} to="news">News</NavLink>
                </li>
                <li>
                    <NavLink className={activeClassName} to="message">Message</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}
