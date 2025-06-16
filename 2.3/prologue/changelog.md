# Changelog

[[toc]]

## v2.3.0 (!)

Release Day: July 2024

Please see the blog post for more information: [ls-lint v2.3.0](/blog/announcements/v2.3.0)  
Breaking change: removed pointcase rule

## v2.2.0 (!)

Release Day: 13 Sep 2023

- Added support for multiple extending configurations `--config .ls-lint-1.yml --config .ls-lint-2.yml` (`.ls-lint-2.yml` will overwrite or extend `.ls-lint-1.yml` values)
- Added support for overwriting glob matched directories (this can break some invalid configurations - please use the `--debug` option for debugging)
- New `--debug` output with added support for the final computed `ls` and `ignore` index and statistics

```bash
=============================
ls index
-----------------------------
.: .go: snakecase .dir: snakecase .bzl: snakecase .sh: snakecase .bazel: screamingsnakecase .yaml: snakecase .js: snakecase
src/test: .js: screamingsnakecase .html: regex:[a-z0-9]+
src/go: .go: pascalcase
-----------------------------
ignore index
-----------------------------
.git
.idea
bazel-ge
deployments/npm/pnpm-lock.yaml
bazel-out
bazel-testlogs
.github
bazel-ls-lint
genhtml
bazel-bin
-----------------------------
lint
-----------------------------
lint dir: .
lint file: .bazelrc
lint file: .bazelversion
skip dir: .git
skip dir: .github
lint file: .gitignore
skip dir: .idea
lint file: .ls-lint-2.yml
lint file: .ls-lint.yml
lint file: BUILD.bazel
lint file: LICENSE
lint file: README.md
lint file: WORKSPACE
lint dir: assets
lint dir: assets/logo
lint file: assets/logo/ls-lint.png
skip file: bazel-bin
skip file: bazel-ls-lint
skip file: bazel-out
skip file: bazel-testlogs
lint dir: cmd
lint dir: cmd/ls_lint
lint file: cmd/ls_lint/BUILD.bazel
lint file: cmd/ls_lint/main.go
lint file: cmd/ls_lint/target.bzl
...
-----------------------------
statistics
-----------------------------
time: 1 ms
files: 61
file skips: 5
dirs: 24
dir skips: 3
=============================
```

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

