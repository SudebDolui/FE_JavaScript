class BankCalculator {
  // Calculate EMI (Equated Monthly Installment)
  static calculateEMI(principal, annualInterestRate, tenureMonths) {
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const emi =
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths)) /
      (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);
    return emi;
  }

  // Calculate total loan payment amount
  static calculateTotalLoanPayment(principal, annualInterestRate, tenureMonths) {
    const emi = this.calculateEMI(principal, annualInterestRate, tenureMonths);
    return emi * tenureMonths;
  }

  // Calculate Fixed Deposit maturity amount
  static calculateFixedDeposit(principal, annualInterestRate, tenureYears, compoundingFrequency = 1) {
    // compoundingFrequency: number of times interest applied per year (1=yearly, 4=quarterly, 12=monthly)
    const n = compoundingFrequency;
    const r = annualInterestRate / 100;
    const t = tenureYears;
    const maturityAmount = principal * Math.pow(1 + r / n, n * t);
    return maturityAmount;
  }

  // Calculate Recurring Deposit maturity amount
  static calculateRecurringDeposit(monthlyDeposit, annualInterestRate, tenureMonths) {
    // Formula for RD maturity amount with monthly compounding
    const r = annualInterestRate / 100 / 12;
    const n = tenureMonths;
    const maturityAmount = monthlyDeposit * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    return maturityAmount;
  }

  // Calculate Simple Interest
  static calculateSimpleInterest(principal, annualInterestRate, tenureYears) {
    const interest = (principal * annualInterestRate * tenureYears) / 100;
    const totalAmount = principal + interest;
    return { interest, totalAmount };
  }

  // Calculate Compound Interest
  static calculateCompoundInterest(principal, annualInterestRate, tenureYears, compoundingFrequency = 1) {
    const n = compoundingFrequency;
    const r = annualInterestRate / 100;
    const t = tenureYears;
    const amount = principal * Math.pow(1 + r / n, n * t);
    const interest = amount - principal;
    return { interest, amount };
  }
}


/*
2896 - 5.75 - 6  - 2 - 5777 + 96
4568 - 6.00 - 9  - 1 - 7526 + 68  
6660 - 6.50 - 12 - 1 - 
8861 - 6.85 - 15 - 1 - 8861 -> 18441
*/

// Interest Calculator

// Example usage:
const principal = 100000;
const annualInterestRate = 7.5;
const tenureYears = 5;
const tenureMonths = tenureYears * 12;
const monthlyDeposit = 2000;

console.log('EMI:', BankCalculator.calculateEMI(principal, annualInterestRate, tenureMonths).toFixed(2));
console.log('Total Loan Payment:', BankCalculator.calculateTotalLoanPayment(principal, annualInterestRate, tenureMonths).toFixed(2));
console.log('Fixed Deposit Maturity:', BankCalculator.calculateFixedDeposit(principal, annualInterestRate, tenureYears, 4).toFixed(2));
console.log('Recurring Deposit Maturity:', BankCalculator.calculateRecurringDeposit(monthlyDeposit, annualInterestRate, tenureMonths).toFixed(2));
const simpleInterest = BankCalculator.calculateSimpleInterest(principal, annualInterestRate, tenureYears);
console.log('Simple Interest:', simpleInterest.interest.toFixed(2), 'Total Amount:', simpleInterest.totalAmount.toFixed(2));
const compoundInterest = BankCalculator.calculateCompoundInterest(principal, annualInterestRate, tenureYears, 4);
console.log('Compound Interest:', compoundInterest.interest.toFixed(2), 'Total Amount:', compoundInterest.amount.toFixed(2));
