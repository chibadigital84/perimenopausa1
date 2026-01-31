import { motion } from 'framer-motion';

interface LotusIconProps {
  className?: string;
  size?: number;
}

export const LotusIcon = ({ className = '', size = 40 }: LotusIconProps) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* Center petal */}
    <ellipse cx="50" cy="45" rx="8" ry="25" fill="currentColor" opacity="0.9" />
    
    {/* Left petals */}
    <ellipse cx="35" cy="48" rx="8" ry="22" fill="currentColor" opacity="0.7" transform="rotate(-20 35 48)" />
    <ellipse cx="22" cy="55" rx="7" ry="18" fill="currentColor" opacity="0.5" transform="rotate(-40 22 55)" />
    
    {/* Right petals */}
    <ellipse cx="65" cy="48" rx="8" ry="22" fill="currentColor" opacity="0.7" transform="rotate(20 65 48)" />
    <ellipse cx="78" cy="55" rx="7" ry="18" fill="currentColor" opacity="0.5" transform="rotate(40 78 55)" />
    
    {/* Base */}
    <path
      d="M30 70 Q50 80 70 70"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
      opacity="0.6"
    />
  </motion.svg>
);

export default LotusIcon;
