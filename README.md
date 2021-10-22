<FrontHeader/>
<FrontFeatures/>

<h3 style="margin-top:50px; padding-top:0; padding-bottom:10px; border-bottom: 2px solid rgba(0,0,0,0.05);">Bring some structure to your project directories</h3>

Manage all your file and directory names in one single `.ls-lint.yml` file

<div style="color:#A2A2A2; font-size:12px;">
    Example of the official <a href="https://github.com/vuejs/vue-next/blob/master/.ls-lint.yml" target="_blank">Vue.js 3</a> configuration
</div>

```yaml
ls:
  packages/*/{src,__tests__}:
    .js: kebab-case
    .ts: camelCase | PascalCase
    .d.ts: camelCase
    .spec.ts: camelCase | PascalCase
    .mock.ts: camelCase
```

<p align="center" id="footer">
    MIT Licensed | Copyright &copy; 2020 - 2021 <a target="_blank" href="https://github.com/loeffel-io">Lucas Löffel</a> | Logo by <a target="_blank" href="https://www.behance.net/AnastasiaMarx">Anastasia Marx</a>
</p>
