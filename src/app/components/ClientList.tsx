"use client"

import type { todoItem } from "../types/types"
import { createNewTodo } from "../actions/actions"

type Props = {
    todos: todoItem[]
}

export default function ClientList({ todos }: Props) {
    return (
        <section className="p-10">
            <noscript>JS Disabled!</noscript>

            <form
                action={createNewTodo}
                className="my-10 flex gap-4"
            >
                <input
                    type="text"
                    placeholder="new item"
                    name="newTodoItem"
                    className="p-2 rounded-md text-black"
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white p-2 rounded-md">
                    Submit
                </button>
            </form>

            <ul>
                {todos.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>

        </section>
    )
}