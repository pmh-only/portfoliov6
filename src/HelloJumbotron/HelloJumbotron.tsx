import style from './HelloJumbotron.module.scss'
import usePage from 'use-motion-page'
import { motion, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

const HelloJumbotron = () => {
  const page = usePage()
  const padding = useTransform(page, [0, 0.3], [0, 20])
  const opacity = useTransform(page, [0, 0.45], [1, 0])

  const [isVisible, setVisible] = useState(true)

  useEffect(() => {
    page.onChange((v) => {
      setVisible(v < 0.5)
    })
  }, [])

  return (
    <motion.article id="hello" style={{ padding, opacity }}>
      <motion.div className={style.container}>
        {isVisible && (
          <div className={style.hello}>
            <h1 className={style.title}>
              안녕하세요, <strong>박민혁</strong>입니다.
            </h1>
            <p><a href="#keywords"><code>#keywords</code></a>까지 스크롤을 내려주세요</p>
          </div>
        )}
      </motion.div>
    </motion.article>
  )
}
export default HelloJumbotron
