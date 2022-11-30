import { NavLink } from 'react-router-dom'

import { useAppSelector } from '../../store/hooks'

import styles from './styles.module.scss'

export const Header = () => {
  const { projects } = useAppSelector((state) => state.projects)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>logo</span>
      </div>
      <div className={styles.projects}>
        <p className={styles.title}>Your Projects</p>
        <nav>
          <ul className={styles.menu}>
            {projects.map((project) => (
              <li key={project.id}>
                <NavLink to='/kanban'>{project.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
