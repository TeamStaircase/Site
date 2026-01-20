/**
 * Schemas do Sanity CMS para o projeto Mandora
 * 
 * NOTA: Este arquivo requer o pacote 'sanity' ou '@sanity/schema' para funcionar.
 * Ele é usado no Sanity Studio para definir a estrutura dos documentos.
 * 
 * Para usar este schema:
 * 1. Instale o Sanity Studio: npm install -g @sanity/cli
 * 2. Execute: sanity init
 * 3. Copie este arquivo para o diretório do Sanity Studio
 * 4. Importe e use no schema/index.ts do Studio
 */

// @ts-ignore - Este import requer o pacote 'sanity' que é instalado com o Sanity Studio
import { defineField, defineType } from "sanity";

export const gameSchema = defineType({
  name: "game",
  title: "Game",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "releaseDate",
      title: "Release Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "steamLink",
      title: "Steam Link",
      type: "url",
    }),
    defineField({
      name: "itchLink",
      title: "itch.io Link",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
  },
});

export const memberSchema = defineType({
  name: "member",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "socialLink",
      title: "Social Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "photo",
    },
  },
});
