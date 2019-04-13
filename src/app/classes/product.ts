export class product{
  constructor(public product_id:string,
    public product_name:string,
    public fk_category_id:number,
    public 	product_price:number,
    public product_colour:string,
    public product_image:string,
    public product_weight:number,
    public product_warranty:number,
    public product_material:string,
    public product_Roomtype:string,
    public product_height:number,
    public product_width:number,
    public product_depth:number,
    public product_qty:number,
    public product_soh:number,
    public product_offer:string
    ){}
}
