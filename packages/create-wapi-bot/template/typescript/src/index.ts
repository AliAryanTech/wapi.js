import { whatsappClient } from "./utils/client.js"
import { TextMessage } from 'wapi.js'
import { readdir } from 'node:fs/promises'


async function loadEventListeners() {
    (await readdir(`${__dirname}/src/events/`))
        .filter((file) => file.endsWith('.js'))
        .map((file) => whatsappClient.on(file.split('.js')[0], require(`${__dirname}/events/${file}`)))
}

async function init() {
    loadEventListeners()
    await whatsappClient.initiate()

    // send a message to a number
    await whatsappClient.message.send({
        message: new TextMessage({ text: 'hello, world!' }),
        phoneNumber: '<replace-me>'
    })
}

init().catch(error => console.error(error))

process.on('unhandledRejection', (error) => {
    console.error('Unhandled promise rejection:', error)
})



