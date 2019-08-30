import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
renderer: Renderer2;
document: Document;
  constructor(rendererFactory: RendererFactory2,) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  addBodyClass(bodyClass) {
    this.renderer.addClass(this.document.body, bodyClass);
  }
  removeBodyClass(bodyClass) {
    this.renderer.removeClass(this.document.body, bodyClass);
  }
}
