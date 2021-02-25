export type User = {
    name: String,
    state: 'allow' | 'ban' | 'admin'
}

export type World = {
    name: string,
    port: number,
    password: string,
    users: User[],
    enabled: boolean,
}

export type WorldNew = Partial<World> & {name: String}
export type WorldUpdate = Partial<World> & {_id: String}

export type WorldDoc = World & {_id: string}
export type WorldState = {
    _id: string,
    state: 'stopped' | 'starting' | 'started' | 'stopping' | 'error',
    message?: string
}
