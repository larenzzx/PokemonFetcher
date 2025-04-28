import { useState, useEffect } from "react";

export const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // sets an interval that updates the count every second
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000)

        // cleanup
        // stops the time when the component unmounts
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div>Timer: {count}</div>
    );
}