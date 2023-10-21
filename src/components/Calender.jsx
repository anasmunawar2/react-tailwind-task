import { useState } from "react";
import Left from "../assets/icons/leftArrow.svg";
import Right from "../assets/icons/rightArrow.svg";

const CalendarComponent = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const daysInMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = () => {
    return new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();
  };

  const isCurrentDay = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const generateCalendarGrid = () => {
    const totalDays = daysInMonth();
    const startingDay = firstDayOfMonth();
    const calendarGrid = [];

    let day = 1;
    for (let week = 0; week < 6; week++) {
      const calendarRow = [];
      for (let weekday = 0; weekday < 7; weekday++) {
        if (week === 0 && weekday < startingDay) {
          calendarRow.push(null);
        } else if (day <= totalDays) {
          calendarRow.push(day);
          day++;
        }
      }
      calendarGrid.push(calendarRow);
    }

    return calendarGrid;
  };

  const calendarGrid = generateCalendarGrid();

  return (
    <div className="max-w-sm w-full bg-calender-back shadow-md mt-5 rounded-3xl">
      <div className="md:p-8 p-5 dark:bg-gray-800 bg-calender-back mt-4">
        <div className="px-4 flex items-center justify-between">
          <span
            tabIndex="0"
            className="focus:outline-none text-base font-bold dark:text-gray-100 text-gray-800"
          >
            {currentMonth.toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <div className="flex items-center">
            <button
              aria-label="calendar backward"
              onClick={prevMonth}
              className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
            >
              <img src={Left} alt="left" />
            </button>
            <button
              aria-label="calendar forward"
              onClick={nextMonth}
              className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
            >
              <img src={Right} alt="right" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between pt-12 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th>Mo</th>
                <th>Tu</th>
                <th>We</th>
                <th>Th</th>
                <th>Fr</th>
                <th>Sa</th>
                <th>Su</th>
              </tr>
            </thead>
            <tbody>
              {calendarGrid.map((week, weekIndex) => (
                <tr key={weekIndex}>
                  {week.map((day, dayIndex) => (
                    <td key={dayIndex} className="pt-6">
                      {day !== null ? (
                        <div
                          onClick={() => handleDateClick(day)}
                          className={`px-2 py-2 cursor-pointer flex w-full justify-center rounded-full ${
                            isCurrentDay(day)
                              ? "bg-light-blue text-white"
                              : selectedDate === day
                              ? "bg-indigo-200"
                              : ""
                          }`}
                        >
                          <p
                            className={`text-base ${
                              isCurrentDay(day)
                                ? "font-medium"
                                : "text-gray-500"
                            }`}
                          >
                            {day}
                          </p>
                        </div>
                      ) : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
