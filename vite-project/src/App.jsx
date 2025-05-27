import React, { useState } from 'react';

function BillSplitter() {
  const [bill, setBill] = useState('');
 
  const [tipPercentage, setTipPercentage] = useState('');
  const [people, setPeople] = useState('');

  const [tipAmount, setTipAmount] = useState();
  const [totalBill, setTotalBill] = useState();
  const [amountPerPerson, setAmountPerPerson] = useState();

  const calculateBill = () => {

     if (!bill || !tipPercentage || !people) {
    alert('Please fill all input fields .');
    return;
  }
    


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
   
    <div className="container">
  <div className="inputs">
    <h2>Bill Splitter</h2>
    <div>
      <label>Bill Amount</label><br /><br />
      <input type="number" placeholder='Bill Amount' value={bill} 
      onChange={(e) => setBill(e.target.value)} />
    </div>
    <div>
      <label>Tip Percentage</label><br /><br />

     <ul className='unlist' >
                {[5,10,15,25,50,75].map((value)=>(
                    
                    <li key={value} className='list' onClick={(e)=>setTipPercentage(value)}>{value}%</li>
                ))}
            </ul>

      <input type="number" placeholder='Tip amount percent' value={tipPercentage} 
      onChange={(e) => setTipPercentage(e.target.value)} />
    </div>
    <div>
      <label>Number of People</label><br /><br />
      <input type="number" placeholder='Number of people' value={people} 
      onChange={(e) => setPeople(e.target.value)} />
    </div>
    <button className='btn' onClick={calculateBill}>Calculate Bill</button>
  </div>

  <div className="results">
    <p><strong>Tip Amount:</strong> {tipAmount}</p>
    <p><strong>Total Bill:</strong> {totalBill}</p>
    <p><strong>Amount Per Person:</strong> {amountPerPerson}</p>
  </div>
</div>

  );
}

export default BillSplitter