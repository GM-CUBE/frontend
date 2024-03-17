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

    

    const user = Context.user
    async function searchMatch() {

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
        // const user = Context.user

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
     <div className="text-[#EEEEEE] flex items-center justify-center h-screen">
    <div>
        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#EEEEEE] text-center -mt-72">Welcome to the Arena!</h2>
        <div className="container px-5 py-24 mx-auto">
            <div>
                <ul className="text-[#EEEEEE] mb-10 ml-[32%] text-xl">
                    <li>Name: {user?.username}</li>
                    <li>Prestige: {user?.prestige}</li>
                </ul>
                <div>
                    <button onClick={onClick} 
                    className="bg-[#76ABAE] hover:bg-[#35575A] text-white w-40 font-semibold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out block mx-auto">Start a Duel</button>
                    <div className="ml-[20%] mt-5 text-xl text-[#f6c90e]">
                        {message &&
                            <>
                                <p>{message}</p>
                                <p>{error}</p>
                            </>
                        }
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>



        </PageTemplate>
    )
}

export default Arena