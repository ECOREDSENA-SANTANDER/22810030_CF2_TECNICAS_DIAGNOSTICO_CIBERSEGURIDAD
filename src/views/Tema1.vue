<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Desarrollo seguro y protección de aplicaciones
      
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-0.br-3(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.br-4.d-flex.flex-column
          p.mb-0 El desarrollo seguro y la protección de aplicaciones integran prácticas preventivas orientadas a reducir vulnerabilidades antes de que los servicios lleguen a producción. Este tema aborda la importancia del código seguro, la protección de aplicaciones web y servicios en la nube, el análisis de código, el monitoreo y el registro de hallazgos como acciones necesarias para fortalecer la seguridad de la información.
      
      
      Separador
      #t_1_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 1.1 Código seguro y prevención de vulnerabilidades
      
      p.mb-5(data-aos='fade-right') La seguridad de una aplicación no debería incorporarse únicamente al final del desarrollo. Cuando las prácticas preventivas se integran desde el diseño, resulta posible reducir vulnerabilidades antes de que lleguen a producción. El concepto de código seguro no significa que un programa pueda considerarse completamente libre de riesgos. Significa que el desarrollo adopta criterios para prevenir debilidades, detectar errores y responder oportunamente ante hallazgos.

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/2.png')
        .col-sm-12.col-lg-7
          img.wcus-1(src='@/assets/curso/temas/t1/3.svg').mb-3
          p.mb-3 NIST publicó el #[i Secure Software Development Framework (SSDF)] versión 1.1 como un conjunto de prácticas de alto nivel orientadas a reducir el riesgo de vulnerabilidades de #[i software]. El marco busca integrarse a los ciclos de desarrollo existentes, debido a que muchos modelos tradicionales no abordan la seguridad con suficiente detalle (NIST, 2022).
          p.mb-0 El código seguro corresponde al #[i software] desarrollado mediante prácticas que reducen la posibilidad de errores aprovechables, protegen los datos y facilitan la detección de comportamientos no esperados. Su calidad no depende únicamente de que la aplicación cumpla una función. También debe analizarse cómo procesa entradas, administra sesiones, controla permisos, registra eventos y maneja errores.
      
      .cajon.color-acento-botones.p-4.mb-5(data-aos='fade-right')
        p.mb-0 Una aplicación puede funcionar correctamente para un usuario legítimo y, al mismo tiempo, presentar vulnerabilidades. Por ejemplo, un formulario de contacto puede almacenar mensajes sin validar adecuadamente los datos ingresados. Una página administrativa puede mostrar información sensible a usuarios sin los permisos apropiados. Un sistema puede presentar mensajes de error que revelan detalles internos. Estas situaciones demuestran que funcionalidad y seguridad son dimensiones relacionadas, pero diferentes.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          p.mb-3 El código seguro se caracteriza por adoptar controles proporcionales al riesgo. La aplicación debe validar datos, administrar errores de forma adecuada, proteger credenciales, aplicar controles de acceso y registrar actividades relevantes. También debe utilizar componentes confiables y mantenerse actualizada. El objetivo no consiste en agregar barreras innecesarias, sino en proteger el servicio y a sus usuarios.

          p.mb-0 La prevención de vulnerabilidades requiere integrar la seguridad en las diferentes etapas del ciclo de desarrollo. Para facilitar su comprensión, el siguiente recurso presenta los momentos principales en los que pueden incorporarse acciones preventivas.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/4.png')

      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Seguridad durante el ciclo de desarrollo

      TabsC.color-acento-botones.mb-5(data-aos='fade-right')
          .py-3.py-md-4(titulo="Planeación").bg-color-1
            .row.justify-content-center.mb-0.align-items-center
              .col-sm-12.col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/5.png')
              .col-sm-12.col-lg-5.pcus-1
                p.mb-0 Se identifican requisitos y riesgos antes de iniciar el desarrollo de la aplicación.
          .py-3.py-md-4(titulo="Diseño").bg-color-1
            .row.justify-content-center.mb-0.align-items-center
              .col-sm-12.col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/6.png')
              .col-sm-12.col-lg-5.pcus-1
                p.mb-0 Se definen controles, flujos y criterios de seguridad acordes con el servicio.  
          .py-3.py-md-4(titulo="Construcción").bg-color-1
            .row.justify-content-center.mb-0.align-items-center
              .col-sm-12.col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/7.png')
              .col-sm-12.col-lg-5.pcus-1
                p.mb-0 Se aplican prácticas de codificación segura y control de dependencias.   
          .py-3.py-md-4(titulo="Pruebas").bg-color-1
            .row.justify-content-center.mb-0.align-items-center
              .col-sm-12.col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/8.png')
              .col-sm-12.col-lg-5.pcus-1
                p.mb-0 Se verifican comportamientos, entradas, permisos y posibles errores.   
          .py-3.py-md-4(titulo="Despliegue y operación").bg-color-1
            .row.justify-content-center.mb-0.align-items-center
              .col-sm-12.col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/9.png')
              .col-sm-12.col-lg-5.pcus-1
                p.mb-0 Se revisan configuraciones, se monitorean eventos y se gestionan actualizaciones.   

      .bloque-texto-g.color-adicional-1.p-3.p-sm-4.p-md-5.mb-5.br-1(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/10.png')})`}"
        )
        .bloque-texto-g__texto.p-4.br-2.d-flex.flex-column
          p.mb-3 El SSDF de NIST agrupa prácticas de desarrollo seguro para facilitar su incorporación a distintos ciclos de vida. Su utilidad pedagógica consiste en demostrar que la seguridad no corresponde a una actividad aislada. Una vulnerabilidad detectada en producción puede tener origen en una decisión temprana: una dependencia no verificada, un requisito incompleto o una configuración predeterminada insegura (NIST, 2022).
          p.mb-0 Entre las buenas prácticas se encuentra la validación de entradas. Una aplicación no debe asumir que todo dato recibido es confiable. También resulta importante controlar permisos, evitar la exposición de secretos en el código fuente, gestionar dependencias, revisar cambios y mantener trazabilidad. Cada práctica responde a una pregunta concreta: ¿qué podría ocurrir si el sistema recibe datos inesperados, si un usuario intenta acceder a una función restringida o si un componente deja de recibir actualizaciones?

      p.mb-0(data-aos='fade-right') OWASP #[i Application Security Verification Standard (ASVS)] versión 5.0 ofrece requisitos verificables para diseñar, desarrollar y evaluar aplicaciones web y servicios modernos. El estándar facilita establecer criterios de seguridad y niveles de rigor según el contexto de la aplicación (OWASP Foundation, 2025a). Su aporte no consiste en reemplazar el análisis, sino en aportar una referencia estructurada.

      Separador
      #t_1_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 1.2 Aplicaciones web, servicios en la nube y criterios de seguridad
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/11.png')
        .col-sm-12.col-lg-7
          p.mb-3 Las aplicaciones web y los sistemas en la nube forman parte de la operación cotidiana de organizaciones educativas, empresas y emprendimientos. Permiten publicar información, recibir solicitudes, almacenar documentos, administrar procesos y ofrecer servicios a usuarios ubicados en distintos lugares. Esta flexibilidad también amplía la superficie de exposición y exige aplicar criterios de seguridad.
          p.mb-0 La prevención comienza por comprender la arquitectura. Un sitio web no está compuesto únicamente por páginas visibles. Puede incluir servidor, base de datos, formularios, #[i API], sistema de autenticación, cuentas administrativas, componentes de terceros y servicios #[i cloud]. Cada elemento requiere controles y monitoreo.
      
      p.mb-5(data-aos='fade-right') Una aplicación web es un sistema al que se accede mediante navegador u otro cliente conectado a una red. Puede cumplir funciones informativas, transaccionales o colaborativas. Un portal institucional publica contenidos; una plataforma de matrícula procesa registros; un sistema de comercio electrónico administra pedidos; y un aula virtual facilita interacción formativa.

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-9
          .bg-color-2.px-5.py-4
            p.mb-3 Las aplicaciones web operan mediante intercambio de solicitudes y respuestas. El usuario envía datos; el sistema procesa la información; y el servidor entrega un resultado. Esta interacción parece sencilla, pero involucra múltiples componentes. Una falla en cualquiera de ellos puede afectar la seguridad.

            p.mb-3 En una institución educativa, un formulario de inscripción puede recopilar nombre, identificación, correo y programa de interés. La organización debe preguntarse qué datos son necesarios, quién puede consultarlos y cómo se protegen. La seguridad web no se limita a impedir ataques; también implica tratar la información de manera responsable.

            p.mb-0 La seguridad requiere aplicar criterios coherentes con el servicio. El siguiente recurso organiza los principales criterios que deben considerarse para proteger aplicaciones web y servicios en la nube.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/12.png')
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Criterios de seguridad en aplicaciones web

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/13.png')
        .col-sm-12.col-lg-9
          SlyderF.mb-0.circl-arrow(columnas="col-md-6 col-xl-4")
              .tarjeta.bg-color-3.p-4.hcard-1
                .row.justify-content-center.mb-4
                  .col-7
                    img(src='@/assets/curso/temas/t1/14.svg')
                .bg-color-acento-botones.mb-4.py-1 
                  p.mb-0.text-center.fw-bold.text-white Gestión de identidades
                p.mb-0.text-center Permite limitar permisos y controlar el acceso a funciones sensibles.
              .tarjeta.bg-color-3.p-4.hcard-1
                .row.justify-content-center.mb-4
                  .col-7
                    img(src='@/assets/curso/temas/t1/15.svg')
                .bg-color-acento-botones.mb-4.py-1
                  p.mb-0.text-center.fw-bold.text-white Configuración segura
                p.mb-0.text-center Reduce condiciones de exposición generadas por ajustes predeterminados o innecesarios.
              .tarjeta.bg-color-3.p-4.hcard-1
                .row.justify-content-center.mb-4
                  .col-7
                    img(src='@/assets/curso/temas/t1/16.svg')
                .bg-color-acento-botones.mb-4.py-1
                  p.mb-0.text-center.fw-bold.text-white Actualización de componentes
                p.mb-0.text-center Disminuye riesgos asociados con vulnerabilidades divulgadas.
              .tarjeta.bg-color-3.p-4.hcard-1
                .row.justify-content-center.mb-4
                  .col-7
                    img(src='@/assets/curso/temas/t1/17.svg')
                .bg-color-acento-botones.mb-4.py-1
                  p.mb-0.text-center.fw-bold.text-white Protección de la información
                p.mb-0.text-center Orienta el cuidado de los datos durante su transmisión y almacenamiento.
              .tarjeta.bg-color-3.p-4.hcard-1
                .row.justify-content-center.mb-4
                  .col-7
                    img(src='@/assets/curso/temas/t1/18.svg')
                .bg-color-acento-botones.mb-4.py-1
                  p.mb-0.text-center.fw-bold.text-white Registros y copias de respaldo
                p.mb-0.text-center Facilita la revisión de eventos y la recuperación ante una afectación.
      .cajon.color-acento-botones.p-4.mb-4(data-aos='fade-right')
        p.mb-0 La autenticación multifactor aporta una capa adicional, especialmente para cuentas administrativas. El privilegio mínimo limita el alcance de una cuenta comprometida. La segmentación reduce la propagación. El monitoreo facilita detectar cambios. La gestión de actualizaciones disminuye exposición a vulnerabilidades divulgadas.
      
      p.mb-0(data-aos='fade-right') El análisis debe considerar la experiencia del usuario. Un control que impide realizar tareas legítimas puede generar prácticas alternativas inseguras. Por ello, la seguridad necesita equilibrio entre protección y usabilidad. La organización debe diseñar procedimientos claros y acompañar a los usuarios.

      Separador
      #t_1_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 1.3 Análisis de código, monitoreo y registro de hallazgos
      
      .row.justify-content-center.mb-5.align-items-center.bg-color-4(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.px-0
          img(src='@/assets/curso/temas/t1/19.png')
        .col-sm-12.col-lg-7.mx-0.px-0
          .px-4.pcus-1
            img.wcus-1(src='@/assets/curso/temas/t1/20.svg').mb-3
            p.mb-3.text-white El análisis de código permite identificar debilidades antes o durante el despliegue. Puede desarrollarse mediante revisión manual, análisis automatizado y evaluación de componentes. Cada técnica aporta información diferente.
            p.mb-0.text-white La revisión manual ayuda a comprender decisiones lógicas, flujos de datos y controles de acceso. Su valor reside en la interpretación contextual. El análisis automatizado puede detectar patrones inseguros, errores frecuentes o dependencias vulnerables. Sin embargo, sus resultados requieren validación. Una herramienta puede generar falsos positivos o no comprender completamente la lógica del negocio.

      p.mb-5(data-aos='fade-right') El análisis estático examina el código sin ejecutar la aplicación. Puede identificar prácticas inseguras, secretos expuestos o patrones de error. El análisis dinámico revisa el comportamiento durante la ejecución. Permite analizar cómo responde la aplicación frente a solicitudes, sesiones o entradas. El análisis de composición de #[i software] se concentra en bibliotecas y dependencias incorporadas al proyecto. Esta revisión resulta relevante porque una aplicación puede utilizar componentes desarrollados por terceros.


      .bg-color-5.px-4.py-5.mb-5(data-aos='fade-right')
        p.mb-3 La revisión de código y las pruebas de seguridad deben generar documentación útil. Un hallazgo debe incluir el componente afectado, la descripción de la debilidad, la evidencia, el impacto potencial, la prioridad y la recomendación. Esta estructura evita expresiones genéricas como “la aplicación es insegura”.
        p.mb-0 Las prácticas de desarrollo seguro deben relacionarse con acciones preventivas y evidencias verificables. Para presentar esta relación de forma más clara, la información se organiza en una infografía de ventanas modales.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Prácticas de desarrollo seguro y acciones preventivas
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          ImagenInfograficaB.color-primario.mb-4
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/t1/21.svg')
            div(x="54%" y="28%")
              h5.text-1 Validar datos de entrada
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Finalidad:] evitar que la aplicación procese información inesperada o manipulada.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Ejemplo aplicado:] revisar los campos de un formulario web.
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Evidencia para validar:] resultado de pruebas con datos válidos y no válidos.
            div(x="54%" y="39.5%" )
              h5 Aplicar control de acceso
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Finalidad:] restringir funciones según el rol del usuario. 
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Ejemplo aplicado:] impedir que un usuario básico consulte el panel administrativo. 
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Evidencia para validar:] registro de permisos y resultado de pruebas por perfil.
            div(x="54%" y="52%" )
              h5 Gestionar dependencias
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Finalidad:] reducir riesgos asociados con componentes desactualizados. 
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Ejemplo aplicado:] verificar bibliotecas utilizadas por un sitio web. 
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Evidencia para validar:] inventario de versiones y contraste con fuentes técnicas.
            div(x="54%" y="63%" )
              h5 Manejar errores de forma segura
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Finalidad:] evitar la exposición de detalles internos. 
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Ejemplo aplicado:] configurar mensajes comprensibles sin revelar información sensible. 
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Evidencia para validar:] capturas anonimizadas y revisión de registros.
            div(x="54%" y="74%" )
              h5 Registrar eventos relevantes
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Finalidad:] facilitar monitoreo, validación y respuesta. 
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Ejemplo aplicado:] conservar trazabilidad de accesos fallidos y cambios administrativos. 
                li.d-flex
                  i.fas.fa-lock-cus
                  p.mb-0.text-2 #[b Evidencia para validar:] conservar trazabilidad de accesos fallidos y cambios administrativos.
      p.mb-5(data-aos='fade-right') La documentación de hallazgos permite que las acciones preventivas no queden como actividades aisladas. Cuando se conserva evidencia, se facilita la validación posterior y se mejora la toma de decisiones frente a nuevas revisiones de seguridad.

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-9
          .bg-color-2.px-5.py-4.mb-3
            p.mb-3 El monitoreo permite identificar eventos, cambios y comportamientos relevantes. Puede incluir registros de acceso, alertas, consumo de recursos, modificaciones administrativas y eventos de seguridad. La finalidad no consiste en acumular datos sin criterio, sino en obtener visibilidad útil.
            p.mb-0 Una metodología básica establece qué se debe monitorear, con qué frecuencia, quién revisa las alertas y cómo se documentan los resultados. La ausencia de responsables convierte el monitoreo en una actividad incompleta. Una alerta no gestionada aporta poca protección.
          p.mb-0 Las herramientas dependen del entorno. Un servidor puede generar registros de accesos y errores. Una plataforma #[i cloud] puede ofrecer paneles de actividad. Una aplicación web puede conservar eventos de autenticación. Un sistema de protección puede detectar comportamientos anómalos. La selección debe responder al riesgo y a la capacidad institucional.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/22.png')
      .cajon.color-acento-botones.p-4.mb-0(data-aos='fade-right')
        p.mb-0 En formación virtual, un laboratorio puede incluir registros simulados. El aprendiz identifica intentos fallidos, cambios de permisos y accesos inusuales. Posteriormente, clasifica los eventos y determina cuáles requieren revisión. Esta práctica desarrolla capacidad analítica sin afectar sistemas reales.
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
