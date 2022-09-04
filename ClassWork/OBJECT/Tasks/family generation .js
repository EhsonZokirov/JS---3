function generation(generation, gender) {
    family = {
        '-3': {
            'm': 'great grandfather',
            'f': 'great grandmather',
        },
        '-2': {
            'm': 'grandfather',
            'f': 'grandmather',
        },
        '-1': {
            'm': 'father',
            'f': 'mather',
        },
        '0': {
            'f': 'me!',
            'm': 'me!',
        },
        '1': {
            'm': 'son',
            'f': 'daughter',
        },
        '2': {
            'm': 'grandson',
            'f': 'granddaughter',
        },
        '3': {
            'm': 'great grandson',
            'f': 'great granddaughter',
        },
    }
    return family[generation][gender]
}
console.log(generation(1, 'm'));
console.log(generation(0, 'f'));
console.log(generation(-1, 'm'));