# granted-recommend-allowlist

This example demonstrates using Permission Guard specifying the following allowed / required permissions:

- A top-level permission for `net`.

The `log` flag has been enabled for additional verbosity, and both exit flags have been passed as `true` to demonstrate how the guard prevents further code execution with it's strictest settings.

This example is to demonstrate recommendations of scoping top-level permissions by using an allowlist to make them more secure.

## Scenarios

### No errors with recommendation

```bash
deno run --unstable --allow-net ./examples/granted-recommend-allowlist/index.ts
```

When `--allow-net` is set and no additional permissions, the guard permits code execution, but it logs the following recommendation:

```console
permission-guard: warning: insecure top-level permission "--allow-net" has been provided. Consider using a scoped permission with allowlist instead "--allow-net=<allow-net>"
```
