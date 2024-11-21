import React, { useState } from 'react';

function SwapRequestForm() {
  const [employeeId, setEmployeeId] = useState('');
  const [currentShift, setCurrentShift] = useState('');
  const [desiredShift, setDesiredShift] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log('Employee ID:', employeeId);
    console.log('Current Shift:', currentShift);
    console.log('Desired Shift:', desiredShift);
    console.log('Reason:', reason);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... form fields and input handlers ... */}
      <button type="submit">Submit Request</button>
    </form>
  );
}

export default SwapRequestForm;

import React, { useState } from 'react';

function SwapRequestForm() {
  const [newShiftStart, setNewShiftStart] = useState('');
  const [newShiftEnd, setNewShiftEnd] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/swap_request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        employee_id: 'your_employee_id', // Replace with actual employee ID
        new_shift_start: newShiftStart,
        new_shift_end: newShiftEnd
      })
    });

    const data = await response.json();

    if (data.error) {
      alert(data.error);
    } else {
      alert(data.message);
    }
  };

  // ... rest of the form and input fields
}