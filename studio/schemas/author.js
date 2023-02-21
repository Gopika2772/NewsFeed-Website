export default {
    title:'Author',
    name:'author',
    type:'document',
    fields:[
        {
            title:'full Name',
            name:'full_name',
            type:'string',
            validation: Rule => Rule.required().error('full Name is required')
        
        },
        {
            title:'short bio',
            name:'short_bio',
            type:'text'
        },
        {
            title:'Avatar',
            name:'avatar',
            type:'image',
            validation:Rule => Rule.required().error('Avatar is required')
        }
    ]
}