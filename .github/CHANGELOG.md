# ChangeLog

## [2.1.1] - 19-09-2020

- chore: upgrade to eggs@0.2.2 in CI

## [2.1.0] - 19-09-2020

- feat: support Deno 1.4.1. and std 0.70.0

## [2.0.1] - 18-08-2020

- chore: remove copy pasta image link from readme
- chore: fix nest.land registry link

## [2.0.0] - 18-08-2020

- feat: migrate to inclusive terminology

## [1.0.0] - 27-05-2020

- feat: add `guard()` method with the following features:
  - Protection against unnecessary top-level permissions.
  - Protection against missing required permissions.
  - Recommendations where permissions could be better scoped (if `log: true` provided).
  - Useful logs detailing the missing or insecure permissions (if `log: true` provided).
