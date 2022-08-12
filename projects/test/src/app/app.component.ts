import { Component, OnInit } from '@angular/core';
import { Authenticator, ServerConnection } from 'jema';
import { GuiType } from 'jema/lib/_interfaces/gui-type';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test';
  serverConnection!: ServerConnection;
  connected = false;

  ngOnInit(): void {
    const backend = environment.server;
    const auth = new Authenticator(backend);
    auth
      .getAuthToken({ username: environment.user, password: environment.password })
      .subscribe((data: any) => {
        this.connected = true;
        this.serverConnection = new ServerConnection(backend, data.auth_token, GuiType.Manager);
        this.serverConnection.connect();
      });
  }
}
