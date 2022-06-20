export default {
    cms_manual_init: true,
    backend: {
        name: 'github',
        repo: 'DivyamAhuja/nextest',
        branch: 'main',
    },
    media_folder: 'public/img',
    public_folder: 'img',
    collections: [
        {
            name: 'pages',
            label: 'Pages',
            folder: 'content/pages',
            create: true,
            fields: [
                {
                    label: 'Hero Title',
                    name: 'hero_title',
                    widget: 'string',
                },
                {
                    label: 'Hero Description',
                    name: 'hero_description',
                    widget: 'markdown',
                },
                {
                    label: 'Hero Image',
                    name: 'hero_image',
                    widget: 'image'
                },

            ],
        },
    ],
};