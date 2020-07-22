# The Rules

[[toc]]

## Overview

ls-lint provides multiple rules out of the box:

| Rule            | Alias       | Description                                                                    |
| --------------- | ----------- | ------------------------------------------------------------------------------ | 
| [regex](#regex) | -           | Matches regex pattern: ^{pattern}$                                             |
| lowercase       | -           | Every letter must be lowercase<br>Ignore non letters                           |
| camelcase       | camelCase   | String must be camelCase<br>Only letters and digits allowed                    |
| pascalcase      | PascalCase  | String must be Pascalcase<br>Only letters and digits allowed                   |
| snakecase       | snake_case  | String must be snake_case<br>Only lowercase letters, digits and `_` allowed    | 
| kebabcase       | kebab-case  | String must be kebab-case<br>Only lowercase letters, digits and `-` allowed    |
| pointcase       | point.case  | String must be "point case"<br>Only lowercase letters, digits and `.` allowed  |

## Regex

The regex rule provides full flexibility for your configuration and matches your file and directory names by the `^{pattern}$` pattern

### Example

<div style="color:#A2A2A2; font-size:12px; margin-top:12px;">
    .ls-lint.yml
</div>

```yaml
ls:
    .js: regex:[a-z0-9]+ # the final regex pattern will be ^[a-z0-9]+$
```

### Using multiple regex rules

Multiple regex rules are supported by the `|` operator

<div style="color:#A2A2A2; font-size:12px;">
    .ls-lint.yml
</div>

```yaml
ls:
    .js: regex:Schema(\.test)? | regex:Resolver(\.test)?
```

:::warning Using the regex alternation
In case of the `|` operator you can not use the [regex alternation](https://www.regular-expressions.info/alternation.html) in your regex patterns - Please just use the `|` operator for this cases like in the [example](#using-multiple-regex-rules) above 
:::