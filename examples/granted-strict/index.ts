import { guard, NET, ENV } from "../../mod.ts";

// You can pass both `Deno.PermissionDescriptor` or `Deno.PermissionName`
// to the guard. You will need to use a `Deno.PermissionDescriptor` if you
// wish to grant a scoped permission.
await guard(
  {
    granted: [{ name: NET, url: "http://google.com" }, ENV],
    log: true,
    exitOnExtra: true,
    exitOnMissing: true,
  },
);

// If the guard hasn't exited, can now safely execute our code.
console.log("Code is now executing");
