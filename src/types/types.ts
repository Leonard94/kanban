export type TTask = {
  id: number
  title: string
  timeCreate: number
  description?: string
  important?: boolean
  child: TChildTasks[] | null
}

export type TChildTasks = {
  id: number
  title: string
  completed: boolean
}

export type TColumns = {
  columns: {
    queue: {
      name: string
      tasks: TTask[]
    }
    development: {
      name: string
      tasks: TTask[]
    }
    done: {
      name: string
      tasks: TTask[]
    }
  }
}

export type TAction = {
  type: string
  payload?: any
}

export type TActionAddProject = {
  id: number
  title: string
}

type TProject = {
  id: number
  title: string
}

export type TProjectsInitial = {
  projects: TProject[]
}
