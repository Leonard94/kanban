import { setColumns } from '../../store/kanban/kanban-actions'

export const dragEnd = (result: any, columns: any, dispatch: any) => {
  const { source, destination } = result
  if (!destination) return

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.tasks]
    const destItems = [...destColumn.tasks]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    dispatch(
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          tasks: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          tasks: destItems,
        },
      })
    )
  } else {
    const column = columns[source.droppableId]
    const copiedItems = [...column.tasks]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)

    dispatch(
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          tasks: copiedItems,
        },
      })
    )
  }
}
