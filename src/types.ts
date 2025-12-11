export interface RenameFn {
	source: any[]
	index: number
	taskName: string | null
}

export interface Todo {
	name: string
	completed: boolean
	important: boolean
	date: string
}

export interface TodoListOptions {

};

export interface TodoListObj {
	"todoList": Todo[]
	"todoListOptions": TodoListOptions
}
