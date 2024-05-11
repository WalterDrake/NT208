import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="mx-auto w-[90%]">
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={({ date, view }) =>
          view === 'month' && date.getDay() === 0 ? <p>Custom content</p> : null
        }
      />
    </div>
  );
}

export default MyCalendar;