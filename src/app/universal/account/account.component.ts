import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit  {

  constructor( private meta: Meta, private title: Title){}

  ngOnInit(): void {
    this.title.setTitle('Account page for title');

    this.meta.updateTag({ property: "og:title", content: "Account Page" });
    this.meta.updateTag({ property: "og:type", content: "Here, We can see product datails according to desired products." });
    this.meta.updateTag({ property: "og:image", content: "" });
    this.meta.updateTag({ property: "og:image:alt", content: "Og Image" });
    this.meta.updateTag({ property: "og:url", content: "https://universal-ssr.netlify.app/account" });
    this.meta.updateTag({ property: "og:description", content: "Account page here for information of account" });


    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({ name: "twitter:site", content: "@getproducts" });
    this.meta.updateTag({ name: "twitter:creator", content: "@productsh" });
    this.meta.addTag({ name: "twitter:image", content: "https://picsum.photos/200/300" });
    this.meta.addTag({ name: "twitter:image:alt", content: "Images" });
    this.meta.updateTag({ name: "twitter:title", content: "Details of Products" });
    this.meta.updateTag({ name: "twitter:description", content: "Here, We will discribe the list of related products as Mobile phones, laptops and other type of electronic products and some more." });
  }

}
