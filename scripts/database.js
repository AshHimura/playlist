const database = {
    artists: [
        {
            id: 1,
            firstName: "Michael",
            lastName: "Jackson",
            website: "www.mj.com"
        },
        {
            id: 2,
            firstName: "Dolly",
            lastName: "Parton",
            website: "www.besthumanever.com"
        },
        {
            id: 3,
            firstName: "Cardi",
            lastName: "B",
            website: "www.therealb.com"
        },
        {
            id: 4,
            firstName: "Camila",
            lastName: "Cabello",
            website: "www.camilac.com"
        },
        {
            id: 5,
            firstName: "Elton",
            lastName: "John",
            website: "www.rocketman.com"
        }
    ],
    songs: [{
        "id": 1,
        "title": "Spartan E2 Hand Wash and Sanitizer",
        "length": 164,
        "artistId": 2,
        "yearReleased": "2020-12-31"
    }, {
        "id": 2,
        "title": "Valacyclovir Hydrochloride",
        "length": 248,
        "artistId": 2,
        "yearReleased": "2019-08-22"
    }, {
        "id": 3,
        "title": "CELEBREX",
        "length": 199,
        "artistId": 4,
        "yearReleased": "2020-05-09"
    }, {
        "id": 4,
        "title": "CRESTOR",
        "length": 291,
        "artistId": 1,
        "yearReleased": "2015-05-03"
    }, {
        "id": 5,
        "title": "MISSHA M SHINY BB",
        "length": 178,
        "artistId": 1,
        "yearReleased": "2021-03-04"
    }, {
        "id": 6,
        "title": "Isopropyl Rubbing Alcohol With Wintergreen",
        "length": 165,
        "artistId": 3,
        "yearReleased": "2013-11-21"
    }, {
        "id": 7,
        "title": "Cortisone Acetate",
        "length": 269,
        "artistId": 3,
        "yearReleased": "2015-07-26"
    }, {
        "id": 8,
        "title": "Tradjenta",
        "length": 169,
        "artistId": 1,
        "yearReleased": "2019-08-13"
    }, {
        "id": 9,
        "title": "Defend Cold and Mucus",
        "length": 295,
        "artistId": 4,
        "yearReleased": "2019-10-23"
    }, {
        "id": 10,
        "title": "Amoxicillin",
        "length": 223,
        "artistId": 2,
        "yearReleased": "2014-05-21"
    }, {
        "id": 11,
        "title": "Lipitor",
        "length": 292,
        "artistId": 4,
        "yearReleased": "2014-02-26"
    }, {
        "id": 12,
        "title": "ADVATE",
        "length": 227,
        "artistId": 1,
        "yearReleased": "2015-07-20"
    }, {
        "id": 13,
        "title": "Creamy Petroleum Jelly",
        "length": 166,
        "artistId": 3,
        "yearReleased": "2017-10-16"
    }, {
        "id": 14,
        "title": "Aquafresh Big Kids",
        "length": 213,
        "artistId": 1,
        "yearReleased": "2017-02-28"
    }, {
        "id": 15,
        "title": "Betamethasone Valerate",
        "length": 194,
        "artistId": 5,
        "yearReleased": "2018-01-28"
    }, {
        "id": 16,
        "title": "Valproic Acid",
        "length": 227,
        "artistId": 5,
        "yearReleased": "2014-09-03"
    }, {
        "id": 17,
        "title": "TOPIRAMATE",
        "length": 294,
        "artistId": 1,
        "yearReleased": "2021-09-21"
    }, {
        "id": 18,
        "title": "Meloxicam",
        "length": 281,
        "artistId": 1,
        "yearReleased": "2015-08-05"
    }, {
        "id": 19,
        "title": "Carnitor",
        "length": 300,
        "artistId": 2,
        "yearReleased": "2019-04-20"
    }, {
        "id": 20,
        "title": "VELTIN",
        "length": 266,
        "artistId": 2,
        "yearReleased": "2017-03-16"
    }, {
        "id": 21,
        "title": "Amlodipine Besylate",
        "length": 181,
        "artistId": 3,
        "yearReleased": "2014-11-15"
    }, {
        "id": 22,
        "title": "Wheat Stem Rust",
        "length": 255,
        "artistId": 2,
        "yearReleased": "2016-10-29"
    }, {
        "id": 23,
        "title": "REHYDRATE",
        "length": 196,
        "artistId": 2,
        "yearReleased": "2014-08-25"
    }, {
        "id": 24,
        "title": "Hydrate",
        "length": 187,
        "artistId": 3,
        "yearReleased": "2015-07-03"
    }, {
        "id": 25,
        "title": "Claritin",
        "length": 181,
        "artistId": 3,
        "yearReleased": "2020-04-07"
    }, {
        "id": 26,
        "title": "Treatment Set TS344801",
        "length": 288,
        "artistId": 2,
        "yearReleased": "2017-06-04"
    }, {
        "id": 27,
        "title": "Lanacane",
        "length": 174,
        "artistId": 3,
        "yearReleased": "2018-02-18"
    }, {
        "id": 28,
        "title": "Phentermine Hydrochloride",
        "length": 245,
        "artistId": 1,
        "yearReleased": "2020-03-21"
    }, {
        "id": 29,
        "title": "VESIcare",
        "length": 203,
        "artistId": 5,
        "yearReleased": "2016-05-07"
    }, {
        "id": 30,
        "title": "Systane",
        "length": 184,
        "artistId": 5,
        "yearReleased": "2016-01-09"
    }, {
        "id": 31,
        "title": "Zolpidem Tartrate",
        "length": 227,
        "artistId": 5,
        "yearReleased": "2018-03-12"
    }, {
        "id": 32,
        "title": "Menopause",
        "length": 240,
        "artistId": 1,
        "yearReleased": "2015-11-08"
    }, {
        "id": 33,
        "title": "Ciprofloxacin",
        "length": 162,
        "artistId": 2,
        "yearReleased": "2016-04-30"
    }, {
        "id": 34,
        "title": "allergy",
        "length": 164,
        "artistId": 1,
        "yearReleased": "2016-09-20"
    }, {
        "id": 35,
        "title": "Instant Hand Sanitizer TENNder CARE",
        "length": 150,
        "artistId": 5,
        "yearReleased": "2019-06-26"
    }, {
        "id": 36,
        "title": "Cataract Crystalline Lens",
        "length": 269,
        "artistId": 5,
        "yearReleased": "2016-04-13"
    }, {
        "id": 37,
        "title": "Losartan Potassium",
        "length": 271,
        "artistId": 4,
        "yearReleased": "2021-09-12"
    }, {
        "id": 38,
        "title": "Kanamycin",
        "length": 162,
        "artistId": 4,
        "yearReleased": "2019-12-21"
    }, {
        "id": 39,
        "title": "Klor-Con",
        "length": 250,
        "artistId": 1,
        "yearReleased": "2015-04-16"
    }, {
        "id": 40,
        "title": "phendimetrazine tartrate",
        "length": 234,
        "artistId": 4,
        "yearReleased": "2017-04-18"
    }, {
        "id": 41,
        "title": "Instant Hand Sanitizer",
        "length": 264,
        "artistId": 1,
        "yearReleased": "2021-07-11"
    }, {
        "id": 42,
        "title": "Naratriptan",
        "length": 214,
        "artistId": 4,
        "yearReleased": "2014-12-09"
    }, {
        "id": 43,
        "title": "Sertraline Hydrochloride",
        "length": 289,
        "artistId": 1,
        "yearReleased": "2014-01-19"
    }, {
        "id": 44,
        "title": "Elitek",
        "length": 220,
        "artistId": 3,
        "yearReleased": "2015-05-25"
    }, {
        "id": 45,
        "title": "CLINIQUE",
        "length": 214,
        "artistId": 2,
        "yearReleased": "2021-04-13"
    }, {
        "id": 46,
        "title": "CYZONE",
        "length": 215,
        "artistId": 5,
        "yearReleased": "2016-11-08"
    }, {
        "id": 47,
        "title": "Dove",
        "length": 259,
        "artistId": 2,
        "yearReleased": "2019-07-15"
    }, {
        "id": 48,
        "title": "PRENATAL PLUS",
        "length": 166,
        "artistId": 5,
        "yearReleased": "2017-01-15"
    }, {
        "id": 49,
        "title": "Fluoxetine",
        "length": 154,
        "artistId": 2,
        "yearReleased": "2016-02-08"
    }, {
        "id": 50,
        "title": "Aspirin",
        "length": 248,
        "artistId": 4,
        "yearReleased": "2015-12-18"
    }, {
        "id": 51,
        "title": "Fluticasone",
        "length": 190,
        "artistId": 4,
        "yearReleased": "2015-01-04"
    }, {
        "id": 52,
        "title": "Anti-Diarrheal",
        "length": 190,
        "artistId": 3,
        "yearReleased": "2017-07-15"
    }, {
        "id": 53,
        "title": "Chills and Fevers",
        "length": 273,
        "artistId": 5,
        "yearReleased": "2021-01-30"
    }, {
        "id": 54,
        "title": "Doxy 100",
        "length": 269,
        "artistId": 2,
        "yearReleased": "2016-10-06"
    }, {
        "id": 55,
        "title": "CVS pharmacy",
        "length": 205,
        "artistId": 4,
        "yearReleased": "2014-09-16"
    }, {
        "id": 56,
        "title": "Triamterene and Hydrochlorothiazide",
        "length": 163,
        "artistId": 5,
        "yearReleased": "2017-05-03"
    }, {
        "id": 57,
        "title": "GOOD NEIGHBOR PHARMACY ACNE TREATMENT",
        "length": 230,
        "artistId": 1,
        "yearReleased": "2021-08-01"
    }, {
        "id": 58,
        "title": "TENUE DE PERFECTION TIMEPROOF FOUNDATION WITH SUNSCREEN ULTIMATE LASTING PERFECTION BROAD SPECTRUM SPF 20 13 ROSE NATUREL",
        "length": 171,
        "artistId": 5,
        "yearReleased": "2017-10-27"
    }, {
        "id": 59,
        "title": "Anacin",
        "length": 249,
        "artistId": 4,
        "yearReleased": "2016-10-28"
    }, {
        "id": 60,
        "title": "Clonazepam",
        "length": 255,
        "artistId": 1,
        "yearReleased": "2019-05-26"
    }, {
        "id": 61,
        "title": "Leucovorin",
        "length": 280,
        "artistId": 2,
        "yearReleased": "2019-03-23"
    }, {
        "id": 62,
        "title": "DermaCen Protectant",
        "length": 230,
        "artistId": 4,
        "yearReleased": "2019-04-15"
    }, {
        "id": 63,
        "title": "Prednisone",
        "length": 274,
        "artistId": 1,
        "yearReleased": "2021-02-12"
    }, {
        "id": 64,
        "title": "NU-DERM TRAVEL SET NORMAL/DRY",
        "length": 170,
        "artistId": 1,
        "yearReleased": "2015-08-01"
    }, {
        "id": 65,
        "title": "Tretinoin",
        "length": 151,
        "artistId": 2,
        "yearReleased": "2015-04-04"
    }, {
        "id": 66,
        "title": "No7 Beautiful Skin Day Dry Very Dry Sunscreen Broad Spectrum SPF 15",
        "length": 237,
        "artistId": 5,
        "yearReleased": "2019-02-17"
    }, {
        "id": 67,
        "title": "Nite Time Cold and Flu Relief",
        "length": 259,
        "artistId": 5,
        "yearReleased": "2015-04-02"
    }, {
        "id": 68,
        "title": "Premier Value Bisacodyl Laxative",
        "length": 270,
        "artistId": 2,
        "yearReleased": "2017-12-15"
    }, {
        "id": 69,
        "title": "DEXAMETHASONE SODIUM PHOSPHATE",
        "length": 184,
        "artistId": 2,
        "yearReleased": "2015-09-06"
    }, {
        "id": 70,
        "title": "Warfarin Sodium",
        "length": 242,
        "artistId": 4,
        "yearReleased": "2021-03-12"
    }]
}

export const getArtists = () => {
    return database.artists.map(artist => ({...artist}))
}

export const getSongs = () => {
    return database.songs.map(song => ({...song}))
}
