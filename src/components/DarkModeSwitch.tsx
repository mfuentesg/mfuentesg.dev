import { MouseEvent, useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const variants = {
  dark: { rotate: -90, scale: 1 },
  light: { rotate: 0, scale: 1 }
};

interface Props {
  onClick: () => void;
  className: string;
  theme: 'dark' | 'light';
}

export default function Switch({ className = '', theme = 'dark', onClick }: Props) {
  const [enabled, setEnabled] = useState(theme === 'dark');
  const onClickHandler = (evt: MouseEvent<HTMLButtonElement>) => {
    setEnabled((prevState) => !prevState);
    const newTheme = enabled ? 'light' : 'dark';
    if (onClick) {
      onClick();
    }

    document.cookie = `theme=${newTheme}`;
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      variants={variants}
      animate={enabled ? 'light' : 'dark'}
      transition={{
        type: 'spring',
        stiffness: 460,
        damping: 60
      }}
      className={className}
      onClick={onClickHandler}
    >
      {enabled ? <SunIcon height="36" width="36" /> : <MoonIcon height="36" width="36" />}
    </motion.button>
  );
}
