import PageTemplate from "@assets/PageTemplate";
import { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const OnSubmit = () => {

    }

    return (
        <PageTemplate>
            
            <div className="bg-gray-900 min-h-screen flex flex-col">
                <section className="text-gray-600 body-font flex-grow mt-[10%] mx-5">
                    <div className="container my-auto mx-auto flex md:flex-row flex-col items-center justify-center">
                        <div className="rounded-lg border-2 border-white p-4 flex flex-col items-center p-5">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#f6c90e]">LOGIN</h1>
                            
                            <form className="flex flex-col items-center space-y-3" 
                            onSubmit={OnSubmit}>

                                <label className="text-white">Username:</label>
                                
                                <input
                                    className="bg-transparent rounded-md border-2 border-solid border-white text-white p-1"
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />

                                <label className="text-white">Password:</label>
                                
                                <input
                                    className="bg-transparent rounded-md border-2 border-solid border-white text-white p-1"
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <button className="rounded-md border-2 border-solid border-white text-white p-1" type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

        </PageTemplate>
    );

}

export default Login;