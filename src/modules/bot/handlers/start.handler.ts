import { Markup, Telegraf } from 'telegraf'

import type { TelegrafContext } from '@/shared'

export function registerStartHandler(bot: Telegraf<TelegrafContext>) {
	bot.start(async ctx => {
		const sessionId = ctx.payload

		if (!sessionId) {
			return ctx.reply(
				'You are not logged in',
				Markup.inlineKeyboard([
					Markup.button.url(
						'Login',
						`https://chontickets.com/auth/login`
					)
				])
			)
		}

        ctx.session.id = sessionId

        await ctx.reply('Welcome! You are logged in. Input your phone number to get an access', Markup.keyboard([
           [
             Markup.button.contactRequest('Send phone number'),
           ]
        ]))
	})
}
