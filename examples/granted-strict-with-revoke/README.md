# granted-strict-with-revoke

This example demonstrates using Permission Guard specifying the following allowed / required permissions:

- A top-level permission for `env`
- A scoped permission for `net` scoped to the domain `http://google.com`

The `revoke` flag has been enabled to remove any provided permissions that are not passed in the granted list, and both exit flags have been passed as `true`.

The `log` flag has been enabled for additional verbosity.

## Scenarios

### No errors

```bash
deno run --unstable --allow-env --allow-net=google.com ./examples/granted-strict-with-revoke/index.ts
```

When both `--allow-env` and `--allow-net=google.com` are set and no additional permissions, the guard permits code execution.

### Missing top-level permission

```bash
deno run --unstable --allow-net=google.com ./examples/granted-strict-with-revoke/index.ts
```

When only `--allow-net=google.com` is set and no additional permissions, the guard stops code execution due to the missing `env` permission with the following logs:

```console
permission-guard: warning: missing permission "--allow-env"
permission-guard: exiting due to missing required permissions
```

### Missing scoped permission

```bash
deno run --unstable --allow-env ./examples/granted-strict-with-revoke/index.ts
```

When only `--allow-env` is set and no additional permissions, the guard stops code execution due to the missing `net` permission with the following logs:

```console
permission-guard: warning: missing permission "--allow-net=google.com"
permission-guard: exiting due to missing required permissions
```

### Ungranted permissions

```bash
deno run --unstable --allow-env --allow-net=google.com --allow-write=./ --allow-run ./examples/granted-strict-with-revoke/index.ts
```

When the additional `--allow-write=./` and `--allow-run` are set, the guard revokes the ungranted permissions and permits code execution.

```bash
deno run --unstable --allow-env --allow-net=google.com,bad.com ./examples/granted-strict-with-revoke/index.ts
```

Permission Guard is unable to act on additional scoped permissions such as `--allow-net=google.com,bad.com` due to limitations in the Deno Permissions API. This is because there is currently no way to enumerate all scoped permissions that have been requested.

### Insecure all permissions

```bash
deno run --unstable -A ./examples/granted-strict-with-revoke/index.ts
```

When `-A` or `--allow-all` is set, the guard stops code execution due to the `--allow-net` insecure top-level permission being set when a scoped permission is required. If `exitOnExtra` were set to `false` then the guard would have permitted code execution.

We see the following logs:

```console
permission-guard: error: insecure top-level permission "--allow-net" has been provided
permission-guard: exiting due to insecure top-level permissions
```
