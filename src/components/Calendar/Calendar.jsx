import React, { useState, useEffect } from "react";
import s from "./Calendar.module.css";

const Calendar = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const today = new Date();
    const tempDates = [];
    const startDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    // Ensure we start from the first day of the week (Sunday)
    startDay.setDate(startDay.getDate() - startDay.getDay());

    // Add dates for the next 14 days
    for (let i = 0; i < 14; i++) {
      const newDate = new Date(startDay);
      newDate.setDate(startDay.getDate() + i);
      tempDates.push(newDate);
    }

    setDates(tempDates);
  }, []);

  const formatDate = (date) => {
    const options = { day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const getDayName = (date) => {
    const options = { weekday: 'short' };
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <div className={s.calendarContainer}>
      <div className={s.weekdays}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div key={index} className={s.weekday}>{day}</div>
        ))}
      </div>
      <div className={s.datesGrid}>
        {dates.map((date, index) => (
          <div key={index} className={s.calendarDay}>
            <div className={s.date}>{getDayName(date)} {formatDate(date)}</div>
            <div className={s.text}>Sample Text</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
