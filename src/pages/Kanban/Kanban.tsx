import { useState } from 'react'
import { Board } from './components/Board/Board'

import styles from './styles.module.scss'

export const Kanban = () => {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: 'Queue',
      tasks: [
        {
          id: 1,
          title: 'Первая задача',
          description: 'Описание первой задачи',
          timeCreate: 1668767058,
          child: null,
        },
        {
          id: 2,
          title: 'Вторая задача',
          description: 'Описание второй задачи',
          timeCreate: 1668767058,
          important: true,
          child: [
            {
              id: 1,
              title: 'Подзадача номер 1',
            },
            {
              id: 2,
              title: 'Подзадача номер 2',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Development',
      tasks: [
        {
          id: 1,
          title: 'Первая задача в разработке',
          timeCreate: 1668767058,
          child: null,
        },
        {
          id: 2,
          title: 'Вторая задача в разработке',
          timeCreate: 1668767058,
          child: null,
        },
      ],
    },
    {
      id: 3,
      title: 'Done',
      tasks: [
        {
          id: 1,
          title: 'Первая задача выполнена',
          description: 'Описание первой задачи',
          timeCreate: 1668767058,
          child: null,
        },
      ],
    },
  ])

  return (
    <>
      <h1 className='title'>Your tasks</h1>
      <div className={styles.kanban}>
        {boards.map((board) => (
          <Board key={board.id} {...board} />
        ))}
      </div>
    </>
  )
}
