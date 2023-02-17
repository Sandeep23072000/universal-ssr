import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit  {

  constructor( private meta: Meta, private tittle: Title){}

  ngOnInit(): void {
    
    this.meta.updateTag({ property: "og:title", content: "details page is here" });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({ property: "og:image", content: "https://picsum.photos/200/300?random=2" });
    this.meta.updateTag({ property: "og:url", content: "http//:localhost:4200/details" });

    this.meta.updateTag({ name: "twitter:card", content: "summary for twitter card on details page" });
    this.meta.updateTag({ name: "twitter:site", content: "herre iis a twitter site for use the details page" });
    this.meta.updateTag({ name: "twitter:creator", content: "elone musk" });
    this.meta.updateTag({ name: "twitter:title", content: "summary for angular universal twitter card on details page" });
    this.meta.updateTag({ name: "twitter:description", content: "Hi there! 👋 Thank you for visiting my website's details page!" });
    this.meta.updateTag({ name: "twitter:image", content: "here are images for using the details page" });
    this.meta.updateTag({ name: "twitter:image:alt", content: "Webdeveloper details image" });
  }

}
