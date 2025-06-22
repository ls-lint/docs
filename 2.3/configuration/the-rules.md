# The Rules

[[toc]]

## Overview

ls-lint provides multiple rules out of the box:

| Rule               | Alias                | Description                                                                            |
| ------------------ | -------------------- | -------------------------------------------------------------------------------------- |
| lowercase          | -                    | Every letter must be lowercase<br>Ignore non letters                                   |
| camelcase          | camelCase            | String must be camelCase<br>Only letters and digits allowed                            |
| pascalcase         | PascalCase           | String must be Pascalcase<br>Only letters and digits allowed                           |
| snakecase          | snake_case           | String must be snake*case<br>Only lowercase letters, digits and `*` allowed            |
| screamingsnakecase | SCREAMING_SNAKE_CASE | String must be snake*case<br>Only uppercase letters, digits and `*` allowed            |
| kebabcase          | kebab-case           | String must be kebab-case<br>Only lowercase letters, digits and `-` allowed            |
| [regex](#regex)    | -                    | Matches regex pattern: ^{pattern}$                                                     |
| [exists](#exists)  | -                    | Allow or disallow the existence of _`N`_ or _`N-M`_ files. Also works for directories. |

## Regex

The regex rule provides full flexibility for your configuration and matches your file and directory names by
the `^{pattern}$` pattern

### Example

<div style="color:#A2A2A2; font-size:12px; margin-top:12px;">
    .ls-lint.yml
</div>

```yaml
ls:
  .js: regex:[a-z0-9]+ # the final regex pattern will be ^[a-z0-9]+$
```

### Negation

You can negate the regex rule by adding a `!` prefix

<div style="color:#A2A2A2; font-size:12px; margin-top:12px;">
    .ls-lint.yml
</div>

```yaml
ls:
  .js: regex:![0-9]+ # the final regex pattern will be ^[0-9]+$
```

### Using multiple regex rules

Multiple regex rules are supported by the `|` operator

<div style="color:#A2A2A2; font-size:12px;">
    .ls-lint.yml
</div>

```yaml
ls:
  .js: regex:Schema(\_test)? | regex:Resolver(\_test)?
```

### Using multiple regex rules with [regex alternation](https://www.regular-expressions.info/alternation.html)

With regex alternation, you can simplify the above example

```yaml
ls:
  .js: regex:(Schema|Resolver)(\_test)?
```

### Directory substitutions

The regex rule exposes the directory tree as substitution variables that can be referenced in the regex pattern.
For instance, you can use `${0}` to substitute the parent directory, `${1}` for the parent parent, and so on.

<div style="color:#A2A2A2; font-size:12px; margin-top:12px;">
    Directory tree
</div>

```text
components
└── button
    ├── button.ts
    └── tests
        └── button.test.ts
```

<div style="color:#A2A2A2; font-size:12px; margin-top:12px;">
    .ls-lint.yml
</div>

```yaml
ls:
  components/*: # e.g.: components/button
    .ts: regex:${0} # e.g.: components/button/button.ts
    .*.scss: regex:${0} # e.g.: components/button/button.module.scss

    tests:
      .test.ts: regex:${1} # e.g.: components/button/tests/button.test.ts
```

## Exists

Allow or disallow _`N`_ or _`N-M`_ files for a given extension. The exists rule only applies to the directory itself, not to subdirectories.

Imagine you want to restrict all component directories to only having one `.ts` and one `.test.ts` file:

```yaml
ls:
  components/*:
    .dir: kebab-case
    .*: exists:0
    .ts: kebab-case | exists:1
    .test.ts: kebab-case | exists:1
```

`exists` also works for directories:

```yaml
ls:
  components/{auth,account}:
    .dir: exists:1
    .*: ...

    "*":
      .dir: exists:0 # no subdirectories allowed
```

and ranges:

```yaml
ls:
  .js: exists:1-10
```
