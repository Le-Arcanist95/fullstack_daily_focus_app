import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import AuthContext from "./AuthProvider.js";
import { axiosClient, serverClientPrivate } from "../axios.js";

const DataContext = createContext();

export function DataProvider({ children }) {
    const { user } = useContext(AuthContext);
    const [entryData, setEntryData] = useState([]);
    const [todoData, setTodoData] = useState([]);
    const [externalApiData, setExternalApiData] = useState({
        astroPicture: {
            title: "",
            explanation: "",
            url: "",
            copyright: ""
        },
        quoteOfTheDay: {
            quote: "",
            author: "",
            backgroundImg: "",
            title: ""
        }
    });

    // Get all entries
    const getEntries = useCallback(async () => {
        try {
            const response = await serverClientPrivate.get(`journal/${user._id}`);
            setEntryData(response.data);
        } catch (error) {
            console.log(error);
        }
    }, [user]);

    // Get all todos
    const getTodos = useCallback(async () => {
        try {
            const response = await serverClientPrivate.get(`todos/${user._id}`);
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

    // Get external API data
    useEffect(() => {
        const fetchData = async () => {
            const endpoints = [
                'https://api.nasa.gov/planetary/apod?api_key=YQVratHzp85sqeL2JyuCAMOXJFVhUuXaBLoIvSco'
            ]
            axiosClient.all(endpoints.map((endpoint) => axiosClient.get(endpoint)))
                .then(
                    axiosClient.spread(({data: apod}) => {
                        
                        setExternalApiData(prevData => ({
                            ...prevData,
                            astroPicture: {
                                title: apod.title,
                                explanation: apod.explanation,
                                url: apod.hdurl,
                                copyright: apod.copyright
                            }
                        }));
                    })
                );
        };
        
        fetchData();
    }, []);

    // Add entry
    const addEntry = async (newEntry) => {
        try {
            const response = await serverClientPrivate.post(`journal/${user._id}`, newEntry);
            setEntryData(prevEntries => [...prevEntries, response.data]);
        } catch (error) {
            console.log(error);
        }
    };

    // Add todo
    const addTodo = async (newTodo) => {
        try {
            const response = await serverClientPrivate.post(`todos/${user._id}`, newTodo);
            setTodoData(prevTodos => [...prevTodos, response.data]);
        } catch (error) {
            console.log(error);
        }
    };

    // Delete entry
    const deleteEntry = async (entryId) => {
        try {
            await serverClientPrivate.delete(`journal/${user._id}/${entryId}`);
            setEntryData(prevEntries => prevEntries.filter(entry => entry._id !== entryId));
        } catch (error) {
            console.log(error);
        }
    };

    // Delete todo
    const deleteTodo = async (todoId) => {
        try {
            await serverClientPrivate.delete(`todos/${user._id}/${todoId}`);
            setTodoData(prevTodos => prevTodos.filter(todo => todo._id !== todoId));
        } catch (error) {
            console.log(error);
        }
    };

    // Update entry
    const updateEntry = async (updatedEntry) => {
        try {
            const response = await serverClientPrivate.put(`journal/${user._id}/${updatedEntry._id}`, updatedEntry);
            setEntryData(prevEntries => prevEntries.map(entry => entry._id === updatedEntry._id ? response.data : entry));
        } catch (error) {
            console.log(error);
        }
    };

    // Update todo
    const updateTodo = async (updatedTodo) => {
        try {
            const response = await serverClientPrivate.put(`todos/${user._id}/${updatedTodo._id}`, updatedTodo);
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
                externalApiData,
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

export default DataContext;