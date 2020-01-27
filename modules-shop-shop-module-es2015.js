(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-shop-shop-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/components/product-tabs/product-tabs.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/components/product-tabs/product-tabs.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-tabs\" [ngClass]=\"{'product-tabs--layout--sidebar': withSidebar}\">\n    <div class=\"product-tabs__list\">\n        <!-- <a href=\"#tab-description\" class=\"product-tabs__item\"\n           [ngClass]=\"{'product-tabs__item--active': tab === 'description'}\"\n           (click)=\"$event.preventDefault(); tab = 'description'\">Description</a> -->\n\n        <!-- <a href=\"#tab-specification\" class=\"product-tabs__item\"\n           [ngClass]=\"{'product-tabs__item--active': tab === 'specification'}\"\n           (click)=\"$event.preventDefault(); tab = 'specification'\">Specification</a> -->\n    </div>\n    <!-- <div class=\"product-tabs__content\">\n\n        <div class=\"product-tabs__pane\" id=\"tab-description\" [ngClass]=\"{'product-tabs__pane--active': tab === 'description'}\">\n            <div class=\"typography\">\n                <h3>Product Full Description</h3>\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus,\n                    ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed\n                    fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque\n                    ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie\n                    urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et\n                    finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget\n                    lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris\n                    vitae tellus.\n                </p>\n                <h3>Etiam lacus lacus mollis in mattis</h3>\n                <p>\n                    Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan. Vestibulum vel\n                    eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a, rhoncus laoreet orci. Proin sapien\n                    neque, commodo at porta in, vehicula eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et\n                    ultrices posuere cubilia Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.\n                </p>\n                <p>\n                    Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium ipsum risus ac\n                    neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla ut, laoreet commodo quam.\n                    Pellentesque et ornare sapien. In ac est tempus urna tincidunt finibus. Integer erat ipsum, tristique\n                    ac lobortis sit amet, dapibus sit amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis,\n                    sit amet fringilla odio scelerisque non.\n                </p>\n            </div>\n        </div>\n\n        <div class=\"product-tabs__pane\" id=\"tab-specification\" [ngClass]=\"{'product-tabs__pane--active': tab === 'specification'}\">\n            <div class=\"spec\">\n                <h3 class=\"spec__header\">Specification</h3>\n                <div *ngFor=\"let section of specification\" class=\"spec__section\">\n                    <h4 class=\"spec__section-title\">{{ section.name }}</h4>\n                    <div *ngFor=\"let feature of section.features\" class=\"spec__row\">\n                        <div class=\"spec__name\">{{ feature.name }}</div><div class=\"spec__value\">{{ feature.value }}</div>\n                    </div>\n                </div>\n                <div class=\"spec__disclaimer\">\n                    Information on technical characteristics, the delivery set, the country of manufacture and the appearance\n                    of the goods is for reference only and is based on the latest information available at the time of publication.\n                </div>\n            </div>\n        </div>\n\n    </div> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/components/products-view/products-view.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/components/products-view/products-view.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"products-view\">\n    <div class=\"products-view__options\">\n        <div class=\"view-options\" [ngClass]=\"{\n            'view-options--offcanvas--always': offcanvas === 'always',\n            'view-options--offcanvas--mobile': offcanvas === 'mobile'\n        }\">\n            <div class=\"view-options__filters-button\">\n                <button type=\"button\" class=\"filters-button\" (click)=\"sidebar.open()\">\n                    <app-icon class=\"filters-button__icon\" name=\"filters-16\" size=\"16\"></app-icon>\n                    <span class=\"filters-button__title\">Filters</span>\n                    <span class=\"filters-button__counter\">3</span>\n                </button>\n            </div>\n            <div class=\"view-options__layout\">\n                <div class=\"layout-switcher\">\n                    <div class=\"layout-switcher__list\">\n                        <button title=\"Grid\" type=\"button\" class=\"layout-switcher__button\"\n                                [ngClass]=\"{'layout-switcher__button--active': layout === 'grid'}\" (click)=\"setLayout('grid')\">\n\n                            <app-icon name=\"layout-grid-16x16\" size=\"16\"></app-icon>\n                        </button>\n                        <!-- <button title=\"Grid With Features\" type=\"button\" class=\"layout-switcher__button\"\n                                [ngClass]=\"{'layout-switcher__button--active': layout === 'grid-with-features'}\" (click)=\"setLayout('grid-with-features')\">\n\n                            <app-icon name=\"layout-grid-with-details-16x16\" size=\"16\"></app-icon>\n                        </button> -->\n                        <button title=\"List\" type=\"button\" class=\"layout-switcher__button\"\n                                [ngClass]=\"{'layout-switcher__button--active': layout === 'list'}\" (click)=\"setLayout('list')\">\n\n                            <app-icon name=\"layout-list-16x16\" size=\"16\"></app-icon>\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"view-options__legend\">Showing 6 of 98 products</div> -->\n            <div class=\"view-options__divider\"></div>\n            <div class=\"view-options__control\">\n                <label for=\"view-options-sort\">Sort By</label>\n                <div>\n                    <select class=\"form-control form-control-sm\" name=\"\" id=\"view-options-sort\">\n                        <option value=\"\">Default</option>\n                        <option value=\"\">Name (A-Z)</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"view-options__control\">\n                <label for=\"view-options-limit\">Show</label>\n                <div>\n                    <select class=\"form-control form-control-sm\" name=\"\" id=\"view-options-limit\">\n                        <option value=\"\">12</option>\n                        <option value=\"\">24</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"products-view__list products-list\" [attr.data-layout]=\"layout != 'list' ? grid : layout\" [attr.data-with-features]=\"layout == 'grid-with-features' ? 'true' : 'false'\">\n        <div class=\"products-list__body\">\n            <div *ngFor=\"let product of products\" class=\"products-list__item\">\n                <app-product-card [product]=\"product\"></app-product-card>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"products-view__pagination\">\n        <app-pagination [current]=\"1\" [siblings]=\"2\" [total]=\"10\" (pageChange)=\"onPageChange($event)\"></app-pagination>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block block-sidebar\" [ngClass]=\"{\n    'block-sidebar--offcanvas--always': offcanvas === 'always',\n    'block-sidebar--offcanvas--mobile': offcanvas === 'mobile',\n    'block-sidebar--open': isOpen\n}\">\n    <div class=\"block-sidebar__backdrop\" (click)=\"sidebar.close()\"></div>\n    <div class=\"block-sidebar__body\">\n        <div class=\"block-sidebar__header\">\n            <div class=\"block-sidebar__title\">Filters</div>\n            <button class=\"block-sidebar__close\" type=\"button\" (click)=\"sidebar.close()\">\n                <app-icon name=\"cross-20\" size=\"20\"></app-icon>\n            </button>\n        </div>\n        <div class=\"block-sidebar__item\">\n            <img [src]=\"getImageUrl(shop.ShopOwner.shop_owner_img )\" width=\"50%\">\n            <h6> ที่ตั้งร้าน: {{shop.ShopOwner.address}}</h6>\n            <h6> Tel:  {{shop.ShopOwner.tel}}</h6>\n            <h6> ประเภทร้าน:  {{shop.ProductCategory.pd_cat_name}}</h6>\n            <span><strong>รายละเอียดร้านค้า:</strong> <span style=\"margin-left: 10px;\">{{shop.shop_detail}}</span></span>\n            <h6> วันที่เข้าร่วม: {{getDatetime(shop.create_datetime)}}</h6>\n            <h6 style=\"display: inline-block;\"> เรตติ้ง: </h6>\n            <app-rating [value]=\"shop.rating\" style=\"display: inline-block;\"></app-rating>\n            <!-- <app-widget-category [category]=\"category\" [offcanvas]=\"offcanvas\"></app-widget-category> -->\n        </div>\n        <!-- <div class=\"block-sidebar__item d-none d-lg-block\" *ngIf=\"offcanvas === 'mobile'\">\n            <app-widget-products header=\"สินค้าล่าสุด\" [products]=\"products\"></app-widget-products>\n        </div> -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/components/shops-view/shops-view.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/components/shops-view/shops-view.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"products-view\">\n    <div class=\"products-view__options\">\n        <div class=\"view-options\" [ngClass]=\"{\n            'view-options--offcanvas--always': offcanvas === 'always',\n            'view-options--offcanvas--mobile': offcanvas === 'mobile'\n        }\">\n            <!-- <div class=\"view-options__filters-button\">\n                <button type=\"button\" class=\"filters-button\" (click)=\"sidebar.open()\">\n                    <app-icon class=\"filters-button__icon\" name=\"filters-16\" size=\"16\"></app-icon>\n                    <span class=\"filters-button__title\">Filters</span>\n                    <span class=\"filters-button__counter\">3</span>\n                </button>\n            </div> -->\n            <div class=\"view-options__layout\">\n                <div class=\"layout-switcher\">\n                    <div class=\"layout-switcher__list\">\n                        <button title=\"Grid\" type=\"button\" class=\"layout-switcher__button\"\n                                [ngClass]=\"{'layout-switcher__button--active': layout === 'grid'}\" (click)=\"setLayout('grid')\">\n\n                            <app-icon name=\"layout-grid-16x16\" size=\"16\"></app-icon>\n                        </button>\n                        <!-- <button title=\"Grid With Features\" type=\"button\" class=\"layout-switcher__button\"\n                                [ngClass]=\"{'layout-switcher__button--active': layout === 'grid-with-features'}\" (click)=\"setLayout('grid-with-features')\">\n\n                            <app-icon name=\"layout-grid-with-details-16x16\" size=\"16\"></app-icon>\n                        </button> -->\n                        <button title=\"List\" type=\"button\" class=\"layout-switcher__button\"\n                                [ngClass]=\"{'layout-switcher__button--active': layout === 'list'}\" (click)=\"setLayout('list')\">\n\n                            <app-icon name=\"layout-list-16x16\" size=\"16\"></app-icon>\n                        </button>\n                        <button title=\"Map\" type=\"button\" class=\"layout-switcher__button\"\n                                [ngClass]=\"{'layout-switcher__button--active': layout === 'map'}\" (click)=\"setLayout('map')\">\n                            <i class=\"fa fa-map\"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"view-options__legend\">Showing 6 of 98 shops</div> -->\n            <div class=\"view-options__divider\"></div>\n            <!-- <div class=\"view-options__control\">\n                <label for=\"view-options-sort\">Sort By</label>\n                <div>\n                    <select class=\"form-control form-control-sm\" name=\"\" id=\"view-options-sort\">\n                        <option value=\"\">Default</option>\n                        <option value=\"\">Name (A-Z)</option>\n                    </select>\n                </div>\n            </div> -->\n            <div class=\"view-options__control\">\n                <label for=\"view-options-limit\">Show</label>\n                <div>\n                    <select class=\"form-control form-control-sm\" name=\"\" id=\"view-options-limit\">\n                        <option value=\"\">12</option>\n                        <option value=\"\">24</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"products-view__list products-list\" *ngIf=\"layout != 'map'\" [attr.data-layout]=\"layout != 'list' ? grid : layout\" [attr.data-with-features]=\"layout == 'grid-with-features' ? 'true' : 'false'\">\n        <div class=\"products-list__body\">\n            <div *ngFor=\"let shop of shops\" class=\"products-list__item\">\n                <app-shop-card [shop]=\"shop\"></app-shop-card>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"layout == 'map'\">\n        <app-page-map></app-page-map>\n    </div>\n\n    <div class=\"products-view__pagination\" *ngIf=\"layout != 'map'\">\n        <app-pagination [current]=\"1\" [siblings]=\"2\" [total]=\"10\" (pageChange)=\"onPageChange($event)\"></app-pagination>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-cart/page-cart.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-cart/page-cart.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [header]=\"'ตะกร้าสินค้า'\" [breadcrumbs]=\"[\n    {label: 'Home',          url: '../../'},\n    {label: 'Shopping Cart', url: ''}\n]\"></app-page-header>\n\n<div class=\"block block-empty\" *ngIf=\"!groupedItems.length\">\n    <div class=\"container\">\n        <div class=\"block-empty__body\">\n            <div class=\"block-empty__message\">ยังไม่มีสินค้าในตะกร้า!</div>\n            <div class=\"block-empty__actions\">\n                <a routerLink=\"../../\" class=\"btn btn-primary btn-sm\">Continue</a>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"cart block\" *ngIf=\"groupedItems.length\">\n    <div class=\"container\">\n        <div *ngFor=\"let shopItem of groupedItems\" style=\"margin-bottom: 20px;\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <h5>{{ shopItem[0].cartItem.Product.Shop.shop_name }}</h5>\n                </div>\n                <div class=\"col-md-4\" style=\"text-align: right;\">\n                    ค่าจัดส่ง {{ shopItem[0].cartItem.Product.Shop.delivery_rate }} บาท\n                </div>\n            </div>\n            <table class=\"cart__table cart-table\">\n                <thead class=\"cart-table__head\">\n                    <tr class=\"cart-table__row\">\n                        <th class=\"cart-table__column cart-table__column--image\">\n                            <div class=\"form-check\">\n                                <span class=\"form-check-input input-check\">\n                                    <span class=\"input-check__body\">\n                                        <input class=\"input-check__input\" type=\"checkbox\">\n                                        <span class=\"input-check__box\"></span>\n                                        <app-icon class=\"input-check__icon\" name=\"check-9x7\" size=\"9x7\"></app-icon>\n                                    </span>\n                                </span>\n                            </div>\n                        </th>\n                        <th class=\"cart-table__column cart-table__column--image\">รูปภาพ</th>\n                        <th class=\"cart-table__column cart-table__column--product\">สินค้า</th>\n                        <th class=\"cart-table__column cart-table__column--price\">ราคา</th>\n                        <th class=\"cart-table__column cart-table__column--quantity\">จำนวน</th>\n                        <th class=\"cart-table__column cart-table__column--total\">รวม</th>\n                        <th class=\"cart-table__column cart-table__column--remove\"></th>\n                    </tr>\n                </thead>\n                <tbody class=\"cart-table__body\">\n                <tr *ngFor=\"let item of shopItem\" class=\"cart-table__row\">\n                    <td class=\"cart-table__column cart-table__column--image\">\n                        <div class=\"form-check\">\n                            <span class=\"form-check-input input-check\">\n                                <span class=\"input-check__body\">\n                                    <input class=\"input-check__input\" type=\"checkbox\">\n                                    <span class=\"input-check__box\"></span>\n                                    <app-icon class=\"input-check__icon\" name=\"check-9x7\" size=\"9x7\"></app-icon>\n                                </span>\n                            </span>\n                        </div>\n                    </td>\n                    <td class=\"cart-table__column cart-table__column--image\">\n                        <a [routerLink]=\"root.product(item.cartItem.product_id)\" *ngIf=\"item.cartItem.Product.product_img_url_1?.length\">\n                            <img [src]=\"getImageUrl(item.cartItem.Product.product_img_url_1)\" alt=\"\">\n                        </a>\n                    </td>\n                    <td class=\"cart-table__column cart-table__column--product\">\n                        <a [routerLink]=\"root.product(item.cartItem.product_id)\" class=\"cart-table__product-name\">{{ item.cartItem.Product.product_name }}</a>\n                        <!-- <ul *ngIf=\"item.cartItem.options.length\" class=\"cart-table__options\">\n                            <li *ngFor=\"let option of item.cartItem.options\">{{ option.name }}: {{ option.value }}</li>\n                        </ul> -->\n                    </td>\n                    <td class=\"cart-table__column cart-table__column--price\" data-title=\"Price\">{{ item.cartItem.Product.price|currencyFormat }}</td>\n                    <td class=\"cart-table__column cart-table__column--quantity\" data-title=\"Quantity\">\n                        <app-input-number [formControl]=\"item.quantityControl\" [min]=\"1\"></app-input-number>\n                    </td>\n                    <td class=\"cart-table__column cart-table__column--total\" data-title=\"Total\">{{ item.cartItem.Product.price * (item.quantityControl.value)|currencyFormat }}</td>\n                    <td class=\"cart-table__column cart-table__column--remove\">\n                        <button type=\"button\" class=\"btn btn-light btn-sm btn-svg-icon\" (click)=\"remove(item.cartItem)\" [ngClass]=\"{'btn-loading': removedItems.includes(item.cartItem)}\">\n                            <app-icon name=\"cross-12\" size=\"12\"></app-icon>\n                        </button>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n\n\n        <div class=\"row justify-content-end pt-5\">\n            <div class=\"col-12 col-md-7 col-lg-6 col-xl-5\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h3 class=\"card-title\">Cart Totals</h3>\n\n                        <table class=\"cart__totals\">\n                            <thead *ngIf=\"(cart.totals$|async).length\" class=\"cart__totals-header\">\n                            <tr>\n                                <th>Subtotal</th>\n                                <td>{{ cart.subtotal$|async|currencyFormat }}</td>\n                            </tr>\n                            </thead>\n                            <tbody *ngIf=\"(cart.totals$|async).length\" class=\"cart__totals-body\">\n                            <tr *ngFor=\"let total of cart.totals$|async\">\n                                <th>{{ total.title }}</th>\n                                <td>{{ total.price|currencyFormat }}</td>\n                            </tr>\n                            </tbody>\n                            <tfoot class=\"cart__totals-footer\">\n                            <tr>\n                                <th>รวม</th>\n                                <td>{{ cart.total$|async|currencyFormat }}</td>\n                            </tr>\n                            </tfoot>\n                        </table>\n                        <a class=\"btn btn-primary btn-xl btn-block cart__checkout-button\" routerLink=\"../checkout\">สั่งซื้อสินค้า</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-category/page-category.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-category/page-category.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-page-header [header]=\"'Screwdrivers'\" [breadcrumbs]=\"[\n    {label: 'Home',         url: '../../'},\n    {label: 'Screwdrivers', url: ''}\n]\"></app-page-header> -->\n\n<app-page-shop-header [shop]=\"shop\" [header]=\"shop.shop_name\" [breadcrumbs]=\"[\n    {label: 'Home',         url: '../../'},\n    {label: shop.shop_name, url: ''}\n]\"></app-page-shop-header>\n\n<ng-container *ngIf=\"columns === 3\">\n    <div class=\"container\">\n        <div class=\"shop-layout shop-layout--sidebar--{{ sidebarPosition }}\">\n            <div class=\"shop-layout__sidebar\" *ngIf=\"sidebarPosition === 'start'\">\n                <app-shop-sidebar [shop]=\"shop\" [category]=\"category\" offcanvas=\"mobile\"></app-shop-sidebar>\n            </div>\n            <div class=\"shop-layout__content\">\n                <div class=\"block\">\n                    <app-products-view [shop_id]=\"shop.shop_id\" [products]=\"products\" [layout]=\"viewMode\" grid=\"grid-3-sidebar\" [limit]=\"15\" offcanvas=\"mobile\"></app-products-view>\n                </div>\n            </div>\n            <div class=\"shop-layout__sidebar\" *ngIf=\"sidebarPosition === 'end'\">\n                <app-shop-sidebar [shop]=\"shop\" [category]=\"category\" offcanvas=\"mobile\"></app-shop-sidebar>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"columns > 3\">\n    <div class=\"container\">\n        <div class=\"block\">\n            <app-products-view [products]=\"products\" [layout]=\"viewMode\" [grid]=\"'grid-'+columns+'-full'\" [limit]=\"15\" offcanvas=\"always\"></app-products-view>\n        </div>\n        <app-shop-sidebar [shop]=\"shop\" [category]=\"category\" offcanvas=\"always\"></app-shop-sidebar>\n    </div>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-checkout/page-checkout.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-checkout/page-checkout.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [header]=\"'ยืนยันคำสั่งซื้อ'\" [breadcrumbs]=\"[\r\n    {label: 'Home',          url: '../../'},\r\n    {label: 'Shopping Cart', url: '../cart'},\r\n    {label: 'ยืนยันคำสั่งซื้อ',      url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"checkout block\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 mb-3\">\r\n                <app-alert type=\"primary\" size=\"lg\">ยังไม่ได้เข้าสู่ระบบ? <a href=\"\">คลิกที่นี่ เพื่อเข้าสู่ระบบ</a></app-alert>\r\n            </div>\r\n\r\n            <div class=\"col-12 col-lg-6 col-xl-7\">\r\n                <div class=\"card mb-lg-0\">\r\n                    <div class=\"card-body\">\r\n                        <h3 class=\"card-title\">ที่อยู่ ที่ต้องการจัดส่งสินค้า</h3>\r\n                        <div class=\"form-row\">\r\n                            <div class=\"form-group col-md-12\">\r\n                                <label for=\"checkout-first-name\">ชื่อ-นามสกุล</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"checkout-first-name\" placeholder=\"\">\r\n                            </div>\r\n                            <!-- <div class=\"form-group col-md-6\">\r\n                                <label for=\"checkout-last-name\">นามสกุล</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"checkout-last-name\" placeholder=\"Last Name\">\r\n                            </div> -->\r\n                            <div class=\"form-group col-md-12\">\r\n                                <label for=\"checkout-first-name\">ที่อยู่</label>\r\n                                <textarea class=\"form-control\" rows=\"5\"></textarea>\r\n                            </div>\r\n                            <div class=\"form-group col-md-12\">\r\n                                <label for=\"checkout-phone\">เบอร์โทรศัพท์</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"checkout-phone\" placeholder=\"\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- <div class=\"form-group\">\r\n                            <label for=\"checkout-company-name\">Company Name <span class=\"text-muted\">(Optional)</span></label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-company-name\" placeholder=\"Company Name\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"checkout-country\">Country</label>\r\n                            <select id=\"checkout-country\" class=\"form-control\">\r\n                                <option>Select a country...</option>\r\n                                <option>United States</option>\r\n                                <option>Russia</option>\r\n                                <option>Italy</option>\r\n                                <option>France</option>\r\n                                <option>Ukraine</option>\r\n                                <option>Germany</option>\r\n                                <option>Australia</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"checkout-street-address\">Street Address</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-street-address\" placeholder=\"Street Address\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"checkout-address\">Apartment, suite, unit etc. <span class=\"text-muted\">(Optional)</span></label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-address\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"checkout-city\">Town / City</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-city\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"checkout-state\">State / County</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-state\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"checkout-postcode\">Postcode / ZIP</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-postcode\">\r\n                        </div>\r\n\r\n                        <div class=\"form-row\">\r\n                            <div class=\"form-group col-md-6\">\r\n                                <label for=\"checkout-email\">Email address</label>\r\n                                <input type=\"email\" class=\"form-control\" id=\"checkout-email\" placeholder=\"Email address\">\r\n                            </div>\r\n                            <div class=\"form-group col-md-6\">\r\n                                <label for=\"checkout-phone\">Phone</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"checkout-phone\" placeholder=\"Phone\">\r\n                            </div>\r\n                        </div> -->\r\n\r\n                        <!-- <div class=\"form-group\">\r\n                            <div class=\"form-check\">\r\n                                    <span class=\"form-check-input input-check\">\r\n                                        <span class=\"input-check__body\">\r\n                                            <input class=\"input-check__input\" type=\"checkbox\" id=\"checkout-create-account\">\r\n                                            <span class=\"input-check__box\"></span>\r\n                                            <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\"><use xlink:href=\"assets/images/sprite.svg#check-9x7\"></use></svg>\r\n                                        </span>\r\n                                    </span>\r\n                                <label class=\"form-check-label\" for=\"checkout-create-account\">Create an account?</label>\r\n                            </div>\r\n                        </div> -->\r\n                        <label for=\"checkout-phone\">เลือกตำแหน่ง</label>\r\n                        <div class=\"contact-us__map\">\r\n                            <iframe src='https://maps.google.com/maps?q=Holbrook-Palmer%20Park&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed'\r\n                            frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-divider\"></div>\r\n                    <div class=\"card-body\">\r\n                        <h3 class=\"card-title\">รายละเอียดการจัดส่ง</h3>\r\n\r\n                        <!-- <div class=\"form-group\">\r\n                            <div class=\"form-check\">\r\n                                    <span class=\"form-check-input input-check\">\r\n                                        <span class=\"input-check__body\">\r\n                                            <input class=\"input-check__input\" type=\"checkbox\" id=\"checkout-different-address\">\r\n                                            <span class=\"input-check__box\"></span>\r\n                                            <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\"><use xlink:href=\"assets/images/sprite.svg#check-9x7\"></use></svg>\r\n                                        </span>\r\n                                    </span>\r\n                                <label class=\"form-check-label\" for=\"checkout-different-address\">Ship to a different address?</label>\r\n                            </div>\r\n                        </div> -->\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"checkout-comment\">หมายเหตุ <span class=\"text-muted\"></span></label>\r\n                            <textarea id=\"checkout-comment\" class=\"form-control\" rows=\"4\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-12 col-lg-6 col-xl-5 mt-4 mt-lg-0\">\r\n                <div class=\"card mb-0\">\r\n                    <div class=\"card-body\">\r\n                        <h3 class=\"card-title\">สรุปคำสั่งซื้อของคุณ</h3>\r\n\r\n                        <table class=\"checkout__totals\">\r\n                            <thead class=\"checkout__totals-header\">\r\n                            <tr>\r\n                                <th>สินค้า</th>\r\n                                <th>ทั้งหมด</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody class=\"checkout__totals-products\">\r\n                            <tr *ngFor=\"let item of cart.items$|async\">\r\n                                <td>{{ item.product.product_name }} × {{ item.quantity }}</td>\r\n                                <td>{{ item.product.price * item.quantity|currencyFormat }}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                            <tbody *ngIf=\"(cart.totals$|async).length\" class=\"checkout__totals-subtotals\">\r\n                            <tr>\r\n                                <th>รวม</th>\r\n                                <td>{{ cart.subtotal$|async|currencyFormat }}</td>\r\n                            </tr>\r\n                            <tr *ngFor=\"let total of cart.totals$|async\">\r\n                                <th>{{ total.title }}</th>\r\n                                <td>{{ total.price|currencyFormat }}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                            <tfoot class=\"checkout__totals-footer\">\r\n                            <tr>\r\n                                <th>รวมทั้งหมด</th>\r\n                                <td>{{ cart.total$|async|currencyFormat }}</td>\r\n                            </tr>\r\n                            </tfoot>\r\n                        </table>\r\n\r\n                        <div class=\"payment-methods\">\r\n                            <ul class=\"payment-methods__list\">\r\n                                <!-- <li class=\"payment-methods__item payment-methods__item--active\">\r\n                                    <label class=\"payment-methods__item-header\">\r\n                                            <span class=\"payment-methods__item-radio input-radio\">\r\n                                                <span class=\"input-radio__body\">\r\n                                                    <input class=\"input-radio__input\" name=\"checkout_payment_method\" type=\"radio\" >\r\n                                                    <span class=\"input-radio__circle\"></span>\r\n                                                </span>\r\n                                            </span>\r\n                                        <span class=\"payment-methods__item-title\">Direct bank transfer</span>\r\n                                    </label>\r\n                                    <div class=\"payment-methods__item-container\">\r\n                                        <div class=\"payment-methods__item-description text-muted\">\r\n                                            Make your payment directly into our bank account. Please use your Order ID as the payment\r\n                                            reference. Your order will not be shipped until the funds have cleared in our account.\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                                <li class=\"payment-methods__item\">\r\n                                    <label class=\"payment-methods__item-header\">\r\n                                            <span class=\"payment-methods__item-radio input-radio\">\r\n                                                <span class=\"input-radio__body\">\r\n                                                    <input class=\"input-radio__input\" name=\"checkout_payment_method\" type=\"radio\">\r\n                                                    <span class=\"input-radio__circle\"></span>\r\n                                                </span>\r\n                                            </span>\r\n                                        <span class=\"payment-methods__item-title\">Check payments</span>\r\n                                    </label>\r\n                                    <div class=\"payment-methods__item-container\">\r\n                                        <div class=\"payment-methods__item-description text-muted\">\r\n                                            Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.\r\n                                        </div>\r\n                                    </div>\r\n                                </li> -->\r\n                                <li class=\"payment-methods__item\">\r\n                                    <label class=\"payment-methods__item-header\">\r\n                                            <span class=\"payment-methods__item-radio input-radio\">\r\n                                                <span class=\"input-radio__body\">\r\n                                                    <input class=\"input-radio__input\" name=\"checkout_payment_method\" type=\"radio\" checked>\r\n                                                    <span class=\"input-radio__circle\"></span>\r\n                                                </span>\r\n                                            </span>\r\n                                        <span class=\"payment-methods__item-title\">ชำระเงินปลายทาง</span>\r\n                                    </label>\r\n                                    <div class=\"payment-methods__item-container\">\r\n                                        <div class=\"payment-methods__item-description text-muted\">\r\n                                            Pay with cash upon delivery.\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                                <!-- <li class=\"payment-methods__item\">\r\n                                    <label class=\"payment-methods__item-header\">\r\n                                            <span class=\"payment-methods__item-radio input-radio\">\r\n                                                <span class=\"input-radio__body\">\r\n                                                    <input class=\"input-radio__input\" name=\"checkout_payment_method\" type=\"radio\">\r\n                                                    <span class=\"input-radio__circle\"></span>\r\n                                                </span>\r\n                                            </span>\r\n                                        <span class=\"payment-methods__item-title\">PayPal</span>\r\n                                    </label>\r\n                                    <div class=\"payment-methods__item-container\">\r\n                                        <div class=\"payment-methods__item-description text-muted\">\r\n                                            Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.\r\n                                        </div>\r\n                                    </div>\r\n                                </li> -->\r\n                            </ul>\r\n                        </div>\r\n\r\n\r\n\r\n                        <div class=\"checkout__agree form-group\">\r\n                            <div class=\"form-check\">\r\n                                    <span class=\"form-check-input input-check\">\r\n                                        <span class=\"input-check__body\">\r\n                                            <input class=\"input-check__input\" type=\"checkbox\" id=\"checkout-terms\">\r\n                                            <span class=\"input-check__box\"></span>\r\n                                            <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\"><use xlink:href=\"assets/images/sprite.svg#check-9x7\"></use></svg>\r\n                                        </span>\r\n                                    </span>\r\n                                <label class=\"form-check-label\" for=\"checkout-terms\">\r\n                                    I have read and agree to the website <a target=\"_blank\" href=\"terms-and-conditions.html\">terms and conditions</a>*\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <a routerLink=\"../order-status\">\r\n                            <button type=\"submit\" class=\"btn btn-primary btn-xl btn-block\">สั่งซื้อ</button>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-compare/page-compare.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-compare/page-compare.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [header]=\"'Comparison'\" [breadcrumbs]=\"[\r\n    {label: 'Home',       url: '../../'},\r\n    {label: 'Comparison', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block block-empty\" *ngIf=\"!products.length\">\r\n    <div class=\"container\">\r\n        <div class=\"block-empty__body\">\r\n            <div class=\"block-empty__message\">You have not chosen any products to compare!</div>\r\n            <div class=\"block-empty__actions\">\r\n                <a routerLink=\"../../\" class=\"btn btn-primary btn-sm\">Continue</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"block\" *ngIf=\"products.length\">\r\n    <div class=\"container\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"compare-table\">\r\n                <tbody>\r\n                <tr>\r\n                    <th>Product</th>\r\n                    <td *ngFor=\"let product of products\">\r\n                        <a [routerLink]=\"root.product(product.product_id)\" class=\"compare-table__product-link\">\r\n                            <div class=\"compare-table__product-image\">\r\n                                <img *ngIf=\"product.images?.length\" [src]=\"product.images[0]\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"compare-table__product-name\">{{ product.product_name }}</div>\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                <!-- <tr>\r\n                    <th>Availability</th>\r\n                    <td *ngFor=\"let product of products\">\r\n                        <span *ngIf=\"product.availability === 'in-stock'\" class=\"compare-table__product-badge badge badge-success\">In Stock</span>\r\n                    </td>\r\n                </tr> -->\r\n                <tr>\r\n                    <th>Price</th>\r\n                    <td *ngFor=\"let product of products\">{{ product.price|currencyFormat }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <th>Add To Cart</th>\r\n                    <td *ngFor=\"let product of products\">\r\n                        <button class=\"btn btn-primary\" (click)=\"addToCart(product)\" [ngClass]=\"{'btn-loading': addedToCartProducts.includes(product)}\">Add To Cart</button>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngFor=\"let feature of features\">\r\n                    <th>{{ feature.name }}</th>\r\n                    <td *ngFor=\"let product of products\">{{ feature.values[product.product_id] }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <th></th>\r\n                    <td *ngFor=\"let product of products\">\r\n                        <button class=\"btn btn-secondary btn-sm\" (click)=\"remove(product)\" [ngClass]=\"{'btn-loading': removedProducts.includes(product)}\">Remove</button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-map/page-map.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-map/page-map.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [header]=\"'แผนที่ร้านค้า'\"></app-page-header>\r\n\r\n<div class=\"block\">\r\n    <div class=\"container\">\r\n        <div class=\"card mb-0 contact-us\">\r\n            <div class=\"contact-us__map\">\r\n                <iframe src='https://maps.google.com/maps?q=Holbrook-Palmer%20Park&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed'\r\n                        frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"contact-us__container\">\r\n                    <div class=\"row\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-order-status/page-order-status.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-order-status/page-order-status.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [header]=\"'กำลังจัดส่งสินค้า'\" [breadcrumbs]=\"[\r\n    {label: 'Home',          url: '../../'},\r\n    {label: 'กำลังจัดส่งสินค้า', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"orderstatus block\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 col-lg-6 col-xl-7\">\r\n                <div class=\"card mb-lg-0\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\" style=\"margin-bottom: 10px;\">\r\n                            <div class=\"col-md-6\">\r\n                                <h3 class=\"card-title\">ร้าน BBBoy</h3>\r\n                            </div>\r\n                            <div class=\"col-md-4 offset-md-2\">\r\n                                <div class=\"tags\">\r\n                                    <div class=\"tags__list\">\r\n                                        <a href=\"\" style=\"background-color: rgb(214, 250, 221)\"><i class=\"fa fa-motorcycle\"></i> กำลังส่ง...</a>\r\n                                        <a data-toggle=\"tooltip\" (click)=\"showMapShopModal(mapShopModalTemplate, cart)\" title=\"ดูตำแหน่งร้านBBBoy\" ><i class=\"fa fa-map-pin\"></i> </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <table class=\"cart__table cart-table\">\r\n                            <thead class=\"cart-table__head\">\r\n                            <tr class=\"cart-table__row\">\r\n                                <th class=\"cart-table__column cart-table__column--image\">รูปภาพ</th>\r\n                                <th class=\"cart-table__column cart-table__column--product\">สินค้า</th>\r\n                                <th class=\"cart-table__column cart-table__column--price\">ราคา</th>\r\n                                <th class=\"cart-table__column cart-table__column--quantity\">จำนวน</th>\r\n                                <th class=\"cart-table__column cart-table__column--total\">รวม</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody class=\"cart-table__body\">\r\n                            <tr *ngFor=\"let item of items\" class=\"cart-table__row\">\r\n                                <td class=\"cart-table__column cart-table__column--image\">\r\n                                    <a [routerLink]=\"root.product(item.cartItem.product.product_id)\" *ngIf=\"item.cartItem.product.images?.length\"><img [src]=\"item.cartItem.product.images[0]\" alt=\"\"></a>\r\n                                </td>\r\n                                <td class=\"cart-table__column cart-table__column--product\">\r\n                                    <a [routerLink]=\"root.product(item.cartItem.product.product_id)\" class=\"cart-table__product-name\">{{ item.cartItem.product.product_name }}</a>\r\n                                    <ul *ngIf=\"item.cartItem.options.length\" class=\"cart-table__options\">\r\n                                        <li *ngFor=\"let option of item.cartItem.options\">{{ option.name }}: {{ option.value }}</li>\r\n                                    </ul>\r\n                                </td>\r\n                                <td class=\"cart-table__column cart-table__column--price\" data-title=\"Price\">{{ item.cartItem.product.price|currencyFormat }}</td>\r\n                                <td class=\"cart-table__column cart-table__column--quantity\" data-title=\"Quantity\">{{ item.quantity }}</td>\r\n                                <td class=\"cart-table__column cart-table__column--total\" data-title=\"Total\">{{ item.cartItem.product.price * item.quantity|currencyFormat }}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-12 col-lg-6 col-xl-5 mt-4 mt-lg-0\">\r\n                <div class=\"card mb-0\">\r\n                    <div class=\"card-body\">\r\n                        <h3 class=\"card-title\">สรุปคำสั่งซื้อร้าน BBBoy</h3>\r\n\r\n                        <table class=\"checkout__totals\">\r\n                            <tbody *ngIf=\"(cart.totals$|async).length\" class=\"checkout__totals-subtotals\">\r\n                            <tr>\r\n                                <th>รวม</th>\r\n                                <td>{{ cart.subtotal$|async|currencyFormat }}</td>\r\n                            </tr>\r\n                            <tr *ngFor=\"let total of cart.totals$|async\">\r\n                                <th>{{ total.title }}</th>\r\n                                <td>{{ total.price|currencyFormat }}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                            <tfoot class=\"checkout__totals-footer\">\r\n                            <tr>\r\n                                <th>รวมทั้งหมด</th>\r\n                                <td>{{ cart.total$|async|currencyFormat }}</td>\r\n                            </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                        <a data-toggle=\"modal\" (click)=\"showReviewShopModal(reviewShopModalTemplate, cart)\">\r\n                            <button type=\"submit\" class=\"btn btn-primary btn-xl btn-block\">ได้รับสินค้าแล้ว</button>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"orderstatus block\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 col-lg-6 col-xl-7\">\r\n                <div class=\"card mb-lg-0\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\" style=\"margin-bottom: 10px;\">\r\n                            <div class=\"col-md-6\">\r\n                                <h3 class=\"card-title\">ร้าน BBBoy</h3>\r\n                            </div>\r\n                            <div class=\"col-md-4 offset-md-2\">\r\n                                <div class=\"tags\">\r\n                                    <div class=\"tags__list\">\r\n                                        <a href=\"\" style=\"background-color: rgb(214, 250, 221)\"><i class=\"fa fa-truck\"></i> กำลังส่ง...</a>\r\n                                        <a appClick data-toggle=\"tooltip\" title=\"ดูตำแหน่งร้านBBBoy\"><i class=\"fa fa-map-pin\"></i> </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <table class=\"cart__table cart-table\">\r\n                            <thead class=\"cart-table__head\">\r\n                            <tr class=\"cart-table__row\">\r\n                                <th class=\"cart-table__column cart-table__column--image\">รูปภาพ</th>\r\n                                <th class=\"cart-table__column cart-table__column--product\">สินค้า</th>\r\n                                <th class=\"cart-table__column cart-table__column--price\">ราคา</th>\r\n                                <th class=\"cart-table__column cart-table__column--quantity\">จำนวน</th>\r\n                                <th class=\"cart-table__column cart-table__column--total\">รวม</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody class=\"cart-table__body\">\r\n                            <tr *ngFor=\"let item of items\" class=\"cart-table__row\">\r\n                                <td class=\"cart-table__column cart-table__column--image\">\r\n                                    <a [routerLink]=\"root.product(item.cartItem.product.product_id)\" *ngIf=\"item.cartItem.product.images?.length\"><img [src]=\"item.cartItem.product.images[0]\" alt=\"\"></a>\r\n                                </td>\r\n                                <td class=\"cart-table__column cart-table__column--product\">\r\n                                    <a [routerLink]=\"root.product(item.cartItem.product.product_id)\" class=\"cart-table__product-name\">{{ item.cartItem.product.product_name }}</a>\r\n                                    <ul *ngIf=\"item.cartItem.options.length\" class=\"cart-table__options\">\r\n                                        <li *ngFor=\"let option of item.cartItem.options\">{{ option.name }}: {{ option.value }}</li>\r\n                                    </ul>\r\n                                </td>\r\n                                <td class=\"cart-table__column cart-table__column--price\" data-title=\"Price\">{{ item.cartItem.product.price|currencyFormat }}</td>\r\n                                <td class=\"cart-table__column cart-table__column--quantity\" data-title=\"Quantity\">{{ item.quantity }}</td>\r\n                                <td class=\"cart-table__column cart-table__column--total\" data-title=\"Total\">{{ item.cartItem.product.price * item.quantity|currencyFormat }}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-12 col-lg-6 col-xl-5 mt-4 mt-lg-0\">\r\n                <div class=\"card mb-0\">\r\n                    <div class=\"card-body\">\r\n                        <h3 class=\"card-title\">สรุปคำสั่งซื้อร้าน BBBoy</h3>\r\n\r\n                        <table class=\"checkout__totals\">\r\n                            <tbody *ngIf=\"(cart.totals$|async).length\" class=\"checkout__totals-subtotals\">\r\n                            <tr>\r\n                                <th>รวม</th>\r\n                                <td>{{ cart.subtotal$|async|currencyFormat }}</td>\r\n                            </tr>\r\n                            <tr *ngFor=\"let total of cart.totals$|async\">\r\n                                <th>{{ total.title }}</th>\r\n                                <td>{{ total.price|currencyFormat }}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                            <tfoot class=\"checkout__totals-footer\">\r\n                            <tr>\r\n                                <th>รวมทั้งหมด</th>\r\n                                <td>{{ cart.total$|async|currencyFormat }}</td>\r\n                            </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                        <a routerLink=\"../order-status\">\r\n                            <button type=\"submit\" class=\"btn btn-primary btn-xl btn-block\">ได้รับสินค้าแล้ว</button>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #reviewShopModalTemplate>\r\n<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">ใส่ความคิดเห็นและให้ Rating ร้าน BBBoy</h4>\r\n    <!-- <h4 class=\"modal-title\">Write A Review</h4> -->\r\n    <button type=\"button\" class=\"close\" (click)=\"reviewShopModalRef.hide()\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <div class=\"form-row\">\r\n        <div class=\"form-group col-md-4\">\r\n            <label for=\"review-stars\">ให้ดาว</label>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n            <select id=\"review-stars\" class=\"form-control\">\r\n                <option>5 Stars Rating</option>\r\n                <option>4 Stars Rating</option>\r\n                <option>3 Stars Rating</option>\r\n                <option>2 Stars Rating</option>\r\n                <option>1 Stars Rating</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n    <label class=\"col-md-4 col-form-label\" for=\"name-input\">ความคิดเห็น</label>\r\n    <div class=\"col-md-8\">\r\n        <!-- <input type=\"text\" id=\"name-input\" name=\"name-input\" class=\"form-control\" placeholder=\"\"> -->\r\n        <textarea class=\"form-control\" id=\"comment-content\" rows=\"6\"></textarea>\r\n    </div>\r\n    </div>\r\n    <!-- <form class=\"reviews-view__form\">\r\n            <h3 class=\"reviews-view__header\">Write A Review</h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-lg-9 col-xl-8\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label for=\"review-stars\">Review Stars</label>\r\n                            <select id=\"review-stars\" class=\"form-control\">\r\n                                <option>5 Stars Rating</option>\r\n                                <option>4 Stars Rating</option>\r\n                                <option>3 Stars Rating</option>\r\n                                <option>2 Stars Rating</option>\r\n                                <option>1 Stars Rating</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label for=\"review-author\">Your Name</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"review-author\" placeholder=\"Your Name\">\r\n                        </div>\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label for=\"review-email\">Email Address</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"review-email\" placeholder=\"Email Address\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"review-text\">Your Review</label>\r\n                        <textarea class=\"form-control\" id=\"review-text\" rows=\"6\"></textarea>\r\n                    </div>\r\n                    <div class=\"form-group mb-0\">\r\n                        <button type=\"submit\" class=\"btn btn-primary btn-lg\">Post Your Review</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form> -->\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"reviewShopModalRef.hide()\">Cancle</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" >Review</button>\r\n</div>\r\n</ng-template>\r\n\r\n<ng-template #mapShopModalTemplate>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">ตำแหน่ง</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"mapShopModalRef.hide()\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n                <div class=\"contact-us__map\">\r\n                    <iframe src='https://maps.google.com/maps?q=Holbrook-Palmer%20Park&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed'\r\n                            frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <p> <strong> ร้าน BBBoy</strong> </p>\r\n                <p>123/2 ถ.โพศรี ต.หมากแข้ง อ.เมือง จ.อุดรธานี 41000</p>\r\n                <p>Tel: 042-789562</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"mapShopModalRef.hide()\">Close</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-product/page-product.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-product/page-product.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [breadcrumbs]=\"[\n    {label: 'Home',         url: '../../../'},\n    {label: product?.Shop?.shop_name,   url: '/m/shop/' + product?.shop_id},\n    {label: product?.product_name, url: ''}\n]\"></app-page-header>\n\n<ng-container *ngIf=\"layout !== 'sidebar'\">\n    <div class=\"block\">\n        <div class=\"container\">\n            <app-product [product]=\"product\" [layout]=\"layout\"></app-product>\n\n            <app-product-tabs></app-product-tabs>\n        </div>\n    </div>\n\n    <!-- <app-block-products-carousel header=\"สินค้าที่เกี่ยวข้อง\" [products]=\"products\" [rows]=\"1\" layout=\"grid-5\"></app-block-products-carousel> -->\n</ng-container>\n\n<ng-container *ngIf=\"layout === 'sidebar'\">\n    <ng-template #sidebar>\n        <div class=\"shop-layout__sidebar\">\n            <div class=\"block block-sidebar\">\n                <div class=\"block-sidebar__item\">\n                    <app-widget-categories [categories]=\"categories\" location=\"shop\"></app-widget-categories>\n                </div>\n                <div class=\"block-sidebar__item\">\n                    <app-widget-products header=\"Latest Products\" [products]=\"products\"></app-widget-products>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n\n    <div class=\"container\">\n        <div class=\"shop-layout shop-layout--sidebar--{{ sidebarPosition }}\">\n            <ng-container *ngIf=\"sidebarPosition === 'start'\" [ngTemplateOutlet]=\"sidebar\"></ng-container>\n            <div class=\"shop-layout__content\">\n                <div class=\"block\">\n                    <app-product [product]=\"product\" [layout]=\"layout\"></app-product>\n\n                    <app-product-tabs [withSidebar]=\"true\"></app-product-tabs>\n                </div>\n\n                <!-- <app-block-products-carousel header=\"สินค้าที่เกี่ยวข้อง\" [products]=\"products\" [rows]=\"1\" [withSidebar]=\"true\" layout=\"grid-4-sm\"></app-block-products-carousel> -->\n            </div>\n            <ng-container *ngIf=\"sidebarPosition === 'end'\" [ngTemplateOutlet]=\"sidebar\"></ng-container>\n        </div>\n    </div>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-shop-category/page-shop-category.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-shop-category/page-shop-category.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [header]=\"''\" [breadcrumbs]=\"[\n    {label: 'Home',         url: '../../'},\n    {label: 'ค้นหา', url: ''}\n]\"></app-page-header>\n\n<ng-container *ngIf=\"columns === 3\">\n    <div class=\"container\">\n        <div class=\"shop-layout shop-layout--sidebar--{{ sidebarPosition }}\">\n            <div class=\"shop-layout__sidebar\" *ngIf=\"sidebarPosition === 'start'\">\n                <app-shop-sidebar [category]=\"category\" offcanvas=\"mobile\"></app-shop-sidebar>\n            </div>\n            <div class=\"shop-layout__content\">\n                <div class=\"block\">\n                    <app-shops-view [shops]=\"shops\" [layout]=\"viewMode\" grid=\"grid-3-sidebar\" [limit]=\"15\" offcanvas=\"mobile\"></app-shops-view>\n                </div>\n            </div>\n            <div class=\"shop-layout__sidebar\" *ngIf=\"sidebarPosition === 'end'\">\n                <app-shop-sidebar [category]=\"category\" offcanvas=\"mobile\"></app-shop-sidebar>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"columns > 3\">\n    <div class=\"container\">\n        <div class=\"block\">\n            <app-shops-view [shops]=\"shops\" [layout]=\"viewMode\" [grid]=\"'grid-'+columns+'-full'\" [limit]=\"15\" offcanvas=\"always\"></app-shops-view>\n        </div>\n        <app-shop-sidebar [category]=\"category\" offcanvas=\"always\"></app-shop-sidebar>\n    </div>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-track-order/page-track-order.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-track-order/page-track-order.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [breadcrumbs]=\"[\r\n    {label: 'Home',        url: '../../'},\r\n    {label: 'Track Order', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-xl-5 col-lg-6 col-md-8\">\r\n                <div class=\"card flex-grow-1 mb-0 mt-5\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-title text-center\"><h1>Track Order</h1></div>\r\n                        <p class=\"mb-4 pt-2\">\r\n                            Vestibulum sem odio, ullamcorper a imperdiet tincidunt sed magna felis, consequat a erat ut,\r\n                            rutrum finibus odio.\r\n                        </p>\r\n                        <form>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"track-order-id\">Order ID</label>\r\n                                <input id=\"track-order-id\" type=\"text\" class=\"form-control\" placeholder=\"Order ID\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"track-email\">Email address</label>\r\n                                <input id=\"track-email\" type=\"email\" class=\"form-control\" placeholder=\"Email address\">\r\n                            </div>\r\n                            <div class=\"pt-3\">\r\n                                <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Track</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [header]=\"'Wishlist'\" [breadcrumbs]=\"[\n    {label: 'Home',      url: '../../'},\n    {label: 'Wishlist', url: ''}\n]\"></app-page-header>\n\n<div class=\"block block-empty\" *ngIf=\"!(wishlist.items$|async).length\">\n    <div class=\"container\">\n        <div class=\"block-empty__body\">\n            <div class=\"block-empty__message\">ไม่มีสินค้าใน Wishlist!</div>\n            <div class=\"block-empty__actions\">\n                <a routerLink=\"../../\" class=\"btn btn-primary btn-sm\">ดูสินค้า</a>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"block\" *ngIf=\"(wishlist.items$|async).length\">\n    <div class=\"container\">\n        <table class=\"wishlist\">\n            <thead class=\"wishlist__head\">\n            <tr class=\"wishlist__row\">\n                <th class=\"wishlist__column wishlist__column--image\">Image</th>\n                <th class=\"wishlist__column wishlist__column--product\">Product</th>\n                <!-- <th class=\"wishlist__column wishlist__column--stock\">Stock Status</th> -->\n                <th class=\"wishlist__column wishlist__column--price\">Price</th>\n                <th class=\"wishlist__column wishlist__column--tocart\"></th>\n                <th class=\"wishlist__column wishlist__column--remove\"></th>\n            </tr>\n            </thead>\n            <tbody class=\"wishlist__body\">\n            <!-- <tr *ngFor=\"let product of wishlist.items$|async\" class=\"wishlist__row\"> -->\n            <tr *ngFor=\"let product of allWishlist\" class=\"wishlist__row\">\n                <td class=\"wishlist__column wishlist__column--image\">\n                    <a [routerLink]=\"root.product(product.product_id)\" *ngIf=\"true\">\n                        <img [src]=\"getImageUrl(product.Product.product_img_url_1)\" alt=\"\">\n                    </a>\n                </td>\n                <td class=\"wishlist__column wishlist__column--product\">\n                    <a [routerLink]=\"root.product(product.product_id)\" class=\"wishlist__product-name\">{{ product.Product.product_name }}</a>\n                </td>\n                <!-- <td class=\"wishlist__column wishlist__column--stock\">\n                    <div class=\"badge badge-success\">In Stock</div>\n                </td> -->\n                <td class=\"wishlist__column wishlist__column--price\">{{ product.Product.price|currencyFormat }}</td>\n                <td class=\"wishlist__column wishlist__column--tocart\">\n                    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addToCart(product.Product)\"\n                        [ngClass]=\"{'btn-loading': addedToCartProducts.includes(product)}\">Add To Cart</button>\n                </td>\n                <td class=\"wishlist__column wishlist__column--remove\">\n                    <button type=\"button\" class=\"btn btn-light btn-sm btn-svg-icon\" (click)=\"remove(product.Product, product.wishlist_id)\"\n                        [ngClass]=\"{'btn-loading': removedProducts.includes(product.Product)}\">\n                        <app-icon name=\"cross-12\" size=\"12\"></app-icon>\n                    </button>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shop/components/product-tabs/product-tabs.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shop/components/product-tabs/product-tabs.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9jb21wb25lbnRzL3Byb2R1Y3QtdGFicy9wcm9kdWN0LXRhYnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/shop/components/product-tabs/product-tabs.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shop/components/product-tabs/product-tabs.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTabsComponent", function() { return ProductTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_shop_product_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/shop-product-spec */ "./src/data/shop-product-spec.ts");



let ProductTabsComponent = class ProductTabsComponent {
    constructor() {
        this.withSidebar = false;
        this.tab = 'description';
        this.specification = _data_shop_product_spec__WEBPACK_IMPORTED_MODULE_2__["specification"];
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductTabsComponent.prototype, "withSidebar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductTabsComponent.prototype, "tab", void 0);
ProductTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-tabs',
        template: __webpack_require__(/*! raw-loader!./product-tabs.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/components/product-tabs/product-tabs.component.html"),
        styles: [__webpack_require__(/*! ./product-tabs.component.scss */ "./src/app/modules/shop/components/product-tabs/product-tabs.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductTabsComponent);



/***/ }),

/***/ "./src/app/modules/shop/components/products-view/products-view.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shop/components/products-view/products-view.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9jb21wb25lbnRzL3Byb2R1Y3RzLXZpZXcvcHJvZHVjdHMtdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/shop/components/products-view/products-view.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shop/components/products-view/products-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsViewComponent", function() { return ProductsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "./src/app/modules/shop/services/shop-sidebar.service.ts");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");




let ProductsViewComponent = class ProductsViewComponent {
    constructor(apiservice, sidebar) {
        this.apiservice = apiservice;
        this.sidebar = sidebar;
        this.products = [];
        this.layout = 'grid';
        this.grid = 'grid-3-sidebar';
        this.limit = 16;
        this.offcanvas = 'mobile';
    }
    setLayout(value) {
        this.layout = value;
    }
    onPageChange(page) {
        // console.log(page);
    }
    ngOnInit() {
        this.apiservice.getshopproducts(this.shop_id).subscribe((response) => {
            this.products = [...response.data];
            console.log(this.products);
        }, err => this.error = err);
    }
};
ProductsViewComponent.ctorParameters = () => [
    { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["ShopSidebarService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ProductsViewComponent.prototype, "shop_id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ProductsViewComponent.prototype, "products", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductsViewComponent.prototype, "layout", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductsViewComponent.prototype, "grid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductsViewComponent.prototype, "limit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductsViewComponent.prototype, "offcanvas", void 0);
ProductsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-view',
        template: __webpack_require__(/*! raw-loader!./products-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/components/products-view/products-view.component.html"),
        providers: [
            src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        ],
        styles: [__webpack_require__(/*! ./products-view.component.scss */ "./src/app/modules/shop/components/products-view/products-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["ShopSidebarService"]])
], ProductsViewComponent);



/***/ }),

/***/ "./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.sass":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.sass ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9jb21wb25lbnRzL3Nob3Atc2lkZWJhci9zaG9wLXNpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShopSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopSidebarComponent", function() { return ShopSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "./src/app/modules/shop/services/shop-sidebar.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/functions/rxjs/fromMatchMedia */ "./src/app/shared/functions/rxjs/fromMatchMedia.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_models_shop_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/models/shop.model */ "./src/app/shared/models/shop.model.ts");
/* harmony import */ var src_app_shared_models_category_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/models/category.model */ "./src/app/shared/models/category.model.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);


// import { ProductFilter } from '../../../../shared/interfaces/product-filter';
// import { products } from '../../../../../data/shop-products';









let ShopSidebarComponent = class ShopSidebarComponent {
    constructor(sidebar, platformId, apiservice) {
        this.sidebar = sidebar;
        this.platformId = platformId;
        this.apiservice = apiservice;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.offcanvas = 'mobile';
        this.isOpen = false;
    }
    fetchNewProduct() {
        this.apiservice.getLastestProduct(5).subscribe((response) => {
            this.products = [...response.data];
        }, err => this.error = err);
    }
    getDatetime(t) {
        if (!t) {
            return '';
        }
        return moment__WEBPACK_IMPORTED_MODULE_10__(t).locale('th').format('ll');
    }
    ngOnInit() {
        this.fetchNewProduct();
        this.sidebar.isOpen$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(isOpen => {
            if (isOpen) {
                this.open();
            }
            else {
                this.close();
            }
        });
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            Object(_shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_5__["fromMatchMedia"])('(max-width: 991px)').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(media => {
                if (this.offcanvas === 'mobile' && this.isOpen && !media.matches) {
                    this.close();
                }
            });
        }
    }
    getImageUrl(uri) {
        if (!uri) {
            return '/assets/images/na.jpg';
        }
        return 'https://market.aniccom.com' + uri;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    open() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            const bodyWidth = document.body.offsetWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = (document.body.offsetWidth - bodyWidth) + 'px';
        }
        this.isOpen = true;
    }
    close() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '';
        }
        this.isOpen = false;
    }
};
ShopSidebarComponent.ctorParameters = () => [
    { type: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["ShopSidebarService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_models_shop_model__WEBPACK_IMPORTED_MODULE_8__["Shop"])
], ShopSidebarComponent.prototype, "shop", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_models_category_model__WEBPACK_IMPORTED_MODULE_9__["Category"])
], ShopSidebarComponent.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ShopSidebarComponent.prototype, "offcanvas", void 0);
ShopSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop-sidebar',
        template: __webpack_require__(/*! raw-loader!./shop-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.html"),
        providers: [
            src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        ],
        styles: [__webpack_require__(/*! ./shop-sidebar.component.sass */ "./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["ShopSidebarService"], Object, src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]])
], ShopSidebarComponent);



