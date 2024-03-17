import PageTemplate from "@assets/page/PageTemplate"
import Aside from "./components/Aside"
import { useSessionContext } from "hooks/useSessionContext"
import { useAPI } from "hooks/useAPI"
import { useState } from "react"
import { useNavigate } from "react-router"

const Arena = () => {
    const [message, setMsg] = useState('')
    const [error, setError] = useState(false)

    const navigator = useNavigate()
    const Context = useSessionContext()
    const {
        post,
        get
    } = useAPI()


    async function searchMatch() {
        const user = Context.user

        if (user != null) {
            const data = await get(`has_match/${user.id}`, Context.token)

            if (data != false) {
                if (data['message'] == 'Match Found') {
                    setMsg("Match Found")

                    Context.initMatch({
                        questions: data['questions'],
                        clash: data['match'],
                        game: data['game']
                    })

                    setTimeout(() => {
                        navigator('/play/match')
                    }, 500);
                }
            }
            else {
                setMsg("Something went wrong")
                setError(true)
            }

        }
    }



    const onClick = async () => {
        const user = Context.user

        if (user != null) {
            const data = await post(`queue/${user.id}`, Context.token, '')
            if (data != false) {
                if (data['message'] == 'Waiting...') {
                    setMsg("Searching for opponent")
                    setInterval(searchMatch, 1000, 30000)
                }
                else if (data['message'] == 'Match Found') {
                    setMsg("Match Found")

                    Context.initMatch({
                        questions: data['questions'],
                        clash: data['match'],
                        game: data['game']
                    })

                    setTimeout(() => {
                        navigator('/play/match')
                    }, 500);
                }
            }
            else {
                setMsg("Something went wrong")
                setError(true)
            }
        }
    }

    return (
        <PageTemplate>
            <div className="flex gap-x-10">
                <Aside />

                <article>
                    <h1 className="text-white text-center text-3xl pt-5">Welcome to the Arena!</h1>

                    <button onClick={onClick}>Start a Duel</button>
                    {message &&
                        <>
                            <p>{message}</p>
                            <p>{error}</p>
                        </>
                    }
                </article>
            </div>
        </PageTemplate>
    )
}

export default Arena