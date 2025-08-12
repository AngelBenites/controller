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

# Copiar sólo los archivos necesarios para correr la app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Puerto que expone la app
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["node", "dist/main.js"]
