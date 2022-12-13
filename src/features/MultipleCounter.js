import React, {useState} from 'react'
import CounterGroup from './CounterGroup'
import CounterSizeGenerator from './CounterSizeGenerator'
import CounterGroupSum from './CounterGroupSum';

export default function MultipleCounter() {
    const [size, setSize] = useState(0);
    const [sum, setSum] = useState(0);

    const updateSize = (sizeNumber) => {
        console.log(sizeNumber);
        setSize(sizeNumber);
        resetSum();
        
    }

    const updateSum = (change) => {
      setSum(sum +change);
    }

    const resetSum = () => {
      setSum(0);
    }
  return (
    <div>
        <CounterSizeGenerator updateSize2 = {updateSize}/>
        <CounterGroupSum sum={sum} />
        <CounterGroup size={size} updateSum={updateSum}/>
    </div>
  )
}
