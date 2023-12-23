import React, { createContext, useState, useContext } from 'react';

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

interface Props {
    children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<Props> = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@finance-dashboard:logged');

        return !!isLogged;
    });

    const signIn = (email: string, password: string) => {
        if(email === 'abruno@email.com' && password === '123'){
            localStorage.setItem('@finance-dashboard:logged', 'true');
            setLogged(true);
        }else{
            alert('Senha ou usuário inválidos!');
        }
    }

    const signOut = () => {
        localStorage.removeItem('@finance-dashboard:logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };