# @basil/design-system

## 0.1.0

### Minor Changes

- ## Initialize Library

  **Summary:** initialize library repo using nx, setup react-library, tailwind, storybook, create atom components button and input (unstylized)

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
