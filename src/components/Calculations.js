
class TaxConcession {
  maximumEligibility = 0;

  constructor(maximumEligibility) {
    this.maximumEligibility = maximumEligibility;
  }

  get value() {
    return this.maximumEligibility;
  }

  /**
   * Gets the tax concession for a given income. Its the lesser of the values income or
   *   concession
   * @param calculatedEligibility
   * @returns {number|*}
   */
  calculateConcession(calculatedEligibility) {
    return Math.min(calculatedEligibility, this.maximumEligibility);
  }
}

/**
 * An income with a label and a maximumEligibility
 *   e.g. {label: 'monthly salary', maximumEligibility: 100000}
 */
class Income {
  value = 0;
  label = '';

  constructor(label, incomeValue) {
    this.label = label;
    this.value = incomeValue;
  }
}

