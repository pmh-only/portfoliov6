import style from './Cloud.module.scss'

const Cloud = () =>
  <div>
    <h2 style={{ backgroundImage: 'url("/cloud.png")' }}>
      저는 <strong>클라우드 아키텍트</strong>입니다.
    </h2>
    <div>
      <ul className={style.logos}>
        <li>
          <i className="devicon-"></i>
        </li>
        <li>
          <i className="devicon-"></i>
        </li>
        <li>
          <i className="devicon-"></i>
        </li>
        <li>
          <i className="devicon-"></i>
        </li>
      </ul>
      <p>#AWS #Terraform #MSA #고가용적 #비용효율적 #CI/CD #DevOps</p>
    </div>
  </div>

export default Cloud
