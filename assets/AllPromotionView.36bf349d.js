import{_ as l,T as m,P as p,B as d,i as _,o as a,c as s,a as e,t as u,F as f,r as g,j as h}from"./index.467c58d8.js";const B={data(){return{title:"\u0E42\u0E1B\u0E23\u0E42\u0E21\u0E0A\u0E31\u0E19",promotions:null,activeId:0,loopCount:3,promotionBannerItem:[{image:"https://cpfmshop.com//uploads/283/product/949381e47baff4b832cb40683878b6ce_full.jpg",name:"\u0E02\u0E49\u0E32\u0E27\u0E21\u0E31\u0E19\u0E44\u0E01\u0E48"},{image:"https://img.wongnai.com/p/1920x0/2017/06/26/16b349df2d5b471bbca679e6117f1544.jpg",name:"\u0E02\u0E49\u0E32\u0E27\u0E02\u0E32\u0E2B\u0E21\u0E39"},{image:"https://food.mthai.com/app/uploads/2017/05/Noodles-with-coconut-milk.jpg",name:"\u0E02\u0E19\u0E21\u0E08\u0E35\u0E19"}]}},components:{TopAppBar:m,PromotionBanner:p,BannerCard:d},methods:{goBack(){this.$router.go(-1)}}},b={class:"flex flex-col"},v={class:"flex flex-row"},x=e("span",{class:"material-symbols-outlined"}," arrow_back ",-1),k=[x],y={class:"text-style ml-5 text-xl"};function w(P,r,j,C,t,c){const i=_("PromotionBanner");return a(),s("div",b,[e("div",v,[e("button",{class:"w-8 h-8 secondary-container rounded-full p-1 justify-center",onClick:r[0]||(r[0]=(...o)=>c.goBack&&c.goBack(...o))},k),e("h3",y,u(t.title),1)]),(a(!0),s(f,null,g(t.promotionBannerItem,(o,n)=>(a(),s("div",{key:n},[h(i,{class:"mt-3",id:n,image:o.image,name:o.name,active:n==t.activeId},null,8,["id","image","name","active"])]))),128))])}const V=l(B,[["render",w]]);export{V as default};
