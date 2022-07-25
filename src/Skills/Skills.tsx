import Backend from './Backend/Backend'
import Cloud from './Cloud/Cloud'
import style from './Skills.module.scss'

const Skills = () =>
  <article id="skills" className={style.container}>
    <h1 className={style.title}>
      <strong>우수한 기술력</strong>을<br /> 바탕으로
    </h1>

    <div className={style.skills}>
      <Cloud />
      <Backend />
    </div>
  </article>

export default Skills
