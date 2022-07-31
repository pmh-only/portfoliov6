import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import style from './Lead.module.scss'

const Lead = () =>
  <article id="lead">
    <div className={style.shadow}>
      <h1 className={style.title}>
        누구 앞이라도<br />
        <strong>당당하게 모범이 되는</strong>
      </h1>

      <ul>
        <li>2020년 SWAG <strong>동아리 회장</strong></li>
        <li>2020년 중교 <strong>학생회 회장</strong></li>
        <li>2022년 WINE <strong>동아리 회장</strong></li>
        <li>2022년 고교 <strong>학생회 회장</strong></li>
      </ul>
    </div>

    <Carousel className={style.carousel} stopOnHover={false} infiniteLoop interval={5000} showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} autoPlay>
      <img src="/lead1.jpg" alt="" />
      <img src="/lead2.jpg" alt="" />
      <img src="/lead3.jpg" alt="" />
      <img src="/lead4.jpg" alt="" />
    </Carousel>
  </article>

export default Lead
