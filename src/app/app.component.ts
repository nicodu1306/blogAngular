import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogAngular';


  post = [
    {
      title: 'Mon premier Post',
      content: 'Le Lorem Ipsum est simplement du faux texte ee pour réaliser un lsdfsdfsdivre spécimen de police',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon Deuxième Post',
      content: 'Le Lorem Ipsum est simplement du faux texte ee pour réaliser un lsdfsdfsdivre spécimen de police',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon Troisème Post',
      content: 'Le Lorem Ipsum est simplement du faux texte ee pour réaliser un lsdfsdfsdivre spécimen de police',
      loveIts: 0,
      created_at: new Date()
    }
    ];
}
