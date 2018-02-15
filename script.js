function Phone(brand, price, color, internal_storage, release_date) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.internal_storage = internal_storage;
	this.release_date = release_date;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", internal storage is " + this.internal_storage + " and the price is " + this.price + ". Appeared on sale in: " + this.release_date + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver", "64GB", 2015);
var SamsungGalaxyS6 = new Phone("Samsung", 999.99, "black", "32GB", 2015);
var One = new Phone("OnePlus", 1199, "white", "16GB", 2015);
var HuaweiP10 = new Phone("Huawei", 1748, "gold", "64GB", 2017);

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
One.printInfo();
HuaweiP10.printInfo();
