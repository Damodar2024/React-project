import React, { useState } from 'react';

const AddTask = ({ todo, AddTask }) => {
    const [string, setString] = useState('');

    console.log("rendering child");

    const handleTask = () => {
        AddTask(string);
    }

    return (
        <div>
            <label> Number:</label>

                <input type="text" value={string}
                    onChange={(e) => setString(e.target.value)}/>
                    {todo.map((task, index) => (
                <p key={index}>
                    {index}. {task}
                </p>
            ))}
            <button onClick={handleTask}>Add task</button>
        </div>
    );
};

export default React.memo(AddTask);
