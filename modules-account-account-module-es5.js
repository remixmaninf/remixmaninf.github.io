(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-account-account-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/components/layout/layout.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/components/layout/layout.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [header]=\"'My Account'\" [breadcrumbs]=\"[\n    {label: 'Home',       url: '../../'},\n    {label: 'My Account', url: ''}\n]\"></app-page-header>\n\n<div class=\"block\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-lg-3 d-flex\">\n                <div class=\"account-nav flex-grow-1\">\n                    <h4 class=\"account-nav__title\">Navigation</h4>\n                    <ul>\n                        <li *ngFor=\"let link of links\" class=\"account-nav__item\" routerLinkActive=\"account-nav__item--active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                            <a [routerLink]=\"link.url\">{{ link.label }}</a>\n                        </li>\n                        <li class=\"account-nav__item\">\n                            <a href  (click)=\"logout()\">Logout</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-12 col-lg-9 mt-4 mt-lg-0\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"addresses-list\">\n    <a routerLink=\"./\" class=\"addresses-list__item addresses-list__item--new\">\n        <div class=\"addresses-list__plus\"></div>\n        <div class=\"btn btn-secondary btn-sm\">\n            <a [routerLink]=\"[]\" data-toggle=\"modal\" (click)=\"addAddressModal(addAddressModalTemplate)\">เพิ่มที่อยู่ใหม่</a>\n        </div>\n    </a>\n    <div class=\"addresses-list__divider\"></div>\n\n    <ng-container *ngFor=\"let address of addresses\">\n        <div class=\"addresses-list__item card address-card\">\n            <div class=\"address-card__badge\" *ngIf=\"address.is_default\">ที่อยู่เริ่มต้น</div>\n            <div class=\"address-card__body\">\n                <div class=\"address-card__name\">{{ address.name }}</div>\n                <div class=\"address-card__row\">\n                    {{ address.address }}\n                </div>\n                <div class=\"address-card__row\">\n                    <div class=\"address-card__row-title\">เบอร์โทรศัพท์</div>\n                    <div class=\"address-card__row-content\">{{ address.tel }}</div>\n                </div>\n                <!-- <div class=\"address-card__row\">\n                    <div class=\"address-card__row-title\">Email Address</div>\n                    <div class=\"address-card__row-content\">{{ address.}}</div>\n                </div> -->\n                <div class=\"address-card__footer\">\n                    <a [routerLink]=\"[]\" data-toggle=\"modal\" (click)=\"showAddressModal(addAddressModalTemplate, address)\">Edit</a>&nbsp;&nbsp;\n                    <a [routerLink]=\"[]\" (click)=\"openConfirmDeleteModal(deleteAddressModalTemplate, address.address_id)\">Remove</a>&nbsp;&nbsp;\n                    <a *ngIf=\"!address.is_default\" [routerLink]=\"[]\" (click)=\"setDefaultAdress(address.address_id)\">Set Default</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"addresses-list__divider\"></div>\n    </ng-container>\n</div>\n\n<ng-template #addAddressModalTemplate>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\"><span *ngIf=\"!toAddress.address_id\">เพิ่ม</span><span *ngIf=\"toAddress.address_id\">แก้ไข</span>ที่อยู่</h4>\n      <button type=\"button\" class=\"close\" (click)=\"addAddressModalRef.hide()\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"form-group row\">\n        <label class=\"col-md-4 col-form-label\" for=\"name-input\">ชื่อผู้รับ <span class=\"help-block\">*</span> </label>\n        <div class=\"col-md-8\">\n          <input type=\"text\" [(ngModel)]=\"toAddress.name\" name=\"name-input\" class=\"form-control\" placeholder=\"\">\n        </div>\n        <div class=\"col-md-8 offset-md-4\">\n            <span *ngIf=\"formError.nameError\" class=\"help-block\">{{ formError.nameError }}</span>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-md-4 col-form-label\" for=\"address-input\">ที่อยู่ <span class=\"help-block\">*</span> </label>\n        <div class=\"col-md-8\">\n          <input type=\"text\" [(ngModel)]=\"toAddress.address\" name=\"address-input\" class=\"form-control\" placeholder=\"\">\n        </div>\n        <div class=\"col-md-8 offset-md-4\">\n            <span *ngIf=\"formError.addressError\" class=\"help-block\">{{ formError.addressError }}</span>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-md-4 col-form-label\" for=\"tel-input\">เบอร์โทร  <span class=\"help-block\">*</span> </label>\n        <div class=\"col-md-8\">\n          <input type=\"text\" maxlength=\"10\" [(ngModel)]=\"toAddress.tel\" name=\"tel-input\" class=\"form-control\" placeholder=\"\">\n        </div>\n        <div class=\"col-md-8 offset-md-4\">\n            <span *ngIf=\"formError.telError\" class=\"help-block\">{{ formError.telError }}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addAddressModalRef.hide()\">ปิด</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"addOrEditAddress()\" >บันทึก</button>\n    </div>\n  </ng-template>\n\n<ng-template #deleteAddressModalTemplate class=\"modal-danger\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">ต้องการลบใช่หรือไม่?</h4>\n      <button type=\"button\" class=\"close\" (click)=\"deleteAddressModalRef.hide()\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>หลังจากลบแล้ว คุณจะไม่สามารถกู้คืนข้อมูลนี้ได้ ยืนยันที่จะลบหรือไม่?</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteAddressModalRef.hide()\">ยกเลิก</button>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteAddress()\">ยืนยัน</button>\n    </div>\n  </ng-template>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/page-dashboard/page-dashboard.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/pages/page-dashboard/page-dashboard.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n    <div class=\"dashboard__profile card profile-card\">\n        <div class=\"card-body profile-card__body\">\n            <div *ngIf=\"user.authority_info.CitizenImg\" class=\"profile-card__avatar\">\n                <img [src]=\"getImageUrl(user.authority_info.CitizenImg)\" alt=\"\">\n            </div>\n            <div class=\"profile-card__name\">{{ user.authority_info.FName + ' ' + user.authority_info.LName}}</div>\n            <div class=\"profile-card__email\">{{ user.authority_info.Email }}</div>\n            <div class=\"profile-card__edit\">\n                <a routerLink=\"../profile\" class=\"btn btn-secondary btn-sm\">Edit Profile</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"dashboard__address card address-card address-card--featured\">\n        <div class=\"address-card__badge\" *ngIf=\"defaultAddress.is_default\">ที่อยู่เริ่มต้น</div>\n        <div class=\"address-card__body\">\n            <div class=\"address-card__name\">{{ defaultAddress.name}}</div>\n            <div class=\"address-card__row\">\n                {{ defaultAddress.address }}\n                <!-- {{ address.country }}<br>\n                {{ address.postcode }}, {{ address.city }}<br>\n                {{ address.address }} -->\n            </div>\n            <div class=\"address-card__row\">\n                <div class=\"address-card__row-title\">Phone Number</div>\n                <div class=\"address-card__row-content\">{{ defaultAddress.tel }}</div>\n            </div>\n            <div class=\"address-card__footer\">\n                <!-- <a routerLink=\"./\">Edit Address</a> -->\n                <a [routerLink]=\"[]\" data-toggle=\"modal\" (click)=\"showAddressModal(editAddressModalTemplate, defaultAddress)\">Edit Address</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"dashboard__orders card\" *ngIf=\"allOrder.length\">\n        <div class=\"card-header\">\n            <h5>Recent Orders</h5>\n        </div>\n        <div class=\"card-divider\"></div>\n        <div class=\"card-table\">\n            <div class=\"table-responsive-sm\">\n                <table>\n                    <thead>\n                    <tr>\n                        <th>Order</th>\n                        <th>Date</th>\n                        <th>Detail</th>\n                        <th>Status</th>\n                        <th>Total</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let order of allOrder\">\n                        <td><a href=\"\">#{{ order.order_id}}</a></td>\n                        <td>{{ order.create_datetime }}</td>\n                        <td>{{ order.OrderDetails }}</td>\n                        <td>{{ order.order_status }}</td>\n                        <td>{{ order.total_price }}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #editAddressModalTemplate>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">แก้ไขที่อยู่</h4>\n      <button type=\"button\" class=\"close\" (click)=\"editAddressModalRef.hide()\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"form-group row\">\n            <label class=\"col-md-4 col-form-label\" for=\"name-input\">ชื่อผู้รับ <span class=\"help-block\">*</span> </label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" [(ngModel)]=\"defaultAddress.name\" name=\"name-input\" class=\"form-control\" placeholder=\"\">\n            </div>\n            <div class=\"col-md-8 offset-md-4\">\n                <span *ngIf=\"formError.nameError\" class=\"help-block\">{{ formError.nameError }}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label class=\"col-md-4 col-form-label\" for=\"address-input\">ที่อยู่ <span class=\"help-block\">*</span> </label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" [(ngModel)]=\"defaultAddress.address\" name=\"address-input\" class=\"form-control\" placeholder=\"\">\n            </div>\n            <div class=\"col-md-8 offset-md-4\">\n                <span *ngIf=\"formError.addressError\" class=\"help-block\">{{ formError.addressError }}</span>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label class=\"col-md-4 col-form-label\" for=\"tel-input\">เบอร์โทร  <span class=\"help-block\">*</span> </label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" maxlength=\"10\" [(ngModel)]=\"defaultAddress.tel\" name=\"tel-input\" class=\"form-control\" placeholder=\"\">\n            </div>\n            <div class=\"col-md-8 offset-md-4\">\n                <span *ngIf=\"formError.telError\" class=\"help-block\">{{ formError.telError }}</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"editAddressModalRef.hide()\">ปิด</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"editAddress()\" >บันทึก</button>\n    </div>\n  </ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/page-login/page-login.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/pages/page-login/page-login.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [header]=\"'My Account'\" [breadcrumbs]=\"[\n    {label: 'Home',       url: '../../'},\n    {label: 'My Account', url: ''}\n]\"></app-page-header>\n\n<div class=\"block\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 d-flex\">\n                <div class=\"card flex-grow-1 mb-md-0\">\n                    <div class=\"card-body\">\n                        <h3 class=\"card-title\">Login</h3>\n                        <form>\n                            <div class=\"form-group\">\n                                <label>Email address</label>\n                                <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Password</label>\n                                <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\n                                <small class=\"form-text text-muted\">\n                                    <button (click)=\"forgetPasswordModal(forgetPasswordModalTemplate)\">Forgotten Password</button>\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"form-check\">\n                                    <span class=\"form-check-input input-check\">\n                                        <span class=\"input-check__body\">\n                                            <input class=\"input-check__input\" type=\"checkbox\" id=\"login-remember\">\n                                            <span class=\"input-check__box\"></span>\n                                            <app-icon class=\"input-check__icon\" name=\"check-9x7\" size=\"9x7\"></app-icon>\n                                        </span>\n                                    </span>\n                                    <label class=\"form-check-label\" for=\"login-remember\">Remember Me</label>\n                                </div>\n                            </div>\n                            <div *ngIf=\"this.noUser\" class=\"alert alert-danger\" role=\"alert\">\n                                {{ this.message }}\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-primary mt-2 mt-md-3 mt-lg-4\" (click)=\"login()\" >Login</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 d-flex mt-4 mt-md-0\">\n                <div class=\"card flex-grow-1 mb-0\">\n                    <div class=\"card-body\">\n                        <h3 class=\"card-title\">Register</h3>\n                        <form>\n                            <div class=\"form-group\">\n                                <label>Email address</label>\n                                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Password</label>\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Repeat Password</label>\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-primary mt-2 mt-md-3 mt-lg-4\">Register</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #forgetPasswordModalTemplate>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">กรุณากรอกอีเมลล์ที่ท่านใช้</h4>\n      <button type=\"button\" class=\"close\" (click)=\"forgetPasswordModalRef.hide()\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"form-group row\">\n        <label class=\"col-md-4 col-form-label\" for=\"name-input\">อีเมลล์</label>\n        <div class=\"col-md-8\">\n          <input type=\"text\" [(ngModel)]=\"email\" name=\"name-input\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"forgetPasswordModalRef.hide()\">ปิด</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"forgetPassword()\" >ตกลง</button>\n    </div>\n  </ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/page-orders-list/page-orders-list.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/pages/page-orders-list/page-orders-list.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block block-empty\" *ngIf=\"!allOrder.length\">\n    <div class=\"container\">\n        <div class=\"block-empty__body\">\n            <div class=\"block-empty__message\">ไม่มีรายการสั่งซื้อสินค้า</div>\n            <div class=\"block-empty__actions\">\n                <a routerLink=\"../../\" class=\"btn btn-primary btn-sm\">ดูสินค้า</a>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"card\" *ngIf=\"allOrder.length\">\n    <div class=\"card-header\">\n        <h5>Order History</h5>\n    </div>\n    <div class=\"card-divider\"></div>\n    <div class=\"card-table\">\n        <div class=\"table-responsive-sm\">\n            <table>\n                <thead>\n                <tr>\n                    <th>Order</th>\n                    <th>Date</th>\n                    <th>Detail</th>\n                    <th>Status</th>\n                    <th>Total</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let order of allOrder\">\n                    <td><a href=\"\">#{{ order.order_id}}</a></td>\n                    <td>{{ order.create_datetime }}</td>\n                    <td>{{ order.OrderDetails }}</td>\n                    <td>{{ order.order_status }}</td>\n                    <td>{{ order.total_price }}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"card-divider\"></div>\n    <div class=\"card-footer\">\n        <app-pagination [total]=\"3\"></app-pagination>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/page-password/page-password.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/pages/page-password/page-password.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        <h5>Change Password</h5>\n    </div>\n    <div class=\"card-divider\"></div>\n    <div class=\"card-body\">\n        <div class=\"row no-gutters\">\n            <div class=\"col-12 col-lg-7 col-xl-6\">\n                <div class=\"form-group\">\n                    <label for=\"password-current\">Current Password <span class=\"help-block\">*</span></label>\n                    <input type=\"password\" [(ngModel)]=\"current_password\" name=\"current_password\" class=\"form-control\" id=\"password-current\" placeholder=\"Current Password\">\n                    <span *ngIf=\"formError.curPasswordError\" class=\"help-block\">{{ formError.curPasswordError }}</span>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password-new\">New Password <span class=\"help-block\">*</span></label>\n                    <input type=\"password\" [(ngModel)]=\"new_password\" name=\"new_password\" class=\"form-control\" id=\"password-new\" placeholder=\"New Password\">\n                    <span *ngIf=\"formError.newPasswordError\" class=\"help-block\">{{ formError.newPasswordError }}</span>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password-confirm\">Reenter New Password <span class=\"help-block\">*</span></label>\n                    <input type=\"password\" [(ngModel)]=\"re_new_password\" name=\"re_new_password\" class=\"form-control\" id=\"password-confirm\" placeholder=\"Reenter New Password\">\n                    <span *ngIf=\"formError.reNewPasswordError\" class=\"help-block\">{{ formError.reNewPasswordError }}</span>\n                </div>\n\n                <div class=\"form-group mt-5 mb-0\">\n                    <button class=\"btn btn-primary\" (click)=\"resetPassword()\">Change</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/page-profile/page-profile.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/pages/page-profile/page-profile.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        <h5>Edit Profile</h5>\n    </div>\n    <div class=\"card-divider\"></div>\n    <div class=\"card-body\">\n        <div class=\"row no-gutters\">\n            <div class=\"col-12 col-lg-7 col-xl-6\">\n                <div class=\"form-group\">\n                    <label for=\"profile-first-name\">ชื่อ <span class=\"help-block\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"this.citizen.FName\" id=\"profile-first-name\" placeholder=\"ชื่อ\">\n                    <span *ngIf=\"formError.FnameError\" class=\"help-block\">{{ formError.FnameError }}</span>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"profile-last-name\">นามสกุล <span class=\"help-block\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"this.citizen.LName\" name=\"profile-last-name\" placeholder=\"นามสกุล\">\n                    <span *ngIf=\"formError.LnameError\" class=\"help-block\">{{ formError.LnameError }}</span>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"profile-last-name\">รหัสบัตรประชาชน <span class=\"help-block\">*</span></label>\n                    <input type=\"text\" maxlength=\"13\" class=\"form-control\" [(ngModel)]=\"this.citizen.IdCard\" name=\"profile-citizenId\" placeholder=\"รหัสบัตรประชาชน\" disabled>\n                    <span *ngIf=\"formError.citizenIdError\" class=\"help-block\">{{ formError.citizenIdError }}</span>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"profile-email\">อีเมล <span class=\"help-block\">*</span></label>\n                    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"this.citizen.Email\" name=\"profile-email\" disabled>\n                    <span *ngIf=\"formError.emailError\" class=\"help-block\">{{ formError.emailError }}</span>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"profile-phone\">เบอร์โทรศัพท์ <span class=\"help-block\">*</span></label>\n                    <input type=\"text\" maxlength=\"10\" class=\"form-control\" [(ngModel)]=\"this.citizen.Tel\" name=\"profile-phone\" placeholder=\"เบอร์โทรศัพท์\">\n                    <span *ngIf=\"formError.telError\" class=\"help-block\">{{ formError.telError }}</span>\n                </div>\n\n                <div class=\"form-group mt-5 mb-0\">\n                    <button class=\"btn btn-primary\" (click)=\"editProfile()\">Save</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/ts-md5/dist/md5.js":
/*!*****************************************!*\
  !*** ./node_modules/ts-md5/dist/md5.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*

TypeScript Md5
==============

Based on work by
* Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
* André Cruz: https://github.com/satazor/SparkMD5
* Raymond Hill: https://github.com/gorhill/yamd5.js

Effectively a TypeScrypt re-write of Raymond Hill JS Library

The MIT License (MIT)

Copyright (C) 2014 Raymond Hill

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.


*/
Object.defineProperty(exports, "__esModule", { value: true });
var Md5 = /** @class */ (function () {
    function Md5() {
        this._state = new Int32Array(4);
        this._buffer = new ArrayBuffer(68);
        this._buffer8 = new Uint8Array(this._buffer, 0, 68);
        this._buffer32 = new Uint32Array(this._buffer, 0, 17);
        this.start();
    }
    // One time hashing functions
    Md5.hashStr = function (str, raw) {
        if (raw === void 0) { raw = false; }
        return this.onePassHasher
            .start()
            .appendStr(str)
            .end(raw);
    };
    Md5.hashAsciiStr = function (str, raw) {
        if (raw === void 0) { raw = false; }
        return this.onePassHasher
            .start()
            .appendAsciiStr(str)
            .end(raw);
    };
    Md5._hex = function (x) {
        var hc = Md5.hexChars;
        var ho = Md5.hexOut;
        var n;
        var offset;
        var j;
        var i;
        for (i = 0; i < 4; i += 1) {
            offset = i * 8;
            n = x[i];
            for (j = 0; j < 8; j += 2) {
                ho[offset + 1 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
                ho[offset + 0 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
            }
        }
        return ho.join('');
    };
    Md5._md5cycle = function (x, k) {
        var a = x[0];
        var b = x[1];
        var c = x[2];
        var d = x[3];
        // ff()
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        // gg()
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        // hh()
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        // ii()
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    };
    Md5.prototype.start = function () {
        this._dataLength = 0;
        this._bufferLength = 0;
        this._state.set(Md5.stateIdentity);
        return this;
    };
    // Char to code point to to array conversion:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
    Md5.prototype.appendStr = function (str) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var code;
        var i;
        for (i = 0; i < str.length; i += 1) {
            code = str.charCodeAt(i);
            if (code < 128) {
                buf8[bufLen++] = code;
            }
            else if (code < 0x800) {
                buf8[bufLen++] = (code >>> 6) + 0xC0;
                buf8[bufLen++] = code & 0x3F | 0x80;
            }
            else if (code < 0xD800 || code > 0xDBFF) {
                buf8[bufLen++] = (code >>> 12) + 0xE0;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            else {
                code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
                if (code > 0x10FFFF) {
                    throw new Error('Unicode standard supports code points up to U+10FFFF');
                }
                buf8[bufLen++] = (code >>> 18) + 0xF0;
                buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            if (bufLen >= 64) {
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen -= 64;
                buf32[0] = buf32[16];
            }
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.appendAsciiStr = function (str) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var i;
        var j = 0;
        for (;;) {
            i = Math.min(str.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = str.charCodeAt(j++);
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.appendByteArray = function (input) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var i;
        var j = 0;
        for (;;) {
            i = Math.min(input.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = input[j++];
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.getState = function () {
        var self = this;
        var s = self._state;
        return {
            buffer: String.fromCharCode.apply(null, self._buffer8),
            buflen: self._bufferLength,
            length: self._dataLength,
            state: [s[0], s[1], s[2], s[3]]
        };
    };
    Md5.prototype.setState = function (state) {
        var buf = state.buffer;
        var x = state.state;
        var s = this._state;
        var i;
        this._dataLength = state.length;
        this._bufferLength = state.buflen;
        s[0] = x[0];
        s[1] = x[1];
        s[2] = x[2];
        s[3] = x[3];
        for (i = 0; i < buf.length; i += 1) {
            this._buffer8[i] = buf.charCodeAt(i);
        }
    };
    Md5.prototype.end = function (raw) {
        if (raw === void 0) { raw = false; }
        var bufLen = this._bufferLength;
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var i = (bufLen >> 2) + 1;
        var dataBitsLen;
        this._dataLength += bufLen;
        buf8[bufLen] = 0x80;
        buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
        buf32.set(Md5.buffer32Identity.subarray(i), i);
        if (bufLen > 55) {
            Md5._md5cycle(this._state, buf32);
            buf32.set(Md5.buffer32Identity);
        }
        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        dataBitsLen = this._dataLength * 8;
        if (dataBitsLen <= 0xFFFFFFFF) {
            buf32[14] = dataBitsLen;
        }
        else {
            var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
            if (matches === null) {
                return;
            }
            var lo = parseInt(matches[2], 16);
            var hi = parseInt(matches[1], 16) || 0;
            buf32[14] = lo;
            buf32[15] = hi;
        }
        Md5._md5cycle(this._state, buf32);
        return raw ? this._state : Md5._hex(this._state);
    };
    // Private Static Variables
    Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
    Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    Md5.hexChars = '0123456789abcdef';
    Md5.hexOut = [];
    // Permanent instance is to use for one-call hashing
    Md5.onePassHasher = new Md5();
    return Md5;
}());
exports.Md5 = Md5;
if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
    console.error('Md5 self test failed.');
}
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ "./src/app/modules/account/account-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/account/account-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_page_login_page_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-login/page-login.component */ "./src/app/modules/account/pages/page-login/page-login.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/modules/account/components/layout/layout.component.ts");
/* harmony import */ var _pages_page_dashboard_page_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-dashboard/page-dashboard.component */ "./src/app/modules/account/pages/page-dashboard/page-dashboard.component.ts");
/* harmony import */ var _pages_page_orders_list_page_orders_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-orders-list/page-orders-list.component */ "./src/app/modules/account/pages/page-orders-list/page-orders-list.component.ts");
/* harmony import */ var _pages_page_addresses_list_page_addresses_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-addresses-list/page-addresses-list.component */ "./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.ts");
/* harmony import */ var _pages_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-profile/page-profile.component */ "./src/app/modules/account/pages/page-profile/page-profile.component.ts");
/* harmony import */ var _pages_page_password_page_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-password/page-password.component */ "./src/app/modules/account/pages/page-password/page-password.component.ts");










var routes = [
    {
        path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                component: _pages_page_dashboard_page_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["PageDashboardComponent"]
            },
            {
                path: 'profile',
                component: _pages_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_8__["PageProfileComponent"]
            },
            {
                path: 'addresses',
                component: _pages_page_addresses_list_page_addresses_list_component__WEBPACK_IMPORTED_MODULE_7__["PageAddressesListComponent"]
            },
            {
                path: 'orders',
                component: _pages_page_orders_list_page_orders_list_component__WEBPACK_IMPORTED_MODULE_6__["PageOrdersListComponent"]
            },
            {
                path: 'password',
                component: _pages_page_password_page_password_component__WEBPACK_IMPORTED_MODULE_9__["PagePasswordComponent"]
            }
        ]
    },
    {
        path: 'login',
        component: _pages_page_login_page_login_component__WEBPACK_IMPORTED_MODULE_3__["PageLoginComponent"]
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/account/account.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/account/account.module.ts ***!
  \***************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap-modal */ "./node_modules/ngx-bootstrap-modal/bundles/ngx-bootstrap-modal.umd.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/modules/account/account-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/modules/account/components/layout/layout.component.ts");
/* harmony import */ var _pages_page_addresses_list_page_addresses_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-addresses-list/page-addresses-list.component */ "./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.ts");
/* harmony import */ var _pages_page_dashboard_page_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-dashboard/page-dashboard.component */ "./src/app/modules/account/pages/page-dashboard/page-dashboard.component.ts");
/* harmony import */ var _pages_page_login_page_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-login/page-login.component */ "./src/app/modules/account/pages/page-login/page-login.component.ts");
/* harmony import */ var _pages_page_orders_list_page_orders_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/page-orders-list/page-orders-list.component */ "./src/app/modules/account/pages/page-orders-list/page-orders-list.component.ts");
/* harmony import */ var _pages_page_password_page_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/page-password/page-password.component */ "./src/app/modules/account/pages/page-password/page-password.component.ts");
/* harmony import */ var _pages_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page-profile/page-profile.component */ "./src/app/modules/account/pages/page-profile/page-profile.component.ts");




