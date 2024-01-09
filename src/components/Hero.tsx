import { strings } from '../constants/strings';
import { styles } from '../constants/styleGuide';

export const Hero: React.FC = () => (
    <div className={`${styles.gradientBackground} ${styles.fullScreenMinHeight} ${styles.flexCenterColumn} ${styles.spaceY8}`}>
        <h1 className={styles.text6xlBold}>{strings.hero.title}</h1>
        <p className={styles.text2xl}>{strings.hero.description}</p>
        <button className={styles.homeButton}>{strings.hero.buttonText}</button>
    </div>
);