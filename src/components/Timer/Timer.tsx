"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type TimeProps = {
  className?: string;
  id?: string;
}

const Countdown = ({ className, id }: TimeProps ) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date("2025-08-31T00:00:00") - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="flex gap-2 text-lg font-poppins">
      <div className="flex flex-col items-center">
        <div className={className}>{format(timeLeft.days)}</div>
        <p className={id}>Days</p>
      </div>
      :
      <div className="flex flex-col items-center">
        <div className={className}>{format(timeLeft.hours)}</div>
        <p className={id}>Hours</p>
      </div>
      :
      <div className="flex flex-col items-center">
        <div className={className}>{format(timeLeft.minutes)}</div>
        <p className={id}>Mins</p>
      </div>
      :
      <div className="flex flex-col items-center">
        <div className={className}>{format(timeLeft.seconds)}</div>
        <p className={id}>Secs</p>
      </div>
    </div>
  );
};

export default Countdown;
