import style from './Backend.module.scss'

const Backend = () =>
  <div>
    <h2 style={{ backgroundImage: 'url("/backend.png")' }}>
      저는 <strong>백엔드 개발자</strong>입니다.
    </h2>
    <div>
      <ul className={style.logos}>
        <li>
          <i className="devicon-"></i>
        </li>
        <li>
          <i className="devicon-"></i>
        </li>
        <li>
          <i className="devicon-"></i>
        </li>
        <li>
          <i className="devicon-"></i>
        </li>
      </ul>
      <p>#Node.js #Nest.js #Serverless #RestfulAPI #OIDC</p>
    </div>
  </div>

export default Backend
