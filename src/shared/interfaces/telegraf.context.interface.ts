import { Context } from "telegraf"

export type Session = {
    id?: string
}

export type TelegrafContext = Context & {
    session: Session
}