import React, { useState } from 'react';
import { Text, useText } from 'urban-bot';

export function App() {
    const [text, setText] = useState('Say hi');

    useText(({ text }) => {
        setText(text);
    });

    return <Text>{text}</Text>;
}
