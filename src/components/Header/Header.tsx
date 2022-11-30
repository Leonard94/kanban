import { NavLink } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import styles from './styles.module.scss'

export const Header = () => {
  const { projects: projectsList }: any = useSelector((state) => state)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>logo</span>
      </div>
      <div className={styles.projects}>
        <p className={styles.title}>Your Projects</p>
        <nav>
          <ul className={styles.menu}>
            {projectsList.map((project: any, index: number) => (
              <li key={index}>
                <NavLink to='/kanban'>{project.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
