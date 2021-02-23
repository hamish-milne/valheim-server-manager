import Datastore from 'nedb-promises'

const db = new Datastore({filename: 'valheim-server-manager.db', autoload: true})

type User = {
    name: String,
    state: 'allow' | 'ban' | 'admin'
}

type World = {
    name: String,
    port: Number,
    password: String,
    users: User[],
    enabled: Boolean,
}

type WorldDoc = World & {_id: String}
type WorldNew = Partial<World> & {name: String}
type WorldUpdate = Partial<World> & {_id: String}

async function add(item: WorldNew): Promise<WorldDoc> {
    const itemWithDefaults: World = {
        name: item.name,
        port: item.port ?? 1234,
        password: item.password ?? "",
        users: item.users ?? [],
        enabled: item.enabled ?? false
    }
    return await db.insert(itemWithDefaults)
    // TODO: Start/stop on enabled
}

async function update(item: WorldUpdate): Promise<WorldDoc> {
    const id = item._id
    delete item._id
    return await db.update({_id: id}, item, {returnUpdatedDocs: true})
    // TODO: Start/stop on enabled
}

async function del(item: {_id: String}) {
    if (await db.remove({_id: item._id}, {}) <= 0) {
        throw Error("World with that ID does not exist")
    }
}