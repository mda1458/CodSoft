import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'content',
  title: 'Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'thumnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'pdf',
      title: 'PDF',
      type: 'file',
    })
  ],

  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
    },
    prepare({title, media}) {
      return {
        title,
        media,
      }
    }
  },
})