/***/ }),

/***/ "./src/app/modules/shop/components/shops-view/shops-view.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/shop/components/shops-view/shops-view.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9jb21wb25lbnRzL3Nob3BzLXZpZXcvc2hvcHMtdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/shop/components/shops-view/shops-view.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/shop/components/shops-view/shops-view.component.ts ***!
  \****************************************************************************/
/*! exports provided: ShopsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsViewComponent", function() { return ShopsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_shops_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/shops-list */ "./src/data/shops-list.ts");
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "./src/app/modules/shop/services/shop-sidebar.service.ts");
/* harmony import */ var _shared_services_shop_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shop.service */ "./src/app/shared/services/shop.service.ts");





let ShopsViewComponent = class ShopsViewComponent {
    // fetchShop() {
    //   this.shopService.getData().subscribe((data: Array<Shop>) => {
    //       setTimeout(() => {
    //         this.shops = [...data];
    //       }, 1000);
    //     }, // success path
    //     error => this.error = error // error path
    //   );
    // }
    constructor(sidebar, shopService) {
        this.sidebar = sidebar;
        this.shopService = shopService;
        this.shops = _data_shops_list__WEBPACK_IMPORTED_MODULE_2__["shops"];
        this.layout = 'grid';
        this.grid = 'grid-3-sidebar';
        this.limit = 16;
        this.offcanvas = 'mobile';
    }
    setLayout(value) {
        this.layout = value;
    }
    onPageChange(page) {
        // console.log(page);
    }
};
ShopsViewComponent.ctorParameters = () => [
    { type: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["ShopSidebarService"] },
    { type: _shared_services_shop_service__WEBPACK_IMPORTED_MODULE_4__["ShopService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ShopsViewComponent.prototype, "shops", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ShopsViewComponent.prototype, "layout", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ShopsViewComponent.prototype, "grid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ShopsViewComponent.prototype, "limit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ShopsViewComponent.prototype, "offcanvas", void 0);
ShopsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shops-view',
        template: __webpack_require__(/*! raw-loader!./shops-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/components/shops-view/shops-view.component.html"),
        providers: [_shared_services_shop_service__WEBPACK_IMPORTED_MODULE_4__["ShopService"]],
        styles: [__webpack_require__(/*! ./shops-view.component.scss */ "./src/app/modules/shop/components/shops-view/shops-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["ShopSidebarService"],
        _shared_services_shop_service__WEBPACK_IMPORTED_MODULE_4__["ShopService"]])
], ShopsViewComponent);



