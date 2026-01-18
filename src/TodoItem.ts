import todoJSON from "./todo-sample.json"
import { TodoItemStatus } from "./enums"
import type { Todo } from "./types"
import { dayOfWeek, fullDate, getItemStatus } from "./functions"
import moment from "moment"
import type { Moment } from "moment"

export class TodoItem {
  private name: string
  private completed: boolean
  private status: TodoItemStatus
  private date: Moment

  constructor(t: Todo) {
    this.name = t.name
    this.completed = t.completed

    const d = moment(t.date, "MM-DD-YYYY")
    this.date = d

    const todoOptions = todoJSON.todoListOptions

    this.status = getItemStatus(this.completed, d, todoOptions)
  }

  public getName() {
    return this.name
  }

  public getStatus() {
    return this.status
  }

  public getCompletion() {
    return this.completed
  }

  public getFullDate() {
    return fullDate(this.date)
  }

  public getDayOfWeek() {
    return dayOfWeek(this.date)
  }

  public setCompletion(c: boolean = true) {
    this.completed = c
  }

  public toggleCompletion() {
    this.setCompletion(!this.completed)
  }

  

}