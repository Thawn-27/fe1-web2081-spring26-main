import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {

  stories = [
    {
      title: 'One Piece',
      author: 'Oda',
      views: 100000,
      image: 'https://tse2.mm.bing.net/th/id/OIP.0SVMb19VDY3PMhdsGvb53wHaLH?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      title: 'Naruto',
      author: 'Kishimoto',
      views: 90000,
      image: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg'
    },
    {
      title: 'Doraemon',
      author: 'Fujiko F Fujio',
      views: 70000,
      image: 'https://th.bing.com/th/id/OIP.lexzJu-H7_JtJtbss0qzuAHaGz?w=186&h=180&c=7&r=0&o=7&pid=1.7&rm=3'
    }
  ];

}