import cn from 'classnames'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import Cheak from './Cheak'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
	return (
		<div className='flex items-center mb-4 rounded-2xl bg-zinc-800 p-4 w-full justify-between'>
			<button
				className='flex items-center'
				onClick={() => changeTodo(todo._id)}
			>
				<Cheak isCompleted={todo.isCompleted} />
				<span
					className={cn({
						'line-through': todo.isCompleted,
					})}
				>
					{' '}
					{todo.title}
				</span>
			</button>
			<button onClick={() => removeTodo(todo._id)}>
				<BsTrash
					size={20}
					className='text-gray-500 hover:text-red-800 transition-colors ease-in-out duration-500'
				/>
			</button>
		</div>
	)
}

export default TodoItem
