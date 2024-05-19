import React from 'react';

const items = {
  services: [
    {
      key: '1',
      label: 'Consultoría',
      children: [
        {
          key: '1-1',
          label: 'Desarrollo de IA y modelos analíticos',
        },
        {
          key: '1-2',
          label: 'Implementación de Modelos e IA',
        },
        {
          key: '1-3',
          label: 'Evaluación de IA y Modelos',
        },
        {
          key: '1-4',
          label: 'Analítica Para Negocios y Proyectos',
        },
        {
          key: '1-5',
          label: 'Desarrollo de Software y Proyectos de Tecnología',
        },
        {
          key: '1-6',
          label: 'Evaluación de Proyectos',
        },
        {
          key: '1-7',
          label: 'Asesoría para Proyectos de IA, Analítica y Tecnología',
        },
        {
          key: '1-8',
          label: 'Digitalización',
        },
        {
          key: '1-9',
          label: 'Gobierno',
        },
        {
          key: '1-10',
          label: 'Otro',
        },
      ],
    },
    {
      key: '2',
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
          key: '1-1',
          label: 'Evaluación de Proyectos y Soluciones',
        },
        {
          key: '1-2',
          label: 'Auditoría de Modelos y Proyectos',
        },
        {
          key: '1-3',
          label: 'Revisión de Modelos',
        },
        {
          key: '1-4',
          label: 'Opinión Especializada',
        },
        {
          key: '1-5',
          label: 'Validación de Datos',
        },
        {
          key: '1-6',
          label: 'Asesoría y Administración de Riesgos',
        },
        {
          key: '1-7',
          label: 'Otro',
        },
      ],
    },
    {
      key: '3',
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
          key: '1-1',
          label: 'Creación de Política',
        },
        {
          key: '1-2',
          label: 'Revisión de Política y Normativa',
        },
        {
          key: '1-3',
          label: 'Asesoramiento Regulatorio',
        },
        {
          key: '1-4',
          label: 'IA Responsable',
        },
        {
          key: '1-5',
          label: 'Asesoría y Guianza para Política de IA y Analítica',
        },
        {
          key: '1-6',
          label: 'Política para Tecnología',
        },
        {
          key: '1-7',
          label: 'Ética para IA',
        },
        {
          key: '1-8',
          label: 'Otro',
        },
      ],
    },
    {
      key: '4',
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
  products: [
    {
      key: '1',
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
      key: '2',
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
  training: [
    {
      key: '1',
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
      key: '2',
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
      key: '3',
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
      key: '4',
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
      key: '5',
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
  industries: [
    {
      key: '1',
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
      key: '2',
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
      key: '3',
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
      key: '3',
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
      key: '3',
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
      key: '3',
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
      key: '3',
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
      key: '3',
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
  resources: [
    {
      key: '1',
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
      key: '2',
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
      key: '3',
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
  company: [
    {
      key: '1',
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
      key: '2',
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
      key: '3',
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
      key: '4',
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
};

export default items;
