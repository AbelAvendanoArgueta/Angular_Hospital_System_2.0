# Utiliza la imagen base de MySQL
FROM mysql:latest

# Definir variables de entorno para la configuración de MySQL
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=hospitaldb
ENV MYSQL_USER=admin_Hospital
ENV MYSQL_PASSWORD=admin_Hospital.@7

# Copiar scripts SQL de inicialización y archivos CSV al directorio /docker-entrypoint-initdb.d/
COPY ./init-scripts/* /docker-entrypoint-initdb.d/

# Exponer los puertos para acceder a MySQL
EXPOSE 3306
