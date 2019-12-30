imgEditor
==========
Plugin para generar un directorio capacidad de edicion al 100%.

El siguiente es el manual de uso de la funcion imgEditor

Debe colocarlo directamente en un servidor para que funcione ya sea uno web o uno local.

Para ver la demo de click aqui [Demo](http://plugins.tecnologiaswebsite.com/imgEditor/)

- Load

	Este es la forma de iniciar el editor de imagenes.
	
		load_imgEditor({
			[Array]
		})

	+Parametros

	Array: Tiene todos los parametros que se necesitan para la creacion, los parametros son los siquientes:
	
	-obj[STRING]: es el id o la clase que va contener nuestro editor, debe usar los prefijos de Jquery para distingir los ("#", "."), el contenedor debe ser un form para guardar.

	-file[STRING]: es el id del input file.

	-circular[INT]: define si la captura es circular 0=no, 1=si.

	-tamano[Array]:

		-width[INT]: se define el tamaño de ancho en px.
		-height[INT]: se define el tamaño de ancho en px.

	scala[INT]: se define el porcentaje de escala 100% es el tamaño original. 

	EJ.
	
		load_imgEditor({
			obj:"#contenidos",
			file:"img"
		})

- imgEditor_getData

	Se usa para obtener los datos del calentario.
	
		imgEditor_getData();

	+Parametros
	
	return[Array]: La respuesta es un array con todas las fechas.

	EJ.
	
		imgEditor_getData();

Todos los aportes son voluntarios.

Si deseas ayudarme para continuar con mis aportes puedes enviarme a mi billetera en BTC

1NrBE31sYvq5F96nD8GGRS5TWXneVnG3yo
