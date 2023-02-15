import { Component, OnInit } from '@angular/core';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    private canService: CanonicalService,
  ) { }

  ngOnInit(): void {
    this.canService.setCanonicalURL();
    console.log(this.canService.setCanonicalURL);
    // this.title.setTitle('login here for universal access');

    this.meta.addTags([
      { name: 'og:title', content: 'My Angular Universal Application' },
      { name: 'og:description', content: 'This is my Angular Universal application' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'My Angular Universal Application' },
      { name: 'twitter:description', content: 'This is my Angular Universal application' },

    ])
  }

}
