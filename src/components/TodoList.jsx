import Todo from "./Todo"

const TodoList = ({ todos, addTodo, completeTodo, editTodoText, deleteTodo }) => {
    
  return (
    <div>
      <h1>Create Todo</h1>
      <input
        type="text"
        onKeyDown={(e) => {
          e.key === "Enter" && addTodo(e)
        }}
      />
      {todos.length ? (
        <div>
          <h1>Todo Items</h1>
          <ul className="todolist">
            {todos
              .filter((i) => !i.completed)
              .map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                    editTodoText={editTodoText}
                    deleteTodo={deleteTodo}
                  />
                )
              })}
          </ul>
          <h1>Completed Items </h1>
          <ul className="todolist">
            {todos
              .filter((i) => i.completed)
              .map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                    editTodoText={editTodoText}
                    deleteTodo={deleteTodo}
                  />
                )
              })}
          </ul>
        </div>
      ) : (
        <h1>No Todos Added Yet</h1>
      )}
    </div>
  )
}

export default TodoList