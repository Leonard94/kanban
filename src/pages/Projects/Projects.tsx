import { useSelector, useDispatch } from 'react-redux'

import { removeProject } from '../../store/projects/projects-actions'

import { Project } from './Project/Project'

import styles from './styles.module.scss'

export const Projects = () => {
  const { projects: projectsList }: any = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div className={styles.projects}>
      <button onClick={() => dispatch(removeProject(1))}>
        Удалить первый idazx
      </button>
      {projectsList.map((project: any) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  )
}
