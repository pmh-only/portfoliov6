import style from './Certificated.module.scss'

const Certificated = () =>
  <article id="cert" className={style.container}>
    <h1 className={style.title}>
      공인된 기관에서 인정받아<br />
      누구나 <strong>믿을 수 있는</strong>
    </h1>

    <div className={style.content}>
      <img src="/bob.svg"/>
      <h2>차세대 보안 리더 양성 BoB 10기</h2>
    </div>
  </article>

export default Certificated
