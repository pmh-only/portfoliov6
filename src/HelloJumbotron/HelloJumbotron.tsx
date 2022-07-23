import style from './HelloJumbotron.module.scss'

const HelloJumbotron = () =>
  <article id="hello" className={style.container}>
    <h1 className={style.title}>
      안녕하세요, <strong>박민혁</strong>입니다.
    </h1>
    <p><code>#next</code>까지 스크롤을 내려주세요</p>
  </article>

export default HelloJumbotron
