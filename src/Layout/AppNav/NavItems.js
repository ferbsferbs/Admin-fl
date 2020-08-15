export const MainNav = [
    {
        icon: 'pe-7s-home',
        label: 'Home',
        to: '#/menu/home',
    },
];
export const DemograficoNav = [
    {
        icon: 'pe-7s-users',
        label: 'Docentes',
        to: '#/demografico/profesor',
    },
    {
        icon: 'pe-7s-user',
        label: 'Usuarios',
        to: '#/demografico/alumno',
    },
    {
        icon: 'pe-7s-notebook',
        label: 'Esculas',
        to: '#/demografico/escuela',
    },
    {
        icon: 'pe-7s-world',
        label: 'Ubicación',
        content: [
            {
                label: 'Por País',
                to: '#/demografico/pais',
            },
            {
                label: 'Por Localidad',
                to: '#/demografico/localidad',

            }
        ],
    },
];
export const SatisfaccionNav = [
    {
        icon: 'pe-7s-info',
        label: 'Información Niveles',
        to: '#/satisfaccion/info-niveles',
    },
    {
        icon: 'pe-7s-timer',
        label: 'Tiempo de Permanencia',
        to: '#/satisfaccion/tiempo-permanencia',
    },
    


];
export const ObjetivosJuegoNav = [
    
    {
        icon: 'pe-7s-study',
        label: 'Alumnos',
        to: '#/objetivo-juego/alumno',
    }
];
export const SponsorNav = [
    
    {
        icon: 'pe-7s-cash',
        label: 'Sponsor',
        to: '#/sponsor/',
    }
];

export const ExtraDELETE = [
    {
        icon: 'pe-7s-graph2',
        label: 'Dashboard Boxes',
        to: '#/widgets/dashboard-boxes',
    },
    {
        icon: 'pe-7s-light',
        label: 'Controls',
        to: '#/forms/controls',
    },
    {
        icon: 'pe-7s-eyedropper',
        label: 'Layouts',
        to: '#/forms/layouts',
    },
    {
        icon: 'pe-7s-pendrive',
        label: 'Validation',
        to: '#/forms/validation',
    },
    {
        icon: 'pe-7s-users',
        label: '.',
        content: [
            {
                label: 'Standard Buttons',
                to: '#/elements/buttons-standard',
            },
            {
                label: 'Dropdowns',
                to: '#/elements/dropdowns',

            },
            {
                label: 'Icons',
                to: '#/elements/icons',
            },
            {
                label: 'Badges',
                to: '#/elements/badges-labels',
            },
            {
                label: 'Cards',
                to: '#/elements/cards',
            },
            {
                label: 'List Groups',
                to: '#/elements/list-group',
            },
            {
                label: 'Navigation Menus',
                to: '#/elements/navigation',
            },
            {
                label: 'Utilities',
                to: '#/elements/utilities',
            },
        ],
    },
    {
        icon: 'pe-7s-notebook',
        label: 'Esculas',
        to: '#/tables/regular-tables',
    },
    {
        icon: 'pe-7s-study',
        label: 'Alumnos',
        content: [
            {
                label: 'Tabs',
                to: '#/components/tabs',
            },
            {
                label: 'Notifications',
                to: '#/components/notifications',
            },
            {
                label: 'Modals',
                to: '#/components/modals',
            },
            {
                label: 'Progress Bar',
                to: '#/components/progress-bar',
            },
            {
                label: 'Tooltips & Popovers',
                to: '#/components/tooltips-popovers',
            },
            {
                label: 'Carousel',
                to: '#/components/carousel',
            },
            {
                label: 'Maps',
                to: '#/components/maps',
            },
        ],
    },
];