import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/react-hooks'
import { HomePage, PersonModalForm } from 'components'
import { client } from '../graphql/client'
import PersonalContext from './personalContext'


// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  const [name, setName] = React.useState(null)

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        { !name
          ? <PersonModalForm saveName={name => setName(name)} />
          : (
            <PersonalContext.Provider value={{ login: name, name }}>
              <Switch>
                <Route path="/" component={HomePage} exact />
              </Switch>
            </PersonalContext.Provider>
          )
          }
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default App
