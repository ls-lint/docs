# Changelog

[[toc]]

## v1.9.0

Release Day: 02 Jul 2020

- Added path separator replacement: you can now use `/` on any os instead of e.g. using `\` for windows machines in your .ls-lint.yml file

## v1.8.0

Release Day: 18 Mar 2020

- Added glob support: you can now use `packages/**` or `packages/*/src`

## v1.7.0

Release Day: 17 Mar 2020

- Rules improved: more tests, more flexibility, digits allowed

## v1.6.0 (!)

Release Day: 17 Mar 2020

:::warning Breaking changes
This version could break your current `.ls-lint.yml` configuration
:::

- Rules are not longer logicly **and** combined - now they are logicly **or** combined by `|`

## v1.5.0

Release Day: 13 Mar 2020

- Npm packages `ls-lint-darwin` and `ls-lint-linux` are not longer supported. Please use [@ls-lint/ls-lint](https://www.npmjs.com/package/@ls-lint/ls-lint) instead for linux, macOS and windows support