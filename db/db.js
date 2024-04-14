const data = {
  usuarios: [
    {
      id: 1,
      usuario:'Juan23',
      email: "usuario1@example.com",
      contrasena: "contrasena1",
      fecha_nacimiento: "1990-01-01",
      dni: 123456789,
      foto_perfil: "user1.jpg",
    },
    {
      id: 2,
      usuario:'Juan24',
      email: "usuario2@example.com",
      contrasena: "contrasena2",
      fecha_nacimiento: "1991-02-02",
      dni: 234567890,
      foto_perfil: "user1.jpg",
    },
    {
      id: 3,
      usuario:'Juan25',
      email: "usuario3@example.com",
      contrasena: "contrasena3",
      fecha_nacimiento: "1992-03-03",
      dni: 345678901,
      foto_perfil: "user1.jpg",
    },
    {
      id: 4,
      usuario:'Juan26',
      email: "usuario4@example.com",
      contrasena: "contrasena4",
      fecha_nacimiento: "1993-04-04",
      dni: 456789012,
      foto_perfil: "user1.jpg",
    },
    {
      id: 5,
      usuario:'Juan27',
      email: "usuario5@example.com",
      contrasena: "contrasena5",
      fecha_nacimiento: "1993-04-04",
      dni: 456789012,
      foto_perfil: "user1.jpg",
    },
  ],
  productos: [
    {
      id: 1,
      usuario_id: 1,
      nombre_imagen: "deja_de_ser_tu.jpg",
      nombre_producto: "Deja de Ser Tu",
      descripcion: "Descpricion del libro 1",
      comentarios: [
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 1 para Producto 1",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Maria Sanz',
          texto_comentario: "Comentario 2 para Producto 1",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Carlos Martínez',
          texto_comentario: "Comentario 3 para Producto 1",
        }
      ]
    },
    {
      id: 2,
      usuario_id: 2,
      nombre_imagen: "habitos_atomicos.jpg",
      nombre_producto: "Habitos Atómicos",
      descripcion: "Descripción del libro 2",
      comentarios: [
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 1 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Maria Sanz',
          texto_comentario: "Comentario 2 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 3 para Producto 2",
        }
      ]
    },
    {
      id: 3,
      usuario_id: 3,
      nombre_imagen: "cuatro_acuerdos.jpg",
      nombre_producto: "Cuatro Acuerdos",
      descripcion: "Descripción del libro 3",
      comentarios: [
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 1 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Maria Sanz',
          texto_comentario: "Comentario 2 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 3 para Producto 2",
        }
      ]
    },
    {
      id: 4,
      usuario_id: 4,
      nombre_imagen: "monje.jpg",
      nombre_producto: "Monje",
      descripcion: "Descripción del libro 4",
      comentarios: [
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 1 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Maria Sanz',
          texto_comentario: "Comentario 2 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 3 para Producto 2",
        }
      ]
    },
    {
      id: 5,
      usuario_id: 5,
      nombre_imagen: "7_habitos.jpg",
      nombre_producto: "7 habitos de la gente altamente efectiva 4",
      descripcion: "Descripción del libro 5",
      comentarios: [
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 1 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Maria Sanz',
          texto_comentario: "Comentario 2 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 3 para Producto 2",
        }
      ]
    },
    {
      id: 6,
      usuario_id: 6,
      nombre_imagen: "poder_del_ahora.jpg",
      nombre_producto: "Poder del Ahora",
      descripcion: "Descripción del libro 6",
      comentarios: [
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 1 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Maria Sanz',
          texto_comentario: "Comentario 2 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 3 para Producto 2",
        }
      ]
    },
    {
      id: 7,
      usuario_id: 7,
      nombre_imagen: "poder_sin_limites.jpg",
      nombre_producto: "Poder Sin Limites",
      descripcion: "Descripción del libro 7",
      comentarios: [
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 1 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Maria Sanz',
          texto_comentario: "Comentario 2 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 3 para Producto 2",
        }
      ]
    },
    {
      id: 8,
      usuario_id: 8,
      nombre_imagen: "sutil_arte.jpg",
      nombre_producto: "Sutil Arte de que Todo Te Importe Un C*rajo",
      descripcion: "Descripción del libro 8",
      comentarios: [
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 1 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Maria Sanz',
          texto_comentario: "Comentario 2 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 3 para Producto 2",
        }
      ]
    },
    {
      id: 9,
      usuario_id: 9,
      nombre_imagen: "Zonas_erroneas.jpg",
      nombre_producto: "Tus zonas erroneas",
      descripcion: "Descripción del libro 9",
      comentarios: [
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 1 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Maria Sanz',
          texto_comentario: "Comentario 2 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 3 para Producto 2",
        }
      ]
    },
    {
      id: 10,
      usuario_id: 10,
      nombre_imagen: "tucerebro.jpg",
      nombre_producto: "Producto 9",
      descripcion: "Descripción del libro 10",
      comentarios: [
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 1 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Maria Sanz',
          texto_comentario: "Comentario 2 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 3 para Producto 2",
        }
      ]
    },
    {
      id: 11,
      usuario_id: 11,
      nombre_imagen: "product1.jpg",
      nombre_producto: "Producto 10",
      descripcion: "Descripción del libro 11",
      comentarios: [
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 1 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Maria Sanz',
          texto_comentario: "Comentario 2 para Producto 2",
        },
        {
          imagen_usuario: 'user1.jpg',
          nombre_usuario: 'Juan Perez',
          texto_comentario: "Comentario 3 para Producto 2",
        }
      ]
    }
  ]
};
module.exports = data;