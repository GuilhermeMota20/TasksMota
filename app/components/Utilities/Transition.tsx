import { motion } from 'framer-motion';

const transitionVariantes = {
  initial: {
    x: '100%',
    eidth: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  }
};

export default function Transition() {
  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 rotate-2 right-full w-screen h-screen z-30 bg-slate-100 dark:bg-darkBlue-900'
        variants={transitionVariantes}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className='fixed top-0 bottom-0 rotate-2 right-full w-screen h-screen z-20 bg-slate-200 dark:bg-darkBlue-800'
        variants={transitionVariantes}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className='fixed top-0 bottom-0 rotate-2 right-full w-screen h-screen z-10 bg-slate-300 dark:bg-darkBlue-700'
        variants={transitionVariantes}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
    </>
  )
}