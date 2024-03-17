import PageTemplate from "@assets/PageTemplate";
import { FormEvent, useState } from "react";
import { useSessionContext } from "hooks/useSessionContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
    const session = useSessionContext()

    const [loginCorrect, setLogin] = useState(true)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(0)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorType, setErrorType] = useState(1)
    const goHome = useNavigate()


    const errors: any = {
        1: 'Empty First Name input!',
        2: 'Empty Last Name input!',
        3: 'Add an age!',
        4: 'Empty Username input!',
        5: 'Empty Password!',
        6: 'Review the inputs or change Username!'
    }

    const OnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        if (firstName === ''){
            setLogin(false)
        }
        else if (lastName === ''){
            setErrorType(2)
            setLogin(false)
        }
        else if (age === 0){
            setErrorType(3)
            setLogin(false)
        }
        else if (username === ''){
            setErrorType(4)
            setLogin(false)
        }
        else if (password === ''){
            setErrorType(5)
            setLogin(false)
        }
        else {
            const res = await session.signup(firstName, lastName, age, username, password);
            console.log(res)
            if (res === true){
                goHome('/learn')
            }
            else {
                setErrorType(6)
                setLogin(false)
            }
        }
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
                <Link to="/login" className="text-[#76ABAE]">
                    If you already have an account, click me!
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
                </Link>
                {loginCorrect === false && (
                    <h2 className="text-red-600 font-semibold text-lg">{errors[errorType]}</h2>
                )}

            </form>

        </PageTemplate>
    );

}

export default Signup;