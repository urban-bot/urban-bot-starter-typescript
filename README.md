
# Urban Bot Starter

Develop chatbots with zero configuration.

Included:
* **compiler** - *typescript*
* **linter** - *eslint*
* **code formatter** - *prettier*
* **test** - *jest*
* **live reload** - *nodemon*

## Launch
```shell
git clone https://github.com/urban-bot/urban-bot-starter.git
cd urban-bot-starter
rm -rf .git
git init
npm i
```
Rename `.env.example` to `.env`

### Telegram
 1. Get telegram [token](https://core.telegram.org/bots#6-botfather)
 2. Paste token to `.env` `TELEGRAM_TOKEN=YOUR_TOKEN`
 3. Uncomment `// import './render/telegram';` inside `src/index.ts` 
 4. Run `npm run dev` and check your bot

### Slack

 1. Create [slack app](https://slack.com/intl/en-ru/help/articles/115005265703-Create-a-bot-for-your-workspace)
 2. Paste [token](https://api.slack.com/authentication/token-types#granular_bot) to `.env` `SLACK_TOKEN=YOUR_TOKEN` 
 3. Paste [signing secret](https://api.slack.com/authentication/verifying-requests-from-slack#about) to `.env` `SLACK_SIGNING_SECRET=YOUR_SIGNING_SECRET`
 4. Uncomment `// import './render/slack';` inside `src/index.ts`
 5. Run `npm run dev` and check your bot
 
 ### Facebook
 
  1. Create [facebook app](https://developers.facebook.com/docs/messenger-platform/getting-started/app-setup)
  2. Paste credentials to `.env`
  3. Uncomment `// import './render/facebook';` inside `src/index.ts`
  4. Run `npm run dev` and check your bot

