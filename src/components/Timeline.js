import React, { useContext } from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaUserTie, FaHeartbeat, FaChalkboardTeacher } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Timeline = () => {
  const { theme } = useContext(ThemeContext);
  
  const timelineData = {
    pre2001: [
      {
        title: 'Ballet and Capoeira Teacher',
        company: 'Various Schools',
        date: '1987 - 2001',
        description: 'Started career as a ballet and capoeira teacher, working at multiple schools including Escola de Educação Infantil Favo de Mel, Colégio Kennedy, Escola de Educação Infantil Moranguinho, and Escola de Educação Infantil Gente Miúda.',
        icon: <FaChalkboardTeacher />
      },
      {
        title: 'Bailarina',
        company: 'Multiple Dance Companies',
        date: '1996 - 2001',
        description: 'Performed as a dancer with Errantes Cia de Dança, TANZ Cia de Dança, and Jockers Cia de Dança.',
        icon: <FaChalkboardTeacher />
      },
      {
        title: 'Dance Teacher',
        company: 'Escola de danças Grace Leni & Academia Corpo & Expressão',
        date: '1990 - 1993',
        description: 'Taught Ballet Clássico, jazz, and contemporary dance.',
        icon: <FaChalkboardTeacher />
      }
    ],
    period2001to2019: [
      {
        title: 'Pesquisador',
        company: 'SESC SP Serviço Social do Comércio',
        date: 'Sep 2005 - Jul 2019',
        location: 'São Paulo e Região, Brasil',
        description: 'Researched and programmed activities in dance, music, circus, visual arts, and socio-educational programs. Coordinated the Bienal Sesc de Dança and Festival Mirada. Developed artistic development proposals and experimentation. Coordinated the Curumim Socio-educational Program and educational components for Art Exhibitions & International Festivals. Curatorship.',
        icon: <FaUserTie />
      },
      {
        title: 'Docente',
        company: 'Unisepe',
        date: 'Jan 2017 - Jun 2018',
        location: 'Registro e Região, Brasil',
        description: 'Taught courses in Dance and Rhythmic Gymnastics.',
        icon: <FaChalkboardTeacher />
      },
      {
        title: 'Docente',
        company: 'Prefeitura de Cubatão',
        date: 'Apr 2006 - Apr 2012',
        location: 'Cubatão, São Paulo, Brasil',
        description: 'Educator at the Early Childhood Education and Initial Series levels. Speaker in teacher training.',
        icon: <FaChalkboardTeacher />
      },
      {
        title: 'Professor',
        company: 'Escola Estadual João Belchior Marques Goulart',
        date: 'Jan 2001 - Apr 2005',
        location: 'Alvorada, Tocantins, Brasil',
        description: 'Educator in the curricular components of physical education, arts, religious education, and sciences in Elementary School II and EJA. Created and developed an extracurricular project to promote autonomy through the arts.',
        icon: <FaChalkboardTeacher />
      }
    ],
    post2019: [
      {
        title: 'Therapy Work',
        company: 'Various Locations',
        date: 'Jul 2019 - Sep 2023',
        description: 'Focused on therapeutic practices.',
        icon: <FaHeartbeat />
      },
      {
        title: 'Educator',
        company: 'Centro de Reabilitação de Porto Alegre',
        date: 'Sep 2023 - Jan 2025',
        description: 'Worked as an educator specializing in dance and literature at a rehabilitation center.',
        icon: <FaChalkboardTeacher />
      },
      {
        title: 'Regente de Classe',
        company: 'Escola Rural Estrela da Terra',
        date: 'Jan 2025 - Present',
        description: 'Class regent at Estrela da Terra Rural School, following Waldorf Pedagogy principles.',
        icon: <FaChalkboardTeacher />
      }
    ],
    education: [
      {
        title: 'Gestão Cultural',
        institution: 'Centro de Pesquisa e Formação Sesc',
        date: '2015 - 2016',
        description: 'Cultural Management, Relations between art, public and artists',
        icon: <FaGraduationCap />
      },
      {
        title: 'Mestrado em Educação',
        institution: 'Universidade Católica de Santos',
        date: '2005 - 2007',
        description: 'Research Line: Educator Training. Concentration Area: Evaluation and Curriculum',
        icon: <FaGraduationCap />
      },
      {
        title: 'Licenciatura Plena em Educação Física',
        institution: 'Unisinos',
        date: '1997 - 2003',
        description: 'Full Degree in Physical Education, Body Culture / learning assessment',
        icon: <FaGraduationCap />
      }
    ]
  };

  const renderTimelineSection = (title, data) => (
    <TimelineSection>
      <h2 className="section-title">{title}</h2>
      <VerticalTimeline>
        {data.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            date={item.date}
            iconStyle={{ 
              background: 'var(--accent-color)', 
              color: '#fff' 
            }}
            icon={item.icon}
            contentStyle={{ 
              background: theme === 'dark' ? 'var(--card-bg-dark)' : 'var(--card-bg-light)', 
              color: theme === 'dark' ? 'var(--text-primary)' : 'var(--text-secondary)',
              boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)'
            }}
            contentArrowStyle={{ 
              borderRight: theme === 'dark' 
                ? '7px solid var(--card-bg-dark)' 
                : '7px solid var(--card-bg-light)' 
            }}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.company || item.institution}</h4>
            {item.location && <p className="timeline-location">{item.location}</p>}
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </TimelineSection>
  );

  return (
    <TimelineContainer>
      <div className="container">
        {renderTimelineSection('Pre-2001 Work Experience', timelineData.pre2001)}
        {renderTimelineSection('2001-2019 Work Experience', timelineData.period2001to2019)}
        {renderTimelineSection('Post-2019 Work Experience', timelineData.post2019)}
        {renderTimelineSection('Education', timelineData.education)}
      </div>
    </TimelineContainer>
  );
};

const TimelineContainer = styled.div`
  padding: 40px 0;
`;

const TimelineSection = styled.section`
  margin-bottom: 60px;
  
  .vertical-timeline-element-content {
    padding: 20px;
    border-radius: 8px;
  }
  
  .vertical-timeline-element-title {
    color: var(--accent-color);
    margin-bottom: 5px;
  }
  
  .vertical-timeline-element-subtitle {
    font-weight: 500;
    margin-bottom: 10px;
  }
  
  .timeline-location {
    font-style: italic;
    margin-bottom: 10px;
    font-size: 0.9rem;
  }
  
  .vertical-timeline-element-date {
    color: ${props => props.theme === 'dark' ? 'var(--text-primary)' : 'var(--text-secondary)'};
    opacity: 0.8;
  }
`;

export default Timeline;
