import { useEffect, useState } from 'react'
import style from './HelloJumbotron.module.scss'

const HelloJumbotron = () => {
  const message = '안녕하세요,     박민혁입니다.'
  const toBold = '박민혁'
  const [queueIndex, setQueueIndex] = useState(0)

  useEffect(() => {
    let queueIndex = 0
    const interval = setInterval(() => {
      setQueueIndex(queueIndex++)
      if (queueIndex > message.length) {
        clearInterval(interval)
      }
    }, 100)
  }, [])

  return (
    <article id="hello" className={style.container}>
      <video src="/hellobg.webm" muted autoPlay loop />

      <h1 className={style.title}>
        {message.split('').map((v, i) =>
          toBold.includes(v)
            ? <strong>{queueIndex > i && v}</strong>
            : <>{queueIndex > i && v}{i === 7 && <wbr />}</>)}
        {queueIndex < message.length - 1 && '_'}
      </h1>
      <p>스크롤을 내려주세요</p>
    </article>
  )
}

export default HelloJumbotron
