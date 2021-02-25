import Datastore from 'nedb-promises'
import { World, WorldNew, WorldUpdate, WorldDoc } from './types'

const db = new Datastore({filename: 'valheim-server-manager.db', autoload: true})

export async function add(item: WorldNew): Promise<WorldDoc> {
    const itemWithDefaults: World = {
        name: item.name,
        port: item.port ?? 1234,
        password: item.password ?? "",
        users: item.users ?? [],
        enabled: item.enabled ?? false
    }
    return await db.insert(itemWithDefaults)
}

export async function update(item: WorldUpdate): Promise<WorldDoc> {
    const id = item._id
    delete item._id
    return await db.update({_id: id}, item, {returnUpdatedDocs: true})
}

export async function del(item: {_id: String}) {
    if (await db.remove({_id: item._id}, {}) <= 0) {
        throw Error("World with that ID does not exist")
    }
}