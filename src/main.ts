import { createBot } from "./modules/bot/bot.factory";

async function bootstrap() {
   try {
      const bot = createBot()
      await bot.launch()
      
      console.log('Bot started')
   } catch (err) {
      console.error(err)

      process.exit(1)
   }
}

bootstrap()