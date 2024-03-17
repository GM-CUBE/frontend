import { useSessionContext } from "hooks/useSessionContext";

const Match = () => {

    const Context = useSessionContext()

    console.log(Context.currentMatch)


    return (
        <h1>Esto es una partida</h1>
    );
}

export default Match;