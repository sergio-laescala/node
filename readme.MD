# Curso Node - LaEscala
> Sergio Rodriguez

## Tarea 1
### Comentarios
- Dejé solo las dependencias que se requieren hasta este momento.
- El id no lo especifiqué ya que segun la documentacion al crear un documento en Mongo, si el id no es especificado, Mongo crea el campo y le asigna un BSON ObjectId unico.
- En el campo message de la coleccion Tweet le agregue una validacion required ya que me hace sentido que si creo un documento relacionado con un tweet este tenga contenido. De todas maneras lo deje con un String vacio por defecto.