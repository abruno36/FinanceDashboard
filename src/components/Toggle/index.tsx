/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import {
    Container,
    ToggleLabel,
    ToggleSelector
} from './styles';


interface IToggleProps {
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange(): void;
}

const Toggle: React.FC = () => {
    const [online, setOnline] = useState<boolean>(true);

    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector
                checked={online}
                onChange={() => setOnline(!online)}
                uncheckedIcon={false}
                checkedIcon={false}
            />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    );
};

export default Toggle;