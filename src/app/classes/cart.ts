export class cart{
  constructor(public fk_product_id:number,
    public fk_user_email:string,
    public payment_option:string,
    public qty:number,
    public fk_category_id:number,
    public product_price:number
    ){}

}
