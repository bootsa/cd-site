import {format} from 'date-fns'

export default {
  name: 'toast',
  type: 'document',
  title: 'Toast',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the toast',
      options: {
        source: 'title',
        maxLength: 96
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare ({title = 'No title', slug}) {
      const path = `/${slug.current}/`
      return {
        title,
        subtitle: path
      }
    }
  }
}
