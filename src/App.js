import React from 'react';
import './App.css';
import {ApolloProvider} from '@apollo/react-hooks';
import { client } from "./graphql/client";
import MessagesForm from "./organisms/MessagesForm";
import PersonalContext from './personalContext';
import PersonModalForm from "./molecules/PersonModalForm/PersonModalForm";

function App() {
    const [name, setName] = React.useState(null);

    return (
      <ApolloProvider client={client}>
          { !name ?
            <PersonModalForm saveName={name => setName(name)}/>
          :
              <PersonalContext.Provider value={{login: name, name: name}}>
                  <div className="App">
                      <MessagesForm/>
                  </div>
              </PersonalContext.Provider>
          }
      </ApolloProvider>
    );
}

export default App;
