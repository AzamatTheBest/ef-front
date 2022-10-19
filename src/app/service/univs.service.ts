import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import {catchError, delay, Observable, retry, tap, throwError} from 'rxjs'
import {ErrorService} from "./error.service";
import { University } from '../model/univ';

@Injectable({
  providedIn: 'root'
})
export class UnivsService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService) {

  }


  getAll(): Observable<University[]> {
    return this.http.get<University[]>('http://localhost:8000/api/EFEducation/universities', {
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

  getById(id: number): Observable<University[]>{
    return this.http.get<University[]>('http://localhost:8000/api/EFEducation/university/'+id, {
      params: new HttpParams({
      })
    }).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }
}