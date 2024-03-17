import PageTemplate from "@assets/page/PageTemplate"
import Aside from "./components/Aside"

const Arena = () => {
    return (
        <PageTemplate>
            <div className="flex gap-x-10">
                <Aside />

                <article>
                    <h1 className="text-white text-center text-3xl pt-5">Welcome to the Arena!</h1>

                    <button>Start a Duel</button>

                </article>
            </div>
        </PageTemplate>
    )
}

export default Arena