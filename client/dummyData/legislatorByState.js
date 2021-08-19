// This is what we would like our data to look like:

const data = {
  NY: [
    {
      "@attributes": {
        cid: "N00029404",
        firstlast: "Lee Zeldin",
        lastname: "Zeldin",
        party: "R",
        office: "NY01",
        gender: "M",
        first_elected: "2014",
        exit_code: "16",
        comments: "Running for Governor",
        phone: "202-225-3826",
        fax: "202-225-3143",
        website: "https://zeldin.house.gov",
        webform: "",
        congress_office: "1517 Longworth House Office Building",
        bioguide_id: "Z000017",
        votesmart_id: "",
        feccandid: "H8NY01148",
        twitter_id: "RepLeeZeldin",
        youtube_url: "",
        facebook_id: "RepLeeZeldin",
        birthdate: "1980-01-30",
      },
    },
    {
      "@attributes": {
        cid: "N00046030",
        firstlast: "Andrew Garbarino",
        lastname: "Garbarino",
        party: "R",
        office: "NY02",
        gender: "M",
        first_elected: "2020",
        exit_code: "0",
        comments: "",
        phone: "(202) 225-7896",
        fax: "(202) 226-2279",
        website: "https://garbarino.house.gov/",
        webform: "",
        congress_office:
          "1516 Longworth House Office Building, Washington, DC 20515",
        bioguide_id: "G000597",
        votesmart_id: "",
        feccandid: "",
        twitter_id: "@RepGarbarino",
        youtube_url: "",
        facebook_id: "RepAndrewGarbarino",
        birthdate: "09/27/84",
      },
    },
    {
      "@attributes": {
        cid: "N00038742",
        firstlast: "Tom Suozzi",
        lastname: "Suozzi",
        party: "D",
        office: "NY03",
        gender: "M",
        first_elected: "2016",
        exit_code: "0",
        comments: "",
        phone: "202-225-3335",
        fax: "202-225-4669",
        website: "https://suozzi.house.gov",
        webform: "",
        congress_office: "226 Cannon House Office Building",
        bioguide_id: "S001201",
        votesmart_id: "",
        feccandid: "",
        twitter_id: "RepTomSuozzi",
        youtube_url: "",
        facebook_id: "RepTomSuozzi",
        birthdate: "1962-08-31",
      },
    },
    {
      "@attributes": {
        cid: "N00035927",
        firstlast: "Kathleen Rice",
        lastname: "Rice",
        party: "D",
        office: "NY04",
        gender: "F",
        first_elected: "2014",
        exit_code: "0",
        comments: "",
        phone: "202-225-5516",
        fax: "202-225-5758",
        website: "http://kathleenrice.house.gov",
        webform: "",
        congress_office: "1508 Longworth House Office Building",
        bioguide_id: "R000602",
        votesmart_id: "",
        feccandid: "H4NY04075",
        twitter_id: "RepKathleenRice",
        youtube_url: "",
        facebook_id: "RepKathleenRice",
        birthdate: "1965-02-15",
      },
    },
    {
      "@attributes": {
        cid: "N00001171",
        firstlast: "Gregory W Meeks",
        lastname: "Meeks",
        party: "D",
        office: "NY05",
        gender: "M",
        first_elected: "1998",
        exit_code: "0",
        comments: "",
        phone: "202-225-3461",
        fax: "202-226-4169",
        website: "http://meeks.house.gov",
        webform: "https://meeks.house.gov/contact-me/email-me",
        congress_office: "2234 Rayburn House Office Building",
        bioguide_id: "M001137",
        votesmart_id: "4360",
        feccandid: "H8NY06048",
        twitter_id: "GregoryMeeks",
        youtube_url: "https://youtube.com/gwmeeks",
        facebook_id: "gregorymeeksny05",
        birthdate: "1953-09-25",
      },
    },
    {
      "@attributes": {
        cid: "N00034547",
        firstlast: "Grace Meng",
        lastname: "Meng",
        party: "D",
        office: "NY06",
        gender: "F",
        first_elected: "2012",
        exit_code: "0",
        comments: "",
        phone: "202-225-2601",
        fax: "202-225-1589",
        website: "http://meng.house.gov",
        webform: "https://meng.house.gov/contact/email-me",
        congress_office: "1317 Longworth House Office Building",
        bioguide_id: "M001188",
        votesmart_id: "69157",
        feccandid: "H2NY06116",
        twitter_id: "RepGraceMeng",
        youtube_url: "",
        facebook_id: "repgracemeng",
        birthdate: "1975-10-01",
      },
    },
    {
      "@attributes": {
        cid: "N00001102",
        firstlast: "Nydia Velazquez",
        lastname: "Velazquez",
        party: "D",
        office: "NY07",
        gender: "F",
        first_elected: "1992",
        exit_code: "0",
        comments: "",
        phone: "202-225-2361",
        fax: "202-226-0327",
        website: "https://velazquez.house.gov",
        webform: "http://velazquez.house.gov/IMA/issue_subscribe.shtml",
        congress_office: "2302 Rayburn House Office Building",
        bioguide_id: "V000081",
        votesmart_id: "26975",
        feccandid: "H2NY00010",
        twitter_id: "NydiaVelazquez",
        youtube_url: "https://youtube.com/nydiavelazquez",
        facebook_id: "8037068318",
        birthdate: "1953-03-28",
      },
    },
    {
      "@attributes": {
        cid: "N00033640",
        firstlast: "Hakeem Jeffries",
        lastname: "Jeffries",
        party: "D",
        office: "NY08",
        gender: "M",
        first_elected: "2012",
        exit_code: "0",
        comments: "",
        phone: "202-225-5936",
        fax: "",
        website: "http://jeffries.house.gov",
        webform: "https://jeffriesforms.house.gov/contact/",
        congress_office: "1607 Longworth House Office Building",
        bioguide_id: "J000294",
        votesmart_id: "55285",
        feccandid: "H2NY10092",
        twitter_id: "RepJeffries",
        youtube_url: "",
        facebook_id: "RepHakeemJeffries",
        birthdate: "1970-08-04",
      },
    },
    {
      "@attributes": {
        cid: "N00026961",
        firstlast: "Yvette D Clarke",
        lastname: "Clarke",
        party: "D",
        office: "NY09",
        gender: "F",
        first_elected: "2006",
        exit_code: "0",
        comments: "",
        phone: "202-225-6231",
        fax: "202-226-0112",
        website: "https://clarke.house.gov",
        webform: "https://clarke.house.gov/contact/email-me",
        congress_office: "2058 Rayburn House Office Building",
        bioguide_id: "C001067",
        votesmart_id: "44741",
        feccandid: "H4NY11138",
        twitter_id: "RepYvetteClarke",
        youtube_url: "https://youtube.com/repyvetteclarke",
        facebook_id: "repyvettedclarke",
        birthdate: "1964-11-21",
      },
    },
    {
      "@attributes": {
        cid: "N00000939",
        firstlast: "Jerrold Nadler",
        lastname: "Nadler",
        party: "D",
        office: "NY10",
        gender: "M",
        first_elected: "1992",
        exit_code: "0",
        comments: "",
        phone: "202-225-5635",
        fax: "202-225-6923",
        website: "http://nadler.house.gov",
        webform:
          "https://jerroldnadler.house.gov/forms/writeyourrep/default.aspx",
        congress_office: "2109 Rayburn House Office Building",
        bioguide_id: "N000002",
        votesmart_id: "26980",
        feccandid: "H2NY17071",
        twitter_id: "RepJerryNadler",
        youtube_url: "https://youtube.com/congressmannadler",
        facebook_id: "CongressmanNadler",
        birthdate: "1947-06-13",
      },
    },
    {
      "@attributes": {
        cid: "N00044040",
        firstlast: "Nicole Malliotakis",
        lastname: "Malliotakis",
        party: "R",
        office: "NY11",
        gender: "F",
        first_elected: "2020",
        exit_code: "0",
        comments: "",
        phone: "(202) 225-3371",
        fax: "",
        website: "https://malliotakis.house.gov/",
        webform: "",
        congress_office:
          "417 Cannon House Office Building, Washington, DC 20515",
        bioguide_id: "M000317",
        votesmart_id: "",
        feccandid: "",
        twitter_id: "@RepMalliotakis",
        youtube_url: "",
        facebook_id: "",
        birthdate: "11/11/80",
      },
    },
    {
      "@attributes": {
        cid: "N00000078",
        firstlast: "Carolyn B Maloney",
        lastname: "Maloney",
        party: "D",
        office: "NY12",
        gender: "F",
        first_elected: "1992",
        exit_code: "0",
        comments: "",
        phone: "202-225-7944",
        fax: "202-225-4709",
        website: "http://maloney.house.gov",
        webform: "https://maloney.house.gov/contact-me/email-me",
        congress_office: "2308 Rayburn House Office Building",
        bioguide_id: "M000087",
        votesmart_id: "26978",
        feccandid: "H2NY14037",
        twitter_id: "RepMaloney",
        youtube_url: "",
        facebook_id: "RepCarolynMaloney",
        birthdate: "1946-02-19",
      },
    },
    {
      "@attributes": {
        cid: "N00034549",
        firstlast: "Adriano Espaillat",
        lastname: "Espaillat",
        party: "D",
        office: "NY13",
        gender: "M",
        first_elected: "2016",
        exit_code: "0",
        comments: "",
        phone: "202-225-4365",
        fax: "202-225-0816",
        website: "https://espaillat.house.gov",
        webform: "",
        congress_office: "1630 Longworth House Office Building",
        bioguide_id: "E000297",
        votesmart_id: "",
        feccandid: "",
        twitter_id: "RepEspaillat",
        youtube_url: "",
        facebook_id: "RepEspaillat",
        birthdate: "1954-09-27",
      },
    },
    {
      "@attributes": {
        cid: "N00041162",
        firstlast: "Alexandria Ocasio-Cortez",
        lastname: "Ocasio-Cortez",
        party: "D",
        office: "NY14",
        gender: "F",
        first_elected: "2018",
        exit_code: "0",
        comments: "",
        phone: "202-225-3965",
        fax: "",
        website: "https://ocasio-cortez.house.gov/",
        webform: "",
        congress_office: "229 Cannon House Office Building",
        bioguide_id: "O000172",
        votesmart_id: "",
        feccandid: "",
        twitter_id: "",
        youtube_url: "",
        facebook_id: "",
        birthdate: "1989-10-13",
      },
    },
    {
      "@attributes": {
        cid: "N00044346",
        firstlast: "Ritchie Torres",
        lastname: "Torres",
        party: "D",
        office: "NY15",
        gender: "M",
        first_elected: "2020",
        exit_code: "0",
        comments: "",
        phone: "(202) 225-4361",
        fax: "(202) 225-6001",
        website: "https://ritchietorres.house.gov/",
        webform: "",
        congress_office:
          "317 Cannon House Office Building Washington, DC  20515",
        bioguide_id: "T000486",
        votesmart_id: "",
        feccandid: "",
        twitter_id: "@RepRitchie",
        youtube_url: "",
        facebook_id: "",
        birthdate: "03/12/88",
      },
    },
    {
      "@attributes": {
        cid: "N00044790",
        firstlast: "Jamaal Bowman",
        lastname: "Bowman",
        party: "D",
        office: "NY16",
        gender: "M",
        first_elected: "2020",
        exit_code: "0",
        comments: "",
        phone: "(202) 225-2464",
        fax: "(202) 225-5513",
        website: "https://bowman.house.gov/",
        webform: "",
        congress_office:
          "1605 Longworth House Office Building Washington, DC 20515",
        bioguide_id: "B001223",
        votesmart_id: "",
        feccandid: "",
        twitter_id: "@RepBowman",
        youtube_url: "",
        facebook_id: "",
        birthdate: "04/01/76",
      },
    },
    {
      "@attributes": {
        cid: "N00044908",
        firstlast: "Mondaire Jones",
        lastname: "Jones",
        party: "D",
        office: "NY17",
        gender: "M",
        first_elected: "2020",
        exit_code: "0",
        comments: "",
        phone: "(202) 225-6506",
        fax: "(202) 225-0546",
        website: "https://jones.house.gov/",
        webform: "",
        congress_office: "1017 Longworth HOB Washington, DC 20515",
        bioguide_id: "J000306",
        votesmart_id: "",
        feccandid: "",
        twitter_id: "@RepJones",
        youtube_url: "",
        facebook_id: "",
        birthdate: "05/18/87",
      },
    },
    {
      "@attributes": {
        cid: "N00034277",
        firstlast: "Sean Patrick Maloney",
        lastname: "Maloney",
        party: "D",
        office: "NY18",
        gender: "M",
        first_elected: "2012",
        exit_code: "0",
        comments: "",
        phone: "202-225-5441",
        fax: "202-225-3289",
        website: "http://seanmaloney.house.gov",
        webform: "https://seanmaloney.house.gov/contact/email-me",
        congress_office: "1027 Longworth House Office Building",
        bioguide_id: "M001185",
        votesmart_id: "139760",
        feccandid: "H2NY22139",
        twitter_id: "RepSeanMaloney",
        youtube_url: "",
        facebook_id: "RepSeanMaloney",
        birthdate: "1966-07-30",
      },
    },
    {
      "@attributes": {
        cid: "N00040741",
        firstlast: "Antonio Delgado",
        lastname: "Delgado",
        party: "D",
        office: "NY19",
        gender: "M",
        first_elected: "2018",
        exit_code: "0",
        comments: "",
        phone: "202-225-5614",
        fax: "",
        website: "https://delgado.house.gov/",
        webform: "",
        congress_office: "1007 Longworth House Office Building",
        bioguide_id: "D000630",
        votesmart_id: "",
        feccandid: "",
        twitter_id: "repdelgado",
        youtube_url: "",
        facebook_id: "",
        birthdate: "1977-01-19",
      },
    },
    {
      "@attributes": {
        cid: "N00030196",
        firstlast: "Paul Tonko",
        lastname: "Tonko",
        party: "D",
        office: "NY20",
        gender: "M",
        first_elected: "2008",
        exit_code: "0",
        comments: "",
        phone: "202-225-5076",
        fax: "202-225-5077",
        website: "https://tonko.house.gov",
        webform: "https://tonko.house.gov/email-form1",
        congress_office: "2463 Rayburn House Office Building",
        bioguide_id: "T000469",
        votesmart_id: "4403",
        feccandid: "H8NY21203",
        twitter_id: "RepPaulTonko",
        youtube_url: "https://youtube.com/reppaultonko",
        facebook_id: "reppaultonko",
        birthdate: "1949-06-18",
      },
    },
    {
      "@attributes": {
        cid: "N00035523",
        firstlast: "Elise Stefanik",
        lastname: "Stefanik",
        party: "R",
        office: "NY21",
        gender: "F",
        first_elected: "2014",
        exit_code: "0",
        comments: "",
        phone: "202-225-4611",
        fax: "202-226-0621",
        website: "https://stefanik.house.gov",
        webform: "",
        congress_office: "318 Cannon House Office Building",
        bioguide_id: "S001196",
        votesmart_id: "",
        feccandid: "H4NY21079",
        twitter_id: "RepStefanik",
        youtube_url: "",
        facebook_id: "RepEliseStefanik",
        birthdate: "1984-07-02",
      },
    },
    {
      "@attributes": {
        cid: "N00036351",
        firstlast: "Claudia Tenney",
        lastname: "Tenney",
        party: "R",
        office: "NY22",
        gender: "F",
        first_elected: "2020",
        exit_code: "0",
        comments: "",
        phone: "202-225-3665",
        fax: "",
        website: "https://tenney.house.gov",
        webform: "",
        congress_office: "512 Cannon House Office Building",
        bioguide_id: "T000478",
        votesmart_id: "",
        feccandid: "",
        twitter_id: "RepTenney",
        youtube_url: "",
        facebook_id: "RepClaudiaTenney",
        birthdate: "1961-02-04",
      },
    },
    {
      "@attributes": {
        cid: "N00030949",
        firstlast: "Tom Reed",
        lastname: "Reed",
        party: "R",
        office: "NY23",
        gender: "M",
        first_elected: "2010",
        exit_code: "4",
        comments: "Retiring at end of 117th Congress",
        phone: "202-225-3161",
        fax: "202-226-6599",
        website: "https://reed.house.gov",
        webform: "https://reed.house.gov/contact-me/email-me",
        congress_office: "2437 Rayburn House Office Building",
        bioguide_id: "R000585",
        votesmart_id: "127046",
        feccandid: "H0NY29054",
        twitter_id: "RepTomReed",
        youtube_url: "https://youtube.com/CongressmanTomReed",
        facebook_id: "RepTomReed",
        birthdate: "1971-11-18",
      },
    },
    {
      "@attributes": {
        cid: "N00035934",
        firstlast: "John Katko",
        lastname: "Katko",
        party: "R",
        office: "NY24",
        gender: "M",
        first_elected: "2014",
        exit_code: "0",
        comments: "",
        phone: "202-225-3701",
        fax: "202-225-4042",
        website: "https://katko.house.gov",
        webform: "",
        congress_office: "1620 Longworth House Office Building",
        bioguide_id: "K000386",
        votesmart_id: "",
        feccandid: "H4NY24073",
        twitter_id: "RepJohnKatko",
        youtube_url: "",
        facebook_id: "RepJohnKatko",
        birthdate: "1962-11-09",
      },
    },
    {
      "@attributes": {
        cid: "N00043207",
        firstlast: "Joseph D Morelle",
        lastname: "Morelle",
        party: "D",
        office: "NY25",
        gender: "M",
        first_elected: "2018",
        exit_code: "0",
        comments: "",
        phone: "202-225-3615",
        fax: "",
        website: "https://morelle.house.gov",
        webform: "",
        congress_office: "1317 Longworth House Office Building",
        bioguide_id: "M001206",
        votesmart_id: "",
        feccandid: "",
        twitter_id: "repjoemorelle",
        youtube_url: "",
        facebook_id: "",
        birthdate: "1957-04-29",
      },
    },
    {
      "@attributes": {
        cid: "N00027060",
        firstlast: "Brian M Higgins",
        lastname: "Higgins",
        party: "D",
        office: "NY26",
        gender: "M",
        first_elected: "2004",
        exit_code: "0",
        comments: "",
        phone: "202-225-3306",
        fax: "202-226-0347",
        website: "http://higgins.house.gov",
        webform: "http://higgins.house.gov/contact/email-brian",
        congress_office: "2459 Rayburn House Office Building",
        bioguide_id: "H001038",
        votesmart_id: "23127",
        feccandid: "H4NY27076",
        twitter_id: "RepBrianHiggins",
        youtube_url: "https://youtube.com/CongressmanHiggins",
        facebook_id: "RepBrianHiggins",
        birthdate: "1959-10-06",
      },
    },
    {
      "@attributes": {
        cid: "N00044575",
        firstlast: "Chris Jacobs",
        lastname: "Jacobs",
        party: "R",
        office: "NY27",
        gender: "M",
        first_elected: "2020",
        exit_code: "0",
        comments: "",
        phone: "",
        fax: "",
        website: "",
        webform: "",
        congress_office: "",
        bioguide_id: "",
        votesmart_id: "",
        feccandid: "",
        twitter_id: "",
        youtube_url: "",
        facebook_id: "",
        birthdate: "",
      },
    },
    {
      "@attributes": {
        cid: "N00027658",
        firstlast: "Kirsten Gillibrand",
        lastname: "Gillibrand",
        party: "D",
        office: "NYS1",
        gender: "F",
        first_elected: "2009",
        exit_code: "0",
        comments: "",
        phone: "202-224-4451",
        fax: "202-228-0282",
        website: "https://www.gillibrand.senate.gov",
        webform: "http://www.gillibrand.senate.gov/contact/",
        congress_office: "478 Russell Senate Office Building",
        bioguide_id: "G000555",
        votesmart_id: "65147",
        feccandid: "H6NY20167",
        twitter_id: "SenGillibrand",
        youtube_url: "https://youtube.com/KirstenEGillibrand",
        facebook_id: "KirstenGillibrand",
        birthdate: "1966-12-09",
      },
    },
    {
      "@attributes": {
        cid: "N00001093",
        firstlast: "Charles E Schumer",
        lastname: "Schumer",
        party: "D",
        office: "NYS2",
        gender: "M",
        first_elected: "1998",
        exit_code: "0",
        comments: "",
        phone: "202-224-6542",
        fax: "202-228-3027",
        website: "https://www.schumer.senate.gov",
        webform: "https://www.schumer.senate.gov/contact/email-chuck",
        congress_office: "322 Hart Senate Office Building",
        bioguide_id: "S000148",
        votesmart_id: "26976",
        feccandid: "S8NY00082",
        twitter_id: "SenSchumer",
        youtube_url: "https://youtube.com/SenatorSchumer",
        facebook_id: "senschumer",
        birthdate: "1950-11-23",
      },
    },
  ],
};

module.exports = { data };
