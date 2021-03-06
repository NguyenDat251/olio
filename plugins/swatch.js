import Vue from 'vue'
let ArrSwatch = [
    {
        label: "LD0770",
        value: "382",
        color: "0223a5"
    },
    {
        label: "LD0780",
        value: "383",
        color: "6c6867"
    },
    {
        label: "LD0810",
        value: "384",
        color: "56456b"
    },
    {
        label: "LD0850",
        value: "385",
        color: "d4cdb0"
    },
    {
        label: "LD0860",
        value: "386",
        color: "bdc4c3"
    },
    {
        label: "LD087",
        value: "387",
        color: "decfbc"
    },
    {
        label: "LD0880",
        value: "388",
        color: "dfc9c2"
    },
    {
        label: "LD0890",
        value: "389",
        color: "ad9094"
    },

    {
        label: "LD0900",
        value: "391",
        color: "505c84"
    },
    {
        label: "LD0910",
        value: "392",
        color: "869baf"
    },
    {
        label: "LD0920",
        value: "394",
        color: "4d4155"
    },
    {
        label: "LD0930",
        value: "395",
        color: "a26967"
    },
    {
        label: "LD0940",
        value: "397",
        color: "00818f"
    },
    {
        label: "LD0950",
        value: "399",
        color: "81b8bb"
    },

    {
        label: "LD0960",
        value: "401",
        color: "325d78"
    },
    {
        label: "LD0970",
        value: "403",
        color: "5b7f99"
    },
    {
        label: "LD0980",
        value: "405",
        color: "c18e73"
    },
    {
        label: "LD1520",
        value: "407",
        color: "e4e0ec"
    },
    {
        label: "LD1540",
        value: "408",
        color: "23574e"
    },
    {
        label: "LD1550",
        value: "409",
        color: "bbf9ff"
    },
    {
        label: "LD1560",
        value: "410",
        color: "f09c9e"
    },
    {
        label: "LD1570",
        value: "411",
        color: "ae0f2c"
    },
    {
        label: "LD1580",
        value: "412",
        color: "c68188"
    },
    {
        label: "LD1600",
        value: "413",
        color: "6c4c68"
    },
    {
        label: "LD1610",
        value: "414",
        color: "92867e"
    },
    {
        label: "LD1620",
        value: "415",
        color: "50232f"
    },
    {
        label: "LD1630",
        value: "416",
        color: "7a6c65"
    }
];
let ArrSwatchDuo = [{
    label: "LD0951",
    value: "400",
    color: "81b8bb"
},
{
    label: "LD0941",
    value: "398",
    color: "6c6867"
},
{
    label: "LD0961",
    value: "402",
    color: "223a5e"
},
{
    label: "LD0911",
    value: "393",
    color: "5b7f99"
},

{
    label: "LD0971",
    value: "404",
    color: "5b7f99"
},
{
    label: "LD0931",
    value: "396",
    color: "6c6867"
},
{
    label: "LD0981",
    value: "406",
    color: "c18e73"
}, {
    label: "LD0892",
    value: "390",
    color: "dfc8c2"
},
]
Vue.prototype.$getSwatch = () => {
    return ArrSwatch;
}

Vue.prototype.$getSwatchDuo = () => {
    return ArrSwatchDuo;
}