import { strings } from '../constants/strings';
import { styles } from '../constants/styleGuide';

export const About: React.FC = () => (
    <section className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>{strings.about.title}</h2>
        <p className={styles.aboutDescription}>{strings.about.description}</p>
        {/* Other sections */}
    </section>
);