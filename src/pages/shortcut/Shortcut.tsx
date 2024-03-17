import { useSessionContext } from "hooks/useSessionContext";
import { useEffect } from "react";
import ShortcutComponent from "@pages/shortcut/components/ShortcutComponent";

const Shortcut = () => {
    const session = useSessionContext()
    
    useEffect(() => {

        session.getShortcuts()
        session.shortcuts
    },[])

    return (
        <div className="flex flex-row p-3 m-3 place-content-center items-center space-x-4">
            {session.shortcuts.map((shortcut, key) => 
                <ShortcutComponent key={key} sc={shortcut}/>
            )}
        </div>
    );


}

export default Shortcut;