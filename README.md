# dashboard-montacargas-server

Crear el archivo `.env` con el siguiente contenido:

```
MYSQL_ROOT_PASSWORD=$ROOT_PASSWORD
MYSQL_DATABASE="acme_db"
MYSQL_USER="acme"
MYSQL_PASSWORD=$ACME_INTERNAL_PASSWORD
```

En la carpeta `node-db-server` crear el archivo `.env` con el siguiente contenido:

```
ACME_INTERNAL_PASSWORD=$ACME_INTERNAL_PASSWORD
DB_USER="acme"
DB_NAME = "acme_db"
DB_HOST="db"
```

En la carpeta `aariadb-database` crear el archivo `.env` con el siguiente contenido:

```
MYSQL_ROOT_PASSWORD=$ROOT_PASSWORD
MYSQL_DATABASE="acme_db"
MYSQL_USER="acme"
MYSQL_PASSWORD=$ACME_INTERNAL_PASSWORD
```

Este servidor tiene el dashboard del puente grua y el servidor que se conecta a la base de datos local e incluso la base de datos. Si la base de datos se coenta, no funcionará bien porque las otras aplicaciones la referencian desde el compose.

## Atencion

cuando se instala algo nuevo con yarn o npm, se debe hacer un build de la imagen de docker para que se actualice el package.json y si no funciona, usar `docker system prune` o `docker volume prune` para limpiar los volumenes y que se vuelva a crear todo de nuevo.
