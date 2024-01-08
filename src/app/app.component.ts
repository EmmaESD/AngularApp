import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

let heroCount = 2;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'la tour du héros';
  titleStyle = { 'font-family': 'Arial', 'font-size': '2rem' };
  username = 'Anonymous';
  heroes = ['Batman', 'Superman', 'Wonderwoman', 'Ironman'];
  heroToAdd = '';
  addHero() {
    this.heroes.push(this.heroToAdd);
    this.title = 'La tour des ' + this.heroes.length + ' héros';
  }
}
