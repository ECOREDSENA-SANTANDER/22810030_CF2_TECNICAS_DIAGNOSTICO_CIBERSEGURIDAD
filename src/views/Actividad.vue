<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión del código seguro, la protección de aplicaciones <i>web</i> y dispositivos <i>IoT</i>, la taxonomía de ataques, el cibercrimen, las amenazas dirigidas a personas, las infraestructuras críticas, el internet seguro, el monitoreo de red y la mitigación de riesgos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué finalidad cumple el código seguro durante el desarrollo de una aplicación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar el número de componentes instalados sin verificar su procedencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir la posibilidad de errores aprovechables, proteger los datos y facilitar la detección de comportamientos no esperados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Evitar las pruebas de seguridad después del despliegue de la aplicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Garantizar que cualquier programa quede completamente libre de riesgos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué práctica contribuye a prevenir vulnerabilidades desde las etapas tempranas del ciclo de desarrollo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Integrar la seguridad en la planeación, el diseño, la construcción, las pruebas, el despliegue y la operación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Revisar la seguridad únicamente después de que ocurra un incidente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Conservar secretos y credenciales dentro del código fuente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Asignar permisos administrativos a todos los usuarios de la aplicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué caracteriza al análisis estático de código?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Observar únicamente el tráfico que circula por una red institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Restaurar copias de respaldo después de una interrupción del servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Examinar el código sin ejecutar la aplicación para identificar patrones inseguros o secretos expuestos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reemplazar la validación técnica por entrevistas a los usuarios finales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué control aporta una capa adicional de protección a las cuentas administrativas de aplicaciones <i>web</i> y servicios en la nube?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Compartir una misma cuenta entre todos los responsables del servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Desactivar los registros para reducir el consumo de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conceder permisos públicos a los recursos administrados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Activar la autenticación multifactor para verificar la identidad del usuario.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué debe establecer una metodología básica de monitoreo?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente la cantidad máxima de datos que puede almacenar el servidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Qué se debe monitorear, con qué frecuencia, quién revisa las alertas y cómo se documentan los resultados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La eliminación periódica de todos los registros generados por la infraestructura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La instalación de la misma herramienta en todos los sistemas sin analizar los riesgos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué describe mejor el internet de las cosas o <i>IoT</i>?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un ecosistema de dispositivos físicos conectados que procesan, recopilan o intercambian datos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un conjunto de archivos locales que no utiliza mecanismos de conectividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un modelo exclusivo para administrar bases de datos relacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una técnica destinada únicamente a revisar código fuente de aplicaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué acción preventiva debe aplicarse a un dispositivo <i>IoT</i> que conserva credenciales predeterminadas?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Compartir la contraseña con todos los usuarios para facilitar el acceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Habilitar servicios adicionales aunque no cumplan una función operativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Asignar credenciales únicas y aplicar procedimientos de gestión de cuentas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Retirar el dispositivo del inventario para evitar su monitoreo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué caracteriza a un ataque de reconocimiento?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Restaurar un servicio después de una interrupción operativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Validar la recuperación de una copia de respaldo institucional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aplicar autenticación multifactor a una cuenta administrativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Recopilar información sobre activos, servicios o usuarios para preparar posibles acciones posteriores.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué propósito tiene un ataque de acceso?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ingresar sin autorización a un sistema o utilizar credenciales de manera indebida.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Clasificar registros para mejorar la trazabilidad de una aplicación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Segmentar la red utilizada por los dispositivos conectados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mejorar la legibilidad del código fuente antes de su despliegue.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué propiedad de la seguridad se afecta principalmente en un ataque de denegación de servicio o DoS?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La confidencialidad de la información almacenada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La disponibilidad de los sistemas, redes o aplicaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La integridad de los documentos impresos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La privacidad de los perfiles de usuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de las siguientes situaciones corresponde a un método de dispersión utilizado en el cibercrimen?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Revisar una configuración dentro de un laboratorio autorizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Documentar los resultados de una prueba de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Enviar un mensaje fraudulento que contiene un enlace engañoso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Realizar una copia de respaldo conforme al procedimiento institucional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué práctica fortalece la prevención frente a mensajes de <i>phishing</i>?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Compartir códigos temporales cuando una llamada parezca urgente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Abrir los enlaces recibidos para verificar rápidamente su contenido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Desactivar los canales institucionales de reporte de incidentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Verificar el remitente y el dominio, y confirmar las solicitudes inusuales por canales oficiales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué caracteriza a una infraestructura crítica?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sostiene servicios cuya afectación puede generar impactos significativos sobre la sociedad, la economía o la operación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Se utiliza únicamente para realizar pruebas personales sin consecuencias organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No requiere procedimientos de continuidad ni recuperación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Corresponde exclusivamente a contenidos públicos disponibles en internet.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué procedimiento contribuye a mitigar riesgos en infraestructuras críticas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar el inventario de activos para reducir la cantidad de registros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar activos y dependencias, aplicar controles, monitorear eventos y planificar la recuperación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Compartir credenciales administrativas para agilizar la respuesta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evitar las pruebas de recuperación para no interrumpir el servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué describe correctamente la <i>deep</i> <i>web</i>?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente las páginas públicas indexadas por motores de búsqueda convencionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Exclusivamente contenidos relacionados con actividades ilícitas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Contenidos no indexados que pueden requerir autenticación o permisos, como plataformas y repositorios privados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un tipo de <i>firewall</i> utilizado para proteger redes internas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué función cumple una línea base de comportamiento durante el monitoreo de red?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Publicar credenciales para facilitar el acceso a los sistemas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar los registros después de generar cada alerta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Automatizar todas las decisiones sin realizar análisis contextual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer la condición esperada de un activo para reconocer desviaciones relevantes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué herramienta centraliza y correlaciona registros para facilitar el análisis de eventos de seguridad?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un sistema <i>SIEM</i>.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Una interfaz <i>API</i> sin mecanismos de monitoreo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un sensor <i>IoT</i> utilizado únicamente para medir temperatura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una cuenta de usuario compartida entre varias áreas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué debe realizarse después de implementar un control de seguridad?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Omitir la documentación para reducir el tiempo de la actividad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Validar si redujo la exposición sin afectar el servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar los registros usados para comparar el estado inicial y final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Asumir que el riesgo desapareció sin realizar una nueva revisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué información debe incluir un registro de incidente?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el nombre de quien observó el evento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo el precio de las herramientas utilizadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Fecha, activo afectado, evento, evidencia, impacto, acciones y estado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Las contraseñas personales de los usuarios involucrados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Cuál es la secuencia correcta para mitigar un riesgo?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Documentar primero, omitir la identificación y evitar la validación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Seleccionar herramientas sin analizar el hallazgo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Implementar un control y eliminar las evidencias obtenidas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificar, analizar, seleccionar controles, implementar, validar y documentar.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
