import { Component, OnInit } from '@angular/core';
import { Authenticator, ServerConnection } from 'jema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'test';
  serverConnection: ServerConnection;


  ngOnInit(): void {
    const backend = 'http://192.168.29.60';
    const auth = new Authenticator(backend);
    auth.getAuthToken({ username: 'user', password: 'N0P@ssword' }).subscribe(
      (data: any) => {
        this.serverConnection = new ServerConnection(backend, data.auth_token);
        this.serverConnection.connect();
      }
    );
  }


}
