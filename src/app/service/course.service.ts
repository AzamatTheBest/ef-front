import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Course } from '../model/found';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:8000/api/EFEducation/courses', {
      params: new HttpParams({
      })
    }).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  getById(id: number): Observable<Course[]>{
    return this.http.get<Course[]>('http://localhost:8000/api/EFEducation/course/'+id, {
      params: new HttpParams({
      })
    }).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }
  
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
