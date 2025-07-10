import React from 'react';
import { motion } from 'framer-motion';
import { STATUS_CONFIG } from '../../data/constants';

const StatusBadge = ({ status }) => {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.development;

  return (
    <motion.span 
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${config.bgColor}`}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <span>{config.emoji}</span>
      <span>{config.label}</span>
    </motion.span>
  );
};

export default StatusBadge;