import PageTemplate from "@assets/PageTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useSessionContext } from "hooks/useSessionContext";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const context = useSessionContext()

    const OnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const res = await context.login(username, password);

        console.log(res)
    }

    return (
        <PageTemplate>

            <form className="rounded-lg border-2 border-white flex flex-col items-center p-6 mx-auto w-56 space-y-3 text-white"
                onSubmit={OnSubmit}>
                <Link to="/" className=" self-start">
                    <FontAwesomeIcon icon={faArrowLeft} className="pe-2" />
                    Regresar
                </Link>

                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#f6c90e]">LOGIN</h1>

                <fieldset>

                    <label className="py-3">Username:</label>

                    <input
                        className="bg-transparent rounded-md border-2 border-solid border-white text-white my-2 py-1 ps-1"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label className="py-3">Password:</label>

                    <input
                        className="bg-transparent rounded-md border-2 border-solid border-white text-white my-2 py-1 ps-1"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </fieldset>

                <button className="rounded-md border-2 border-solid border-white text-white p-1" type="submit">Login</button>

            </form>

        </PageTemplate>
    );

}

export default Login;