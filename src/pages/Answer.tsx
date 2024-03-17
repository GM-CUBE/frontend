import { useAPI } from "hooks/useAPI";
import { FormEvent, useState, useEffect } from "react";

const Answer = () => {

    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")

    const {
        get,
        post
    } = useAPI();

    const SendAnswer = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const data = await post("answer/1/1", "", JSON.stringify({'Time':1, 'Answer':answer}))
        

        console.log(data)
    }


    useEffect(() => {
        //todo Obtener la pregunta
    }, [])

    return (
        <>
            <form className="flex flex-col p-4 justify-content items-center"
            onClick={SendAnswer}>
                <label className="text-white">{"Ejercicio:" }</label>
                <label className="text-white py-3">Answer:</label>
                <textarea                    
                    className="bg-transparent rounded-md border-2 border-solid border-white text-white my-2 py-1 ps-1 w-96 h-96"
                    id="answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    >
                </textarea>

                <button className="rounded-md border-2 border-solid border-white text-white p-1" type="submit">Submit</button>
            </form>
        </>
    );

}

export default Answer;