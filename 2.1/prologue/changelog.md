# Changelog

[[toc]]

## v2.1.0

Release Day: 01 Sep 2023

- Added glob support for ignore
- Updated [Go](https://go.dev) to 1.21.0

## v2.0.0 (!)

Release Day: 23 May 2023

- **Breaking changes**: the multiple rules operator `|` must now include a leading and trailing whitespace (this should not affect many users because it was always documentated like that). With this the [regex alternation](https://www.regular-expressions.info/alternation.html) is now supported! You can read more about that here: [Using multiple regex rules](/2.0/configuration/the-rules.html#using-multiple-regex-rules).
- Added `config`, `workdir` and `version` options
- Migrated the project to [Bazel](https://bazel.build)
- Migrated the project to GitHub Actions
- Updated all third party dependencies
- Updated [Go](https://go.dev) to 1.20.4