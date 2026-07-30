<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 La protección de la información y de los servicios digitales requiere avanzar desde la identificación inicial de vulnerabilidades hacia la ejecución de acciones preventivas y la validación de resultados. Un diagnóstico permite reconocer debilidades, amenazas y riesgos; sin embargo, su valor se concreta cuando la organización selecciona herramientas apropiadas, monitorea su infraestructura, aplica controles y verifica si las medidas implementadas reducen efectivamente la exposición. La ciberseguridad debe entenderse, por tanto, como un proceso continuo de seguimiento, decisión, actuación y mejora.

    .bloque-texto-g.color-adicional-1.p-3.p-sm-4.p-md-5.mb-5.br-1
      .bloque-texto-g__img.d-none.d-lg-block(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.br-2.d-flex.flex-column
        p.mb-3 En el componente Pruebas de seguridad y mitigación de riesgos, el aprendiz analizará situaciones aplicadas a infraestructuras tecnológicas, aplicaciones web, servicios alojados en la nube, dispositivos conectados y fuentes masivas de datos. Esta diversidad responde a una realidad organizacional: los sistemas ya no se encuentran necesariamente concentrados en un único lugar. Una institución educativa puede gestionar plataformas virtuales, sitios web, repositorios colaborativos, redes inalámbricas, cámaras conectadas y bases de datos con información académica. Una unidad productiva puede utilizar sistemas de facturación, servicios cloud, formularios web y dispositivos de monitoreo. Cada elemento aporta valor, pero también introduce condiciones de seguridad que deben revisarse.

        p.mb-0 El desarrollo temático mantiene una progresión pedagógica. En primer lugar, se explica la transición entre exploración, prevención y validación. Posteriormente, se profundiza en código seguro, aplicaciones web y sistemas en la nube. En los siguientes apartados se abordarán internet de las cosas, monitoreo de infraestructura, taxonomía de ataques, cibercrimen, amenazas dirigidas a personas, infraestructuras críticas e internet seguro.

    .cajon.color-acento-botones.p-4.mb-4
      p.mb-0 El componente también fortalece una postura ética. Las pruebas de seguridad, el monitoreo y la validación deben realizarse únicamente sobre sistemas autorizados o entornos de laboratorio. El conocimiento adquirido se orienta a proteger activos, reducir riesgos y mejorar procesos. La formación profesional integral exige utilizar la tecnología con responsabilidad, respetar la privacidad de las personas y comunicar los hallazgos mediante canales adecuados.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
