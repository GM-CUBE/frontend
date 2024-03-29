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

type question = {
    id: number
    question: string
    time: number
}

type game = {
    id: number
    amount: number
    mistakes: number
    user_id: number
}

type clash = {
    game1_id: number
    game2_id: number
    id: number
    level_id: number
    result: boolean
    startTime: string
    totalTime: string
}

type match = {
    questions: question[]
    game: game
    clash: clash
} | null

type SessionContextModel = {
    user: user
    token: string,
    currentMatch: match,
    shortcuts: shortcutModel[],
    login: (username: string, password: string) => Promise<boolean>,
    signup: (firstName: string, lastName: string, age: number, username: string, password: string) => Promise<boolean>,
    getShortcuts: () => Promise<void>
    initMatch: (match: match) => void,
}