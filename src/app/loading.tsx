'use client'
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense } from 'react';
import Transition from './components/Utilities/Transition';

export default function Loading() {
  return (
    <>
      <Suspense>
        <div className='bg-slate-200 dark:bg-darkBlue-900 h-screen w-screen'>
          <AnimatePresence mode='sync'>
            <motion.div className='h-full'>
              <Transition />
            </motion.div>
          </AnimatePresence>
        </div>
      </Suspense>
    </>
  )
}