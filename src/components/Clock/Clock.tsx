import React, {useEffect, useState} from 'react';
import s from "./clock.module.css";



const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {


        const setIntervalId = setInterval(() => {
            console.log(date,'here')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(setIntervalId) // vypolnitsa pered tem kak komponenta unMount sdelaet
        } // eta fukncija vyzovitsa, kogda komponenta budet rerenderitsa / umiratj
    }, [])

    const get2DigitsTimeUnits = (unit: number) => unit < 10 ? "0" + unit : unit

    function time(timeUnit: string) {
        if (timeUnit === "seconds") return get2DigitsTimeUnits(date.getSeconds())
        else if (timeUnit === "minutes") return get2DigitsTimeUnits(date.getMinutes())
        else return get2DigitsTimeUnits(date.getHours())
    }

    const hour = date.getHours() * 30 + 180 // Move 30degree on first hour, 60 degree on second and so on.
    const minute = date.getMinutes() * 6 + 180//same as above.
    const second = date.getSeconds() * 6 + 180//same as above.

    return <span>
        {time("hours")}:
        {time("minutes")}:
        {time("seconds")}
        <div className="clock">
      <div className={s.hourHand}
           style={{ transform: "rotate(" + hour + "deg)" }}
      ></div>
       <div className={s.minuteHand}
            style={{ transform: "rotate(" + minute + "deg)" }}
       ></div>
       <div className={s.secondHand}
            style={{ transform: "rotate(" + second + "deg)"}}
       ></div>
  </div>
        </span>
};

export default Clock;