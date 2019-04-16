export class orderdetails{
  constructor(public fk_order_id:number,
    public fk_product_id:number,
    public fk_category_id:number,
    public fk_product_price:number,
    public product_qty:number
    ){}

}
