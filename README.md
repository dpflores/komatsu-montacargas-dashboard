# dashboard-montacargas-server

Crear el archivo `.env` con el siguiente contenido:

```
MYSQL_ROOT_PASSWORD=$ROOT_PASSWORD
MYSQL_DATABASE="acme_db"
MYSQL_USER="acme"
MYSQL_PASSWORD=$ACME_INTERNAL_PASSWORD
```

### IMPORTANT

Para el deploy e un gateway en ./client desde una computadora con compilador ejecutar

```
yarn build

```

Luego hacer pull al repositorio y ejecutar

```
docker-compose up --build
```
