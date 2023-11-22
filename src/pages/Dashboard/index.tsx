import React from 'react';

import ContentHeader from '../../components/ContentHeader';

import { Container } from './styles';
import SelectInput from '../../components/SelectInput';

const Dashboard: React.FC = () => {
    const options = [
        {value: 'Bruno', label: 'Bruno'},
        {value: 'Maria', label: 'Maria'},
        {value: 'Ana', label: 'Ana'}
    ]
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={options}/>
            </ContentHeader> 
        </Container>
    )
}
export default Dashboard;