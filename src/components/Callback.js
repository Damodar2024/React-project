import React, { useCallback, useState } from 'react';
import AddTask from './AddTask';

const Callback = () => {
    const [todo, setTodo] = useState([]);
    const [count, setCount] = useState(0);

    const addTask = useCallback((task) => {
        setTodo((prev) => [...prev, task]);
    }, []);

    return (
        <div>
            <AddTask todo={todo} AddTask={addTask} />
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Callback;
