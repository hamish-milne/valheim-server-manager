import { spawn, ChildProcess } from 'child_process'
import { open } from 'fs/promises'
import { World, WorldDoc, WorldState } from './types'

type ServerState = World & {process: ChildProcess}

const running = new Map<string, ServerState>()

export function update(world: WorldDoc): WorldState {
    if (world._id in running) {
        const prev = running.get(world._id)
        if (!world.enabled) {
            prev.process.kill("SIGTERM")
        } else {
            updateUserList(world)
        }
        // TODO: Rename, change ports etc.
        prev.enabled = world.enabled
        return {
            _id: world._id,
            state: getState(prev)
        }
    } else if (world.enabled) {
        return {
            _id: world._id,
            state: getState(start(world))
        }
    } else {
        return {
            _id: world._id,
            state: 'stopped'
        }
    }
}

function getState(state: ServerState) {
    switch (state.process.exitCode) {
        case null: switch (state.process.signalCode) {
            case null: return state.enabled ? 'started' : 'stopping'
            case 'SIGTERM': return 'stopped'
            default: return 'error'
        }
        case 0: return 'stopped'
        default: return 'error'
    }
}

export function query(): WorldState[] {
    return Array.from(running.entries()).map(it => {
        return {
            _id: it[0],
            state: getState(it[1]),
            message: undefined
        }
    })
}

async function updateUserList(world: WorldDoc) {
    async function updateFile(path: string, state: string) {
        const f = await open(path, 'w')
        const contents = world.users.filter(it => it.state == state).map(it => it.name).join("\n")
        await f.writeFile(contents)
        await f.close()
    }
    await updateFile(`./data/${world._id}/permittedlist.txt`, 'allow')
    await updateFile(`./data/${world._id}/banlist.txt`, 'ban')
    await updateFile(`./data/${world._id}/adminlist.txt`, 'admin')
}

function start(world: WorldDoc): ServerState {
    // TODO: Multi-platform
    updateUserList(world)
    const gameServer = spawn('./valheim_server.86-64', [
        '-name', world.name,
        '-world', 'World',
        '-savedir', `./data/${world._id}`,
        '-port', world.port.toString(),
        '-password', world.password
    ], {
        windowsHide: true,
        stdio: 'pipe',
        env: {
            SteamAppId: '892970',
            LD_LIBRARY_PATH: `./linux64:${process.env.LD_LIBRARY_PATH}`
        }
    })
    const state = {
        name: world.name,
        port: world.port,
        password: world.password,
        users: world.users,
        enabled: true,
        process: gameServer
    }
    running.set(world._id, state)
    return state
}
