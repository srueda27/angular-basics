import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  name = 'luis ramirez';
  imgUrl = 'https://picsum.photos/id/237/600/500';
  images = [
    'https://picsum.photos/id/237/600/500',
    'https://picsum.photos/id/233/600/500',
    'https://picsum.photos/id/230/600/500'
  ]
  currentDate = new Date();
  cost = 2000;
  temperature = 25.3;
  pizza = {
    toppings: ['pepp', 'chorizo'],
    size: 'large'
  }
  blueClass = false;
  fontSize = 16;

  getName() {
    return this.name.toUpperCase();
  }

  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event)
  }
}
