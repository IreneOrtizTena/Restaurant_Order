import './App.css';
import React, { useState } from "react";

function Booknow() {
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (

    <div>

      
      <form className="form-style" onSubmit={handleSubmit}>
        <label>
          Name and Surname:
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <label>
          Tlf:
          <input className=''
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <label>
            Choose your date:
            <input type="date" onChange={(e) => setDate(e.target.value)} />
          </label>
        </label>

        
      </form>
     


{/* The button to open modal */}

<label htmlFor="my-modal-3" className="btn mt-6 text-zinc-800">Booking!</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg text-zinc-900 font-bold">Congratulations your table is reserved!</h3>
    <p className="py-4">Please arrive 10 minutes before your reservation time.</p>
  </div>
</div>

</div>
   
  );
}

export default Booknow;
