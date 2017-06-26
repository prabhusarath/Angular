import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Testing Phase ', content: 'Just Testing Files' }];

  onAddServer( servData: { newServerName: string, newServerContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: servData.newServerName,
      content: servData.newServerContent
    });
  }

  onAddBlueprint(servedData: { newServerName: string, newServerContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: servedData.newServerName,
      content: servedData.newServerContent
    });
  }
}
