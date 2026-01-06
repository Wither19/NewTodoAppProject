import { TodoItemStatus } from "./types"
import type { Todo } from "./types"
import moment from "moment"
import type { Moment } from "moment"

export class TodoItem {
  private name: string
  private completed: boolean
  private status: TodoItemStatus
  private date: Moment

  constructor(t: Todo) {
    this.name = t.name

    const today
    const d = moment(t.date, "MM-DD-YYYY")
    this.date = d;

    this.status = getItemStatus(d)
  }

  public getName() {
    return this.name
  }

  public getStatus() {
    return this.status
  }

  public getFullDate() {
    return this.date.format("MM/DD/YYYY")
  }

}