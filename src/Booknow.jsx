import "./App.css";
import React, { useState } from "react";

function Booknow() {
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-style space-y-4 text-2xl" onSubmit={handleSubmit}>
      <label>
        Name and Surname:
        <input
          class="w-96 rounded-lg border-gray-200 p-3 text-sm"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 "> </div>
      <label className="">
        Tlf:
        <input
          class='class="w-96 rounded-lg border-gray-200 p-3 text-sm"'
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <label>
          E-mail:
          <input
            class="w-96 rounded-lg border-gray-200 p-3 text-sm"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <label>
          Persons:
          <input
            class="w-20 rounded-lg border-gray-200 p-3 text-sm"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <label>
          Choose your date:
          <input
            class='class="w-96 rounded-lg border-gray-200 p-3 text-sm" '
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </label>
    </form>
  );
}

export default Booknow;
