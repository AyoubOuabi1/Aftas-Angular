import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModule} from "../../entities/member/userModule";

@Injectable({
  providedIn: 'root'
})
export class PodiumService {

  private _url = "http://localhost:8080/api/v1/ranking/competitions/winners";

  constructor(private httpClient: HttpClient) { }

  public getWinners(competitionId: number): Observable<Array<UserModule>> {
    return this.httpClient.get<Array<UserModule>>(this._url+`/${competitionId}`);
  }
}
