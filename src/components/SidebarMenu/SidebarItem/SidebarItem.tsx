import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../SidebarMenu.module.scss';
import type { Item } from '../SidebarMenu';

export const SidebarItem = ({ item }: { item: Item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className={styles.itemContainer}>
      <div 
        className={styles.itemLabel} 
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        <span>{item.label}</span>
        {hasChildren && (
          <motion.span animate={{ rotate: isExpanded ? 180 : 0 }}>
            ^
          </motion.span>
        )}
      </div>

      <AnimatePresence>
        {hasChildren && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={styles.subMenu}
          >
            {item.children?.map((child) => (
              <SidebarItem key={child.label} item={child} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};