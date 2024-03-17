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

            <div className="container flex md:flex-row flex-col items-center justify-center">
                <div className="rounded-lg border-2 border-white p-4 flex flex-col items-center p-5">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#f6c90e]">SIGNUP</h1>

                    <form className="flex flex-col items-center space-y-3"
                        onSubmit={OnSubmit}>

                        {/* FIRSTNAME */}
                        <label className="text-white">First name:</label>
                        <input
                            className="bg-transparent rounded-md border-2 border-solid border-white text-white p-1"
                            type="text"
                            id="username"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />

                        {/* LASTNAME */}
                        <label className="text-white">Last name:</label>
                        <input
                            className="bg-transparent rounded-md border-2 border-solid border-white text-white p-1"
                            type="text"
                            id="username"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />

                        {/* AGE */}
                        <label className="text-white">Age:</label>
                        <input
                            className="bg-transparent rounded-md border-2 border-solid border-white text-white p-1"
                            type="text"
                            id="username"
                            value={age}
                            onChange={(e) => setAge(Number(e.target.value))}
                        />

                        {/* USERNAME */}
                        <label className="text-white">Username:</label>
                        <input
                            className="bg-transparent rounded-md border-2 border-solid border-white text-white p-1"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        {/* PASSWORD */}
                        <label className="text-white">Password:</label>
                        <input
                            className="bg-transparent rounded-md border-2 border-solid border-white text-white p-1"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className="rounded-md border-2 border-solid border-white text-white p-1" type="submit">Signup</button>
                    </form>
                </div>
            </div>

        </PageTemplate>
    );

}

export default Signup;