/***/ }),

/***/ "./src/app/modules/shop/guards/checkout.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/shop/guards/checkout.guard.ts ***!
  \*******************************************************/
/*! exports provided: CheckoutGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutGuard", function() { return CheckoutGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let CheckoutGuard = class CheckoutGuard {
    constructor(cart, router) {
        this.cart = cart;
        this.router = router;
    }
    canActivate(route, state) {
        return this.cart.quantity$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(quantity => {
            // TODO:
            return true;
            if (quantity) {
                return true;
            }
            const parentUrl = state.url.slice(0, state.url.indexOf(route.url[route.url.length - 1].path));
            this.router.navigate([parentUrl, 'cart']).then();
            return false;
        }));
    }
};
CheckoutGuard.ctorParameters = () => [
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CheckoutGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CheckoutGuard);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-cart/page-cart.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-cart/page-cart.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLWNhcnQvcGFnZS1jYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-cart/page-cart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-cart/page-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: PageCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCartComponent", function() { return PageCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var src_app_shared_models_api_response_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/api-response.model */ "./src/app/shared/models/api-response.model.ts");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");









let PageCartComponent = class PageCartComponent {
    constructor(root, cart, authenService, apiService) {
        this.root = root;
        this.cart = cart;
        this.authenService = authenService;
        this.apiService = apiService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.removedItems = [];
        this.items = [];
        this.groupedItems = [];
        this.updating = false;
    }
    ngOnInit() {
        // this.cart.items$.pipe(
        //     takeUntil(this.destroy$),
        //     map(cartItems => cartItems.map(cartItem => {
        //         return {
        //             cartItem,
        //             quantity: cartItem.quantity,
        //             quantityControl: new FormControl(cartItem.quantity, Validators.required)
        //         };
        //     }))
        // ).subscribe(items => this.items = items);
        this.fetchCart();
    }
    fetchCart() {
        const citizenId = this.authenService.currentUserValue.authority_info.CitizenId;
        this.apiService.getcart(citizenId).subscribe((response) => {
            // Sort by shopid
            response.data.sort((c1, c2) => {
                if (c1.Product.Shop.shop_name < c2.Product.Shop.shop_name) {
                    return -1;
                }
                else {
                    return 1;
                }
            });
            this.groupedItems = [];
            let lastShopId = 0;
            response.data.forEach(c => {
                if (c.Product.Shop.shop_id !== lastShopId) {
                    this.groupedItems.push([]);
                }
                const lastIdx = this.groupedItems.length - 1;
                this.groupedItems[lastIdx].push({
                    cartItem: c,
                    quantityControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](c.quantity, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
                });
                lastShopId = c.Product.Shop.shop_id;
            });
            // response.data.forEach(c => {
            //     this.items.push({
            //         cartItem: c,
            //         quantityControl: new FormControl(c.quantity, Validators.required)
            //     });
            // });
        }, err => this.error = err);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    getImageUrl(uri) {
        if (!uri) {
            return '/assets/images/na.jpg';
        }
        return 'https://market.aniccom.com' + uri;
    }
    remove(item) {
        if (this.removedItems.includes(item)) {
            return;
        }
        this.removedItems.push(item);
        // api remove
        this.apiService.removecart(item.cart_id).subscribe((response) => {
            this.cart.remove(item).subscribe({
                complete: () => {
                    this.fetchCart();
                    this.removedItems = this.removedItems.filter(eachItem => eachItem !== item);
                }
            });
        }, err => this.error = err);
    }
    // update(): void {
    //     this.updating = true;
    //     this.cart.update(
    //         this.items
    //             .filter(item => item.quantityControl.value !== item.quantity)
    //             .map(item => ({
    //                 item: item.cartItem,
    //                 quantity: item.quantityControl.value
    //             }))
    //     ).subscribe({complete: () => this.updating = false});
    // }
    needUpdate() {
        let needUpdate = false;
        for (const item of this.items) {
            if (!item.quantityControl.valid) {
                return false;
            }
            if (item.quantityControl.value !== item.cartItem.quantity) {
                needUpdate = true;
            }
        }
        return needUpdate;
    }
};
PageCartComponent.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_5__["RootService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }
];
PageCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./page-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-cart/page-cart.component.html"),
        providers: [
            src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            src_app_shared_models_api_response_model__WEBPACK_IMPORTED_MODULE_7__["ApiResponse"],
            src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
        ],
        styles: [__webpack_require__(/*! ./page-cart.component.scss */ "./src/app/modules/shop/pages/page-cart/page-cart.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_5__["RootService"],
        _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
        src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
        src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]])
], PageCartComponent);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-category/page-category.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-category/page-category.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLWNhdGVnb3J5L3BhZ2UtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-category/page-category.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-category/page-category.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCategoryComponent", function() { return PageCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_shop_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/shop-products */ "./src/data/shop-products.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "./src/app/modules/shop/services/shop-sidebar.service.ts");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");


