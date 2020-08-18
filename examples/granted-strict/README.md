# granted-strict

This example demonstrates using Permission Guard specifying the following allowed / required permissions:

- A top-level permission for `env`
- A scoped permission for `net` scoped to the domain `http://google.com`

The `log` flag has been enabled for additional verbosity, and both exit flags have been passed as `true` to demonstrate how the guard prevents further code execution with it's strictest settings.

## Scenarios

### No errors

```bash
deno run --unstable --allow-env --allow-net=google.com ./examples/granted-strict/index.ts
```

When both `--allow-env` and `--allow-net=google.com` are set and no additional permissions, the guard permits code execution.

### Missing top-level permission

```bash
deno run --unstable --allow-net=google.com ./examples/granted-strict/index.ts
```

When only `--allow-net=google.com` is set and no additional permissions, the guard stops code execution due to the missing `env` permission with the following logs:

```console
permission-guard: warning: missing permission "--allow-env"
permission-guard: exiting due to missing required permissions
```

### Missing scoped permission

```bash
deno run --unstable --allow-env ./examples/granted-strict/index.ts
```

When only `--allow-env` is set and no additional permissions, the guard stops code execution due to the missing `net` permission with the following logs:

```console
permission-guard: warning: missing permission "--allow-net=google.com"
permission-guard: exiting due to missing required permissions
```

### Insecure top-level permission

```bash
deno run --unstable --allow-env --allow-net=google.com --allow-write ./examples/granted-strict/index.ts
```

When the additional `--allow-write` is set, the guard stops code execution due to the addition of the insecure top-level permission with the following logs:

```console
permission-guard: error: insecure top-level permission "--allow-write" has been provided
permission-guard: exiting due to insecure top-level permissions
```

### Insecure all permissions

```bash
deno run --unstable -A ./examples/granted-strict/index.ts
```

When `-A` or `--allow-all` is set, the guard stops code execution due to the addition of the insecure top-level permissions with the following logs:

```console
permission-guard: error: insecure top-level permission "--allow-run" has been provided
permission-guard: error: insecure top-level permission "--allow-read" has been provided
permission-guard: error: insecure top-level permission "--allow-write" has been provided
permission-guard: error: insecure top-level permission "--allow-plugin" has been provided
permission-guard: error: insecure top-level permission "--allow-hrtime" has been provided
permission-guard: exiting due to insecure top-level permissions
```

### Insecure scoped permission

```bash
deno run --unstable --allow-env --allow-net=google.com --allow-write=/usr ./examples/granted-strict/index.ts
```

Permission Guard is unable to act on scoped permissions such as `--allow-write=/usr` due to limitations in the Deno Permissions API. This is because there is currently no way to enumerate all permissions that have been requested.

In this example, the `--allow-write=/usr` _could_ allow for unsolicited writes to the `/usr` directory as an attack vector, should you accidentally pull a malicious third party library into your code.