// modules (angular)

// modules


// components

// pages






var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // components
                _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
                // pages
                _pages_page_addresses_list_page_addresses_list_component__WEBPACK_IMPORTED_MODULE_8__["PageAddressesListComponent"],
                _pages_page_dashboard_page_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["PageDashboardComponent"],
                _pages_page_login_page_login_component__WEBPACK_IMPORTED_MODULE_10__["PageLoginComponent"],
                _pages_page_orders_list_page_orders_list_component__WEBPACK_IMPORTED_MODULE_11__["PageOrdersListComponent"],
                _pages_page_password_page_password_component__WEBPACK_IMPORTED_MODULE_12__["PagePasswordComponent"],
                _pages_page_profile_page_profile_component__WEBPACK_IMPORTED_MODULE_13__["PageProfileComponent"]
            ],
            imports: [
                // modules (angular)
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BootstrapModalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                // modules
                _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/modules/account/components/layout/layout.component.sass":
/*!*************************************************************************!*\
  !*** ./src/app/modules/account/components/layout/layout.component.sass ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/account/components/layout/layout.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/account/components/layout/layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");



var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(authenService) {
        this.authenService = authenService;
        this.links = [
            { label: 'Dashboard', url: './dashboard' },
            { label: 'Edit Profile', url: './profile' },
            { label: 'Wishlist', url: '../shop/wishlist' },
            { label: 'Order History', url: './orders' },
            { label: 'Addresses', url: './addresses' },
            { label: 'Password', url: './password' }
        ];
    }
    LayoutComponent.prototype.logout = function () {
        this.authenService.logout();
    };
    LayoutComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/components/layout/layout.component.html"),
            providers: [
                src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
            ],
            styles: [__webpack_require__(/*! ./layout.component.sass */ "./src/app/modules/account/components/layout/layout.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.sass":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.sass ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9wYWdlcy9wYWdlLWFkZHJlc3Nlcy1saXN0L3BhZ2UtYWRkcmVzc2VzLWxpc3QuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PageAddressesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAddressesListComponent", function() { return PageAddressesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_models_citizen_address_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/citizen-address.model */ "./src/app/shared/models/citizen-address.model.ts");
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var src_globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/globals */ "./src/globals.ts");







