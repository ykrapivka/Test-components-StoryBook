import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Toast.module.scss';
import { CloseButton } from '../ui/CloseButton/CloseButton';

export type ToastProps = {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
  duration: number;
}

export const Toast = ({ type, message, onClose, duration = 3000 }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      className={styles.toast}
      data-type={type}
    >
      <div className={styles.toast__header}>
        <p className={styles.toast__title}>{type.toUpperCase()}</p>
        <CloseButton type="toast" onClear={onClose} />
      </div>
      <p className={styles.toast__body}>{message}</p>
    </motion.div>
  );
};