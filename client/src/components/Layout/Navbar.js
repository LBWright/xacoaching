import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                XA Coaching
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar"
                aria-controls="navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/coaches">
                            Coaches
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/clients">
                            Clients
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/discussion">
                            Discussion
                        </Link>
                    </li>
                </ul>
                {/* Not sure what this is going to search yet but I like it */}
                <form className="form-inline my-2 my-md-0">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search"
                    />
                </form>
            </div>
        </nav>
    )
}
