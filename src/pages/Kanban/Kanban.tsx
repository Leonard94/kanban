import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useAppSelector } from '../../store/hooks'
import { dragEnd } from './helpers'

import { Board } from './components/Board/Board'

import styles from './styles.module.scss'

export const Kanban = () => {
  const { id } = useParams()
  const { columns } = useAppSelector((state) => state.kanban)

  const dispatch = useDispatch()

  const handleDrag = (result: any) => {
    dragEnd(result, columns, dispatch)
  }

  return (
    <>
      <h1 className='title'>Your tasks</h1>
      <div className={styles.kanban}>
        {/* {boards.map((board) => (
          <Board key={board.id} {...board} />
        ))} */}
        <DragDropContext onDragEnd={handleDrag}>
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <div key={columnId}>
                <h2>{column.name}</h2>
                <div className={styles.column}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? 'lightblue'
                              : 'lightgrey',
                            padding: 4,
                            width: 250,
                            minHeight: 500,
                          }}
                        >
                          {column.tasks.map((item, index) => {
                            // ! item.id!!
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item?.id?.toString() || '2'}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: 'none',
                                        padding: 16,
                                        margin: '0 0 8px 0',
                                        minHeight: '50px',
                                        backgroundColor: snapshot.isDragging
                                          ? '#263B4A'
                                          : '#456C86',
                                        color: 'white',
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.title}
                                    </div>
                                  )
                                }}
                              </Draggable>
                            )
                          })}
                          {provided.placeholder}
                        </div>
                      )
                    }}
                  </Droppable>
                </div>
              </div>
            )
          })}
        </DragDropContext>
      </div>
    </>
  )
}
