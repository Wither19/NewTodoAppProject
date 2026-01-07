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

export interface TodoListOptions {
	"thresholdForImportant": number,
	"thresholdForUrgent": number
};

export interface TodoListObj {
	"todoList": Todo[]
	"todoListOptions": TodoListOptions
}
