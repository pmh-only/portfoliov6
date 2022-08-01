import style from './Loading.module.scss'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

import 'nprogress/nprogress.css'
import './Loadingbar.scss'

const Loading = ({ onLoadingDone }: { onLoadingDone: () => any }) => {
  const imagesToWatch = [
    '/actions1.jpg',
    '/actions2.jpg',
    '/actions3.jpg',
    '/actions4.jpg',
    '/actions5.jpg',
    '/actions6.jpg',
    '/backend.png',
    '/bob.svg',
    '/cloud.png',
    '/core.jpg',
    '/grow.svg',
    '/lead1.jpg',
    '/lead2.jpg',
    '/lead3.jpg',
    '/lead4.jpg',
    '/stamp.svg',
    '/teach1.png',
    '/teach2.png',
    '/teach3.jpg'
  ]

  const videosToWatch = [
    '/hellobg.mp4'
  ]

  useEffect(() => {
    let loaded = 0

    NProgress.configure({
      showSpinner: false
    })

    NProgress.start()

    for (const imgSrc of imagesToWatch) {
      const image = new Image()
      image.addEventListener('load', () => {
        loaded++
        NProgress.inc()
        if (loaded === imagesToWatch.length + videosToWatch.length) {
          NProgress.done()
          onLoadingDone()
        }
      })
      image.src = imgSrc
    }

    for (const videoSrc of videosToWatch) {
      const video = document.createElement('video')
      video.src = videoSrc
      video.load()

      video.addEventListener('loadeddata', () => {
        loaded++
        NProgress.inc()
        if (loaded === imagesToWatch.length + videosToWatch.length) {
          NProgress.done()
          onLoadingDone()
        }
      })
    }
  }, [])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={style.container}>
      <h1 className={style.label}><strong>portfolio.</strong>pmh.codes</h1>
      <p>영상 & 사진들을 불러오고 있어요!</p>
    </motion.div>
  )
}

export default Loading
