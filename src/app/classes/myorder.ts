export class myorder{
  constructor(
    public order_id:number,
    public order_date:string,
    public order_amount:number,
    public fk_user_email:string,
    public delievery_assign:string,
    public order_status:number
    ){}

}
