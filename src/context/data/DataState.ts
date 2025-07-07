import { InitialState } from "./DataContext";

const initialState: InitialState = {
    players: [
        {
            id: 1,
            name: 'Nicolas',
            number: '01',
            position: 'Central',
            statistics: []
        },
        {
            id: 2,
            name: 'Leornardo',
            number: '02',
            position: 'Armador',
            statistics: []
        },
        {
            id: 3,
            name: 'Santiago',
            number: '03',
            position: 'Opuesto',
            statistics: []
        },
        {
            id: 4,
            name: 'Alberto',
            number: '04',
            position: 'Central',
            statistics: []
        },
        {
            id: 5,
            name: 'Brandon',
            number: '05',
            position: 'Punta',
            statistics: []
        },
        {
            id: 6,
            name: 'Sebastian',
            number: '06',
            position: 'Punta',
            statistics: []
        },
        {
            id: 7,
            name: 'Juan',
            number: '07',
            position: 'Libero',
            statistics: []
        },
    ],
    positions: [
        {
            id: 4,
            name: 'Central 1'
        },
        {
            id: 1,
            name: 'Central 2'
        },
        {
            id: 2,
            name: 'Armador'
        },
        {
            id: 5,
            name: 'Opuesto'
        },
        {
            id: 3,
            name: 'Extremo 1'
        },
        {
            id: 6,
            name: 'Extremo 2'
        },
        {
            id: 7,
            name: 'Libero'
        }
    ]

}


export default initialState