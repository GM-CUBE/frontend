import PageTemplate from "@assets/PageTemplate";
import { FormEvent, useState } from "react";
import { useSessionContext } from "hooks/useSessionContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
    const session = useSessionContext()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(0)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const OnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const res = await session.signup(firstName, lastName, age, username, password);

        console.log(res)
    }

    return (
        <PageTemplate>

            <form className="rounded-lg border-2 border-white flex flex-col items-center p-6 mx-[5%] xl:w-1/2 xl:mx-auto mt-5 space-y-3 text-white"
                onSubmit={OnSubmit}>
                <Link to="/" className=" self-start">
                    <FontAwesomeIcon icon={faArrowLeft} className="pe-2" />
                    Regresar
                </Link>

                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#f6c90e]">SIGN UP</h1>

                <fieldset className="flex flex-row m-5 space-x-5">

                    {/* FIRSTNAME */}
                    <div className="flex flex-col">
                        <label className="">First name:</label>
                        <input
                            className="bg-transparent rounded-md border-2 border-solid border-white  my-2 py-1 ps-1"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    {/* LASTNAME */}
                    <div className="flex flex-col">
                        <label className="">Last name:</label>
                        <input
                            className="bg-transparent rounded-md border-2 border-solid border-white  my-2 py-1 ps-1"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    {/* AGE */}
                    <div className="flex flex-col">
                        <label className="">Age:</label>
                        <input
                            className="bg-transparent rounded-md border-2 border-solid border-white  my-2 py-1 ps-1"
                            type="text"
                            value={age}
                            onChange={(e) => setAge(Number(e.target.value))}
                        />
                    </div>
                </fieldset>

                <fieldset className="flex flex-row m-5 space-x-5">

                    {/* USERNAME */}
                    <div className="flex flex-col">
                        <label className="">Username:</label>
                        <input
                            className="bg-transparent rounded-md border-2 border-solid border-white  my-2 py-1 ps-1"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className="flex flex-col">
                        <label className="">Password:</label>
                        <input
                            className="bg-transparent rounded-md border-2 border-solid border-white  my-2 py-1 ps-1"
                            type="password"
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