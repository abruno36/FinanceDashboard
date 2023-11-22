import React from 'react';
import Switch from 'react-switch';

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

const Toggle: React.FC<IToggleProps> = ({
    labelLeft,
    labelRight,
    checked,
    onChange
}) => (
    <Container>
        <ToggleLabel>{labelLeft}</ToggleLabel>
        <ToggleSelector                    
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={() => console.log ('mudou')}
        />
        <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>
)

export default Toggle;