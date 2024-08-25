import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Profile} from "../../data/interfaces/profile.interface";
import {ImgUrlPipe} from "../../helpers/pipes/img-url.pipe";

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ImgUrlPipe
  ],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}
