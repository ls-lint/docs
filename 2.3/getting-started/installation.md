# Installation

[[toc]]

There are several ways for you to install ls-lint without any dependencies.  
Linux, macOS & Windows support out of the box

## cURL

### Linux (amd64, arm64, s390x, ppc64le)

```bash
curl -sL -o ls-lint https://github.com/loeffel-io/ls-lint/releases/download/v2.3.1/ls-lint-linux-amd64 && chmod +x ls-lint && ./ls-lint
```

### macOS (amd64, arm64)

```bash
curl -sL -o ls-lint https://github.com/loeffel-io/ls-lint/releases/download/v2.3.1/ls-lint-darwin-arm64 && chmod +x ls-lint && ./ls-lint
```

### Windows (amd64)

Download the .exe manually
from [GitHub](https://github.com/loeffel-io/ls-lint/releases/download/v2.3.1/ls-lint-windows-amd64.exe)

```bash
ls-lint-windows-amd64.exe
```

## NPM

```bash
npm install -g @ls-lint/ls-lint@v2.3.1 # global
npm install @ls-lint/ls-lint@v2.3.1 # local
```

### Run

```bash
ls-lint # global
node_modules/.bin/ls-lint # local - use backslashs for windows
```

### NPX

```bash
npx @ls-lint/ls-lint@v2.3.1
```

## Docker

Based on [Google Distroless](https://github.com/GoogleContainerTools/distroless). The Docker image for `v2.x` is blocked
through [issue](https://github.com/bazelbuild/rules_docker/issues/1599) and will be supported soon.

```bash
docker run --rm -v /path/to/project:/data lslintorg/ls-lint:1.11.2
```

## GitHub Action

Please see the [ls-lint GitHub Action repository](https://github.com/ls-lint/action) for more informations

```yaml
- uses: actions/checkout@v4
- uses: ls-lint/action@v2
```

## Homebrew (macOS, Linux)

Does not support beta versions

ref: [Homebrew](https://formulae.brew.sh/formula/ls-lint)

```bash
brew install ls-lint
```

## Bazel

Supports macOS (arm64), Linux (amd64) and Windows (amd64)

### Build from Source

ls-lint uses [Bazel](https://bazel.build/) as primary build system.

```bash
bazel build //cmd/ls_lint:ls-lint
```

### Run from Source

```bash
bazel run //cmd/ls_lint:ls-lint -- --config ${PWD}/.ls-lint.yml --workdir ${PWD}
```
