import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productlist: any;
  iddata: any;
  images: any;

  constructor(private meta: Meta, private title: Title, private route: ActivatedRoute, private http: HttpClient, private canService: CanonicalService) {
    this.iddata = this.route.snapshot.params['id'];
    this.http.get('https://dummyjson.com/products/' + this.iddata).subscribe((response: any) => {
      console.log(response)
      this.productlist = response;
      this.productlist?.images.forEach((item: any) => {
        this.images = this.productlist.images[0];
        console.log(this.productlist.images[0]);
        
      });
    
    this.title.setTitle('Product Details List for selected Product');

    this.meta.updateTag({ property: "og:title", content: this.productlist.title });
    this.meta.updateTag({ property: "og:type", content: this.productlist.categroy });
    this.meta.updateTag({ property: "og:image", content: this.images });
    this.meta.updateTag({ property: "og:image:alt", content: "Product Image" });
    this.meta.updateTag({ property: "og:url", content: "https://universal-ssr.netlify.app/productdetails/"+ this.iddata });
    this.meta.updateTag({ property: "og:description", content: this.productlist.description });


    this.meta.updateTag({ name: "twitter:card", content: "summary" });
    this.meta.updateTag({ name: "twitter:site", content: "@getproducts" });
    this.meta.updateTag({ name: "twitter:creator", content: "@productsh" });
    this.meta.addTag({ name: "twitter:image", content: "https://picsum.photos/200/300" });
    this.meta.addTag({ name: "twitter:image:alt", content: "Images" });
    this.meta.updateTag({ name: "twitter:title", content: "Details of Products" });
    this.meta.updateTag({ name: "twitter:description", content: "Here, We will discribe the list of related products as Mobile phones, laptops and other type of electronic products and some more." });

    this.meta.updateTag({
      name: 'keywords', content: 'product details,product details page design,product details are not stamped on lead,product details page design html,product details example,product details page,product details table,product details page design bootstrap,product details page design codepen,product details api,product details app,product details amazon,product details acer,product details an,product amount details hackerrank solution,product data analyst,product details by barcode,product details bootstrap,product details by hsn code,product details by serial number,product details bootstrap 5,product details by qr code online,product details by barcode online,product details by qr code,product details card,product details codepen,product details card codepen,product details component in angular,product details css,product details card design,product details c# cognizant,product description copywriting,product details design,product details dataset,product details database,product details design codepen,product information database,product description definition,product description design'
    });
  })
    // this.apidata();
    // this.Ogdata();
  }

  ngOnInit(): void {
  }

}
