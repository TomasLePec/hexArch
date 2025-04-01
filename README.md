# Empresas API

Challenge para puesto backend. API REST para la gestión de empresas y transferencias utilizando arquitectura hexagonal.

## Descripción

Este proyecto implementa una API REST con arquitectura hexagonal para gestionar empresas y sus transferencias. La aplicación permite:

- Registrar nuevas empresas
- Consultar empresas que se adhirieron en el último mes
- Consultar empresas que realizaron transferencias en el último mes

## Arquitectura

El proyecto esta dividido de la siguiente manera.

### Capas:

1. **Dominio**:
   - Entidades: Company, Transfer
   - Puertos: CompanyRepository, TransferRepository

2. **Aplicación**:
   - CreateCompanyUseCase
   - GetCompaniesJoinedLastMonthUseCase
   - GetCompaniesWithTransfersLastMonthUseCase

3. **Infraestructura**:
   - Adaptadores de persistencia: MongoDBCompanyRepository
   - Adaptadores de entrada: CompanyController, rutas Express

## Tecnologías Utilizadas

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose

## Instalación

1. **Clonar el repositorio**:
 git clone https://github.com/TomasLePec/hexArch.git
 cd hexArch 

2. **Instalar dependencias**:
npm install

3. **Correr en DEV**:
npm run dev

4. **Buildear y correr**:

npm run build
npm run start

## Variables de entorno:

PORT=
MONGODB_URI=
