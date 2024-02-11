import { useCallback, useEffect, useRef, useState } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useAllTasks } from '../../services/hooks/useAllTasks';
import { useTasksOfTheDay } from '../../services/hooks/useTasksOfTheDay';

export default function AnimationConfetti() {
  const { allTasks } = useAllTasks();
  const { tasksOfTheDay } = useTasksOfTheDay();

  const [isShow, setIsShow] = useState(false);

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback(instance => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  const fireConfetti = useCallback(() => {
    makeShot(0.25, { spread: 26, startVelocity: 55 });
    makeShot(0.2, { spread: 60 });
    makeShot(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    makeShot(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    makeShot(0.1, { spread: 120, startVelocity: 45 });
  }, [makeShot]);

  useEffect(() => {
    const todayTasksDone = tasksOfTheDay?.filter(task => task.completed) || [];
    const percentageTodayTasks = tasksOfTheDay.length > 0 ? (todayTasksDone.length * 100) / tasksOfTheDay.length : 0;

    const allTasksDone = allTasks?.filter(task => task.completed) || [];
    const percentageAllTasks = allTasks.length > 0 ? (allTasksDone.length * 100) / allTasks.length : 0;

    if ((percentageTodayTasks === 100 || percentageAllTasks === 100) && !isShow) {
      setIsShow(true);
    } else if ((percentageTodayTasks !== 100 && percentageAllTasks !== 100) && isShow) {
      setIsShow(false);
    };
  }, [tasksOfTheDay, allTasks, isShow]);

  useEffect(() => {
    if (isShow) {
      fireConfetti();
    };
  }, [isShow, fireConfetti]);

  return (
    <>
      {isShow && (
        <ReactCanvasConfetti
          refConfetti={getInstance}
          style={{
            position: 'fixed',
            pointerEvents: 'none',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 99999
          }}
        />
      )}
    </>
  );
}
