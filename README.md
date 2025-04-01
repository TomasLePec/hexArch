# Empresas API

API REST para la gestión de empresas y transferencias utilizando arquitectura hexagonal.

## Descripción

Este proyecto implementa una API REST con arquitectura hexagonal (también conocida como puertos y adaptadores) para gestionar empresas y sus transferencias. La aplicación permite:

- Registrar nuevas empresas (adhesión)
- Consultar empresas que se adhirieron en el último mes
- Consultar empresas que realizaron transferencias en el último mes

## Arquitectura Hexagonal

La arquitectura hexagonal (o de puertos y adaptadores) permite separar claramente las responsabilidades y hacer que la lógica de negocio sea independiente de los detalles de implementación externos.

### Capas:

1. **Dominio**: Contiene las entidades de negocio y los puertos (interfaces de repositorios).
   - Entidades: Company, Transfer
   - Puertos: CompanyRepository, TransferRepository

2. **Aplicación**: Contiene los casos de uso que implementan la lógica de negocio.
   - CreateCompanyUseCase
   - GetCompaniesJoinedLastMonthUseCase
   - GetCompaniesWithTransfersLastMonthUseCase

3. **Infraestructura**: Contiene los adaptadores (implementaciones concretas).
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
