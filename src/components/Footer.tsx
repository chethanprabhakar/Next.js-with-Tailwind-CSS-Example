import React from 'react';
import { styles } from '../constants/styleGuide';
import { strings } from '../constants/strings';


const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>{strings.footer.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
        </footer>
    );
};

export default Footer;
