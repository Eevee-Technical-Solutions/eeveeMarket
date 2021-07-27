import React, { FC, useEffect, useState } from 'react';
import Box from '@material-ui/core'

function countdown() {
  const [countDown, setCountDown] = React.useState(0);
  const [runTimer, setRunTimer] = React.useState(false);
//mount useeffect
// if countdown is 0 reset it.
  React.useEffect(() => {
    let timerId;

    if (runTimer) {
      setCountDown(60 * 5);
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [runTimer]);

  //fetch api winner make these in app

  //fetch at api homepage make these in app
  React.useEffect(() => {
    if (countDown < 0 && runTimer) {
      console.log("expired");
      setRunTimer(false);
      setCountDown(0);
    }
  }, [countDown, runTimer]);

  
  const togglerTimer = () => setRunTimer((t) => !t);

  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);


  return (
    <div className="Timer">
      <div>
        Time: {minutes}:{seconds}
      </div>
      <button type="button" onClick={togglerTimer}>
        {runTimer ? "Stop" : "Start"}
      </button>
    </div>
  );
}

//how to get all of this into a box and trigger only on first start


export const Timer = () => {
    return (
        <>
        </>
    )
}