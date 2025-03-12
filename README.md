# Challenge: Amigo Secreto 🎁

Este proyecto es un desafío (Challengue de Amigo Secreto (curso por Alura LATAM)) diseñado para fortalecer habilidades en lógica de programación el cual Consiste en una aplicación simple que permite agregar amigos a una lista y luego sortear un amigo secreto de manera aleatoria.

## 🚀 Funcionalidades

- **Agregar amigos**: Permite agregar nombres de amigos a una lista.
- **Validación de duplicados**: Evita que se agreguen nombres duplicados.
- **Sortear amigo secreto**: Selecciona un amigo al azar de la lista.

## 🛠️ Cómo funciona el código

El código está escrito en JavaScript y utiliza funciones básicas para manejar la lógica del programa:

1. **`agregarAmigo()`**: 
   - Toma el valor de un campo de entrada (`input`) y lo agrega a un array llamado `amigos`.
   - Valida que el nombre no esté vacío y que no esté duplicado en la lista.

2. **`renderizarAmigos()`**: 
   - Muestra la lista de amigos en la interfaz de usuario, actualizando el contenido de un elemento `<ul>`.

3. **`sortearAmigos()`**: 
   - Selecciona un amigo al azar de la lista y lo muestra como resultado.
   - Valida que haya al menos dos amigos en la lista antes de realizar el sorteo.

## 📋 Cómo usar

1. **Agregar amigos**:
   - Ingresa el nombre de un amigo en el campo de texto y haz clic en el botón "Añadir".
   - El nombre se agregará a la lista si no está duplicado.

2. **Sortear amigo secreto**:
   - Una vez que hayas agregado al menos dos amigos, haz clic en el botón "Sortear Amigo Secreto".
   - El nombre del amigo secreto seleccionado aparecerá en la pantalla.

