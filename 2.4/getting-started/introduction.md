# Introduction

[[toc]]

ls-lint is an extremely fast file and directory name linter.
Define your project structure as code in human-readable configuration files that you can version, reuse and share across all your projects.

You can then use one consistent workflow to lint every file and directory locally, in CI and inside your AI agents.
ls-lint covers low-level rules like naming conventions and file limits, as well as high-level roles that tell your agents where new files and directories belong.

## Key facts

- Minimal setup with simple rules managed in one single or multiple `.ls-lint.yml` files
- Works for directory and file names - all extensions supported - full unicode support
- Ready for the agentic era - optional roles and MCP server for AI agents
- Incredibly fast - lints thousands of files and directories in milliseconds
- Support for Windows, macOS and Linux + [NPM](https://www.npmjs.com/package/@ls-lint/ls-lint) + [GitHub Action](https://github.com/ls-lint/action) + [Homebrew](https://formulae.brew.sh/formula/ls-lint) + Docker
- Reliable since 2020 - trusted by open source projects from [Ansible](https://github.com/ansible/ansible-hub-ui/blob/HEAD/.ls-lint.yml), [Buildkite](https://github.com/buildkite/docs/blob/HEAD/.ls-lint.yml), [ByteDance](https://github.com/web-infra-dev/garfish/blob/HEAD/.ls-lint.yml), [Huawei](https://github.com/DevCloudFE/vue-devui/blob/HEAD/.ls-lint.yml), [Philips](https://github.com/philips-software/amp-embedded-infra-lib/blob/HEAD/.ls-lint.yml), [Red Hat](https://github.com/pulp/pulp-ui/blob/HEAD/.ls-lint.yml), [Renovate](https://github.com/renovatebot/renovate/blob/HEAD/.ls-lint.yml) and many more
- Almost zero third-party dependencies in the cli - only [go-yaml](https://github.com/yaml/go-yaml) and [doublestar](https://github.com/bmatcuk/doublestar)

## Demo

<DemoTermynal/>
