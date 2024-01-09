import React from 'react';
import Link from 'next/link';
import { styles } from '../constants/styleGuide';
import { routes } from '../constants/routes';

const Header: React.FC = () => {
    return (
        <header className={styles.gradientBackground}>
            <div className={styles.container}>
                <div className={styles.flexCenter}>
                    <div className={styles.logo}>Your Logo</div>
                    <nav className={styles.nav}>
                        {routes.map((route, index) => (
                            <Link key={index} href={route.path} className={styles.link}>
                                {route.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;