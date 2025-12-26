import styles from './MenuButton.module.scss';
import menuIcon from '../../../icons/menu.svg';

export const MenuButton = ({ onClick }: {onClick: () => void }) => {
  return (
    <button className={styles.menuButton} type="button" onClick={onClick}>
      <img className={styles.menuButton__icon} src={menuIcon} alt="Menu" />
    </button>
  )
}