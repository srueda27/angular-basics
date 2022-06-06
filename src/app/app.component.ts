import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  name = 'Luis';
  imgUrl = 'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0';

  getName() {
    return this.name.toUpperCase();
  }

  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value;
  }
}
