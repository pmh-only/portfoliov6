import { Fragment } from 'react'
import Actions from '../Actions/Actions'
import HelloJumbotron from '../HelloJumbotron/HelloJumbotron'
import Lead from '../Lead/Lead'
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
      <Actions />
      <Lead />
    </main>

    <footer></footer>
  </Fragment>

export default App
