import { FaRegTrashAlt } from 'react-icons/fa';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? 'liComplete' : 'li'}>
      <div className='row'>
        <input
          onChange={() => toggleComplete(todo)}
          type='checkbox'
          checked={todo.completed ? 'checked' : ''}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? 'textComplete' : 'text'}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
};

export default Todo;
