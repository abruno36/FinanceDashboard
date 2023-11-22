import React, { ReactNode } from 'react';
import { Container } from './styles';

interface ChildrenProps {
    children?: ReactNode;
  }
  
const Content: React.FC<ChildrenProps> = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}
export default Content;