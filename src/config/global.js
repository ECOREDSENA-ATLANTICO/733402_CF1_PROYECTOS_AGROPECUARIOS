export default {
  global: {
    componenteFormativo:
      'Diagnóstico de la situación problémica en la población, organización o en la empresa agropecuaria rural.',
    descripcionCurso:
      'El análisis de la problemática en el sector agropecuario puede abordarse, según el grado de organización, en tres niveles: primero, cuando se enfoca a una población dispersa pero más o menos definida (vereda, vocación productiva, etc.), en segundo lugar, a  una organización (como por ejemplo las del sector solidario) y finalmente a empresas agropecuarias propiamente dichas. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Desarrollo rural y políticas agrarias en Colombia',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistema Nacional de Innovación Agropecuaria (SNIA) ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Jerarquía de las normas en Colombia',
            hash: '2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Sistema Nacional de Innovación Agropecuaria Ley 1876 de diciembre 27 de 2017',
            hash: '2_2',
          },
          {
            numero: '2.3',
            titulo: 'Resolución 407 de octubre 30 de 2018',
            hash: '2_3',
          },
          {
            numero: '2.4',
            titulo: 'Resolución 422 de 05 de julio de 2019',
            hash: '2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Decreto 1319 de 01 de octubre 2020 - Fondo Nacional de Extensión Agropecuaria (FNEA)',
            hash: '2_5',
          },
          {
            numero: '2.6',
            titulo:
              'Ley 464 de 29 de diciembre 2017 - Agricultura familiar campesina y comunitaria ACFC',
            hash: '2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diagnóstico Rural Participativo (DRP)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Clasificación y registro de usuarios del servicio público de extensión agropecuaria',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia:
        'Agencia de desarrollo rural, (2019). Resolución 0422 de 2019',
      tipo: 'Resolución ',
      link:
        'https://www.minagricultura.gov.co/ministerio/direcciones/Documents/Resoluci%C3%B3n%200422%20del%2005-07-2019.pdf',
    },
    {
      tema: '',
      referencia: 'Presidencia de la república, (2020). Decreto 1319 de 2020',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=142845',
    },
    {
      tema: '',
      referencia:
        'Ministerio de agricultura y desarrollo rural, (2017). Resolución 0664 de 2017',
      tipo: 'Resolución',
      link:
        'https://www.minagricultura.gov.co/Normatividad/Resoluciones/Resoluci%C3%B3n%20No%20000464%20de%202017.pdf',
    },
    {
      tema: '',
      referencia: 'Expósito, (2003) Diagnóstico rural participativo.',
      tipo: 'Diagnóstico ',
      link:
        'https://www.corporacionpba.org/irp/herramientas/Etapa_I/punto_de_partida/paso2_drp/Diagnostico_Rural_Participativo.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Sector agropecuario',
      significado:
        'se entiende por sector agropecuario cuya actividad económica está circunscrita a los ámbitos agrícola, pecuario, forestal, acuícola y pesquero, así como la adecuación y la transformación de la producción, los servicios de apoyo asociados y la comercialización de productos primarios. (Congreso de la República, 2017).',
    },
    {
      termino: 'Ordenamiento productivo y social del territorio',
      significado:
        ' proceso de planificación participativo y multisectorial de carácter técnico, ad­ministrativo y político, que permite la armonización de los usos agropecuarios y la tenencia de la tierra rural, privilegiando el ade­cuado equilibrio entre la producción agropecuaria (agrícola, pecua­ria, forestal, acuícola, pesquera, la adecuación y transformación de la producción), el uso eficiente del suelo, y la sostenibilidad social, ambiental y económica, orientado al logro de la competitividad sectorial. (Congreso de la República, 2017).',
    },
    {
      termino: 'Innovación agropecuaria',
      significado:
        ' introducción de productos, bienes, servicios, procesos y métodos nuevos en el ámbito productivo, de transformación o adecuación de la producción, administrativo, or­ganizacional, financiero y crediticio, informático, de mercadeo y comercialización, que incorporen mejoras significativas en el des­empeño del sector agropecuario (Congreso de la República, 2017).',
    },
    {
      termino: 'Innovación abierta o colaborativa',
      significado:
        'se refiere al proceso de con­cepción y desarrollo de una innovación que ocurre en un marco de colaboración entre diversos actores o agentes, de modo que la innovación resulta altamente cohesionada con el entorno en el que se produce, y por ende cuenta con una mayor probabilidad de adopción y éxito. Además, permite reconocer los conocimientos, capacidades y experiencias de los actores y agentes que intervienen en la innovación (Congreso de la República, 2017).',
    },
    {
      termino:
        'Plan Estratégico de Ciencia, Tecnología e Innovación Agrope­cuaria (PECTIA)',
      significado:
        ' herramienta de planificación que define los objetivos estratégicos, estrategias y líneas de acción en materia de ciencia, tecnología e innovación sectorial para aumentar la compe­titividad, sostenibilidad y el mejoramiento de las condiciones de vida de la población. Se formula para un período de 10 años. (Congreso de la República, 2017).',
    },
    {
      termino:
        'Agenda Dinámica Nacional de Investigación, Desarrollo Tec­nológico e Innovación Agropecuaria (Agenda I+D+i)',
      significado:
        ' instrumento de planificación y gestión para la focalización de recursos y de acciones de I+D+i tendientes al fortalecimiento, dinamización y optimización del SNIA en torno al mejoramiento de la productivi­dad y competitividad sectorial. (Congreso de la República, 2017).',
    },
    {
      termino: 'Plataforma siembra',
      significado:
        ' es el aplicativo electrónico del Ministerio de Agricultura y Desarrollo Rural destinado a la recopilación, ges­tión, divulgación y seguimiento de la información de los proyectos, resultados, avances y oferta tecnológica sectorial originada en el Sistema Nacional de Innovación Agropecuaria (SNIA). (Congreso de la República, 2017).',
    },
    {
      termino: 'Comunidad Linkata',
      significado:
        'comunidad temática dirigida a gestionar, divulgar y transferir conocimiento y tecnologías agropecuarias, con el fin de dinamizar y potenciar el relacionamiento entre los resultados del sector generador de I+D y los prestadores de servi­cios de asistencia técnica, asesoramiento, consultoría y extensión agropecuaria. (Congreso de la República, 2017).',
    },
    {
      termino: 'Sistemas Territoriales de Innovación Agropecuaria',
      significado:
        ' los Sis­temas Territoriales de Innovación (STI) son entendidos como sistemas complejos que favorecen y consolidan relaciones entre diferentes grupos de actores tanto públicos como privados, que ar­ticulados en redes de conocimiento tienen el propósito de incre­mentar y mejorar las capacidades de aprendizaje, gestión de co­nocimiento agropecuario e innovación abierta que emergen en un territorio particular establecido a partir del reconocimiento de inte­racciones específicas entre sus dimensiones biofísicas, culturales, institucionales, socioeconómicas, entre otras. Los STI son espacios prácticos en los cuales los procesos de investi­gación, formación de capacidades, de aprendizaje interactivo, así como de transferencia de tecnología y extensión, establecen diná­micas conjuntas de articulación institucional que concretan, impul­san y consolidan los procesos de ciencia, tecnología e innovación en los territorios. (Congreso de la República, 2017).',
    },
    {
      termino: 'Redes de innovación',
      significado:
        ' conjunto de actores que interactúan a través del intercambio de conocimientos con el fin de compartir informa­ción, conceptos, aplicaciones, metodologías, experiencias y prácti­cas de trabajo (Congreso de la República, 2017).',
    },
    {
      termino: 'Plan Departamental de Extensión Agropecuaria (PDEA)',
      significado:
        ' ins­trumento de planificación cuatrienal que define los elementos es­tratégicos, operativos y financieros para la prestación del servicio público de extensión agropecuaria en el área de influencia de un departamento y sus municipios. (Congreso de la República, 2017).',
    },
    {
      termino: 'Extensión Agropecuaria',
      significado:
        'proceso de acompañamiento mediante el cual se gestiona el desarrollo de capacidades de los productores agropecuarios, su articulación con el entorno y el acceso al co­nocimiento, tecnologías, productos y servicios de apoyo; con el fin de hacer competitiva y sostenible su producción al tiempo que contribuye a la mejora de la calidad de vida familiar. Por lo tanto, la extensión agropecuaria facilita la gestión de conocimiento, el diag­nóstico y la solución de problemas, en los niveles de la producción primaria, la poscosecha, y la comercialización; el intercambio de experiencias y la construcción de capacidades individuales, colec­tivas y sociales. Para tal efecto, la extensión agropecuaria desa­rrollará actividades vinculadas a promover el cambio técnico en los diferentes eslabones que constituyen la cadena productiva, la asesoría y acompañamientos a productores en acceso al crédito, formalización de la propiedad, certificación en BPA, entre otros (Congreso de la República, 2017).',
    },
    {
      termino: 'Ruralidad',
      significado:
        ' es el conjunto de interacciones sociales, económicas y culturales que se surten en espacios de baja e intermedia densidad poblacional y cuyas actividades económicas preponderantes están estrechamente relacionadas con el medio natural y sus encadena­mientos productivos. (Congreso de la República, 2017).',
    },
    {
      termino:
        'Parques Científicos, Tecnológicos y de Innovación Agropecua­rios (PCTIA)',
      significado:
        'zonas geográficas especiales destinadas a promo­ver la innovación agropecuaria basada en el conocimiento científi­co y tecnológico y a contribuir a la productividad empresarial y la competitividad regional. (Congreso de la República, 2017).',
    },
    {
      termino: 'Organización Comunitaria',
      significado:
        'todos aquellos productores agrope­cuarios organizados de forma asociativa, cooperativa, solidaria u otras formas de organización (Congreso de la República, 2017).',
    },
  ],
  referencias: [
    {
      referencia:
        'Arango, R. M., (1987). Esquema de políticas de reforma agraria en Colombia. Lecturas de Economía, No.23, p. 197-220.',
      link:
        'https://revistas.udea.edu.co/index.php/lecturasdeeconomia/article/view/7778/7344',
    },
    {
      referencia:
        'Centro Nacional de Memoria Histórica (2013). La política de reforma agraria y tierras en Colombia. Esbozo de una memoria institucional.',
      link:
        'https://www.centrodememoriahistorica.gov.co/descargas/informes2013/agraria/politica-agraria-tierras.pdf',
    },
    {
      referencia:
        'Decreto 1319 de 2020. [Ministerio de Agricultura y Desarrollo Rural]. Por la cual se se adiciona el Título 5 de la Parte 1 del Libro 2 del Decreto 1071 de 2015, Decreto Único del Sector Administrativo Agropecuario, Pesquero y de Desarrollo Rural, relacionado con el Fondo Nacional de Extensión Agropecuaria FNEA. Octubre 1 de 2020.',
    },
    {
      referencia:
        'Expósito V,M, 1999. Diagnóstico Rural Participativo, una guía práctica. Santo Domingo. Centro Cultural Poveda.',
    },
    {
      referencia:
        'Fernández L., M. I. Fernández e I. Soloaga, “Enfoque territorial y análisis dinámico de la ruralidad: alcances y límites para el diseño de políticas de desarrollo rural innovadoras en América Latina y el Caribe”, Documentos de Proyectos (LC/TS.2019/65, LC/MEX/TS.2019/16), Ciudad de México, Comisión Económica para América Latina y el Caribe (CEPAL), 2019. ',
    },
    {
      referencia:
        'Ley 1876 de 2017. Por la cual se crea el Sistema Nacional de Innovación Agropecuaria y se dictan otras disposiciones. Diciembre 29 de 2017. DO. N° 50.461.',
    },
    {
      referencia:
        'Machado, A. 2009. La Reforma rural, una deuda social y política. Universidad Nacional de Colombia. Ministerio de Agricultura y Desarrollo Rural Agencia de Desarrollo Rural - ADR, 2019. Clasificación y Registro de Usuarios del Servicio Público de Extensión Agropecuaria, 2018.',
    },
    {
      referencia:
        'Resolución 407 de 2018. [Ministerio de Agricultura y Desarrollo Rural]. Por la cual se reglamenta las materias técnicas del Sistema Nacional de Innovación Agropecuaria - SNIA. Octubre 30 de 2018.',
    },
    {
      referencia:
        'Resolución 422 de 2019. [Agencia de Desarrollo Rural]. Por la cual se reglamenta el artículo 33 de la Ley 187 de 2017. Julio 5 de 2019.',
    },
    {
      referencia:
        'Resolución 464 de 2017. [Ministerio de Agricultura y Desarrollo Rural]. Por la cual se adoptan los lineamientos estratégicos de la política pública para la Agricultura Campesina, Familiar y Comunitaria. Diciembre 29 de 2017.',
    },
    {
      referencia:
        'Sierra, P. H. (1998). Concepto y tipos de ley en la constitución colombiana. Universidad Externado de Colombia.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Roberto Augusto Bernal Duque',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca',
        },

        {
          nombre: 'Yeison Farid Méndez Ortiz',
          cargo: 'Experto temático',
          centro: 'Centro Agropecuario “La Granja” – Regional Tolima.',
        },
        {
          nombre: 'Orlando Barón Méndez',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia  Hoyos Sepúlveda',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de diseño y Metrología – Regional Distrito Capital ',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura – Regional Santander',
        },
        {
          nombre: 'Fabian Cuartas Donado',
          cargo: 'Evaluador Instruccional',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Diseño web',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jorge Leonardo Camacho Pardo',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Eulises Orduz Amezquita',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validación de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validación de recursos digitales ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
