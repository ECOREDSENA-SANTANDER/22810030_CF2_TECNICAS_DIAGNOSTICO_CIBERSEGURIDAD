<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos='fade-right')
        .titulo-principal__numero
          span 5
        h1 Monitoreo, mitigación y validación de riesgos
      
      
      .row.justify-content-center.mb-0.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/1.png', alt='')
        .col-sm-12.col-lg-9
          img.wcus-2(src='@/assets/curso/temas/t5/2.svg', alt='').mb-3.d-none.d-lg-block
          p.mb-0 El monitoreo, la mitigación y la validación de riesgos permiten pasar de la identificación de vulnerabilidades a la toma de decisiones sustentada en evidencias. Este tema aborda métodos de seguimiento, herramientas tecnológicas de seguridad, acciones de mitigación y procedimientos para comprobar si los controles aplicados reducen la exposición sin afectar el funcionamiento legítimo de los servicios.
      
      
      
      Separador
      #t_5_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 5.1 Métodos y técnicas de monitoreo
      
      .bloque-texto-g.color-adicional-1.p-3.p-sm-4.p-md-5.mb-5.br-1(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/3.png')})`}"
        )
        .bloque-texto-g__texto.p-4.br-2.d-flex.flex-column
          p.mb-3 El monitoreo de red permite analizar el comportamiento de los activos tecnológicos, reconocer desviaciones frente a la operación esperada y recopilar evidencias para la toma de decisiones. Su finalidad no consiste en vigilar indiscriminadamente cada interacción ni en almacenar datos sin criterios definidos. Un monitoreo responsable responde a objetivos concretos de seguridad, respeta la privacidad y facilita la detección oportuna de eventos que podrían afectar los servicios.
          p.mb-0 La infraestructura tecnológica produce información de manera continua. Los servidores registran accesos, errores y cambios; las aplicaciones conservan eventos de autenticación; los dispositivos conectados generan comunicaciones; y los servicios en la nube proporcionan métricas, alertas y registros de actividad. El valor de estos datos depende de la capacidad organizacional para analizarlos y relacionarlos con activos, riesgos y necesidades reales.
      
      p.mb-5 El monitoreo comienza con la identificación de los activos que requieren seguimiento. Una organización debe reconocer qué equipos, aplicaciones, servicios, cuentas y dispositivos forman parte de su infraestructura. Después, necesita definir qué comportamiento espera de ellos y qué cambios podrían representar una desviación relevante.
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/4.png', alt='')
        .col-sm-12.col-lg-7
          img.wcus-1(src='@/assets/curso/temas/t5/5.svg', alt='').mb-3
          p.mb-3 Una línea base describe la condición habitual o esperada de un activo. Puede incluir aplicaciones instaladas, servicios habilitados, horarios de uso, conexiones permitidas y niveles aproximados de consumo de recursos. La comparación con esta referencia ayuda a detectar comportamientos anómalos.
          p.mb-0 Considérese una plataforma virtual utilizada principalmente durante jornadas académicas. Un aumento de accesos durante la entrega de actividades puede ser legítimo. Sin embargo, múltiples intentos fallidos sobre una cuenta administrativa en un horario inusual requieren revisión. La diferencia no se determina únicamente mediante una alerta automática: exige comprender el contexto.

      .row.justify-content-center.mb-0.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-7
          p.mb-5 Los métodos de monitoreo pueden incluir revisión de registros, análisis de tráfico, análisis de métricas, seguimiento de configuraciones y correlación de eventos. Cada técnica aporta una perspectiva distinta. Los registros permiten reconstruir acciones; las métricas muestran cambios en disponibilidad o consumo; y la revisión de configuraciones identifica modificaciones que podrían ampliar la exposición.

          .cajon.color-acento-botones.p-4.mb-0
            p.mb-0 El monitoreo continuo no significa revisar manualmente cada evento en todo momento. Significa establecer una frecuencia suficiente para tomar decisiones basadas en riesgos. Una pequeña organización puede comenzar con procedimientos sencillos: conservar registros esenciales, revisar alertas prioritarias y asignar responsables. La calidad del proceso depende más de su coherencia y continuidad que de la cantidad de herramientas instaladas.

        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/6.svg', alt='')


      Separador
      #t_5_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 5.2 Herramientas tecnológicas de seguridad
      
      img.d-none.d-lg-block(src='@/assets/curso/temas/t5/7.png', alt='')
      
      p.mb-3 Las herramientas apoyan la prevención, detección, análisis y respuesta. Su selección debe corresponder con el tipo de activo, el riesgo identificado y la capacidad de la organización. Una solución avanzada puede resultar poco útil si no existe personal encargado de revisar sus alertas. Una herramienta básica puede aportar valor cuando se integra a un procedimiento claro.
      p.mb-5 Las herramientas de seguridad pueden organizarse según su finalidad, aplicación posible y criterio de selección. Para facilitar su consulta, la siguiente información se presenta como un recurso interactivo.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Herramientas de seguridad y criterios de selección

      .tarjeta.bg-fondo-2.p-5.mb-5(data-aos='fade-right')
        SlyderA(tipo="b")
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7
              h4 Inventario automatizado
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Finalidad principal:] reconocer activos de #[i hardware] y #[i software].
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Aplicación posible:] identificar equipos conectados y aplicaciones instaladas.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Criterio de selección:] debe facilitar actualización, clasificación y asignación de responsables.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/8.png', alt='')

          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7
              h4 Escáner de vulnerabilidades
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Finalidad principal:] detectar condiciones técnicas que requieren validación.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Aplicación posible:] revisar versiones, servicios y configuraciones en entornos autorizados.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Criterio de selección:] debe utilizarse con alcance definido y aprobado.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/9.png', alt='')

          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7
              h4 #[i Antimalware]
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Finalidad principal:] prevenir, detectar o contener #[i software] perjudicial.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Aplicación posible:] proteger equipos de usuario y servidores.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Criterio de selección:] requiere actualización, monitoreo y revisión de alertas.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/10.png', alt='')

          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7
              h4 #[i Firewall]
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Finalidad principal:] controlar comunicaciones según reglas definidas.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Aplicación posible:] limitar accesos y reducir exposición innecesaria.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Criterio de selección:] las reglas deben documentarse y validarse.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/11.png', alt='')

          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7
              h4 #[i IDS o IPS]
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Finalidad principal:] detectar o bloquear patrones asociados con actividades anómalas.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Aplicación posible:] identificar eventos de red o proteger servicios relevantes.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Criterio de selección:] debe ajustarse para equilibrar protección y operación legítima.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/12.png', alt='')

          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7
              h4 #[i EDR]
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Finalidad principal:] comportamientos y facilitar respuesta en equipos finales.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Aplicación posible:] analizar actividad inusual en computadores y servidores.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Criterio de selección:] requiere responsables para investigar alertas.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/13.png', alt='')
          
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7
              h4 #[i SIEM]
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Finalidad principal:] centralizar y correlacionar registros.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Aplicación posible:] analizar accesos, alertas y eventos provenientes de múltiples fuentes.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Criterio de selección:] debe priorizar información útil y proteger los registros.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/14.png', alt='')

          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7
              h4 #[i SOAR]
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Finalidad principal:] automatizar y coordinar determinados flujos de respuesta.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Aplicación posible:] gestionar alertas repetitivas o procedimientos predefinidos.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Criterio de selección:] la automatización debe probarse en condiciones controladas.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/15.png', alt='')

          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7
              h4 Copias de respaldo
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Finalidad principal:] facilitar recuperación de información y servicios.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Aplicación posible:] restaurar datos después de una afectación.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Criterio de selección:] deben realizarse pruebas periódicas de recuperación.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/16.png', alt='')




      p.mb-0 La selección de herramientas no debe depender únicamente de la cantidad de funciones disponibles. Su valor se relaciona con la capacidad de integrarlas a procedimientos claros, asignar responsables, revisar alertas y documentar resultados.


      Separador
      #t_5_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 5.3 Mitigación de riesgos y verificación de resultados
      
      .row.justify-content-center.mb-5.align-items-center.bg-color-6(data-aos='fade-right')
        .col-sm-12.col-lg-7.mx-0.px-0
          .px-4.pcus-1
            p.mb-3.text-white La mitigación busca reducir la probabilidad de materialización o disminuir el impacto. Puede incluir controles preventivos, detectivos y correctivos. La selección depende del riesgo. Una vulnerabilidad de #[i software] puede requerir actualización; una configuración insegura puede necesitar ajustes; un acceso excesivo puede resolverse mediante privilegio mínimo; y una exposición de datos puede exigir restricciones adicionales.
            p.mb-0.text-white El tratamiento debe documentarse. Antes de modificar un sistema se registra el estado inicial. Después se aplica la acción en condiciones controladas. Finalmente, se valida que el cambio reduzca la exposición sin impedir el funcionamiento legítimo.
        .col-sm-12.col-lg-5.d-none.d-lg-block.px-0
          img(src='@/assets/curso/temas/t5/17.png', alt='')  


      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/18.svg', alt='')
        .col-sm-12.col-lg-7
          img.wcus-1(src='@/assets/curso/temas/t5/19.svg', alt='').mb-3
          p.mb-3 La validación puede incluir una nueva revisión de configuración, una prueba autorizada, el análisis de registros o una comparación antes y después. Cuando se corrige una debilidad en una aplicación, conviene realizar una prueba de regresión de seguridad para comprobar que la modificación no introdujo efectos no previstos.
          p.mb-3 NIST SP 800-61 Rev. 3 integra la respuesta a incidentes con la gestión de riesgos de ciberseguridad. El documento destaca la preparación, la reducción del número e impacto de incidentes y la mejora de las actividades de detección, respuesta y recuperación (NIST, 2025). Esta visión resulta aplicable a la mitigación: el aprendizaje no concluye cuando se ejecuta una acción; se completa cuando el resultado se verifica y se incorpora a la mejora continua.
          .bg-color-5.p-4
            p.mb-0 La mitigación y validación de riesgos pueden organizarse como una ruta que inicia con el análisis del riesgo y finaliza con la incorporación de aprendizajes al proceso.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ruta para mitigar y validar riesgos
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
          .col-sm-12.col-lg-8  
            PasosA.color-acento-botones.mb-5(tipo="n")(data-aos='fade-right')
              .row.align-items-center
                .col-sm-12.col-lg-9
                  h4 Analizar
                  ul.lista-ul--color.mb-0.mcus-1
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Acción:] revisar activo, vulnerabilidad, amenaza e impacto.
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Pregunta orientadora:] ¿qué riesgo requiere tratamiento prioritario?
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Evidencia:] matriz de riesgos y hallazgos.
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t5/20.svg')

              .row.align-items-center
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t5/21.svg')
                .col-sm-12.col-lg-9
                  h4 Seleccionar
                  ul.lista-ul--color.mb-0.mcus-1
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Acción:] elegir un control proporcional.
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Pregunta orientadora:] ¿qué medida reduce el riesgo sin afectar la operación legítima?
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Evidencia:] justificación técnica del control.

              .row.align-items-center
                .col-sm-12.col-lg-9
                  h4 Implementar
                  ul.lista-ul--color.mb-0.mcus-1
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Acción:] aplicar el ajuste en condiciones autorizadas.
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Pregunta orientadora:] ¿qué cambió y quién realizó la modificación?
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Evidencia:] registro de cambio.
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t5/22.svg')

              .row.align-items-center
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t5/23.svg')
                .col-sm-12.col-lg-9
                  h4 Validar
                  ul.lista-ul--color.mb-0.mcus-1
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Acción:] comprobar efectividad y funcionamiento.
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Pregunta orientadora:] ¿el control redujo la exposición y mantiene el servicio?
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Evidencia:] pruebas posteriores y registros.

              .row.align-items-center
                .col-sm-12.col-lg-9
                  h4 Documentar
                  ul.lista-ul--color.mb-0.mcus-1
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Acción:] consolidar resultados y recomendaciones.
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Pregunta orientadora:] ¿qué evidencia sustenta la conclusión?
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t5/24.svg')

              .row.align-items-center
                .col-sm-12.col-lg-3.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t5/25.svg')
                .col-sm-12.col-lg-9
                  h4 Mejorar
                  ul.lista-ul--color.mb-0.mcus-1
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Acción:] incorporar aprendizajes al proceso.
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Pregunta orientadora:] ¿qué debe revisarse periódicamente?
                    li.d-flex
                      i.fas.fa-lock-cus
                      p.mb-0 #[b Evidencia:] plan de seguimiento.

      p.mb-5 Esta ruta permite que la mitigación no se limite a ejecutar una acción técnica. La validación, la documentación y la mejora continua son necesarias para comprobar resultados, conservar trazabilidad y fortalecer futuras decisiones de seguridad.

      .cajon.color-acento-botones.p-4.mb-5(data-aos='fade-right')
        p.mb-0 Para complementar el estudio de la mitigación de riesgos y la verificación de resultados, acceda al pódcast Validar antes de cerrar: cómo comprobar una mitigación. En este recurso se explica por qué una acción de seguridad no debe considerarse finalizada hasta comprobar su efectividad, conservar evidencias y documentar los resultados. Esta información le permitirá fortalecer la toma de decisiones, validar controles aplicados y comprender la importancia de cerrar los hallazgos con criterios técnicos, éticos y verificables.

      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t5/26.png')(data-aos='fade-right')
      .row.justify-content-center.g-0.bg-primario.mb-5(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones.mb-0.p-4(
              texto="Pódcast. Validar antes de cerrar: cómo comprobar una mitigación"
              :audio="require_src('@/assets/curso/temas/t5/podcast.mp3')"
          )
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
