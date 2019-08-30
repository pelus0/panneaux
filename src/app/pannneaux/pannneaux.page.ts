import { Component, OnInit } from '@angular/core';
import { PanneauxService } from '../services/panneaux.service';
import { Panneaux } from '../services/panneaux';
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pannneaux',
  templateUrl: './pannneaux.page.html',
  styleUrls: ['./pannneaux.page.scss'],
})
export class PannneauxPage implements OnInit {
  cat: any;
  panneaux: Panneaux[] = null;
  constructor(private route: ActivatedRoute, private router: Router, private panneauxService: PanneauxService) {
    this.getPanneaux();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.cat = this.router.getCurrentNavigation().extras.state.categori;
      }
    });
  }
  openDetailsWithState(data) {
    const navigationExtras: NavigationExtras = {
      state: {
        panneau: data
      }
    };
    this.router.navigate(['details'], navigationExtras);
  }
  ngOnInit() {
  }

  getPanneaux() {
    this.panneaux = this.panneauxService.getAll();
  }
}
