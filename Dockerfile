## Build
# docker build -t backend:0.1.0 .
# RUN
# docker run -d -p 3800:3800 -e URL_DB=postgresql://postgres:*****@72.61.1.251:8000/mybd -e PRIVATE_KEY=tu_private_key backend:0.1.0

FROM node:16-alpine

# Variables de entorno por defecto
ENV URL_DB=postgresql://postgres:0077@72.61.1.251:5300/PharmatrixDB
    SERVER_PORT=3800

# Crear directorio de la app
WORKDIR /opt/app

# Copiar package.json primero para mejor cache de Docker
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto
EXPOSE 3800

# Usar node directamente en producción
CMD [ "node", "./src/index.js" ]