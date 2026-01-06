export interface RenameFn {
	source: any[]
	index: number
	taskName: string | null
}

export interface Todo {
	name: string
	completed: boolean
	date: string
}

export enum TodoItemStatus {
	OK = "ok",
	IMPORTANT = "important",
	URGENT = "urgent",
	COMPLETE = "complete",
	LATE = "late"
}

export interface TodoListOptions {
	"thresholdForImportant": number,
	"thresholdForUrgent": number
};

export interface TodoListObj {
	"todoList": Todo[]
	"todoListOptions": TodoListOptions
}
