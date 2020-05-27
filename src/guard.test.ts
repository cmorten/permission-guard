import { describe, it } from "../test/utils.ts";
import { expect } from "../devDeps.ts";

/**
 * This test assumes it is called in the following way:
 * 
 * deno test --unstable --allow-run ./src/guard.withPermissions.test.ts
 * 
 * We implicitly test the guard via the examples in the ./examples/
 * directory. This is because `guard()` can call `Deno.exit(1)` which it
 * looks like we can't yet mock, and will exit our tests early.
 */

const denoRunCommandPrefix = ["deno", "run", "--unstable"];

describe("guard", () => {
  describe("when no grants are requested", () => {
    const scriptPath = "./examples/defaults/index.ts";

    describe("when no permission flags are provided", () => {
      it("should exit with status 0", async () => {
        const process = await Deno.run({
          cmd: [...denoRunCommandPrefix, scriptPath],
          stdout: "inherit",
          stderr: "inherit",
        });

        expect(await process.status()).toEqual({ code: 0, success: true });

        await process.close();
      });
    });

    describe("when a top-level permission is provided", () => {
      it("should exit with status 1", async () => {
        const process = await Deno.run({
          cmd: [
            ...denoRunCommandPrefix,
            "--allow-env",
            scriptPath,
          ],
          stdout: "inherit",
          stderr: "inherit",
        });

        expect(await process.status()).toEqual({ code: 1, success: false });

        await process.close();
      });
    });

    describe("when the insecure all permissions flag is provided", () => {
      it("should exit with status 1", async () => {
        const process = await Deno.run({
          cmd: [
            ...denoRunCommandPrefix,
            "-A",
            scriptPath,
          ],
          stdout: "inherit",
          stderr: "inherit",
        });

        expect(await process.status()).toEqual({ code: 1, success: false });

        await process.close();
      });
    });

    /**
     * Not out of choice, we simply cannot check for this atm. But at least we 
     * can ensure we don't error!
     */
    describe("when a scoped permission is provided", () => {
      it("should exit with status 0", async () => {
        const process = await Deno.run({
          cmd: [
            ...denoRunCommandPrefix,
            "--allow-read=/secret",
            scriptPath,
          ],
          stdout: "inherit",
          stderr: "inherit",
        });

        expect(await process.status()).toEqual({ code: 0, success: true });

        await process.close();
      });
    });
  });

  describe("when grants are requested", () => {
    const scriptPath = "./examples/granted-strict/index.ts";

    describe("when only the requested permission flags are provided", () => {
      it("should exit with status 0", async () => {
        const process = await Deno.run({
          cmd: [
            ...denoRunCommandPrefix,
            "--allow-env",
            "--allow-net=google.com",
            scriptPath,
          ],
          stdout: "inherit",
          stderr: "inherit",
        });

        expect(await process.status()).toEqual({ code: 0, success: true });

        await process.close();
      });
    });

    describe("when a top-level permission flag is missing", () => {
      it("should exit with status 1", async () => {
        const process = await Deno.run({
          cmd: [...denoRunCommandPrefix, "--allow-net=google.com", scriptPath],
          stdout: "inherit",
          stderr: "inherit",
        });

        expect(await process.status()).toEqual({ code: 1, success: false });

        await process.close();
      });
    });

    describe("when a scoped permission flag is missing", () => {
      it("should exit with status 1", async () => {
        const process = await Deno.run({
          cmd: [...denoRunCommandPrefix, "--allow-env", scriptPath],
          stdout: "inherit",
          stderr: "inherit",
        });

        expect(await process.status()).toEqual({ code: 1, success: false });

        await process.close();
      });
    });

    describe("when an unnecessary insecure top-level permission flag is provided", () => {
      it("should exit with status 1", async () => {
        const process = await Deno.run({
          cmd: [
            ...denoRunCommandPrefix,
            "--allow-env",
            "--allow-net=google.com",
            "--allow-write",
            scriptPath,
          ],
          stdout: "inherit",
          stderr: "inherit",
        });

        expect(await process.status()).toEqual({ code: 1, success: false });

        await process.close();
      });
    });

    describe("when the insecure all permissions flag is provided", () => {
      it("should exit with status 1", async () => {
        const process = await Deno.run({
          cmd: [
            ...denoRunCommandPrefix,
            "-A",
            scriptPath,
          ],
          stdout: "inherit",
          stderr: "inherit",
        });

        expect(await process.status()).toEqual({ code: 1, success: false });

        await process.close();
      });
    });

    /**
     * Not out of choice, we simply cannot check for this atm. But at least we 
     * can ensure we don't error!
     */
    describe("when an insecure scoped permission flag is provided", () => {
      it("should exit with status 0", async () => {
        const process = await Deno.run({
          cmd: [
            ...denoRunCommandPrefix,
            "--allow-env",
            "--allow-net=google.com",
            "--allow-write=/secret",
            scriptPath,
          ],
          stdout: "inherit",
          stderr: "inherit",
        });

        expect(await process.status()).toEqual({ code: 0, success: true });

        await process.close();
      });
    });
  });

  describe("when a top-level grant is requested and the permission supports whitelisting", () => {
    const scriptPath = "./examples/granted-recommend-whitelist/index.ts";

    it("should log a recommendation and exit with exit code 0", async () => {
      const process = await Deno.run({
        cmd: [
          ...denoRunCommandPrefix,
          "--allow-net",
          scriptPath,
        ],
        stdout: "inherit",
        stderr: "inherit",
      });

      expect(await process.status()).toEqual({ code: 0, success: true });

      await process.close();
    });
  });
});