var PageAddressesListComponent = /** @class */ (function () {
    function PageAddressesListComponent(authenService, modalService, apiService) {
        this.authenService = authenService;
        this.modalService = modalService;
        this.apiService = apiService;
        this.toAddress = new src_app_shared_models_citizen_address_model__WEBPACK_IMPORTED_MODULE_4__["CitizenAddress"]();
        // Form help
        this.formError = {};
        this.fetchAddress();
    }
    PageAddressesListComponent.prototype.fetchAddress = function () {
        var _this = this;
        var citizenId = this.authenService.currentUserValue.authority_info.CitizenId;
        this.apiService.getcitizenaddress(citizenId).subscribe(function (response) {
            _this.addresses = response.data.slice();
        }, function (err) { return _this.error = err; });
    };
    PageAddressesListComponent.prototype.showAddressModal = function (template, item) {
        this.toAddress = Object.assign({}, item);
        this.addAddressModalRef = this.modalService.show(template);
    };
    PageAddressesListComponent.prototype.addAddressModal = function (template) {
        this.formError = {};
        this.toAddress = new src_app_shared_models_citizen_address_model__WEBPACK_IMPORTED_MODULE_4__["CitizenAddress"]();
        this.addAddressModalRef = this.modalService.show(template);
    };
    PageAddressesListComponent.prototype.openConfirmDeleteModal = function (template, addressId) {
        this.toDeleteId = addressId;
        this.deleteAddressModalRef = this.modalService.show(template);
    };
    PageAddressesListComponent.prototype.checkFormError = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isError;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                isError = false;
                // name
                if (!this.toAddress.name) {
                    this.formError.nameError = 'กรุณากรอกชื่อผู้รับ';
                    isError = true;
                }
                else {
                    delete this.formError.nameError;
                }
                // address
                if (!this.toAddress.address) {
                    this.formError.addressError = 'กรุณากรอกที่อยู่ผู้รับ';
                    isError = true;
                }
                else {
                    delete this.formError.addressError;
                }
                // tel
                if (!this.toAddress.tel || this.toAddress.tel.length < 9) {
                    this.formError.telError = 'กรุณากรอกเบอร์โทรศัพท์ให้ครบ';
                    isError = true;
                }
                else if (!src_globals__WEBPACK_IMPORTED_MODULE_6__["onlyNumericCharacter"](this.toAddress.tel)) {
                    this.formError.telError = 'เบอร์โทรศัพท์ต้องเป็นตัวเลขเท่านั้น';
                    isError = true;
                }
                else {
                    delete this.formError.telError;
                }
                return [2 /*return*/, isError];
            });
        });
    };
    PageAddressesListComponent.prototype.addOrEditAddress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error, citizenId;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkFormError()];
                    case 1:
                        error = _a.sent();
                        if (error) {
                            window.scroll(0, 0);
                            return [2 /*return*/];
                        }
                        this.addAddressModalRef.hide();
                        if (this.toAddress.address_id) {
                            // Edit
                            this.apiService.updatecitizenaddress(this.toAddress.address_id, this.toAddress.name, this.toAddress.address, this.toAddress.tel)
                                .subscribe(function (response) {
                                _this.toAddress = new src_app_shared_models_citizen_address_model__WEBPACK_IMPORTED_MODULE_4__["CitizenAddress"]();
                                //   this.dialogService.confirm('สำเร็จ', 'แก้ไขข้อมูลประเภทตลาดสำเร็จ', <BuiltInOptions>{
                                //     type: 'prompt',
                                //     showCancelButton: false,
                                //     icon: 'success',
                                //     confirmButtonText: 'ตกลง'
                                //   }).then((result: boolean) => {
                                //     // TODO: หลังจากกดปุ่มตกลงให้ทำอะไร
                                //   });
                                _this.fetchAddress();
                            });
                        }
                        else {
                            citizenId = this.authenService.currentUserValue.authority_info.CitizenId;
                            this.apiService.addcitizenaddress(citizenId, this.toAddress.name, this.toAddress.address, this.toAddress.tel)
                                .subscribe(function (response) {
                                _this.toAddress = new src_app_shared_models_citizen_address_model__WEBPACK_IMPORTED_MODULE_4__["CitizenAddress"]();
                                //   this.dialogService.confirm('สำเร็จ', 'เพิ่มข้อมูลประเภทตลาดสำเร็จ', <BuiltInOptions>{
                                //     type: 'prompt',
                                //     showCancelButton: false,
                                //     icon: 'success',
                                //     confirmButtonText: 'ตกลง'
                                //   }).then((result: boolean) => {
                                //     // TODO: หลังจากกดปุ่มตกลงให้ทำอะไร
                                //   });
                                _this.fetchAddress();
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PageAddressesListComponent.prototype.deleteAddress = function () {
        var _this = this;
        this.apiService.removecitizenaddress(this.toDeleteId)
            .subscribe(function (response) {
            // this.dialogService.confirm('สำเร็จ', 'ลบข้อมูลสำเร็จ', <BuiltInOptions>{
            //   type: 'alert',
            //   showCancelButton: false,
            //   icon: 'success',
            //   confirmButtonText: 'ตกลง'
            // }).then((result: boolean) => {
            //   // TODO: หลังจากกดปุ่มตกลงให้ทำอะไร
            // });
            _this.fetchAddress();
            _this.deleteAddressModalRef.hide();
        });
    };
    PageAddressesListComponent.prototype.setDefaultAdress = function (id) {
        var _this = this;
        this.apiService.setdefaultcitizenaddress(id).subscribe(function (response) {
            _this.fetchAddress();
        });
    };
    PageAddressesListComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    PageAddressesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-addresses-list',
            template: __webpack_require__(/*! raw-loader!./page-addresses-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.html"),
            providers: [
                src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
                src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./page-addresses-list.component.sass */ "./src/app/modules/account/pages/page-addresses-list/page-addresses-list.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], PageAddressesListComponent);
    return PageAddressesListComponent;
}());



/***/ }),

