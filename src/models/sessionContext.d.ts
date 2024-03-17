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

type SessionContextModel = {
    user: user
    token: string,
    login: (username: string, password: string) => Promise<boolean>,
    signup: (firstName: string, lastName: string, age: number, username: string, password: string) => Promise<boolean>
}