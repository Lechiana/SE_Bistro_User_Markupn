import React, { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import th from "date-fns/locale/th";

import "react-datepicker/dist/react-datepicker.css";

registerLocale("th", th);
export default function App() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="App">
      <DatePicker
        type="text"
        className="input input-bordered w-96"
        locale="th"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}
