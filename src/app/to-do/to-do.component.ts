import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Todo} from '../todo';

let _id =1;
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  todo = new FormControl();
  todos: Array<Todo> = [];
  addNew(){
    const {value} = this.todo;
    const todo: Todo = {
      id: _id++,
      content: value,
      active: true
    }
    this.todos.push(todo);
    this.todo.setValue('');
    console.log(this.todos)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
