import { DLC } from "./config.mjs";
import { DLCActor } from "./documents/actor.mjs";
import { DLCItem } from "./documents/item.mjs";
import { DLCActorSheet } from "./sheets/actor-sheet.mjs";
import { DLCItemSheet } from "./sheets/item-sheet.mjs";

Hooks.once("init", () => {
  console.log(`${DLC.SYSTEM_NAME} | Initializing`);

  // Register document classes
  CONFIG.Actor.documentClass = DLCActor;
  CONFIG.Item.documentClass = DLCItem;

  // Unregister core sheets and register ours
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet(DLC.SYSTEM_ID, DLCActorSheet, { makeDefault: true });

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet(DLC.SYSTEM_ID, DLCItemSheet, { makeDefault: true });

  // Optional: expose a config namespace for debugging
  game[DLC.SYSTEM_ID] = { DLC };
});

Hooks.once("ready", () => {
  console.log(`${DLC.SYSTEM_NAME} | Ready`);
});
