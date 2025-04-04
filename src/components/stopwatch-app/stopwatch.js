import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SW() {
  const [time, setTime] = useState(0)
  // time is the current state, setTime is the function that is used
  // to update our state 
  const [running, setRunning] = useState(false)
  // preform side effects 
  //callback and dependancies 
  useEffect(() =>{
    let interval; 

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      clearInterval(interval); 
    }

    return () => clearInterval(interval); 
  }, [running]); 

  return (
   <>
   <div>
   <h1 className='lg-header'> 01-stopwatch</h1>
   </div>
    <Link to="/">
      <button>
        go back to home page
      </button>
    </Link>

    <div>
      <span>{("0" + Math.floor((time/3600000) % 24)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time/60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time/1000) % 60)).slice(-2)}</span>
    </div>
    <div>
      {
        running ? 
        (<button onClick={() => {setRunning(false)}}>Stop</button>) : 
        (<button onClick={() => {setRunning(true)}}>Start</button>)
      }
      <button onClick={() => {setTime(0)}}>reset</button>
    </div>
   </>
  );
}

export default SW;