// import { filters } from '../../../../../data/shop-filters';




let PageCategoryComponent = class PageCategoryComponent {
    constructor(route, apiservice) {
        this.route = route;
        this.apiservice = apiservice;
        this.products = _data_shop_products__WEBPACK_IMPORTED_MODULE_2__["products"];
        // filters: ProductFilter[] = filters;
        this.columns = 3;
        this.viewMode = 'grid';
        this.sidebarPosition = 'start'; // For LTR scripts "start" is "left" and "end" is "right"
        this.route.data.subscribe(data => {
            this.columns = 'columns' in data ? data.columns : this.columns;
            this.viewMode = 'viewMode' in data ? data.viewMode : this.viewMode;
            this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
        });
    }
    fetchCategory() {
        this.apiservice.getProductCategory().subscribe((response) => {
            this.category = response.data;
        }, err => this.error = err);
    }
    ngOnInit() {
        const shopId = this.route.snapshot.paramMap.get('id');
        this.apiservice.getshop(shopId).subscribe((response) => {
            this.shop = response.data;
            console.log(this.shop);
        }, err => this.error = err);
        this.fetchCategory();
    }
};
PageCategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
PageCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grid',
        template: __webpack_require__(/*! raw-loader!./page-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-category/page-category.component.html"),
        providers: [
            src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            { provide: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["ShopSidebarService"], useClass: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["ShopSidebarService"] }
        ],
        styles: [__webpack_require__(/*! ./page-category.component.scss */ "./src/app/modules/shop/pages/page-category/page-category.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
], PageCategoryComponent);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-checkout/page-checkout.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-checkout/page-checkout.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLWNoZWNrb3V0L3BhZ2UtY2hlY2tvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-checkout/page-checkout.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-checkout/page-checkout.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCheckoutComponent", function() { return PageCheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let PageCheckoutComponent = class PageCheckoutComponent {
    constructor(cart, route, router) {
        this.cart = cart;
        this.route = route;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        // this.cart.quantity$.pipe(takeUntil(this.destroy$)).subscribe(quantity => {
        //     if (!quantity) {
        //         this.router.navigate(['../cart'], {relativeTo: this.route}).then();
        //     }
        // });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
PageCheckoutComponent.ctorParameters = () => [
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PageCheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(/*! raw-loader!./page-checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-checkout/page-checkout.component.html"),
        styles: [__webpack_require__(/*! ./page-checkout.component.scss */ "./src/app/modules/shop/pages/page-checkout/page-checkout.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], PageCheckoutComponent);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-compare/page-compare.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-compare/page-compare.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLWNvbXBhcmUvcGFnZS1jb21wYXJlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-compare/page-compare.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-compare/page-compare.component.ts ***!
  \***************************************************************************/
/*! exports provided: PageCompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCompareComponent", function() { return PageCompareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/compare.service */ "./src/app/shared/services/compare.service.ts");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");






let PageCompareComponent = class PageCompareComponent {
    constructor(root, compare, cart) {
        this.root = root;
        this.compare = compare;
        this.cart = cart;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.products = [];
        this.features = [];
        this.addedToCartProducts = [];
        this.removedProducts = [];
    }
    ngOnInit() {
        // this.compare.items$.pipe(takeUntil(this.destroy$)).subscribe(products => {
        //     const features: Feature[] = [];
        //     products.forEach(product => product.features.forEach(productFeature => {
        //         let feature: Feature = features.find(eachFeature => eachFeature.name === productFeature.name);
        //         if (!feature) {
        //             feature = {
        //                 name: productFeature.name,
        //                 values: {}
        //             };
        //             features.push(feature);
        //         }
        //         feature.values[product.id] = productFeature.value;
        //     }));
        //     this.products = products;
        //     this.features = features;
        // });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    addToCart(product) {
        if (this.addedToCartProducts.includes(product)) {
            return;
        }
        this.addedToCartProducts.push(product);
        // this.cart.add(product, 1).subscribe({
        //     complete: () => {
        //         this.addedToCartProducts = this.addedToCartProducts.filter(eachProduct => eachProduct !== product);
        //     }
        // });
    }
    remove(product) {
        if (this.removedProducts.includes(product)) {
            return;
        }
        this.removedProducts.push(product);
        this.compare.remove(product).subscribe({
            complete: () => {
                this.removedProducts = this.removedProducts.filter(eachProduct => eachProduct !== product);
            }
        });
    }
};
PageCompareComponent.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_5__["RootService"] },
    { type: _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_2__["CompareService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
PageCompareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compare',
        template: __webpack_require__(/*! raw-loader!./page-compare.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-compare/page-compare.component.html"),
        styles: [__webpack_require__(/*! ./page-compare.component.scss */ "./src/app/modules/shop/pages/page-compare/page-compare.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_5__["RootService"],
        _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_2__["CompareService"],
        _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
], PageCompareComponent);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-map/page-map.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-map/page-map.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLW1hcC9wYWdlLW1hcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-map/page-map.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-map/page-map.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMapComponent", function() { return PageMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageMapComponent = class PageMapComponent {
    constructor() { }
};
PageMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-map',
        template: __webpack_require__(/*! raw-loader!./page-map.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-map/page-map.component.html"),
        styles: [__webpack_require__(/*! ./page-map.component.scss */ "./src/app/modules/shop/pages/page-map/page-map.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageMapComponent);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-order-status/page-order-status.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-order-status/page-order-status.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLW9yZGVyLXN0YXR1cy9wYWdlLW9yZGVyLXN0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-order-status/page-order-status.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-order-status/page-order-status.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PageOrderStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOrderStatusComponent", function() { return PageOrderStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");






let PageOrderStatusComponent = class PageOrderStatusComponent {
    constructor(root, cart, modalService) {
        this.root = root;
        this.cart = cart;
        this.modalService = modalService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.removedItems = [];
        this.items = [];
        this.updating = false;
        this.showingQuickview = false;
    }
    ngOnInit() {
        // this.cart.items$.pipe(
        //     takeUntil(this.destroy$),
        //     map(cartItems => cartItems.map(cartItem => {
        //         return {
        //             cartItem,
        //             quantity: cartItem.quantity,
        //             quantityControl: new FormControl(cartItem.quantity, Validators.required)
        //         };
        //     }))
        // ).subscribe(items => this.items = items);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    remove(item) {
        if (this.removedItems.includes(item)) {
            return;
        }
        // this.removedItems.push(item);
        // this.cart.remove(item).subscribe({complete: () => this.removedItems = this.removedItems.filter(eachItem => eachItem !== item)});
    }
    update() {
        // this.updating = true;
        // this.cart.update(
        //     this.items
        //         .filter(item => item.quantityControl.value !== item.quantity)
        //         .map(item => ({
        //             item: item.cartItem,
        //             quantity: item.quantityControl.value
        //         }))
        // ).subscribe({complete: () => this.updating = false});
    }
    needUpdate() {
        let needUpdate = false;
        // for (const item of this.items) {
        //     if (!item.quantityControl.valid) {
        //         return false;
        //     }
        //     if (item.quantityControl.value !== item.quantity) {
        //         needUpdate = true;
        //     }
        // }
        return needUpdate;
    }
    showMapShopModal(template, item) {
        this.mapShopModalRef = this.modalService.show(template);
    }
    showReviewShopModal(template, item) {
        this.reviewShopModalRef = this.modalService.show(template);
    }
};
PageOrderStatusComponent.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_5__["RootService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
];
PageOrderStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-status',
        template: __webpack_require__(/*! raw-loader!./page-order-status.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-order-status/page-order-status.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./page-order-status.component.scss */ "./src/app/modules/shop/pages/page-order-status/page-order-status.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_5__["RootService"],
        _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
], PageOrderStatusComponent);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-product/page-product.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-product/page-product.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLXByb2R1Y3QvcGFnZS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-product/page-product.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-product/page-product.component.ts ***!
  \***************************************************************************/
/*! exports provided: PageProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageProductComponent", function() { return PageProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_shop_widget_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/shop-widget-categories */ "./src/data/shop-widget-categories.ts");





let PageProductComponent = class PageProductComponent {
    constructor(route, productService) {
        this.route = route;
        this.productService = productService;
        this.categories = _data_shop_widget_categories__WEBPACK_IMPORTED_MODULE_4__["categories"];
        this.products = [];
        this.layout = 'standard';
        this.sidebarPosition = 'start'; // For LTR scripts "start" is "left" and "end" is "right"
        this.route.data.subscribe(data => {
            this.layout = 'layout' in data ? data.layout : this.layout;
            this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
        });
        this.id = this.route.snapshot.paramMap.get('id');
        this.fetchProduct(this.id);
        this.fetchRelatedProducts();
    }
    fetchRelatedProducts() {
        this.productService.getPopular().subscribe((data) => {
            setTimeout(() => {
                this.products = [...data];
            }, 1000);
        }, // success path
        // success path
        error => this.error = error // error path
        );
    }
    fetchProduct(id) {
        this.productService.getSingleData(id).subscribe((data) => {
            setTimeout(() => {
                this.product = data;
            }, 1000);
        }, // success path
        // success path
        error => this.error = error // error path
        );
    }
};
PageProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
PageProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-product',
        template: __webpack_require__(/*! raw-loader!./page-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-product/page-product.component.html"),
        providers: [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]],
        styles: [__webpack_require__(/*! ./page-product.component.scss */ "./src/app/modules/shop/pages/page-product/page-product.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
], PageProductComponent);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-shop-category/page-shop-category.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-shop-category/page-shop-category.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLXNob3AtY2F0ZWdvcnkvcGFnZS1zaG9wLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-shop-category/page-shop-category.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-shop-category/page-shop-category.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PageShopCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageShopCategoryComponent", function() { return PageShopCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_shops_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/shops-list */ "./src/data/shops-list.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "./src/app/modules/shop/services/shop-sidebar.service.ts");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");






