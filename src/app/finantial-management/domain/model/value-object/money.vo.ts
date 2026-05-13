export class Money {
  constructor(
    private readonly amount: number,
    private readonly currency: string,
  ) {}

  getAmount(): number {
    return this.amount;
  }

  getCurrency(): string {
    return this.currency;
  }

  add(other: Money): Money {
    this.assertSameCurrency(other);
    return new Money(this.amount + other.getAmount(), this.currency);
  }

  subtract(other: Money): Money {
    this.assertSameCurrency(other);
    return new Money(this.amount - other.getAmount(), this.currency);
  }

  multiply(factor: number): Money {
    return new Money(this.amount * factor, this.currency);
  }

  equals(other: Money): boolean {
    return (
      other instanceof Money &&
      this.amount === other.getAmount() &&
      this.currency === other.getCurrency()
    );
  }

  private assertSameCurrency(other: Money): void {
    if (this.currency !== other.getCurrency()) {
      throw new Error(`Currency mismatch: ${this.currency} vs ${other.getCurrency()}`);
    }
  }
}

