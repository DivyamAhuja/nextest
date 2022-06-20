export default {
    cms_manual_init: true,
    backend: {
        name: 'git-gateway',
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
            slug: "{{slug}}",
            fields: [
                { 
                    label: "Layout", 
                    name: "layout", 
                    widget: "hidden", 
                    default: "blog" 
                },
                {
                    label: 'Title',
                    name: 'title',
                    widget: 'string',
                },
                {
                    label: 'Body',
                    name: 'body',
                    widget: 'markdown'
                }

            ],
        },
    ],
};