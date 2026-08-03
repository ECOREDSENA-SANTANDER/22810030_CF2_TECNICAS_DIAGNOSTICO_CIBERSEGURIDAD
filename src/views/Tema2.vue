<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Dispositivos conectados e infraestructuras críticas
      
      
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5.mb-0.br-3(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.br-4.d-flex.flex-column
          p.mb-0 Los dispositivos conectados y las infraestructuras críticas forman parte de los entornos tecnológicos que requieren acciones preventivas, monitoreo y validación permanente. En este tema se abordan los elementos del internet de las cosas, las vulnerabilidades frecuentes en dispositivos conectados y los procedimientos de mitigación aplicables a servicios o sistemas cuya afectación puede generar impactos significativos.
      
      
      
      
      
      Separador
      #t_2_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 2.1 Internet de las cosas y exposición de dispositivos conectados
      
      .row.justify-content-center.mb-5.align-items-center.bg-color-4(data-aos='fade-right')
        .col-sm-12.col-lg-7.mx-0.px-0
          .px-4.pcus-1
            p.mb-3.text-white La transformación digital ha ampliado el número de dispositivos que participan en los procesos organizacionales. Ya no se utilizan únicamente computadores, servidores y teléfonos móviles. En contextos productivos, educativos y administrativos pueden encontrarse sensores de temperatura, cámaras, sistemas de control de acceso, impresoras conectadas, equipos de medición, dispositivos para seguimiento de inventarios y componentes de automatización. Estos elementos forman parte del internet de las cosas y requieren medidas de seguridad acordes con su función.

            p.mb-0.text-white La incorporación de dispositivos conectados aporta beneficios importantes. Un sensor puede advertir cambios ambientales en una unidad productiva; una cámara puede apoyar la vigilancia de instalaciones; y un sistema de control de acceso puede contribuir a registrar ingresos. Sin embargo, cada dispositivo también amplía la superficie de exposición. Si conserva credenciales predeterminadas, utiliza software desactualizado o se conecta a una red sin segmentación, puede convertirse en un punto débil para la organización.
        .col-sm-12.col-lg-5.d-none.d-lg-block.px-0
          img(src='@/assets/curso/temas/t2/2.png', alt='')
      
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/3.svg', alt='')
        .col-sm-12.col-lg-7
          p.mb-4 El internet de las cosas, conocido como #[i IoT] por la expresión inglesa #[i Internet of Things], comprende dispositivos físicos que incorporan capacidades de procesamiento, conectividad y, en muchos casos, recopilación o intercambio de datos. Estos dispositivos interactúan con otros sistemas para apoyar actividades de monitoreo, automatización o control.
          .px-4.pcus-1.bg-color-3
            img.wcus-1(src='@/assets/curso/temas/t2/4.svg', alt='').mb-3
            p.mb-3 Un dispositivo #[i IoT] puede incluir sensores, componentes de procesamiento, software interno, interfaces de administración y mecanismos de conectividad. En algunos casos, también depende de una plataforma en la nube o de una aplicación móvil. Esta arquitectura demuestra que el análisis no debe limitarse al equipo físico. La seguridad involucra el dispositivo, la red, las credenciales, los datos y los servicios asociados.
            p.mb-0 El National Institute of Standards and Technology publicó NISTIR 8259A como una línea base de capacidades de ciberseguridad para dispositivos #[i IoT]. El documento plantea que las capacidades técnicas de estos dispositivos deben apoyar controles destinados a proteger tanto los equipos como sus datos, sistemas y ecosistemas relacionados (National Institute of Standards and Technology [NIST], 2020a).
      
      p.mb-5(data-aos='fade-right') Para orientar el diagnóstico de dispositivos conectados, resulta útil revisar las capacidades de ciberseguridad que pueden aportar información sobre configuración, protección, actualización y estado del dispositivo.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Capacidades de ciberseguridad en dispositivos #[i IoT]

      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-purple").mb-5(data-aos='fade-right')
        .row.justify-content-center.align-items-center(titulo="Identificación del dispositivo")
          .col-sm-12.col-lg-5
            p.mb-0 Permite reconocer si el dispositivo puede identificarse de forma única dentro de la infraestructura.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/5.png', alt='')

        .row.justify-content-center.align-items-center(titulo="Configuración de seguridad")
          .col-sm-12.col-lg-5
            p.mb-0 Ayuda a determinar si las configuraciones pueden modificarse según las necesidades de protección.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/6.png', alt='')

        .row.justify-content-center.align-items-center(titulo="Protección de datos")
          .col-sm-12.col-lg-5
            p.mb-0 Orienta la revisión de los mecanismos utilizados para proteger la información que recopila, procesa o transmite el dispositivo.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/7.png', alt='')

        .row.justify-content-center.align-items-center(titulo="Control de acceso lógico")
          .col-sm-12.col-lg-5
            p.mb-0 Permite analizar qué interfaces se encuentran habilitadas y quién puede acceder a ellas.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/8.png', alt='')

        .row.justify-content-center.align-items-center(titulo="Actualización de software")
          .col-sm-12.col-lg-5
            p.mb-0 Facilita la revisión sobre la disponibilidad de actualizaciones y soporte del fabricante.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/9.png', alt='')

        .row.justify-content-center.align-items-center(titulo="Estado de ciberseguridad")
          .col-sm-12.col-lg-5
            p.mb-0 Permite identificar cómo se detectan cambios, comportamientos anómalos o condiciones que requieren revisión.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/10.png', alt='')
      
      p.mb-0(data-aos='fade-right') Estas capacidades permiten formular preguntas útiles durante el diagnóstico: ¿el dispositivo puede identificarse de forma única?, ¿se pueden modificar sus configuraciones de seguridad?, ¿recibe actualizaciones?, ¿qué interfaces se encuentran habilitadas?, ¿cómo se detectan cambios o comportamientos anómalos?








      Separador
      #t_2_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 2.2 Vulnerabilidades en dispositivos conectados
      
      .bloque-texto-g.color-adicional-1.p-3.p-sm-4.p-md-5.mb-5.br-1(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/11.png')})`}"
        )
        .bloque-texto-g__texto.p-4.br-2.d-flex.flex-column
          p.mb-3 Los dispositivos #[i IoT] pueden presentar vulnerabilidades relacionadas con credenciales, configuraciones, interfaces, actualizaciones, comunicaciones y tratamiento de datos. Algunas debilidades resultan similares a las observadas en otros sistemas; sin embargo, su gestión puede ser más compleja debido a la diversidad de fabricantes, capacidades limitadas y ciclos de vida prolongados.
          p.mb-0 Las vulnerabilidades frecuentes en dispositivos conectados pueden organizarse según la condición observada, el riesgo asociado, la acción preventiva y la evidencia requerida para validar el ajuste.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Capacidades de ciberseguridad en dispositivos #[i IoT]

      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          ImagenInfograficaB.color-primario.mb-4
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/t2/12.svg')
            div(x="48.3%" y="22%")
              h5 Credenciales predeterminadas o compartidas
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Riesgo asociado:] acceso no autorizado al dispositivo o a su interfaz administrativa.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Acción preventiva: ]asignar credenciales únicas y aplicar procedimientos de gestión de cuentas.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Evidencia para validar]: registro de configuración y prueba de acceso controlada.
            div(x="48.3%" y="33.5%" )
              h5 #[i Software] interno sin actualización
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Riesgo asociado:] exposición a vulnerabilidades divulgadas. 
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Acción preventiva: ]verificar soporte del fabricante y establecer un procedimiento de actualización. 
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Evidencia para validar:] inventario de versiones y bitácora de cambios. 
            div(x="48.3%" y="46%" )
              h5 Interfaces o servicios innecesarios habilitados
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2  #[b Riesgo asociado:] ampliación de la superficie de ataque.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Acción preventiva:] deshabilitar servicios que no cumplen una función operativa.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Evidencia para validar]: comparación de configuraciones antes y después del ajuste.
            div(x="48.3%" y="57%" )
              h5 Dispositivos no inventariados
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Riesgo asociado:] falta de visibilidad y monitoreo.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Acción preventiva: ]incorporar el equipo al inventario institucional.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Evidencia para validar:] registro actualizado de activos y responsable asignado.
            div(x="48.3%" y="68%" )
              h5 Conectividad sin segmentación
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2  #[b Riesgo asociado:] posible propagación de una afectación hacia otros sistemas.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Acción preventiva:] separar los dispositivos según su función y nivel de riesgo.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Evidencia para validar:] diagrama de red y validación de reglas de comunicación.
            div(x="48.3%" y="79%" )
              h5 Validar datos de entrada
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Riesgo asociado:] alteración o consulta no autorizada de información. 
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Acción preventiva:] revisar mecanismos de protección durante el intercambio de datos. 
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Evidencia para validar:] registro de configuración y prueba funcional autorizada. 
      p.mb-0(data-aos='fade-right') Una medida preventiva debe corresponder con la vulnerabilidad identificada. No todas las organizaciones requieren exactamente los mismos controles, pero sí necesitan visibilidad sobre los dispositivos conectados y criterios claros para administrarlos.
      
      
      Separador
      #t_2_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 2.3 Infraestructuras críticas y procedimientos de mitigación
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/13.png', alt='')
        .col-sm-12.col-lg-7
          img.wcus-1(src='@/assets/curso/temas/t2/14.svg', alt='').mb-3
          p.mb-3 Algunas infraestructuras sostienen servicios cuya interrupción puede generar impactos amplios sobre la sociedad, la economía o la seguridad. La protección de estos entornos exige una mirada que combine prevención, monitoreo, respuesta y continuidad.
          p.mb-0 El Decreto 338 de 2022 estableció lineamientos generales para fortalecer en Colombia la gobernanza de la seguridad digital, la identificación de infraestructuras críticas cibernéticas y servicios esenciales, la gestión de riesgos y la respuesta a incidentes. Este enfoque reconoce que la seguridad digital requiere coordinación entre actores y capacidades institucionales (Ministerio de Tecnologías de la Información y las Comunicaciones [MinTIC], 2022).

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-9
          p.mb-3 Una infraestructura crítica comprende activos, sistemas o servicios cuya afectación puede producir consecuencias significativas. Su clasificación depende del contexto nacional y sectorial. Puede involucrar energía, comunicaciones, transporte, salud, servicios financieros, agua, gobierno y otras funciones esenciales.
          p.mb-5 La criticidad no se determina únicamente por el tamaño de la organización. Un sistema local puede resultar indispensable para una comunidad o un proceso productivo. Un servicio de conectividad, una plataforma hospitalaria o un sistema de control industrial requieren análisis según sus dependencias.
          .bg-color-3.p-4
            p.mb-3 El aprendiz debe comprender que los sistemas físicos y digitales se encuentran relacionados. Un incidente informático puede afectar una operación material. Del mismo modo, una falla física puede interrumpir servicios digitales. Esta relación exige valorar #[i hardware, software], comunicaciones, personas y procedimientos.
            p.mb-0 La mitigación comienza con la identificación de activos críticos y dependencias. Posteriormente, se analizan vulnerabilidades, amenazas, controles y procedimientos de continuidad. La organización debe establecer responsables, priorizar acciones y conservar documentación.

        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/15.svg', alt='')


      p.mb-3(data-aos='fade-right') Entre las medidas pertinentes se encuentran segmentación, control de accesos, actualizaciones, monitoreo, respaldos, procedimientos de respuesta y pruebas de recuperación. La selección depende del entorno. Un sistema crítico requiere controles proporcionales a su función y validaciones periódicas.
      p.mb-5(data-aos='fade-right') La ruta de mitigación permite organizar el tratamiento del riesgo desde la identificación inicial hasta la recuperación del servicio y la mejora posterior.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ruta para mitigar riesgos en infraestructuras críticas
      
      PasosA.color-acento-botones.mb-5(tipo="n")(data-aos='fade-right')
        .row.align-items-center
          .col-sm-12.col-lg-9
            h4 Identificar
            ul.lista-ul--color.mb-0.mcus-1
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Acción:] reconocer activos, servicios y dependencias.
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Propósito:] determinar qué debe protegerse prioritariamente.
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Evidencia:] inventario y mapa de dependencias.
          .col-sm-12.col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/16.svg')

        .row.align-items-center
          .col-sm-12.col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/17.svg')
          .col-sm-12.col-lg-9
            h4 Analizar
            ul.lista-ul--color.mb-0.mcus-1
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Acción:] valorar vulnerabilidades, amenazas e impactos.
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Propósito:] establecer escenarios de riesgo.
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Evidencia:] matriz de riesgos.
          

        .row.align-items-center
          .col-sm-12.col-lg-9
            h4 Proteger
            ul.lista-ul--color.mb-0.mcus-1
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Acción:] aplicar controles técnicos y organizacionales.
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Propósito:] reducir probabilidad e impacto.
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Evidencia:] registro de configuraciones y procedimientos.
          .col-sm-12.col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/18.svg')

        .row.align-items-center
          .col-sm-12.col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/19.svg')
          .col-sm-12.col-lg-9
            h4 Monitorear
            ul.lista-ul--color.mb-0.mcus-1
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Acción:] identificar eventos y desviaciones.
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Propósito:] detectar situaciones que requieren atención.
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Evidencia:] alertas y bitácoras.
          

        .row.align-items-center
          .col-sm-12.col-lg-9
            h4 Responder
            ul.lista-ul--color.mb-0.mcus-1
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Acción:] activar procedimientos definidos.
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Propósito:] contener y gestionar incidentes.
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Evidencia:] registro de acciones y responsables.
          .col-sm-12.col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/20.svg')

        .row.align-items-center
          .col-sm-12.col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/21.svg')
          .col-sm-12.col-lg-9
            h4 Recuperar
            ul.lista-ul--color.mb-0.mcus-1
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Acción:] restaurar servicios y revisar resultados.
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Propósito:] fortalecer continuidad y mejora.
              li.d-flex
                i.fas.fa-lock-cus
                p.mb-0 #[b Evidencia:] pruebas de recuperación e informe final.
          





      p.mb-0(data-aos='fade-right') Esta ruta permite que la mitigación no se limite a aplicar controles de manera aislada. La identificación, el análisis, la protección, el monitoreo, la respuesta y la recuperación deben documentarse para validar resultados y fortalecer la mejora continua.


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
