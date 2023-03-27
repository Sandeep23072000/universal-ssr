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
      { property: 'og:title', content: 'My Angular Universal Application' },
      { property: "og:image", content: "https://picsum.photos/200/300?random=2" },
      { property: "og:image:alt", content: "Og Image" },
      { property: 'og:description', content: 'This is my Angular Universal application' },
      { property: "og:url", content: "https://universal-ssr.netlify.app/login" }

    ])
    this.meta.addTag({ name: "twitter:card", content: "summary" });
    this.meta.addTag({ name: "twitter:site", content: "@getproducts" });
    this.meta.addTag({ name: "twitter:creator", content: "@productlist" });
    this.meta.addTag({ name: "twitter:title", content: "Login for better experience" });
    this.meta.addTag({ name: "twitter:description", content: "Contactus- getblog" });
  }

}
