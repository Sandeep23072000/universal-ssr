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
    // this.canService.setCanonicalURL();
    // console.log(this.canService.setCanonicalURL);
    // this.title.setTitle('login here for universal access');

    this.meta.updateTag({ property: "og:title", content: "Login page for products" });
    this.meta.updateTag({ property: "og:type", content: "Here, We can see product list according to desired products." });
    this.meta.updateTag({ property: "og:image", content: "https://picsum.photos/200/300?random=2" });
    this.meta.updateTag({ property: "og:image:alt", content: "Og Image" });
    this.meta.updateTag({ property: "og:url", content: "https://universal-ssr.netlify.app/#/login" });
    this.meta.updateTag({ property: "og:description", content:"this is login page for products and services"});

    // this.meta.addTags([
    //   { property: 'og:title', content: 'My Angular Universal Application' },
    //   { property: "og:image", content: "https://picsum.photos/200/300?random=2" },
    //   { property: "og:image:alt", content: "Og Image" },
    //   { property: 'og:description', content: 'This is my Angular Universal application' },
    //   { property: "og:url", content: "https://universal-ssr.netlify.app/login" }

    // ])
    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({ name: "twitter:site", content: "@getproducts" });
    this.meta.updateTag({ name: "twitter:creator", content: "@productlist" });
    this.meta.updateTag({ name: "twitter:title", content: "Login for better experience" });
    this.meta.updateTag({ name: "twitter:description", content: "Contactus- getblog" });
  }

}
