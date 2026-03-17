import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common'; 

@Component({
  selector: 'app-add-story',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe], 
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStoryComponent {
  // Add your component logic here
}