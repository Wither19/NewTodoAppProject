import type { Todo } from "./types"

export class TodoItem {
  private name: string
  private completed: boolean
  private important: boolean
  private date: Date

  constructor(t: Todo) {
    this.name = t.name
    this.completed = t.completed
    this.important = t.important

    this.date = new Date(t.date)
  }

  public getName() {
    return this.name
  }

  public getCompletedStatus() {
    return this.completed
  }

  public getImportantStatus() {
    return this.important
  }

  public getDate() {
    return this.date
  }

}