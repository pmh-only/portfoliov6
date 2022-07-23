import { Fragment } from 'react'
import HelloJumbotron from '../HelloJumbotron/HelloJumbotron'
import Keywords from '../Keywords/Keywords'

import './App.module.scss'

const App = () =>
  <Fragment>
    <header>
      <nav>

      </nav>
    </header>

    <main>
      <HelloJumbotron />
      <Keywords />
    </main>

    <footer></footer>
  </Fragment>

export default App
