import styles from './CloseButton.module.scss';

type CloseButtonProps = {
  onClear: () => void;
  type: 'toast' | 'input';
}

export const CloseButton = ({onClear, type}: CloseButtonProps) => {
  return (
    <button data-type={type} className={styles.iconClose} onClick={onClear} type="button">
      X
    </button>
  )
}