import { TelegramCompleteRequest, TelegramCompleteResponse } from '@choncinema/contracts/gen/ts/telegram'
import { Telegraf } from 'telegraf'

import { telegramClient } from '@/infrastructure/grpc/auth.client'
import { TelegrafContext } from '@/shared'
import { callUnary } from '@/shared/utils'

export function registerContactHandler(bot: Telegraf<TelegrafContext>) {
	bot.on('contact', async ctx => {
		const phone = ctx.message.contact.phone_number

		if (!ctx.chat.id && !ctx.session.id) {
			return ctx.reply('Error. Please continue in browser')
		}

		const request: TelegramCompleteRequest = {
			sessionId: ctx.session.id,
			phone
		}

		const { sessionId } = await callUnary<TelegramCompleteResponse>(
			telegramClient.telegramComplete.bind(telegramClient),
			request
		)

		await ctx.reply('Registration is success', {
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: 'Open in browser',
							url: `https://choncinema.com/auth/tg-complete?sessionId=${sessionId}`
						}
					]
				],
                remove_keyboard: true
			}
		})
	})
}