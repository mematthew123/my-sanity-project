export default{

    name:'property',
    title:'Property',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Title',
            type:'string'
        },


        {
            name:'location',
            title:'Location',
            type:'geopoint'
        },

        {
            name:'propertyType',
            title:'Property Type',
            type:'string',
            options:{

                list: [
                    {title: 'House', value: 'house'},
                    {title: 'Apartment', value: 'apartment'},
                    {title: 'Townhouse', value: 'townhouse'},
                    {title: 'Condo', value: 'condo'},
                    {title: 'Duplex', value: 'duplex'},
                    {title: 'Other', value: 'other'}
                ],
                layout: 'radio'
            }
        },

        {
            name:'mainImage',
            title:'Main image',
            type:'image',
            options:{
                hotspot: true
            }
        },

        // Need to add a field for the property type
        {
            name:'images',
            title:'Images',
            type:'array',
            of: [{type: 'propertyImage'}]

        },

        {
            name:'pricePerNight',
            title:'Price per night',
            type:'number'
        },
        {
            name:'beds',
            title:'Beds',
            type:'number'
        },

        {
            name:'bedrooms',
            title:'Bedrooms',
            type:'number'
        },

        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source: 'title',
                maxLength: 96,

        },
        },

        {
            name:'id',
            title:'ID',
            type:'number',
        },

        // {
        //     name:'host',
        //     title:'host',
        //     type:'host',
        // },

        {
            name:'reviews',
            title:'Reviews',
            type:'array',
            of: [{type: 'review'}]
        },
    

      
    


        


    ]


}