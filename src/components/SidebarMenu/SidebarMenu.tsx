import { AnimatePresence, motion } from 'framer-motion';
import styles from './SidebarMenu.module.scss';
import { SidebarItem } from './SidebarItem/SidebarItem';
import { MenuButton } from '../ui/MenuButton/MenuButton';

export type Item = {
  label: string;
  children?: Item[];
};

export type SidebarMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  items: Item[];
};

export const SidebarMenu = ({ isOpen, onClose, items, onOpen }: SidebarMenuProps) => {
  return (
    <>
      <aside className={styles.sidebar}>
        {!isOpen && (<div className={styles.header}>
          <MenuButton onClick={onOpen} />
        </div>)}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div 
                className={styles.backdrop} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose} 
              />

              <motion.div 
                className={styles.panel}
                initial={{ x: 280 }}
                animate={{ x: 0 }}
                exit={{ x: 280 }}
                transition={{ type: 'tween' }}
              >
                <nav className={styles.nav}>
                  {items.map((item) => (
                    <SidebarItem key={item.label} item={item} />
                  ))}
                </nav>
                <div className={styles.footer}>
                  <span className={styles.version}>v.01</span>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </aside>
    </>
  );
};