# Sanity CMS Schema

Este diretório contém os schemas do Sanity CMS para o projeto Mandora.

## Schemas Definidos

### Game Schema
Define a estrutura de dados para os jogos:
- `title`: Título do jogo
- `slug`: Slug único para URLs
- `shortDescription`: Descrição curta
- `coverImage`: Imagem de capa
- `screenshots`: Array de screenshots
- `releaseDate`: Data de lançamento
- `steamLink`: Link para Steam (opcional)
- `itchLink`: Link para itch.io (opcional)

### Member Schema
Define a estrutura de dados para membros da equipe:
- `name`: Nome do membro
- `role`: Cargo/função
- `photo`: Foto do membro
- `socialLink`: Link para rede social

## Como Usar

Para usar esses schemas no Sanity Studio, você precisará:

1. Instalar o Sanity Studio:
```bash
npm install -g @sanity/cli
sanity init
```

2. Copiar o arquivo `schema.ts` para o diretório do seu Sanity Studio

3. Importar e usar os schemas no arquivo `schema/index.ts` do Sanity Studio:
```typescript
import { gameSchema, memberSchema } from './schema';

export const schemaTypes = [gameSchema, memberSchema];
```

## Variáveis de Ambiente

Certifique-se de configurar as seguintes variáveis no arquivo `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```
