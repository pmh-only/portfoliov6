import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import style from './Teach.module.scss'

const Teach = () =>
  <article id="teach">
    <div className={style.shadow}>
      <h1 className={style.title}>
        항상 남에게<br />
        <strong>베풀 줄 아는</strong>
      </h1>

      <p>
        학교의 명을 이을 수 있도록 웹 개발자 인재를 양성하자는 신념으로 <strong>후배들을 위해 재능기부 교육을 진행</strong>하고 있습니다.
      </p>
    </div>

    <Carousel className={style.carousel} stopOnHover={false} infiniteLoop interval={5000} showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} autoPlay swipeable={false}>
      <img src="/teach1.png" alt="" />
      <img src="/teach2.png" alt="" />
      <img src="/teach3.jpg" alt="" />
    </Carousel>
  </article>

export default Teach
