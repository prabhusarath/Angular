import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
  constructor(private http:Http){
  }

  getMovies(){
    return this.http.get('http://localhost:4500/rest/movies')
      .map(res =>
        res.json());
  }

  addmoviestoList(newTask){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4500/rest/movies', JSON.stringify(newTask), {headers: headers})
      .map(res => res.json());
  }

  deletemoviesfromList(id){
    return this.http.delete('http://localhost:4500/rest/movies/'+id)
      .map(res => res.json());
  }

  updatedoneStatus(task){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    console.log(task)

    return this.http.put('http://localhost:4500/rest/movies/'+task._id, JSON.stringify(task), {headers: headers})
      .map(res => res.json());
  }
}
