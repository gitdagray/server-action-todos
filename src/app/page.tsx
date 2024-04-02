import { getTodos } from "./actions/actions"
import ClientList from "./components/ClientList"

export default async function Home() {
  const todos = await getTodos()

  return <ClientList todos={todos} />
}
