# Herrera Materiais para Construção | Fábrica de Blocos em Campinas

Domínio oficial atual: https://blocos-herrera.vercel.app

## Requisitos

- Node.js 18+
- npm

## Como rodar o projeto

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Variável de ambiente (domínio)

Este projeto usa `NEXT_PUBLIC_SITE_URL` para gerar URLs absolutas em sitemap/canonical/JSON-LD.

Em produção, configure:

```bash
NEXT_PUBLIC_SITE_URL=https://blocos-herrera.vercel.app
```

Se não estiver configurado, o fallback é `https://blocos-herrera.vercel.app`.

## Google Search Console (indexação)

### Enviar sitemap

- Abra o Search Console do seu domínio
- Vá em **Sitemaps**
- Envie: `https://blocos-herrera.vercel.app/sitemap.xml`

### Solicitar indexação da Home

- Vá em **Inspeção de URL**
- Cole: `https://blocos-herrera.vercel.app/`
- Clique em **Solicitar indexação**

### Testar robots.txt

- Acesse: `https://blocos-herrera.vercel.app/robots.txt`
- Confirme que o sitemap aponta para: `https://blocos-herrera.vercel.app/sitemap.xml`

### Testar Rich Results (dados estruturados)

- Abra: https://search.google.com/test/rich-results
- Teste uma URL, por exemplo:
  - `https://blocos-herrera.vercel.app/`
  - `https://blocos-herrera.vercel.app/cidade/campinas`
  - `https://blocos-herrera.vercel.app/produtos/bloco-estrutural-14x19x39`

### Checar indexação via busca

Use consultas como:

- `site:blocos-herrera.vercel.app`
- `site:blocos-herrera.vercel.app cidade campinas`

## Verificação do Search Console (se necessário)

O método recomendado é verificação por DNS (TXT) no provedor do domínio.

Se você optar por verificação por arquivo HTML, o Search Console vai pedir para subir um arquivo específico. Nesse caso:

- adicione o arquivo na pasta `public/` com o nome exato informado pelo Google
- faça o deploy novamente

## Checklist pós-deploy

- Domínio configurado e apontando para o deploy
- Search Console verificado
- Sitemap enviado e processado
- `robots.txt` funcionando
- Home inspecionada no Search Console
- Páginas de cidade inspecionadas
- Páginas de produto inspecionadas
- Google Business Profile atualizado (endereço, telefone, categorias)
- Avaliações solicitadas e respondidas
- Fotos atualizadas no perfil
