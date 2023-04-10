import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { serverClientPrivate } from "../axios";
import AuthContext from "./AuthProvider";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [todoData, setTodoData] = useState([]);

    const getTodos = useCallback(async () => {
        try {
            const response = await serverClientPrivate.get(`todos/${user._id}`);
            setTodoData(response.data);
        } catch (error) {
            console.log(error);
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            getTodos();
        }
    }, [user, getTodos]);

    const addTodo = useCallback(async (newTodo) => {
        try {
            const response = await serverClientPrivate.post(`todos/${user._id}`, newTodo);
            setTodoData(prevTodos => [...prevTodos, response.data]);
        } catch (error) {
            console.log(error);
        }
    }, [user]);

    const deleteTodo = useCallback(async (todoId) => {
        try {
            await serverClientPrivate.delete(`todos/${user._id}/${todoId}`);
            setTodoData(prevTodos => prevTodos.filter(todo => todo._id !== todoId));
        } catch (error) {
            console.log(error);
        }
    }, [user]);

    const updateTodo = useCallback(async (updatedTodo) => {
        try {
            const response = await serverClientPrivate.put(`todos/${user._id}/${updatedTodo._id}`, updatedTodo);
            setTodoData(prevTodos => prevTodos.map(todo => todo._id === updatedTodo._id ? response.data : todo));
        } catch (error) {
            console.log(error);
        }
    }, [user]);

    useEffect(() => {
        if (todoData.length > 0) {
            setLoading(false);
        }
    }, [todoData]);

    return (
        <TodoContext.Provider value={{ loading, todoData, addTodo, deleteTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;