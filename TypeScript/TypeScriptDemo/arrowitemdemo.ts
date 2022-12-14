class Items{
    itemid:number;
    itemname:string;
    itemprice:number;
    category:string;
    constructor(itemid:number,itemname:string,itemprice:number,category:string)
    {
        this.itemid=itemid;
        this.itemname=itemname;
        this.itemprice=itemprice;
        this.category=category;
    }
}
let itemvalue=new Items(1,"oil",180,"sunflower");
console.log(itemvalue);