export class DLCActor extends Actor {
  /** @override */
  prepareDerivedData() {
    super.prepareDerivedData();

    const system = this.system ?? {};
    const res = system.resources ?? {};

    // Placeholder derived maxima (we will replace with Classic rules later)
    // Keep safe defaults so sheets don't show NaN.
    if (res.wounds) res.wounds.max = Number.isFinite(res.wounds.max) ? res.wounds.max : 0;
    if (res.wind) res.wind.max = Number.isFinite(res.wind.max) ? res.wind.max : 0;
  }
}
