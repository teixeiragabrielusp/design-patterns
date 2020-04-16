const MobilePhone = require("./MobilePhone");
const Laptop = require("./Laptop");
const Catalog = require("./Catalog");

//Phones
const iPhoneXS = new MobilePhone("Apple iPhone XR", "White", 89000);
const OnePlus6t = new MobilePhone("OnePlus 6T", "Midnight Black", 46000);
const GalaxyM20 = new MobilePhone("Samsung Galaxy M20", "Ocean Blue", 12000);
//Phone Catalog
const Phones = new Catalog("** Mobile Phones **");
Phones.add(iPhoneXS).add(OnePlus6t).add(GalaxyM20);

//Laptops
const MacbookPro = new Laptop("Apple", "MacbookPro 13", 89000);
const DellInspiron = new Laptop("Dell","Inspiron 5370", 46000);
//Laptops Catalog
const Laptops = new Catalog("** Laptops **");
Laptops.add(MacbookPro).add(DellInspiron);

//Shopping Catalog
const Shopping = new Catalog("**SHOPPING**");
Shopping.add(Phones).add(Laptops);

Shopping.getDetails();