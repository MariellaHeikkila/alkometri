import { useState} from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(80)
  const [bottlecount, setBottlecount] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)

  
    let bottleslist = []
    for (let i = 0; i < 25; i++) {
      bottleslist.push(i)
    }

    let timelist = []
    for (let i = 0; i < 25; i++) {
      timelist.push(i)
    }
  

  const calculate = () => {

    let littres = bottlecount * 0.33
    let grams = littres * 8 *4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)
    let bloodLevel = 0

    if (gender === "male") {
      bloodLevel = gramsLeft / (weight * 0.7)
    } else {
      bloodLevel = gramsLeft / ( weight * 0.6)
    }
    if (bloodLevel < 0) {
      bloodLevel = 0
    }
    setResult(bloodLevel)
  } 

  return (
    <div id="container">
      <h3>Alcometer</h3>
      <div>
        <label>Weight :</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
        <label>Bottles :</label>
        <select value={bottlecount} onChange={e => setBottlecount(e.target.value)}> 
          {
            bottleslist.map(bottle => (
              <option value={bottle}>{bottle} bottles</option>
            ))
          }
        </select>
      </div>
      <div>
        <label>Time :</label>
        <select value={time} onChange={e => setTime(e.target.value)}> 
          {
            timelist.map(hour => (
              <option value={hour}>{hour} Hours</option>
            ))
          }
        </select>
      </div>
      <div>
        <label>Gender :</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
      </div>
      <div>
        <label>Blood Level : </label>
        <output>{result.toFixed(2)}</output>
      </div>
      <div>
        <button type="button" onClick={calculate}>Calculate</button>
      </div>
    </div>

  );
}

export default App;
