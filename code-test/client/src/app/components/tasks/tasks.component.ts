import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/tasks.service';
import { Movies } from '../../data_interface';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Movies[];
  title: string;

  constructor(private tservice: TaskService) {
    this.tservice.getMovies()
      .subscribe(tasks => {
        this.tasks = tasks;
      });

  }

  addMovies(event){
    event.preventDefault();
    var newTask = {
      title: this.title,
      isWatched: false
    }

    this.tservice.addmoviestoList(newTask)
      .subscribe(task => {
        this.tasks.push(task);
        this.title = '';
      });
  }

  deleteMovie(id){
    var tasks = this.tasks;

    this.tservice.deletemoviesfromList(id).subscribe(data => {
      if(data.n == 1){
        for(var i = 0;i < tasks.length;i++){
          if(tasks[i]._id == id){
            tasks.splice(i, 1);
          }
        }
      }
    });
  }

  updatedoneStatus(task,element){

    var _mov = {
      _id:task._id,
      title: task.title,
      status: element.srcElement.defaultValue
    };

    this.tservice.updatedoneStatus(_mov).subscribe(data => {
    });
  }

  ngOnInit() {

  }

}
