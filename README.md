# Trabajo Final - QA Automatización Santex

## Descripción
Este proyecto corresponde al trabajo final del curso de **QA Automatización** brindado por Santex. Consiste en la automatización de pruebas funcionales utilizando **Cypress** para validar la calidad de la aplicación web [**Saucedemo**](https://www.saucedemo.com). El objetivo principal es verificar la funcionalidad de los módulos principales del sitio, como login, compras y pagos con diferentes roles.

## Objetivo
El objetivo del proyecto es implementar pruebas automatizadas que permitan consolidar los conocimientos adquiridos a lo largo del curso. Para ello se automatizará:

- El módulo **Login** con distintos tipos de usuarios y combinaciones de credenciales.
- El flujo de **Compras** desde el agregado de productos al carrito hasta el checkout.
- Y el módulo de pagos.

## Plan de Pruebas

Los casos de pruebas diseñados para el trabajo final se encuentran detallados en el siguiente plan de pruebas:

- [**Plan de pruebas Saucedemo**](https://docs.google.com/spreadsheets/d/1ldvy_7QHPnqOeuWTdIDTVgAIwS0kMFyH/edit?pli=1&gid=667922442#gid=667922442)

El reporte de incidencias y la organización se pueden obtener en el siguiente tablero:

 - [**Tablero**](https://trello.com/invite/b/67520bb971f5024007b5ef19/ATTI353614252c63d8147e54a298719c7805F93398EE/test-qa)

## Herramientas Utilizadas

- **Cypress**: Herramienta principal para la automatización de pruebas E2E.
- **Node.js**: Entorno de ejecución de JavaScript.
- **VS Code**: Editor de código.
- **Git**: Control de versiones.
- **JSON**: Estructura de datos para manejo de credenciales y configuraciones.
- **Trello**: Reporte de incidencias.
- **Excel**: Plan de prueba.

### Descripción de Carpetas y Archivos

- **e2e/login/**: Contiene las pruebas del módulo Login.
- **e2e/compras/**: Incluye las pruebas relacionadas con el flujo de compras.
- **e2e/Pagos/**: Contiene las pruebas del módulo Pagos.
- **fixtures/users.json**: Archivo JSON con los datos de usuario utilizados en las pruebas.
- **support/commands.js**: Archivos con los comandos personalizados de Cypress.
- **cypress.config.js**: Archivo de configuración principal de Cypress.

## Configuración del Proyecto

### Instalación de Dependencias
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/qa-automation-santex-final.git
   ```

2. Instalar las dependencias necesarias:
   ```bash
   npm install
   ```

### Ejecutar Pruebas

- Para ejecutar todas las pruebas:
   ```bash
   npx cypress run
   ```

- Para abrir el dashboard de cypress:
   ```bash
   npx cypress open
   ```
   
## Autor
Juricich Guadalupe