/***/ "./src/app/modules/account/pages/page-dashboard/page-dashboard.component.sass":
/*!************************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-dashboard/page-dashboard.component.sass ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9wYWdlcy9wYWdlLWRhc2hib2FyZC9wYWdlLWRhc2hib2FyZC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/account/pages/page-dashboard/page-dashboard.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-dashboard/page-dashboard.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PageDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDashboardComponent", function() { return PageDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var src_app_shared_models_citizen_address_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/citizen-address.model */ "./src/app/shared/models/citizen-address.model.ts");
/* harmony import */ var src_globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/globals */ "./src/globals.ts");







var PageDashboardComponent = /** @class */ (function () {
    function PageDashboardComponent(authenService, modalService, apiService) {
        this.authenService = authenService;
        this.modalService = modalService;
        this.apiService = apiService;
        this.defaultAddress = new src_app_shared_models_citizen_address_model__WEBPACK_IMPORTED_MODULE_5__["CitizenAddress"]();
        this.allAddress = [];
        this.allOrder = [];
        // Form help
        this.formError = {};
        var citizenId = this.authenService.currentUserValue.authority_info.CitizenId;
        this.user = this.authenService.currentUserValue;
        this.fetchAddress();
    }
    PageDashboardComponent.prototype.fetchAddress = function () {
        var _this = this;
        var citizenId = this.authenService.currentUserValue.authority_info.CitizenId;
        this.apiService.getcitizenaddress(citizenId).subscribe(function (response) {
            _this.allAddress = response.data.slice();
            _this.defaultAddress = _this.allAddress.filter(function (a) { return a.is_default; })[0];
        }, function (err) { return _this.error = err; });
    };
    PageDashboardComponent.prototype.fetchAllOrder = function () {
        var _this = this;
        this.apiService.getOrderList(this.user.authority_info.CitizenId).subscribe(function (response) {
            _this.allOrder = response.data.slice();
        });
    };
    PageDashboardComponent.prototype.getImageUrl = function (uri) {
        if (!uri) {
            return '/assets/images/na.jpg';
        }
        return 'https://market.aniccom.com' + uri;
    };
    PageDashboardComponent.prototype.showAddressModal = function (template, item) {
        this.defaultAddress = Object.assign({}, item);
        this.editAddressModalRef = this.modalService.show(template);
    };
    PageDashboardComponent.prototype.checkFormError = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isError;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                isError = false;
                // name
                if (!this.defaultAddress.name) {
                    this.formError.nameError = 'กรุณากรอกชื่อผู้รับ';
                    isError = true;
                }
                else {
                    delete this.formError.nameError;
                }
                // address
                if (!this.defaultAddress.address) {
                    this.formError.addressError = 'กรุณากรอกที่อยู่ผู้รับ';
                    isError = true;
                }
                else {
                    delete this.formError.addressError;
                }
                // tel
                if (!this.defaultAddress.tel || this.defaultAddress.tel.length < 9) {
                    this.formError.telError = 'กรุณากรอกเบอร์โทรศัพท์ให้ครบ';
                    isError = true;
                }
                else if (!src_globals__WEBPACK_IMPORTED_MODULE_6__["onlyNumericCharacter"](this.defaultAddress.tel)) {
                    this.formError.telError = 'เบอร์โทรศัพท์ต้องเป็นตัวเลขเท่านั้น';
                    isError = true;
                }
                else {
                    delete this.formError.telError;
                }
                return [2 /*return*/, isError];
            });
        });
    };
    PageDashboardComponent.prototype.editAddress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkFormError()];
                    case 1:
                        error = _a.sent();
                        if (error) {
                            window.scroll(0, 0);
                            return [2 /*return*/];
                        }
                        this.editAddressModalRef.hide();
                        this.apiService.updatecitizenaddress(this.defaultAddress.address_id, this.defaultAddress.name, this.defaultAddress.address, this.defaultAddress.tel).subscribe(function (response) {
                            _this.defaultAddress = new src_app_shared_models_citizen_address_model__WEBPACK_IMPORTED_MODULE_5__["CitizenAddress"]();
                            _this.fetchAddress();
                        }, function (err) { return _this.error = err; });
                        return [2 /*return*/];
                }
            });
        });
    };
    PageDashboardComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    PageDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-dashboard',
            template: __webpack_require__(/*! raw-loader!./page-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/page-dashboard/page-dashboard.component.html"),
            providers: [
                src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
                src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            ],
            styles: [__webpack_require__(/*! ./page-dashboard.component.sass */ "./src/app/modules/account/pages/page-dashboard/page-dashboard.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], PageDashboardComponent);
    return PageDashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/account/pages/page-login/page-login.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-login/page-login.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9wYWdlcy9wYWdlLWxvZ2luL3BhZ2UtbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/account/pages/page-login/page-login.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-login/page-login.component.ts ***!
  \**************************************************************************/
/*! exports provided: PageLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoginComponent", function() { return PageLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



// import { ApiResponse } from 'src/app/shared/models/api-response.model';





var PageLoginComponent = /** @class */ (function () {
    function PageLoginComponent(route, router, authenService, apiservice, modalService) {
        this.route = route;
        this.router = router;
        this.authenService = authenService;
        this.apiservice = apiservice;
        this.modalService = modalService;
        this.noUser = false;
    }
    PageLoginComponent.prototype.ngOnInit = function () {
    };
    PageLoginComponent.prototype.login = function () {
        var _this = this;
        var md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__["Md5"]();
        var encryptedPass = md5.appendStr(this.password).end();
        this.authenService.login(this.email, encryptedPass).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            console.log(data);
            // this.router.navigate([this.returnUrl]);
            _this.router.navigate(['/m']);
        }, function (err) {
            // TODO: Check header and message
            _this.error = err;
            // this.loading = false;
        });
    };
    PageLoginComponent.prototype.forgetPasswordModal = function (template) {
        this.forgetPasswordModalRef = this.modalService.show(template);
    };
    PageLoginComponent.prototype.forgetPassword = function () {
        var _this = this;
        this.apiservice.forgetpassword(this.email).subscribe(function (response) {
            //TODO
        }, function (err) { return _this.error = err; });
    };
    PageLoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }
    ]; };
    PageLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./page-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/page-login/page-login.component.html"),
            providers: [
                src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
                src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
            ],
            styles: [__webpack_require__(/*! ./page-login.component.scss */ "./src/app/modules/account/pages/page-login/page-login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], PageLoginComponent);
    return PageLoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/account/pages/page-orders-list/page-orders-list.component.sass":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-orders-list/page-orders-list.component.sass ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9wYWdlcy9wYWdlLW9yZGVycy1saXN0L3BhZ2Utb3JkZXJzLWxpc3QuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/account/pages/page-orders-list/page-orders-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-orders-list/page-orders-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PageOrdersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOrdersListComponent", function() { return PageOrdersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");




var PageOrdersListComponent = /** @class */ (function () {
    function PageOrdersListComponent(authenService, apiService) {
        this.authenService = authenService;
        this.apiService = apiService;
        // orders: Order[] = orders;
        this.allOrder = [];
        this.user = this.authenService.currentUserValue;
    }
    PageOrdersListComponent.prototype.fetchAllOrder = function () {
        var _this = this;
        this.apiService.getOrderList(this.user.authority_info.CitizenId).subscribe(function (response) {
            _this.allOrder = response.data.slice();
        });
    };
    PageOrdersListComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    PageOrdersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-orders-list',
            template: __webpack_require__(/*! raw-loader!./page-orders-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/page-orders-list/page-orders-list.component.html"),
            providers: [
                src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
                src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            ],
            styles: [__webpack_require__(/*! ./page-orders-list.component.sass */ "./src/app/modules/account/pages/page-orders-list/page-orders-list.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], PageOrdersListComponent);
    return PageOrdersListComponent;
}());



/***/ }),

/***/ "./src/app/modules/account/pages/page-password/page-password.component.sass":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-password/page-password.component.sass ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9wYWdlcy9wYWdlLXBhc3N3b3JkL3BhZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/account/pages/page-password/page-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-password/page-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: PagePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagePasswordComponent", function() { return PagePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ts_md5__WEBPACK_IMPORTED_MODULE_4__);





var PagePasswordComponent = /** @class */ (function () {
    function PagePasswordComponent(authenService, apiservice) {
        this.authenService = authenService;
        this.apiservice = apiservice;
        // Form help
        this.formError = {};
        this.user = this.authenService.currentUserValue;
    }
    PagePasswordComponent.prototype.checkFormError = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isError;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                isError = false;
                // current_password
                if (!this.current_password) {
                    this.formError.curPasswordError = 'กรุณากรอกรหัสผ่านปัจจุบัน';
                    isError = true;
                }
                else {
                    delete this.formError.curPasswordError;
                }
                // new_password
                if (!this.new_password) {
                    this.formError.newPasswordError = 'กรุณากรอกรหัสผ่านใหม่';
                    isError = true;
                }
                else {
                    delete this.formError.newPasswordError;
                }
                // re_new_password
                if (!this.re_new_password) {
                    this.formError.reNewPasswordError = 'กรุณากรอกรหัสผ่านใหม่';
                    isError = true;
                }
                else if (this.new_password !== this.re_new_password) {
                    this.formError.reNewPasswordError = 'รหัสผ่านไม่ตรงกัน';
                    isError = true;
                }
                else {
                    delete this.formError.reNewPasswordError;
                }
                return [2 /*return*/, isError];
            });
        });
    };
    PagePasswordComponent.prototype.resetPassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error, md5, encryptedCurPass, encryptedNewPass;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkFormError()];
                    case 1:
                        error = _a.sent();
                        if (error) {
                            window.scroll(0, 0);
                            return [2 /*return*/];
                        }
                        md5 = new ts_md5__WEBPACK_IMPORTED_MODULE_4__["Md5"]();
                        encryptedCurPass = md5.appendStr(this.current_password).end();
                        encryptedNewPass = md5.appendStr(this.new_password).end();
                        this.apiservice.resetpassword(this.user.authority_info.Email, encryptedCurPass, encryptedNewPass).subscribe(function (response) {
                            //TODO
                        }, function (err) { return _this.error = err; });
                        return [2 /*return*/];
                }
            });
        });
    };
    PagePasswordComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    PagePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-password',
            template: __webpack_require__(/*! raw-loader!./page-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/page-password/page-password.component.html"),
            providers: [
                src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
                src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
            ],
            styles: [__webpack_require__(/*! ./page-password.component.sass */ "./src/app/modules/account/pages/page-password/page-password.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], PagePasswordComponent);
    return PagePasswordComponent;
}());



