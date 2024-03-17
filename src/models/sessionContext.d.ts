type user = {
    algo: string
} | null

type SessionContextModel = {
    user: user
    token: string,
    login: (username: string, password: string) => Promise<boolean>
}