# The Basics

[[toc]]

## Creating configuration

Your ls-lint configuration must be located in a `.ls-lint.yml` file in your project **root** directory and provides two options:

<div style="color:#A2A2A2; font-size:12px;">
    .ls-lint.yml
</div>

```yaml
ls: 
    ... 

ignore: 
    ...
```

`ls` defines the structure of your project directories with all their rules for your extensions, sub-extensions and directories while `ignore` can ignore some of these files and directories completely

## Extensions & sub-extensions

You might ask yourself - what the hell are sub-extensions? ls-lint describes file extensions like `.js` or `.html` as extensions while `.d.ts`, `.umd.js` or `.local.build.js` file extensions are described as sub-extensions.

## Global configuration

A global configuration for your project is optional but could be the best solution. Imagine you want to define that **all** of your `.js`, `.ts` and `.d.ts` project files must be named in the `kebab-case` style but you want to ignore your `.git` and `node_modules` directories - this can be solved like this:

<div style="color:#A2A2A2; font-size:12px;">
    .ls-lint.yml
</div>

```yaml
ls:
    .js: kebab-case
    .ts: kebab-case
    .d.ts: kebab-case

ignore: 
    - .git 
    - node_modules
```

Pretty easy, isn`t it? 

:::tip Rules Rules Rules
Don`t worry, there are many more rules to use: [All rules](/1.x/configuration/the-rules.md)
:::

## Linting directory names

You also can define rules for directories by the `.dir` definition

```yaml
ls:
    packages/src:
        .dir: kebab-case # applies for the current directory and all their subdirectories
        .js: kebab-case
```

## Using multiple rules

Sometimes you need to accept multiple rules for a single file extension - This can be easily solved by the `|` operator:

<div style="color:#A2A2A2; font-size:12px;">
    .ls-lint.yml
</div>

```yaml
ls:
    .js: kebab-case | camelCase | PascalCase
```

## Different rules for different directories

Pretty often there are different rules for different directories or you just want to define rules only for some specific directories:

<div style="color:#A2A2A2; font-size:12px;">
    .ls-lint.yml
</div>

```yaml
ls:
    .js: kebab-case

    models:
        .js: PascalCase

    src/templates:
        .js: snake_case
```

:::warning Keep in mind
Directory configurations like `models` or `src/templates` will override **all** rules for the current directory and all their subdirectories
:::

## Using directory patterns

Directory patterns are available for `ls` configurations but not yet for `ignore` configurations.

### The glob pattern

The glob pattern `*` or `**` can be used for all of your **ls** directory configurations:

<div style="color:#A2A2A2; font-size:12px;">
    .ls-lint.yml
</div>

```yaml
ls:
    packages/*/src: # matches any sequence of non-path-separators
        .js: kebab-case

    packages/**/templates: # matches any sequence of characters, including path separators
        .html: kebab-case
```

### The alternative pattern

The alternative pattern can be used for all of your **ls** directory configurations:

<div style="color:#A2A2A2; font-size:12px;">
    .ls-lint.yml
</div>

```yaml
ls:
    packages/*/{src,tests}: # matches a sequence of characters if one of the comma-separated alternatives matches
        .js: kebab-case
```
