import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from '../components/navbar/navbar';

@Component({
  selector: 'app-layout',
  imports: [Navbar, RouterOutlet],
  templateUrl: './layout.html',
})
export class Layout {}
