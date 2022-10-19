import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Foundation } from '../model/found';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class FoundService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  getAll(): Observable<Foundation[]> {
    return this.http.get<Foundation[]>('http://localhost:8000/api/EFEducation/foundations', {
      params: new HttpParams({
      })
    }).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  
  getById(id: number): Observable<Foundation[]>{
    return this.http.get<Foundation[]>('http://localhost:8000/api/EFEducation/foundation/'+id, {
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
