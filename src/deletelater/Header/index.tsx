import * as React from 'react';
import { TodoTextInput } from '../TodoTextInput/index';
import {Action} from 'redux-actions';

export namespace Header {
  export interface Props {
    addTodo: (todo: TodoItemData) => Action<TodoItemData>;
  }

  export interface State {
    /* empty */
  }
}

export class Header extends React.Component<Header.Props, Header.State> {

  constructor(props?: Header.Props, context?: any) {
    super(props, context);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(text: string) {
    if (text.length) {
      this.props.addTodo({ text });
    }
  }

  render() {
    return (
      <header>
        <h1>Todos</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?" />
      </header>
    );
  }
}
