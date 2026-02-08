export class DLCActorSheet extends ActorSheetV2 {
  static DEFAULT_OPTIONS = {
    classes: ["dlc", "sheet", "actor"],
    position: { width: 720, height: 680 },
    window: { resizable: true }
  };

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, this.DEFAULT_OPTIONS);
  }

  /** @override */
  get template() {
    return "systems/deadlands-classic/templates/actor-sheet.hbs";
  }

  /** @override */
  async getData(options = {}) {
    const data = await super.getData(options);
    // data.actor is a Document; data.system is data.actor.system in v13 sheet context.
    return data;
  }
}
