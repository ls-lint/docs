# The Rules

[[toc]]

## Overview

ls-lint provides multiple rules out of the box:

| Rule               | Alias                | Description                                                                            |
|--------------------|----------------------|----------------------------------------------------------------------------------------| 
| [regex](#regex)    | -                    | Matches regex pattern: ^{pattern}$                                                     |
| [exists](#exists)  | -                    | Allow or disallow the existence of _`N`_ or _`N-M`_ files. Also works for directories. |
| lowercase          | -                    | Every letter must be lowercase<br>Ignore non letters                                   |
| camelcase          | camelCase            | String must be camelCase<br>Only letters and digits allowed                            |
| pascalcase         | PascalCase           | String must be Pascalcase<br>Only letters and digits allowed                           |
| snakecase          | snake_case           | String must be snake_case<br>Only lowercase letters, digits and `_` allowed            | 
| screamingsnakecase | SCREAMING_SNAKE_CASE | String must be snake_case<br>Only uppercase letters, digits and `_` allowed            | 
| kebabcase          | kebab-case           | String must be kebab-case<br>Only lowercase letters, digits and `-` allowed            |
| pointcase          | point.case           | String must be "point case"<br>Only lowercase letters, digits and `.` allowed          |

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

### Using multiple regex rules

Multiple regex rules are supported by the ` | ` operator

<div style="color:#A2A2A2; font-size:12px;">
    .ls-lint.yml
</div>

```yaml
ls:
  .js: regex:Schema(\_test)? | regex:Resolver(\_test)?
```

### Using multiple regex rules with [regex alternation](https://www.regular-expressions.info/alternation.html)

With regex alternation you can simplify the above example

```yaml
ls:
  .js: regex:(Schema|Resolver)(\_test)?
```

## Exists

Allow or disallow _`N`_ or _`N-M`_ files for a given file extension or wildcard extension.

Imagine you want to restrict all component subdirectories to only having one `.ts` and one `.test.ts` file:

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
    dir: exists # same as exists:1 (only 0 or 1 allowed for directories)
    .*: ...
```

and ranges:

```yaml
ls:
  .foo: exists:1-10
```