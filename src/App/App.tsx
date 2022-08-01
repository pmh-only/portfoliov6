import { AnimatePresence } from 'framer-motion'
import { Fragment, useState } from 'react'
import Actions from '../Actions/Actions'
import Certificated from '../Certificated/Certificated'
import Finale from '../Finale/Finale'
import HelloJumbotron from '../HelloJumbotron/HelloJumbotron'
import Lead from '../Lead/Lead'
import Loading from '../Loading/Loading'
import Skills from '../Skills/Skills'
import Teach from '../Teach/Teach'

import style from './App.module.scss'

const App = () => {
  const [loading, setLoading] = useState(true)

  return (
    <Fragment>
      <AnimatePresence>
        {loading &&
          <Loading
            onLoadingDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className={style.main}>
          <HelloJumbotron />
          <Skills />
          <Actions />
          <Lead />
          <Teach />
          <Certificated />
          <Finale />
        </main>
      )}
    </Fragment>
  )
}

export default App
