import React, { useState } from "react";
import { MD5 } from 'crypto-js';
import { useAPI } from "hooks/useAPI";

export const SessionContext = React.createContext<SessionContextModel>({
    user: null,
    token: "",
    currentMatch: null,
    shortcuts: [],
    login: async () => false,
    signup: async () => false,
    getShortcuts: async () => { },
    initMatch: () => { }
})

type Props = {
    children: React.ReactNode
}

const SessionContextProvider = ({ children }: Props) => {

    const [user, setUser] = useState<user>(null)
    const [currentMatch, setCurrentMatch] = useState<match>(null)
    const [token, setToken] = useState("")

    const [shortcuts, setShortcuts] = useState<shortcutModel[]>([])

    const {
        get,
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

    const getShortcuts = async () => {

        const data = await get("shortcut", token)

        if (data != false) {
            const tempArray: shortcutModel[] = []

            data['data'].map((shortcut: any) => {

                tempArray.push({
                    id: shortcut['id'],
                    price: shortcut['price'],
                    name: shortcut['name'],
                    weighing: shortcut['weighing'],
                    available: true
                })

            })

            setShortcuts(tempArray)
        }

    };
    const initMatch = (match: match) => {
        setCurrentMatch(match)
    }


    const sessionContext: SessionContextModel = {
        user,
        token,
        currentMatch,
        shortcuts,
        login,
        signup,
        getShortcuts,
        initMatch
    }

    return (
        <SessionContext.Provider value={sessionContext}>
            {children}
        </SessionContext.Provider>
    );
}

export default SessionContextProvider;