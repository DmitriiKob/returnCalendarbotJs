const TelegramApi = require('node-telegram-bot-api')

const token = '5774766322:AAFsyQBE5DHfqhmA4EyTc2gSN2nDbfRTPvc'

const bot = new TelegramApi(token, {polling: true})



const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'hello'},
        {command: '/info', description: 'check name'}
    ])
    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id
        const first_name = msg.from.first_name
        const last_name = msg.from.last_name
        if(text === '/start'){
        return bot.sendMessage(chatId, "Hello, welcome to CalendarBot")
        }
        if(text === "/info"){
        return bot.sendMessage(chatId, 'Your name is' + ' ' + first_name + ' '+ last_name+ '?')
        }
    })
}