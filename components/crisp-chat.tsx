'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('ed9fcac5-9387-4aa9-a0a6-93170a121efe');
  }, []);

  return null;
};
