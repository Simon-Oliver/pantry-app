const moment = require('moment');

export class Item {
  constructor(name, expiryDate = null) {
    this.name = name;
    this.expiryDate = moment(expiryDate);
    this.hasExpiryDate = expiryDate ? true : false;
    this.isExpired = this.expiryDate.isBefore() && !this.expiryDate.isSame(moment(), 'day');
    this.willExpireIn = this.expiryDate.diff(moment(), 'days');
  }
}

export class FoodItem extends Item {
  constructor(name, expiryDate = null, isOpened = false, useByAfterOpening = null) {
    super(name, expiryDate);
    this.isOpened = isOpened;
    this.useByAfterOpening = useByAfterOpening;
  }
}
