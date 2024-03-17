import { useSessionContext } from "hooks/useSessionContext";
import { FormEvent, useState } from "react";
import Answer from "./components/Answer";
import Shortcut from "./components/Shortcut";
import PageTemplate from "@assets/page/PageTemplate";
import { useAPI } from "hooks/useAPI";

const Match = () => {
    const [index, setIndex] = useState(0)
    const [answer, setAnswer] = useState('')
    const [needFeedback, setNeedFeedback] = useState(false)
    const [win, setWin] = useState(false)

    const Context = useSessionContext()
    const match = Context.currentMatch
    const {
        post,
        put,
        get
    } = useAPI()

    const get_feedback = async () => {
        const user = Context.user
        const response = await get(`should_continue/${match?.clash.id}/${match?.game.id}`, Context.token)
        console.log(response)

        if (response != false && user != null) {
            if (response['state'] == 2) {
                setNeedFeedback(false)
                setWin(true)
                Context.initMatch(null)
            }
            else if (response['state'] == 3) {
                let response = await put(`game_over/${match?.clash.id}`, Context.token, JSON.stringify({ 'game_id': match?.game.id }))

                if (response != false) {
                    response = await put(`me/${user.id}`, Context.token, JSON.stringify({
                        "Streak": 0,
                        "Coins": user.coins + 10,
                        "Prestige": user.prestige + 10
                    }))

                    setNeedFeedback(false)
                    Context.initMatch(null)
                }
            }
            else if (response['state'] == 0) {
                setNeedFeedback(false)
                setIndex(index + 1)
            }
        }
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()


        const data = await post(`answer/${match?.game.id}/${match?.questions[index].id}`, Context.token, JSON.stringify({
            'Time': 5,
            'Answer': answer
        }))

        const user = Context.user

        if (data != false && user != null) {
            if (data['respuesta']) {
                setNeedFeedback(true)
                console.log(data['respuesta'])

                while (needFeedback) {
                    get_feedback()

                    setTimeout(() => { }, 1000);
                }
            }
            else {
                let response = await put(`game_over/${match?.clash.id}`, Context.token, JSON.stringify({ 'game_id': match?.game.id }))

                if (response != false) {

                    response = await put(`me/${user.id}`, Context.token, JSON.stringify({
                        "Streak": 0,
                        "Coins": user.coins + 10,
                        "Prestige": user.prestige + 10
                    }))

                    Context.initMatch(null)
                }
            }
        }
    }

    return (
        <PageTemplate>
            {match == null ? (
                <h1 className="text-white">{win ? 'Ganaste' : 'Perdiste'}</h1>
            ) : (
                <>
                    <h1 className="text-white text-center text-2xl">Esto es una partida</h1>

                    <h2 className="text-white text-center text-xl">Question: {match?.questions[index].question}</h2>

                    <div>
                        <Answer answer={answer} setAnswer={setAnswer} onSubmit={onSubmit} />
                    </div>

                    <Shortcut shortcuts={Context.shortcuts} />
                </>
            )}
        </PageTemplate>
    );
}

export default Match;