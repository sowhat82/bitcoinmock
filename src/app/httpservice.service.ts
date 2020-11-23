      
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class httpservice {
    constructor(private http: HttpClient) { }
        
    getPrice(city?: string, key?: string): Promise<any> {
        const params = new HttpParams()
        // .set('q', city)
        // .set('appid', key);
        return(
            this.http.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCSGD', 
            { headers: new HttpHeaders().set("x-ba-key", "NTZhMWQ0OWY1NzJhNDE1Y2EwYzIzODM0OTA3Yzk0Y2Q") }).toPromise()
        )
    }
}