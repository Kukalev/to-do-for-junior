import React, { useState } from 'react'

const CreateTodoField = ({ setTodos }) => {
	const [title, setTitle] = useState('')

	const addTodo = title => {
		setTodos(prev => [
			{
				_id: Date.now().toString(),
				title,
				isCompleted: false,
			},
			...prev,
		])
		setTitle('')
	}

	return (
		<div className='flex items-center  mb-4 rounded-2xl bg-zinc-800 p-3 w-full'>
			<input
				onKeyDown={e => e.key === 'Enter' && addTodo(title)}
				className='bg-zinc-800 text-white w-full
				outline-none  placeholder:text-gray-600'
				placeholder='Create a todo'
				type='text'
				onChange={e => setTitle(e.target.value)}
				value={title}
			/>
		</div>
	)
}

export default CreateTodoField
