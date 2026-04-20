import type { Moment } from "moment"
import moment from "moment"
import type { TodoListOptions } from "./types"
import { TodoItemStatus } from "./enums"

export function getItemStatus(completed: boolean, date: Moment, options: TodoListOptions): TodoItemStatus {
	const today = moment()
	const dateDif = date.date() - today.date()

	let status = TodoItemStatus.OK

	if (dateDif <= options.thresholdForUrgent) {
		status = TodoItemStatus.URGENT
	}
	if (dateDif <= options.thresholdForImportant) {
		status = TodoItemStatus.IMPORTANT
	}
	if (dateDif < 0) {
		status = TodoItemStatus.LATE
	}
	if (completed) {
		status = TodoItemStatus.COMPLETED
	}

	return status
}

export const fullDate = (date: Moment) => date.format("MM/DD/YYYY")

export function dayOfWeek(date: Moment) {
	let w = "dddd"

	const t = moment()

	const diff = date.diff(t, "days")

	if (t.isAfter(date)) {
		if (diff < 7 && diff >= 14) {
			w = "[Last] " + w
		}
	} else {
		if (diff < 7) {
			w = "[This] " + w
		} else if (diff < 14) {
			w = "[Next] " + w
		}
	}

	return date.format(w)
}