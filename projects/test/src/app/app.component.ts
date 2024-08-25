import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ServerConnection } from 'jema';
import { JSONEditorOptions } from 'jsoneditor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'test';
  serverConnection!: ServerConnection;
  connected = false;

  public initialData: any;

  public editorOptions: JSONEditorOptions;

  constructor() {
    this.editorOptions = { mode: 'code', mainMenuBar: false }
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];

    this.initialData = { "products": [{ "name": "car", "product": [{ "name": "honda", "model": [{ "id": "civic", "name": "civic" }, { "id": "accord", "name": "accord" }, { "id": "crv", "name": "crv" }, { "id": "pilot", "name": "pilot" }, { "id": "odyssey", "name": "odyssey" }] }] }] }

  }

  ngOnInit(): void {
    // const backend = environment.server;
    // const auth = new Authenticator(backend);
    // auth
    //   .getAuthToken({ username: environment.user, password: environment.password })
    //   .subscribe((data: any) => {
    //     this.connected = true;
    //     this.serverConnection = new ServerConnection(backend, data.auth_token, GuiType.Manager);
    //     this.serverConnection.connect();
    //   });

  }
}
