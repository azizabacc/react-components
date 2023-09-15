import { useState } from 'react';
import Button from './Button.js';

function App() {
  const [color, setColor] = useState('red');

  return (
    <div className='App w-screen h-screen flex ' style={{backgroundColor : color}}>
      <div className='container flex justify-evenly items-center'>
      <Button color='blue' setColor={setColor}/>
      <Button color='red'setColor={setColor}/>
      <Button color='green'setColor={setColor}/>

      </div>

    </div>
  );
}

export default App;
