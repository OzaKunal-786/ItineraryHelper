window.TRIPS = window.TRIPS || {};

window.TRIPS.london = {
    id: "london",
    name: "London",
    emoji: "🇬🇧",
    subtitle: "The No-Pay Family Adventure",
    dates: "Apr 25 – Apr 28, 2026",
    gradient: "red",

    emergency: {
        numbers: [
            { label: "Police / Fire / Ambulance", value: "999", icon: "phone" },
            { label: "Non-Emergency Police", value: "101", icon: "shield" },
            { label: "NHS 111", value: "111", icon: "heart-pulse" },
            { label: "TfL Traveller Info", value: "0343 222 1234", icon: "train" }
        ],
        hospitals: [
            { name: "University College Hospital", loc: "NW1 2BU", phone: "020 3456 7890" },
            { name: "St Thomas' Hospital, Westminster", loc: "SE1 7EH", phone: "020 7188 7188" },
            { name: "Royal London Hospital, Whitechapel", loc: "E1 1FR", phone: "020 7377 7000" },
            { name: "Princess Alexandra Hospital, Harlow", loc: "CM20 1QX", phone: "01279 444455" }
        ],
        apps: ["Citymapper", "TfL Go", "what3words", "Google Maps (offline)", "Trainline"]
    },

    hacks: [
        { icon: "🧒", title: "Under-5s Travel FREE", text: "Kabir travels 100% free on all Tube, Bus, and DLR. Walk through the wide luggage gates (green arrow) with him." },
        { icon: "🏙️", title: "Free London Views", text: "Skip London Eye (£30+). Horizon 22 at 22 Bishopsgate is FREE and higher than the Shard. Book tickets NOW at horizon22.co.uk — slots go Monday mornings." },
        { icon: "💧", title: "Free Water", text: "London tap water is safe and great. Don't buy bottles (£2.50 each). Bring a reusable bottle — look for 'Refill London' stickers." },
        { icon: "🚻", title: "Free Toilets", text: "Clean free loos: John Lewis, Marks & Spencer, museum lobbies, major train stations." },
        { icon: "🚌", title: "Bus Sightseeing Hack", text: "Skip £35 hop-on hop-off tours. Bus Route 11 or 15 passes every landmark for £1.75." },
        { icon: "💳", title: "Contactless Daily Cap", text: "Use contactless bank card on Tube/Bus. Daily cap £8.10 — never pay more no matter how many trips." },
        { icon: "🎭", title: "TKTS Half-Price Theatre", text: "Same-day half-price West End tickets at TKTS booth, Leicester Square. Only use the official booth." },
        { icon: "🥚", title: "Eggetarian London", text: "London has exceptional eggetarian dining. Dishoom, Hoppers, Bao, Crosstown and Borough Market are all outstanding. Book Hoppers walk-in slots by arriving at 12:30 for best chance." }
    ],

    days: [
        {
            day: 1, date: "Apr 25", title: "Wizards & Icons",
            route: "Amsterdam → Stansted → King's Cross → Westminster",
            hotel: "Hotel Nirvana, Stratford",
            hotelLink: "https://www.google.com/search?q=Hotel+Nirvana+London+Stratford",
            hotelLoc: "Stratford, London E15",
            grocery: "Tesco Express, Stratford",
            groceryLoc: "E15 1XQ",
            transit: {
                lines: "Stansted Express → Central Line → Circle/Metropolitan → Jubilee",
                cost: "Daily cap £8.10 · Kabir FREE",
                tips: "Use contactless card at barriers. Wide luggage gates (green arrow) for Kabir. Book Stansted Express online for cheapest fare."
            },
            meals: {
                breakfast: [
                    { name: "Flight / Packed", cost: "—", tag: "✈️ En Route", desc: "Eat before or on the flight. Save appetite for Dishoom at lunch.", link: "" }
                ],
                lunch: [
                    { name: "Dishoom, King's Cross", cost: "£15-20pp", tag: "🌟 Must Visit", desc: "London's most-loved Indian restaurant inspired by Bombay's Irani cafés. For eggetarians: order the Kejriwal (fried eggs on toast with green chilli), Cheese Naan, and House Black Daal (simmered 24 hours). Canal-side terrace at Granary Square is stunning. Walk-in only for lunch — arrive by 13:00 to skip the noon rush.", link: "https://www.dishoom.com/kings-cross/" },
                    { name: "Caravan, King's Cross", cost: "£12-16pp", tag: "🔥 Trending", desc: "Roastery café in Coal Drops Yard, 2 mins from Dishoom. Excellent eggetarian brunch plates — smashed avocado, shakshuka, and house-roasted coffee. Very Instagrammable space.", link: "https://www.google.com/search?q=Caravan+Kings+Cross" },
                    { name: "Notes on a Banana", cost: "£8-12pp", tag: "💰 Best Value", desc: "Relaxed café near King's Cross. Brilliant eggs, sourdough, and some of the best coffee in the area. Budget-friendly and very child-friendly.", link: "https://www.google.com/search?q=Notes+on+a+Banana+Kings+Cross" }
                ],
                dessert: [
                    { name: "Crosstown Doughnuts, Coal Drops Yard", cost: "£4-5 per doughnut", tag: "🍩 Most Instagrammable", desc: "London's most talked-about artisan doughnuts — 2 minutes walk from Dishoom. Seasonal flavours like salted caramel, matcha, and tahini. All vegetarian. Kabir will want two.", link: "https://www.google.com/search?q=Crosstown+Doughnuts+Coal+Drops+Yard" }
                ],
                dinner: [
                    { name: "Bao, Broadgate", cost: "£12-16pp", tag: "🔥 Trending", desc: "London's cult Taiwanese bao restaurant near Liverpool Street — 20 mins from hotel. Outstanding eggetarian options: truffle egg bao, aged egg custard bao, century egg (if curious). Intimate, cool interior. Walk-in or book online.", link: "https://www.google.com/search?q=Bao+Broadgate+London" },
                    { name: "Wagamama, Westfield Stratford", cost: "£10-14pp", tag: "💰 Best Value", desc: "Right at your hotel's doorstep. Reliable, fast, excellent for kids. Eggetarian winners: chilli ramen (add egg), pad thai (no chicken), yasai gyoza (veggie). Kabir will eat the gyoza happily.", link: "https://www.google.com/search?q=Wagamama+Westfield+Stratford" },
                    { name: "Namo, Westfield Stratford", cost: "£10-14pp", tag: "⚡ Quick Bite", desc: "Vietnamese street food in Westfield. Brilliant veggie pho and summer rolls. Very child-friendly portions and an easy, low-effort dinner after a long travel day.", link: "https://www.google.com/search?q=Namo+Westfield+Stratford" }
                ]
            },
            stops: [
                {
                    time: "07:25", title: "Land at London Stansted", icon: "plane-arrival", loc: "CM24 1QW",
                    desc: "Flight from Amsterdam (AMS 07:20 → STN 07:25). Stansted Express to Stratford.",
                    duration: "1.5 hrs (immigration + train)", cost: "Stansted Express ~£20 return",
                    hack: "Book Stansted Express online — saves £5+ vs walk-up. Or Greater Anglia stopping service is £12 but slower. Kabir rides free.",
                    link: "https://www.stanstedexpress.com/"
                },
                {
                    time: "09:15", title: "Hotel Nirvana — Drop Bags", icon: "suitcase-rolling", loc: "Stratford E15",
                    desc: "Quick stop — drop luggage at reception and head straight out. Room won't be ready yet.",
                    duration: "15 min", cost: "Pre-paid",
                    hack: "Don't wait for the room. Tell reception you'll check in later — they store bags free. You need to be at Buckingham Palace by 10:00.",
                    link: "https://www.google.com/search?q=Hotel+Nirvana+London+Stratford"
                },
                {
                    time: "10:00", title: "Buckingham Palace — Changing of the Guard", icon: "crown", loc: "SW1A 1AA",
                    desc: "The King's official residence. Arrive early for a front-row spot at the 11:00 AM Changing of the Guard — soldiers in bearskin hats with a full marching band.",
                    duration: "1 hr 45 min (10:00 arrival → 11:45 ceremony end)", cost: "Free",
                    do: "Get to the palace gates by 10:00 for a front spot. Lift Kabir onto your shoulders when the band starts. The soldiers march from Wellington Barracks on the left side — face that way.",
                    famous: "Official royal residence since 1837. 775 rooms including a swimming pool, cinema, and its own post office. Ceremony has happened since 1660.",
                    legend: "A secret tunnel is rumoured to connect the Palace to Parliament. Staff report ghost monk sightings in the grounds.",
                    photoSpot: "📸 Position at the palace gates centre. When the guards march in, shoot through the railings. After the ceremony — Victoria Memorial with the palace behind for the classic shot.",
                    hack: "Arrive by 10:00 or you'll be 10 rows back and Kabir sees nothing. Stand at the LEFT side of the gates — guards march in from that side. Not held every day — check schedule online the night before.",
                    link: "https://www.google.com/search?q=Changing+of+the+Guard+schedule+2026"
                },
                {
                    time: "11:50", title: "Baker Street — Sherlock Holmes", icon: "magnifying-glass", loc: "NW1 6XE",
                    desc: "Quick stop on the way to King's Cross — Baker Street is literally on the route. The Sherlock statue outside and the famous silhouette tiles on the platform walls.",
                    duration: "15 min", cost: "Free",
                    do: "Photo with the Sherlock statue outside the station. Back inside, hunt for Sherlock profile tiles on the platform walls — treasure hunt for Kabir.",
                    famous: "221B Baker Street — world's most famous fictional address. The museum receives hundreds of letters addressed to Sherlock Holmes every year.",
                    legend: "Baker Street station walls are covered in Sherlock Holmes silhouette tiles from 1984 — see how many Kabir can count before the train arrives.",
                    photoSpot: "📸 Sherlock statue outside the station entrance. Inside on the platform — the brown Sherlock profile tiles on the cream walls.",
                    hack: "Don't pay £16 for the museum. Statue outside (2 min) + platform tiles (2 min) = the whole Sherlock experience. You're changing trains here anyway.",
                    link: "https://www.google.com/search?q=Sherlock+Holmes+Baker+Street+statue"
                },
                {
                    time: "12:15", title: "King's Cross & Platform 9¾", icon: "wand-magic", loc: "N1C 4QP",
                    desc: "The Harry Potter pilgrimage — luggage trolley embedded in the wall between platforms 9 and 10.",
                    duration: "30 min", cost: "Free",
                    do: "Queue for the trolley photo. Let Kabir 'push' through the wall. Visit the shop — styled like Ollivander's wand shop.",
                    famous: "Platform 9¾ from Harry Potter. The shop is free and atmospherically lit like the films.",
                    photoSpot: "📸 Skip the £15 official photographer. Shop interior is more magical for photos — looks like Ollivander's.",
                    hack: "Official photographer charges £15/pack — your phone is fine. Shop is free to enter and more atmospheric than the trolley area itself. Queue is usually 10-15 min at midday.",
                    link: "https://www.google.com/search?q=Platform+9+3/4+Kings+Cross"
                },
                {
                    time: "13:00", title: "Dishoom, King's Cross", icon: "bowl-food", loc: "5 Stable St, N1C 4AB",
                    desc: "London's best-loved Indian restaurant — inspired by Bombay's vanishing Irani cafés. A proper sit-down rest after a busy morning. For eggetarians: Kejriwal (fried eggs on green chilli toast) and House Black Daal are essential.",
                    duration: "1 hr", cost: "£15-20pp",
                    do: "Order the Kejriwal, House Black Daal (simmered 24 hrs), and Cheese Naan. Kabir will demolish the naan. You've earned this.",
                    famous: "Consistently rated London's favourite restaurant. Canal-side terrace at Granary Square.",
                    photoSpot: "📸 Ornate interior mirrors and tiles. Terrace tables with Granary Square fountain behind.",
                    hack: "No reservations for lunch — walk-in only. Arriving at 13:00 means the noon rush has passed — should be seated quickly.",
                    link: "https://www.dishoom.com/kings-cross/"
                },
                {
                    time: "14:30", title: "Westminster & Big Ben", icon: "landmark", loc: "SW1A 0AA",
                    desc: "The iconic clock tower, Westminster Abbey, and the Thames — London's most famous skyline.",
                    duration: "1 hr", cost: "Free",
                    do: "Exit Westminster station for the hero shot of Big Ben. Walk across Westminster Bridge for Big Ben + London Eye in one frame. See Westminster Abbey from outside.",
                    famous: "Big Ben is actually the bell, not the tower. The tower is Elizabeth Tower (renamed 2012).",
                    legend: "A flock of starlings once landed on the minute hand and slowed time by 5 minutes.",
                    photoSpot: "📸 Step 1: Station exit — Big Ben towers over you. Step 2: Middle of Westminster Bridge — Big Ben + London Eye in one shot. Step 3: South bank for full Parliament panorama.",
                    hack: "Westminster Abbey is £27 to enter. Skip — exterior is stunning and free. Walk around the back for the flying buttresses.",
                    link: "https://www.google.com/search?q=Big+Ben+Westminster"
                },
                {
                    time: "16:00", title: "South Bank Sunset Walk", icon: "person-walking", loc: "SE1 8XX",
                    desc: "Thames walk from Westminster Bridge towards Waterloo Bridge. Street performers, book stalls, city lights reflecting on the water.",
                    duration: "1 hr", cost: "Free",
                    do: "Watch street performers. Browse second-hand book stalls under Waterloo Bridge. See London Eye lit up as the sun sets.",
                    photoSpot: "📸 Golden hour from Waterloo Bridge — one of London's best sunset viewpoints. Thames + Parliament + Eye.",
                    hack: "BFI Southbank bar has cheaper drinks than riverside pubs. Royal Festival Hall has free toilets and warm shelter if cold.",
                    link: "https://www.google.com/search?q=South+Bank+walk+London"
                }
            ]
        },
        {
            day: 2, date: "Apr 26", title: "Marathon Day — Giants & Wizards",
            route: "Kensington → Soho → Leicester Square → Trafalgar → Chinatown → Covent Garden",
            hotel: "Hotel Nirvana, Stratford",
            hotelLink: "https://www.google.com/search?q=Hotel+Nirvana+London+Stratford",
            hotelLoc: "Stratford, London E15",
            grocery: "Sainsbury's Local, Stratford",
            groceryLoc: "E15 1XQ",
            transit: {
                lines: "Central Line → Jubilee Line (avoid riverside — Marathon closures)",
                cost: "Daily cap £8.10 · Kabir FREE",
                tips: "London Marathon today! Roads near the river are closed until 6 PM. Stay West/Central. Check TfL Go app before every journey."
            },
            meals: {
                breakfast: [
                    { name: "Granger & Co, Notting Hill", cost: "£12-16pp", tag: "🌟 Must Visit", desc: "The Australian restaurant that invented smashed avocado on toast. Famous for ricotta hotcakes with honeycomb butter — absolutely outstanding for eggetarians. Scrambled eggs here are silky and legendary. Worth the slight detour from the Kensington route.", link: "https://www.google.com/search?q=Granger+and+Co+Notting+Hill" },
                    { name: "Eggbreak, Notting Hill", cost: "£10-14pp", tag: "🥚 Perfect for Eggetarians", desc: "A restaurant literally named after eggs — this is the one. Every dish centres around eggs in creative ways. Trendy, busy, loved by locals. Just off Portobello Road.", link: "https://www.google.com/search?q=Eggbreak+Notting+Hill" },
                    { name: "Hotel / Local Café", cost: "£5-8pp", tag: "💰 Budget", desc: "Quick hotel breakfast or a local café near the hotel. Save the budget for Hoppers at lunch.", link: "" }
                ],
                lunch: [
                    { name: "Hoppers, Soho", cost: "£14-18pp", tag: "🌟 Must Visit", desc: "Sri Lankan restaurant that is one of London's hottest right now. The signature dish is the egg hopper — a bowl-shaped fermented rice pancake with a perfectly runny egg nested in the centre, served with coconut sambol and curry. Mind-blowing for eggetarians. Walk-in only for lunch — arrive by 12:30 for best chance. 49 Frith Street, W1D 4SG.", link: "https://www.google.com/search?q=Hoppers+Soho+London" },
                    { name: "Kricket, Soho", cost: "£14-18pp", tag: "🔥 Trending", desc: "Modern Indian small plates restaurant — Michelin recommended, consistently trendy. Seasonal vegetarian dishes like bhel puri, samphire pakora, and paneer tikka. Share 4-5 plates between two adults. Very Instagrammable.", link: "https://www.google.com/search?q=Kricket+Soho" },
                    { name: "Roti King, Bloomsbury", cost: "£8-10pp", tag: "💰 Best Value", desc: "Malaysian roti canai restaurant with a cult following. The eggetarian roti with egg and dal for £6 is extraordinary value and genuinely delicious. Often has a queue but moves fast.", link: "https://www.google.com/search?q=Roti+King+London" }
                ],
                dessert: [
                    { name: "Birdhouse Bubble Waffle, Chinatown", cost: "£7-9", tag: "🎨 Most Instagrammable", desc: "Hong Kong-style egg bubble waffles served warm in cone form, filled with ice cream and fresh fruit. Located right in Chinatown. Kabir will think this is the greatest thing he has ever seen.", link: "https://www.google.com/search?q=Birdhouse+Bubble+Waffle+Chinatown" },
                    { name: "Chin Chin Labs, Covent Garden", cost: "£6-8", tag: "🌟 Must Visit", desc: "London's original liquid nitrogen ice cream shop in Neal's Yard, 5 minutes from Covent Garden piazza. They make ice cream in front of you with dramatic smoking liquid nitrogen. Custard base is egg-rich and extraordinary. For a 5-year-old, this is pure magic — equal parts science experiment and dessert.", link: "https://www.google.com/search?q=Chin+Chin+Labs+Covent+Garden" },
                    { name: "Milk Train, Covent Garden", cost: "£8-10", tag: "🎨 Instagram Famous", desc: "Japanese-inspired fluffy crepes and soft-serve ice cream in gorgeous combinations. One of the most photographed dessert spots in London. Queue goes fast and the result is worth it.", link: "https://www.google.com/search?q=Milk+Train+Covent+Garden" }
                ],
                dinner: [
                    { name: "Fatt Pundit, Covent Garden", cost: "£14-18pp", tag: "🔥 Trending", desc: "Indo-Chinese restaurant that is currently one of the trendiest in London. Chilli paneer, hakka noodles, and the vegetarian manchurian are all brilliant for eggetarians. Perfect post-Covent Garden dinner option.", link: "https://www.google.com/search?q=Fatt+Pundit+Covent+Garden" },
                    { name: "Wagamama, Stratford", cost: "£10-14pp", tag: "💰 Easy Option", desc: "Low-effort dinner near the hotel after a long day. Reliable eggetarian ramen and gyoza. Good for an exhausted child.", link: "https://www.google.com/search?q=Wagamama+Westfield+Stratford" }
                ]
            },
            stops: [
                {
                    time: "10:30", title: "Diana Memorial Playground", icon: "ship", loc: "W2 4RU",
                    desc: "A magical pirate ship playground in Kensington Gardens, inspired by Peter Pan. The biggest wooden pirate ship you've ever seen, surrounded by sand, teepees, and a sensory trail.",
                    duration: "1.5-2 hrs", cost: "Free",
                    do: "Let Kabir captain the massive wooden pirate ship. Explore teepees, sensory trail, and sand area. Kensington Palace is right next door — free to walk around outside.",
                    famous: "Inspired by Peter Pan set in Kensington Gardens. 900,000 visitors per year.",
                    photoSpot: "📸 Kabir on pirate ship bow. Through teepee entrance. Wide shot of ship with trees.",
                    hack: "Opens 10 AM, VERY busy by 11. Be there at opening. This is the best free playground in all of London.",
                    link: "https://www.google.com/search?q=Diana+Memorial+Playground"
                },
                {
                    time: "12:30", title: "Hoppers, Soho", icon: "bowl-food", loc: "49 Frith St, W1D 4SG",
                    desc: "Sri Lanka's most famous street food in London's most talked-about restaurant. The egg hopper — a bowl-shaped fermented rice pancake with a runny egg inside — is one of the great eggetarian dishes in London. Coconut sambol, curry, and string hoppers round it out perfectly.",
                    duration: "1 hr", cost: "£14-18pp",
                    do: "Order: Egg Hopper, String Hoppers, Kari (coconut curry), and a Pol Sambol. Every single item is eggetarian-friendly. Ask the server to guide you through the menu.",
                    famous: "Opened 2015, Hoppers has never left the 'London's most talked-about' lists. Sri Lankan egg hoppers were largely unknown in the UK before this restaurant.",
                    hack: "Walk-in only for lunch. Arrive no later than 12:30. If there's a short wait, it's worth it — queue moves fast. From Diana Playground: High Street Kensington tube → Piccadilly Circus → 10 min walk to Frith Street.",
                    link: "https://www.google.com/search?q=Hoppers+Soho+London"
                },
                {
                    time: "14:30", title: "LEGO Store & M&M World", icon: "shapes", loc: "Leicester Square WC2H 7LQ",
                    desc: "World's largest LEGO Store and 4-floor M&M World — both FREE entry. Giant LEGO London landmarks, build-your-own minifigure station, and floor-to-ceiling M&M walls.",
                    duration: "1 hr", cost: "Free entry (budget £10-15 souvenirs)",
                    do: "See LEGO Big Ben, Underground carriage, Shakespeare. Build-a-minifigure (£10 for 3 figures — best souvenir). M&M World = 4 floors of colour, free to explore.",
                    famous: "Leicester Square LEGO Store is world's largest. M&M World is 1 of only 5 globally.",
                    photoSpot: "📸 LEGO Big Ben. Kabir next to life-size LEGO Royal Guard. M&M rainbow wall on floor 2.",
                    hack: "Build-a-minifigure = the best £10 souvenir in London. M&M World is free to look — the 3x mark-up means don't buy.",
                    link: "https://www.google.com/search?q=LEGO+Store+Leicester+Square"
                },
                {
                    time: "16:00", title: "Trafalgar Square", icon: "landmark", loc: "WC2N 5DN",
                    desc: "London's grandest public square — Nelson's Column, four giant bronze lions, two enormous fountains, and the National Gallery facade. One of the most iconic spaces in Europe. 5-minute walk from Leicester Square.",
                    duration: "25 min", cost: "Free",
                    do: "Let Kabir climb on the lion statues at the base of Nelson's Column — it is completely allowed and everyone does it. Find the Fourth Plinth (rotating modern art installation). Walk to the edge for the view down Whitehall toward Big Ben.",
                    famous: "Nelson's Column is 52 metres tall. The square was designed in 1844. The lions were cast from Napoleon's cannons captured at Trafalgar.",
                    legend: "The square was the site of a flock of resident pigeons for over a century — feeding them was banned in 2003. Locals still argue about it.",
                    photoSpot: "📸 Wide shot: lion in foreground, column behind, fountains flanking. From the top steps of the National Gallery looking down across the whole square. Kabir riding the lion.",
                    hack: "The National Gallery is free if you want to duck in for 10 minutes to warm up — just walk in. The Sainsbury Wing entrance is least crowded.",
                    link: "https://www.google.com/search?q=Trafalgar+Square+London"
                },
                {
                    time: "16:30", title: "Chinatown", icon: "torii-gate", loc: "W1D 5BA",
                    desc: "Ornate ceremonial gates, red lanterns, and some of the best bubble waffles in London. 5 minutes walk from Trafalgar Square.",
                    duration: "30 min", cost: "Free (bakery items £1-3)",
                    do: "Walk through ceremonial gates. Get a Birdhouse Bubble Waffle (egg waffle cone with ice cream, £7). Get a custard bun or egg tart from a bakery (£1.50). Kabir will love the lanterns overhead.",
                    famous: "London's Chinatown since the 1950s. Gates hand-painted, gifted by China.",
                    photoSpot: "📸 Under the main gate on Wardour Street with red lanterns overhead. At night the lights are magical.",
                    hack: "Bakeries = best value food in all of central London. The bubble waffle from Birdhouse is the unmissable food moment here.",
                    link: "https://www.google.com/search?q=Chinatown+London"
                },
                {
                    time: "17:15", title: "Covent Garden & Chin Chin Labs", icon: "ice-cream", loc: "WC2E 8RF",
                    desc: "London's most vibrant piazza — street performers, Victorian market building, boutique shops, and the best liquid nitrogen ice cream in the city. 10 minutes walk from Chinatown.",
                    duration: "1 hr", cost: "Free entry (ice cream £6-8)",
                    do: "Watch street performers in the piazza — typically living statues, acrobats, and magicians. Walk through the covered market. Then head to Neal's Yard (2 min from piazza) for Chin Chin Labs — liquid nitrogen ice cream made in front of you with dramatic smoking effects.",
                    famous: "Covent Garden has been a market since the 17th century. The covered market building dates from 1830. Street performers must audition for pitches.",
                    legend: "The phrase 'being sent to Coventry' may have origins near here. More importantly: this is where the very first Punch and Judy show was recorded in 1662.",
                    photoSpot: "📸 From the upper market level looking down at performers in the piazza. Kabir's face when the liquid nitrogen smoke rolls over at Chin Chin Labs.",
                    hack: "Neal's Yard (for Chin Chin Labs) is easy to miss — it's a small colourful courtyard off Shorts Gardens, 2 minutes from the piazza. Google Maps it before you walk.",
                    link: "https://www.google.com/search?q=Covent+Garden+London"
                }
            ]
        },
        {
            day: 3, date: "Apr 27", title: "Castles, Sky & Diagon Alley",
            route: "Tower Hill → City → Borough → Stratford → Stansted",
            hotel: "Ramada London Stansted Airport",
            hotelLink: "https://www.google.com/search?q=Ramada+London+Stansted+Airport",
            hotelLoc: "CM24 1PP",
            grocery: "M&S Simply Food, Stansted Airport",
            groceryLoc: "CM24 1QW",
            transit: {
                lines: "Elizabeth Line → Tower Hill → Walking through the City → Borough → National Express to Stansted",
                cost: "Tube cap £8.10 + National Express ~£10",
                tips: "Collect bags from Hotel Nirvana before heading to Stansted. National Express from Stratford Bus Station is easiest with luggage + child. Note: Horizon 22 closes at 4 PM on Sundays — must be there by 3:30 PM latest. Book tickets in advance at horizon22.co.uk."
            },
            meals: {
                breakfast: [
                    { name: "Hotel / Local Stratford Café", cost: "£5-8pp", tag: "⚡ Quick Start", desc: "Quick breakfast near Hotel Nirvana before heading to the City. You have a full day — eat early and save appetite for Borough Market at lunch.", link: "" },
                    { name: "Granger & Co, Clerkenwell", cost: "£12-16pp", tag: "🌟 Best Brunch", desc: "If you want a proper eggetarian breakfast on route to Tower Hill, the Clerkenwell branch of Granger & Co is 10 mins from the City. Ricotta hotcakes and scrambled eggs are legendary.", link: "https://www.google.com/search?q=Granger+and+Co+Clerkenwell" }
                ],
                lunch: [
                    { name: "Borough Market — Multi-Stall Grazing", cost: "£10-15pp", tag: "🌟 Must Visit", desc: "London's oldest market under Victorian railway arches. For eggetarians: Horn OK Please for Indian street food (fully vegetarian), Kappacasein for the legendary Montgomery Cheddar and leek toastie, Bread Ahead for the custard doughnut (best in London). Eat small at each stall — this is a grazing lunch, not a sit-down.", link: "https://www.google.com/search?q=Borough+Market+London" },
                    { name: "Bread Ahead Bakery, Borough Market", cost: "£4-6pp", tag: "🍩 Legendary", desc: "The doughnut that Borough Market is famous for. Yeasted sourdough ring doughnuts with vanilla custard or jam. Queue is always there but always moves. One doughnut each is enough — they are rich and deeply satisfying.", link: "https://www.google.com/search?q=Bread+Ahead+Borough+Market" },
                    { name: "Horn OK Please, Borough Market", cost: "£8-10pp", tag: "🍛 Indian Street Food", desc: "Fully vegetarian Indian street food stall at Borough Market. Run by Indians, genuinely authentic — chaat, samosas, daal. Eggetarian-perfect and one of the best things at the whole market.", link: "https://www.google.com/search?q=Horn+OK+Please+Borough+Market" }
                ],
                dessert: [
                    { name: "Bread Ahead Doughnuts", cost: "£4-5", tag: "🌟 Borough Market Icon", desc: "The legendary vanilla custard-filled doughnut. Eggy, rich, extraordinary. Don't leave Borough Market without one.", link: "https://www.google.com/search?q=Bread+Ahead+doughnuts" }
                ],
                dinner: [
                    { name: "Wagamama, Stansted Airport", cost: "£10-14pp", tag: "⚡ Airport Best Option", desc: "The best sit-down eggetarian option at Stansted Airport. Order before your gate is called. Ramen, gyoza, and pad thai are all safe vegetarian choices.", link: "https://www.google.com/search?q=Wagamama+Stansted+Airport" },
                    { name: "M&S Simply Food, Stansted", cost: "£8-10pp", tag: "💰 Best Value", desc: "Premium meal deal from M&S — much better quality than airport chains. Vegetarian sandwiches, salads, and snacks. Good if you're short on time before check-in.", link: "https://www.google.com/search?q=M&S+Simply+Food+Stansted+Airport" }
                ]
            },
            stops: [
                {
                    time: "10:00", title: "Tower of London", icon: "chess-rook", loc: "EC3N 4AB",
                    desc: "1000-year-old royal castle, fortress, prison, and execution ground — the most dramatic building in London's history.",
                    duration: "45 min (outside)", cost: "Free (outside) — £33 to enter",
                    do: "Walk the public path around the walls. Spot Tower Ravens from the fence — six must always live here by royal decree. Tell Kabir about the two young princes imprisoned here in 1483 who were never seen again.",
                    famous: "Home of Crown Jewels. Two princes imprisoned and vanished here in 1483 — the greatest unsolved mystery in English history.",
                    legend: "Six ravens must always live here. If they leave, the kingdom falls and the Tower will crumble. Their wings are clipped — just in case.",
                    photoSpot: "📸 From river walkway with White Tower centred. Kabir at Traitors' Gate.",
                    hack: "Don't pay £33 with a 5-year-old. The public path gives you 90% of the experience completely free — castle, moat, and ravens all visible.",
                    link: "https://www.google.com/search?q=Tower+of+London"
                },
                {
                    time: "11:00", title: "Tower Bridge", icon: "bridge", loc: "SE1 2UP",
                    desc: "London's most iconic bridge — a Victorian engineering masterpiece that still opens for tall ships over 800 times a year.",
                    duration: "20 min", cost: "Free (walkway)",
                    do: "Walk across the pedestrian level. Tell Kabir the bridge opens by splitting apart vertically — bascules — and that it has done so over 200,000 times.",
                    famous: "Most photographed bridge in the world. Completed 1894. Often confused with London Bridge — the boring flat one upstream.",
                    legend: "The original 1894 hydraulic engines — powered by pressurised water — are still inside the towers, perfectly preserved.",
                    photoSpot: "📸 From south bank (More London plaza) — Bridge + Tower of London in one shot. Perfect morning light.",
                    hack: "Glass floor walkway is £12 — skip it. The free pedestrian crossing has the identical view.",
                    link: "https://www.google.com/search?q=Tower+Bridge+London"
                },
                {
                    time: "11:30", title: "Horizon 22 — London's Highest Free View", icon: "binoculars", loc: "EC2N 4BQ",
                    desc: "The 58th floor of 22 Bishopsgate — London's highest free viewing platform, 10 metres higher than the Shard. Panoramic views of the entire city. A 5-minute walk from Tower Bridge through the City of London. BOOK TICKETS IN ADVANCE at horizon22.co.uk — free but timed entry required.",
                    duration: "45 min", cost: "FREE (must pre-book)",
                    do: "Look south — you are looking DOWN on the Shard from above. Find Tower Bridge (you just came from there). Find the Gherkin, the Walkie-Talkie, St Paul's Cathedral. On a clear day you can see Windsor Castle to the west.",
                    famous: "At 278 metres, Horizon 22 is the highest publicly accessible free viewing point in London. The Shard charges £30. This is free.",
                    photoSpot: "📸 The Thames snaking through the city. Looking down on the Shard from above. Kabir's face pressed against the glass floor-to-ceiling windows.",
                    hack: "Book tickets at horizon22.co.uk — tickets released every Monday for the following 14 days. April 27 is a Sunday and the platform closes at 4 PM on Sundays — your 11:30 slot is perfect. Entrance is via separate doors from the office building — look for the Horizon 22 signage on Bishopsgate.",
                    link: "https://horizon22.co.uk/book"
                },
                {
                    time: "12:30", title: "Leadenhall Market — Diagon Alley", icon: "wand-magic-sparkles", loc: "EC3V 1LT",
                    desc: "Victorian covered market — the REAL Diagon Alley from Harry Potter films. 5 minutes walk from Horizon 22.",
                    duration: "30 min", cost: "Free",
                    do: "Find the blue door at 42 Bull's Head Passage — this is the Leaky Cauldron entrance from Harry Potter. Tell Kabir he is walking through Diagon Alley!",
                    famous: "Used as Diagon Alley in Philosopher's Stone. Victorian ironwork painted in rich burgundy and gold to look magical.",
                    legend: "A Roman amphitheatre stood here 2000 years ago. The market has traded on this site since the 14th century. You are walking through layers of history.",
                    photoSpot: "📸 Looking up at the ornate painted Victorian roof. Blue optician's door at 42 Bull's Head Passage — junction with Gracechurch Street.",
                    hack: "The blue door is easy to miss — it is a working optician's shop (!) at the junction of Bull's Head Passage and Gracechurch Street. The Victorian architecture is more impressive than the 9¾ trolley at King's Cross.",
                    link: "https://www.google.com/search?q=Leadenhall+Market+Diagon+Alley"
                },
                {
                    time: "13:00", title: "Borough Market", icon: "store", loc: "SE1 9AL",
                    desc: "London's oldest food market — over 1000 years of trading under Victorian arches. The ultimate eggetarian food crawl. Do not eat a big meal before — graze small plates from multiple stalls.",
                    duration: "1.5 hrs", cost: "Free entry (budget £10-15pp food)",
                    do: "Find the Leaky Cauldron entrance at 7 Stoney Street (green shopfront — from Prisoner of Azkaban). Graze through: Horn OK Please Indian stall, Bread Ahead for the legendary custard doughnut, Kappacasein for the cheese toastie.",
                    eat: "Horn OK Please (Indian street food, fully veg). Bread Ahead (custard doughnut — queue is worth it). Kappacasein (Montgomery Cheddar toastie — eggetarian). Monmouth Coffee for the best coffee in London.",
                    famous: "London's oldest market — over 1000 years. Featured in Bridget Jones's Diary. The Leaky Cauldron exterior from Prisoner of Azkaban is the green shopfront at 7 Stoney Street.",
                    legend: "The Leaky Cauldron exterior was filmed at 7 Stoney Street — the green Victorian shopfront is still there, unchanged.",
                    photoSpot: "📸 Under the iron arches. 7 Stoney Street green shopfront (Leaky Cauldron). The painted 'Borough Market' sign above the main entrance.",
                    hack: "Monday is quietest for photos but Sunday is still manageable in the morning. Don't eat a full meal first — this is a grazing experience.",
                    link: "https://www.google.com/search?q=Borough+Market+London"
                },
                {
                    time: "15:30", title: "Collect Bags → Stansted", icon: "suitcase-rolling", loc: "Stratford E15",
                    desc: "Return to Hotel Nirvana for bags. National Express bus from Stratford Bus Station to Stansted Airport.",
                    duration: "2.5 hrs total", cost: "National Express ~£10 adult",
                    hack: "National Express A21 from Stratford Bus Station — direct, easier than train with luggage + child. Book online. Runs every 30 min. Kabir rides free.",
                    link: "https://www.nationalexpress.com/"
                },
                {
                    time: "18:30", title: "Ramada London Stansted", icon: "bed", loc: "CM24 1PP",
                    desc: "Airport hotel for tomorrow's Edinburgh flight. Rest up — Scotland begins tomorrow!",
                    duration: "Evening", cost: "Pre-paid",
                    hack: "Check if breakfast is included. If not, M&S Simply Food at the terminal is significantly better quality than the hotel restaurant and cheaper. Pack bags tonight — your Edinburgh flight is early.",
                    link: "https://www.google.com/search?q=Ramada+London+Stansted"
                }
            ]
        }
    ]
};
