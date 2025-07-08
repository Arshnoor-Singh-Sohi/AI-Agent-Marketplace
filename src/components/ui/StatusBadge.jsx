import React from 'react';
import { STATUS_CONFIG } from '../../data/constants';

const StatusBadge = ({ status }) => {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.development;

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.bgColor} text-white`}>
      {config.emoji} {config.label}
    </span>
  );
};

export default StatusBadge;