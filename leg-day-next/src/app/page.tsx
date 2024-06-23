"use client";
import { log } from "console";
import "./landingPage.css";
import { Fragment, useEffect, useState } from "react";
export default function Home() {
  const calculateTimeLeft = () => {
    const difference = +new Date("21-Oct-2024") - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, ["21-Oct-2024"]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval: any) => {
    timerComponents.push(
      <span key={interval} className="uppercase">
        {timeLeft[interval]}
        {interval}{" "}
      </span>
    );
  });
  return (
    <Fragment>
      <main className="flex">
        <div className="trasparentParallelogramTop"></div>
        <div className="orangeStripBig"></div>
        <div className="greyStripBig">
          <div className="text-white uppercase text-xs md:text-md">
            you’re FEARLESS - you’re FEARLESS - you’re FEARLESS - you’re
            FEARLESS - you’re FEARLESS - you’re FEARLESS - you’re FEARLESS -
            you’re FEARLESS - you’re FEARLESS - you’re FEARLESS - you’re
            FEARLESS - you’re FEARLESS - you’re FEARLESS - you’re FEARLESS -
            you’re FEARLESS - you’re FEARLESS
          </div>
        </div>

        <div className="x-Mark"></div>
        <div className="x-Mark"></div>
        <div className="x-Mark"></div>

        <div className="w-1/2 mt-20">
          <div className="bebas-neue-regular text-left text-nowrap uppercase font-bold text-3xl md:text-6xl lg:text-7xl orange-font ms-2 md:ms-2">
            Coming Soon
          </div>
          <div className=" text-nowrap uppercase ms-2 md:ms-2">
            <span className="orange-font font-bold">IN</span>
            <span
              id="demo"
              className="text-3xl md:text-6xl lg:text-7xl orange-font black-font"
            >
              {timerComponents.length ? (
                timerComponents
              ) : (
                <span>Time's up!</span>
              )}
            </span>
          </div>
          <div className="orange-font text-nowrap uppercase font-bold ld-highlight-border-bottom ms-2 md:ms-2">
            Launch on
            <span className="text-3xl md:text-6xl lg:text-7xl black-font">
              &nbsp;21 Oct,2024
            </span>
          </div>

          <div className="transparentTextOnLeft uppercase bebas-neue-regular text-9xl">
            Fitness
          </div>
        </div>
        <div className="w-1/2">
          <img className="heroImg" src="./images/heroimg.png" alt="mainimg" />
        </div>
      </main>

      <div className="w-full uppercase">
        <h1 className="bebas-neue-regular pb-6 text-center text-3xl md:text-6xl lg:text-7xl">
          what you get
        </h1>
        <div className="sm:flex sm:justify-between">
          <div className="oswald-font text-center p-5 rounded-md w-full sm:w-1/3 my-5">
            <img src="./images/plan.png" alt="" className="m-auto" />
            <p className="mt-4">Custom curated fitness plan</p>
          </div>
          <div className="oswald-font text-center p-5 rounded-md w-full sm:w-1/3 my-5">
            <img src="./images/strong.png" alt="" className="m-auto" />
            <p className="mt-4 sm:mt-0">
              rehab, crossfit,weight loss, strength training and more
            </p>
          </div>
          <div className="oswald-font text-center p-5 rounded-md w-full sm:w-1/3 my-5">
            <img src="./images/training.png" alt="" className="m-auto" />
            <p className="mt-4">stellar personal trainers</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
