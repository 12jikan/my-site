import React from 'react';
import Link from 'next/link';

export default function NavbarComponent() {
    return (
        <>
            <nav className="navbar is-dark">
                <div className="navbar-brand">
                    <a className="navbar-item subtite is-size-5 has-text-weight-light">Jareem Hoff</a>
                </div>

                <div className="navbar-end">
                    <Link href="/">
                        <a className="navbar-item">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="navbar-item">About</a>
                    </Link>
                    <Link href="/projects">
                        <a className="navbar-item">Current Projects</a>
                    </Link>
                </div>
            </nav>
        </>
    )
}