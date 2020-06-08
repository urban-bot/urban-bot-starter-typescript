![](https://i.ibb.co/QfQ1SwT/ts.png)
# Urban Bot Starter

Develop chatbots with zero configuration using typescript. If you want to use javascript use [js starter](https://github.com/urban-bot/urban-bot-starter-javascript).

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
 4. Run `npm run start-tunnel` and connect the public url with slack webhook.
 5. Uncomment `// import './render/slack';` inside `src/index.ts`
 6. Run `npm run dev` and check your bot
 
 ### Facebook
 
  1. Create [facebook app](https://developers.facebook.com/docs/messenger-platform/getting-started/app-setup)
  2. Paste credentials to `.env`
  3. Run `npm run start-tunnel` and connect the public url with facebook webhook.
  4. Uncomment `// import './render/facebook';` inside `src/index.ts`
  5. Run `npm run dev` and check your bot


## Scripts
#### `npm run build`
Build your code to `dist` folder.
#### `npm run dev`
Build and start your code after every code changes. Settings are inside `package.json` `nodemonConfig`.
#### `npm run lint`
Check code style. All rules are inside `.eslintrc.js`.
#### `npm run lint:fix`
Fix code style issues automatically including `prettier` formatting.
#### `npm run start`
Start code from `dist` folder.
#### `npm run start-tunnel`
Start a public URL for exposing your local server.
#### `npm run test`
Start your tests. File matching `*.test.(js|jsx)`.
#### `npm run typecheck`
Check typescript errors.

## Import files
You could import any file and paste to components as buffer or stream. It will be automatically added to dist bundle.
```jsx
import image from './assets/logo.png';
import doc from './assets/document.doc';

function App() {
  return (
    <>
      <Image file={fs.createReadStream(image)} />
      <File file={fs.readFileSync(doc)} />
    </>
  );
}
```
