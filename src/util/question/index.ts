interface Dictionary {
    [key: number]: string[];
}

export const optionsDictionary: Dictionary = {
    2: ['Desacuerdo', 'De acuerdo'],
    3: ['Desacuerdo', 'Indiferente', 'De acuerdo'],
    5: ['Fuertemente en desacuerdo', 'Desacuerdo', 'Neutro', 'De acuerdo', 'Fuertemente de acuerdo'],
    7: [ 'Completamente en desacuerdo', 'En desacuerdo', 'Parcialmente en desacuerdo', 'Indiferente', 'Parcialmente de acuerdo', 'De acuerdo', 'Completamente de acuerdo',]
};