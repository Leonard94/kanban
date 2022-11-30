import { Link, NavLink } from 'react-router-dom'

import { useAppSelector } from '../../store/hooks'

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import styles from './styles.module.scss'

export const Header = () => {
  const { projects } = useAppSelector((state) => state.projects)

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>
        <Logo />
      </Link>
      <div className={styles.projects}>
        <Link to='/' className={styles.title}>
          Your Projects
        </Link>
        <nav>
          <ul className={styles.menu}>
            {projects.map((project) => (
              <li key={project.id}>
                <NavLink to={`/kanban/${project.id}`}>{project.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
