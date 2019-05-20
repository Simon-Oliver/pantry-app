const moment = require('moment');

export class Item {
  constructor(name, hasExpiryDate = false, expiryDate = null) {
    this.name = name;
    this.hasExpiryDate = hasExpiryDate;
    this.expiryDate = expiryDate;
    this.isExpired = moment(this.expiryDate).isBefore();
  }
}

export class FoodItem extends Item {
  constructor(
    name,
    hasExpiryDate = false,
    expiryDate = null,
    isOpened = false,
    useByAfterOpening = null
  ) {
    super(name, hasExpiryDate, expiryDate);
    this.isOpened = isOpened;
    this.useByAfterOpening = useByAfterOpening;
  }
}
