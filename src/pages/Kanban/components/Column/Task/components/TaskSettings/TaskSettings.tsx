import { TTask } from '../../../../../../../types/types'

import { Details } from './components/Details/Details'
import { Comments } from './components/Comments/Comments'
import { ChildTasks } from './components/ChildTasks/ChildTasks'
import { TitleSection } from './components/TitleSection/TitleSection'

import styles from './styles.module.scss'

export const TaskSettings: React.FC<TTask> = ({
  id,
  title,
  description,
  important,
  child,
}) => {
  return (
    <div className={styles.settings}>
      <div className={styles.content}>
        <TitleSection title={title} description={description} />
        <ChildTasks child={child} />
        <Comments />
      </div>
      <Details id={id} />
    </div>
  )
}
