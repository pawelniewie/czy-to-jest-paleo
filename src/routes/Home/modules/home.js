// ------------------------------------
// Constants
// ------------------------------------
export const FIND_FOOD = 'FIND_FOOD';

// ------------------------------------
// Actions
// ------------------------------------
export function findFood(value = '') {
  return {
    type: FIND_FOOD,
    payload: value
  }
}

export const actions = {
  findFood
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FIND_FOOD]: (state, action) => ({
    ...state,
    whatFood: action.payload
  })
};

export const Answer = {
  Yes: 'Yes',
  No: 'No',
  Maybe: 'Maybe'
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  foods: [
    {
      "question": "Czy Migdały są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Papryka Anaheim jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Anchois są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Jabłka są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Pestki Moreli są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Morele są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Karczochy są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Awokado są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Bagietki są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Pędy Bambusa są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Papryka Bananowa jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Banany są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy kapusty Bean są Paleo?",
      "answer": "Maybe",
      "todo": true
    },
    {
      "question": "Czy Fasola jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Buraki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Papryka Roczna jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Herbatniki są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Czarna Fasola jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Czarny Rzepa jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Black-Eyed Peas są Paleo?",
      "answer": "No",
      "todo": true
    },
    {
      "question": "Czy Jeżyny są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Borówki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Kości są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Orzechy Brazylijskie są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Nasiona Gorczycy są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Piernik jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Brukselka jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Nasiona Kakaowca są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Miechunka Peruwiańska jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Kapary są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Marchew są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Orzechy Nerkowca są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Cheerios są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Wiśnie są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Kasztany są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Nasiona Chia są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Ciecierzyca jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Chili Peppers są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Chitosan są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Szczypiorek jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Chocolate Chips są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Cebula jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Małże są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Klementynki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Goździki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Coconut Aminos są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Płatki Kokosowe są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Collard Greens są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Cookies są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Corn Plewy są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Crackers są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Żurawina jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy rogaliki są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Grzanki są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Cubanelle Peppers są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Ogórki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Cupcakes są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Porzeczki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Daikon Rzodkiewka są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Dandelion Zielonych są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Termin są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Donuts są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Pączki są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Jaja są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Napoje Energetyczne są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy angielskie Babeczki są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Figi są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Nasiona Lnu są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Frytki są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Fasola Garbanzo są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Czosnek Scapes są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Jagody Goji są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Agrest jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Liście Winogron są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Winogrona są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Green Beans są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Zielona Cebula jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy guajillo Peppers są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Guawy są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Orzechy Laskowe są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Zioła są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Hot Kieszenie są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Jalapeno Peppers są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Fasola są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Kiwi są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Por jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Rośliny Strączkowe są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Cytryny są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Limonki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Korzenie Lotosu są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Lychee są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Orzechy Macadamia są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Mango są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Marshmallows są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Micro Zieloni są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Milkshakes są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Babeczki są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Grzyby są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Małże są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Musztarda Zielonych są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Nektarynki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Psiankowate są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Orzechy są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Oliwki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Cebula jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Pomarańcze są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Ostrygi są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Naleśniki są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Pasternak jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Makarony są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Brzoskwinie są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Peanuts są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Gruszki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Peas są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Orzechy Pekan są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Nuggets są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy peppadew paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Peppers są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Persymony są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Pickles są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy sosnowe są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Fasola Pinto jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Pistacje są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Plantains są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Śliwki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Pluots są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Poblano Peppers są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Granaty są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Pop Tarty są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Mak jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Chipsy są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Krewetki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Precle są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Nasiona Dyni są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy fioletowe ziemniaki są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Rzodkiewki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Rodzynki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Rampy są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Maliny są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Red Cebula są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Red Pepper Flakes są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Red Ziemniaki są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy grillowana są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Żeberka są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy brukiew są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy S'mores są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Nasiona Sacha Inchi są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Rzepa Sałatka są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Kanapki są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Sardynki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Liście są cząber są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Scallions są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy przegrzebki są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Scones są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Nasiona są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Serrano Papryka są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Sezam jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Szalotki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Koktajle są Paleo?",
      "answer": "Maybe",
      "todo": false
    },
    {
      "question": "Czy Ślimaki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Przyprawy są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Kiełki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Squash Blossoms są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Truskawki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Suszone Pomidory są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Nasiona Słonecznika są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Słodkie Frytki Ziemniaczane są Paleo?",
      "answer": "Maybe",
      "todo": false
    },
    {
      "question": "Czy Słodkie Ziemniaki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Tacos są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Tamales są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Mandarynki są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Tarty są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Tigernuts są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Tomatillos są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Pomidory są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Tortille są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Rzepa Zielonych są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Rzepa są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy ziaren wanilii są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Warzywa są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Vidalia Cebula są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Wafle są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Orzechy Włoskie są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Biały Cebula są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy białe ziemniaki są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy pełnoziarniste są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Yams są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Nasiona gorczycy są żółte są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Żółta Cebula jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Acorn Squash są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy syrop z agawy są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Alkohol jest Paleo?",
      "answer": "Maybe",
      "todo": false
    },
    {
      "question": "Czy Paleo jest ziele angielskie?",
      "answer": "Yes"
    },
    {
      "question": "Czy Almond Masło są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Almond Extract są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Almond Mąka są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Almond Mąka są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Almond Milk są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Amaranth są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Paleo skóry zwierząt?",
      "answer": "Yes"
    },
    {
      "question": "Czy Anyż jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Annatto są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Apple Masło są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Apple Cider są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Ocet Jabłkowy jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Apple Pie Spice są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Applesauce są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Maranta są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Rukola jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Szparagi są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Olej z Awokado jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Smalec jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Bekon jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Pieczenie Czekolada są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Proszek do Pieczenia jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Soda Oczyszczona jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Ocet balsamiczny jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Mąka Bananowa jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Jęczmień są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Barramundi są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Bazylia jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Bay Leaf są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Sos BBQ jest Paleo?",
      "answer": "Maybe",
      "todo": false
    },
    {
      "question": "Czy Pyłek Pszczeli jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Wołowina jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Piwo jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Bizon jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Bittersweet Czekolada są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Czarny Pieprz jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Czarna Herbata jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Dzik jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Bok Choy są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Rosół na Kościach jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Boston sałata są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Bouquet Garni są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Brandy jest Paleo?",
      "answer": "Maybe",
      "todo": false
    },
    {
      "question": "Czy Chleb jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy solanki są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Brokuły są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Brown Sugar są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Gryka jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Buffalo są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Bulgur Wheat są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Masło jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Maślanka jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy piżmowa są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Kapusta jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Kofeina są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Ciasta są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Camel Mięso są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Cukierki są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Olej Rzepakowy jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Cantaloupe są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Karmel jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Kminek jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Kardamon jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Chleb Świętojański jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Carp są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Karagenina są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Mąka z Manioku jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Maniok jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Catfish są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Kalafior jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Pieprz Cayenne jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Seler jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Seler Naciowy jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Natka Selera jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Seler Salt są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Seler Seed są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Płatki Śniadaniowe są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Chai Tea są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Szampan jest Paleo?",
      "answer": "Maybe",
      "todo": false
    },
    {
      "question": "Czy Champagne Ocet są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Chard są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Chayote Squash są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Ser jest Paleo?",
      "answer": "Maybe",
      "todo": false
    },
    {
      "question": "Czy świerząbki są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Kurczak jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Cykoria jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Chili są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy chili w proszku są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Chipotle Powder są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Chipotle Salt są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Czekolada Mleczna jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Czekolada jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Chorizo ​​są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Kolendra jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Cynamon jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Masło Kakaowe jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Cocoa Mass są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Kakao w Proszku jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Coconut Masło są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy krem kokosowy są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Mąka Kokosowa jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Mleko Kokosowe jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Olej Kokosowy jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Kokosy są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Cukier Kokosowy jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Woda z Kokosa jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Olej z wątroby dorsza jest Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Cod są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Coffee są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Kolendra są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Mąka Kukurydziana jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Olej Kukurydziany jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Corn są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Skrobia kukurydziana są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Cornmeal są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Olej z nasion bawełny jest Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy bawełny są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Kuskus są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Crab są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy serek są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Cream of Tartar są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Śmietana jest Paleo?",
      "answer": "Maybe",
      "todo": false
    },
    {
      "question": "Czy Creme brulee są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Crème Caramel jest Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Fresh Cream są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Kmin są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Curry jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Custard są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Dairy są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Dark Chocolate są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Wiórki Kokosowe są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy dieta Pop są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy dieta Soda są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Koper jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Dill Weed są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Dragon Fruit są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Fat Duck są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Kaczka jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Pierogarnia Squash są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Nie s edamame Pa ~ eo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Eggnog są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Bakłażan jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Elk są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Paleo Endywia?",
      "answer": "Yes"
    },
    {
      "question": "Czy Escarole jest Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Ezechiel Chleb są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy kozieradki są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Fermentowana Soja jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Fish są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Fish Roe są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Fish Sos są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy lniany Mąka są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Olej lniany jest Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Mąka są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy frisee są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Lukier jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Frozen Yogurt są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Owoce są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Fudge są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Galangal jest Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Garam Masala jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Czosnek jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Czosnek w Proszku jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Sól Czosnkowa jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Żelatyna jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Gelato są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Ghee jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Giardiniera są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Gin jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Ginger są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy żołądek są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Gluten jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Glycomaize są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Kozie Tłuszcz jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Mleko Kozie jest Paleo?",
      "answer": "Maybe",
      "todo": false
    },
    {
      "question": "Czy Koza jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Koza Protein są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Goose są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Olej z pestek winogron jest Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy grejpfrutowy są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Green Kapusta są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Green Tea są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Grouper są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Guma Guar jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Habanero są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Halibut jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Ham są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Twardy Cydr są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Harissa są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Serca są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Olej konopi są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Hemp są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Herbata ziołowa są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Zioła Prowansalskie są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Śledzie są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Hominy są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Miód jest Paleo?",
      "answer": "Maybe",
      "todo": false
    },
    {
      "question": "Czy Spadzi jest Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Chrzan jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Hot Chocolate są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Hot Cocoa są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Hot Fudge są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Hot Sauce są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Hummus jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Ice Cream są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy puder są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy włoskie przyprawy są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Jam są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Jelly są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Jicama są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy soki są Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Juniper Berry są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Kabocha Squash są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Kale są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Kefir jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Ketchup jest Paleo?",
      "answer": "Maybe",
      "todo": false
    },
    {
      "question": "Czy Kimchi są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Kalarepa jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Kombucha jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Kremelta są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Lamb są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Lavender są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Lemon Verbena są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Lemongrass są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Sałata jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Olej lniany jest Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Wątroba jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Lobster są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Macadamia Nut Oil są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Mace są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Makrela jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Mahi Mahi są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Dyskusja Czy Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Malt są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Ocet słodowy jest Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Syrop klonowy jest Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Margaryna jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Majeranek jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Marmalade są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Korzeń Prawoślazu jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Serek Mascarpone jest Paleo?",
      "answer": "Maybe",
      "todo": false
    },
    {
      "question": "Czy Matcha Green Tea są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Majonez jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy MCT są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Mead są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Mezcal są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy czekolada mleczna są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy mleko są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Jagły są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Wyciąg z mięty jest Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Oraz są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Miso jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Melasa są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Mousse są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy MSG są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Musztarda jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Baranina jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Nie s nakrętka Pa ~ eo?",
      "answer": "No"
    },
    {
      "question": "Czy Nori są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy gałka muszkatołowa są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy drożdże odżywcze są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Owsianka jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Octopus są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Podroby są Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Okra są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Oliwa z Oliwek jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Onion Powder są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Herbata Oolong jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Oregano jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy narządów Mięso są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Jęczmień jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Struś są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy ogonowa są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Olej Palmowy jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Palm Skrócenie są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Panko są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Papaya są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Paprika są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Pietruszka jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Passion Fruit są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Pasta są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Peanut Butter są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Peanut Oil są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Pektyny są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Peppermint są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Pepperoni są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Bażant są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Pie są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Pineapple są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy chleb pita są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Pizza Ciasto są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy babki Mąka są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Pop są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Popcorn jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Wieprzowina jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Port Wine są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Mąka ziemniaczana jest Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Skrobia ziemniaczana jest Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy szynka są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Psyllium jest Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Pumpkin są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Pumpkin Pie Spice są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Purple Kapusta są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Przepiórka są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Quiche są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Quinoa są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Ice Paleo Quorn?",
      "answer": "No"
    },
    {
      "question": "Czy Rabbit są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Radicchio jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Olej Rzepakowy jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Rapini jest Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Red Kuri Squash są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Red Wine Ocet są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Rabarbar jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Rice Bran Oil są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Ryż jest Paleo?",
      "answer": "Maybe",
      "todo": false
    },
    {
      "question": "Czy Ocet Ryżowy jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Sałata Rzymska jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Rooibos jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Rosemary są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Royal Jelly są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Rum jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Rye są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy olej z krokosza barwierskiego są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Saffron są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Sage są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Sake jest Paleo?",
      "answer": "Maybe",
      "todo": false
    },
    {
      "question": "Czy Salmon są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Święty Mikołaj Melon są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Kiszona są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Kiełbasa są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Schmaltz są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Scotch Bonnet jest Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Sea Salt są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Seafood są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Wodorosty są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy półsłodkie Chocolate są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Olej z nasion sezamu jest Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Sorbet jest Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Sherry są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Sherry Ocet są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Rozdrobnione Coconut są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Shrimp są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy To proste syropu są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy wędzonym łososiem są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Snapper są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Soda są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Sorbet są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Sour Cream są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Lecytyna Sojowa jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Mleko sojowe jest Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Soy są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy sos sojowy są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Olej sojowy jest Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Spearmint są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Orkisz jest Paleo?",
      "answer": "No",
      "todo": false
    },
    {
      "question": "Czy Szpinak jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Spirulina jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Squab są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy squash są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Squid są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Anyż jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Star Fruit są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Stewia jest Paleo?",
      "answer": "Yes",
      "todo": false
    },
    {
      "question": "Czy Zdjęcie są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Łój jest Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Sugar są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Summer Squash są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Sunflower Masło są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Olej słonecznikowy jest Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Sushi są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Sweet Potato Mąka są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Swiss Chard są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Łój są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Mąka z tapioki jest Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Tapioka są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Taro są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Estragon są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Tea są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Paleo jest tempeh?",
      "answer": "No"
    },
    {
      "question": "Czy Tequila są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Tymianek są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Tilapia są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Paleo Tiramisu?",
      "answer": "No"
    },
    {
      "question": "Czy Tisane są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Toast są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Toffee są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Tofu są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy pomidorowy są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy sos pomidorowy są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy język są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Trout są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Tuna są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Turcja są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Kurkuma są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy niesłodzone czekolady są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy V8 są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Vanilla Extract są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Cielęcina są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy bulionu warzyw są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Olej roślinny są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Jest skrócenie warzyw są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Dziczyzna są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Vermouth są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Ocet są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Wódka paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Walnut Oil są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Wasabi są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy rzeżucha są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Watermelon są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Otręby pszenne są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Olej z kiełków pszenicy jest Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Wheat Germ są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy Pszenica są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy trawy pszenicznej są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Protein są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Jest bitą śmietaną są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Whiskey są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy White Chocolate są Paleo?",
      "answer": "No"
    },
    {
      "question": "Czy White Tea są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Wino jest Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy guma ksantanowa są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Drożdże są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Yerba Mate są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Jogurt są Paleo?",
      "answer": "Maybe"
    },
    {
      "question": "Czy Yucca są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Zatar są Paleo?",
      "answer": "Yes"
    },
    {
      "question": "Czy Cukinia są Paleo?",
      "answer": "Yes"
    }
  ],
  whatFood: ''
};

export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state
}
