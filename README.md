# SmartGrowGT Admin API

## 🧩 Descripción

API REST para la administración de SmartGrowGT (usuarios, administradores, cultivos y dispositivos).

Está construida con Node.js, Express y MongoDB, y usa Cloudinary para almacenar imágenes de cultivos.

---

## ✅ Requisitos

- Node.js 16+ (recomendado)
- npm o yarn
- MongoDB (local o en la nube)
- Cuenta de Cloudinary (para cargar imágenes)

---

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone <repo-url>
cd SmartGrowGT-Admin
```

2. Instala dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz con las variables necesarias (ver sección siguiente).

4. Ejecuta la aplicación:

```bash
npm start
```

> Por defecto el servidor correrá en `http://localhost:3002`.

---

## 🔐 Variables de entorno (`.env`)

Crea un archivo `.env` en la raíz del proyecto con al menos estas variables:

```env
PORT=3002
URI_MONGODB=mongodb://localhost:27017/smartgrowgt

CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
CLOUDINARY_FOLDER=SmartGrowGT/crops
```

- `PORT`: (Opcional) puerto donde se ejecuta el servidor.
- `URI_MONGODB`: URL de conexión a MongoDB.
- `CLOUDINARY_*`: credenciales de Cloudinary para subir imágenes.
- `CLOUDINARY_FOLDER`: carpeta en Cloudinary donde se guardarán las imágenes (por defecto `SmartGrowGT/crops`).

---

## 🧭 Estructura principal

```
index.js
configs/
  ├─ app.js
  ├─ db.js
  ├─ cors-configuration.js
  └─ helmet-configuration.js
middlewares/
  ├─ file-uploader.js       (Cloudinary + multer)
  ├─ admin-validation.js
  ├─ usuarios-validator.js
  ├─ crops-validation.js
  └─ device-validation.js
src/
  ├─ Admins/     (CRUD administradores)
  ├─ Users/      (CRUD usuarios)
  ├─ Crops/      (CRUD cultivos + subida de imagen)
  └─ Devices/    (lectura de dispositivos)
```

---

## 🌐 Base URL

Todas las rutas están bajo:

```
http://localhost:<PORT>/smartgrowgt/v1/admin
```

Reemplaza `<PORT>` por el valor de tu `PORT` (por defecto `3002`).

---

## 📦 Endpoints

### 🧑‍💼 Administradores

| Método | Ruta | Descripción |
| ------ | ---- | ----------- |
| GET | `/admins` | Listar todos los administradores |
| GET | `/admins/:adminId` | Obtener administrador por ID |
| POST | `/admins` | Crear un nuevo administrador |
| PUT | `/admins/:adminId` | Actualizar datos de un administrador |
| PUT | `/admins/:id/activar` | Activar administrador |
| PUT | `/admins/:id/desactivar` | Desactivar administrador |

> **Nota:** Las validaciones se ejecutan en `middlewares/admin-validation.js`.

---

### 👥 Usuarios

| Método | Ruta | Descripción |
| ------ | ---- | ----------- |
| GET | `/usuarios` | Listar todos los usuarios |
| GET | `/usuarios/:id` | Obtener usuario por ID |
| PUT | `/usuarios/activate/:id` | Activar usuario |
| PUT | `/usuarios/deactivate/:id` | Desactivar usuario |

> Acciones de usuario aplican validación de administrador (`middlewares/usuarios-validator.js`).

---

### 🌱 Cultivos

| Método | Ruta | Descripción |
| ------ | ---- | ----------- |
| GET | `/cultivos` | Listar todos los cultivos |
| GET | `/cultivos/:nombreCultivo` | Buscar cultivo por nombre |
| GET | `/cultivos/id/:id` | Buscar cultivo por ID |
| POST | `/cultivos` | Crear cultivo (incluye subida de imagen) |
| PUT | `/cultivos/:id` | Actualizar cultivo (incluye subida de imagen) |
| DELETE | `/cultivos/:id` | Eliminar cultivo |

#### 🖼️ Subida de imagen (Cloudinary)

- El endpoint `POST /cultivos` y `PUT /cultivos/:id` espera un campo `image` con archivo.
- Se usa `multipart/form-data` para enviar la imagen.

Ejemplo con `curl`:

```bash
curl -X POST http://localhost:3002/smartgrowgt/v1/admin/cultivos \
  -F "nombreCultivo=Tomate" \
  -F "description=Tomate cherry" \
  -F "image=@/ruta/a/imagen.jpg"
```

---

### 📡 Dispositivos

| Método | Ruta | Descripción |
| ------ | ---- | ----------- |
| GET | `/devices` | Listar todos los dispositivos |
| GET | `/devices/online` | Listar dispositivos en línea |
| GET | `/devices/offline` | Listar dispositivos fuera de línea |
| GET | `/devices/:deviceId` | Obtener dispositivo por ID |
| GET | `/devices/user/:userId` | Obtener dispositivos de un usuario |

---

## 🧪 Probar/Desarrollar

- Reinicia el servidor al cambiar código.
- Puedes usar `nodemon` si lo agregas como dependencia de desarrollo.

---

## 📌 Glosario rápido

- **Admin**: Usuarios con permisos para gestionar la plataforma.
- **User**: Usuarios registrados que pueden tener dispositivos.
- **Crops**: Cultivos con imagen asociada.
- **Devices**: Dispositivos conectados (online/offline).

---

## 🛠️ Troubleshooting

- Si no inicia: verifica que MongoDB esté corriendo y la variable `URI_MONGODB` sea válida.
- Si falla la carga de imágenes: revisa que las credenciales de Cloudinary estén correctas.

---

¡Listo! Con esto puedes ejecutar la API, configurar tu entorno y consumir todos los endpoints disponibles.
