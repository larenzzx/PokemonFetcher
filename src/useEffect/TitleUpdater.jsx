import { useState, useEffect } from "react";

export const TitleUpdater = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count])

    const handleCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button className="btn" onClick={handleCount}>click me</button>
        </div>
    );
}