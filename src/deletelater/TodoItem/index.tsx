// import * as React from 'react';
// import * as classNames from 'classnames';
// import { TodoTextInput } from '../TodoTextInput/index';
// import { applyMiddleware } from 'redux';
// import {Action} from 'redux-actions';

// export namespace TodoItem {
//   export interface Props {
//     todo: TodoItemData;
//     editTodo: (todo: TodoItemData) => Action<TodoItemData>;
//     deleteTodo: (id: number) => Action<number>;
//     completeTodo: (id: number) => Action<number>;
//   }

//   export interface State {
//     editing: boolean;
//   }
// }

// export class TodoItem extends React.Component<TodoItem.Props, TodoItem.State> {

//   constructor(props?: TodoItem.Props, context?: any) {
//     super(props, context);
//     this.state = {
//       editing: false
//     };
//     this.handleSave = this.handleSave.bind(this);
//     this.handleDoubleClick = this.handleDoubleClick.bind(this);
//   }

//   handleDoubleClick() {
//     this.setState({ editing: true });
//   }

//   handleSave(id: number, text: string): void {
//     if (text.length === 0) {
//       this.props.deleteTodo(id);
//     } else {
//       this.props.editTodo({ id, text });
//     }
//     this.setState({ editing: false });
//   }

//   render() {
//     const { todo, completeTodo, deleteTodo } = this.props;

//     let element;
//     if (this.state.editing) {
//       element = (
//         <TodoTextInput text={todo.text}
//           editing={this.state.editing}
//           onSave={(text) => this.handleSave(todo.id, text)} />
//       );
//     } else {
//       element = (
//         <div className="view">
//           <input className="toggle"
//             type="checkbox"
//             checked={todo.completed}
//             onChange={() => completeTodo(todo.id)} />

//           <label onDoubleClick={this.handleDoubleClick}>
//             {todo.text}
//           </label>

//           <button className="destroy" onClick={() => deleteTodo(todo.id)} />
//         </div>
//       );
//     }

//     // TODO: compose
//     const classes = classNames({
//       "completed": todo.completed,
//       "editing": this.state.editing,
//       "normal": !this.state.editing
//     });

//     return (
//       <li className={classes}>
//         {element}
//       </li>
//     );
//   }
// }
