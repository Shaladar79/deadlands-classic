export class DLCItemSheet extends ItemSheetV2 {
  static DEFAULT_OPTIONS = {
    classes: ["dlc", "sheet", "item"],
    position: { width: 560, height: 520 },
    window: { resizable: true }
  };

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, this.DEFAULT_OPTIONS);
  }

  /** @override */
  get template() {
    return "systems/deadlands-classic/templates/item-sheet.hbs";
  }

  /** @override */
  async getData(options = {}) {
    const data = await super.getData(options);
    return data;
  }
}
