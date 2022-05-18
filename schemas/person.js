export default
    {
        name: 'person',
        title: 'Person',
        type: 'document',
        fields: [
            {
                name: 'name',
                title: 'Name',
                type: 'string',
                description:'Pleae use First Last format',

            },

                {

                    name: 'slug',
                    title: 'Slug',
                    type: 'slug',
                },

            {
                name: 'location',
                title: 'Location',
                type: 'geopoint'
            },
            {
                name: 'reviews',
                title: 'Reviews',
                type: 'array',
                of: [{type: 'review'}]
            },
            {
                name: 'properties',
                title: 'Properties',
                type: 'array',
                of: [{type: 'property'}]
            },
        ],
    }