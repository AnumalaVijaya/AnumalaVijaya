var Items = /** @class */ (function () {
    function Items(itemid, itemname, itemprice, category) {
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }
    return Items;
}());
var itemvalue = new Items(1, "oil", 180, "sunflower");
console.log(itemvalue);
