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

const popups = {
    // alert: alert('hey there is an update'), // tell the user something
    // confirm: confirm('are you sure?'), // ask the user a question and get a boolean answer
    // prompt: prompt('prompt'),
}

const answer = popups.prompt;
console.log(answer);


const dates = {
    now: new Date(),
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    methods: {
        getDate: new Date().getDate(),
        getDay: new Date().getDay(),
        getFullYear: new Date().getFullYear(),
        getHours: new Date().getHours(),
        getMilliseconds: new Date().getMilliseconds(),
        getMinutes: new Date().getMinutes(),
        getMonth: new Date().getMonth(),
        getSeconds: new Date().getSeconds(),
        getTime: new Date().getTime(),
        getTimezoneOffset: new Date().getTimezoneOffset(),
        getUTCDate: new Date().getUTCDate(),
        getUTCDay: new Date().getUTCDay(),
        getUTCFullYear: new Date().getUTCFullYear(),
        getUTCHours: new Date().getUTCHours(),
        getUTCMilliseconds: new Date().getUTCMilliseconds(),
        getUTCMinutes: new Date().getUTCMinutes(),
        getUTCMonth: new Date().getUTCMonth(),
        getUTCSeconds: new Date().getUTCSeconds(),
        getYear: new Date().getYear(),
        setDate: new Date().setDate(1),
        setFullYear: new Date().setFullYear(2020),
        setHours: new Date().setHours(1),
        setMilliseconds: new Date().setMilliseconds(1),
    }
};

const math = {

    methods: {
        random: Math.random(),


        abs: Math.abs(-1),
        acos: Math.acos(1),
        asin: Math.asin(1),
        atan: Math.atan(1),
        atan2: Math.atan2(1, 1),
        ceil: Math.ceil(1),
        cos: Math.cos(1),
        exp: Math.exp(1),
        floor: Math.floor(1),
        log: Math.log(1),
        max: Math.max(1, 2),
        min: Math.min(1, 2),
        pow: Math.pow(1, 2),
        sin: Math.sin(1),
        sqrt: Math.sqrt(1),
        tan: Math.tan(1),
        trunc: Math.trunc(1),
        round: Math.round(1),
     

    }
}

console.log(math)