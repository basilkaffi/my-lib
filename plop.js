module.exports = function(plop) {
    plop.setGenerator('design system', {
        description: 'design system',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name'
        },
        {
            type: 'input',
            name: 'section',
            message: 'design system section'
        }],
        actions: [
            {
                type: 'add',
                path: 'packages/design-system/src/{{section}}/{{name}}/{{pascalCase name}}.tsx',
                templateFile: 'plop-templates/Component.tsx.hbs'
            },
            {
                type: 'add',
                path: 'packages/design-system/src/{{section}}/{{name}}/{{pascalCase name}}.spec.tsx',
                templateFile: 'plop-templates/Component.spec.tsx.hbs'
            },
            {
                type: 'add',
                path: 'packages/design-system/src/{{section}}/{{name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'plop-templates/Component.stories.tsx.hbs'
            },
            {
                type: 'add',
                path: 'packages/design-system/src/{{section}}/{{name}}/{{pascalCase name}}.stories.mdx',
                templateFile: 'plop-templates/Component.stories.mdx.hbs'
            },
            {
                type: 'add',
                path: 'packages/design-system/src/{{section}}/{{name}}/index.ts',
                templateFile: 'plop-templates/index.ts.hbs'
            },
        ]
    });
};