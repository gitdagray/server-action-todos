"use server"

import type { todoItem } from "../types/types"
import { revalidatePath } from "next/cache"

export async function getTodos(): Promise<todoItem[]> {
    const response = await fetch('http://localhost:3500/todos', {
        cache: 'no-store',
    })

    return await response.json()
}

export async function createNewTodo(formData: FormData) {
    const newTodoItem = formData.get('newTodoItem')

    await fetch('http://localhost:3500/todos', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: newTodoItem,
            completed: false,
        })
    })

    revalidatePath("/list")
}

export async function sayHello() {
    console.log('hello from sayHello server action')
}