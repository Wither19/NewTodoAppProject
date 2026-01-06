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
	OK = 0,
	Important,
	Urgent,
	Complete
}

export interface TodoListOptions {
	"thresholdForImportant": number,
	"thresholdForUrgent": number
};

export interface TodoListObj {
	"todoList": Todo[]
	"todoListOptions": TodoListOptions
}
