import React from 'react';

class TaxConcession {
  value = 0;

  constructor(concessionValue) {
    this.value = concessionValue;
  }

  get value() {
    return this.value;
  }

  /**
   * Gets the tax concession for a given income. Its the lesser of the values income or
   *   concession
   * @param incomeValue
   * @returns {number|*}
   */
  calculateConcession(incomeValue) {
    return Math.min(incomeValue, this.value);
  }
}

/**
 * An income with a label and a value
 *   e.g. {label: 'monthly salary', value: 100000}
 */
class Income {
  value = 0;
  label = '';

  constructor(label, incomeValue) {
    this.label = label;
    this.value = incomeValue;
  }
}

class TaxFile {
  concessions;
  incomes;

  
}