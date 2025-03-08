'use client';

import { motion } from 'framer-motion';

export const MotionDiv = ({ children }: { children: React.ReactNode }) => {
    return <motion.div>{children}</motion.div>;
};