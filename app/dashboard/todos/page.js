async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  return await res.json()
}
const Todos = async () => {
  const data = await getTodos()
  return (
    <div>
      <h1 className='text-4xl font-bold mb-3'>Todos</h1>
      <div className='grid grid-cols-3 gap-4'>
        {data &&
          data.map((todo) => {
            return (
              <div className='border p-5 shadow-lg rounded-lg' key={todo.id}>
                <h4>{todo.title}</h4>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Todos
