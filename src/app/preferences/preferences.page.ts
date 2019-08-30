import {Component, OnInit} from '@angular/core';
import {PreferencesService} from '../services/preferences.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

  constructor(private preferenceservice: PreferencesService) { }

  ngOnInit() {
  }
}
