# The command line interface (CLI)

[[toc]]

## Run the CLI

```bash
ls-lint [options] [file|dir]*
```

### Options

ls-lint provides multiple CLI options out of the box:

| Option                                | Description                                                    |
|---------------------------------------|----------------------------------------------------------------| 
| [--config](#extending-configurations) | ls-lint config file path(s)                                    |
| --workdir                             | change working directory before executing the given subcommand |
| --error-output-format                 | use a specific error output format (text, json)                |
| --debug                               | write debug informations to stdout                             |
| --warn                                | write lint errors to stdout instead of stderr (exit 0)         |
| --version                             | prints version information for ls-lint                         |

:::tip Help
`ls-lint --help` shows up all available options
:::

### Extending configurations

The `--config` option provides a way to specify a custom path for your ls-lint configuration yml or yaml file:

```bash
ls-lint --config .ls-lint.(yml|yaml)
```

You can specify _`N`_ `--config` options than can be merged together.

Imagine you want to have one global configuration for your company, but still want to have a configuration in your
repository that can override or extend your base company configuration:

```yaml
# company .ls-lint.yml base configuration

ls:
  .go: snake_case
  .js: kebab-case
  .ts: kebab-case

ignore:
  - node_modules
```

```yaml
# repository .ls-lint.yml configuration

ls:
  components:
    .vue: kebab-case
```

A good approach for sharing your company `.ls-lint.yml` base configuration would be a designated GitHub repository or
NPM package.

With that being said, it's now possible to run ls-lint with a combination of both of your .ls-lint.yml configuration
files:

```bash
ls-lint --config node_modules/@your-company/ls-lint-global-config/.ls-lint.yml --config .ls-lint.yml
```
