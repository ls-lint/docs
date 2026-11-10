<FrontHeader/>
<FrontFeatures/>

<h3 style="margin-top:50px; padding-top:0; padding-bottom:10px; border-bottom: 2px solid rgba(0,0,0,0.05);">Bring some structure to your project filesystem</h3>

Manage all your file and directory names and roles in one single `.ls-lint.yml` file. An `AGENTS.md` only describes your structure, ls-lint enforces it.

<div style="color:#A2A2A2; font-size:12px; margin-top:12px;">
    Before: AGENTS.md
</div>
<div style="background:#282c34; border-radius:6px; padding:1.25rem 1.5rem; margin:0.85rem 0; color:#9da5b4; text-decoration:line-through; line-height:1.7;">
    Reusable UI elements like buttons or modals go into components<br>
    Component directories are kebab-case, e.g. components/date-picker<br>
    Tests live in components/date-picker/tests and are named like the component
</div>

<div style="color:#A2A2A2; font-size:12px; margin-top:25px">
    After: .ls-lint.yml
</div>

```yaml
roles:
  component: Reusable UI element like a button, modal or form field

ls:
  components/*:
    .dir: kebab-case | role:component
    .ts: regex:${0} # file name must be the component directory name
    tests:
      .*: exists:0 # no other files are allowed in the tests directory
      .test.ts: regex:${1} # file name must be the component directory name

  packages/*/{src,__tests__}:
    .js: kebab-case
    .ts: camelCase | PascalCase
    .d.ts: camelCase
    .spec.ts: camelCase | PascalCase
    .mock.ts: camelCase

ignore:
  - node_modules
```

<p align="center" id="footer">
    MIT Licensed | Copyright &copy; 2020 - 2026 <a target="_blank" href="https://github.com/loeffel-io">Lucas Löffel</a> | Logo by <a target="_blank" href="https://www.studio-ajot.de/">Studio Ajot</a>
</p>
