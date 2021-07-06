import moment from 'moment';
import { capitalize } from '../../utils/strings'

function TodoItem({ todo: { title, createDate }, handleChange }) {
  return (
    <div className="todo-item">
      <input type="checkbox" onClick={handleChange} aria-label={title} />
      <span data-testid="title">{capitalize(title)}</span>
      <span data-testid="date">({moment(createDate).format("DD-MM-YYYY")})</span>
    </div>
  )
}
export default TodoItem;