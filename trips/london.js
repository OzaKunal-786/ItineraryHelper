window.TRIPS = window.TRIPS || {};

window.TRIPS["london"] = {

    // ── Trip Identity ──────────────────────────────────────
    id:       "london",
    name:     "London",
    emoji:    "🇬🇧",
    subtitle: "The Trendy Family Adventure",
    dates:    "Apr 25 – Apr 28, 2026",
    gradient: "red",

    // ── Emergency Info (shown in 🚨 modal) ─────────────────
    emergency: {
        numbers: [
            { label: "Police / Fire / Ambulance", value: "999", icon: "phone" },
            { label: "Non-Emergency Police", value: "101", icon: "shield" },
            { label: "NHS 111", value: "111", icon: "heart-pulse" },
            { label: "TfL Traveller Info", value: "0343 222 1234", icon: "train" }
        ],
        hospitals: [
            { name: "St Thomas' Hospital, Westminster", loc: "SE1 7EH", phone: "020 7188 7188" },
            { name: "University College Hospital", loc: "NW1 2BU", phone: "020 3456 7890" }
        ],
        apps: [
            "Citymapper", "TfL Go", "what3words", "Google Maps (offline)"
        ]
    },

    // ── Hacks & Tips (shown in 💰 modal) ──────────────────
    hacks: [
        { icon: "🧒", title: "Under-5s Travel FREE", text: "Kabir travels 100% free on all Tube, Bus, and DLR. Use the wide green luggage gates." },
        { icon: "🌆", title: "Night Glow", text: "Tower Bridge and Big Ben look 10x better after 7:30 PM when the lights hit the water." },
        { icon: "🏙️", title: "Free Views", text: "Check horizon22.co.uk at 9:00 AM on Monday for same-day tickets if they are sold out now." },
        { icon: "💧", title: "Free Water", text: "London tap water is safe and great. Bring a reusable bottle—look for 'Refill London' stickers." }
    ],

    // ── Days ───────────────────────────────────────────────
    days: [
        {
            day:   1,
            date:  "Apr 25",
            title: "Wizards & Riverside Lights",
            route: "Stansted → King's Cross → Westminster → South Bank",
            hotel:     "London Visitors Hotel",
            hotelLink: "https://www.google.com/search?q=London+Visitors+Hotel+Kensington",
            hotelLoc:  "W14 8AB",
            grocery:    "Tesco Express, Kensington",
            groceryLoc: "W14 8NS",
            transit: {
                lines: "Stansted Express → Victoria Line → District Line",
                cost:  "Daily cap £8.10 · Kabir FREE",
                tips:  "Tap your contactless card at the barriers. No need to buy paper tickets."
            },
            meals: {
                breakfast: [
                    { name: "EL&N London, Hans Crescent", cost: "£12-15pp", tag: "💖 Instagrammable", desc: "The pinkest cafe in the world. Flower walls and great egg shakshuka.", link: "https://www.elnlondon.com/" }
                ],
                lunch: [
                    { name: "Dishoom, King's Cross", cost: "£15-20pp", tag: "🌟 Iconic", desc: "Order the Kejriwal (chili cheese eggs) and House Black Daal. Arrive by 13:00.", link: "https://www.dishoom.com/kings-cross/" }
                ],
                dessert: [
                    { name: "Doughnut Time, South Bank", cost: "£5", tag: "🍩 Trendy", desc: "Huge, colorful doughnuts with fun names. Very photogenic.", link: "" }
                ],
                dinner: [
                    { name: "Mildreds, Soho", cost: "£15-20pp", tag: "🌿 Veggie Legend", desc: "The gold standard for vegetarian soul food in London.", link: "https://www.mildreds.co.uk/" }
                ]
            },
            stops: [
                {
                    time:  "10:00",
                    title: "Platform 9¾",
                    icon:  "wand-magic",
                    loc:   "N1C 4QP",
                    duration: "1 hr",
                    cost:  "Free",
                    do:    "Queue for the trolley photo. Let Kabir 'push' through the wall. Visit the magical shop.",
                    photoSpot: "📸 Inside the shop looks just like Ollivander's—better for photos than the trolley line!",
                    hack:  "Skip the official £15 photo; use your own phone for free."
                },
                {
                    time:  "14:00",
                    title: "Westminster & Big Ben",
                    icon:  "landmark",
                    loc:   "SW1A 0AA",
                    duration: "1 hr",
                    cost:  "Free",
                    do:    "Walk across Westminster Bridge. See the Houses of Parliament from the riverside path.",
                    photoSpot: "📸 Halfway across the bridge for the 'Big Ben + London Eye' combo shot.",
                    famous: "Big Ben is actually the name of the giant bell inside the Elizabeth Tower."
                },
                {
                    time:  "18:30",
                    title: "South Bank Sunset",
                    icon:  "person-walking",
                    loc:   "SE1 8XX",
                    duration: "2 hrs",
                    cost:  "Free",
                    do:    "Watch the street performers and the carousel. See the London Eye light up in neon colors.",
                    photoSpot: "📸 Golden hour from Waterloo Bridge—the best view of the skyline.",
                    hack:  "Royal Festival Hall has clean, free toilets and a warm indoor space if needed."
                }
            ]
        },
        {
            day:   2,
            date:  "Apr 26",
            title: "Marathon Sunday & Pirates",
            route: "Kensington → Soho → Chinatown → Piccadilly",
            hotel:     "London Visitors Hotel",
            hotelLink: "https://www.google.com/search?q=London+Visitors+Hotel+Kensington",
            hotelLoc:  "W14 8AB",
            grocery:    "Waitrose, Kensington",
            groceryLoc: "W14 8PB",
            transit: {
                lines: "Central Line (Avoid the River Thames!)",
                cost:  "Daily cap £8.10",
                tips:  "Stay in West/Central London today to avoid the 50,000 runners blocking the river routes."
            },
            meals: {
                breakfast: [
                    { name: "Eggbreak, Notting Hill", cost: "£12-18pp", tag: "🥚 Egg Specialist", desc: "A trendy basement cafe where every dish features eggs. Perfect for eggetarians.", link: "https://eggbreak.com/" }
                ],
                lunch: [
                    { name: "The Breakfast Club, Soho", cost: "£12-15pp", tag: "🥞 Cult Favorite", desc: "Fun 80s vibes and massive pancake stacks. Great for kids.", link: "https://thebreakfastclubcafes.com/" }
                ],
                dessert: [
                    { name: "Chin Chin Labs, Soho", cost: "£7", tag: "🧪 Sci-Fi Treats", desc: "Ice cream made with liquid nitrogen. Dramatic smoke effects Kabir will love.", link: "" }
                ],
                dinner: [
                    { name: "Speedy Bunny, Chinatown", cost: "£10-15pp", tag: "🥢 Trendy", desc: "Instagram-famous spot for veggie noodles and soft egg buns.", link: "" }
                ]
            },
            stops: [
                {
                    time:  "10:00",
                    title: "Diana Memorial Playground",
                    icon:  "ship",
                    loc:   "W2 4RU",
                    duration: "2.5 hrs",
                    cost:  "Free",
                    do:    "Let Kabir captain the giant wooden pirate ship. Play in the sand and teepees.",
                    hack:  "Arrive at 09:50. It’s the best free playground in London and gets very busy by noon.",
                    link:  "https://www.royalparks.org.uk/parks/kensington-gardens/things-to-see-and-do/diana-memorial-playground"
                },
                {
                    time:  "15:00",
                    title: "Hamleys Toy Store",
                    icon:  "rocket",
                    loc:   "W1B 5BT",
                    duration: "2 hrs",
                    cost:  "Free Entry",
                    do:    "Explore 7 floors of toys. Watch the staff do live magic and toy demonstrations.",
                    photoSpot: "📸 The giant LEGO structures on the top floor.",
                    hack:  "Use the elevators to go to the top floor first and walk your way down."
                },
                {
                    time:  "19:00",
                    title: "Piccadilly Lights",
                    icon:  "lightbulb",
                    loc:   "W1D 7ET",
                    duration: "1 hr",
                    cost:  "Free",
                    do:    "Experience London's 'Times Square'. See the massive 3D screens and the Shaftesbury Memorial Fountain.",
                    photoSpot: "📸 Stand on the steps under the Eros statue for the best neon background.",
                    legend: "The screens have only ever been turned off for the funerals of Churchill and Princess Diana."
                }
            ]
        },
        {
            day:   3,
            date:  "Apr 27",
            title: "Royal Guards & Sky-High Farewell",
            route: "Buckingham Palace → The City → Stansted",
            hotel:     "Ramada London Stansted Airport",
            hotelLink: "https://www.google.com/search?q=Ramada+London+Stansted+Airport",
            hotelLoc:  "CM24 1PP",
            grocery:    "M&S Simply Food, Stansted",
            groceryLoc: "CM24 1QW",
            transit: {
                lines: "District Line → Central Line → National Express (19:30)",
                cost:  "Daily cap + £12 Bus",
                tips:  "The National Express bus to Stansted departs from Liverpool Street Station."
            },
            meals: {
                breakfast: [
                    { name: "Feya, James St", cost: "£15pp", tag: "🌸 Forest Vibe", desc: "Stunning floral decor and a creative 'Egg & Avo' menu.", link: "https://www.feya.co.uk/" }
                ],
                lunch: [
                    { name: "Borough Market", cost: "£10-15pp", tag: "🍓 Iconic", desc: "Grazing at stalls. Try the Kappacasein toasties and Bread Ahead doughnuts.", link: "https://www.boroughmarket.org.uk/" }
                ],
                dessert: [
                    { name: "Humble Crumble", cost: "£6", tag: "🍮 Trending", desc: "Artisan fruit crumbles with unlimited hot custard. A TikTok favorite.", link: "" }
                ],
                dinner: [
                    { name: "Holy Carrot, Spitalfields", cost: "£15-20pp", tag: "🥕 Trendy Veg", desc: "Located in a cool warehouse. High-end veggie and egg dishes.", link: "https://www.holycarrot.co.uk/" }
                ]
            },
            stops: [
                {
                    time:  "10:15",
                    title: "Changing of the Guard",
                    icon:  "crown",
                    loc:   "SW1A 1AA",
                    duration: "1.5 hrs",
                    cost:  "Free",
                    do:    "Watch the King's soldiers march with the band. Arrive early for the best spot.",
                    photoSpot: "📸 Standing on the Victoria Memorial steps gives you a 'top-down' view over the crowds.",
                    hack:  "Check the official schedule at householddivision.org the night before."
                },
                {
                    time:  "14:00",
                    title: "Horizon 22 & Leadenhall",
                    icon:  "city",
                    loc:   "EC2N 2DQ",
                    duration: "2 hrs",
                    cost:  "Free",
                    do:    "Ride the fastest lift in Europe to the 58th floor. Then visit Leadenhall Market nearby.",
                    famous: "Leadenhall Market was the filming location for Diagon Alley in Harry Potter.",
                    hack:  "If Horizon 22 is fully booked, walk to 'The Garden at 120'—it's free and no booking is needed."
                },
                {
                    time:  "17:30",
                    title: "Tower Bridge Night Lights",
                    icon:  "bridge",
                    loc:   "SE1 2UP",
                    duration: "1 hr",
                    cost:  "Free",
                    do:    "Walk along the 'Queen's Walk' to see Tower Bridge illuminated at night.",
                    photoSpot: "📸 The 'Girl with a Dolphin' statue for a framed shot of the bridge.",
                    legend: "The bridge opens its 'bascules' about 800 times a year to let tall ships pass."
                },
                {
                    time:  "19:30",
                    title: "Bus to Stansted",
                    icon:  "bus",
                    loc:   "Liverpool Street",
                    duration: "1.2 hrs",
                    cost:  "£12",
                    desc:  "Board the A6 National Express bus. Kabir can sleep on the way to the airport hotel.",
                    do:    "Catch the bus from the station coach bay. Final night stay at Ramada."
                }
            ]
        }
    ]
};
