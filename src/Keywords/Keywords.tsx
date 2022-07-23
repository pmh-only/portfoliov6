import style from './Keywords.module.scss'
import usePage from 'use-motion-page'
import { motion, useTransform } from 'framer-motion'

const Keywords = () => {
  const page = usePage()
  const padding = useTransform(page, [0.6, 0.9], [20, 0])

  return (
    <motion.article id="hello" style={{ padding }}>
      <p className={style.tag}><code>#keywords</code></p>
      <div className={style.container}>
        <div className={style.keywords}>
          <p>개발자</p>
          <p>클라우드 아키텍트</p>
          <p>보안</p>
        </div>
      </div>
    </motion.article>
  )
}

export default Keywords
