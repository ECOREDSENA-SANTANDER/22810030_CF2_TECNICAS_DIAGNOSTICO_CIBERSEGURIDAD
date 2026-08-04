<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Ataques, cibercrimen y amenazas dirigidas
      
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5.mb-0.br-3(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.br-4.d-flex.flex-column
          p.mb-0 La comprensión de los ataques, el cibercrimen y las amenazas dirigidas permite interpretar mejor los hallazgos obtenidos durante el monitoreo, las pruebas de seguridad y la revisión de registros. Este tema aborda la clasificación general de ataques, la evolución del delito digital, los métodos de dispersión y las amenazas que buscan afectar a las personas mediante engaños, suplantación o manipulación.
      
      
      
      
      
      
      
      Separador
      #t_3_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 3.1 Taxonomía y clasificación general de ataques
      
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/2.png', alt='')
        .col-sm-12.col-lg-7
          p.mb-3 La ejecución de acciones preventivas y la validación de riesgos requieren comprender cómo pueden desarrollarse los ataques sobre una infraestructura tecnológica. Una vulnerabilidad adquiere mayor significado cuando se analiza en relación con una posible amenaza, el activo expuesto y las consecuencias que podrían producirse. Por esta razón, la clasificación de ataques facilita la interpretación de los hallazgos obtenidos durante el monitoreo, las pruebas de seguridad y la revisión de registros.
          p.mb-0 Una taxonomía permite ordenar conceptos y reconocer patrones. No debe entenderse como una descripción rígida de todos los incidentes posibles, debido a que un ataque real puede integrar diferentes acciones en una misma secuencia. Un actor puede recopilar información pública, identificar servicios expuestos, intentar obtener credenciales y afectar posteriormente la disponibilidad de un sistema. El análisis profesional exige analizar las relaciones entre estas acciones sin asumir que todos los casos siguen exactamente el mismo recorrido.
      
      p.mb-5 Un ataque puede definirse como una acción intencional orientada a comprometer sistemas, redes, aplicaciones, dispositivos o información. Sus efectos pueden incluir acceso indebido, alteración de datos, interrupción de servicios, exposición de información o afectación de la privacidad. La clasificación facilita responder preguntas esenciales: ¿qué buscaba lograr el actor?, ¿qué debilidad intentó aprovechar?, ¿qué activo se encontraba expuesto?, ¿qué evidencia permite sustentar la interpretación?

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/3.png', alt='')
        .col-sm-12.col-lg-9
          .bg-color-2.p-5
            p.mb-3 El análisis debe diferenciar entre una amenaza, un evento y un ataque confirmado. Una amenaza representa la posibilidad de afectación; un evento corresponde a una actividad identificable; y un ataque implica una acción intencional que requiere evidencia suficiente para su clasificación. Diez intentos fallidos de autenticación en pocos minutos constituyen un evento que debe revisarse. La situación puede relacionarse con una prueba legítima, un error de usuario o un intento de acceso no autorizado. La documentación debe conservar esta diferencia y evitar afirmaciones que no puedan demostrarse.
            p.mb-0 La clasificación general de ataques puede presentarse de acuerdo con su finalidad, la propiedad de seguridad afectada y la evidencia que requiere revisión.
      
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación general de ataques

      .tarjeta.bg-fondo-1.p-5.mb-5(data-aos='fade-right')
        SlyderA(tipo="b")
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7.text-white
              h4 Reconocimiento
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Propósito principal:] recopilar información sobre activos, servicios, usuarios o configuraciones.
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Ejemplo aplicado:] se identifican consultas o escaneos dirigidos hacia servicios publicados por una organización.
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Propiedad de seguridad afectada:] puede preparar afectaciones posteriores sobre diferentes propiedades.
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Evidencia que requiere revisión:] registros de red, inventario de activos, alertas y línea base de comportamiento.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/4.png', alt='')

          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7.text-white
              h4 Acceso
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Propósito principal:] obtener ingreso no autorizado o utilizar credenciales de manera indebida.
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Ejemplo aplicado:] una cuenta administrativa registra intentos repetidos de autenticación o un inicio de sesión inusual.
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Propiedad de seguridad afectada:] confidencialidad, integridad y privacidad.
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Evidencia que requiere revisión:] registros de acceso, ubicación, horario, perfil del usuario y cambios realizados.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/5.png', alt='')

          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7.text-white
              h4 Denegación de servicio (#[i DoS])
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Propósito principal:] degradar o impedir el acceso legítimo a sistemas, redes o aplicaciones.
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Ejemplo aplicado:] una plataforma virtual deja de responder debido a una carga anómala de solicitudes.
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Propiedad de seguridad afectada:] disponibilidad.
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Evidencia que requiere revisión:] consumo de recursos, tráfico, disponibilidad de servicios y registros de eventos.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/6.png', alt='')
          
      p.mb-0(data-aos='fade-right') Esta clasificación aporta una base para interpretar hallazgos, pero no reemplaza la investigación. Un incremento de tráfico puede responder a una actividad legítima; un acceso fuera de horario puede tener justificación; y un escaneo puede corresponder a una prueba autorizada. El contexto determina la clasificación definitiva.
      
      Separador
      #t_3_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 3.2 Cibercrimen y evolución de las amenazas digitales
      
      
      .row.justify-content-center.mb-5.align-items-center.bg-color-6(data-aos='fade-right')
        .col-sm-12.col-lg-7.mx-0.px-0
          .px-4.pcus-1
            p.mb-3.text-white La comprensión de los ataques técnicos debe complementarse con una mirada social y organizacional. El cibercrimen no corresponde únicamente a acciones aisladas realizadas por individuos con conocimientos avanzados. También puede involucrar redes, servicios ilícitos, intermediarios y economías digitales que facilitan la especialización de tareas.

            p.mb-0.text-white INTERPOL señala que el delito digital ha evolucionado desde incidentes aislados hacia una economía clandestina sofisticada que afecta a personas, empresas y organizaciones. Esta transformación exige respuestas coordinadas y capacidad de prevención en diferentes niveles (INTERPOL, 2026).
        .col-sm-12.col-lg-5.d-none.d-lg-block.px-0
          img(src='@/assets/curso/temas/t3/7.png', alt='')
      
      p.mb-5(data-aos='fade-right') Europol destaca que el ecosistema del cibercrimen continúa cambiando con rapidez. El informe IOCTA 2026 analiza cómo el cifrado, los servicios proxy y la inteligencia artificial amplían determinadas capacidades criminales. También señala la expansión de modelos de crime-as-a-service, mediante los cuales algunos actores pueden contratar servicios especializados sin desarrollar directamente todas las capacidades técnicas (Europol, 2026).
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-9
          .bg-color-2.p-5
            p.mb-3 El cibercrimen comprende actividades delictivas que utilizan sistemas, redes o servicios digitales como objetivo, medio o escenario. Algunos delitos buscan comprometer infraestructuras; otros utilizan plataformas digitales para ejecutar fraudes, extorsiones o suplantaciones. La tecnología modifica la escala, velocidad y alcance de estas acciones.
            p.mb-0 El análisis histórico permite reconocer una evolución. Las primeras afectaciones podían concentrarse en acciones experimentales o incidentes limitados. Con el crecimiento de internet, la digitalización de servicios y la expansión de plataformas, aumentó la posibilidad de afectar a usuarios ubicados en diferentes lugares. La incorporación de servicios en la nube, dispositivos conectados y medios digitales amplió tanto las oportunidades legítimas como las superficies de exposición.1
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/8.png', alt='')
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/10.png', alt='')
        .col-sm-12.col-lg-7
          img.wcus-1(src='@/assets/curso/temas/t3/9.svg', alt='').mb-3
          p.mb-3 El aprendizaje no debe idealizar ni dramatizar la figura del ciberdelincuente. La formación profesional integral requiere una postura crítica. Comprender el fenómeno permite diseñar controles, orientar usuarios y fortalecer la respuesta. El propósito no consiste en replicar prácticas ilícitas, sino en identificar patrones de riesgo.
          p.mb-0 La clasificación de ciberdelincuentes puede considerar motivaciones, nivel de organización y recursos utilizados. Para facilitar esta lectura, el siguiente recurso organiza los actores y modelos mencionados en el desarrollo.


      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Actores y modelos del cibercrimen


      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-purple").mb-5(data-aos='fade-right')
        .row.justify-content-center.align-items-center(titulo="Actores individuales")
          .col-sm-12.col-lg-5
            p.mb-0 Operan con capacidades variables y pueden actuar con diferentes niveles de conocimiento técnico.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/11.png', alt='')

        .row.justify-content-center.align-items-center(titulo="Redes organizadas")
          .col-sm-12.col-lg-5
            p.mb-0 Distribuyen tareas entre varios participantes y pueden coordinar acciones de mayor alcance.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/12.png', alt='')

        .row.justify-content-center.align-items-center(titulo="Intermediarios")
          .col-sm-12.col-lg-5
            p.mb-0 Facilitan servicios, datos, herramientas o infraestructura para apoyar actividades ilícitas.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/13.png', alt='')

        .row.justify-content-center.align-items-center(titulo="Amenazas internas")
          .col-sm-12.col-lg-5
            p.mb-0 Se presentan cuando una persona utiliza indebidamente sus privilegios dentro de una organización.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/14.png', alt='')

        .row.justify-content-center.align-items-center(titulo="Motivaciones frecuentes")
          .col-sm-12.col-lg-5
            p.mb-0 Pueden relacionarse con beneficio económico, interrupción de servicios, notoriedad o acceso a información.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/15.png', alt='')

        .row.justify-content-center.align-items-center(titulo="Recursos utilizados")
          .col-sm-12.col-lg-5
            p.mb-0 Incluyen credenciales, herramientas, datos, infraestructura digital o servicios contratados a terceros.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/16.png', alt='')

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/2.png', alt='')
        .col-sm-12.col-lg-7
          p.mb-2 La clasificación cumple una finalidad defensiva. Permite comprender que las amenazas no siempre provienen de una única persona ni siguen un patrón simple. Una campaña puede integrar suplantación, malware, robo de credenciales y extorsión. La organización debe fortalecer sus controles en diferentes capas.

          p.mb-2 Los métodos de dispersión son mecanismos mediante los cuales una amenaza alcanza a posibles víctimas. Entre ellos se encuentran mensajes fraudulentos, archivos adjuntos, enlaces engañosos, sitios web comprometidos, componentes desactualizados y credenciales obtenidas de forma indebida.

          p.mb-0 La dispersión aprovecha tanto vulnerabilidades técnicas como decisiones humanas. Un archivo puede instalar software malicioso si el sistema no aplica controles apropiados. Un enlace puede dirigir hacia una página de suplantación. Un servicio expuesto puede facilitar intentos de acceso. Una dependencia desactualizada puede introducir una debilidad en una aplicación.




      Separador
      #t_3_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 3.3 Amenazas cibernéticas dirigidas a personas
      
      .bloque-texto-g.bloque-texto-g--inverso.color-adicional-3.p-3.p-sm-4.p-md-5.mb-5.br-3
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/13/18.png')})`}"
        )
        .bloque-texto-g__texto.p-4.br-4.d-flex.flex-column
          p.mb-3 Las personas constituyen un objetivo frecuente porque interactúan con sistemas, administran credenciales, reciben mensajes y toman decisiones. Una amenaza puede aprovechar la confianza, la urgencia o la desinformación para inducir una acción insegura. Por ello, la protección no depende únicamente de herramientas; requiere formación y procedimientos comprensibles.

          p.mb-0 Las amenazas dirigidas a personas pueden incluir suplantación, fraude, robo de credenciales, exposición de datos y engaños apoyados en ingeniería social. El impacto no se limita al usuario individual. Una cuenta comprometida puede facilitar acceso a recursos organizacionales.  

      p.mb-5(data-aos='fade-right') Las amenazas evolucionan con los medios de comunicación. El correo electrónico continúa siendo un canal relevante, pero también se utilizan mensajes de texto, redes sociales, llamadas y aplicaciones de mensajería. La apariencia de legitimidad puede mejorar mediante datos públicos y personalización.

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/19.svg', alt='')
        .col-sm-12.col-lg-7
          img.wcus-1(src='@/assets/curso/temas/t3/20.svg', alt='').mb-3
          p.mb-3 CISA explica que los ataques de phishing utilizan correos o sitios maliciosos para solicitar información personal aparentando provenir de una organización confiable (CISA, 2021b). El concepto se relaciona con la ingeniería social: el atacante intenta influir en la decisión del usuario.

          p.mb-3 La inteligencia artificial también puede incrementar la capacidad para crear mensajes más convincentes. El FBI advirtió en 2024 sobre el uso de herramientas de inteligencia artificial por parte de ciberdelincuentes para desarrollar campañas sofisticadas de phishing, ingeniería social y clonación de voz o video (Federal Bureau of Investigation [FBI], 2024).

          p.mb-3 Esta evolución refuerza una idea pedagógica: no basta con buscar errores ortográficos o diseños deficientes. Un mensaje fraudulento puede parecer profesional. La verificación debe considerar el canal, la solicitud, la urgencia, el dominio y el procedimiento institucional.

          .bg-color-5.p-3
            p.mb-0 Para reforzar esta revisión, las señales de análisis pueden presentarse como una ruta breve de verificación antes de responder a un mensaje, abrir un enlace o entregar información.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ruta de verificación ante amenazas dirigidas

      .tarjeta.bg-color-2.p-4.mb-5(data-aos='fade-right')
        LineaTiempoC.color-acento-botones
          .row.justify-content-center.mb-0(titulo="Revisar el canal")
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/21.png', alt='')
            .col-sm-12.col-lg-5
              h5 Revisar el canal
              p.mb-0 Identifique si el mensaje llegó por un medio institucional, personal o no esperado.

          .row.justify-content-center.mb-0(titulo="Analizar la solicitud")
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/22.png', alt='')
            .col-sm-12.col-lg-5
              h5 Analizar la solicitud
              p.mb-0 Determine si pide datos personales, credenciales, pagos, descargas o acciones urgentes.

          .row.justify-content-center.mb-0(titulo="Validar el dominio")
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/23.png', alt='')
            .col-sm-12.col-lg-5
              h5 Validar el dominio
              p.mb-0 Revise si la dirección del sitio o correo corresponde a la entidad legítima.

          .row.justify-content-center.mb-0(titulo="Confirmar el procedimiento")
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/24.png', alt='')
            .col-sm-12.col-lg-5
              h5 Confirmar el procedimiento
              p.mb-0 Contraste la solicitud con los canales oficiales o procedimientos definidos por la organización.

          .row.justify-content-center.mb-0(titulo="Reportar la situación")
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/25.png', alt='')
            .col-sm-12.col-lg-5
              h5 Reportar la situación
              p.mb-0 Comunique el caso mediante los canales adecuados cuando existan indicios de suplantación, fraude o riesgo.


      p.mb-0(data-aos='fade-right') La verificación ayuda a reducir decisiones impulsivas frente a mensajes que aparentan legitimidad. En este tipo de amenazas, la formación del usuario, la claridad de los procedimientos y el reporte oportuno complementan los controles tecnológicos.


  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
