export default {
    title:'post',
    name:'post',
    type: 'document',
    fields:[
        {
            title:'title',
            name:'title',
            type:'string',
            // validation:Rule =>{
            //     Rule.required().min(10).error('title must be least 10 characters long'),
            //     Rule.required().max(50).warning("it's better to use short snappy titles")
            // }
        },
        {
            title:'Author',
            name:'author',
            type:'reference',
            to:[{type:'author'}],
            // validation: Rule => Rule.max(120).error('Author is required')

        },
        {
            title:'Excerpt',
            name:'excerpt',
            type:'text',
            // validation: Rule => Rule.max(120).error('Excerpt must be less than 120 characters long')
        },
        {
            title:'content',
            name:'content',
            type:'text',
            // validation:Rule => Rule.required().error('Body is required')
        },
        {
            title:'image',
            name:'image',
            type:'image',
            // validation:Rule => Rule.required().error('Image is required')

        }
    ]
}