import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import AuthContext from "./AuthContext.js";
import { axiosClientPrivate } from "../axios.js";

export const DataContext = createContext();

export default function DataProvider({ children }) {
    const { user } = useContext(AuthContext);
    const [entryData, setEntryData] = useState([]);
    const [todoData, setTodoData] = useState([]);

    // Get all entries
    const getEntries = useCallback(async () => {
        try {
            const response = await axiosClientPrivate.get(`journal/${user._id}`);
            setEntryData(response.data);
        } catch (error) {
            console.log(error);
        }
    }, [user]);

    // Get all todos
    const getTodos = useCallback(async () => {
        try {
            const response = await axiosClientPrivate.get(`todos/${user._id}`);
            setTodoData(response.data);
        } catch (error) {
            console.log(error);
        }
    }, [user]);

    // Get all entries and todos
    useEffect(() => {
        if (user) {
            getEntries();
            getTodos();
        }
    }, [user, getEntries, getTodos]);

    // Add entry
    const addEntry = async (newEntry) => {
        try {
            const response = await axiosClientPrivate.post(`journal/${user._id}`, newEntry);
            setEntryData(prevEntries => [...prevEntries, response.data]);
        } catch (error) {
            console.log(error);
        }
    };

    // Add todo
    const addTodo = async (newTodo) => {
        try {
            const response = await axiosClientPrivate.post(`todos/${user._id}`, newTodo);
            setTodoData(prevTodos => [...prevTodos, response.data]);
        } catch (error) {
            console.log(error);
        }
    };

    // Delete entry
    const deleteEntry = async (entryId) => {
        try {
            await axiosClientPrivate.delete(`journal/${user._id}/${entryId}`);
            setEntryData(prevEntries => prevEntries.filter(entry => entry._id !== entryId));
        } catch (error) {
            console.log(error);
        }
    };

    // Delete todo
    const deleteTodo = async (todoId) => {
        try {
            await axiosClientPrivate.delete(`todos/${user._id}/${todoId}`);
            setTodoData(prevTodos => prevTodos.filter(todo => todo._id !== todoId));
        } catch (error) {
            console.log(error);
        }
    };

    // Update entry
    const updateEntry = async (updatedEntry) => {
        try {
            const response = await axiosClientPrivate.put(`journal/${user._id}/${updatedEntry._id}`, updatedEntry);
            setEntryData(prevEntries => prevEntries.map(entry => entry._id === updatedEntry._id ? response.data : entry));
        } catch (error) {
            console.log(error);
        }
    };

    // Update todo
    const updateTodo = async (updatedTodo) => {
        try {
            const response = await axiosClientPrivate.put(`todos/${user._id}/${updatedTodo._id}`, updatedTodo);
            setTodoData(prevTodos => prevTodos.map(todo => todo._id === updatedTodo._id ? response.data : todo));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <DataContext.Provider value={
            { 
                entryData, 
                todoData, 
                getEntries, 
                getTodos,
                addEntry,
                addTodo,
                deleteEntry,
                deleteTodo,
                updateEntry,
                updateTodo
            }
        }>
            {children}
        </DataContext.Provider>
    );
}