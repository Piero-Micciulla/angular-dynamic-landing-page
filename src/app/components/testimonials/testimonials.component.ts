import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams}  from '@angular/common/http';
import {Person} from './person';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  readonly ROOT_URL = 'https://api.github.com/users';

  

  persons: Observable<Person[]>;

  constructor(private http: HttpClient){}

  getPersons(){   
      this.persons = this.http.get<Person[]>(this.ROOT_URL);   
  }

  ngOnInit(): void {
    this.getPersons()
  }

}
