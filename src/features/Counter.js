// react functional component
// rfc

import React, { useState} from "react";

export default function Counter() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number + 1);
    };
    return (
        <div>Counter component
            <button onClick={onIncrease}>+</button>
            <span>{number}</span>
            <button>-</button>
        </div>
    )
}

//useState()
//[state, setState]