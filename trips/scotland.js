/**
 * ============================================================
 * SCOTLAND FAMILY TRIP — April 28 – May 4, 2026 (VISITED)
 * Stansted → Edinburgh → Highlands → Skye → Edinburgh → Amsterdam
 * ============================================================
 */

window.TRIPS = window.TRIPS || {};

window.TRIPS["scotland2026"] = {

    // ── Trip Identity ──────────────────────────────────────
    id:       "scotland2026",
    name:     "Scotland: Highlands & Skye",
    emoji:    "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    subtitle: "7 Days: Road Trip + Dinosaurs + Fairy Glen",
    dates:    "Apr 28 – May 4, 2026",
    gradient: "emerald",

    // ── Emergency Info ─────────────────────────────────────
    emergency: {
        numbers: [
            { label: "Emergency", value: "999", icon: "phone" },
            { label: "Non-Emergency Police", value: "101", icon: "shield" }
        ],
        hospitals: [
            { name: "Fort William Hospital", loc: "PH33 6DX", phone: "01397 702481" },
            { name: "Portree Hospital", loc: "IV51 9BZ", phone: "01478 613456" },
            { name: "Royal Infirmary of Edinburgh", loc: "EH16 4SA", phone: "0131 536 1000" }
        ],
        apps: [
            "Google Maps (offline)",
            "what3words",
            "OS Maps (Ordnance Survey)"
        ]
    },

    // ── Hacks & Tips ──────────────────────────────────────
    hacks: [
        { icon: "⛽", title: "Fuel Strategy", text: "Fill at Fort William and Inverness. Skip Skye—prices are 40p/litre more expensive." },
        { icon: "🅿️", title: "Parking Apps", text: "Download RingGo and JustPark before you leave the airport. Photograph car damage BEFORE driving off." },
        { icon: "🌿", title: "Midge Protection", text: "Buy Smidge repellent at Green Welly Stop (Tyndrum). Don't hunt for it later in small villages." },
        { icon: "📱", title: "Road Conditions", text: "Single-track roads use 'Passing Places'. Let oncoming traffic through—it's expected road culture." },
        { icon: "🦕", title: "Dinosaur Timing", text: "An Corran Beach: Low tide at 12:59 PM. Arrive by 12:30 to see footprints clearly. High tide covers them." },
        { icon: "🎬", title: "Movie Locations", text: "Quiraing was filmed in BFG & Stardust. The mountain is actively sliding—road repairs happen yearly." },
        { icon: "🍛", title: "Edinburgh Curry", text: "Nicolson Street has Scotland's best Indian restaurants. Pre-theatre menus before 6:30 PM save 30%." }
    ],

    // ── Days ───────────────────────────────────────────────
    days: [
        {
            // ── Day 1 ──
            day:   1,
            date:  "Apr 28",
            title: "The Highland Entrance",
            route: "Stansted → Edinburgh → Loch Lomond → Glencoe → Fort William",

            hotel:     "The Base Camp Hotel, Nevis Range",
            hotelLink: "https://www.basecampnevisrange.co.uk",
            hotelLoc:  "PH33 6SN",

            grocery:    "Lidl / Aldi Fort William",
            groceryLoc: "PH33 6PP",

            driving: {
                km:       210,
                time:     "3h 15m",
                warnings: "A82 single carriageway after Tarbet — slow lorries common. Allow extra time.",
                fuelStop: "Fill at Fort William Morrisons or Lidl on arrival"
            },

            meals: {
                breakfast: [
                    { name: "Ramada Stansted / Airport", cost: "Included or £5-8pp", tag: "✈️ Airport", desc: "Breakfast included or light options available", link: "" }
                ],
                lunch: [
                    { name: "The Village Rest, Luss", cost: "£8-12pp", tag: "🌟 Must Visit", desc: "Postcard village on Loch Lomond banks", link: "" }
                ],
                dinner: [
                    { name: "Taste of India, Fort William", cost: "£12-18pp", tag: "🍛 Best Curry", desc: "Eggetarian-friendly, near town center", link: "" }
                ]
            },

            stops: [
                {
                    time:  "09:30",
                    title: "Land at EDI & Pick Up Car",
                    desc:  "Arrival from Stansted. Pick up rental car — Scotland begins the moment you step outside.",
                    icon:  "car",
                    duration: "1.5 hrs",
                    cost:  "Pre-paid",
                    hack:  "Join rental loyalty club online before travel to skip main queue. Photograph all existing car damage BEFORE driving off. Download RingGo and JustPark—set them up in car park before you leave.",
                    link:  ""
                },
                {
                    time:  "12:15",
                    title: "Luss Village, Loch Lomond",
                    desc:  "Postcard-perfect stone cottage village sitting right on the banks of Loch Lomond. The loch is one of the largest in Britain with impossibly clear water.",
                    icon:  "water",
                    loc:   "G83 8PA",
                    duration: "30–40 min",
                    cost:  "Free (parking £2–3 at Luss South Car Park)",
                    famous: "Most photographed village on Loch Lomond. Featured in Scottish TV series 'Take the High Road'.",
                    do:    "Walk to the pier. Tell Kabir to look for Nessie's cousins in the shallows — the water is clear as glass. The stone cottages with flower gardens make a perfect family photo backdrop.",
                    photoSpot: "Pier with Loch backdrop. Flower-lined village street with Ben Lomond behind.",
                    hack:  "Parking fills by 11 AM on summer weekends. Late April is quieter — you should be fine.",
                    link:  "https://maps.app.goo.gl/LussVillage"
                },
                {
                    time:  "14:30",
                    title: "Green Welly Stop, Tyndrum",
                    desc:  "The legendary Highland roadside stop — café, shop, and the last guaranteed high-quality facilities before the wilder moors.",
                    icon:  "coffee",
                    duration: "15 min",
                    cost:  "Free",
                    do:    "Use the facilities here — non-negotiable with a 5-year-old. Grab snacks and a hot drink. Fill your water bottles.",
                    hack:  "The Green Welly sells Smidge midge repellent — pick some up now rather than hunting for it later in smaller villages.",
                    link:  ""
                },
                {
                    time:  "15:15",
                    title: "Rannoch Moor",
                    desc:  "A vast, treeless, ancient bogland stretching to the horizon in every direction. Genuinely looks like the surface of another planet — or Mars.",
                    icon:  "compass",
                    duration: "10 min",
                    cost:  "Free — roadside layby, no car park needed",
                    famous: "One of Europe's last true wildernesses — the Romans couldn't cross it, Victorian engineers had to float the railway tracks on a bed of brushwood.",
                    do:    "Simply pull into any of the wide roadside laybys on the A82 and step out. The silence and scale are extraordinary.",
                    legend: "The old West Highland Railway here was literally floated on a raft of brushwood and earth rather than solid ground — tell Kabir he might be driving over a 'sinking train track'.",
                    photoSpot: "Simply turn in any direction — every angle is spectacular. Mountains in the background, endless bog in the foreground.",
                    hack:  "Don't miss this. It takes 10 minutes and costs nothing and there is nowhere else on earth quite like it.",
                    link:  ""
                },
                {
                    time:  "16:00",
                    title: "Glencoe — The Three Sisters",
                    desc:  "Three vast mountain spurs dropping dramatically into the valley floor — the most powerful Highland landscape in Scotland. No walking needed: the view is right from the roadside.",
                    icon:  "mountain",
                    loc:   "PH49 4LA",
                    duration: "20 min",
                    cost:  "Free — A82 layby or NTS car park",
                    famous: "Site of the 1692 Glencoe Massacre — soldiers who had eaten the MacDonald clan's food and slept under their roof killed them in their beds. One of the darkest acts of betrayal in Scottish history.",
                    do:    "Park at the main A82 layby viewpoint. Simply step out and look up. Ask Kabir if he can see the faces of giants sleeping in the rock walls — the mountains genuinely look like reclining figures when clouds roll in.",
                    legend: "The Scots call it 'murder under trust' — the ultimate violation of Highland hospitality. The landscape has felt heavy and mournful ever since.",
                    photoSpot: "Face the mountains from the car park — they fill the entire frame. Moody if cloudy; majestic if clear. Both are spectacular.",
                    hack:  "Bagpiper sometimes plays here on weekends. Weekday = bonus if they're there, not guaranteed. The mountains are the show regardless.",
                    link:  "https://maps.app.goo.gl/GlencoeThreeSisters"
                },
                {
                    time:  "17:15",
                    title: "Commando Memorial, Spean Bridge",
                    desc:  "Three giant bronze Commandos on a granite plinth, looking out across the Great Glen toward Ben Nevis. Honours WWII soldiers who trained here in secret before D-Day.",
                    icon:  "monument",
                    loc:   "PH34 4EU",
                    duration: "10 min",
                    cost:  "Free — dedicated car park on site",
                    famous: "Unveiled in 1952 by the Queen Mother. The Commandos trained in brutally cold Highland winters — they wanted conditions worse than anywhere they'd be sent to fight.",
                    do:    "Stand behind the three figures and look in the same direction they face — Ben Nevis and the Great Glen. The scale and silence are stunning. 5 minutes and completely free.",
                    photoSpot: "From below looking up at the three figures with sky behind. From behind them facing toward Ben Nevis — one of Scotland's most powerful viewpoints.",
                    hack:  "Almost every tourist drives straight past this. Don't. It takes 10 minutes and the setting — especially on a clear evening with Ben Nevis visible — is genuinely moving.",
                    link:  "https://maps.app.goo.gl/CommandoMemorial"
                },
                {
                    time:  "18:15",
                    title: "Arrive — Base Camp Hotel, Nevis Range",
                    desc:  "Your hotel for the night — at the foot of the Nevis Range ski centre, 7 miles from Fort William town.",
                    icon:  "bed",
                    loc:   "PH33 6SN",
                    duration: "Evening",
                    cost:  "Pre-paid",
                    hack:  "The hotel is 7 miles from Fort William town. Drive into town for dinner at Taste of India rather than eating at the hotel. Fill up petrol at Fort William Morrisons before returning — you leave early tomorrow.",
                    link:  "https://www.basecampnevisrange.co.uk"
                }
            ]
        },

        {
            // ── Day 2 ──
            day:   2,
            date:  "Apr 29",
            title: "The Hogwarts Express Day",
            route: "Fort William → Glenfinnan → Skye Bridge → Kyleakin",

            hotel:     "Saucy Mary's Hostel, Kyleakin",
            hotelLink: "https://www.saucemarys.com",
            hotelLoc:  "IV41 8PL",

            grocery:    "Co-op, Kyle of Lochalsh (2 miles over bridge)",
            groceryLoc: "IV40 8AH",

            driving: {
                km:       145,
                time:     "2h 40m",
                warnings: "A87 to Skye Bridge — winding and spectacular. Allow extra time to enjoy it.",
                fuelStop: "Fort William Morrisons — fill before leaving. Skip Skye fuel prices."
            },

            meals: {
                breakfast: [
                    { name: "Café Mango, Fort William", cost: "£6-10pp", tag: "☕ Local", desc: "Walking-distance from hotel", link: "" }
                ],
                lunch: [
                    { name: "Glenfinnan Dining Car", cost: "£7-10pp", tag: "🚂 The Experience", desc: "Victorian railway carriage at the station. Vegetarian soup and sandwiches.", link: "" }
                ],
                dinner: [
                    { name: "Saucy Mary's Restaurant, Kyleakin", cost: "£10-14pp", tag: "🍽️ On-Site", desc: "Reliably good and convenient after long drive", link: "" }
                ]
            },

            stops: [
                {
                    time:  "09:15",
                    title: "Depart Fort William",
                    desc:  "Early departure on the A830 — the Road to the Isles. Fill petrol at Fort William Morrisons before leaving. This is the last cheap fuel for days.",
                    icon:  "car",
                    duration: "25 min to Glenfinnan",
                    cost:  "Petrol",
                    hack:  "Fill at Fort William Morrisons before leaving. Skye fuel is significantly more expensive. Instruct TomTom or Google Maps to Glenfinnan Visitor Centre (PH37 4LT).",
                    link:  ""
                },
                {
                    time:  "09:40",
                    title: "Glenfinnan Viaduct — The Harry Potter Bridge",
                    desc:  "The 21-arch Victorian viaduct made world-famous by Harry Potter — this is where the Hogwarts Express crossed. The train still crosses today, four times a day in summer.",
                    icon:  "train",
                    loc:   "PH37 4LT",
                    duration: "1.5 hrs",
                    cost:  "Free (parking £5 at NTS Visitor Centre)",
                    famous: "Confirmed running April 7 – October 24, 2025, seven days a week. April 29 is safe. Train departs Fort William at 10:15 AM and crosses the viaduct approximately 30 minutes later.",
                    do:    "Immediately take the path UNDERNEATH the viaduct and UP the hill on the LEFT (West Hill Viewpoint). This 15–20 min walk gives you the iconic curved Harry Potter shot. Arrive at the viewpoint by 10:15 — the train crosses at approximately 10:45.",
                    eat:   "Glenfinnan Dining Car — converted Victorian railway carriage at the station. Vegetarian soup and sandwiches.",
                    legend: "Built in 1901, the viaduct's construction was controversial — a horse died and is rumoured to be buried inside one of the pillars. The foreman denied it. Locals still argue.",
                    photoSpot: "West Hill Viewpoint — the train curves through the frame with mountains behind. Be at the viewpoint by 10:15 for a front position. The train crosses for approximately 90 seconds.",
                    hack:  "Arrive at the car park by 09:45 at the absolute latest. Walk immediately to the viewpoint — you need time to climb and find a spot. Bring snacks and a jacket — it's cold and exposed on the hillside.",
                    link:  "https://maps.app.goo.gl/GlenfinnvanViaduct"
                },
                {
                    time:  "11:15",
                    title: "Glenfinnan Monument & Loch Shore",
                    desc:  "The tower at the head of Loch Shiel marks where Bonnie Prince Charlie raised his royal standard in 1745, beginning the last Jacobite uprising. The loch view on a clear day is one of the most beautiful in Scotland.",
                    icon:  "monument",
                    loc:   "PH37 4LT",
                    duration: "20 min",
                    cost:  "Free (tower climb £4 — skip with a 5-year-old)",
                    famous: "Where Bonnie Prince Charlie began the 1745 Jacobite Rising. It ended in total defeat at Culloden nine months later.",
                    do:    "Walk to the loch shore below the monument. The reflections on calm days are extraordinary. Tell Kabir this is where a prince arrived by boat, climbed the hill, and waved his flag hoping all of Scotland would follow him.",
                    legend: "The figure on top of the monument faces away from where Charlie raised his standard. Nobody can explain why. It has puzzled historians for 200 years.",
                    photoSpot: "From the loch shore looking back at the monument with mountains reflected in still water. Best on a calm morning.",
                    link:  ""
                },
                {
                    time:  "12:30",
                    title: "Drive to Skye — A87 Road to the Isles",
                    desc:  "The most scenic two-hour drive in Britain. The A87 through Glen Shiel has mountains coming right down to the roadside. You will pass Eilean Donan Castle on this road — don't stop today. Save it for Day 4 when you leave Skye.",
                    icon:  "car",
                    duration: "2 hrs to Kyleakin",
                    cost:  "Petrol",
                    hack:  "The mountains of Glen Shiel crowd the road so dramatically that you feel like you're driving through a canyon. Pull over briefly at the Five Sisters of Kintail viewpoint if you spot it — 5 sisters ridge visible from the road, completely free.",
                    link:  ""
                },
                {
                    time:  "14:30",
                    title: "Skye Bridge — Crossing to the Island",
                    desc:  "The bridge to Skye — free to cross, fast, and surprisingly dramatic. The mountains of Skye appear ahead as you approach over the water.",
                    icon:  "bridge",
                    duration: "10 min",
                    cost:  "Free",
                    hack:  "Cross straight to Kyleakin — your hostel is literally 2 minutes after the bridge on the left.",
                    link:  ""
                },
                {
                    time:  "15:00",
                    title: "Check In — Saucy Mary's, Kyleakin",
                    desc:  "Your hostel for tonight — right in Kyleakin village, 2 mins from the Skye Bridge.",
                    icon:  "bed",
                    loc:   "IV41 8PL",
                    duration: "Check-in from 4 PM",
                    cost:  "Pre-paid",
                    hack:  "IMPORTANT: Confirm you have a PRIVATE FAMILY ROOM booked — children cannot stay in shared dormitory rooms with other guests. Call ahead to confirm if unsure.",
                    link:  "https://www.saucemarys.com"
                },
                {
                    time:  "16:00",
                    title: "Caisteal Maol Ruins — Evening Walk",
                    desc:  "A ruined medieval castle right on the Kyleakin waterfront — 5 minute walk from the hostel. One of Skye's oldest ruins, standing on a rocky promontory over the sea.",
                    icon:  "castle",
                    loc:   "IV41 8PL",
                    duration: "20 min",
                    cost:  "Free",
                    famous: "Legend says a Norwegian princess called Saucy Mary (yes — the hostel is named after her) stretched a chain across the strait here to charge passing ships a toll.",
                    do:    "Walk around the outside of the ruins. The view back across the water to the mainland from here is lovely at dusk.",
                    legend: "Saucy Mary was allegedly so beautiful that sailors would pay the toll just for a glimpse of her on the battlements. The hostel is named after her.",
                    photoSpot: "Ruins against the evening sky. View across the strait toward the mainland.",
                    link:  ""
                }
            ]
        },

        {
            // ── Day 3 ──
            day:   3,
            date:  "Apr 30",
            title: "North Skye — Legends & Dinosaurs",
            route: "Kyleakin → Trotternish Loop (Old Man of Storr, Lealt, Kilt Rock, Quiraing, Fairy Glen) → Kyleakin",

            hotel:     "Skye Backpackers, Kyleakin",
            hotelLink: "https://www.skyebackpackers.com",
            hotelLoc:  "IV41 8PL",

            grocery:    "Portree Co-op (on loop route)",
            groceryLoc: "IV51 3BA",

            driving: {
                km:       110,
                time:     "2h 30m total loop",
                warnings: "Quiraing road is narrow single-track with passing places and sheer drop. Drive slowly. Tour buses start at 10 AM — leave early.",
                fuelStop: "Portree — only filling station on north Skye"
            },

            meals: {
                breakfast: [
                    { name: "Hostel Self-Catering Kitchen", cost: "£2-4pp", tag: "💰 Budget", desc: "Make your own breakfast", link: "" }
                ],
                lunch: [
                    { name: "Picnic at Beach or Quiraing", cost: "Packed", tag: "🥪 Packed", desc: "Buy at Portree Co-op before the loop", link: "" }
                ],
                dinner: [
                    { name: "Café Arriba, Portree", cost: "£8-12pp", tag: "🍽️ Casual", desc: "Return for dinner", link: "" }
                ]
            },

            stops: [
                {
                    time:  "08:00",
                    title: "Depart Kyleakin Early",
                    desc:  "Early departure essential — Old Man of Storr car park fills by 10 AM and you are 50 minutes from Kyleakin.",
                    icon:  "car",
                    duration: "50 min drive to Storr",
                    cost:  "Petrol",
                    hack:  "Skye Backpackers check-in is from 5 PM. Leave bags at reception (free storage) and head straight out. Confirm private family room is pre-booked.",
                    link:  ""
                },
                {
                    time:  "09:00",
                    title: "Old Man of Storr",
                    desc:  "Dramatic black basalt pinnacles rising from Trotternish Ridge — the most iconic view on Skye and most photographed landscape in Scotland. 165 million years old — older than dinosaurs.",
                    icon:  "mountain",
                    loc:   "IV51 9JN",
                    duration: "1 hr (up, look, return)",
                    cost:  "Free (parking £3/hr)",
                    famous: "Featured in Prometheus, BFG film, countless adverts. Created by massive landslip tens of thousands of years ago.",
                    do:    "Walk 15 minutes up the clear path to the base of pinnacles. Don't need to summit — 15-minute view is everything. Largest spire is 55 metres tall.",
                    legend: "Pinnacles are petrified fingers of a giant buried in the hill. The Old Man — tallest pinnacle — is his thumb, still pointing to sky. Older than dinosaurs.",
                    photoSpot: "From below looking up through pinnacles with sea behind on clear day. Morning mist around bases is magical.",
                    hack: "Arrive before 9:15 to beat coaches. Waterproof shoes essential — muddy path. Jacket and layer — very exposed.",
                    kabirInteractive: "Game: Find rocks that look like faces or feet. Count 'giant teeth' pinnacles. Story: 'These rocks are older than dinosaurs. What did the mountain look like when dinosaurs were alive?'",
                    link:  "https://maps.app.goo.gl/OldManOfStorr"
                },
                {
                    time:  "10:30",
                    title: "Kilt Rock & Mealt Falls",
                    desc:  "Sea cliff with vertical basalt columns looking like tartan kilt pleats — with waterfall falling 60m straight into ocean.",
                    icon:  "water",
                    loc:   "IV51 9PN",
                    duration: "20 min",
                    cost:  "Free — dedicated car park",
                    famous: "Hexagonal shapes identical to Giant's Causeway in Northern Ireland — same geological event.",
                    do:    "Walk 2 minutes to fenced viewpoint. Waterfall drops from cliff straight into sea — listen for the boom when it hits water.",
                    photoSpot: "Kilt columns right, waterfall left, open ocean behind. Wide angle captures both.",
                    hack:  "Quick stop — 20 minutes max. No facilities. View is extraordinary but compact.",
                    kabirInteractive: "Singing Fence: Safety railings have holes — when wind blows, they act like a flute. 'Listen to mountain singing.' High note or low note?",
                    link:  "https://maps.app.goo.gl/KiltRockMealtFalls"
                },
                {
                    time:  "11:00",
                    title: "Lealt Falls Gorge",
                    desc:  "Free, dramatic gorge view almost nobody stops for. Narrow ancient river canyon through dark rock, sea visible at end.",
                    icon:  "water",
                    loc:   "IV51 9QU",
                    duration: "10 min",
                    cost:  "Free — roadside layby",
                    do:    "Pull over and walk to gorge viewpoint. 5 minutes, entirely free. One of best hidden stops on island.",
                    photoSpot: "Looking down into gorge from edge. Dark rock walls, rushing water below, sea framed at end.",
                    hack:  "Almost nobody stops. Sign easy to miss — 2 minutes south of Kilt Rock on A855.",
                    kabirInteractive: "Treasure Hunt: In 1800s, people mined 'Diatomite' (fossilized algae) here. Look for old storehouse ruins — a 'ghost factory.' Detective: Use binoculars to spot old stone building in valley.",
                    link:  "https://maps.app.goo.gl/LealtFallsGorge"
                },
                {
                    time:  "11:30",
                    title: "Quiraing Viewpoint",
                    desc:  "Ancient landslip where earth folded and never recovered — tilted, broken, otherworldly. Most photographed view in all of Scotland.",
                    icon:  "mountain",
                    loc:   "IV51 9XU",
                    duration: "30–40 min",
                    cost:  "Free — small car park on Quiraing road",
                    famous: "Vikings raided Skye. Locals hid cattle on hidden plateau above Quiraing — invisible from below.",
                    do:    "Park-and-stare stop — view from car park is breathtaking. No walk needed. Optional 10-min walk along ridge gives wider panorama.",
                    legend: "Hidden plateau called 'The Table' — used to hide cattle from Viking raiders. Herds moved at night — Vikings searched valley below, found nothing.",
                    photoSpot: "From car park — whole fractured landscape in one frame. Walk 5 min further for classic shot with sea beyond ridgeline.",
                    hack:  "ROAD WARNING: Narrow single-track with sheer drop. Drive slowly — 15 mph max. Looks scary but completely safe if slow and use passing places.",
                    kabirInteractive: "Giant's Table: Flat plateau where giants have dinner parties. What would they eat? Color Challenge: Spot gray, red, brown, green rocks—different times/places. Imaginary Castle: Where would drawbridge be?",
                    link:  "https://maps.app.goo.gl/QuiraingViewpoint"
                },
                {
                    time:  "12:15",
                    title: "An Corran Beach — Dinosaur Footprints",
                    desc:  "165 million years ago—tropical swamp. Genuine footprints of Ornithopods (small dinosaurs) and Megalosaurs (T-Rex cousins).",
                    icon:  "footprints",
                    loc:   "IV51 9NU",
                    duration: "1.5 hrs",
                    cost:  "Free",
                    famous: "Black sand contains magnetite—same mineral in compasses. Talisker Whisky Distillery 5 mins away.",
                    do:    "Walk flat 20-min farm path to beach. Bring small magnet—black sand contains magnetite, will jump to magnet dramatically. Walk to waterfall at far north end.",
                    photoSpot: "Waterfall north end with sea stack behind. Wide shot from beach looking at cliffs. Black sand with magnet demo.",
                    hack:  "After rain, path boggy—waterproof shoes essential. Wellies ideal. 20-min walk flat & easy with child. CRITICAL: Low tide 12:59 PM. Arrive then to see prints clearly.",
                    kabirInteractive: "Paleontologist Mode: Sketch/photograph clearest footprints. Detective Game: 3 toes=Ornithopod (plant-eater). Bigger=Megalosaur (meat-eater). Which is which? Treasure Hunt: Best footprint=museum discovery. Lunch Roleplay: Dinosaur picnic 165 million years ago. Post-Lunch Rockpool: Find smallest crab, starfish, snail.",
                    link:  "https://maps.app.goo.gl/AnCorranBeach"
                },
                {
                    time:  "14:00",
                    title: "The Fairy Glen",
                    desc:  "Hidden valley of miniature conical hills, stone spirals, ruined tower—all shrunk to child scale. Looks like fairy kingdom. Legend says it is.",
                    icon:  "mountain",
                    loc:   "IV51 9XU",
                    duration: "45 min",
                    cost:  "Free",
                    famous: "Looks like hobbit village. Hills perfectly natural—water erosion over thousands of years—but so tidy it seems sculpted by hand.",
                    do:    "Let Kabir lead through stone spirals, climb conical hills. Castle Ewen (biggest cone) has small ruined tower on top he can scramble up. Stop designed entirely for 5-year-old.",
                    legend: "Capital city of Skye Fairies. Stone spirals arranged by fairies as pathways & maps. Do NOT move stones—very bad luck, ruins it for next family.",
                    photoSpot: "From top of Castle Ewen looking down at spirals below. Wide shot of fairy kingdom scale. Kabir running between miniature hills.",
                    hack:  "Only stop where Kabir is main character, not passenger. Everywhere else spectacular for you—this one spectacular for him.",
                    kabirInteractive: "King of Castle: Climb Castle Ewen. See whole 'Fairy Kingdom.' Queen's palace? Village? Fairy Hunt: Three fairy things—pretty stone (treasure), moss (food), pebble (mirror). Miniature Kingdom: What size would fairy be?",
                    link:  "https://maps.app.goo.gl/FairyGlen"
                },
                {
                    time:  "17:00",
                    title: "Return to Kyleakin Check-In",
                    desc:  "40-min drive back south to Kyleakin. Check in to Skye Backpackers — same village.",
                    icon:  "car",
                    duration: "Evening",
                    cost:  "Pre-paid",
                    hack:  "CRITICAL: Children cannot stay in dorms. Confirm private family room. Skye Backpackers reception: 0599 534 510.",
                    link:  ""
                }
            ]
        },

        {
            // ── Day 4 ──
            day:   4,
            date:  "May 1",
            title: "Fairy Pools, Black Sand & Drive to Beauly",
            route: "Kyleakin → Fairy Pools → Sligachan → Talisker → Eilean Donan → Beauly",

            hotel:     "Gruinard Guest House, Beauly",
            hotelLink: "https://gruinard-guesthouse.co.uk",
            hotelLoc:  "IV4 7AU",

            grocery:    "Tesco / Lidl Inverness — stock up for tomorrow",
            groceryLoc: "IV3 5PE",

            driving: {
                km:       195,
                time:     "3h 30m (without Neist) / 4h 15m (with)",
                warnings: "A87 from Skye Bridge through Glen Shiel is winding. If doing Neist Point, leave Talisker by 15:15.",
                fuelStop: "Invergarry or Inverness"
            },

            meals: {
                breakfast: [
                    { name: "Broadford Bakery, Broadford", cost: "£4-7pp", tag: "🥐 Local", desc: "En route from Kyleakin", link: "" }
                ],
                lunch: [
                    { name: "Sligachan Hotel, Sligachan", cost: "£10-14pp", tag: "🍽️ With View", desc: "Scenic stop with Cuillin views", link: "" }
                ],
                dinner: [
                    { name: "Corner on the Square, Beauly", cost: "£10-15pp", tag: "🍛 Town Center", desc: "3 min walk from guesthouse", link: "" }
                ]
            },

            stops: [
                {
                    time:  "09:30",
                    title: "The Fairy Pools",
                    desc:  "Crystal-clear turquoise pools fed by waterfalls cascading from Black Cuillin mountains. Water colour extraordinary & completely natural—Caribbean blue sunny days, emerald green overcast.",
                    icon:  "water",
                    loc:   "IV47 8TA",
                    duration: "1.5 hrs",
                    cost:  "Free (parking £5)",
                    famous: "Most Instagrammed location in Scotland. Blue from glacially-filtered spring water through basalt rock—no filters, no enhancement.",
                    do:    "Walk flat gravel path along river. Stop at first 2-3 pools—more than enough magic without full 2-hour trek. Kabir throws pebbles, looks for fish. Water 6°C—feet paddle only!",
                    photoSpot: "Third pool best waterfall backdrop—frame Cuillin peaks. Low angle from riverbank captures water colour best.",
                    hack:  "Arrive before 11 AM—fills fast even late April. Rocky, uneven path—proper waterproof shoes essential. Buggy impossible.",
                    kabirInteractive: "Fairy Toll: Kabir finds flat stone at each pool to leave for fairies.",
                    link:  "https://maps.app.goo.gl/FairyPools"
                },
                {
                    time:  "12:00",
                    title: "Sligachan Old Bridge",
                    desc:  "Beautiful old stone bridge with dramatic black Cuillin mountains reflected in river below. One of Scotland's most iconic & painted scenes—almost no effort to reach.",
                    icon:  "bridge",
                    loc:   "IV47 8SW",
                    duration: "30 min",
                    cost:  "Free (park at Sligachan Hotel)",
                    famous: "Most painted bridge in Scotland. Gateway to Black Cuillins—most dramatic mountain range in Britain.",
                    do:    "Stand on bridge for iconic mountain reflection shot. Then—legend demands it—dip face in water for 7 seconds.",
                    legend: "Dip face 7 seconds & blessed with eternal beauty by fairy queen Bride. Water ice cold, legend 500 years old. Kabir will absolutely want to try.",
                    photoSpot: "Low angle from riverbank—bridge centred, Cuillin peaks reflected perfectly in still water on calm day.",
                    hack:  "Sligachan Hotel pub next door—good food if lunch missed. Beer garden has best Cuillin view of any pub in Scotland.",
                    kabirInteractive: "7-Second Beauty: Dip face for fairy queen's blessing.",
                    link:  "https://maps.app.goo.gl/SligachanBridge"
                },
                {
                    time:  "13:30",
                    title: "Talisker Bay",
                    desc:  "Remote bay with magnetic black sand, dramatic sea stack, massive waterfall crashing down cliff at far end. Usually quiet even in season. Genuinely one of most magical beaches in Scotland.",
                    icon:  "water",
                    loc:   "IV47 8SF",
                    duration: "1.5 hrs",
                    cost:  "Free",
                    famous: "Black sand contains magnetite—same mineral in compasses. Talisker Whisky Distillery 5 mins away if interested.",
                    do:    "Walk flat 20-min farm path to beach. Bring small magnet—black sand contains magnetite, jumps to magnet dramatically. Walk to waterfall at far north end.",
                    photoSpot: "Waterfall north end with sea stack behind. Wide shot from beach at cliffs. Black sand with magnet demo.",
                    hack:  "After rain, path boggy—waterproof shoes essential. Wellies ideal. 20-min walk completely flat & easy with child.",
                    kabirInteractive: "Magic Sand: Use magnet to show black magnetite sand moves.",
                    link:  "https://maps.app.goo.gl/TaliskerBay"
                },
                {
                    time:  "15:30",
                    title: "⭐OPTIONAL — Neist Point Lighthouse",
                    desc:  "Most westerly point on Skye—dramatic cliffs above Outer Hebrides, golden afternoon light, Scotland's most photographed lighthouse. Only if left Talisker before 15:15.",
                    icon:  "lighthouse",
                    loc:   "IV55 8WU",
                    duration: "40 min",
                    cost:  "Free",
                    famous: "Built 1909, still operational. Minke whales, dolphins, basking sharks regularly spotted from cliffs spring & summer.",
                    do:    "HONEST CHECK: Leave Talisker before 15:15→do Neist. 15:30 or later→skip it. Beauly 2.5 hrs away, late arrival with exhausted 5-year-old not worth sunset.",
                    photoSpot: "Stay CLIFF TOP—view over Outer Hebrides just as spectacular as lighthouse. Concrete stairs down steep & exhausting after long day.",
                    hack:  "Do NOT attempt steep stairs with tired 5-year-old at end of long day. Cliff-top view genuinely just as good, 10 minutes.",
                    link:  "https://maps.app.goo.gl/NeistPoint"
                },
                {
                    time:  "16:30",
                    title: "Depart Skye — Cross the Bridge",
                    desc:  "Leave Skye via bridge heading east on A87. Time on island complete.",
                    icon:  "bridge",
                    duration: "30 mins to Eilean Donan",
                    cost:  "Free bridge",
                    hack:  "Add 45 minutes to all remaining timings if you did Neist Point.",
                    link:  ""
                },
                {
                    time:  "17:00",
                    title: "Eilean Donan Castle — The Floating Castle",
                    desc:  "Scotland's most iconic castle on tiny island at meeting point of 3 sea lochs—directly on route to Beauly. More films than almost any Scottish landmark: Highlander, James Bond, Brave.",
                    icon:  "castle",
                    loc:   "IV40 8DX",
                    duration: "15 min",
                    cost:  "Free (view from bridge—no entry)",
                    famous: "Original built 13th century, largely destroyed 1719, rebuilt 1911-1932. Rebuild so faithful film crews still use it as medieval fortress.",
                    do:    "Park just before bridge on roadside (IV40 8DX). Walk to shoreline on LEFT of bridge for 'floating castle' photo—castle appears in middle of loch with mountains behind. 10 minutes, completely free, one of best photos of entire trip.",
                    photoSpot: "From shoreline left of bridge—castle centred in loch with 3 sea lochs behind. Late afternoon light beautiful.",
                    hack:  "Don't pay £10 inside. Exterior photo from shore is whole experience, completely free. Passing castle anyway—adds only 15 minutes.",
                    kabirInteractive: "Spy Glass: Spot 'secret' arrow-slits in castle walls from across water.",
                    link:  "https://maps.app.goo.gl/EileanDonanCastle"
                },
                {
                    time:  "19:00",
                    title: "Arrive — Gruinard Guest House, Beauly",
                    desc:  "Beautiful Victorian guesthouse 3 mins walk from Beauly village centre. After 3 nights in hostels—genuine step up. Private rooms, private bathroom, real beds, free parking, included breakfast.",
                    icon:  "bed",
                    loc:   "IV4 7AU",
                    duration: "Evening",
                    cost:  "Pre-paid",
                    hack:  "Dinner: Corner on the Square, 3 min walk. Or drive 20 mins to Rajah Indian in Inverness for proper curry. Tomorrow breakfast included at guesthouse.",
                    link:  "https://gruinard-guesthouse.co.uk"
                }
            ]
        },

        {
            // ── Day 5 ──
            day:   5,
            date:  "May 2",
            title: "The Monster Hunt & The Road South",
            route: "Beauly → Inverness → Loch Ness → Pitlochry → South Queensferry",

            hotel:     "Premier Inn, South Queensferry",
            hotelLink: "https://www.premierinn.com",
            hotelLoc:  "EH30 9SQ",

            grocery:    "Lidl or Tesco Inverness — buy packed lunch",
            groceryLoc: "IV3 8GH",

            driving: {
                km:       270,
                time:     "3h 40m with stops",
                warnings: "A9 south has speed cameras. M90 smooth. Longest day—leave by 08:30 sharp.",
                fuelStop: "Tesco Inverness or Kinross Services on M90"
            },

            meals: {
                breakfast: [
                    { name: "Gruinard Guest House (Included)", cost: "Included", tag: "🌅 Included", desc: "Enjoy proper breakfast", link: "" }
                ],
                lunch: [
                    { name: "Packed Lunch — Buy in Inverness", cost: "£4-6pp", tag: "🥪 Picnic", desc: "Tesco; eat at Loch Ness layby", link: "" }
                ],
                dinner: [
                    { name: "The Ferry Tap, South Queensferry", cost: "£10-14pp", tag: "🍴 Local", desc: "Walking distance from hotel", link: "" }
                ]
            },

            stops: [
                {
                    time:  "08:30",
                    title: "Depart Beauly — Sharp",
                    desc:  "Entire day works only if leaving on time. Whin Park opens 10 AM, 20 mins away. 08:30 departure gives time for coffee & fuel stop.",
                    icon:  "car",
                    duration: "20 min to Inverness",
                    cost:  "Petrol",
                    hack:  "Fill petrol at Tesco Inverness (A9 approach) before park. Buy packed lunches—Lidl & Tesco on Inverness ring road.",
                    link:  ""
                },
                {
                    time:  "09:00",
                    title: "Whin Park & Ness Islands, Inverness",
                    desc:  "Inverness's brilliant family park on islands in River Ness, connected by suspension bridges. Ness Islands Railway (miniature train) genuine highlight for 5-year-old. Park beautiful, free, surprisingly large.",
                    icon:  "train",
                    loc:   "IV3 8ER",
                    duration: "1 hr",
                    cost:  "Free park (train £2)",
                    famous: "Islands public park since Victorian times. Miniature railway decades old, best-loved family attraction in Highlands.",
                    do:    "Ride Ness Islands Railway first—loops around island, Kabir waves at everyone. Then explore suspension bridges & climbing frames.",
                    photoSpot: "Kabir on train from low angle. Bridges over river with trees. River Ness & park from stone bridges.",
                    hack:  "Opens 10 AM. Arrive before—walk Ness Islands suspension bridges first, free & pleasant.",
                    kabirInteractive: "Ride Ness Islands Railway—loops around, he waves at everyone from carriage.",
                    link:  "https://maps.app.goo.gl/WhinPark"
                },
                {
                    time:  "10:30",
                    title: "A82 South — Loch Ness Monster Hunt",
                    desc:  "Legendary 37km loch—darker & deeper than looks. A82 runs right along western shore entire length. Keep Kabir scanning water from his window.",
                    icon:  "water",
                    duration: "1 hr drive + layby stops",
                    cost:  "Free",
                    famous: "230 metres deep—deeper than North Sea. More fresh water than all lakes of England & Wales combined. Nessie first reported by monk St Columba 565 AD.",
                    do:    "Drive slowly. Stop at any layby. Halfway along, Urquhart Castle ruins on left shore—pull into layby for proper look. No entry fee needed.",
                    legend: "Most analysed stretch of water in world. Multiple sonar sweeps, submarine explorations, DNA studies done. DNA 2019 found no large unknown animal—but large eel species. Kabir can decide.",
                    photoSpot: "Urquhart Castle from layby—dramatic silhouette against dark loch. Any layby gives full loch panorama.",
                    hack:  "Skip Loch Ness Monster Centre in Drumnadrochit—overpriced trap. Binoculars + imagination more fun. Do NOT pay £15 Urquhart Castle—road layby view 80% experience.",
                    kabirInteractive: "Monster Factor: Keep Loch Ness legend alive—salmon Monster's favorite snacks, hiding in 'stairs' (ladder).",
                    link:  "https://maps.app.goo.gl/LochNess"
                },
                {
                    time:  "13:00",
                    title: "Pitlochry Fish Ladder",
                    desc:  "Stepped pools into Pitlochry Dam allowing Atlantic salmon upstream to spawning grounds. Glass viewing window in underground tunnel lets watch salmon—completely free.",
                    icon:  "fish",
                    loc:   "PH16 5ND",
                    duration: "30 min",
                    cost:  "Free",
                    famous: "5,000+ salmon pass yearly. Dam controversial 1950—fish ladder compromise allowing it. Salmon most active April-June.",
                    do:    "Walk to dam, find underground viewing tunnel. Check glass window—excellent chance of salmon. For child, huge fish suddenly materialising from dark water genuinely thrilling.",
                    photoSpot: "Through glass window—salmon in current. Dam from above with loch behind.",
                    hack:  "Ladder & dam viewpoint free. Visitor centre charges small fee—skip it. Fish window whole experience, completely free.",
                    link:  "https://maps.app.goo.gl/PitlochryFishLadder"
                },
                {
                    time:  "16:00",
                    title: "Arrive — Premier Inn, South Queensferry",
                    desc:  "Edinburgh-area base for next 2 nights. Charming historic village 9 miles west of Edinburgh city centre, beneath 3 Forth Bridges.",
                    icon:  "bed",
                    loc:   "EH30 9SQ",
                    duration: "Evening",
                    cost:  "Pre-paid",
                    hack:  "After check-in, 10-min evening stroll along South Queensferry Harbour. Forth Rail Bridge (1890 UNESCO) glows red. One of Scotland's great engineering icons, child stunned by scale.",
                    link:  "https://www.premierinn.com"
                },
                {
                    time:  "17:00",
                    title: "South Queensferry Harbour Walk",
                    desc:  "Historic harbour village beneath 3 Forth Bridges—3 different engineering eras: 1890 rail (UNESCO), 1964 road, 2017 cable-stay.",
                    icon:  "bridge",
                    loc:   "EH30 4DH",
                    duration: "30 min",
                    cost:  "Free",
                    famous: "Forth Rail Bridge took 4,600 workers, 7 years. More steel than Eiffel Tower. So large, painting considered never-ending—hence phrase 'like painting Forth Bridge' for endless job.",
                    do:    "Count 3 bridges with Kabir—rail (red, 1890), road (1964), new Queensferry (2017). Walk harbour for best frame. Evening light on red rail bridge magnificent.",
                    photoSpot: "Harbour path—all 3 bridges one frame. Red rail bridge dusk with orange light.",
                    link:  "https://maps.app.goo.gl/SouthQueensferry"
                }
            ]
        },

        {
            // ── Day 6 ──
            day:   6,
            date:  "May 3",
            title: "Edinburgh — The Capital",
            route: "South Queensferry → Edinburgh City → South Queensferry",

            hotel:     "Premier Inn, South Queensferry",
            hotelLink: "https://www.premierinn.com",
            hotelLoc:  "EH30 9SQ",

            grocery:    "Lidl Nicolson Street, Edinburgh",
            groceryLoc: "EH8 8DH",

            driving: {
                km:       25,
                time:     "30 min to city centre",
                warnings: "Edinburgh parking expensive & stressful. Use St Giles NCP (EH1 1PX) or Park & Ride from South Queensferry.",
                fuelStop: "Fill at South Queensferry tonight for tomorrow's airport run"
            },

            meals: {
                breakfast: [
                    { name: "Premier Inn (Included)", cost: "Included", tag: "🌅 Included", desc: "Eat at hotel before city", link: "" }
                ],
                lunch: [
                    { name: "Museum Brasserie, National Museum", cost: "£10-14pp", tag: "🏛️ On-Site", desc: "Inside museum for convenience", link: "" }
                ],
                dessert: [
                    { name: "Mary's Milk Bar, Grassmarket", cost: "£4-6pp", tag: "🍦 Classic", desc: "Scottish ice cream institution", link: "" }
                ],
                dinner: [
                    { name: "Kismot, Nicolson Street", cost: "£12-16pp", tag: "🍛 Best Curry", desc: "Bold & adventurous Indian", link: "" }
                ]
            },

            stops: [
                {
                    time:  "09:30",
                    title: "Forth Bridges Morning View",
                    desc:  "Final morning look at 3 bridges from South Queensferry before Edinburgh. Morning light on red rail bridge different from last evening—worth 15 minutes.",
                    icon:  "bridge",
                    duration: "15 min",
                    cost:  "Free",
                    do:    "Count 3 bridges with Kabir again. Morning light turns rail bridge deeper red-orange.",
                    photoSpot: "Harbour path looking east—rail bridge framed by village buildings in morning light.",
                    link:  ""
                },
                {
                    time:  "10:30",
                    title: "National Museum of Scotland",
                    desc:  "One of great free museums of world—world-class exhibitions across science, natural history, technology, Scottish history, completely free. Free indoor playground with extraordinary exhibits.",
                    icon:  "museum",
                    loc:   "EH1 3DR",
                    duration: "3 hrs",
                    cost:  "FREE",
                    famous: "Dolly the Sheep—world's first cloned mammal (1996). Lewis Chessmen, Viking hoard, finest natural history collections in Europe. Completely free.",
                    do:    "Start Animal World (Level 1)—full-size T-Rex skeleton right at entrance. Millennium Clock in main hall, waits for hour—mechanical puppet theatre show. End in Imagine interactive children's gallery.",
                    eat:   "Museum Brasserie or Mosque Kitchen 3 mins on Nicolson St (far better value).",
                    photoSpot: "Grand Gallery atrium—look straight up, extraordinary. Rooftop terrace has Edinburgh Castle views. Kabir next to T-Rex.",
                    hack:  "Clock performs on hour from 11 AM. Time arrival in main hall—only runs minutes, children transfixed. Start TOP floor (work down) to beat crowds going up from level 1.",
                    kabirInteractive: "Start Animal World—full-size T-Rex at entrance. Find Millennium Clock for hour—puppet show. End in Imagine interactive gallery.",
                    link:  "https://www.nms.ac.uk"
                },
                {
                    time:  "14:00",
                    title: "Calton Hill",
                    desc:  "Best free panoramic view of Edinburgh—castle, Arthur's Seat, Firth of Forth, whole city one sweep. Easy 10-min walk from city centre.",
                    icon:  "mountain",
                    loc:   "EH7 5AA",
                    duration: "40 min",
                    cost:  "Free",
                    famous: "National Monument built 1826—Edinburgh tribute to Napoleonic Wars dead. Ran out money after 12 columns. Edinburgh never finished. Locals call 'Edinburgh's Disgrace'—but also love it.",
                    do:    "Walk up from Waterloo Place (10 mins, gentle hill). Find Nelson Monument, walk around National Monument (unfinished Greek columns). 360 degree view.",
                    legend: "Meant to be like Parthenon in Athens but ran out money after 12 columns. Unfinished 200 years.",
                    photoSpot: "12 unfinished columns with Edinburgh Castle behind—quintessential city shot. Hill edge looking west toward castle & Old Town.",
                    hack:  "Much quieter than Arthur's Seat, 10 mins vs 45. View comparable. Best choice with child.",
                    link:  "https://maps.app.goo.gl/CaltonHill"
                },
                {
                    time:  "15:30",
                    title: "Victoria Street — Diagon Alley",
                    desc:  "Curved, colourful cobbled street inspired JK Rowling's Diagon Alley—shops stacked curve in jewel colours, each different personality.",
                    icon:  "shop",
                    loc:   "EH1 2HU",
                    duration: "30 min",
                    cost:  "Free",
                    famous: "JK Rowling wrote Harry Potter at Elephant House café nearby. Victoria Street's curve & stacked coloured shopfronts widely cited as direct inspiration for Diagon Alley.",
                    do:    "Tell Kabir he's walking real Diagon Alley—JK Rowling wrote Harry Potter in Edinburgh, walked street regularly. Joke shop (not tourist trap like Harry Potter stores) more fun & cheaper.",
                    photoSpot: "TOP of street looking down curve—all coloured shopfronts visible once. Wide angle essential.",
                    hack:  "'Official' Harry Potter shop tourist trap—overpriced. Joke shop & independent toy shops more fun, far cheaper.",
                    kabirInteractive: "Walking real Diagon Alley.",
                    link:  "https://maps.app.goo.gl/VictoriaStreet"
                },
                {
                    time:  "18:00",
                    title: "Farewell Curry — Nicolson Street",
                    desc:  "Edinburgh's famous curry corridor—best Indian restaurant concentration in Scotland. Celebration dinner: last night of trip, best Indian food since Amsterdam.",
                    icon:  "food",
                    duration: "1.5 hrs",
                    cost:  "£10-16pp",
                    famous: "Edinburgh best Indian food in Scotland by significant margin. Nicolson Street 30-year curry destination.",
                    do:    "Choose between Kismot (bold & adventurous), Mother India Café (home-style tapas), Mosque Kitchen (legendary budget). All within 200 metres on same street.",
                    hack:  "Pre-theatre menu before 6:30 PM saves ~30%. Kismot worth booking—fills up. Mosque Kitchen never needs booking.",
                    link:  "https://maps.app.goo.gl/NicolsonStreet"
                }
            ]
        },

        {
            // ── Day 7 ──
            day:   7,
            date:  "May 4",
            title: "Departure Day — Bank Holiday",
            route: "South Queensferry → Edinburgh Airport → Amsterdam",

            hotel:     "End of Trip",
            hotelLink: "",
            hotelLoc:  "",

            grocery:    "M&S Simply Food, Edinburgh Airport",
            groceryLoc: "EH12 9DN",

            driving: {
                km:       15,
                time:     "15–20 min",
                warnings: "Bank Holiday Monday—rental queues longer. Allow 30 extra minutes. Fill at Tesco South Queensferry tonight (May 3rd).",
                fuelStop: "Tesco South Queensferry"
            },

            meals: {
                breakfast: [
                    { name: "Premier Inn (Included)", cost: "Included", tag: "🌅 Included", desc: "Final breakfast at hotel", link: "" }
                ],
                lunch: [
                    { name: "Edinburgh Airport — Wagamama", cost: "£10-14pp", tag: "✈️ Airport", desc: "Quick bite before flight", link: "" }
                ],
                dinner: [
                    { name: "Home 🏠", cost: "Free!", tag: "🎉 Back Home", desc: "Amsterdam awaits", link: "" }
                ]
            },

            stops: [
                {
                    time:  "08:00",
                    title: "South Queensferry — Final Morning Walk",
                    desc:  "One final coffee by harbour under Forth Bridge. Proper bookend to trip.",
                    icon:  "coffee",
                    duration: "30 min",
                    cost:  "Free",
                    do:    "Coffee from harbour café. Last photo of Forth Rail Bridge. Tell Kabir where he's been—Loch Lomond, Glencoe, Harry Potter bridge, Skye's fairy glen, Loch Ness, Edinburgh. Won't fully understand until older.",
                    photoSpot: "Forth Rail Bridge sunrise—red paint glows in morning light.",
                    link:  ""
                },
                {
                    time:  "09:30",
                    title: "Rental Return & Check In",
                    desc:  "Return rental car at Edinburgh Airport, check in for Amsterdam flight.",
                    icon:  "plane",
                    duration: "1.5 hrs buffer",
                    cost:  "Pre-paid",
                    hack:  "CRITICAL: (1) Fill petrol evening before at Tesco South Queensferry—airport fuel 20p+/litre more. (2) Photograph fuel gauge & mileage before handing back. (3) May 4 Bank Holiday—rental return & security queues longer. Allow min 30 extra minutes. (4) Confirm drop-off Edinburgh AIRPORT, not city centre.",
                    link:  ""
                },
                {
                    time:  "12:00",
                    title: "Flight to Amsterdam",
                    desc:  "Homeward bound. Scotland behind you. Highlands, Skye, Loch Ness, Edinburgh will stay considerably longer.",
                    icon:  "plane",
                    duration: "~2 hrs",
                    cost:  "Pre-paid",
                    link:  ""
                }
            ]
        }
    ]
};