let PageShopCategoryComponent = class PageShopCategoryComponent {
    constructor(apiservice, route) {
        this.apiservice = apiservice;
        this.route = route;
        this.shops = _data_shops_list__WEBPACK_IMPORTED_MODULE_2__["shops"];
        this.columns = 3;
        this.viewMode = 'grid';
        this.sidebarPosition = 'start'; // For LTR scripts "start" is "left" and "end" is "right"
        this.route.data.subscribe(data => {
            this.columns = 'columns' in data ? data.columns : this.columns;
            this.viewMode = 'viewMode' in data ? data.viewMode : this.viewMode;
            this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : this.sidebarPosition;
        });
    }
    ngOnInit() {
        this.keyword = this.route.snapshot.queryParamMap.get('search');
        this.category = this.route.snapshot.queryParamMap.get('category');
        if (this.category) {
            this.apiservice.searchShopByCategory(this.category).subscribe((response) => {
                this.shops = [...response.data];
                console.log(this.shops);
            }, err => this.error = err);
        }
        else if (this.keyword) {
            this.apiservice.searchShopByKeyword(this.keyword).subscribe((response) => {
                this.shops = [...response.data];
                console.log(this.shops);
            }, err => this.error = err);
        }
    }
};
PageShopCategoryComponent.ctorParameters = () => [
    { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PageShopCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grid',
        template: __webpack_require__(/*! raw-loader!./page-shop-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-shop-category/page-shop-category.component.html"),
        providers: [
            src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            { provide: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["ShopSidebarService"], useClass: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["ShopSidebarService"] }
        ],
        styles: [__webpack_require__(/*! ./page-shop-category.component.scss */ "./src/app/modules/shop/pages/page-shop-category/page-shop-category.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], PageShopCategoryComponent);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-track-order/page-track-order.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-track-order/page-track-order.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLXRyYWNrLW9yZGVyL3BhZ2UtdHJhY2stb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-track-order/page-track-order.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-track-order/page-track-order.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PageTrackOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTrackOrderComponent", function() { return PageTrackOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageTrackOrderComponent = class PageTrackOrderComponent {
    constructor() { }
};
PageTrackOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-track-order',
        template: __webpack_require__(/*! raw-loader!./page-track-order.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-track-order/page-track-order.component.html"),
        styles: [__webpack_require__(/*! ./page-track-order.component.scss */ "./src/app/modules/shop/pages/page-track-order/page-track-order.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageTrackOrderComponent);



/***/ }),

/***/ "./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLXdpc2hsaXN0L3BhZ2Utd2lzaGxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageWishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageWishlistComponent", function() { return PageWishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/wishlist.service */ "./src/app/shared/services/wishlist.service.ts");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var src_app_shared_models_api_response_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/api-response.model */ "./src/app/shared/models/api-response.model.ts");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");








let PageWishlistComponent = class PageWishlistComponent {
    constructor(root, wishlist, cart, authenService, apiService) {
        this.root = root;
        this.wishlist = wishlist;
        this.cart = cart;
        this.authenService = authenService;
        this.apiService = apiService;
        this.allWishlist = [];
        this.addedToCartProducts = [];
        this.removedProducts = [];
        this.fetchWishList();
    }
    getImageUrl(uri) {
        if (!uri) {
            return '/assets/images/na.jpg';
        }
        return 'https://market.aniccom.com' + uri;
    }
    fetchWishList() {
        const citizenId = this.authenService.currentUserValue.authority_info.CitizenId;
        this.apiService.getwishlist(citizenId).subscribe((response) => {
            this.allWishlist = [...response.data];
            console.log("-----------------");
            console.log(this.allWishlist);
        }, err => this.error = err);
    }
    addToCart(product) {
        if (this.addedToCartProducts.includes(product)) {
            return;
        }
        // Api add cart
        const citizenId = this.authenService.currentUserValue.authority_info.CitizenId;
        this.apiService.addCart(citizenId, product.product_id, 1).subscribe((response) => { }, err => this.error = err);
        this.addedToCartProducts.push(product);
        //this.cart.add(product, 1).subscribe({
        //complete: () => {
        this.addedToCartProducts = this.addedToCartProducts.filter(eachProduct => eachProduct !== product);
        //}
        //});
    }
    remove(product, w_id) {
        if (this.removedProducts.includes(product)) {
            return;
        }
        this.removedProducts.push(product);
        // Api remove wishlist
        this.apiService.removeWishlist(w_id).subscribe((response) => {
            this.wishlist.remove(product).subscribe({
                complete: () => {
                    this.fetchWishList();
                    this.removedProducts = this.removedProducts.filter(eachProduct => eachProduct !== product);
                }
            });
        }, err => this.error = err);
    }
};
PageWishlistComponent.ctorParameters = () => [
    { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__["RootService"] },
    { type: _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"] },
    { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }
];
PageWishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist',
        template: __webpack_require__(/*! raw-loader!./page-wishlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.html"),
        providers: [
            src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            src_app_shared_models_api_response_model__WEBPACK_IMPORTED_MODULE_6__["ApiResponse"],
            src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        ],
        styles: [__webpack_require__(/*! ./page-wishlist.component.scss */ "./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__["RootService"],
        _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"],
        _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]])
], PageWishlistComponent);



