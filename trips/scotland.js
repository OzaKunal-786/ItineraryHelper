window.TRIPS = window.TRIPS || {};

window.TRIPS.scotland = {
    id: "scotland",
    name: "Scotland",
    emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    subtitle: "Highland & Skye Family Loop",
    dates: "Apr 28 – May 4, 2026",
    gradient: "blue",

    emergency: {
        numbers: [
            { label: "Police / Fire / Ambulance", value: "999", icon: "phone" },
            { label: "Non-Emergency Police", value: "101", icon: "shield" },
            { label: "NHS 24 Scotland", value: "111", icon: "heart-pulse" },
            { label: "AA Breakdown", value: "0800 88 77 66", icon: "car-burst" },
            { label: "RAC Breakdown", value: "0330 159 1111", icon: "car-burst" }
        ],
        hospitals: [
            { name: "Belford Hospital, Fort William", loc: "PH33 6BS", phone: "01397 702481" },
            { name: "Broadford Hospital, Skye", loc: "IV49 9AA", phone: "01471 822491" },
            { name: "Raigmore Hospital, Inverness", loc: "IV2 3UJ", phone: "01463 704000" },
            { name: "Royal Infirmary Edinburgh", loc: "EH16 4SA", phone: "0131 536 1000" }
        ],
        apps: ["RingGo", "JustPark", "what3words", "Google Maps (offline)", "Met Office Weather"]
    },

    hacks: [
        { icon: "📲", title: "Parking Apps", text: "Download RingGo and JustPark before leaving Edinburgh Airport. Set them up fully — most Highland car parks use these instead of cash or card machines." },
        { icon: "⛽", title: "Petrol Strategy", text: "Fill up in cities. Prices spike 15-20p/litre in remote Highlands and on Skye. Fill at Fort William Morrisons before heading to Skye — last cheap fuel for days." },
        { icon: "🛣️", title: "Single Track Roads", text: "Pull into passing places (white diamond signs) to let cars pass. Never stop IN the passing place to look at views — these are for pulling aside only." },
        { icon: "💧", title: "Water", text: "Scottish tap water is world-class. Don't buy bottles. Refill at every stop." },
        { icon: "📶", title: "Signal Warning", text: "No mobile signal in much of the Highlands and Skye. Download Google Maps offline for every area before each day's drive." },
        { icon: "🥚", title: "Eggetarian Scotland", text: "Indian food is almost nonexistent outside Edinburgh and Inverness. Stock up on packed lunches from Lidl/Tesco in Fort William or Portree each morning. Your sit-down Indian meals: Taste of India (Fort William), Rajah (Inverness), Nicolson Street curry strip (Edinburgh)." },
        { icon: "🧒", title: "Child in the Car", text: "Keep snacks, a tablet with downloaded shows, and one small surprise toy within reach. Longest drives: Kyleakin to Beauly (2.5 hrs, Day 4) and Beauly to South Queensferry (3 hrs with stops, Day 5)." },
        { icon: "🌧️", title: "Weather Reality", text: "6-12°C, wind, and sudden rain on any late April day. Pack waterproof jackets for all three — including a child-sized one. Waterproof walking shoes for Fairy Pools, Storr, and Talisker Bay." }
    ],

    days: [
        {
            day: 1, date: "Apr 28", title: "The Highland Entrance",
            route: "Stansted → EDI → Loch Lomond → Glencoe → Fort William",
            hotel: "The Base Camp Hotel, Nevis Range",
            hotelLink: "https://www.nevisrange.co.uk/accommodation/hotel/",
            hotelLoc: "PH33 6SQ",
            grocery: "Lidl / Aldi Fort William",
            groceryLoc: "PH33 6PP",
            driving: { km: 210, time: "3h 15m", warnings: "A82 single carriageway after Tarbet — slow lorries common. Allow extra time.", fuelStop: "Fill at Fort William Morrisons or Lidl on arrival" },
            meals: {
                breakfast: [
                    { name: "Ramada Stansted / Airport", cost: "Included or £5-8pp", tag: "⚡ Grab & Go", desc: "Quick breakfast at Ramada before your 08:10 flight. If not included, M&S Simply Food at Stansted terminal is best quality for the price.", link: "" }
                ],
                lunch: [
                    { name: "The Village Rest, Luss", cost: "£8-12pp", tag: "🌟 Best En Route", desc: "Cosy café in Luss village right on Loch Lomond. Excellent soup of the day, cheese toasties, and vegetarian paninis. Perfect warm stop after the drive from Edinburgh. Eggetarian-friendly menu.", link: "https://www.google.com/search?q=Village+Rest+Luss" },
                    { name: "Green Welly Stop Café, Tyndrum", cost: "£6-10pp", tag: "⚡ Quick Stop", desc: "Large roadside café with good veggie soup and sandwiches. More practical than pretty but perfectly adequate. Use the facilities here — last guaranteed clean toilets before Glencoe.", link: "https://www.google.com/search?q=Green+Welly+Stop+Tyndrum" }
                ],
                dinner: [
                    { name: "Taste of India, Fort William", cost: "£12-18pp", tag: "🌟 Must Visit", desc: "The best Indian restaurant on the West Coast of Scotland. Brilliant eggetarian menu — paneer tikka masala, dal makhani, aloo gobi, cheese naan. Very generous portions and child-friendly. On the High Street, 7 mins drive from Base Camp Hotel. Book ahead if possible.", link: "https://www.google.com/search?q=Taste+of+India+Fort+William" },
                    { name: "Café Mango, Fort William", cost: "£10-14pp", tag: "🥚 Great for Eggetarians", desc: "Relaxed café/restaurant with an excellent all-day menu. Brilliant egg dishes, vegetarian wraps, and good paneer options. Much more veggie-friendly than most Highland pubs.", link: "https://www.google.com/search?q=Cafe+Mango+Fort+William" },
                    { name: "Crannog Seafood Restaurant", cost: "£18-25pp", tag: "🍽️ Special Occasion", desc: "Fort William's most acclaimed restaurant, right on the loch. Has a good vegetarian and eggetarian menu alongside the seafood. Worth it if you want to celebrate Day 1 properly.", link: "https://www.google.com/search?q=Crannog+Seafood+Fort+William" }
                ]
            },
            stops: [
                {
                    time: "09:30", title: "Land at EDI & Pick Up Car", icon: "plane-arrival", loc: "EH12 9DN",
                    desc: "Arrival from Stansted. Pick up rental car — Scotland begins the moment you step outside.",
                    duration: "1.5 hrs", cost: "Pre-paid",
                    hack: "Join rental loyalty club online before travel to skip main queue. Photograph all existing car damage BEFORE driving off. First tasks: download RingGo and JustPark and set them up in the car park before you leave.",
                    link: "https://www.google.com/search?q=Edinburgh+Airport+rental+car"
                },
                {
                    time: "12:15", title: "Luss Village, Loch Lomond", icon: "water", loc: "G83 8PA",
                    desc: "A postcard-perfect stone cottage village sitting right on the banks of Loch Lomond. The loch is one of the largest in Britain and the water is impossibly clear.",
                    duration: "30-40 min", cost: "Free (parking £2-3 at Luss South Car Park)",
                    do: "Walk to the pier. Tell Kabir to look for Nessie's cousins in the shallows — the water is clear as glass. The stone cottages with flower gardens make a perfect family photo backdrop.",
                    famous: "Most photographed village on Loch Lomond. Featured in the Scottish TV series 'Take the High Road'.",
                    photoSpot: "📸 Pier with Loch backdrop. Flower-lined village street with Ben Lomond behind.",
                    hack: "Parking fills by 11 AM on summer weekends. Late April is quieter — you should be fine.",
                    link: "https://www.google.com/search?q=Luss+Village+Loch+Lomond"
                },
                {
                    time: "14:30", title: "Green Welly Stop, Tyndrum", icon: "restroom", loc: "FK20 8RY",
                    desc: "The legendary Highland roadside stop — café, shop, and the last guaranteed high-quality facilities before the wilder moors.",
                    duration: "15 min", cost: "Free",
                    do: "Use the facilities here — non-negotiable with a 5-year-old. Grab snacks and a hot drink. Fill your water bottles.",
                    hack: "The Green Welly sells Smidge midge repellent — pick some up now rather than hunting for it later in smaller villages.",
                    link: "https://www.google.com/search?q=Green+Welly+Stop+Tyndrum"
                },
                {
                    time: "15:15", title: "Rannoch Moor", icon: "cloud", loc: "A82 Rannoch Moor",
                    desc: "A vast, treeless, ancient bogland stretching to the horizon in every direction. Genuinely looks like the surface of another planet — or Mars. Zero effort: pull over, step out, and the landscape swallows you.",
                    duration: "10 min", cost: "Free — roadside layby, no car park needed",
                    do: "Simply pull into any of the wide roadside laybys on the A82 and step out. The silence and scale are extraordinary.",
                    famous: "One of Europe's last true wildernesses — the Romans couldn't cross it, Victorian engineers had to float the railway tracks on a bed of brushwood.",
                    legend: "The old West Highland Railway here was literally floated on a raft of brushwood and earth rather than solid ground — tell Kabir he might be driving over a 'sinking train track'.",
                    photoSpot: "📸 Simply turn in any direction — every angle is spectacular. Mountains in the background, endless bog in the foreground.",
                    hack: "Don't miss this. It takes 10 minutes and costs nothing and there is nowhere else on earth quite like it.",
                    link: "https://www.google.com/search?q=Rannoch+Moor+Scotland"
                },
                {
                    time: "16:00", title: "Glencoe — The Three Sisters", icon: "mountain", loc: "PH49 4HX",
                    desc: "Three vast mountain spurs dropping dramatically into the valley floor — the most powerful Highland landscape in Scotland. No walking needed: the view is right from the roadside.",
                    duration: "20 min", cost: "Free — A82 layby or NTS car park (PH49 4LA)",
                    do: "Park at the main A82 layby viewpoint. Simply step out and look up. Ask Kabir if he can see the faces of giants sleeping in the rock walls — the mountains genuinely look like reclining figures when clouds roll in.",
                    famous: "Site of the 1692 Glencoe Massacre — soldiers who had eaten the MacDonald clan's food and slept under their roof killed them in their beds. One of the darkest acts of betrayal in Scottish history.",
                    legend: "The Scots call it 'murder under trust' — the ultimate violation of Highland hospitality. The landscape has felt heavy and mournful ever since.",
                    photoSpot: "📸 Face the mountains from the car park — they fill the entire frame. Moody if cloudy; majestic if clear. Both are spectacular.",
                    hack: "Bagpiper sometimes plays here on weekends. Weekday = bonus if they're there, not guaranteed. The mountains are the show regardless.",
                    link: "https://www.google.com/search?q=Glencoe+Three+Sisters"
                },
                {
                    time: "17:15", title: "Commando Memorial, Spean Bridge", icon: "monument", loc: "PH34 4EG",
                    desc: "Three giant bronze Commandos on a granite plinth, looking out across the Great Glen toward Ben Nevis. Honours the WWII soldiers who trained in these mountains in secret before D-Day. 8 miles before Fort William — do not skip this.",
                    duration: "10 min", cost: "Free — dedicated car park on site",
                    do: "Stand behind the three figures and look in the same direction they face — Ben Nevis and the Great Glen. The scale and silence are stunning. 5 minutes and completely free.",
                    famous: "Unveiled in 1952 by the Queen Mother. The Commandos trained in the brutally cold Highland winters — they wanted conditions worse than anywhere they'd be sent to fight.",
                    photoSpot: "📸 From below looking up at the three figures with sky behind. From behind them facing toward Ben Nevis — one of Scotland's most powerful viewpoints.",
                    hack: "Almost every tourist drives straight past this. Don't. It takes 10 minutes and the setting — especially on a clear evening with Ben Nevis visible — is genuinely moving.",
                    link: "https://www.google.com/search?q=Commando+Memorial+Spean+Bridge"
                },
                {
                    time: "18:15", title: "Arrive — Base Camp Hotel, Nevis Range", icon: "bed", loc: "PH33 6SQ",
                    desc: "Your hotel for the night — at the foot of the Nevis Range ski centre, 7 miles from Fort William town.",
                    duration: "Evening", cost: "Pre-paid",
                    hack: "The hotel is 7 miles from Fort William town. Drive into town for dinner at Taste of India rather than eating at the hotel. Fill up petrol at Fort William Morrisons before returning — you leave early tomorrow.",
                    link: "https://www.nevisrange.co.uk/accommodation/hotel/"
                }
            ]
        },
        {
            day: 2, date: "Apr 29", title: "The Hogwarts Express Day",
            route: "Fort William → Glenfinnan → Skye → Kyleakin",
            hotel: "Saucy Mary's Hostel, Kyleakin",
            hotelLink: "https://www.saucymarys.com/",
            hotelLoc: "IV41 8PH",
            grocery: "Co-op, Kyle of Lochalsh (2 miles over bridge)",
            groceryLoc: "IV40 8AB",
            driving: { km: 145, time: "2h 40m", warnings: "A87 to Skye Bridge — winding and spectacular. Allow extra time to enjoy it.", fuelStop: "Fort William Morrisons — fill before leaving. Skip Skye fuel prices." },
            meals: {
                breakfast: [
                    { name: "Café Mango, Fort William", cost: "£6-10pp", tag: "🌟 Best in Town", desc: "Fort William's best eggetarian breakfast stop. Brilliant eggs on sourdough, avocado, and fresh coffee. 7 mins from Base Camp Hotel. Arrive by 08:45 so you leave for Glenfinnan by 09:15.", link: "https://www.google.com/search?q=Cafe+Mango+Fort+William" },
                    { name: "Base Camp Hotel Breakfast", cost: "£8-12pp", tag: "⚡ Easiest Option", desc: "If included in your rate, eat here and save time. Pack a snack for Kabir to have while waiting for the train at Glenfinnan.", link: "" }
                ],
                lunch: [
                    { name: "Glenfinnan Dining Car", cost: "£7-10pp", tag: "🚂 Most Unique", desc: "A converted Victorian railway carriage permanently parked at Glenfinnan station, serving soup and sandwiches. Incredibly atmospheric — eat in a railway carriage 30 metres from the actual Jacobite steam train. Vegetarian soup always available.", link: "https://www.google.com/search?q=Glenfinnan+Dining+Car" },
                    { name: "Packed Lunch from Fort William Co-op", cost: "£4-5pp", tag: "💰 Best Value", desc: "Buy sandwiches and snacks the night before from Co-op or Lidl in Fort William. Eat on the hillside at Glenfinnan while waiting for the train — genuinely a better experience than any café.", link: "" }
                ],
                dinner: [
                    { name: "Saucy Mary's Restaurant, Kyleakin", cost: "£10-14pp", tag: "⚡ On Your Doorstep", desc: "The restaurant attached to your hostel. Scottish pub food with solid vegetarian options — mac and cheese, vegetable curry, loaded fries. Decent quality, no travel needed at the end of a long day.", link: "https://www.saucymarys.com/" },
                    { name: "Kings Arms Pub, Kyleakin", cost: "£9-13pp", tag: "🍺 Local Favourite", desc: "The village pub in Kyleakin — 2 min walk from the hostel. Classic Scottish pub atmosphere, has vegetarian options on the menu. Good for a pint of local ale alongside dinner.", link: "https://www.google.com/search?q=Kings+Arms+Kyleakin" },
                    { name: "Co-op Meal, Kyleakin Kitchen", cost: "£5pp", tag: "💰 Budget Night", desc: "Stock up at the Co-op in Kyle of Lochalsh (2 miles over the bridge) and use the hostel self-catering kitchen. Good budget option if you're saving for the rest of the trip.", link: "" }
                ]
            },
            stops: [
                {
                    time: "09:15", title: "Depart Fort William", icon: "car-side", loc: "PH33 6HT",
                    desc: "Early departure on the A830 — the Road to the Isles. Fill petrol at Fort William Morrisons before leaving. This is the last cheap fuel for days.",
                    duration: "25 min to Glenfinnan", cost: "Petrol",
                    hack: "Fill at Fort William Morrisons before leaving. Skye fuel is significantly more expensive. Instruct TomTom or Google Maps to Glenfinnan Visitor Centre (PH37 4LT).",
                    link: ""
                },
                {
                    time: "09:40", title: "Glenfinnan Viaduct — The Harry Potter Bridge", icon: "train", loc: "PH37 4LT",
                    desc: "The 21-arch Victorian viaduct made world-famous by Harry Potter — this is where the Hogwarts Express crossed. The train still crosses today, four times a day in summer.",
                    duration: "1.5 hrs", cost: "Free (parking £5 at NTS Visitor Centre)",
                    do: "Immediately take the path UNDERNEATH the viaduct and UP the hill on the LEFT (West Hill Viewpoint). This 15-20 min walk gives you the iconic curved Harry Potter shot. Arrive at the viewpoint by 10:15 — the train crosses at approximately 10:45.",
                    eat: "Glenfinnan Dining Car — converted Victorian railway carriage at the station. Vegetarian soup and sandwiches.",
                    famous: "Confirmed running April 7 – October 24, 2025, seven days a week. April 29 is safe. Train departs Fort William at 10:15 AM and crosses the viaduct approximately 30 minutes later.",
                    legend: "Built in 1901, the viaduct's construction was controversial — a horse died and is rumoured to be buried inside one of the pillars. The foreman denied it. Locals still argue.",
                    photoSpot: "📸 West Hill Viewpoint — the train curves through the frame with mountains behind. Be at the viewpoint by 10:15 for a front position. The train crosses for approximately 90 seconds.",
                    hack: "Arrive at the car park by 09:45 at the absolute latest. Walk immediately to the viewpoint — you need time to climb and find a spot. Bring snacks and a jacket — it's cold and exposed on the hillside.",
                    link: "https://www.google.com/search?q=Glenfinnan+Viaduct+Jacobite+train"
                },
                {
                    time: "11:15", title: "Glenfinnan Monument & Loch Shore", icon: "monument", loc: "PH37 4LT",
                    desc: "The tower at the head of Loch Shiel marks where Bonnie Prince Charlie raised his royal standard in 1745, beginning the last Jacobite uprising. The loch view on a clear day is one of the most beautiful in Scotland.",
                    duration: "20 min", cost: "Free (tower climb £4 — skip with a 5-year-old)",
                    do: "Walk to the loch shore below the monument. The reflections on calm days are extraordinary. Tell Kabir this is where a prince arrived by boat, climbed the hill, and waved his flag hoping all of Scotland would follow him.",
                    famous: "Where Bonnie Prince Charlie began the 1745 Jacobite Rising. It ended in total defeat at Culloden nine months later.",
                    legend: "The figure on top of the monument faces away from where Charlie raised his standard. Nobody can explain why. It has puzzled historians for 200 years.",
                    photoSpot: "📸 From the loch shore looking back at the monument with mountains reflected in still water. Best on a calm morning.",
                    link: "https://www.google.com/search?q=Glenfinnan+Monument"
                },
                {
                    time: "12:30", title: "Drive to Skye — A87 Road to the Isles", icon: "car-side", loc: "A87",
                    desc: "The most scenic two-hour drive in Britain. The A87 through Glen Shiel has mountains coming right down to the roadside. You will pass Eilean Donan Castle on this road — don't stop today. Save it for Day 4 when you leave Skye, as it falls perfectly on your route to Beauly.",
                    duration: "2 hrs to Kyleakin", cost: "Petrol",
                    hack: "The mountains of Glen Shiel crowd the road so dramatically that you feel like you're driving through a canyon. Pull over briefly at the Five Sisters of Kintail viewpoint if you spot it — 5 sisters ridge visible from the road, completely free.",
                    link: ""
                },
                {
                    time: "14:30", title: "Skye Bridge — Crossing to the Island", icon: "bridge", loc: "IV40 8DW",
                    desc: "The bridge to Skye — free to cross, fast, and surprisingly dramatic. The mountains of Skye appear ahead as you approach over the water.",
                    duration: "10 min", cost: "Free",
                    hack: "Cross straight to Kyleakin — your hostel is literally 2 minutes after the bridge on the left.",
                    link: ""
                },
                {
                    time: "15:00", title: "Check In — Saucy Mary's, Kyleakin", icon: "bed", loc: "IV41 8PH",
                    desc: "Your hostel for tonight — right in Kyleakin village, 2 mins from the Skye Bridge.",
                    duration: "Check-in from 4 PM", cost: "Pre-paid",
                    hack: "IMPORTANT: Confirm you have a PRIVATE FAMILY ROOM booked — children cannot stay in shared dormitory rooms with other guests. Call ahead to confirm if unsure.",
                    link: "https://www.saucymarys.com/"
                },
                {
                    time: "16:00", title: "Caisteal Maol Ruins — Evening Walk", icon: "chess-rook", loc: "IV41 8PH",
                    desc: "A ruined medieval castle right on the Kyleakin waterfront — 5-minute walk from the hostel. One of Skye's oldest ruins, standing on a rocky promontory over the sea. Free, no entry needed, and a lovely short evening walk for a tired 5-year-old.",
                    duration: "20 min", cost: "Free",
                    do: "Walk around the outside of the ruins. The view back across the water to the mainland from here is lovely at dusk.",
                    famous: "Legend says a Norwegian princess called Saucy Mary (yes — the hostel is named after her) stretched a chain across the strait here to charge passing ships a toll.",
                    legend: "Saucy Mary was allegedly so beautiful that sailors would pay the toll just for a glimpse of her on the battlements. The hostel is named after her.",
                    photoSpot: "📸 Ruins against the evening sky. View across the strait toward the mainland.",
                    link: "https://www.google.com/search?q=Caisteal+Maol+Kyleakin"
                }
            ]
        },
        {
            day: 3, date: "Apr 30", title: "North Skye — Legends of Giants",
            route: "Kyleakin → Trotternish Loop → Kyleakin",
            hotel: "Skye Backpackers, Kyleakin",
            hotelLink: "https://www.scotlandstophostels.com/our-hostels/skye-backpackers",
            hotelLoc: "IV41 8PH",
            grocery: "Portree Co-op (on loop route)",
            groceryLoc: "IV51 9BW",
            driving: { km: 110, time: "2h 30m total loop", warnings: "Quiraing road is narrow single-track with passing places and a sheer drop on one side. Drive slowly. Tour buses start at 10 AM — leave Kyleakin early.", fuelStop: "Portree — only filling station on north Skye, may have queues" },
            meals: {
                breakfast: [
                    { name: "Hostel Self-Catering Kitchen", cost: "£2-4pp", tag: "💰 Budget Start", desc: "Use the hostel kitchen. Stock up on eggs, bread, and fruit from Co-op the night before. A proper cooked breakfast before a big driving and walking day is worth the small effort.", link: "" },
                    { name: "Packed from Co-op Portree", cost: "£4-6pp", tag: "⚡ Pack Ahead", desc: "Stop at Portree Co-op on your way north (it's on the route) and pick up lunch supplies for the whole day simultaneously. Saves a separate shop later.", link: "" }
                ],
                lunch: [
                    { name: "Café Arriba, Portree", cost: "£8-12pp", tag: "🌟 Best on Skye", desc: "The best café on the entire island for eggetarians — Portree's most beloved independent spot. Brilliant eggs benedict, veggie wraps, homemade soups. Overlooking the harbour. Stop here on your return from the Quiraing/Storr loop when you pass through Portree.", link: "https://www.google.com/search?q=Cafe+Arriba+Portree+Skye" },
                    { name: "Packed Picnic — Co-op Portree", cost: "£4-6pp", tag: "💰 Best Value", desc: "Buy sandwiches and snacks in Portree for a proper outdoor picnic at one of the viewpoints. Eating at the Quiraing car park with that view in front of you is genuinely unforgettable.", link: "" }
                ],
                dinner: [
                    { name: "Scorrybreac, Portree", cost: "£20-28pp", tag: "🌟 Special Occasion", desc: "Portree's finest restaurant — intimate, locally-sourced, with a dedicated vegetarian menu that changes with the season. Book ahead — only 5 tables. Worth every penny if you want one special dinner on Skye.", link: "https://www.google.com/search?q=Scorrybreac+Portree" },
                    { name: "Café Arriba, Portree (evening)", cost: "£10-14pp", tag: "🥚 Eggetarian Perfect", desc: "If you didn't stop at lunch, come for dinner — they serve into the evening and the eggetarian options are outstanding. More relaxed and affordable than Scorrybreac.", link: "https://www.google.com/search?q=Cafe+Arriba+Portree" },
                    { name: "Saucy Mary's or Kings Arms, Kyleakin", cost: "£9-13pp", tag: "⚡ Easy Return Dinner", desc: "After the long day loop, the hostel restaurant or Kings Arms pub on your doorstep is the simplest option. Both have vegetarian choices.", link: "" }
                ]
            },
            stops: [
                {
                    time: "08:00", title: "Depart Kyleakin Early", icon: "car-side", loc: "IV41 8PH",
                    desc: "Early departure essential — Old Man of Storr car park fills by 10 AM and you are 50 minutes from Kyleakin on the south end of the island.",
                    duration: "50 min drive to Storr", cost: "Petrol",
                    hack: "IMPORTANT: Skye Backpackers check-in is from 5 PM. Leave bags at reception (they store them free) and head straight out. Confirm your private family room is pre-booked.",
                    link: ""
                },
                {
                    time: "09:00", title: "Old Man of Storr", icon: "hand-fist", loc: "IV51 9ST",
                    desc: "A dramatic cluster of black basalt pinnacles rising from the Trotternish Ridge — the most iconic view on Skye and one of the most photographed landscapes in Scotland.",
                    duration: "1 hr (up, look, return)", cost: "Free (parking £3/hr at dedicated lot)",
                    do: "Walk 15 minutes up the clear path to the base of the pinnacles. You don't need to summit — the view at 15 minutes is everything. The largest spire is 55 metres tall.",
                    famous: "Featured in Ridley Scott's Prometheus, the BFG film, and countless adverts. The Old Man rock formation was created by a massive landslip tens of thousands of years ago.",
                    legend: "The pinnacles are the petrified fingers of a giant who died and was buried in the hill behind. The Old Man — the tallest pinnacle — is his thumb, still pointing to the sky long after his death.",
                    photoSpot: "📸 From below looking up through the pinnacles with the sea visible behind them on a clear day. Morning mist around the bases is magical.",
                    hack: "Arrive before 9:15 to beat the coaches. Waterproof shoes essential — the path is muddy. Jacket and layer — it is very exposed at altitude.",
                    link: "https://www.google.com/search?q=Old+Man+of+Storr"
                },
                {
                    time: "10:30", title: "Kilt Rock & Mealt Falls", icon: "binoculars", loc: "IV51 9JE",
                    desc: "A sea cliff whose vertical basalt columns look exactly like the pleats of a tartan kilt — with a waterfall falling directly off the cliff face into the ocean 60 metres below.",
                    duration: "20 min", cost: "Free — dedicated car park at viewpoint",
                    do: "Walk 2 minutes from the car park to the fenced viewpoint. The waterfall (Mealt Falls) drops from the top of the cliff straight into the sea. Listen for the boom when it hits the water far below.",
                    famous: "The basalt columns formed from volcanic lava cooling rapidly — the hexagonal shapes are identical to the Giant's Causeway in Northern Ireland, created by the same geological event.",
                    photoSpot: "📸 From the fenced viewpoint — kilt columns on the right, waterfall on the left, open ocean behind. Wide angle captures both.",
                    hack: "Quick stop — maximum 20 minutes. No facilities. The view is extraordinary but compact.",
                    link: "https://www.google.com/search?q=Kilt+Rock+Skye"
                },
                {
                    time: "11:00", title: "Lealt Falls Gorge", icon: "water", loc: "IV51 9JE",
                    desc: "Drive 2 minutes south of Kilt Rock and pull into the small layby on the left — a completely free, dramatic gorge view that almost nobody stops for. A narrow ancient river canyon carved through dark rock, with the sea visible at the end.",
                    duration: "10 min", cost: "Free — roadside layby",
                    do: "Simply pull over and walk to the gorge viewpoint. It takes 5 minutes and is entirely free. One of the best hidden stops on the island.",
                    photoSpot: "📸 Looking down into the gorge from the edge. Dark rock walls, rushing water below, sea framed at the end.",
                    hack: "Almost nobody stops here. The sign is easy to miss — it's 2 minutes south of Kilt Rock on the A855.",
                    link: "https://www.google.com/search?q=Lealt+Falls+Gorge+Skye"
                },
                {
                    time: "11:30", title: "Quiraing Viewpoint", icon: "mountain", loc: "IV51 9LA",
                    desc: "An ancient landslip on the northern face of the Trotternish Ridge that looks like the earth folded and never recovered — tilted, broken, and otherworldly. One of the most photographed views in all of Scotland.",
                    duration: "30-40 min", cost: "Free — small car park on the Quiraing road itself",
                    do: "This is a park-and-stare stop — the view from the car park itself is breathtaking. You don't need to walk anywhere. If energy allows, a 10-minute walk along the ridge gives an even wider panorama.",
                    famous: "Vikings raided Skye repeatedly. Locals hid their cattle on the hidden plateau above the Quiraing — it is invisible from below even today.",
                    legend: "The hidden flat plateau called 'The Table' was used to hide cattle from Viking raiders. Locals could move a whole herd up in the night and the Vikings would search the valley below and find nothing.",
                    photoSpot: "📸 From the car park itself — the whole fractured landscape in one frame. Walk 5 minutes further for the classic shot with sea visible beyond the ridgeline.",
                    hack: "ROAD WARNING: The Quiraing road is a narrow single-track with a sheer drop on one side and passing places. Drive slowly — 15 mph maximum. It looks scary but is completely safe if you go slowly and use passing places properly.",
                    link: "https://www.google.com/search?q=Quiraing+Skye"
                },
                {
                    time: "14:00", title: "The Fairy Glen", icon: "sparkles", loc: "IV51 9XU",
                    desc: "A hidden valley of miniature conical hills, natural stone spirals, and a ruined tower — all shrunk to child scale. Looks like a fairy kingdom. Because according to legend, it is.",
                    duration: "45 min", cost: "Free — small free car park at entrance (postcode IV51 9XU)",
                    do: "Let Kabir lead you through the stone spirals and climb the conical hills — Castle Ewen (the biggest cone) has a small ruined tower on top that he can scramble up. This is the one stop on the trip designed entirely for a 5-year-old.",
                    famous: "Looks like a hobbit village. The conical hills are perfectly natural — formed by water erosion over thousands of years — but the result is so impossibly tidy it seems sculpted by hand.",
                    legend: "This is the capital city of the Skye Fairies. The stone spirals were arranged by fairies as pathways and maps of their kingdom. Do NOT move or rearrange the stones — it is considered very bad luck and ruins it for the next family.",
                    photoSpot: "📸 From the top of Castle Ewen looking down at the spiral patterns below. Wide shot showing the fairy kingdom scale. Kabir running between the miniature hills.",
                    hack: "This is the only stop on the entire trip where Kabir is the main character, not a passenger watching adults take photos. Everywhere else is spectacular for you — this one is spectacular for him.",
                    link: "https://www.google.com/search?q=Fairy+Glen+Skye"
                },
                {
                    time: "17:00", title: "Return to Kyleakin — Skye Backpackers Check-In", icon: "bed", loc: "IV41 8PH",
                    desc: "40-minute drive back south to Kyleakin. Check in to Skye Backpackers — same village as last night.",
                    duration: "Evening", cost: "Pre-paid",
                    hack: "CRITICAL: Children cannot stay in dormitory rooms. Confirm your private family room is confirmed. Skye Backpackers reception: 0599 534 510.",
                    link: "https://skyebackpackers.com/"
                }
            ]
        },
        {
            day: 4, date: "May 1", title: "Fairy Pools, Black Sand & The Drive to Beauly",
            route: "Kyleakin → Fairy Pools → Sligachan → Talisker → (Neist Point if time) → Eilean Donan → Beauly",
            hotel: "Gruinard Guest House, Beauly",
            hotelLink: "https://www.booking.com/hotel/gb/gruinard-guest-house.html",
            hotelLoc: "IV4 7AD",
            grocery: "Tesco / Lidl Inverness — stock up for tomorrow",
            groceryLoc: "IV2 7GD",
            driving: { km: 195, time: "3h 30m (without Neist Point) / 4h 15m (with)", warnings: "A87 from Skye Bridge through Glen Shiel is winding. Take it easy. If doing Neist Point, leave Talisker by 15:15 to reach Beauly by 19:30.", fuelStop: "Invergarry or Inverness — skip Skye fuel prices" },
            meals: {
                breakfast: [
                    { name: "Broadford Bakery, Broadford", cost: "£4-7pp", tag: "🌟 Best on Skye", desc: "Skye's most celebrated bakery — on your route from Kyleakin heading north to the Fairy Pools. Exceptional fresh pastries, morning rolls, and coffee. The cheese scone alone is worth stopping for. Go early — they sell out.", link: "https://www.google.com/search?q=Broadford+Bakery+Skye" },
                    { name: "Hostel Self-Catering Kitchen", cost: "£2-4pp", tag: "💰 Budget", desc: "Quick breakfast in the hostel kitchen. Eggs on toast from supplies you bought at Co-op. Pack a snack for Kabir for the car journey to the Fairy Pools.", link: "" }
                ],
                lunch: [
                    { name: "Sligachan Hotel, Sligachan", cost: "£10-14pp", tag: "🌟 Best En Route", desc: "The pub at Sligachan Hotel — directly on your route between the Fairy Pools and Talisker. The vegetarian burger and mac and cheese are solid. Great atmosphere with the Cuillin mountains visible from every window. Eggetarian-friendly menu.", link: "https://www.google.com/search?q=Sligachan+Hotel+pub+Skye" },
                    { name: "Packed Lunch from Co-op Broadford", cost: "£4-6pp", tag: "💰 Budget Option", desc: "Pick up lunch supplies at Broadford Co-op (on your route). Eat at the Sligachan Bridge with the Cuillin mountains as your backdrop — genuinely one of the best picnic spots in Scotland.", link: "" }
                ],
                dinner: [
                    { name: "Corner on the Square, Beauly", cost: "£10-15pp", tag: "🌟 Local Gem", desc: "Beauly's beloved café/deli — a 3-minute walk from Gruinard Guest House. Fresh, seasonal, locally-sourced food. Excellent vegetarian options and eggetarian-friendly. The only good dinner option within walking distance, and it delivers.", link: "https://www.google.com/search?q=Corner+on+the+Square+Beauly" },
                    { name: "Rajah Indian Restaurant, Inverness", cost: "£12-16pp", tag: "🍛 Indian Craving", desc: "If you're craving Indian food after days of Scottish cuisine, Rajah in Inverness is 20 minutes from Beauly and is the best Indian in the Highlands. Excellent eggetarian menu — dal makhani, paneer dishes, and proper naan.", link: "https://www.google.com/search?q=Rajah+Indian+Restaurant+Inverness" }
                ]
            },
            stops: [
                {
                    time: "09:30", title: "The Fairy Pools", icon: "droplet", loc: "IV47 8TA",
                    desc: "Crystal-clear turquoise pools fed by waterfalls cascading down from the Black Cuillin mountains. The water colour is extraordinary and completely natural — Caribbean blue on sunny days, emerald green on overcast ones.",
                    duration: "1.5 hrs", cost: "Free (parking £5 at dedicated gravel lot)",
                    do: "Walk the flat gravel path along the river. Stop at the first two or three pools — this is more than enough magic without the full 2-hour trek. Kabir can throw pebbles and look for fish. Water is 6°C — feet paddle only!",
                    famous: "Most Instagrammed location in Scotland. The blue colour comes from glacially-filtered spring water running through basalt rock — no filters, no enhancement.",
                    photoSpot: "📸 Third pool has the best waterfall backdrop — frame the Cuillin peaks above. Low angle from the riverbank captures the water colour best.",
                    hack: "Arrive before 11 AM — fills up fast even in late April. Rocky, uneven path — proper waterproof shoes essential. Buggy is impossible on this path.",
                    link: "https://www.google.com/search?q=Fairy+Pools+Skye"
                },
                {
                    time: "12:00", title: "Sligachan Old Bridge", icon: "bridge", loc: "IV47 8SW",
                    desc: "A beautiful old stone bridge with the dramatic black Cuillin mountains reflected in the river below. One of Scotland's most iconic and most painted scenes — and almost no effort to reach. Directly on your route.",
                    duration: "30 min", cost: "Free (park at Sligachan Hotel, IV47 8SW)",
                    do: "Stand on the bridge for the iconic mountain reflection shot. Then — legend demands it — dip your face in the water for 7 seconds.",
                    famous: "The most painted bridge in Scotland. Gateway to the Black Cuillins — the most dramatic mountain range in Britain.",
                    legend: "Dip your face in the water here for exactly 7 seconds and you will be blessed with eternal beauty by the fairy queen Bride. The water is ice cold and the legend is 500 years old. Kabir will absolutely want to try this.",
                    photoSpot: "📸 Low angle from the riverbank — bridge centred, Cuillin peaks reflected perfectly in still water on a calm day.",
                    hack: "Sligachan Hotel pub next door serves good food if you didn't have lunch earlier. The beer garden has the best Cuillin view of any pub in Scotland.",
                    link: "https://www.google.com/search?q=Sligachan+Bridge+Skye"
                },
                {
                    time: "13:30", title: "Talisker Bay", icon: "magnet", loc: "IV47 8SF",
                    desc: "A remote bay with magnetic black sand, a dramatic sea stack, and a massive waterfall crashing down the cliff at the far end. Usually quiet even in season. Genuinely one of the most magical beaches in Scotland.",
                    duration: "1.5 hrs", cost: "Free (small free car park at trailhead, IV47 8SF)",
                    do: "Walk the flat 20-minute farm path to the beach. Bring a small magnet — the black sand contains magnetite and will jump to the magnet dramatically. Walk to the waterfall at the far north end of the beach.",
                    famous: "The sand is black because it contains magnetite — the same mineral used in compasses. Talisker Whisky Distillery is 5 minutes away if interested.",
                    photoSpot: "📸 Waterfall at the north end with the sea stack in the background. Wide shot from the beach looking back at the cliffs. Close-up of black sand with magnet demonstration.",
                    hack: "After rain the path is boggy — waterproof shoes are essential. Wellies are ideal if you have them. The 20-minute walk is completely flat and easy with a child.",
                    link: "https://www.google.com/search?q=Talisker+Bay+Skye"
                },
                {
                    time: "15:30", title: "⭐ OPTIONAL — Neist Point Lighthouse", icon: "lighthouse", loc: "IV55 8WU",
                    desc: "The most westerly point on Skye — dramatic cliffs above the Outer Hebrides, golden late afternoon light, and Scotland's most photographed lighthouse. Only do this if you left Talisker Bay before 15:15.",
                    duration: "40 min", cost: "Free (free car park at road end, IV55 8WU)",
                    do: "THE HONEST CHECK: If you leave Talisker before 15:15 → do Neist Point. If it's 15:30 or later → skip it. Beauly is 2.5 hrs away and a late arrival with an exhausted 5-year-old is not worth the sunset.",
                    famous: "The lighthouse was built in 1909 and is still operational. Minke whales, dolphins, and basking sharks are regularly spotted from these cliffs in spring and summer.",
                    photoSpot: "📸 Stay at the CLIFF TOP — the view over the Outer Hebrides from the top is just as spectacular as the lighthouse itself. The concrete stairs down are steep and exhausting after a long day.",
                    hack: "Do NOT attempt the steep stairs down to the lighthouse with a tired 5-year-old at the end of a long day. The cliff-top view is genuinely just as good and takes 10 minutes.",
                    link: "https://www.google.com/search?q=Neist+Point+Skye"
                },
                {
                    time: "16:30", title: "Depart Skye — Cross the Bridge", icon: "car-side", loc: "IV40 8DW",
                    desc: "Leave Skye via the bridge heading east on the A87. Your time on the island is complete.",
                    duration: "30 mins to Eilean Donan", cost: "Free bridge",
                    hack: "Add 45 minutes to all remaining timings if you did Neist Point.",
                    link: ""
                },
                {
                    time: "17:00", title: "Eilean Donan Castle — The Floating Castle", icon: "chess-rook", loc: "IV40 8DX",
                    desc: "Scotland's most iconic castle sits on a tiny island at the meeting point of three sea lochs — directly on your route to Beauly. Has appeared in more films than almost any other Scottish landmark: Highlander, James Bond, Brave.",
                    duration: "15 min", cost: "Free (view from bridge — no entry needed)",
                    do: "Park just before the bridge on the roadside (IV40 8DX). Walk to the shoreline on the LEFT of the bridge for the 'floating castle' photograph — the castle appears to sit in the middle of the loch with mountains behind. 10 minutes, completely free, one of the best photographs of the entire trip.",
                    famous: "Original castle built in the 13th century, largely destroyed in 1719, and rebuilt between 1911-1932. The rebuild was so faithful that film crews still use it as a medieval fortress today.",
                    photoSpot: "📸 From the shoreline left of the bridge — castle centred in the loch with the three sea lochs behind. Late afternoon light is beautiful here.",
                    hack: "Don't pay £10 to go inside. The exterior photograph from the shore is the whole experience and it is completely free. You will be passing this castle regardless — this adds only 15 minutes.",
                    link: "https://www.google.com/search?q=Eilean+Donan+Castle"
                },
                {
                    time: "19:00", title: "Arrive — Gruinard Guest House, Beauly", icon: "bed", loc: "IV4 7AD",
                    desc: "A beautiful Victorian guesthouse 3 minutes walk from the centre of Beauly village. After three nights in hostels, this is a genuine step up — private family rooms, private bathroom, real beds, free parking, and included breakfast.",
                    duration: "Evening", cost: "Pre-paid",
                    hack: "Dinner at Corner on the Square — 3 min walk from the guesthouse. Or drive 20 mins to Rajah Indian in Inverness for a proper curry. Tomorrow's breakfast is included at the guesthouse.",
                    link: "https://www.booking.com/hotel/gb/gruinard-guest-house.html"
                }
            ]
        },
        {
            day: 5, date: "May 2", title: "The Monster Hunt & The Road South",
            route: "Beauly → Inverness → Loch Ness → Pitlochry → South Queensferry",
            hotel: "Premier Inn, South Queensferry",
            hotelLink: "https://www.premierinn.com",
            hotelLoc: "EH30 9PP",
            grocery: "Lidl or Tesco Inverness — buy packed lunch before Loch Ness",
            groceryLoc: "IV2 7GD",
            driving: { km: 270, time: "3h 40m with stops", warnings: "A9 south has speed cameras — stick to limits. M90 is smooth. Longest driving day — leave Beauly by 08:30 sharp.", fuelStop: "Tesco Inverness or Kinross Services on M90" },
            meals: {
                breakfast: [
                    { name: "Gruinard Guest House (Included)", cost: "Included", tag: "🌟 Included", desc: "Full Scottish breakfast included in your stay. Eat a proper meal before the long drive day — this is the most driving you'll do in one day.", link: "" }
                ],
                lunch: [
                    { name: "Packed Lunch — Buy in Inverness", cost: "£4-6pp", tag: "💰 Best Strategy", desc: "Stop at Lidl or Tesco Inverness (on your route, 20 mins from Beauly) and buy packed lunches for the drive. Eat on the Loch Ness layby with the monster's loch in front of you — a genuinely better lunch experience than any café.", link: "" },
                    { name: "Loch Ness Inn, Drumnadrochit", cost: "£10-14pp", tag: "⚡ En Route Option", desc: "Halfway along Loch Ness, this is the best sit-down option if you want a warm meal. Solid vegetarian options including a good veggie burger and soup. Do NOT eat at the Nessie tourist restaurants in Drumnadrochit — poor quality, tourist-trap pricing.", link: "https://www.google.com/search?q=Loch+Ness+Inn+Drumnadrochit" }
                ],
                dinner: [
                    { name: "The Ferry Tap, South Queensferry", cost: "£10-14pp", tag: "🌟 Local Pub", desc: "South Queensferry's best local pub — right in the historic village, 5 mins walk from the Premier Inn. Has a good vegetarian menu and a proper Scottish pub atmosphere under the shadow of the Forth Bridge.", link: "https://www.google.com/search?q=Ferry+Tap+South+Queensferry" },
                    { name: "Beefeater, South Queensferry", cost: "£10-14pp", tag: "🧒 Kids Eat Free", desc: "Next to the Premier Inn. Kids eat free with an adult meal — useful if Kabir has been difficult. Solid vegetarian options and no surprises.", link: "https://www.google.com/search?q=Beefeater+South+Queensferry" }
                ]
            },
            stops: [
                {
                    time: "08:30", title: "Depart Beauly — Sharp", icon: "car-side", loc: "IV4 7AD",
                    desc: "The entire day works only if you leave on time. Whin Park opens at 10 AM and is 20 minutes away — departing at 08:30 gives you time for a coffee and fuel stop in Inverness.",
                    duration: "20 min to Inverness", cost: "Petrol",
                    hack: "Fill petrol at Tesco Inverness (on the A9 approach) before the park. Buy packed lunches here too — Lidl and Tesco are both on the Inverness ring road.",
                    link: ""
                },
                {
                    time: "09:00", title: "Whin Park & Ness Islands, Inverness", icon: "train-subway", loc: "IV3 5SS",
                    desc: "Inverness's brilliant family park on islands in the River Ness, connected by suspension bridges. The Ness Islands Railway (miniature train) is a genuine highlight for a 5-year-old — and the park itself is beautiful, free, and surprisingly large.",
                    duration: "1 hr", cost: "Free park (miniature train £2)",
                    do: "Ride the Ness Islands Railway first — it loops around the island and Kabir can wave at everyone from the carriage. Then explore the suspension bridges between islands and the large climbing frames.",
                    famous: "The islands in the River Ness have been a public park since Victorian times. The miniature railway has been running for decades and is one of the best-loved family attractions in the Highlands.",
                    photoSpot: "📸 Kabir on the miniature train from a low angle. Suspension bridges over the river with trees above. River Ness and the park from the stone bridges.",
                    hack: "Opens at 10 AM. If you arrive before opening, walk the Ness Islands suspension bridges first — free and very pleasant.",
                    link: "https://www.google.com/search?q=Whin+Park+Inverness"
                },
                {
                    time: "10:30", title: "A82 South — Loch Ness Monster Hunt", icon: "dragon", loc: "A82",
                    desc: "The legendary 37km loch — darker and deeper than it looks. The A82 runs right along the western shore the entire length. Keep Kabir scanning the water from his window from the moment you join the road.",
                    duration: "1 hr drive + layby stops", cost: "Free",
                    do: "Drive slowly. Stop at any layby to scan the water. Halfway along, Urquhart Castle ruins appear on the left shore — pull into the roadside layby for a proper look at the ruins from the road. No entry fee needed.",
                    famous: "Loch Ness is 230 metres deep — deeper than the North Sea. It contains more fresh water than all the lakes of England and Wales combined. Nessie was first reported by the Irish monk St Columba in 565 AD.",
                    legend: "The most analysed stretch of water in the world. Multiple sonar sweeps, submarine explorations, and DNA studies have been conducted. The DNA study in 2019 found no evidence of a large unknown animal — but also found evidence of a very large eel species. Kabir can decide.",
                    photoSpot: "📸 Urquhart Castle ruins from the layby — dramatic silhouette against the dark loch. Any layby gives a full loch panorama.",
                    hack: "Skip the Loch Ness Monster Centre in Drumnadrochit — overpriced tourist trap. Binoculars + imagination are more fun. Do NOT pay £15 for Urquhart Castle — the view from the road layby is 80% of the experience.",
                    link: "https://www.google.com/search?q=Loch+Ness+facts"
                },
                {
                    time: "13:00", title: "Pitlochry Fish Ladder", icon: "fish", loc: "PH16 5ND",
                    desc: "A series of stepped pools built into the Pitlochry Dam allowing Atlantic salmon to swim upstream to their spawning grounds. A glass viewing window in an underground tunnel lets you watch salmon resting and moving — completely free.",
                    duration: "30 min", cost: "Free (free car park at dam, PH16 5ND)",
                    do: "Walk to the dam and find the underground viewing tunnel. Check the glass window — salmon are most active April through June so you have an excellent chance. For a child, watching a huge fish suddenly materialise from dark water is genuinely thrilling.",
                    famous: "Over 5,000 salmon pass through the Pitlochry ladder each year on their journey upstream. The dam was controversial when built in 1950 — the fish ladder was the compromise that allowed it to proceed.",
                    photoSpot: "📸 Through the glass viewing window — salmon resting in the current. The dam itself from above with the loch behind.",
                    hack: "The ladder and dam viewpoint are free. The visitor centre charges a small fee — skip it. The fish window is the whole experience and it's completely free.",
                    link: "https://www.google.com/search?q=Pitlochry+Fish+Ladder"
                },
                {
                    time: "16:00", title: "Arrive — Premier Inn, South Queensferry", icon: "bed", loc: "EH30 9PP",
                    desc: "Your Edinburgh-area base for the next two nights. South Queensferry is a charming historic village 9 miles west of Edinburgh city centre, sitting directly beneath the three Forth Bridges.",
                    duration: "Evening", cost: "Pre-paid",
                    hack: "After check-in, take a 10-minute evening stroll along South Queensferry Harbour. The Forth Rail Bridge (1890 UNESCO World Heritage Site) glows red above you. It is one of Scotland's great engineering icons and the child will be stunned by the scale.",
                    link: "https://www.premierinn.com"
                },
                {
                    time: "17:00", title: "South Queensferry Harbour Walk", icon: "person-walking", loc: "EH30 9PP",
                    desc: "The historic harbour village sits directly beneath the three Forth Bridges — three different engineering eras side by side: 1890 rail bridge (UNESCO), 1964 road bridge, and 2017 cable-stay bridge.",
                    duration: "30 min", cost: "Free",
                    do: "Count the three bridges with Kabir — rail (red, 1890), road (1964), new Queensferry Crossing (2017). Walk the harbour path for the best frame. Evening light on the red rail bridge is magnificent.",
                    famous: "The Forth Rail Bridge took 4,600 workers and 7 years to build. It uses more steel than the Eiffel Tower. It is so large that painting it was considered a never-ending task — hence the phrase 'like painting the Forth Bridge' for an endless job.",
                    photoSpot: "📸 From the harbour path — all three bridges in one frame. The red rail bridge at dusk with orange light.",
                    link: "https://www.google.com/search?q=South+Queensferry+Forth+Bridges"
                }
            ]
        },
        {
            day: 6, date: "May 3", title: "Edinburgh — The Capital",
            route: "South Queensferry → Edinburgh City → South Queensferry",
            hotel: "Premier Inn, South Queensferry",
            hotelLink: "https://www.premierinn.com",
            hotelLoc: "EH30 9PP",
            grocery: "Lidl Nicolson Street, Edinburgh",
            groceryLoc: "EH8 9EW",
            driving: { km: 25, time: "30 min to city centre", warnings: "Edinburgh parking is expensive and stressful. Use St Giles NCP (EH1 1PX) near museum or consider Park & Ride from South Queensferry.", fuelStop: "Fill at South Queensferry this evening for tomorrow's airport run" },
            meals: {
                breakfast: [
                    { name: "Premier Inn (Included)", cost: "Included", tag: "✅ Included", desc: "Full cooked breakfast included. Eat well before a big day in the city. You don't need to rush — National Museum opens at 10 AM.", link: "" }
                ],
                lunch: [
                    { name: "Museum Brasserie, National Museum", cost: "£10-14pp", tag: "⚡ Most Convenient", desc: "The restaurant inside the National Museum — good quality for a museum café. Has proper eggetarian hot meals and sandwiches. Convenient so you don't lose momentum mid-museum.", link: "https://www.google.com/search?q=National+Museum+Scotland+cafe" },
                    { name: "Mosque Kitchen, Edinburgh", cost: "£6-8pp", tag: "💰 Edinburgh Icon", desc: "A 3-minute walk from the National Museum on Nicolson Street — Edinburgh's most famous budget institution. Enormous portions of curry, rice, and naan for around £7. Fully halal and outstanding eggetarian options. Has been feeding students and locals for 30 years. Queue moves fast.", link: "https://www.google.com/search?q=Mosque+Kitchen+Edinburgh" },
                    { name: "Peter's Yard, Quartermile", cost: "£8-12pp", tag: "☕ Trendy Café", desc: "Swedish-inspired bakery and café, 10 minutes from the museum. Outstanding for eggetarians — sourdough, Swedish pastries, brilliant eggs on toast, and the best crispbreads in the city. Very trendy and genuinely excellent.", link: "https://www.google.com/search?q=Peters+Yard+Edinburgh" }
                ],
                dessert: [
                    { name: "Mary's Milk Bar, Grassmarket", cost: "£4-6", tag: "🍦 Edinburgh's Best", desc: "Edinburgh's cult gelato bar — small, independent, outstanding quality. Seasonal flavours made daily. Always a queue, always worth it. Near the Grassmarket beneath Edinburgh Castle.", link: "https://www.google.com/search?q=Mary's+Milk+Bar+Edinburgh" },
                    { name: "Lovecrumbs, West Port", cost: "£4-6", tag: "🎂 Most Instagrammable", desc: "Edinburgh's most beautiful cake shop — enormous slices of creative layer cakes in a lovely wood-panelled space. Very Instagrammable, always seasonal, always eggetarian.", link: "https://www.google.com/search?q=Lovecrumbs+Edinburgh" }
                ],
                dinner: [
                    { name: "Kismot, Nicolson Street", cost: "£12-16pp", tag: "🌟 Must Visit", desc: "Edinburgh's most talked-about curry house — bold, punchy flavours unlike anything else in Scotland. Famous for its 'Kismot Killer' challenge (avoid with the child) but the regular menu is outstanding. Paneer dishes and dals are excellent. Book ahead.", link: "https://www.google.com/search?q=Kismot+Edinburgh" },
                    { name: "Mother India Café, Nicolson Street", cost: "£10-14pp", tag: "🍛 Home Style Indian", desc: "Home-style Indian tapas on Nicolson Street — smaller plates of brilliant home-cooked Indian food. Outstanding for eggetarians: aloo tikki, palak paneer, masoor dal. Very family-friendly and warm atmosphere.", link: "https://www.google.com/search?q=Mother+India+Cafe+Edinburgh" },
                    { name: "Mosque Kitchen, Nicolson Street", cost: "£6-8pp", tag: "💰 Best Value", desc: "The same brilliant budget curry for dinner. If you had lunch here, come back — the evening menu is slightly different. For under £8 a head you won't eat better Indian food anywhere in Scotland.", link: "https://www.google.com/search?q=Mosque+Kitchen+Edinburgh" }
                ]
            },
            stops: [
                {
                    time: "09:30", title: "Forth Bridges Morning View", icon: "bridge", loc: "EH30 9PP",
                    desc: "A final morning look at the three bridges from South Queensferry harbour before driving to Edinburgh. The morning light on the red rail bridge is different from last evening — worth 15 minutes.",
                    duration: "15 min", cost: "Free",
                    do: "Count the three bridges one more time with Kabir. Morning light turns the rail bridge a deeper red-orange.",
                    photoSpot: "📸 Harbour path looking east — the rail bridge framed by the village buildings in morning light.",
                    link: "https://www.google.com/search?q=Forth+Rail+Bridge+South+Queensferry"
                },
                {
                    time: "10:30", title: "National Museum of Scotland", icon: "building-columns", loc: "EH1 1JF",
                    desc: "One of the great free museums of the world — world-class exhibitions across science, natural history, technology, and Scottish history, all completely free. Think of this as a free indoor playground with extraordinary exhibits rather than a museum.",
                    duration: "3 hrs", cost: "FREE — no booking needed, just walk in",
                    do: "Start at Animal World (Level 1) — the full-size T-Rex skeleton is right at the entrance. Then find the Millennium Clock in the main hall and wait for the hour — it performs a mechanical puppet theatre show. End in the Imagine interactive children's gallery.",
                    eat: "Museum Brasserie inside, or Mosque Kitchen 3 mins away on Nicolson St (far better value).",
                    famous: "Home to Dolly the Sheep — the world's first cloned mammal (1996). Also houses the Lewis Chessmen, a Viking hoard, and one of the finest natural history collections in Europe. All completely free.",
                    photoSpot: "📸 The Grand Gallery atrium — look straight up, it's extraordinary. The rooftop terrace has Edinburgh Castle views. Kabir next to the T-Rex.",
                    hack: "Millennium Clock performs on the hour from 11 AM. Time your arrival in the main hall accordingly — it only runs for a few minutes and children are transfixed. Start on the TOP floor (work down) to beat the crowds who all go upward from level 1.",
                    link: "https://www.google.com/search?q=National+Museum+Scotland"
                },
                {
                    time: "14:00", title: "Calton Hill", icon: "mountain", loc: "EH7 5AA",
                    desc: "The best free panoramic view of Edinburgh — the castle, Arthur's Seat, the Firth of Forth, and the whole city in one sweep. An easy 10-minute walk from the city centre.",
                    duration: "40 min", cost: "Free",
                    do: "Walk up from Waterloo Place (10 mins, gentle hill). Find the Nelson Monument and walk around the National Monument (the unfinished Greek columns). View is 360 degrees.",
                    famous: "The National Monument was built in 1826 as Edinburgh's tribute to those who died in the Napoleonic Wars. They ran out of money after 12 columns. Edinburgh never finished it. Locals call it 'Edinburgh's Disgrace' — but also rather love it.",
                    legend: "Tell Kabir it was meant to be like the Parthenon in Athens but they ran out of money after just 12 columns. It has sat unfinished for 200 years.",
                    photoSpot: "📸 The 12 unfinished columns with Edinburgh Castle behind — quintessential city shot. From the hill edge looking west toward the castle and Old Town.",
                    hack: "Much quieter than Arthur's Seat and takes 10 minutes vs 45 minutes. The view is comparable. Best choice with a child.",
                    link: "https://www.google.com/search?q=Calton+Hill+Edinburgh"
                },
                {
                    time: "15:30", title: "Victoria Street — Diagon Alley", icon: "wand-magic", loc: "EH1 2JW",
                    desc: "The curved, colourful cobbled street that inspired JK Rowling's Diagon Alley — shops stack up the curve in jewel colours, each with a different personality.",
                    duration: "30 min", cost: "Free",
                    do: "Tell Kabir he is walking through the real Diagon Alley — JK Rowling wrote Harry Potter in Edinburgh and walked this street regularly. The joke shop (not a tourist trap like the Harry Potter stores) is more fun and cheaper.",
                    famous: "JK Rowling wrote Harry Potter at the Elephant House café in nearby Nicholson Street. Victoria Street's curve and stacked coloured shopfronts are widely cited as a direct inspiration for Diagon Alley.",
                    photoSpot: "📸 From the TOP of the street looking down the curve — all the coloured shopfronts visible at once. Wide angle essential.",
                    hack: "The 'official' Harry Potter shop is a tourist trap — overpriced merchandise. The joke shop and independent toy shops on the same street are more fun and far cheaper.",
                    link: "https://www.google.com/search?q=Victoria+Street+Edinburgh"
                },
                {
                    time: "18:00", title: "Farewell Curry — Nicolson Street", icon: "bowl-food", loc: "Nicolson St, EH8",
                    desc: "Edinburgh's famous curry corridor — the best concentration of Indian restaurants in Scotland. This is your celebration dinner: last night of the trip, best Indian food since Amsterdam.",
                    duration: "1.5 hrs", cost: "£10-16pp",
                    do: "Choose between Kismot (bold and adventurous), Mother India Café (home-style tapas), or Mosque Kitchen (legendary budget option). All three are within 200 metres of each other on the same street.",
                    famous: "Edinburgh has the best Indian food in Scotland by a significant margin. The Nicolson Street strip has been a curry destination for 30 years.",
                    hack: "Pre-theatre menu before 6:30 PM saves around 30% at most restaurants. Kismot is worth booking ahead — it fills up. Mosque Kitchen never needs booking.",
                    link: "https://www.google.com/search?q=Nicolson+Street+Edinburgh+Indian+restaurants"
                }
            ]
        },
        {
            day: 7, date: "May 4", title: "Departure Day — Bank Holiday",
            route: "South Queensferry → Edinburgh Airport → Amsterdam",
            hotel: "End of Trip ✈️",
            hotelLink: "#",
            hotelLoc: "EDI Airport",
            grocery: "M&S Simply Food, Edinburgh Airport",
            groceryLoc: "EH12 9DN",
            driving: { km: 15, time: "15-20 min", warnings: "Bank Holiday Monday — rental return queues longer than normal. Allow 30 extra minutes. DO NOT leave petrol until airport — fill at Tesco South Queensferry tonight (May 3rd).", fuelStop: "Tesco South Queensferry — fill tonight before May 4th" },
            meals: {
                breakfast: [
                    { name: "Premier Inn (Included)", cost: "Included", tag: "✅ Included", desc: "Relaxed final breakfast — no rush. Airport is 10 minutes from hotel. Eat well before the flight.", link: "" }
                ],
                lunch: [
                    { name: "Edinburgh Airport — Wagamama", cost: "£10-14pp", tag: "🌟 Best Airport Option", desc: "Best sit-down eggetarian option at Edinburgh Airport. Ramen, gyoza, and pad thai are reliable. Order before your gate is called.", link: "https://www.google.com/search?q=Wagamama+Edinburgh+Airport" },
                    { name: "M&S Simply Food, Airport", cost: "£6-9pp", tag: "💰 Best Value", desc: "Premium meal deal — far better quality than other airport options. Good vegetarian sandwiches, salads, and Kabir-friendly snacks.", link: "" }
                ],
                dinner: [
                    { name: "Home 🏠", cost: "Free!", tag: "🏡 Best Meal", desc: "Amsterdam welcomes you back.", link: "" }
                ]
            },
            stops: [
                {
                    time: "08:00", title: "South Queensferry — Final Morning Walk", icon: "person-walking", loc: "EH30 9PP",
                    desc: "One final coffee by the harbour under the Forth Bridge. A proper bookend to the trip.",
                    duration: "30 min", cost: "Free",
                    do: "Coffee from the harbour café. One last photograph of the Forth Rail Bridge. Tell Kabir where he's been — Loch Lomond, Glencoe, the Harry Potter bridge, Skye's fairy glen, Loch Ness, and Edinburgh. He won't fully understand until he's older.",
                    photoSpot: "📸 Forth Rail Bridge at sunrise — the red paint glows in the morning light.",
                    link: "https://www.google.com/search?q=South+Queensferry+harbour"
                },
                {
                    time: "09:30", title: "Rental Return & Check In", icon: "car-side", loc: "EH12 9DN",
                    desc: "Return rental car at Edinburgh Airport and check in for the Amsterdam flight.",
                    duration: "1.5 hrs buffer", cost: "Pre-paid",
                    hack: "CRITICAL CHECKS: (1) Fill petrol the evening before at Tesco South Queensferry — airport fuel is 20p+/litre more expensive. (2) Photograph the fuel gauge and mileage before handing back the car. (3) May 4th is UK Bank Holiday — rental return and security queues will be longer than a normal Monday. Allow minimum 30 extra minutes. (4) Confirm drop-off is Edinburgh AIRPORT, not city centre branch.",
                    link: "https://www.google.com/search?q=Edinburgh+Airport+car+rental+return"
                },
                {
                    time: "12:00", title: "Flight to Amsterdam ✈️", icon: "plane-departure", loc: "EDI Airport",
                    desc: "Homeward bound. Scotland is behind you. The Highlands, Skye, Loch Ness, and Edinburgh will stay with you considerably longer.",
                    duration: "Flight time ~2 hrs", cost: "Pre-paid",
                    link: ""
                }
            ]
        }
    ]
};
