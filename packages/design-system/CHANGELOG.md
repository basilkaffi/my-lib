# @basil/design-system

## 0.1.6

### Patch Changes

- add pipelin

## 0.1.5

### Patch Changes

- try to use changeset publish instead of changeset version, look if it's automatically publish to npm without needed to run npm publish
- ps: can't be done still need to run npx changeset version to bump up the version
- try npx changeset publish again
- try npm publish outside dist not working
- try npx changeset publish in dist folder not working
- if the attempt above work, there will not be another notes in this patch change section
- it doesn't seems to be working, so i am going to run npm publish inside dist folder as usual

## 0.1.4

### Patch Changes

- return postcssConfig in project.json

## 0.1.3

### Patch Changes

- third attemp: delete postcssConfig in project.json

## 0.1.2

### Patch Changes

- second try to patch tailwind by add join path specifically

## 0.1.1

### Patch Changes

- import tailwind to button component

## 0.1.0

### Minor Changes

- ## Initialize Library

  **Summary:** initialize library repo using nx, setup react-library, tailwind, storybook, create atom components button and input (unstylized), and add changesets

  ### how I do it:

  - run `npx create-nx-workspace my-lib` then choose package-based to create Nx package repo
  - add dev dependency @nrwl/react
  - generate @nrwl/react - library
  - generate @nrwl/react - setup-tailwind
  - generate @nrwl/react - storybook-configuration
  - use tailwind in storybook by creating tailwind-import.css in design-system/.storybook and import it to preview.js

    ```
    //inside tailwind-import.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

  - update project.json add `"postcssConfig": "packages/design-system/postcss.config.js"` in build options
  - add @storybook/addon-docs for mdx file by running `npm i --save-dev @storybook/addon-docs` and add it in .storybook/main.js
  - create buttton atom component by generate @nrwl/react - component
  - add changesets: run `npm i @changesets/cli --save-dev`
  - initialize changeset: run `npx changeset init`
  - adding this minor update using changeset: run `npx changeset version`
