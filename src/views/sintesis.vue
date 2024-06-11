<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El estudio de la historia de las políticas agrarias en Colombia es de suma importancia por varias razones:
    p <b>1.	Contextualización histórica:</b> Permite comprender cómo han evolucionado las políticas agrarias a lo largo del tiempo, desde la colonización hasta la actualidad, y cómo han impactado en el desarrollo rural del país.
    p <b>2.	Identificación de patrones y tendencias:</b> Analizar la historia de las políticas agrarias ayuda a identificar patrones recurrentes, éxitos y fracasos en la implementación de reformas, y a aprender de las experiencias pasadas para mejorar las estrategias futuras.
    p <b>3.	Entendimiento de conflictos y desafíos:</b> La historia de las políticas agrarias en Colombia está estrechamente ligada a conflictos sociales, económicos y políticos. Estudiar esta historia permite entender los desafíos estructurales que enfrenta el sector agrario y rural en el país.
    p <b>4.	Fundamentación para la toma de decisiones:</b> Conocer la historia de las políticas agrarias proporciona una base sólida para la formulación de nuevas políticas y estrategias que aborden de manera efectiva los problemas actuales del campo colombiano.
    p.mb-5 En resumen, estudiar la historia de las políticas agrarias en Colombia es fundamental para comprender el presente, aprender de los errores del pasado, y diseñar intervenciones más efectivas y sostenibles para promover el desarrollo rural en el país.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