/***/ }),

/***/ "./src/app/modules/account/pages/page-profile/page-profile.component.sass":
/*!********************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-profile/page-profile.component.sass ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9wYWdlcy9wYWdlLXByb2ZpbGUvcGFnZS1wcm9maWxlLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/account/pages/page-profile/page-profile.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/account/pages/page-profile/page-profile.component.ts ***!
  \******************************************************************************/
/*! exports provided: PageProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageProfileComponent", function() { return PageProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var src_app_shared_models_citizen_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/citizen.model */ "./src/app/shared/models/citizen.model.ts");
/* harmony import */ var src_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/globals */ "./src/globals.ts");






var PageProfileComponent = /** @class */ (function () {
    function PageProfileComponent(authenService, apiService) {
        this.authenService = authenService;
        this.apiService = apiService;
        this.citizen = new src_app_shared_models_citizen_model__WEBPACK_IMPORTED_MODULE_4__["Citizen"]();
        // Form help
        this.formError = {};
        this.user = this.authenService.currentUserValue;
        console.log(this.user);
        this.fetchCitizenInfo();
    }
    PageProfileComponent.prototype.fetchCitizenInfo = function () {
        var _this = this;
        this.apiService.getcitizeninfo(this.user.authority_info.CitizenId).subscribe(function (response) {
            _this.citizen = response.data;
            console.log("--------------------------");
            console.log(_this.citizen);
        }, function (err) { return _this.error = err; });
    };
    PageProfileComponent.prototype.checkFormError = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isError;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                isError = false;
                // FName
                if (!this.citizen.FName) {
                    this.formError.FnameError = 'กรุณากรอกชื่อ';
                    isError = true;
                }
                else {
                    delete this.formError.FnameError;
                }
                // LName
                if (!this.citizen.LName) {
                    this.formError.LnameError = 'กรุณากรอกนามสกุล';
                    isError = true;
                }
                else {
                    delete this.formError.LnameError;
                }
                // IdCard
                if (!this.citizen.IdCard) {
                    this.formError.citizenIdError = 'กรุณากรอกเลขบัตประชาชน';
                    isError = true;
                }
                else if (!src_globals__WEBPACK_IMPORTED_MODULE_5__["onlyNumericCharacter"](this.citizen.IdCard)) {
                    this.formError.citizenIdError = 'เลขบัตประชาชนต้องเป็นตัวเลขเท่านั้น';
                    isError = true;
                }
                else {
                    delete this.formError.citizenIdError;
                }
                // Email
                if (!this.citizen.Email) {
                    this.formError.emailError = 'กรุณากรอกอีเมลล์';
                    isError = true;
                }
                else {
                    delete this.formError.emailError;
                }
                // tel
                if (!this.citizen.Tel || this.citizen.Tel.length < 9) {
                    this.formError.telError = 'กรุณากรอกเบอร์โทรศัพท์ให้ครบ';
                    isError = true;
                }
                else if (!src_globals__WEBPACK_IMPORTED_MODULE_5__["onlyNumericCharacter"](this.citizen.Tel)) {
                    this.formError.telError = 'เบอร์โทรศัพท์ต้องเป็นตัวเลขเท่านั้น';
                    isError = true;
                }
                else {
                    delete this.formError.telError;
                }
                return [2 /*return*/, isError];
            });
        });
    };
    PageProfileComponent.prototype.editProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkFormError()];
                    case 1:
                        error = _a.sent();
                        if (error) {
                            window.scroll(0, 0);
                            return [2 /*return*/];
                        }
                        this.apiService.editcitizeninfo(this.citizen.CitizenId, this.citizen.FName, this.citizen.LName, this.citizen.Tel).subscribe(function (response) {
                            console.log(response);
                        }, function (err) { return _this.error = err; });
                        return [2 /*return*/];
                }
            });
        });
    };
    PageProfileComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    PageProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-profile',
            template: __webpack_require__(/*! raw-loader!./page-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/page-profile/page-profile.component.html"),
            providers: [
                src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
                src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
            ],
            styles: [__webpack_require__(/*! ./page-profile.component.sass */ "./src/app/modules/account/pages/page-profile/page-profile.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], PageProfileComponent);
    return PageProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/citizen-address.model.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/models/citizen-address.model.ts ***!
  \********************************************************/
/*! exports provided: CitizenAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitizenAddress", function() { return CitizenAddress; });
var CitizenAddress = /** @class */ (function () {
    function CitizenAddress() {
    }
    return CitizenAddress;
}());



/***/ }),

