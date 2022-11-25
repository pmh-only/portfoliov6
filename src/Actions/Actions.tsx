import style from './Actions.module.scss'

const Actions = () =>
  <article id="actions" className={style.container}>
    <h1 className={style.title}>
      지치지 않고 <br />끝없이 <strong>도전하는</strong>
    </h1>

    <div className={style.outer}>
      <div className={style.actions}>
        <div style={{ backgroundImage: 'url("/actions1.webp")' }}>
          <h2>1회 창의융합 <strong>해커톤 대회 우수</strong></h2>
        </div>
        <div style={{ backgroundImage: 'url("/actions2.webp")' }}>
          <h2>2회 창의융합 <strong>해커톤 대회 최우수</strong></h2>
        </div>
        <div style={{ backgroundImage: 'url("/actions3.webp")' }}>
          <h2>취업대박람회 <strong>창업경진대회 표창</strong></h2>
        </div>
        <div style={{ backgroundImage: 'url("/actions4.webp")' }}>
          <h2>2021 경북<strong>기능경기대회 금메달</strong></h2>
        </div>
        <div style={{ backgroundImage: 'url("/actions5.webp")' }}>
          <h2>2021 <strong>전국기능경기대회 우수상</strong></h2>
        </div>
        <div style={{ backgroundImage: 'url("/actions6.webp")' }}>
          <h2>2022 경북<strong>기능경기대회 금메달</strong></h2>
        </div>
      </div>
    </div>
  </article>

export default Actions
