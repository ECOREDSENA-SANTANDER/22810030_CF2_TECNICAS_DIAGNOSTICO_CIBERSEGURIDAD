export default {
  global: {
    Name: 'Pruebas de seguridad y mitigación de riesgos',
    Description:
      'Este componente desarrolla habilidades para ejecutar acciones preventivas, monitorear infraestructuras y validar vulnerabilidades, amenazas y riesgos mediante herramientas tecnológicas de seguridad. Además, orienta la aplicación responsable de controles, el análisis de ataques, la protección de aplicaciones web, servicios en la nube y dispositivos conectados, y la documentación técnica de incidentes.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        titulo: 'Desarrollo seguro y protección de aplicaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Código seguro y prevención de vulnerabilidades',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Aplicaciones <i>web</i>, servicios en la nube y criterios de seguridad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Análisis de código, monitoreo y registro de hallazgos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Dispositivos conectados e infraestructuras críticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Internet de las cosas y exposición de dispositivos conectados',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Vulnerabilidades en dispositivos conectados',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Infraestructuras críticas y procedimientos de mitigación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ataques, cibercrimen y amenazas dirigidas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Taxonomía y clasificación general de ataques',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Cibercrimen y evolución de las amenazas digitales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Amenazas cibernéticas dirigidas a personas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Internet seguro y clasificación de entornos <i>web</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: '<i>Clean web,</i> <i>deep web</i> y <i>dark web</i>',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Búsquedas seguras y criterios de consulta',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Buscadores especializados y criterios de seguridad',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Monitoreo, mitigación y validación de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Métodos y técnicas de monitoreo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Herramientas tecnológicas de seguridad',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Mitigación de riesgos y verificación de resultados',
            hash: 't_5_3',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Autenticación multifactor',
      significado:
        'mecanismo que utiliza más de una evidencia para verificar la identidad de un usuario y reducir el riesgo de acceso indebido.',
    },
    {
      termino: 'Código seguro',
      significado:
        '<i>software</i> desarrollado mediante prácticas que reducen vulnerabilidades y protegen datos, permisos, sesiones y operaciones.',
    },
    {
      termino: 'Control de seguridad',
      significado:
        'medida técnica, organizacional o formativa destinada a prevenir, detectar, corregir o reducir un riesgo.',
    },
    {
      termino: '<i>Dark web</i>',
      significado:
        'capa de internet que suele requerir herramientas específicas y ofrece mayor anonimato. su estudio debe mantener un propósito conceptual, legal y preventivo.',
    },
    {
      termino: '<i>Deep web</i>',
      significado:
        'contenido no indexado por motores de búsqueda convencionales, como plataformas autenticadas, repositorios privados o sistemas internos.',
    },
    {
      termino: 'Denegación de servicio —<i>DoS</i>—',
      significado:
        'ataque orientado a degradar o impedir el acceso legítimo a una aplicación, red o servicio tecnológico.',
    },
    {
      termino: '<i>EDR</i>',
      significado:
        'solución de detección y respuesta orientada a analizar comportamientos y facilitar la revisión en equipos finales.',
    },
    {
      termino: '<i>Firewall</i>',
      significado:
        'control que permite o restringe comunicaciones según reglas definidas y documentadas.',
    },
    {
      termino: '<i>IDS</i>',
      significado:
        'sistema que detecta patrones o eventos de red que requieren análisis y genera alertas.',
    },
    {
      termino: 'Incidente de seguridad',
      significado:
        'situación que afecta o pone en riesgo sistemas, información, servicios o usuarios y requiere tratamiento documentado.',
    },
    {
      termino: 'Internet de las cosas —<i>IoT</i>—',
      significado:
        'ecosistema de dispositivos físicos conectados que recopilan, procesan o intercambian datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Center for Internet Security. (2024). CIS Critical Security Controls version 8.1.',
    },
    {
      referencia:
        'Cybersecurity and Infrastructure Security Agency. (2021). Avoiding social engineering and phishing attacks.',
    },
    {
      referencia:
        'Cybersecurity and Infrastructure Security Agency. (2022). Cloud security technical reference architecture.',
    },
    {
      referencia:
        'Cybersecurity and Infrastructure Security Agency. (2023). Shifting the balance of cybersecurity risk: Principles and approaches for secure by design software.',
    },
    {
      referencia:
        'Cybersecurity and Infrastructure Security Agency. (2025). Implementing SIEM and SOAR platforms: Practitioner guidance.',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2020). Documento CONPES 3995: Política nacional de confianza y seguridad digital.',
    },
    {
      referencia:
        'European Union Agency for Cybersecurity. (2024). ENISA threat landscape 2024. Publications Office of the European Union.',
    },
    {
      referencia:
        'European Union Intellectual Property Office. (2024). Uncovering the ecosystem of intellectual property crime: A focus on enablers and impact.',
    },
    {
      referencia:
        'Europol. (2024). Internet Organised Crime Threat Assessment (IOCTA) 2024.',
    },
    {
      referencia:
        'Europol. (2026). Internet Organised Crime Threat Assessment (IOCTA) 2026.',
    },
    {
      referencia:
        'Federal Bureau of Investigation. (2024). FBI warns of increasing threat of cyber criminals utilizing artificial intelligence.',
    },
    {
      referencia: 'INTERPOL. (s. f.). Cybercrime.',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2022). Decreto 338 de 2022: Lineamientos generales para fortalecer la gobernanza de la seguridad digital.',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2020a). <i>IoT</i> device cybersecurity capability core baseline (NISTIR 8259A). U.S. Department of Commerce.',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2022). Secure Software Development Framework (SSDF) version 1.1: Recommendations for mitigating the risk of software vulnerabilities (NIST Special Publication 800-218). U.S. Department of Commerce.',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2025). Incident response recommendations and considerations for cybersecurity risk management: A CSF 2.0 community profile (NIST Special Publication 800-61, Revision 3). U.S. Department of Commerce.',
    },
    {
      referencia:
        'OWASP Foundation. (2025a). OWASP Application Security Verification Standard 5.0.',
    },
    {
      referencia:
        'OWASP Foundation. (2025b). OWASP Top 10: The ten most critical web application security risks.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Bonza Reyes',
          cargo: 'Experto temático TIC',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
}
