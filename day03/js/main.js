// data types

const dataTypes = {
    primitives: {
        basic: {
            string: 'string',
            number: 1,
            boolean: true,
            rare: {
                symbol: Symbol('symbol'),
                bigInt: BigInt(1),
            }
        },
        nonValue: {
            undefined: undefined,
            null: null,
            NaN: NaN,
        },
    },
    organizational: {
        array: ['1', 2, 3],
        object: {}
    }
};

const strings = {
    qoutes:{
        single: 'single',
        double: "double",
        backtick: `backtick`,
    },
    concatenation: {
        simple: 'simple' + ' concatenation',
        template: `complex ${dataTypes.primitives.basic.string} concatenation`,
    },
    methods: {
        toUpperCase: 'simple'.toUpperCase(),
        toLowerCase: 'SIMPLE'.toLowerCase(),
        trim: '  simple  '.trim(),
        length: 'simple'.length,
        charAt: 'simple'.charAt(6),
        charCodeAt: 'simple'.charCodeAt(5),
        indexOf: 'simple'.indexOf('pl'),
        lastIndexOf: 'simplepl'.lastIndexOf('pl'),
        includes: 'simple'.includes('and'),
        startsWith: 'simple'.startsWith('si'),
        endsWith: 'simple'.endsWith('les'),
        repeat: 'simple'.repeat(3),
        padStart: 'simple'.padStart(10, '_'),
        padEnd: 'simple'.padEnd(10, '_'),
        trimStart: '  simple  '.trimStart(),
        trimEnd: '  simple  '.trimEnd(),
        trimLeft: '  simple  '.trimLeft(),
        trimRight: '  simple  '.trimRight(),
        localeCompare: 'simple'.localeCompare('simple'),
        match: 'simple'.match(/simple/),
        replace: 'simple'.replace(/simple/, 'complex'),
        search: 'simple'.search(/simple/),
        split: 'simple'.split(/simple/),
        concat: 'simple'.concat('complex'),
        codePointAt: 'simple'.codePointAt(6),
        normalize: 'simple'.normalize(),
    

    },
    myMethod: function() {
        console.log('this is my method')
    }
}

console.log(dataTypes.organizational, strings.methods)