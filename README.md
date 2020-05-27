# permission-guard

A zero-dependency, minimal permission guard for [Deno](https://deno.land/) to prevent overly permissive execution of your applications.

![Test](https://github.com/asos-craigmorten/permission-guard/workflows/Test/badge.svg) [![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/permissionGuard/mod.ts) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![](https://img.shields.io/github/issues/asos-craigmorten/permission-guard)](https://img.shields.io/github/issues/asos-craigmorten/permission-guard) 
![](https://img.shields.io/github/stars/asos-craigmorten/permission-guard) ![](https://img.shields.io/github/forks/asos-craigmorten/permission-guard) ![](https://img.shields.io/github/license/asos-craigmorten/permission-guard) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/asos-craigmorten/permission-guard/graphs/commit-activity) [![HitCount](http://hits.dwyl.com/asos-craigmorten/permission-guard.svg)](http://hits.dwyl.com/asos-craigmorten/permission-guard)

```ts
import { guard } from "https://deno.land/x/permissionGuard@master/mod.ts";

await guard();

console.log("Execute my code...!");
```

## Installation

This is a [Deno](https://deno.land/) module available to import direct from this repo and via the [Deno Registry](https://deno.land/x).

Before importing, [download and install Deno](https://deno.land/#installation).

You can then import `permission-guard` straight into your project:

```ts
import { guard } from "https://deno.land/x/permissionGuard@master/mod.ts";
```

If you want to use a specific version of `permission-guard`, just modify the import url to contain the version:

```ts
import { guard } from "https://deno.land/x/permissionGuard@1.0.0/mod.ts";
```

Or if you want to use a specific commit of `permission-guard`, just modify the import url to contain the commit hash:

```ts
import { guard } from "https://deno.land/x/permissionGuard@22f4cc3/mod.ts";
```

> **Note:** `permission-guard` makes use of the unstable Deno Permissions API which requires `--unstable` to be passed in the Deno `run` command. You can use `permission-guard` in applications and not provide the `--unstable` flag, `permission-guard` will simply return as a no-op and not provide any defenses.

## Features

- Protection against unnecessary top-level permissions.
- Protection against missing required permissions.
- Recommendations where permissions could be better scoped (if `log: true` provided).
- Useful logs detailing the missing or insecure permissions (if `log: true` provided).

## Docs

- [Docs](https://asos-craigmorten.github.io/permission-guard/) - usually the best place when getting started ✨
- [Deno Docs](https://doc.deno.land/https/deno.land/x/permissionGuard/mod.ts)
- [License](https://github.com/asos-craigmorten/permission-guard/blob/master/LICENSE.md)
- [Changelog](https://github.com/asos-craigmorten/permission-guard/blob/master/.github/CHANGELOG.md)

## Examples

To run the [examples](./examples), you have two choices:

1. Clone the `permission-guard` repo locally:

   ```bash
   git clone git://github.com/asos-craigmorten/permission-guard.git --depth 1
   cd permission-guard
   ```

   Then run the example you want:

   ```bash
   deno run --unstable ./examples/defaults/index.ts
   ```

All the [examples](./examples) contain example commands in their READMEs to help get you started.

## Contributing

[Contributing guide](https://github.com/asos-craigmorten/permission-guard/blob/master/.github/CONTRIBUTING.md)

## Developing

### Run Tests

```bash
make test
```

### Format Code

```bash
make fmt
```

### Generate Documentation

```bash
make typedoc
```
