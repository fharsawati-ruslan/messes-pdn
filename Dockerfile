FROM node:22-bookworm

WORKDIR /app

COPY package*.json ./

# Pastikan devDependencies ikut terinstall
RUN npm ci --include=dev

COPY . .

# Build AdonisJS
RUN node ace build

# Runtime
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3333

EXPOSE 3333

CMD ["node", "build/bin/server.js"]
