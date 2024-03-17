import PageTemplate from "@assets/PageTemplate";
import { useState } from "react";

const Signup = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState<number>()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const OnSubmit = () => {

    }

    return (
        <PageTemplate>
            
            <form className="rounded-lg border-2 border-white flex flex-col items-center p-6 mx-auto w-1/2 space-y-3"
             onSubmit={OnSubmit}>

                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#f6c90e]">SIGN UP</h1>

                <fieldset className="flex flex-row m-5 space-x-5">

                    {/* FIRSTNAME */}
                    <div className="flex flex-col">
                        <label className="text-white">First name:</label>
                        <input
                            className="bg-transparent rounded-md border-2 border-solid border-white text-white my-2 py-1 ps-1"
                            type="text"
                            id="username"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    {/* LASTNAME */}
                    <div className="flex flex-col">
                        <label className="text-white">Last name:</label>
                        <input
                            className="bg-transparent rounded-md border-2 border-solid border-white text-white my-2 py-1 ps-1"
                            type="text"
                            id="username"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    {/* AGE */}
                    <div className="flex flex-col">
                        <label className="text-white">Age:</label>
                        <input
                            className="bg-transparent rounded-md border-2 border-solid border-white text-white my-2 py-1 ps-1"
                            type="text"
                            id="username"
                            value={age}
                            onChange={(e) => setAge(Number(e.target.value))}
                        />
                    </div>
                </fieldset>

                <fieldset className="flex flex-row m-5 space-x-5">

                    {/* USERNAME */}
                    <div className="flex flex-col">
                        <label className="text-white">Username:</label>
                        <input
                            className="bg-transparent rounded-md border-2 border-solid border-white text-white my-2 py-1 ps-1"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className="flex flex-col">
                        <label className="text-white">Password:</label>
                        <input
                            className="bg-transparent rounded-md border-2 border-solid border-white text-white my-2 py-1 ps-1"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                </fieldset>

                    <button className="rounded-md border-2 border-solid border-white text-white p-1" type="submit">Sign up</button>
            
            </form>

        </PageTemplate>
    );

}

export default Signup;