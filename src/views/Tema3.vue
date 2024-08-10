<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diagnóstico Rural Participativo (DRP)

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        p El DRP es una metodología, utilizada para realizar diagnósticos en comunidades rurales. Tiene la característica de ser participativa, esto quiere decir, que en el desarrollo de las técnicas escogidas para la recolección de la información los integrantes de la comunidad intervienen activamente en la construcción de las respuestas y en la toma de decisiones. El DRP da la oportunidad a todos los miembros de la comunidad a participar en el diagnóstico independientemente de no saber leer y escribir, producto de las herramientas utilizadas (Instituto de Formación Permanente, 2008, Diagnóstico rural participativo y planificación comunitaria).
        p El DRP es un conjunto de técnicas y herramientas que permite que las comunidades hagan su propio diagnóstico y de ahí comiencen a auto-gestionar su planificación y desarrollo. Esta metodología es versátil y dependiendo de la habilidad del equipo facilitador es posible utilizar la información no solo para identificar las necesidades y problemas de la comunidad en los aspectos técnicos, sociales, ambientales, o económicos; sino que puede iniciarse un proceso de identificación de ideas para innovación o procesos de investigación. Su objetivo principal es “apoyar la autodeterminación de la comunidad a través de la participación y así fomentar un desarrollo sostenible.” Expósito, 1999.
        p Igualmente propone siete pasos que conducen al diseño de la planeación para el diagnóstico, para esto propone establecer un objetivo del diagnóstico, seleccionar y preparar el equipo facilitador, identificar participantes potenciales, identificar las expectativas de los y las participantes en el DRP, discutir las necesidades de información, seleccionar herramientas de investigación y por último diseñar el proceso de diagnóstico, Exposito, 1999.

      .col-lg-4.col-md-10
        figure 
          img(src='@/assets/curso/temas/tema3/img-1.png', alt='')


    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-xl-10
        .img-fnd-flot2.mb-5
          img.b-img2(src='@/assets/curso/temas/tema3/img-2.svg')
          .fl-box2.fl-box3
            p.mb-3 Para el trabajo de campo, se exponen tres pasos o momentos iniciales para abordar el trabajo con la comunidad identificada; el primero presentación  del equipo DRP en la comunidad, segundo el análisis de la situación actual con sus problemas, potencialidades y limitaciones y por último la búsqueda de soluciones haciendo énfasis en problemas y potencialidades. Exposito, 1999.
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-4.col-md-10.mb-5
        figure 
          img(src='@/assets/curso/temas/tema3/img-3.png', alt='')
      .col-lg-8
        .row.justify-content-center.align-items-center
          .col-md-2.d-none.d-md-block
            figure.mb-3 
              img.img-86(src='@/assets/curso/temas/tema3/img-4.svg', alt='')
          .col-md-10.col-sm-12
            p Paso seguido se muestra una serie de técnicas y herramientas participativas (Caja de Herramientas) que pueden ser usadas teniendo en cuenta el objetivo planteado, las necesidades de información que haya identificado el equipo facilitador y las características identificadas en la comunidad. Expósito,1999.
        p.mb-5 En la etapa final del proceso de diagnóstico llamado análisis, documentación y presentación el autor hace un recorrido por las clases de variables que podemos obtener en este proceso (cualitativas y cuantitativas); recuerda que los documento obtenidos en los talleres (mapas, registros, fotos, videos, encuestas, etc.) deben tenerse siempre presentes para poder consultarlos nuevamente, con el fin de completar información o de obtener datos que no se identificaron en un primer momento; la elaboración del informe es un paso muy importante porque es en este documento que se consolida las fortalezas, necesidades y problemas que presenta la comunidad; en este momento se convierte en el insumo para el siguiente paso en la formulación de proyectos agropecuarios. Expósito,1999.


    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-8
        .tarjeta.p-3.fnd-88
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema3/img-6.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Para mayor información sobre Diagnóstico Rural Participativo consultar
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.corporacionpba.org/irp/herramientas/Etapa_I/punto_de_partida/paso2_drp/Diagnostico_Rural_Participativo.pdf" target="_blank")
                    span Enlace
                    i.fas.fa-file-download



</template>

<script>
export default {
  name: 'Tema3',
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