/***/ }),

/***/ "./src/app/modules/shop/services/shop-sidebar.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/shop/services/shop-sidebar.service.ts ***!
  \***************************************************************/
/*! exports provided: ShopSidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopSidebarService", function() { return ShopSidebarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ShopSidebarService = class ShopSidebarService {
    constructor() {
        this.isOpenSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isOpen$ = this.isOpenSubject$.asObservable();
    }
    open() {
        this.isOpenSubject$.next(true);
    }
    close() {
        this.isOpenSubject$.next(false);
    }
};
ShopSidebarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ShopSidebarService);



/***/ }),

/***/ "./src/app/modules/shop/shop-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/shop/shop-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ShopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRoutingModule", function() { return ShopRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ "./src/app/modules/shop/pages/page-category/page-category.component.ts");
/* harmony import */ var _pages_page_shop_category_page_shop_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-shop-category/page-shop-category.component */ "./src/app/modules/shop/pages/page-shop-category/page-shop-category.component.ts");
/* harmony import */ var _pages_page_map_page_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-map/page-map.component */ "./src/app/modules/shop/pages/page-map/page-map.component.ts");
/* harmony import */ var _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-cart/page-cart.component */ "./src/app/modules/shop/pages/page-cart/page-cart.component.ts");
/* harmony import */ var _pages_page_order_status_page_order_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-order-status/page-order-status.component */ "./src/app/modules/shop/pages/page-order-status/page-order-status.component.ts");
/* harmony import */ var _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-wishlist/page-wishlist.component */ "./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.ts");
/* harmony import */ var _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-checkout/page-checkout.component */ "./src/app/modules/shop/pages/page-checkout/page-checkout.component.ts");
/* harmony import */ var _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-compare/page-compare.component */ "./src/app/modules/shop/pages/page-compare/page-compare.component.ts");
/* harmony import */ var _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/page-track-order/page-track-order.component */ "./src/app/modules/shop/pages/page-track-order/page-track-order.component.ts");
/* harmony import */ var _guards_checkout_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/checkout.guard */ "./src/app/modules/shop/guards/checkout.guard.ts");
/* harmony import */ var _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page-product/page-product.component */ "./src/app/modules/shop/pages/page-product/page-product.component.ts");














