<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Pruebas de seguridad y mitigación de riesgos desarrolla una visión aplicada de la ciberseguridad orientada a la prevención, el monitoreo y la validación de resultados. La protección de los activos requiere integrar código seguro, control de accesos, gestión de vulnerabilidades, seguridad en servicios cloud, protección de dispositivos #[i IoT], análisis de ataques, clasificación de entornos #[i web], revisión de registros y documentación de hallazgos. Las herramientas tecnológicas apoyan la identificación y respuesta, pero su efectividad depende de procedimientos definidos, responsables asignados y evidencias verificables.

    p La mitigación de riesgos es un proceso continuo que implica identificar activos, analizar vulnerabilidades y amenazas, seleccionar controles, implementar acciones, validar su efectividad y documentar resultados. El aprendiz fortalece su capacidad para interpretar ataques, comprender la evolución del cibercrimen, reconocer amenazas dirigidas a personas, aplicar criterios de navegación segura y proponer medidas para proteger información, servicios e infraestructuras críticas desde una actuación ética y responsable.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual del componente Pruebas de seguridad y mitigación de riesgos. Presenta cinco ejes principales: desarrollo seguro, dispositivos e infraestructuras, ataques y cibercrimen, internet seguro, y monitoreo y mitigación. Incluye conceptos asociados como código seguro, aplicaciones web y cloud, IoT, infraestructuras críticas, clasificación de ataques, amenazas a personas, búsquedas seguras, herramientas de seguridad y validación de riesgos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
