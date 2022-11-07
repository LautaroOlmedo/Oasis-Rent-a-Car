import React from 'react';

const langContext = React.createContext()

const LangProvider = ({children}) =>{
    return(
        <div>
            <langContext.Provider value = {{hola: 'lautaro'}}>
                {children}
            </langContext.Provider>
        </div>
    );
};

export {LangProvider ,langContext}