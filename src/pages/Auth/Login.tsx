import PageTemplate from "@assets/PageTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useSessionContext } from "hooks/useSessionContext";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginCorrect, setLogin] = useState(true)

    const context = useSessionContext()
    const goHome = useNavigate()

    const OnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const res = await context.login(username, password);

        console.log(res)
        if (res == true){
            goHome('/learn')
        }
        else{
            setLogin(false)
        }
    }

    return (
        <PageTemplate>

            <form className="rounded-lg border-2 border-white flex flex-col items-center p-6 mx-auto w-[35%] space-y-3 text-white " onSubmit={OnSubmit}>
                <Link to="/" className=" self-start">
                    <FontAwesomeIcon icon={faArrowLeft} className="pe-2" />
                    Regresar
                </Link>

                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#f6c90e]">LOGIN</h1>

                <fieldset>

                    <label className="py-3">Username:</label>

                    <input
                        className="bg-transparent rounded-md border-2 border-solid border-white text-white my-2 py-1 ps-1 ml-3"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <label className="py-3">Password:  </label>

                    <input
                        className="bg-transparent rounded-md border-2 border-solid border-white text-white my-2 py-1 ps-1 ml-3"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </fieldset>

                <button className="rounded-md border-2 border-solid border-white text-white p-1 w-[20%] ml-[3%]" type="submit">Login</button>
                <Link to="/signup" className="text-[#76ABAE]">
                    If you don't have an account yet, click me!
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
                </Link>
                {loginCorrect === false && (
                    <h2 className="text-red-600 font-semibold text-lg">Incorrect user or password</h2>
                )}

            </form>

        </PageTemplate>
    );

}

export default Login;