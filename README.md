# What

A tool can collect other tools in the web project.

# Install

```bash
npm install @yaki/whale
```

# Usage

```js
Whale.config({
    mainLogo: './src/assets/svelte.svg',
}).createWhale({
    name: 'demo',
    desc: 'this is a demo',
    logo: './src/assets/img/cheese.svg',
    dom: a,
}).createWhale({
    name: 'test',
    desc: 'this is a test',
    logo: './src/assets/img/ice-cream.svg',
    dom: b,
});
```
