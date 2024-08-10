<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-10.mb-5
        figure
          img(src='@/assets/curso/temas/intro-1.png', alt='')
      .col-lg-8      
        p A partir de la implementación del punto N°01 del “Acuerdo final para la terminación del conflicto y la construcción de una paz estable y duradera” (2016) contemplado en el Acuerdo de La Habana, se determinaron los lineamientos para una reforma rural integral (RRI), que supone una transformación estructural del campo colombiano. En consecuencia, el gobierno nacional avanzó en la expedición del nuevo marco normativo para la atención a la ruralidad, la ley 1876 del 29 de diciembre de 2017, “Por medio de la cual se crea el Sistema Nacional de Innovación Agropecuaria y se dictan otras disposiciones”, acto que deroga la ley 607 del 2000 (norma enfocada al asistencialismo). 
        p El SNIA pone a disposición de los actores involucrados con el desarrollo rural en Colombia los recursos y canales para la gestión del fortalecimiento de la productividad y competitividad del sector agropecuario de una manera integral; es decir, contemplando también, además de las capacidades técnicas individuales, las capacidades sociales (asociatividad, cooperación, economías colaborativas), el acceso y uso de los recursos tecnológicos, la compatibilidad con la sostenibilidad ambiental y las capacidades de participación política de las comunidades rurales. 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/riGJRV-9UyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/intro-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La fase de diagnóstico de cualquier proceso de planificación es un ejercicio donde los actores involucrados tienen un logro importante al contactarse directamente con la comunidad y así abrir espacios para el encuentro y el diálogo en materias de interés común. Es el primer eslabón en un proceso de planificación, razón que lo sitúa como una actividad esencial e imprescindible para generar un plan de intervención de impacto positivo, eficaz y coherente con los intereses de la población, los entes involucrados y la institucionalidad; además, una adecuado diagnóstico contribuye en gran medida a la prevención, mitigación de riesgos y amenazas al éxito del proyecto formulado.
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
