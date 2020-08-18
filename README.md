<p align="center">
  <h1 align="center">Permission Guard</h1>
</p>
<p align="center">
A zero-dependency, minimal permission guard for <a href="https://deno.land/">Deno</a> to prevent overly permissive execution of your applications.</p>
<p align="center">
   <a href="https://github.com/asos-craigmorten/permission-guard/tags/"><img src="https://img.shields.io/github/tag/asos-craigmorten/permission-guard" alt="Current version" /></a>
   <img src="https://github.com/asos-craigmorten/permission-guard/workflows/Test/badge.svg" alt="Current test status" />
   <a href="https://doc.deno.land/https/deno.land/x/permission-guard/mod.ts"><img src="https://doc.deno.land/badge.svg" alt="Deno docs" /></a>
   <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs are welcome" /></a>
   <a href="https://github.com/asos-craigmorten/permission-guard/issues/"><img src="https://img.shields.io/github/issues/asos-craigmorten/permission-guard" alt="permission-guard issues" /></a>
   <img src="https://img.shields.io/github/stars/asos-craigmorten/permission-guard" alt="permission-guard stars" />
   <img src="https://img.shields.io/github/forks/asos-craigmorten/permission-guard" alt="permission-guard forks" />
   <img src="https://img.shields.io/github/license/asos-craigmorten/permission-guard" alt="permission-guard license" />
   <a href="https://GitHub.com/asos-craigmorten/permission-guard/graphs/commit-activity"><img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" alt="permission-guard is maintained" /></a>
   <a href="http://hits.dwyl.com/asos-craigmorten/permission-guard"><img src="http://hits.dwyl.com/asos-craigmorten/permission-guard.svg" alt="permission-guard repository visit count" /></a>
   <a href="https://nest.land/package/permissionGuard"><img src="https://nest.land/badge.svg" alt="Published on nest.land" /></a>
</p>

---

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Features](#features)
- [Documentation](#documentation)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

```ts
import { guard } from "https://deno.land/x/permissionGuard@2.0.1/mod.ts";

await guard();

console.log("Execute my code...!");
```

## Installation

This is a [Deno](https://deno.land/) module available to import direct from this repo and via the [Deno Registry](https://deno.land/x).

Before importing, [download and install Deno](https://deno.land/#installation).

You can then import Permission Guard straight into your project:

```ts
import { guard } from "https://deno.land/x/permissionGuard@2.0.1/mod.ts";
```

Permission Guard is also available on [nest.land](https://nest.land/package/permissionGuard), a package registry for Deno on the Blockchain.

```ts
import { guard } from "https://x.nest.land/permissionGuard@2.0.1/mod.ts";
```

> **Note:** Permission Guard makes use of the unstable Deno Permissions API which requires `--unstable` to be passed in the Deno `run` command. You can use Permission Guard in applications and not provide the `--unstable` flag, Permission Guard will simply return as a no-op and not provide any defenses.

## Features

- Protection against unnecessary top-level permissions.
- Protection against missing required permissions.
- Recommendations where permissions could be better scoped (if `log: true` provided).
- Useful logs detailing the missing or insecure permissions (if `log: true` provided).

## Documentation

- [Permission Guard Docs](https://asos-craigmorten.github.io/permission-guard/) - usually the best place when getting started ✨
- [Permission Guard Deno Docs](https://doc.deno.land/https/deno.land/x/permissionGuard/mod.ts)
- [License](https://github.com/asos-craigmorten/permission-guard/blob/main/LICENSE.md)
- [Changelog](https://github.com/asos-craigmorten/permission-guard/blob/main/.github/CHANGELOG.md)

## Examples

To run the [examples](./examples), you have two choices:

1. Clone the Permission Guard repo locally:

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

[Contributing guide](https://github.com/asos-craigmorten/permission-guard/blob/main/.github/CONTRIBUTING.md)

---

## License

Permission Guard is licensed under the [MIT License](./LICENSE.md).
