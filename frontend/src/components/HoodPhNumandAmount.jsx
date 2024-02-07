// import React, { useState } from 'react';

// const HoodPhNumandAmount = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [amount, setAmount] = useState('');

//   const handlePhoneNumberChange = (e) => {
//     const input = e.target.value.replace(/\D/g, '');
//     setPhoneNumber(input);
//   };

//   const handleAmountChange = (e) => {
//     const input = e.target.value.replace(/\D/g, '');
//     setAmount(input);
//   };

//   const handleAuthenticate = () => {
//     // Replace 'yourApiEndpoint' with the actual API endpoint
//     const apiEndpoint = 'yourApiEndpoint';

//     // Send the data to the backend
//     fetch(apiEndpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ phoneNumber, amount }),
//     })
//       .then(response => response.json())
//       .then(data => {
//         // Handle the response from the backend as needed
//         console.log(data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         // Display a user-friendly error message or handle the error as needed
//       });
//   };

//   return (
//     <div className="text-white">
//       <label>
//         Phone Number:
//         <input
//           type="text"
//           placeholder="Phone number"
//           value={phoneNumber}
//           onChange={handlePhoneNumberChange}
//           className="text-black" 
//         />
//       </label>
//       <br />
//       <label>
//         Amount:
//         <input
//           type="text"
//           placeholder="Amount"
//           value={amount}
//           onChange={handleAmountChange}
//           className="text-black" 
//         />
//       </label>
//       <br />
//       <button onClick={handleAuthenticate}>Authenticate</button>
//     </div>
//   );
// };

// export default HoodPhNumandAmount;




import React, { useState } from 'react';

const HoodPhNumandAmount = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    setPhoneNumber(input);
  };

  const handleAmountChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    setAmount(input);
  };

  const handleAuthenticate = () => {
    // Replace 'yourApiEndpoint' with the actual API endpoint
    const apiEndpoint = 'yourApiEndpoint';

    // Send the data to the backend
    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber, amount }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the backend as needed
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
        // Display a user-friendly error message or handle the error as needed
      });
  };

  return (
    <div className="text-white p-4 border rounded-lg w-[300px] mx-auto mt-8">
      <label className="block mb-2">
        Phone Number:
        <input
          type="text"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="w-full	 px-4 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300" 
        />
      </label>
      <label className="block mb-2">
        Amount:
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={handleAmountChange}
          className="w-full px-4 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300" 
        />
      </label>
      <button onClick={handleAuthenticate} className="w-full bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300">Authenticate</button>
    </div>
  );
};

export default HoodPhNumandAmount;

