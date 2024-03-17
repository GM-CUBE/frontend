
interface Props {
    sc: shortcutModel
}

const ShortcutComponent = ({sc}: Props) => {

    // const UseShortcut = () => {

    // }

    return ( 
        <button className="rounded-md border-2 border-white flex flex-col items-center p-2 text-white w-60 h-56 place-content-center" disabled={!sc.available}>

            <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-[#f6c90e]">{sc.name}</h1>

            <p>{sc.name}</p>

            <p>{"$" + sc.price.toString()}</p>
            
            <p>{sc.weighing}</p>

        </button>
    );

}

export default ShortcutComponent;