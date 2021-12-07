import { useState } from "react";

export const useCounter = ( initialIndex = 10 ) => {
    const [index, setIndex] = useState(initialIndex);

    const increment = () => {
        setIndex( index + 1);
    }

    const decrement = () => {
        setIndex( index - 1);
    }

    const reset = ( ) => {
        setIndex( initialIndex );
    }


    return {
        index,
        increment,
        decrement,
        reset
    };
}
