import React from 'react';
import { UrbanBotFacebook } from '@urban-bot/facebook';
import { render, Root } from '@urban-bot/core';
import dotenv from 'dotenv';
import { App } from '../App';

dotenv.config();

if (process.env.FACEBOOK_APP_SECRET === undefined) {
    throw new Error('Provide FACEBOOK_APP_SECRET to .env https://developers.facebook.com/apps/');
}

if (process.env.FACEBOOK_PAGE_ACCESS_TOKEN === undefined) {
    throw new Error('Provide FACEBOOK_PAGE_ACCESS_TOKEN to .env https://developers.facebook.com/apps/');
}

const urbanBotFacebook = new UrbanBotFacebook({
    appSecret: process.env.FACEBOOK_APP_SECRET,
    pageAccessToken: process.env.FACEBOOK_PAGE_ACCESS_TOKEN,
    verifyToken: process.env.FACEBOOK_VERIFY_TOKEN,
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
});

render(
    <Root bot={urbanBotFacebook} isNewMessageEveryRender>
        <App />
    </Root>,
    () => console.log('facebook bot has started'),
);
