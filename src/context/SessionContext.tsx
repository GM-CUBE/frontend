import React, { useState } from "react";
import { MD5 } from 'crypto-js';
import { useAPI } from "hooks/useAPI";

export const SessionContext = React.createContext<SessionContextModel>({
    user: null,
    token: "",
    login: async () => false
})

type Props = {
    children: React.ReactNode
}

const SessionContextProvider = ({ children }: Props) => {

    const [user, setUser] = useState(null)
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

    const sessionContext: SessionContextModel = {
        user,
        token,
        login
    }

    return (
        <SessionContext.Provider value={sessionContext}>
            {children}
        </SessionContext.Provider>
    );
}

export default SessionContextProvider;