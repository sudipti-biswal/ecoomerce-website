

const initialState ={
	products:[
	{id:1,name:"Anarkali Suit With Banarasi Dupatta ",image:"a1.webp",price:11802,discount:2, discountPrice:11802 - 2 /100 * 11802,quantity:1,desc:"Peacock Green And Navy Blue Ombre Anarkali Suit With Banarasi Dupatta Online - Kalki Fashion"},
	{id:2,name:"Anarkali Suit With Heavy Embroidered ",image:"aa2.jpg",price:6570,discount:5, discountPrice:6570 - 2 /100 * 6570,quantity:1,desc:"peacock Blue Heavy Embroidered Net Anarkali features a net kameez with santoon inner, santoon bottom and net dupatta."},
	{id:3,name:"Anarkali Party Wear Dress",image:"a1.jpg",price:4849,discount:5, discountPrice:4848 - 2 /100 * 4849,quantity:1, desc:"Dual toned flared anarkali dress in rayon slub comes with V neck and full sleeves. The set includes floral organza dupatta. Note: Shaded fabrics reflect multiple shades or tones of colours, hence there might be a slight colour variation due to different lighting intensity"},
	{id:4,name:"Anarkali Party Wear Dress",image:"a2.jpg",price:2349,discount:3, discountPrice:2349 - 2 /100 * 2349,quantity:1,desc:"Radiant Maroon Color Faux Georgette With Embroidery Work Anarkali Sharara"},
	{id:5,name:" Two Piece Short Jumpsuit",image:"short1.jpg",price:900,discount:2, discountPrice:900 - 2 /100 * 900,quantity:1,desc:" Casual Pockets Buttons Two Piece Short Jumpsuit(two piece pink jacket blouse and shorts set, ruffles high waist)"},
	{id:6,name:"Jumpsuit Short",image:"short2.jpg",price:950,discount:4, discountPrice:950 - 2 /100 * 950,quantity:1,desc:" Nacome_Dress Elegant Dress Party Plus Size Sexy Casual Fashion Short Sleeve Off Shoulder Stripe Jumpsuit Short "},
	{id:7,name:"Jumpsuit Short",image:"short3.jpg",price:1000,discount:6, discountPrice:1000 - 2 /100 * 1000,quantity:1,desc:"Rompers for Women Strapless Off The Shoulder"},
	{id:8,name:" Short Jumpsuit Rompers With Belt ",image:"short4.jpg",price:1178,discount:4, discountPrice:1178 - 2 /100 * 1178,quantity:1,desc:"Womens Deep V-Neck Casual Striped Short Jumpsuit Rompers With Belt "},
	{id:9,name:"Women High Hell(black)",image:"hell.jpg",price:1000,discount:2 ,discountPrice:1000 - 2 /100 * 1000,quantity:1,desc:"High Heels for Women -Party Wear Heels, High Heel Sandal for Women"},
	{id:10,name:"Women Pumps(Biege)",image:"heell.jpg",price:1300,discount:4, discountPrice:1300 - 2 /100 * 1300,quantity:1,desc:" High Heels for Women -Party Wear Heels, High Heel Sandal for Women"},
	{id:11,name:"Women Square Heel ",image:"hell2.jpeg",price:1500,discount:4, discountPrice:1500 - 2 /100 * 1500,quantity:1,desc:" High Heels for Women -Party Wear Heels, High Heel Sandal for Women"},
	{id:12,name:" Women Flock Square Heel ",image:"hell1.webp",price:1800,discount:4, discountPrice:1800 - 2 /100 * 1800,quantity:1,desc:"Summer Women Flock Square Heel Sandals High Heels Buckle Strap Female Fashion Dress Woman Sandal "},
	{id:13,name:"Necklace Set",image:"j1.jpg",price:4500,discount:7, discountPrice:4500 - 2 /100 * 4500,quantity:1,desc:"Blush Necklace Set,Designed in Jaipur"},
	{id:14,name:"Necklace Set",image:"j2.jpg",price:8200.,discount:5, discountPrice:8200 - 2 /100 * 8200,quantity:1,desc:"Arista Necklace Set Designed in London"},
    {id:15,name:"Necklace Set",image:"j3.jpg",price:5500,discount:8, discountPrice:5500 - 2 /100 * 5500,quantity:1,desc:"Enchanted Necklace Set Designed in Vienna"},
	{id:16,name:"Necklace Set",image:"j4.jpg",price:8200.,discount:10, discountPrice:8200 - 2 /100 * 8200,quantity:1,desc:"Ramona Necklace Set Designed in Vienna"},


    
	],
	product:{}
}


const ProductsReducer = (state=initialState,action) => { 
	
    switch(action.type){
    	case "PRODUCT":
    	return{...state, product:state.products.find(product=>product.id === parseInt(action.id))}
    	default:
    	return state;
    }

}
export default ProductsReducer;