import PageTemplate from "@assets/page/PageTemplate"
import Aside from "./components/Aside"
import { useSessionContext } from "hooks/useSessionContext"
import { useAPI } from "hooks/useAPI"
import { useState } from "react"

const Arena = () => {
    const [message, setMsg] = useState('')
    const [error, setError] = useState(false)

    const Context = useSessionContext()
    const {
        post
    } = useAPI()

    const onClick = async () => {
        const data = await post(`queue/${Context.user.id}`, Context.token, '')
        console.log(data)

        if (data != false) {
            const a = 1

            console.log(a)
        }
        else {
            setMsg("Something went wrong")
            setError(true)
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