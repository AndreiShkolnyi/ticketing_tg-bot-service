import { PROTO_PATHS } from '@choncinema/contracts'
import { credentials, loadPackageDefinition } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import { TelegramServiceClient } from '@choncinema/contracts/gen/ts/telegram'
import { Config } from '@/config'

const packageDef = loadSync(PROTO_PATHS.TELEGRAM, {
	keepCase: false,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true
})

const proto = loadPackageDefinition(packageDef) as any

export const telegramClient: TelegramServiceClient = new proto.telegram.v1.TelegramService(Config.AUTH_GRPC_URL, credentials.createInsecure())
