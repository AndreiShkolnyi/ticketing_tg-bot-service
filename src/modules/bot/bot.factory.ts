import { session, Telegraf } from 'telegraf'

import { Config } from '@/config'
import { registerBotHandlers } from './handlers'
import { Session, TelegrafContext } from '@/shared'

export function createBot() {
	const bot = new Telegraf<TelegrafContext>(Config.BOT_TOKEN)

    bot.use(session({
        defaultSession: (): Session => ({
            id: undefined
        })
    }))
 
    registerBotHandlers(bot)

    return bot
}
