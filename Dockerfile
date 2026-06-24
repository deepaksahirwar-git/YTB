FROM node:24-bookworm-slim

WORKDIR /app

ENV HOST=0.0.0.0
ENV NODE_ENV=production

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --prod=false

COPY . .
RUN pnpm build

EXPOSE 8787

CMD ["pnpm", "start"]
