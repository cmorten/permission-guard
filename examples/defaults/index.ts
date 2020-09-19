import { guard } from "../../mod.ts";

// You can call the guard without any options and it will use the
// defaults.
await guard();

// If the guard hasn't exited, can now safely execute our code.
console.log("Code is now executing");
