const Cart = require("./Cart");
const Category = require("./Category");
const Image = require("./Image");
const Notification = require("./Notification");
const ProductDetail = require("./ProductDetail");
const Purchase = require("./Purchase");
const Rol = require("./Rol");
const StatusBuy = require("./StatusBuy");
const User = require("./User");

User.belongsTo(Rol);
Rol.hasMany(User);

// ProductDetail

ProductDetail.belongsTo(Category);
Category.hasMany(ProductDetail);

Image.belongsTo(ProductDetail);
ProductDetail.hasMany(Image);

// Cart

Cart.belongsTo(User);
User.hasMany(Cart);

Cart.belongsTo(ProductDetail);
ProductDetail.hasMany(Cart);

// Purchase

Purchase.belongsTo(StatusBuy);
StatusBuy.hasMany(Purchase);

Purchase.belongsTo(User);
User.hasMany(Purchase);


Purchase.belongsTo(ProductDetail);
ProductDetail.hasMany(Purchase);

Purchase.belongsTo(Notification);
Notification.hasMany(Purchase);
