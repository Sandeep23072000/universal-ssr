"use strict";(self.webpackChunkuniversalssr=self.webpackChunkuniversalssr||[]).push([[251],{251:(k,f,r)=>{r.r(f),r.d(f,{UniversalModule:()=>c});var g=r(895),d=r(237),t=r(256),n=r(481),T=r(529);class a{constructor(e){this.dom=e}setCanonicalURL(e){const o=e??this.dom.URL,s=this.dom.createElement("link");s.setAttribute("rel","canonical url for use the different url"),this.dom.head.appendChild(s),s.setAttribute("href",o)}}function v(i,e){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"img",9),t.qZA()),2&i){const o=e.$implicit;t.xp6(1),t.s9C("src",o,t.LSH)}}a.\u0275fac=function(e){return new(e||a)(t.LFG(g.K0))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"});class l{constructor(e,o,s,y,h){this.meta=e,this.title=o,this.route=s,this.http=y,this.canService=h,this.iddata=this.route.snapshot.params.id,this.http.get("https://dummyjson.com/products/"+this.iddata).subscribe(b=>{console.log(b),this.productlist=b,this.productlist?.images.forEach(x=>{this.images=this.productlist.images[0],console.log(this.productlist.images[0]),this.Ogdata()})})}ngOnInit(){}Ogdata(){this.title.setTitle("Product Details List for selected Product"),this.meta.updateTag({property:"og:title",content:"Product details Page"}),this.meta.updateTag({property:"og:type",content:"Here, We can see product datails according to desired products."}),this.meta.updateTag({property:"og:image",content:this.images}),this.meta.updateTag({property:"og:image:alt",content:"Og Image"}),this.meta.updateTag({property:"og:url",content:"https://universal-ssr.netlify.app/details"}),this.meta.updateTag({property:"og:description",content:"Since some online shoppers only scan text on websites, it might be helpful to use bullet points that cover the most important product details. Bullet points should generally be used for specs or short phrases  so they are quick and easy to read."}),this.meta.updateTag({name:"twitter:card",content:"summary"}),this.meta.updateTag({name:"twitter:site",content:"@getproducts"}),this.meta.updateTag({name:"twitter:creator",content:"@productsh"}),this.meta.addTag({name:"twitter:image",content:"https://picsum.photos/200/300"}),this.meta.addTag({name:"twitter:image:alt",content:"Images"}),this.meta.updateTag({name:"twitter:title",content:"Details of Products"}),this.meta.updateTag({name:"twitter:description",content:"Here, We will discribe the list of related products as Mobile phones, laptops and other type of electronic products and some more."}),this.meta.updateTag({name:"keywords",content:"product details,product details page design,product details are not stamped on lead,product details page design html,product details example,product details page,product details table,product details page design bootstrap,product details page design codepen,product details api,product details app,product details amazon,product details acer,product details an,product amount details hackerrank solution,product data analyst,product details by barcode,product details bootstrap,product details by hsn code,product details by serial number,product details bootstrap 5,product details by qr code online,product details by barcode online,product details by qr code,product details card,product details codepen,product details card codepen,product details component in angular,product details css,product details card design,product details c# cognizant,product description copywriting,product details design,product details dataset,product details database,product details design codepen,product information database,product description definition,product description design"})}}l.\u0275fac=function(e){return new(e||l)(t.Y36(n.h_),t.Y36(n.Dx),t.Y36(d.gz),t.Y36(T.eN),t.Y36(a))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-details"]],decls:29,vars:9,consts:[["routerLink","/login",1,"ms-3","mt-3","text-primary",2,"cursor","pointer"],["routerLink","/",1,"text-primary","text-center","mb-4","mt-4"],[1,"fs-5"],[1,"container"],[1,"card","rounded-5","p-3","mx-5","mt-3","w-75s"],[1,"row"],[1,"col-6"],[1,"text-primary","mt-3","mb-3","fw-bold","fs-6","text-decoration-none"],[4,"ngFor","ngForOf"],["alt","Product Image","ngxExpires","30d",3,"src"]],template:function(e,o){1&e&&(t.TgZ(0,"div")(1,"h5",0),t._uU(2,"login"),t.qZA(),t.TgZ(3,"h4",1),t._uU(4,"Details of Product"),t.qZA(),t._UZ(5,"div",2),t.qZA(),t.TgZ(6,"div")(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"a",7),t._uU(12),t.qZA(),t.TgZ(13,"h6"),t._uU(14),t.qZA(),t.TgZ(15,"h6"),t._uU(16),t.qZA(),t.TgZ(17,"h6"),t._uU(18),t.qZA(),t.TgZ(19,"h6"),t._uU(20),t.qZA(),t.TgZ(21,"h6"),t._uU(22),t.qZA(),t.TgZ(23,"h6"),t._uU(24),t.qZA(),t.TgZ(25,"h6"),t._uU(26),t.qZA()(),t.TgZ(27,"div",6),t.YNc(28,v,2,1,"div",8),t.qZA()()()()()),2&e&&(t.xp6(12),t.Oqu(null==o.productlist?null:o.productlist.title),t.xp6(2),t.hij(" Brand:- ",null==o.productlist?null:o.productlist.brand," "),t.xp6(2),t.hij(" Category:- ",null==o.productlist?null:o.productlist.category," "),t.xp6(2),t.hij(" Price:- ",null==o.productlist?null:o.productlist.price," "),t.xp6(2),t.hij(" Stock:- ",null==o.productlist?null:o.productlist.stock," "),t.xp6(2),t.hij(" DiscountPercentage:- ",null==o.productlist?null:o.productlist.discountPercentage," "),t.xp6(2),t.hij(" Rating:-",null==o.productlist?null:o.productlist.rating,""),t.xp6(2),t.hij(" Description:-",null==o.productlist?null:o.productlist.description," "),t.xp6(2),t.Q6J("ngForOf",null==o.productlist?null:o.productlist.images))},dependencies:[g.sg,d.rH]});const w=function(i){return["/details",i]};function Z(i,e){if(1&i&&(t.TgZ(0,"div")(1,"div",4)(2,"a",5),t._uU(3),t.qZA()()()),2&i){const o=e.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(2,w,o.id)),t.xp6(1),t.Oqu(o.title)}}class u{constructor(e,o,s,y){this.http=e,this.title=o,this.meta=s,this.canservice=y,this.http.get("https://dummyjson.com/products").subscribe(h=>{console.log(h),this.productlist=h.products,console.log(this.productlist)})}ngOnInit(){this.title.setTitle("Product List for Products"),this.meta.addTag({name:"description",content:"The product list is based on list of product which have many types of products like electronics items like mobile, laptop and more.",keywords:"product list,product quantity list,product list of quest pharmaceuticals,qnet products list,woocommerce product list query,product list of quest,dokan_product_listing_query,amazon product listing quality,list.product power query,product list react,product list react native,product_list_random,product recalls list,product recall list uk,product rate list,product retailers list,cannatrek product list reddit,product list sample,product list sample data,product list smart value,product list sample api,product list synonyms,product list shortcode woocommerce,product list screen,product list schema,product list template,product list template html,product list template excel,product list template bootstrap,product list table,product list template free download,product list template html css,product list template with pictures excel,product list ui,product list ux,unilever products list,product listing upwork,product unit list,product list of unimed unihealth"}),this.meta.addTag({property:"og:title",content:"List of products"}),this.meta.addTag({property:"og:type",content:"Here, We can see product list according to desired products."}),this.meta.addTag({property:"og:image",content:"https://picsum.photos/200/300?random=2"}),this.meta.addTag({property:"og:image:alt",content:"Og Image"}),this.meta.addTag({property:"og:url",content:"https://universal-ssr.netlify.app/"}),this.meta.addTag({property:"og:description",content:"Since some online shoppers only scan text on websites, it might be helpful to use bullet points that cover the most important product details. Bullet points should generally be used for specs (like dimensions) or short phrases (like features) so they are quick and easy to read."}),this.meta.addTag({name:"twitter:card",content:"summary"}),this.meta.addTag({name:"twitter:site",content:"@getproducts"}),this.meta.addTag({name:"twitter:image",content:"https://picsum.photos/200/300?random=2"}),this.meta.addTag({name:"twitter:image:alt",content:"Images"}),this.meta.addTag({name:"twitter:creator",content:"@productsh"}),this.meta.addTag({name:"twitter:title",content:"Products for Details"}),this.meta.addTag({name:"twitter:description",content:"Here, A list of products liks Mobiles, laptops and others."}),this.meta.addTag({name:"keywords",content:"product details,product details page design,product details are not stamped on lead,product details page design html,product details example, perfume,products list type serum iphone,samsung,productmacaroni flavou,product details page,product details table,product details page design bootstrap,product details page design codepen,product details api,product details app,product details amazon,product details acer,product details an,product amount details hackerrank solution,product data analyst,product details by barcode,product details bootstrap,product details by hsn code,product details by serial number,product details bootstrap 5,product details by qr code online,product details by barcode online,product details by qr code,product details card,product details codepen,product details card codepen,product details component in angular,product details css,product details card design,product details c# cognizant,product description copywriting,product details design,product details dataset,product details database,product details design codepen,product information database,product description definition,product description design"})}}u.\u0275fac=function(e){return new(e||u)(t.Y36(T.eN),t.Y36(n.Dx),t.Y36(n.h_),t.Y36(a))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-home"]],decls:8,vars:1,consts:[["routerLink","/login",1,"text-primary","mt-3","text-center","mb-3","fs-3"],[1,"mx-5","text-secondary","fs-5"],[1,"container"],[4,"ngFor","ngForOf"],[1,"mt-2"],[1,"text-primary","fw-bold","fs-6","text-decoration-none",3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"div")(1,"h1",0),t._uU(2,"List of Products: All Type of Products"),t.qZA(),t.TgZ(3,"h2",1),t._uU(4,"Here, We will discribe the list of related products as Mobile phones, laptops and other type of electronic products and some more."),t.qZA()(),t.TgZ(5,"div")(6,"div",2),t.YNc(7,Z,4,4,"div",3),t.qZA()()),2&e&&(t.xp6(7),t.Q6J("ngForOf",o.productlist))},dependencies:[g.sg,d.rH],styles:[".carousel-item[_ngcontent-%COMP%]{overflow:hidden;flex-wrap:wrap}"]});class m{constructor(e,o,s){this.meta=e,this.title=o,this.canService=s}ngOnInit(){this.meta.updateTag({property:"og:title",content:"Login page for products"}),this.meta.updateTag({property:"og:type",content:"Here, We can see product list according to desired products."}),this.meta.updateTag({property:"og:image",content:"https://picsum.photos/200/300?random=2"}),this.meta.updateTag({property:"og:image:alt",content:"Og Image"}),this.meta.updateTag({property:"og:url",content:"https://universal-ssr.netlify.app/login"}),this.meta.updateTag({property:"og:description",content:"this is login page for products and services"}),this.meta.updateTag({name:"twitter:card",content:"summary"}),this.meta.updateTag({name:"twitter:site",content:"@getproducts"}),this.meta.updateTag({name:"twitter:creator",content:"@productlist"}),this.meta.updateTag({name:"twitter:title",content:"Login for better experience"}),this.meta.updateTag({name:"twitter:description",content:"Contactus- getblog"})}}m.\u0275fac=function(e){return new(e||m)(t.Y36(n.h_),t.Y36(n.Dx),t.Y36(a))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-login"]],decls:3,vars:0,consts:[[1,"text-center"],["routerLink","",1,"mt-4","text-primary",2,"cursor","pointer"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2,"login Here!"),t.qZA()())},dependencies:[d.rH]});const q=[{path:"",component:u},{path:"login",component:m},{path:"details/:id",component:l}];class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[d.Bz.forChild(q),d.Bz]});class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[g.ez,p]})}}]);