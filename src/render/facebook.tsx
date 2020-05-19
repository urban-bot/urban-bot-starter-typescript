import React from 'react';
import { UrbanBotFacebook } from '@urban-bot/facebook';
import { render, Root } from '@urban-bot/core';
import dotenv from 'dotenv';
import { App } from '../App';

dotenv.config();

const { FACEBOOK_APP_SECRET, FACEBOOK_PAGE_ACCESS_TOKEN, FACEBOOK_VERIFY_TOKEN, PORT } = process.env;

if (FACEBOOK_APP_SECRET === undefined) {
    throw new Error('Provide FACEBOOK_APP_SECRET to .env https://developers.facebook.com/apps/');
}

if (FACEBOOK_PAGE_ACCESS_TOKEN === undefined) {
    throw new Error('Provide FACEBOOK_PAGE_ACCESS_TOKEN to .env https://developers.facebook.com/apps/');
}

const urbanBotFacebook = new UrbanBotFacebook({
    appSecret: FACEBOOK_APP_SECRET,
    pageAccessToken: FACEBOOK_PAGE_ACCESS_TOKEN,
    verifyToken: FACEBOOK_VERIFY_TOKEN,
});

render(
    <Root bot={urbanBotFacebook} isNewMessageEveryRender port={PORT ? Number(PORT) : undefined}>
        <App />
    </Root>,
    () => console.log('facebook bot has started'),
);
