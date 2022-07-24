import TypeAnimation from 'react-type-animation'
import style from './HelloJumbotron.module.scss'

const HelloJumbotron = () =>
  <article id="hello" className={style.container}>
    <h1 className={style.title}>
      <TypeAnimation
        cursor={false}
        sequence={[
          1000, '안녕하세요,',
          1000, '안녕하세요, 박민혁입니다.'
        ]} />
    </h1>
    <p><code>#next</code>까지 스크롤을 내려주세요</p>
  </article>

export default HelloJumbotron
