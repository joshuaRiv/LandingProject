import React from 'react';

const items = [
  {
    key: '1',
    label: 'Servicios',
    children: [
      {
        key: '11',
        label: 'Consultoría',
        children: [
          {
            key: '111',
            label: 'Desarrollo de IA y modelos analíticos',
          },
          {
            key: '112',
            label: 'Implementación de Modelos e IA',
          },
          {
            key: '113',
            label: 'Evaluación de IA y Modelos',
          },
          {
            key: '114',
            label: 'Analítica Para Negocios y Proyectos',
          },
          {
            key: '115',
            label: 'Desarrollo de Software y Proyectos de Tecnología',
          },
          {
            key: '116',
            label: 'Evaluación de Proyectos',
          },
          {
            key: '117',
            label: 'Asesoría para Proyectos de IA, Analítica y Tecnología',
          },
          {
            key: '118',
            label: 'Digitalización',
          },
          {
            key: '119',
            label: 'Gobierno',
          },
          {
            key: '1110',
            label: 'Otro',
          },
        ],
      },
      {
        key: '12',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Auditoría y Peritaje
          </a>
        ),
        children: [
          {
            key: '121',
            label: 'Evaluación de Proyectos y Soluciones',
          },
          {
            key: '122',
            label: 'Auditoría de Modelos y Proyectos',
          },
          {
            key: '123',
            label: 'Revisión de Modelos',
          },
          {
            key: '124',
            label: 'Opinión Especializada',
          },
          {
            key: '125',
            label: 'Validación de Datos',
          },
          {
            key: '126',
            label: 'Asesoría y Administración de Riesgos',
          },
          {
            key: '127',
            label: 'Otro',
          },
        ],
      },
      {
        key: '13',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Política y Normativa
          </a>
        ),
        children: [
          {
            key: '131',
            label: 'Creación de Política',
          },
          {
            key: '132',
            label: 'Revisión de Política y Normativa',
          },
          {
            key: '133',
            label: 'Asesoramiento Regulatorio',
          },
          {
            key: '134',
            label: 'IA Responsable',
          },
          {
            key: '135',
            label: 'Asesoría y Guianza para Política de IA y Analítica',
          },
          {
            key: '136',
            label: 'Política para Tecnología',
          },
          {
            key: '137',
            label: 'Ética para IA',
          },
          {
            key: '138',
            label: 'Otro',
          },
        ],
      },
      {
        key: '14',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Más
          </a>
        ),
      },
    ],
  },
  {
    key: '2',
    label: 'Productos',
    children: [
      {
        key: '21',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            MapIA
          </a>
        ),
      },
      {
        key: '22',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            SummarAIze
          </a>
        ),
      },
    ],
  },
  {
    key: '3',
    label: 'Entrenamiento',
    children: [
      {
        key: '31',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Cursos
          </a>
        ),
      },
      {
        key: '32',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Talleres
          </a>
        ),
      },
      {
        key: '33',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Pláticas
          </a>
        ),
      },
      {
        key: '34',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Conferencias
          </a>
        ),
      },
      {
        key: '35',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Evaluación
          </a>
        ),
      },
    ],
  },
  {
    key: '4',
    label: 'Industrias',
    children: [
      {
        key: '41',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Finanzas
          </a>
        ),
      },
      {
        key: '42',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Seguros y Pensiones
          </a>
        ),
      },
      {
        key: '43',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Salud y Biología
          </a>
        ),
      },
      {
        key: '44',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Gobierno
          </a>
        ),
      },
      {
        key: '45',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Seguridad
          </a>
        ),
      },
      {
        key: '46',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Alimentos
          </a>
        ),
      },
      {
        key: '47',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Educación
          </a>
        ),
      },
      {
        key: '48',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Más
          </a>
        ),
      },
    ],
  },
  {
    key: '5',
    label: 'Recursos',
    children: [
      {
        key: '51',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Investigación
          </a>
        ),
      },
      {
        key: '52',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Noticias
          </a>
        ),
      },
      {
        key: '53',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Blog
          </a>
        ),
      },
    ],
  },
  {
    key: '6',
    label: 'Nosotros',
    children: [
      {
        key: '61',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            About Us
          </a>
        ),
      },
      {
        key: '62',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Our People
          </a>
        ),
      },
      {
        key: '63',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Partners
          </a>
        ),
      },
      {
        key: '64',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Responsible
          </a>
        ),
      },
    ],
  },
  {
    key: '7',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Contacto
      </a>
    ),
  },
  {
    key: '8',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Inicia Sesión
      </a>
    ),
  },
];

export default items;
