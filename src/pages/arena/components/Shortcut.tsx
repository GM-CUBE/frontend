import ShortcutComponent from "@pages/arena/components/ShortcutComponent";

type Props = {
    shortcuts: shortcutModel[]
}

const Shortcut = ({ shortcuts }: Props) => {

    return (
        <div className="flex flex-row p-3 m-3 place-content-center items-center space-x-4">
            {shortcuts.map((shortcut, key) =>
                <ShortcutComponent key={key} sc={shortcut} />
            )}
        </div>
    );
}

export default Shortcut;