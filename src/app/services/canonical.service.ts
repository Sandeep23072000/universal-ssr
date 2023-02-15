import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CanonicalService {

  constructor(@Inject(DOCUMENT) private dom: any) { }
  setCanonicalURL(url?: string) {
    const canURL = url == undefined ? this.dom.URL : url;

    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical url for use the different url');
    this.dom.head.appendChild(link);
    link.setAttribute('href', canURL);
  }
}
