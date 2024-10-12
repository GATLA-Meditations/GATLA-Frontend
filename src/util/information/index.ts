import {AdminCardProps} from '@/components/AdminCard';
import logo5 from '@/assets/AdminIcon/Eugenio.png';
import logo4 from '@/assets/AdminIcon/Flor.png';
import logo2 from '@/assets/AdminIcon/AdminIcon2.png';
import logo1 from '@/assets/AdminIcon/AdminIcon1.png';
import logo8 from '@/assets/AdminIcon/AdminIcon8.png';

export const textRenacentia =
    ' Somos un equipo de profesionales dedicados a la investigación y desarrollo de terapias para combatir hemopatías malignas tanto en la edad adulta como pediátrica.\n' +
    'En nuestro compromiso por mejorar los resultados de tratamiento y calidad de vida de los pacientes, nos enfocamos en la investigación, la traducción de descubrimientos científicos en terapias efectivas y la colaboración con centros de investigación de todo el mundo. Nuestro objetivo es contribuir al desarrollo de tratamientos más seguros, efectivos y personalizados.';

export const adminCards: AdminCardProps[] = [
    {
        image: logo5,
        name: 'Eugenio Lionetti de Zorzi',
        tags: ['Sacerdote', 'Investigador'],
        text: 'Mi interés particular es el beneficio de los ejercicios de meditación tanto cristianos como no religiosos en el bienestar y la salud. Cuando descubrí el impacto de este tipo de ejercicios en mi vida fue un antes y un después. A partir de ese momento quise proponerlo a otros para que pudieran vivir esta experiencia, sobre todo a aquellas personas que estuvieran viviendo alguna situación de dolor particular. Este proyecto de Renacentia es un enorme trabajo y mientras lo hacía me motivaba pensar en todas las personas que iba a poder beneficiarse.',
    },
    {
        image: logo4,
        name: 'Florencia Negri Aranguren',
        tags: ['Hematóloga', 'Investigadora'],
        text: 'La enfermedad puede ser una oportunidad de transformación y el tratamiento parte de un camino de curación.\n' +
            'Pensamos un programa de meditación diseñado para acompañarte durante este tiempo. Este programa busca brindar herramientas para mejorar tu calidad de vida, asociando al  tratamiento quimioterápico otras estrategias que apuntan a la salud integral.',
    },
    {
        image: logo8,
        name: 'Pablo Mountford',
        tags: ['Hematólogo', 'Investigador'],
        text: 'Con una visión personal y profesional en la cual aliviar el sufrimiento multidimensional de los pacientes, sus familiares y al personal medico marcaron mi educación continua medica en medicina mente cuerpo así como mi forma de vivir y de compartir estos aprendizajes en mi casa, en el trabajo y otros espacios comunitarios, \n' +
            'promoviendo practicas meditativas que ayudan a manejar mejor el estrés y a promover la resiliencia, adaptándolas y respetando las creencias personales, lo cual, para muchas personas se encuentra en sus propias practicas religiosas.',
    },
    {
        image: logo2,
        name: 'Máximo Geist',
        tags: ['Estudiante', 'Programador'],
        text: 'Creemos que acompañarte en este momento es muy importante, por eso junto con mis compañeros hicimos esta aplicación con ayuda de los investigadores para que tengas un acceso rápido a las meditaciones y te sientas acompañado durante todo el proceso.',
    },

    {
        image: logo1,
        name: 'Agustin Augurusa',
        tags: ['Estudiante', 'Programador'],
        text: 'Mi motivación principal al unirme a este proyecto fue la posibilidad de ayudar ofreciendo una herramienta que realmente pudiera marcar la diferencia en la vida de aquellos que la usen.',
    },

];

export const infoContacto = ' Si tienes algun problema o consulta no dudes en contactarnos en:';

export const contactMail = 'renacentia.meditaciones@gmail.com';