// react functional component
// rfc

import React, { useEffect, useState} from "react";

export default function Counter(props) {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(132);
        setNumber(0);
    }, [props.size]);

    const onIncrease = () => {
        setNumber(number + 1);
        props.updateSum(1);
    };
    const onDecrease = () => {
        setNumber(number - 1);
        props.updateSum(-1);
    }
    return (
        <div>
            <button onClick={onIncrease}>+</button>
            <span>{number}</span>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

//useState()
//[state, setState]