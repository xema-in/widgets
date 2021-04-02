import { Component, OnInit } from '@angular/core';
import { Authenticator, ServerConnection } from 'jema';
import { GuiType } from 'jema/lib/_interfaces/gui-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'test';
  serverConnection: ServerConnection;
  connected = false;

  ngOnInit(): void {
    const backend = 'http://192.168.1.239';
    const auth = new Authenticator(backend);
    auth
      .getAuthToken({ username: '79692', password: 'Karvy@123' })
      .subscribe((data: any) => {
        this.connected = true;
        this.serverConnection = new ServerConnection(backend, data.auth_token, GuiType.Manager);
        this.serverConnection.connect();
      });
  }
}