const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'category-grid-3-columns-sidebar'
    },
    {
        path: 'shop-list',
        component: _pages_page_shop_category_page_shop_category_component__WEBPACK_IMPORTED_MODULE_4__["PageShopCategoryComponent"],
        data: {
            columns: 4,
            viewMode: 'grid',
            sidebarPosition: 'start'
        }
    },
    {
        path: 'shop-map',
        component: _pages_page_map_page_map_component__WEBPACK_IMPORTED_MODULE_5__["PageMapComponent"]
    },
    {
        path: 'category-grid-3-columns-sidebar',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            columns: 3,
            viewMode: 'grid',
            sidebarPosition: 'start'
        }
    },
    {
        path: 'category-grid-4-columns-full',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            columns: 4,
            viewMode: 'grid'
        }
    },
    {
        path: 'category-grid-5-columns-full',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            columns: 5,
            viewMode: 'grid'
        }
    },
    {
        path: 'category-list',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            columns: 3,
            viewMode: 'list',
            sidebarPosition: 'start'
        }
    },
    {
        path: 'category-right-sidebar',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            columns: 3,
            viewMode: 'grid',
            sidebarPosition: 'end'
        }
    },
    {
        path: 'product',
        pathMatch: 'full',
        redirectTo: 'product/1'
    },
    {
        path: 'product/:id',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_13__["PageProductComponent"],
        data: {
            layout: 'standard'
        }
    },
    {
        path: 'product-columnar',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_13__["PageProductComponent"],
        data: {
            layout: 'columnar'
        }
    },
    {
        path: 'product-sidebar',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_13__["PageProductComponent"],
        data: {
            layout: 'sidebar',
            sidebarPosition: 'start'
        }
    },
    {
        path: 'cart',
        component: _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_6__["PageCartComponent"]
    },
    {
        path: 'order-status',
        component: _pages_page_order_status_page_order_status_component__WEBPACK_IMPORTED_MODULE_7__["PageOrderStatusComponent"]
    },
    {
        path: 'checkout',
        component: _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_9__["PageCheckoutComponent"],
        canActivate: [_guards_checkout_guard__WEBPACK_IMPORTED_MODULE_12__["CheckoutGuard"]],
    },
    {
        path: 'wishlist',
        component: _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_8__["PageWishlistComponent"]
    },
    {
        path: 'compare',
        component: _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_10__["PageCompareComponent"]
    },
    {
        path: 'track-order',
        component: _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_11__["PageTrackOrderComponent"]
    },
    {
        path: ":id",
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"]
    },
];
let ShopRoutingModule = class ShopRoutingModule {
};
ShopRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ShopRoutingModule);



