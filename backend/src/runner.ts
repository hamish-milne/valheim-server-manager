import { spawn, ChildProcessWithoutNullStreams } from 'child_process'

type User = {
    name: String,
    state: 'allow' | 'ban' | 'admin'
}

type World = {
    name: string,
    port: number,
    password: string,
    users: User[],
    enabled: boolean,
}

type WorldDoc = World & {_id: string}
type WorldOutput = WorldDoc & {
    state: 'stopped' | 'starting' | 'started' | 'stopping' | 'error',
    message?: string
}

type State = World & {process: ChildProcessWithoutNullStreams}


const running = new Map<string, State>()

export function update(world: WorldDoc): WorldOutput {
    
}

export function query(id: string): WorldOutput {

}

function updateUserList() {

}

function start(world: WorldDoc) {
    // TODO: Multi-platform
    const process = spawn('./valheim-server.86-64', [
        '--world', world.name,
        '--port', world.port.toString(),
        '--password', world.password
    ])
}
