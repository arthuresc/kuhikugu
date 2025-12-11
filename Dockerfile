# Stage de build (leve, usa alpine)
FROM node:20-alpine AS builder
WORKDIR /app
# ENV NODE_ENV=production

# instala dependências usando cache de camadas
COPY package*.json ./
RUN npm ci --silent --include=dev

# copia fonte e gera build estático
COPY . .
RUN npm run buildTest

# Stage final: servidor nginx leve para servir assets estáticos
FROM nginx:alpine
# remove config default e copia a nossa
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080:80
CMD ["nginx", "-g", "daemon off;"]