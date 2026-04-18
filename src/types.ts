export interface Todo {
	name: string
	completed: boolean
	date: string
}

export interface TodoListOptions {
	"thresholdForImportant": number,
	"thresholdForUrgent": number
}

export interface TodoListObj {
	"todoList": Todo[]
	"todoListOptions": TodoListOptions
}
