import React, { useState } from "react";
import { MD5 } from 'crypto-js';
import { useAPI } from "hooks/useAPI";

export const SessionContext = React.createContext<SessionContextModel>({
    user: null,
    token: "",
    currentMatch: null,
    login: async () => false,
    signup: async () => false,
    initMatch: () => { }
})

type Props = {
    children: React.ReactNode
}

const SessionContextProvider = ({ children }: Props) => {

    const [user, setUser] = useState<user>(null)
    const [currentMatch, setCurrentMatch] = useState<match>(null)
    const [token, setToken] = useState("")

    const {
        post
    } = useAPI();

    const login = async (username: string, password: string) => {
        const passwordHash = MD5(password).toString();

        const data = await post("login", "", JSON.stringify({ "username": username, "password": passwordHash }))

        if (data != false) {
            setUser(data['user'])
            setToken(data['token'])
            return true
        }

        return false
    };

    const signup = async (firstName: string, lastName: string, age: number, username: string, password: string) => {
        const passwordHash = MD5(password).toString();

        const data = await post("signup", "", JSON.stringify({ 'firstName': firstName, "lastName": lastName, "age": age, "username": username, "password": passwordHash }))

        if (data != false) {
            setUser(data['user'])
            setToken(data['token'])
            return true
        }

        return false
    };

    const initMatch = (match: match) => {
        setCurrentMatch(match)
    }


    const sessionContext: SessionContextModel = {
        user,
        token,
        currentMatch,
        login,
        signup,
        initMatch
    }

    return (
        <SessionContext.Provider value={sessionContext}>
            {children}
        </SessionContext.Provider>
    );
}

export default SessionContextProvider;