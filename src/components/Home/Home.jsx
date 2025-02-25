import React, { useState } from 'react'
import CreateTodoField from './create-todo-field/CreateTodoField'
import TodoItem from './item/TodoItem'

const data = [
	{
		_id: 'awdasdzxg2315',
		title: 'Finish the essay collab',
		isCompleted: false,
	},
	{
		_id: 'awdjdiukxk256',
		title: 'Read next chapter of the book',
		isCompleted: false,
	},
	{
		_id: 'ashawdjdiukxgjxas6',
		title: 'Send the finished assigment',
		isCompleted: false,
	},
]

const Home = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

	const removeTodo = id => {
		setTodos([...todos].filter(t => t._id !== id))
	}

	return (
		<div className='text-white w-2/3 max-w-xl mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-10'>Todo for junior</h1>
			<CreateTodoField setTodos={setTodos} />
			{todos.map(todo => {
				return (
					<TodoItem
						key={todo._id}
						todo={todo}
						changeTodo={changeTodo}
						removeTodo={removeTodo}
					/>
				)
			})}
		</div>
	)
}

export default Home
