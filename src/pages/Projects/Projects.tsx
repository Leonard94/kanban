import { useAppSelector } from '../../store/hooks'

import { Project } from './Project/Project'

import styles from './styles.module.scss'

export const Projects = () => {
  const { projects } = useAppSelector((state) => state.projects)

  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  )
}
