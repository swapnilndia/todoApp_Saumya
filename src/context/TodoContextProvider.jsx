import React, { useState } from "react";
import TodoContext from "./TodoContext";

const TodoContextProvider = ({ children }) => {
    const [user, setUser] = useState(10)
    return (
        <TodoContext.Provider value={{user}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider