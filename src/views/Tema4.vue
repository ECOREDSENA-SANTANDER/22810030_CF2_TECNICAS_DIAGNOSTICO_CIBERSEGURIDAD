<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Internet seguro y clasificación de entornos web
      
      .row.justify-content-center.mb-0.align-items-center.bg-color-6(data-aos='fade-right')
        .col-sm-12.col-lg-7.mx-0.px-0
          .px-4.pcus-1
            img.wcus-1.mb-4(src='@/assets/curso/temas/t4/2.svg', alt='').mb-3
            p.mb-3.text-white El uso seguro de internet requiere comprender que no todo el contenido digital se encuentra organizado o accesible de la misma manera. La clasificación entre web visible, #[i deep web] y #[i dark web] facilita orientar prácticas de búsqueda, navegación y gestión de riesgos.
            p.mb-0.text-white El análisis debe evitar simplificaciones. La #[i deep web] no equivale necesariamente a actividades ilícitas. Muchos contenidos legítimos no aparecen en los motores de búsqueda porque requieren autenticación o pertenecen a sistemas internos. La #[i dark web] tampoco debe abordarse desde la curiosidad operativa; su estudio tiene una finalidad conceptual y preventiva.

        .col-sm-12.col-lg-5.d-none.d-lg-block.px-0
          img(src='@/assets/curso/temas/t4/1.png', alt='')
      
      
      
      
      
      Separador
      #t_4_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 4.1 #[i Clean web], #[i deep web] y #[i dark web]
      
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-9.position-relative
          .avatar
            figure
              img(src="@/assets/curso/temas/t4/3.svg", alt="alt").img250
          
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t4/4.svg", alt="alt").img100
              .col
                p.mb-0 La expresión #[i clean web] se utiliza en algunos contextos formativos para referirse a la web visible o surface web. Comprende sitios y contenidos que pueden encontrarse mediante motores de búsqueda convencionales. Páginas institucionales, blogs y portales públicos forman parte de este entorno.
          
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t4/5.svg", alt="alt").img100
              .col
                p.mb-0 La #[i deep web] comprende contenidos que no se encuentran indexados por los motores de búsqueda habituales, pero que pueden ser legítimos y accesibles mediante permisos. Entre ellos se encuentran plataformas con autenticación, intranets, bases de datos internas y repositorios restringidos.
          
          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t4/6.svg", alt="alt").img100
              .col
                p.mb-0.text-white La #[i dark web] constituye una capa de la #[i deep web] que suele requerir software específico y ofrecer mayores niveles de anonimato. La Oficina de Propiedad Intelectual de la Unión Europea explicó en 2024 que la #[i deep web] incluye sitios detrás de pagos, autenticación o redes internas, mientras que la dark web corresponde a otra capa que normalmente necesita herramientas específicas y ofrece navegación más anónima (European Union Intellectual Property Office [EUIPO], 2024).
      
      p.mb-3(data-aos='fade-right') Europol ha señalado que la #[i dark web] puede utilizarse para promocionar mercados y foros relacionados con actividades criminales. Sin embargo, el enfoque educativo no debe fomentar su acceso. El objetivo consiste en reconocer riesgos, comprender conceptos y desarrollar criterios responsables (Europol, 2024).
      p.mb-5(data-aos='fade-right') Para diferenciar estos entornos, la comparación puede presentarse mediante ventanas modales que permitan revisar sus características, ejemplos legítimos y consideraciones de seguridad.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación general de ataques

      .tarjeta.bg-fondo-1.p-5.mb-5(data-aos='fade-right')
        SlyderA(tipo="b")
          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7.text-white
              h4 #[i Clean web o surface web]
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Característica:] contenido accesible e indexado por motores de búsqueda convencionales.
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Ejemplo legítimo:] sitio web institucional o portal informativo.
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Consideración de seguridad:] verificar autenticidad, dominio y tratamiento de datos.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/7.png', alt='')

          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7.text-white
              h4 #[i Deep web] 
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Característica:] contenido no indexado que puede requerir autenticación o permisos.
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Ejemplo legítimo:] plataforma virtual, correo o repositorio interno.
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Consideración de seguridad:] proteger credenciales, permisos y privacidad.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/8.png', alt='')

          .row.justify-content-center.mb-0.align-items-center
            .col-sm-12.col-lg-7.text-white
              h4 #[i Dark web] 
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Característica:] capa con mayor anonimato que suele requerir herramientas específicas.
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Ejemplo legítimo:] su análisis puede ser pertinente para investigación autorizada especializada.
                li.d-flex
                  i.fas.fa-lock-cus-white
                  p.mb-0.text-2 #[b Consideración de seguridad:] no promover navegación exploratoria; aplicar criterios legales, éticos y de seguridad.
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/9.png', alt='')









      p.mb-0(data-aos='fade-right') Esta clasificación permite comprender que cada entorno requiere criterios diferentes. La navegación segura no depende solo del lugar al que se accede, sino también de la finalidad, la autorización, la fuente consultada y el tratamiento responsable de la información.

      Separador
      #t_4_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 4.2 Búsquedas seguras y criterios de consulta
      
      
      .bloque-texto-g.color-adicional-1.p-3.p-sm-4.p-md-5.mb-5.br-1(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/10.png')})`}"
        )
        .bloque-texto-g__texto.p-4.br-2.d-flex.flex-column
          p.mb-3 Los motores de búsqueda recopilan, organizan e indexan contenidos públicos. Su uso facilita acceder a información, pero también requiere pensamiento crítico. Un resultado destacado no garantiza autenticidad ni confiabilidad.
          p.mb-0 El aprendiz debe verificar dominio, fuente, actualidad y finalidad. Antes de ingresar credenciales, conviene acceder directamente al sitio institucional. Los enlaces recibidos mediante mensajes requieren especial atención. También debe distinguir publicidad, contenidos patrocinados y resultados orgánicos cuando la plataforma los presente.
      
      p.mb-3(data-aos='fade-right') En formación profesional, una búsqueda segura puede orientarse a consultar documentación técnica oficial. Para revisar una vulnerabilidad, deben priorizarse fuentes institucionales, bases reconocidas y documentación del fabricante. La calidad de la fuente influye en la calidad del diagnóstico.
      p.mb-5(data-aos='fade-right') Los criterios de búsqueda segura ayudan a reducir riesgos durante la consulta de información técnica y la revisión de fuentes digitales.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ruta para realizar búsquedas seguras

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/16.png', alt='')
        .col-sm-12.col-lg-9
          SlyderF.mb-0.circl-arrow(columnas="col-md-6 col-xl-4")
              .tarjeta.bg-color-3.p-4.hcard-1
                .row.justify-content-center.mb-4
                  .col-7
                    img(src='@/assets/curso/temas/t4/11.svg', alt='')
                .bg-color-acento-botones.mb-4.py-1
                  p.mb-0.text-center.fw-bold.text-white Verificar el dominio
                p.mb-0.text-center Revise si la dirección corresponde a una entidad, fabricante o fuente institucional confiable.

              .tarjeta.bg-color-3.p-4.hcard-1
                .row.justify-content-center.mb-4
                  .col-7
                    img(src='@/assets/curso/temas/t4/12.svg', alt='')
                .bg-color-acento-botones.mb-4.py-1
                  p.mb-0.text-center.fw-bold.text-white Revisar la fuente
                p.mb-0.text-center Identifique quién publica la información y si cuenta con respaldo técnico o institucional.

              .tarjeta.bg-color-3.p-4.hcard-1
                .row.justify-content-center.mb-4
                  .col-7
                    img(src='@/assets/curso/temas/t4/13.svg', alt='')
                .bg-color-acento-botones.mb-4.py-1
                  p.mb-0.text-center.fw-bold.text-white Confirmar la actualidad
                p.mb-0.text-center Analice si la información está vigente y corresponde al contexto de la consulta.

              .tarjeta.bg-color-3.p-4.hcard-1
                .row.justify-content-center.mb-4
                  .col-7
                    img(src='@/assets/curso/temas/t4/14.svg', alt='')
                .bg-color-acento-botones.mb-4.py-1
                  p.mb-0.text-center.fw-bold.text-white Reconocer la finalidad
                p.mb-0.text-center Determine si el contenido informa, promociona, solicita datos o intenta dirigir una acción.

              .tarjeta.bg-color-3.p-4.hcard-1
                .row.justify-content-center.mb-4
                  .col-7
                    img(src='@/assets/curso/temas/t4/15.svg', alt='')
                .bg-color-acento-botones.mb-4.py-1
                  p.mb-0.text-center.fw-bold.text-white Priorizar fuentes oficiales
                p.mb-0.text-center Consulte documentación técnica, bases reconocidas, repositorios normativos o fuentes académicas.
      p.mb-0(data-aos='fade-right') Esta ruta fortalece la consulta responsable de información y evita que el diagnóstico se base en resultados poco confiables, enlaces riesgosos o fuentes sin respaldo técnico.

      Separador
      #t_4_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
        h2 4.3 Buscadores especializados y criterios de seguridad

      p.mb-5(data-aos='fade-right') Los buscadores especializados permiten localizar información en ámbitos concretos, como documentación académica, normativa o repositorios técnicos. Su utilización puede mejorar la precisión de una consulta. Sin embargo, deben aplicarse criterios de seguridad y pertinencia.

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/17.png', alt='')
        .col-sm-12.col-lg-6
          img.wcus-1(src='@/assets/curso/temas/t4/18.svg', alt='').mb-3
          p.mb-3 El término “buscadores especiales” no debe interpretarse como una invitación a explorar entornos de riesgo. La formación se concentra en herramientas legítimas para consultar información verificable: repositorios normativos, bases de vulnerabilidades, documentación oficial y fuentes académicas.
          p.mb-0 Una pregunta orientadora resulta útil: ¿la fuente consultada permite verificar la información sin exponer al usuario ni promover prácticas indebidas? La respuesta debe guiar el proceso. Un diagnóstico responsable utiliza fuentes confiables, documenta la consulta y protege los datos.

      
      
        

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
