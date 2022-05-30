# Installation

[[toc]]

There are several ways for you to install ls-lint without any dependencies.  
Linux, MacOS & Windows support out of the box

## cURL

### Linux

```bash
curl -sL -o ls-lint https://github.com/loeffel-io/ls-lint/releases/download/v1.11.2/ls-lint-linux && chmod +x ls-lint && ./ls-lint
```

### MacOS

```bash
curl -sL -o ls-lint https://github.com/loeffel-io/ls-lint/releases/download/v1.11.2/ls-lint-darwin && chmod +x ls-lint && ./ls-lint
```

### Windows

Download the .exe manually from [GitHub](https://github.com/loeffel-io/ls-lint/releases/download/v1.11.2/ls-lint-windows.exe)

```bash
ls-lint-windows.exe
```

## NPM [Package](https://www.npmjs.com/package/@ls-lint/ls-lint)

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

## Docker [Image](https://hub.docker.com/r/lslintorg/ls-lint)

Based on [Google Distroless](https://github.com/GoogleContainerTools/distroless)

```bash
docker run --rm -v /path/to/project:/data lslintorg/ls-lint:1.11.2
```