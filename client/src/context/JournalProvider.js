import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { serverClientPrivate } from '../axios';
import AuthContext from './AuthProvider';

const JournalContext = createContext();

export const JournalProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [entryData, setEntryData] = useState([]);

    const getEntries = useCallback(async () => {
        try {
            const response = await serverClientPrivate.get(`journal/${user._id}`);
            setEntryData(response.data);
        } catch (error) {
            console.log(error);
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            getEntries();
        }
    }, [user, getEntries]);

    const addEntry = async (newEntry) => {
        try {
            const response = await serverClientPrivate.post(`journal/${user._id}`, newEntry);
            setEntryData(prevEntries => [...prevEntries, response.data]);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteEntry = async (entryId) => {
        try {
            await serverClientPrivate.delete(`journal/${user._id}/${entryId}`);
            setEntryData(prevEntries => prevEntries.filter(entry => entry._id !== entryId));
        } catch (error) {
            console.log(error);
        }
    };

    const updateEntry = async (updatedEntry) => {
        try {
            const response = await serverClientPrivate.put(`journal/${user._id}/${updatedEntry._id}`, updatedEntry);
            setEntryData(prevEntries => prevEntries.map(entry => entry._id === updatedEntry._id ? response.data : entry));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (entryData.length > 0) {
            setLoading(false);
        }
    }, [entryData]);

    return (
        <JournalContext.Provider value={
            {
                loading,
                entryData,
                addEntry,
                deleteEntry,
                updateEntry
            }
        }>
            {children}
        </JournalContext.Provider>
    );
};

export default JournalContext;