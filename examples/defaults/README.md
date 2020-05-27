# defaults

This example demonstrates using `permission-guard` with the defaults:

- No granted permissions
- `exitOnMissing` set to `false` - code execution will continue despite missing a permission.
- `exitOnExtra` set to `true` - code execution will stop if unnecessary top-level permissions are requested.
- `log` set to `false` - the guard will not log errors or warnings.

## Scenarios

### No errors

```bash
deno run --unstable ./examples/defaults/index.ts
```

When no unnecessary permissions are provided, the guard permits code execution.

### Insecure top-level permission

```bash
deno run --unstable --allow-write ./examples/defaults/index.ts
```

When the additional `--allow-write` is set, the guard stops code execution due to the addition of the insecure top-level permission.

### Insecure all permissions

```bash
deno run --unstable -A ./examples/defaults/index.ts
```

When `-A` or `--allow-all` is set, the guard stops code execution due to the addition of the insecure top-level permissions.

### Insecure scoped permission

```bash
deno run --unstable --allow-write=/usr ./examples/defaults/index.ts
```

`permission-guard` is unable to act on scoped permissions such as `--allow-write=/usr` due to limitations in the Deno Permissions API. This is because there is currently no way to enumerate all permissions that have been requested.

In this example, the `--allow-write=/usr` _could_ allow for unsolicited writes to the `/usr` directory as an attack vector, should you accidentally pull a malicious third party library into your code.
