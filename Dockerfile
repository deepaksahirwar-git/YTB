FROM node:24-bookworm-slim

WORKDIR /app

ENV HOST=0.0.0.0
ENV NODE_ENV=production

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --prod=false

COPY . .
RUN if [ -f src/main.tsx ]; then \
      pnpm build; \
    elif [ -f dist/index.html ]; then \
      echo "Using prebuilt dist folder"; \
    else \
      echo "Missing both src/main.tsx and dist/index.html. Upload the full project contents to GitHub." && exit 1; \
    fi

EXPOSE 8787

CMD ["pnpm", "start"]
