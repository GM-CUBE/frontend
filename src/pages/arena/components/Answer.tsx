import { FormEvent } from "react"

type Props = {
    setAnswer: React.Dispatch<React.SetStateAction<string>>
    answer: string
    onSubmit: (e: FormEvent) => void
}

const Answer = ({ onSubmit, answer, setAnswer }: Props) => {

    return (
        <>
            <form className="flex flex-col p-4 justify-content items-center"
                onSubmit={onSubmit}>
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