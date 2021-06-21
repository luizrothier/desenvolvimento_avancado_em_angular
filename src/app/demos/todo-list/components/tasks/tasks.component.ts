import { Store } from './../../todo.store';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Task } from "../../tasks";
import { TasksService } from "../../todo.service";
import { map } from 'rxjs/operators';

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit, OnDestroy {

    todolist$: Observable<any[]>;
    subscription: Subscription;

    constructor(private taskService: TasksService, private store: Store) {}    

    ngOnInit() {
        this.todolist$ = this.store.getTodoList()
            .pipe(
                map(todolist => todolist.filter(task => !task.iniciado && !task.finalizado)));

        this.subscription = this.taskService.getToDoList$.subscribe();
    }

    onToggle(event) {
        this.taskService.toggle(event);
    }
    
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}