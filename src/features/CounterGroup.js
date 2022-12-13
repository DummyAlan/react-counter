import React from 'react'
import Counter from './Counter';

export default function CounterGroup(props) {
    console.log(props);
    // [0,0,0,0,0] -map to-> [Counter, Counter, Counter, Counter, Counter]
    const {size, updateSum} = props;
    const counterMap = Array(props.size).fill(0);
    return counterMap.map((item, index) => {
        return <Counter key={index} updateSum={updateSum} size={size}/>;
    })
}
