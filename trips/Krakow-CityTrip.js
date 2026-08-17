/**
 * ============================================================
 * TRIP TEMPLATE — Copy this file and rename for your new trip
 * ============================================================
 * 
 * HOW TO ADD A NEW TRIP:
 * 1. Copy this file → rename (e.g., paris.js)
 * 2. Change TRIP_ID below to a unique lowercase id (e.g., "paris")
 * 3. Fill in the data following the structure below
 * 4. Add <script src="trips/paris.js"/> to index.html
 *    (before the app.js script tag)
 * 5. Refresh the site — your trip appears automatically!
 * 
 * RULES:
 * - id must be unique lowercase, no spaces (e.g., "paris", "japan2027")
 * - gradient options: "red", "indigo", "emerald", "amber", "violet", "sky"
 *   (add more in styles.css under .grad-xxx)
 * - All fields in a stop are OPTIONAL except: time, title, desc
 * - Each day must have: day, date, title, route, stops[]
 * - Use "driving" for road trips OR "transit" for public transport days
 *   (you can have both on the same day)
 * ============================================================
 */


window.TRIPS = window.TRIPS || {};

window.TRIPS["krakow"] = {

    // ── Trip Identity ──────────────────────────────────────
    id:       "krakow",
    name:     "City Trip - Krakow & Tatra Nature",
    emoji:    "🇵🇱",
    subtitle: "Old Town Magic, Tatra Mountains & Scenic Valley Walk",
    dates:    "Tue 13 Oct – Sat 17 Oct, 2026",
    gradient: "emerald",

    // ── Emergency Info ─────────────────────────────────────
    emergency: {
        numbers: [
            { label: "General Emergency", value: "112", icon: "phone" },
            { label: "Ambulance", value: "999", icon: "ambulance" },
            { label: "Police", value: "997", icon: "shield-halved" }
        ],
        hospitals: [
            { name: "University Hospital Krakow (SOR)", loc: "Macieja Jakubowskiego 2, 30-688 Kraków", phone: "+48 12 400 10 00" },
            { name: "University Children's Hospital (Pediatrics)", loc: "Wielicka 265, 30-663 Kraków", phone: "+48 12 658 20 11" }
        ],
        apps: [
            "Google Maps (offline)", "Jakdojade (Krakow bus & tram routes)", "FlixBus", "JakieToMile"
        ]
    },

    // ── Hacks & Tips ───────────────────────────────────────
    hacks: [
        { icon: "🚌", title: "Skip Car Rental", text: "Public transport in Krakow is fast and ultra-cheap. Use the SKA1 train from KRK airport and FlixBus for the Zakopane trip." },
        { icon: "🧀", title: "Vegetarian Dining (Milk Bars)", text: "Look for 'Bar Mleczny' (Milk Bars). Order 'Pierogi Ruskie' (potato & cheese) or 'Placki Ziemniaczane' (potato pancakes) for super cheap, home-cooked veggie meals." },
        { icon: "🎟️", title: "Book Zakopane Ahead", text: "Book your round-trip FlixBus and Gubałówka funicular cable car online 1–2 weeks early to skip ticket queues." },
        { icon: "🏧", title: "Avoid Euronet ATMs", text: "Always pay in local currency (PLN) on card machines and use official bank ATMs (PKO, Pekao) to avoid high dynamic conversion fees." }
    ],

    // ── Days ───────────────────────────────────────────────
    days: [
        {
            // ── Day 1 ──
            day:   1,
            date:  "Tue 13 Oct",
            title: "Arrival & Evening Old Town Stroll",
            route: "Eindhoven → Krakow Airport → Old Town",

            hotel:     "Old Town / Kazimierz Apartment",
            hotelLink: "#",
            hotelLoc:  "Kraków Center, Poland",

            grocery:    "Biedronka / Carrefour Express",
            groceryLoc: "Rynek Główny area",

            transit: {
                lines: "Flight FR43 (16:40–18:30) → SKA1 Airport Train to Kraków Główny",
                cost:  "Train: ~17 PLN (~€4) per person",
                tips:  "Buy train tickets at airport platform machines using card."
            },

            meals: {
                breakfast: [],
                lunch: [],
                dessert: [
                    { name: "Good Lood", cost: "10 PLN pp", tag: "🍦 Best Ice Cream", desc: "Famous local artisanal ice cream with daily fresh vegetarian flavors.", link: "https://goodlood.com" }
                ],
                dinner: [
                    { name: "Glonojad", cost: "25–40 PLN pp", tag: "🌟 Must Visit", desc: "Top budget vegetarian & vegan spot right next to the main station serving dumplings, curries, and salads.", link: "https://glonojad.com" }
                ]
            },

            stops: [
                {
                    time:  "18:30",
                    title: "Arrive at Krakow Airport (KRK)",
                    desc:  "Touchdown at Krakow Airport. Collect your 3 carry-on bags and walk to the airport train platform.",
                    icon:  "plane-arrival",
                    loc:   "Krakow Airport, Medweckiego 1, 32-083 Balice",
                    duration: "30 mins",
                    cost:  "Free entry",
                    hack:  "Follow train icons inside the terminal; trains depart every 30 minutes directly to Kraków Główny."
                },
                {
                    time:  "19:30",
                    title: "Check-in & Stroll Rynek Główny",
                    desc:  "Check into your hotel/apartment and head straight into Europe's largest medieval town square.",
                    icon:  "city",
                    loc:   "Rynek Główny, 30-001 Kraków",
                    duration: "1.5 hrs",
                    cost:  "Free",
                    do:    "Let your kid watch street performers, see illuminated St. Mary's Basilica, and get dinner.",
                    photoSpot: "📸 Center of the Main Square looking at the Cloth Hall lit up at night."
                }
            ]
        },
        {
            // ── Day 2 ──
            day:   2,
            date:  "Wed 14 Oct",
            title: "Krakow Old Town, Wawel Grounds & Kazimierz",
            route: "Main Square → Wawel Hill → Planty Park → Kazimierz",

            hotel:     "Old Town / Kazimierz Apartment",
            hotelLink: "#",
            hotelLoc:  "Kraków Center, Poland",

            grocery:    "Żabka / Biedronka",
            groceryLoc: "Kazimierz area",

            transit: {
                lines: "100% Walkable city center",
                cost:  "0 PLN",
                tips:  "Old Town is fully pedestrianized and flat—easy for family walks."
            },

            meals: {
                breakfast: [
                    { name: "Charlotte Bread & Wine", cost: "25–40 PLN pp", tag: "🥐 French Bakery", desc: "Popular spot in Old Town for fresh breads, sweet jams, and pastries.", link: "#" }
                ],
                lunch: [
                    { name: "Bar Mleczny Pod Temidą", cost: "15–25 PLN pp", tag: "💰 Best Value", desc: "Classic historic milk bar on Grodzka street. Try Pierogi Ruskie and potato pancakes.", link: "#" }
                ],
                dessert: [
                    { name: "Obwarzanek Carts", cost: "2.50 PLN", tag: "🥨 Street Snack", desc: "Traditional braided ring bread sold from blue street carts. Fully vegan.", link: "#" }
                ],
                dinner: [
                    { name: "Plac Nowy Zapiekanki Stalls", cost: "12–18 PLN pp", tag: "🔥 Local Favorite", desc: "Famous open-face baked baguette topped with sauteed mushrooms & melted cheese. Request without meat.", link: "#" }
                ]
            },

            stops: [
                {
                    time:  "09:30",
                    title: "Krakow Old Town & Cloth Hall (Sukiennice)",
                    desc:  "Explore the vibrant medieval heart of Krakow, walking through historic archways and amber gift stalls.",
                    icon:  "store",
                    loc:   "Rynek Główny 1/3, 31-042 Kraków",
                    duration: "1.5 hrs",
                    cost:  "Free",
                    do:    "Listen to the famous hourly trumpet call (Hejnal) played from St. Mary's tower.",
                    eat:   "Grab a fresh sesame Obwarzanek from street carts."
                },
                {
                    time:  "11:30",
                    title: "Wawel Royal Castle Grounds & Fire-Breathing Dragon",
                    desc:  "Walk up Wawel Hill to explore the open castle courtyards and river views without museum tickets.",
                    icon:  "dragon",
                    loc:   "Wawel 5, 31-001 Kraków",
                    duration: "1.5 hrs",
                    cost:  "Free (Grounds & Dragon Cave area)",
                    do:    "Visit the Wawel Dragon Statue by the riverbank—it breathes real fire every few minutes!",
                    photoSpot: "📸 Riverbank beneath Wawel Castle next to the metal dragon."
                },
                {
                    time:  "14:00",
                    title: "Planty Park Green Belt Walk",
                    desc:  "Stroll through the lush 4km park loop encircling Old Town where medieval walls used to stand.",
                    icon:  "tree",
                    loc:   "Planty Park, Krakow",
                    duration: "1 hr",
                    cost:  "Free",
                    do:    "Relax on park benches and let kids burn energy along quiet tree-lined pathways."
                },
                {
                    time:  "16:00",
                    title: "Kazimierz (Jewish Quarter)",
                    desc:  "Wander bohemian cobblestone alleys, indie boutiques, and vibrant cafes.",
                    icon:  "masks-theater",
                    loc:   "Plac Nowy, 31-056 Kraków",
                    duration: "2 hrs",
                    cost:  "Free",
                    eat:   "Eat a classic mushroom-and-cheese Zapiekanka at the round house in Plac Nowy."
                }
            ]
        },
        {
            // ── Day 3 ──
            day:   3,
            date:  "Thu 15 Oct",
            title: "Day Trip to Zakopane & Tatra Mountains",
            route: "Krakow MDA Bus Station → Zakopane → Gubałówka → Krupówki → Krakow",

            hotel:     "Old Town / Kazimierz Apartment",
            hotelLink: "#",
            hotelLoc:  "Kraków Center, Poland",

            grocery:    "Carrefour",
            groceryLoc: "Krakow Bus Station",

            transit: {
                lines: "FlixBus / Szwagropol from Kraków MDA → Zakopane Bus Station",
                cost:  "~30–40 PLN (~€8) each way",
                tips:  "Take the 07:15 AM bus to arrive by 09:30 AM and beat peak mountain crowds."
            },

            meals: {
                breakfast: [
                    { name: "Station Bakery Grab-and-Go", cost: "10–15 PLN pp", tag: "⚡ Quick Start", desc: "Grab fresh sweet pastries and coffee at Krakow MDA before boarding.", link: "#" }
                ],
                lunch: [
                    { name: "Gubałówka Mountain Top Stalls", cost: "25–40 PLN pp", tag: "🏔️ Mountain View", desc: "Eat grilled Oscypek cheese with cranberry jam and warm soup while overlooking the Tatras.", link: "#" }
                ],
                dessert: [
                    { name: "Oscypek Stalls", cost: "5–8 PLN", tag: "🧀 Must Try", desc: "Warm smoked sheep cheese grilled over wood fire with sweet cranberry sauce.", link: "#" }
                ],
                dinner: [
                    { name: "Maruszyna / Bąkowo Zohylina", cost: "35–60 PLN pp", tag: "🪵 Mountain Tavern", desc: "Traditional wooden highland chalet serving vegetarian potato soup, grilled cheese, and pierogi.", link: "#" }
                ]
            },

            stops: [
                {
                    time:  "07:15",
                    title: "Bus Ride to Zakopane",
                    desc:  "Board comfortable intercity coach heading south toward the scenic Tatra mountain range.",
                    icon:  "bus",
                    loc:   "Dworzec Autobusowy MDA, Bosacka 18, 31-505 Kraków",
                    duration: "2 hrs",
                    cost:  "~35 PLN pp",
                    hack:  "Pre-book FlixBus app tickets 1 week prior to lock in reserved seating."
                },
                {
                    time:  "10:00",
                    title: "Gubałówka Funicular & Alpine Panorama",
                    desc:  "Ride the funicular railway up Gubałówka hill for panoramic views over Zakopane and the High Tatras.",
                    icon:  "mountain",
                    loc:   "Gubałówka PKL, Na Gubałówkę, 34-500 Zakopane",
                    duration: "2.5 hrs",
                    cost:  "~32 PLN round-trip",
                    do:    "Walk along the ridge summit, enjoy kid-friendly hilltop play spots, and take mountain photos.",
                    photoSpot: "📸 Summit platform facing south toward the jagged Giewont peak."
                },
                {
                    time:  "13:00",
                    title: "Krupówki Street & Highlander Market",
                    desc:  "Explore Zakopane's pedestrian promenade filled with traditional wooden architecture, artists, and shops.",
                    icon:  "bag-shopping",
                    loc:   "ul. Krupówki, 34-500 Zakopane",
                    duration: "2 hrs",
                    cost:  "Free",
                    eat:   "Sample warm grilled Oscypek cheese from wooden street carts."
                },
                {
                    time:  "15:30",
                    title: "Easy Nature Walk (Dolina Kościeliska / Strążyska)",
                    desc:  "Take a short local taxi/bus to the entrance of Kościeliska Valley for an easy, flat stroller-friendly walk beside mountain streams.",
                    icon:  "person-hiking",
                    loc:   "Dolina Kościeliska, 34-511 Kościelisko",
                    duration: "2 hrs",
                    cost:  "10 PLN National Park Fee",
                    do:    "Walk surrounded by pine forests, towering limestone cliffs, and rushing water."
                },
                {
                    time:  "18:30",
                    title: "Return Bus to Krakow",
                    desc:  "Catch evening return coach back to Krakow Main Station.",
                    icon:  "bus",
                    loc:   "Zakopane Bus Station",
                    duration: "2 hrs",
                    cost:  "~35 PLN pp"
                }
            ]
        },
        {
            // ── Day 4 ──
            day:   4,
            date:  "Fri 16 Oct",
            title: "Option A Chosen: Ojców National Park & River Valley",
            route: "Krakow → Ojców Valley → Krakus Mound → Evening Krakow",

            hotel:     "Old Town / Kazimierz Apartment",
            hotelLink: "#",
            hotelLoc:  "Kraków Center, Poland",

            grocery:    "Biedronka",
            groceryLoc: "Krakow",

            transit: {
                lines: "Local Suburban Bus 210 (from Bronowice Małe) or Direct Shuttle",
                cost:  "~8–15 PLN (~€2–3) pp",
                tips:  "Buy suburban zone public transport tickets at MPK ticket machines."
            },

            meals: {
                breakfast: [
                    { name: "Krowarzywa", cost: "20–35 PLN pp", tag: "🌱 Vegan Breakfast", desc: "Hearty vegan breakfast burgers and bowls near Old Town.", link: "#" }
                ],
                lunch: [
                    { name: "Ojców Valley Picnic / Cafe", cost: "20–35 PLN pp", tag: "🌲 Nature Cafe", desc: "Enjoy hot soups, pierogi, and apple pie at cozy wooden cafes in Ojców village.", link: "#" }
                ],
                dessert: [
                    { name: "Pączki from Gorące Pączki", cost: "6 PLN", tag: "🍩 Polish Donuts", desc: "Warm traditional Polish donuts stuffed with rose or jam filling.", link: "#" }
                ],
                dinner: [
                    { name: "Pod Norenami", cost: "35–55 PLN pp", tag: "🌟 Must Visit", desc: "Top-rated Asian vegetarian & vegan restaurant in Krakow serving dumplings and noodle bowls.", link: "#" }
                ]
            },

            stops: [
                {
                    time:  "09:30",
                    title: "Ojców National Park (Ojcowski Park Narodowy)",
                    desc:  "Explore Poland's cozy national park filled with dramatic limestone formations, forest trails, and wooden cottages.",
                    icon:  "tree",
                    loc:   "Ojców 13, 32-047 Ojców",
                    duration: "3.5 hrs",
                    cost:  "Free park entrance",
                    do:    "Walk flat easy trails, view 'Deoper's Club' rock formation (Maczuga Herkulesa), and see Ojców Castle ruins from outside.",
                    photoSpot: "📸 Hercules' Club rock towering beside Pieskowa Skała Castle."
                },
                {
                    time:  "14:00",
                    title: "Return to Krakow & Relax at Planty Park",
                    desc:  "Head back into Krakow for a relaxed afternoon coffee and casual walking.",
                    icon:  "mug-hot",
                    loc:   "Krakow Center",
                    duration: "2 hrs",
                    cost:  "Free"
                },
                {
                    time:  "16:30",
                    title: "Krakus Mound (Kopiec Krakusa) Sunset View",
                    desc:  "Walk up this ancient prehistoric earth mound for panoramic views over Krakow skyline.",
                    icon:  "sun",
                    loc:   "Kopiec Krakusa, 30-543 Kraków",
                    duration: "1.5 hrs",
                    cost:  "Free",
                    do:    "Great open green space for kids to run while parents enjoy sunset views.",
                    photoSpot: "📸 Panoramic city skyline view from top of the mound."
                }
            ]
        },
        {
            // ── Day 5 ──
            day:   5,
            date:  "Sat 17 Oct",
            title: "Early Morning Departure",
            route: "Krakow Center → Krakow Airport → Eindhoven",

            hotel:     "Checked Out",
            hotelLink: "#",
            hotelLoc:  "Krakow Airport",

            grocery:    "Airport Duty Free",
            groceryLoc: "KRK Airport",

            transit: {
                lines: "SKA1 Early Airport Train from Kraków Główny → KRK Airport",
                cost:  "~17 PLN (~€4) pp",
                tips:  "Take the 05:30 AM train to reach security by 06:00 AM for 08:10 departure."
            },

            meals: {
                breakfast: [
                    { name: "Airport Cafe", cost: "25–40 PLN pp", tag: "✈️ Grab & Go", desc: "Coffee and croissant before Ryanair boarding.", link: "#" }
                ],
                lunch: [],
                dessert: [],
                dinner: []
            },

            stops: [
                {
                    time:  "05:30",
                    title: "Train to Krakow Airport",
                    desc:  "Catch early direct train from Kraków Główny directly to terminal buildings.",
                    icon:  "train",
                    loc:   "Kraków Główny Station",
                    duration: "20 mins",
                    cost:  "17 PLN"
                },
                {
                    time:  "08:10",
                    title: "Flight Departure (FR 42 to Eindhoven)",
                    desc:  "Depart Krakow on Ryanair FR42 landing at EIN at 10:05.",
                    icon:  "plane-departure",
                    loc:   "Krakow Airport Terminal",
                    duration: "1 hr 55 mins",
                    cost:  "Flight Ticket"
                }
            ]
        }
    ]
};