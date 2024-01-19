migrate:

npx prisma migrate dev --name {migrationName}

using mysql

.env for BE:

DATABASE_URL="mysql://{username}:{password}@{host}:{port}/{DB_NAME}"
