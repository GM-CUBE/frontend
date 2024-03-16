import React from "react";

export const SessionContext = React.createContext<SessionContextModel>({
    user: null
})

type Props = {
    children: React.ReactNode
}

const SessionContextProvider = ({ children }: Props) => {

    const sessionContext: SessionContextModel = {
        user: null
    }

    return (
        <SessionContext.Provider value={sessionContext}>
            {children}
        </SessionContext.Provider>
    );
}

export default SessionContextProvider;