import PageTemplate from "@assets/PageTemplate";
import { SessionContext } from "@context/SessionContext";
import { FormEvent, useContext, useState } from "react";

const Login = () => {
    const session = useContext(SessionContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const OnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let res = await session.login(username, password);

        console.log(res)
    }

    return (
        <PageTemplate>

            <form className="rounded-lg border-2 border-white flex flex-col items-center p-6 mx-auto w-56 space-y-3"
             onSubmit={OnSubmit}>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#f6c90e]">LOGIN</h1>

                <fieldset>

                    <label className="text-white py-3">Username:</label>

                    <input
                        className="bg-transparent rounded-md border-2 border-solid border-white text-white my-2 py-1 ps-1"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label className="text-white py-3">Password:</label>

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