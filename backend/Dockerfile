FROM node:20-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias de compilación necesarias
RUN apk add --no-cache python3 make g++ build-base libc6-compat

# Instalar todas las dependencias (dev y prod)
RUN npm install --legacy-peer-deps

# Copiar el resto del código fuente
COPY . .

# Compilar el proyecto
RUN npm run build


FROM node:20-alpine AS runner

WORKDIR /app

# Instalar cliente PostgreSQL para usar pg_isready
RUN apk add --no-cache postgresql-client

# Copiar solo los archivos necesarios
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 4000

# Esperar hasta que Postgres esté listo antes de iniciar la app
CMD ["sh", "-c", "until pg_isready -h db -p 5432 -U controller_user; do sleep 2; done && node dist/main.js"]