/***/ }),

/***/ "./src/app/modules/shop/shop.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/shop/shop.module.ts ***!
  \*********************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/blocks.module */ "./src/app/modules/blocks/blocks.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shop-routing.module */ "./src/app/modules/shop/shop-routing.module.ts");
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/widgets.module */ "./src/app/modules/widgets/widgets.module.ts");
/* harmony import */ var _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/products-view/products-view.component */ "./src/app/modules/shop/components/products-view/products-view.component.ts");
/* harmony import */ var _components_shops_view_shops_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shops-view/shops-view.component */ "./src/app/modules/shop/components/shops-view/shops-view.component.ts");
/* harmony import */ var _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product-tabs/product-tabs.component */ "./src/app/modules/shop/components/product-tabs/product-tabs.component.ts");
/* harmony import */ var _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shop-sidebar/shop-sidebar.component */ "./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.ts");
/* harmony import */ var _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page-cart/page-cart.component */ "./src/app/modules/shop/pages/page-cart/page-cart.component.ts");
/* harmony import */ var _pages_page_order_status_page_order_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/page-order-status/page-order-status.component */ "./src/app/modules/shop/pages/page-order-status/page-order-status.component.ts");
/* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ "./src/app/modules/shop/pages/page-category/page-category.component.ts");
/* harmony import */ var _pages_page_shop_category_page_shop_category_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/page-shop-category/page-shop-category.component */ "./src/app/modules/shop/pages/page-shop-category/page-shop-category.component.ts");
/* harmony import */ var _pages_page_map_page_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/page-map/page-map.component */ "./src/app/modules/shop/pages/page-map/page-map.component.ts");
/* harmony import */ var _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/page-checkout/page-checkout.component */ "./src/app/modules/shop/pages/page-checkout/page-checkout.component.ts");
/* harmony import */ var _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/page-compare/page-compare.component */ "./src/app/modules/shop/pages/page-compare/page-compare.component.ts");
/* harmony import */ var _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/page-product/page-product.component */ "./src/app/modules/shop/pages/page-product/page-product.component.ts");
/* harmony import */ var _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/page-track-order/page-track-order.component */ "./src/app/modules/shop/pages/page-track-order/page-track-order.component.ts");
/* harmony import */ var _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/page-wishlist/page-wishlist.component */ "./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.ts");


// modules (angular)


// modules (third-party)

// modules




// components




// pages










let ShopModule = class ShopModule {
};
ShopModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            // components
            _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_9__["ProductsViewComponent"],
            _components_shops_view_shops_view_component__WEBPACK_IMPORTED_MODULE_10__["ShopsViewComponent"],
            _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_11__["ProductTabsComponent"],
            _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["ShopSidebarComponent"],
            // pages
            _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_13__["PageCartComponent"],
            _pages_page_order_status_page_order_status_component__WEBPACK_IMPORTED_MODULE_14__["PageOrderStatusComponent"],
            _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_15__["PageCategoryComponent"],
            _pages_page_shop_category_page_shop_category_component__WEBPACK_IMPORTED_MODULE_16__["PageShopCategoryComponent"],
            _pages_page_map_page_map_component__WEBPACK_IMPORTED_MODULE_17__["PageMapComponent"],
            _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_18__["PageCheckoutComponent"],
            _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_19__["PageCompareComponent"],
            _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_20__["PageProductComponent"],
            _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_21__["PageTrackOrderComponent"],
            _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_22__["PageWishlistComponent"]
        ],
        imports: [
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
            // modules
            _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_5__["BlocksModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_7__["ShopRoutingModule"],
            _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_8__["WidgetsModule"]
        ]
    })
], ShopModule);



/***/ }),

/***/ "./src/app/shared/functions/rxjs/fromMatchMedia.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/functions/rxjs/fromMatchMedia.ts ***!
  \*********************************************************/
/*! exports provided: fromMatchMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMatchMedia", function() { return fromMatchMedia; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

function fromMatchMedia(query) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](observer => {
        const mediaQueryList = matchMedia(query);
        const onChange = () => observer.next(mediaQueryList);
        if (mediaQueryList.addEventListener) {
            mediaQueryList.addEventListener('change', onChange);
            return () => mediaQueryList.removeEventListener('change', onChange);
        }
        else {
            mediaQueryList.addListener(onChange);
            return () => mediaQueryList.removeListener(onChange);
        }
    });
}


/***/ }),

/***/ "./src/app/shared/models/category.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/category.model.ts ***!
  \*************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
}


/***/ }),

/***/ "./src/app/shared/services/shop.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/shop.service.ts ***!
  \*************************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ShopService = class ShopService {
    constructor(http) {
        this.http = http;
        this.dataUrl = 'https://market.aniccom.com/api/shop';
    }
    getData() {
        return this.http.get(this.dataUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    }
    getSingleData(id) {
        return this.http.get(this.dataUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    }
    postData(shop) {
        return this.http.post(this.dataUrl, shop)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    }
    putData(shop) {
        return this.http.put(this.dataUrl + '/' + shop.shop_id.toString(), shop)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    }
    deleteData(id) {
        return this.http.delete(this.dataUrl + '/' + id.toString())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
};
ShopService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ShopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ShopService);



/***/ }),

/***/ "./src/data/shop-product-spec.ts":
/*!***************************************!*\
  !*** ./src/data/shop-product-spec.ts ***!
  \***************************************/
/*! exports provided: specification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specification", function() { return specification; });
// import { ProductFeaturesSection } from '../app/shared/interfaces/product';
const specification = [
    { name: 'General', features: [
            { name: 'Material', value: 'Aluminium, Plastic' },
            { name: 'Engine Type', value: 'Brushless' },
            { name: 'Battery Voltage', value: '18 V' },
            { name: 'Battery Type', value: 'Li-lon' },
            { name: 'Number of Speeds', value: '2' },
            { name: 'Charge Time', value: '1.08 h' },
            { name: 'Weight', value: '1.5 kg' }
        ] },
    { name: 'Dimensions', features: [
            { name: 'Length', value: '99 mm' },
            { name: 'Width', value: '207 mm' },
            { name: 'Height', value: '208 mm' }
        ] }
];


/***/ }),

/***/ "./src/data/shop-widget-categories.ts":
/*!********************************************!*\
  !*** ./src/data/shop-widget-categories.ts ***!
  \********************************************/
/*! exports provided: categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
const categories = [
    { name: 'Power Tools', url: '../', children: [
            { name: 'Engravers', url: '../' },
            { name: 'Drills', url: '../' },
            { name: 'Wrenches', url: '../' },
            { name: 'Plumbing', url: '../' },
            { name: 'Wall Chaser', url: '../' },
            { name: 'Pneumatic Tools', url: '../' },
            { name: 'Milling Cutters', url: '../' }
        ] },
    { name: 'Hand Tools', url: '../', children: [
            { name: 'Screwdrivers', url: '../' },
            { name: 'Handsaws', url: '../' },
            { name: 'Knives', url: '../' },
            { name: 'Axes', url: '../' },
            { name: 'Multitools', url: '../' },
            { name: 'Paint Tools', url: '../' }
        ] },
    { name: 'Garden Equipment', url: '../', children: [
            { name: 'Motor Pumps', url: '../' },
            { name: 'Chainsaws', url: '../' },
            { name: 'Electric Saws', url: '../' },
            { name: 'Brush Cutters', url: '../' }
        ] },
    { name: 'Machine Tools', url: '../', children: [
            { name: 'Thread Cutting', url: '../' },
            { name: 'Chip Blowers', url: '../' },
            { name: 'Sharpening Machines', url: '../' },
            { name: 'Pipe Cutters', url: '../' },
            { name: 'Slotting machines', url: '../' },
            { name: 'Lathes', url: '../' }
        ] },
    { name: 'Instruments', url: '../', children: [
            { name: 'Welding Equipment', url: '../' },
            { name: 'Power Tools', url: '../' },
            { name: 'Hand Tools', url: '../' },
            { name: 'Measuring Tool', url: '../' }
        ] },
    { name: 'Workbenches', url: '../' },
    { name: 'Presses', url: '../' },
    { name: 'Spray Guns', url: '../' },
    { name: 'Riveters', url: '../' }
];


/***/ }),

/***/ "./src/data/shops-list.ts":
/*!********************************!*\
  !*** ./src/data/shops-list.ts ***!
  \********************************/
/*! exports provided: shops */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shops", function() { return shops; });
const shops = [
    {
        shop_id: 1,
        shop_name: '',
        shop_detail: '',
        is_delivery: true,
        create_datetime: new Date()
    },
    {
        shop_id: 2,
        shop_name: '',
        shop_detail: '',
        is_delivery: true,
        create_datetime: new Date()
    },
    {
        shop_id: 3,
        shop_name: '',
        shop_detail: '',
        is_delivery: true,
        create_datetime: new Date()
    },
    {
        shop_id: 4,
        shop_name: '',
        shop_detail: '',
        is_delivery: true,
        create_datetime: new Date()
    },
];


/***/ })

}]);
//# sourceMappingURL=modules-shop-shop-module-es2015.js.map