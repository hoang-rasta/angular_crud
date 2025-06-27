import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PostService } from '../post-service';

@Component({
  selector: 'app-create',
  imports: [RouterModule, FormsModule],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class Create {
  title = '';
  body = '';
  error = '';

  constructor(private postService: PostService, private router: Router){}

  submit(){
    if(!this.title || !this.body){
      this.error = "Title and Body fields are required.";
      return;
    }

    const input = {
      title: this.title,
      body: this.body,
      id: 1
    };

    this.postService.createPost(input).subscribe();

    alert("Post created");
    
    this.router.navigate(['posts']);
  }

}