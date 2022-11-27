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
