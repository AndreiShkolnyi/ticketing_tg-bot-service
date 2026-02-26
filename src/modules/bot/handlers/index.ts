import { Telegraf } from 'telegraf'

import { registerStartHandler } from './start.handler'
import { TelegrafContext } from '@/shared'
import { registerContactHandler } from './contact.handler'

export function registerBotHandlers(bot: Telegraf<TelegrafContext>) {
	registerStartHandler(bot)
	registerContactHandler(bot)
}
