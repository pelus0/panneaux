import {Inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  renderer: Renderer2;
  isDark = false;

  constructor(rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  enableDarkTheme() {
    this.renderer.addClass(this.document.body, 'darktheme');
    this.isDark = true;
  }
  disableDarkTheme() {
    this.renderer.removeClass(this.document.body, 'darktheme');
    this.isDark = false;
  }
}
