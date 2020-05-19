import React from 'react';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { render, Root } from '@urban-bot/core';
import dotenv from 'dotenv';
import { App } from '../App';

dotenv.config();

const isDevelopment = process.env.NODE_ENV === 'development';

if (process.env.TELEGRAM_TOKEN === undefined) {
    throw new Error('Provide TELEGRAM_TOKEN to .env https://core.telegram.org/bots#6-botfather');
}

const urbanBotTelegram = new UrbanBotTelegram({
    token: process.env.TELEGRAM_TOKEN,
    isPolling: isDevelopment,
});

render(
    <Root bot={urbanBotTelegram} port={process.env.PORT ? Number(process.env.PORT) : undefined}>
        <App />
    </Root>,
    () => console.log('telegram bot has started'),
);
