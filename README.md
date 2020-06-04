
# Urban Bot Starter

Develop chatbots with zero configuration using typescript.

## Launch
```shell
npx create-urban-bot my-app
```

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


## Scripts
#### `npm run build`
Build your code to `dist` folder.
#### `npm run dev`
Build and start your code after every code changes. Settings are inside `nodemon.json`.
#### `npm run lint`
Check code style. All rules are inside `.eslintrc`.
#### `npm run lint:fix`
Fix code style issues automatically including prettier formatting.
#### `npm run start`
Start code from `dist` folder.
#### `npm run start-tunnel`
Start a public URL for exposing your local server.
#### `npm run test`
Start your tests. File matching `*.test.(js|ts|tsx)`
#### `npm run typecheck`
Check typescript errors.
