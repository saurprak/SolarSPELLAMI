create database "odk_prod";
create user "postgres" with unencrypted password 'postgres';
grant all privileges on database "odk_prod" to "postgres";
alter database "odk_prod" owner to "postgres";
\c "odk_prod";
create schema "odk_prod";
grant all privileges on schema "odk_prod" to "postgres";
alter schema "odk_prod" owner to "postgres";
