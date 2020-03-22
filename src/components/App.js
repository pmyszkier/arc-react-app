import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { HomePage, SamplePage, PMFirstPage, PMSecondPage, PMThirdPage, NotFoundPage } from 'components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/sample-page" component={SamplePage} />
        <Route path="/first-page" component={PMFirstPage} />
        <Route path="/second-page" component={PMSecondPage} />
        <Route path="/third-page" component={PMThirdPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
