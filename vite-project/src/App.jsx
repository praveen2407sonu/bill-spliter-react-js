import React, { useState } from 'react';

function BillSplitter() {
  const [bill, setBill] = useState('');
 
  const [tipPercentage, setTipPercentage] = useState('');
  const [people, setPeople] = useState('');

  const [tipAmount, setTipAmount] = useState();
  const [totalBill, setTotalBill] = useState();
  const [amountPerPerson, setAmountPerPerson] = useState();

  const calculateBill = () => {
    const billValue = Number(bill);
    const peopleValue = Number(people);
    const tipValue = Number(tipPercentage);

   
    const calculatedTipAmount = (billValue * tipValue)/100;
    const calculatedTotalBill = billValue + calculatedTipAmount;
    const calculatedAmountPerPerson = calculatedTotalBill / peopleValue;

    setTipAmount(calculatedTipAmount);
    setTotalBill(calculatedTotalBill);
    setAmountPerPerson(calculatedAmountPerPerson);
  };

  return (
    <div>
      <h2>Bill Sipliter</h2>
      <div>
        <label>Bill Amount</label>
        <input type="number" placeholder='Bill Amount' value={bill} 
        onChange={(e) => setBill(e.target.value)} />
      </div>
      <div>
        <label>Tip Percentage</label>
        <input type="number" placeholder='Tip amount percent' value={tipPercentage} 
        onChange={(e) => setTipPercentage(e.target.value)} />
      </div>

      <div>
        <label>Number of People</label>
        <input type="number" placeholder='Number of pepole' value={people} 
        onChange={(e) => setPeople(e.target.value)} />
      </div>
      
      <button onClick={calculateBill}>Calculate Bill</button>
      <div>
        <p>Tip Amount {tipAmount}</p>
        <p>Total Bill {totalBill}</p>
        <p>Amount Per Person {amountPerPerson}</p>
      </div>
    </div>
  );
}

export default BillSplitter