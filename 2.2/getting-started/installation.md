# Installation

[[toc]]

There are several ways for you to install ls-lint without any dependencies.  
Linux, MacOS & Windows support out of the box

## cURL

### Linux (amd64, arm64, s390x)

```bash
curl -sL -o ls-lint https://github.com/loeffel-io/ls-lint/releases/download/v2.2.2/ls-lint-linux-amd64 && chmod +x ls-lint && ./ls-lint
```

### MacOS (amd64, arm64)

```bash
curl -sL -o ls-lint https://github.com/loeffel-io/ls-lint/releases/download/v2.2.2/ls-lint-darwin-arm64 && chmod +x ls-lint && ./ls-lint
```

### Windows (amd64)

Download the .exe manually from [GitHub](https://github.com/loeffel-io/ls-lint/releases/download/v2.2.2/ls-lint-windows-amd64.exe)

```bash
ls-lint-windows-amd64.exe
```

## NPM

```bash
npm install -g @ls-lint/ls-lint # global
npm install @ls-lint/ls-lint # local
```

### Run

```bash
ls-lint # global
node_modules/.bin/ls-lint # local - use backslashs for windows
```

### NPX

```bash
npx @ls-lint/ls-lint
```

## Docker

Based on [Google Distroless](https://github.com/GoogleContainerTools/distroless). The Docker image for `v2.x` is blocked through [issue](https://github.com/bazelbuild/rules_docker/issues/1599) and will be supported soon.

```bash
docker run --rm -v /path/to/project:/data lslintorg/ls-lint:1.11.2
```

## GitHub Action

Please see the [ls-lint github action repository](https://github.com/ls-lint/action) for more informations

```yaml
- uses: actions/checkout@v4
- uses: ls-lint/action@v2.2.2
```

## Build from source

```bash
bazel build //cmd/ls_lint:ls-lint
```