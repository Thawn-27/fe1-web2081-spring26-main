import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html'
})
export class App {

  fullName: string = 'thanhpx27';
  age: number = 10;

  sayHello() {
    alert('Hello Angular!');
  }

}