import React, { useState } from 'react';

import ContentHeader from '../../components/ContentHeader';

import { Container } from './styles';
import SelectInput from '../../components/SelectInput';

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    
    const options = [
        {value: 'Bruno', label: 'Bruno'},
        {value: 'Maria', label: 'Maria'},
        {value: 'Ana', label: 'Ana'}
    ]
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={options} onChange={() => {}}/>
            </ContentHeader> 
        </Container>
    )
}
export default Dashboard;