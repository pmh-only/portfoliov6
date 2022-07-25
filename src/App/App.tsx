import { Fragment } from 'react'
import HelloJumbotron from '../HelloJumbotron/HelloJumbotron'
import Skills from '../Skills/Skills'

import './App.module.scss'

const App = () =>
  <Fragment>
    <header>
      <nav>

      </nav>
    </header>

    <main>
      <HelloJumbotron />
      <Skills />
    </main>

    <footer></footer>
  </Fragment>

export default App
