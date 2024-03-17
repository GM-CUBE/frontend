type user = {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    username: string,
    prestige: number,
    coins: number,
    streak: number
} | null

type shortcutModel = {
    id: number,
    price: number,
    name: string,
    weighing: number,
    available: boolean
}

type SessionContextModel = {
    user: user
    token: string,
    login: (username: string, password: string) => Promise<boolean>,
    signup: (firstName: string, lastName: string, age: number, username: string, password: string) => Promise<boolean>,
    shortcuts: shortcutModel[],
    getShortcuts: () => Promise<void>
}