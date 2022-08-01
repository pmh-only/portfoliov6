import { Fragment } from 'react'
import Actions from '../Actions/Actions'
import Certificated from '../Certificated/Certificated'
import HelloJumbotron from '../HelloJumbotron/HelloJumbotron'
import Lead from '../Lead/Lead'
import Skills from '../Skills/Skills'
import Teach from '../Teach/Teach'

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
      <Teach />
      <Certificated />
    </main>

    <footer></footer>
  </Fragment>

export default App