/***/ "./src/app/shared/models/citizen.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/citizen.model.ts ***!
  \************************************************/
/*! exports provided: Citizen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Citizen", function() { return Citizen; });
var Citizen = /** @class */ (function () {
    function Citizen() {
    }
    return Citizen;
}());



/***/ }),

/***/ "./src/globals.ts":
/*!************************!*\
  !*** ./src/globals.ts ***!
  \************************/
/*! exports provided: MOMENT_TIME_FORMAT, MONTHS, DAY_OF_WEEK, PAYMENT_STATUS_DICT, LOCK_STATUS_DICT, CHANNEL_DICT, clone, validateEmail, onlyNumericCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOMENT_TIME_FORMAT", function() { return MOMENT_TIME_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHS", function() { return MONTHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAY_OF_WEEK", function() { return DAY_OF_WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_STATUS_DICT", function() { return PAYMENT_STATUS_DICT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCK_STATUS_DICT", function() { return LOCK_STATUS_DICT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_DICT", function() { return CHANNEL_DICT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyNumericCharacter", function() { return onlyNumericCharacter; });

// export const FILE_URL = 'https://market.aniccom.com';
// export const API_BASE_URL = 'https://market.aniccom.com/api/';
// export const API_BASE_URL = 'http://localhost:4747/api/';
// export const FILE_BASE_URL = 'https://market.aniccom.com/file';
var MOMENT_TIME_FORMAT = 'HH:mm:ss';
var MONTHS = [
    { name: 'มกราคม', value: 1 },
    { name: 'กุมภาพันธ์', value: 2 },
    { name: 'มีนาคม', value: 3 },
    { name: 'เมษายน', value: 4 },
    { name: 'พฤษภาคม', value: 5 },
    { name: 'มิถุนายน', value: 6 },
    { name: 'กรกฎาคม', value: 7 },
    { name: 'สิงหาคม', value: 8 },
    { name: 'กันยายน', value: 9 },
    { name: 'ตุลาคม', value: 10 },
    { name: 'พฤศจิกายน', value: 11 },
    { name: 'ธันวาคม', value: 12 },
];
var DAY_OF_WEEK = [
    { name: 'วันจันทร์', value: 1 },
    { name: 'วันอังคาร', value: 2 },
    { name: 'วันพุธ', value: 3 },
    { name: 'วันพฤหัสบดี', value: 4 },
    { name: 'วันศุกร์', value: 5 },
    { name: 'วันเสาร์', value: 6 },
    { name: 'วันอาทิตย์', value: 7 },
];
var PAYMENT_STATUS_DICT = {
    '0': 'ยังไม่ได้ชำระเงิน',
    '1': 'รอตรวจหลักฐาน',
    '2': 'หลักฐานไม่ถูก',
    '3': 'ชำระแล้ว',
    '4': 'คืนเงิน',
};
var LOCK_STATUS_DICT = {
    '0': 'ว่าง',
    '1': 'รออนุมัติ',
    '2': 'หลักฐานไม่ถูกต้อง',
    '3': 'ร้านยกเลิก',
    '4': 'หลุดจอง',
    '5': 'จองสำเร็จ',
};
var CHANNEL_DICT = {
    '1': 'เจ้าหน้าที่',
    '2': 'เว็บ',
    '3': 'แอป'
};
// Utility functions
var clone = function (obj) { return JSON.parse(JSON.stringify(obj)); };
var validateEmail = function (email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
var onlyNumericCharacter = function (text) {
    return !text.match(/[^$,.\d]/);
};


/***/ })

}]);
//# sourceMappingURL=modules-account-account-module-es5.js.map