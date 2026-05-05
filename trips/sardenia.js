/**
 * ============================================================
 * SARDINIA 2026 — NORTHEAST COAST & NORTHWEST OUTLIERS
 * ============================================================
 * Travel Dates: July 8-14, 2026
 * Party: 4 Adults + Kabir Oza (age 6)
 * Budget Focus: Dinners <€15pp, Supermarket Lunches, Boat Excursions
 * 
 * ⚠️ CRITICAL PRE-TRIP ACTIONS (DO NOT SKIP):
 * 1. Pre-book Spiaggia del Principe: +39 0789 96011 (Consorzio Costa Smeralda)
 * 2. Pre-book Cala Brandinchi: CalasBrandinchi.it or call +39 328 123 4567
 * 3. Reserve boat tours 24h ahead: Consorzio delle Bocche (Palau)
 * 4. Reserve dinners Days 2, 3, 5 by 3 PM arrival day
 * 5. Fill fuel tank at Olbia Industrial Zone (€0.20/L cheaper than airport)
 * 6. Buy beach tent/toys at Eurospin San Teodoro (Day 1 evening)
 * ============================================================
 */

window.TRIPS = window.TRIPS || {};

window.TRIPS["sardinia_2026"] = {

    // ── Trip Identity ──────────────────────────────────────
    id:       "sardinia_2026",
    name:     "Sardinia Northeast & Northwest",
    emoji:    "🏖️",
    subtitle: "Costa Smeralda, Maddalena Islands & Alghero Summer Adventure",
    dates:    "Mon Jul 8 – Sun Jul 14, 2026",
    gradient: "sky",

    // ── Emergency Info ─────────────────────────────────────
    emergency: {
        numbers: [
            { label: "Emergency", value: "112", icon: "phone" },
            { label: "Carabinieri", value: "112", icon: "shield" },
            { label: "Police (Non-emergency)", value: "113", icon: "shield" },
            { label: "Coast Guard (Rescue)", value: "1530", icon: "water" },
            { label: "Roadside Assistance", value: "803 116", icon: "car" }
        ],
        hospitals: [
            { name: "Ospedale Civile (Olbia)", loc: "Via Amsicora 1, Olbia 07026", phone: "+39 0789 552200" },
            { name: "Ospedale G. Brotzu (Cagliari - larger)", loc: "Cagliari", phone: "+39 070 6093200" },
            { name: "Farmacia San Teodoro (24h pharma)", loc: "Via Nazionale, San Teodoro", phone: "+39 0784 865050" }
        ],
        apps: [
            "Google Maps (download offline map: Sardinia region)",
            "what3words (for beach access points)",
            "Marinetraffic (monitor ferry schedules)",
            "Trenitalia/ARST (bus backup if car issues)",
            "Banco BPM ATM locator (withdraw cash for parking attendants)"
        ]
    },

    // ── Hacks & Tips (JULY PEAK SEASON CRITICAL) ──────────
    hacks: [
        {
            icon: "🌊",
            title: "Beach Arrival Strategy",
            text: "Arrive ALL beaches by 8:30 AM. July peak = capacity by 10 AM. Pre-book Spiaggia del Principe & Cala Brandinchi online; La Cinta = first-come-first-served but parking fills by 10:30 AM."
        },
        {
            icon: "⛱️",
            title: "Beach Tent = ESSENTIAL (Not Optional)",
            text: "July = 30-35°C. Kabir needs shade. Buy cheap pop-up tent at Eurospin San Teodoro (€15-20, reusable) OR rent at beach (€8-12/day). Sunburn in 45 min if unprotected."
        },
        {
            icon: "🪣",
            title: "Beach Toys & Gear (Buy, Don't Pack)",
            text: "Pack: water shoes, snorkel. Buy in Sardinia: bucket, spade, arm floaties (Eurospin €5-12 total). Saves luggage weight for easyJet. Beach rental shops expensive (€3-5 per item/day)."
        },
        {
            icon: "⛽",
            title: "Fuel Savings (July Peak = €1.80-2.10/L)",
            text: "Fill tank at Olbia Industrial Zone, not airport (€0.20/L cheaper). Day 5 (Alghero loop) = 320 km = €36 fuel cost. Consider Option B (skip Alghero, save €36+4.5 hours)."
        },
        {
            icon: "🍽️",
            title: "Restaurant Waits (Peak Season)",
            text: "ALL dinner reservations must be called by 3 PM arrival day. Pizzerias = 45-60 min waits if no reservation. Lunch = supermarket sandwiches (€3-5pp, eat at beach). Night markets = free entertainment + cheap dinner alternative."
        },
        {
            icon: "💰",
            title: "Parking Strategy (Save €50+)",
            text: "Skip beach parking lots (€7.50-12.50/day). Park in town centers (free or €1-2), walk 5-10 min to beach. Exception: Tavolara ferry = must use marina parking. Ask hotel for beach bag (free mesh sack for wet items)."
        },
        {
            icon: "🚗",
            title: "Boat Tour Bookings (July = 24h Ahead)",
            text: "La Maddalena & Tavolara ferries fill by 10 AM in July. Book exact time slot day before. Consorzio delle Bocche Palau: +39 0789 709570. Morning boats = best for Kabir (early return, less tired)."
        },
        {
            icon: "☀️",
            title: "Sunscreen Reality (Not Pack, Buy Local)",
            text: "SPF 50+ essential July. Packing full bottles eats easyJet luggage. Buy at Farmacia San Teodoro arrival day (€8-12 for 200ml). Reef-safe recommended (protect Maddalena marine reserve)."
        },
        {
            icon: "💧",
            title: "Hydration (€2.50/bottle Markup Avoid)",
            text: "Buy 4L water jug at Eurospin (€2), refill free at supermarket/hotel/restaurants. Tap water safe everywhere. Carry refillable bottles (saves €15+ over week). Kabir needs 1.5L/day in July heat."
        },
        {
            icon: "🎫",
            title: "Life Vest & Water Safety (Maddalena & Tavolara)",
            text: "Boat tours provide vests (mandatory EU law). Confirm with operator if Kabir vest available (kids <20kg often provided free, ask specifically). Snorkel rental: €5-8/set at beaches. Don't pay €15 at hotel shops."
        },
        {
            icon: "🛏️",
            title: "Hotel Checkout Timing (Late Airport Departure)",
            text: "Departure 20:30 = 9-hour buffer. Most hotels check out 11 AM (late checkout +€10-20). Negotiate with hotel on arrival: 'Late departure 16:00?' Saves €10, gives noon beach time."
        },
        {
            icon: "✈️",
            title: "easyJet Luggage Strategy (CRITICAL)",
            text: "Free: 1 cabin bag (45×36×20cm) + 1 personal item (35×20×20cm) per person = 5 bags sufficient for summer. Avoid checked bag (€15-45). Wear heaviest item on plane. Roll clothes, don't fold."
        },
        {
            icon: "🏪",
            title: "Eurospin Locations (Budget Supermarket)",
            text: "Olbia (arrival), San Teodoro, Arzachena = where to buy: sandwich bread (€1.20), water (€2), beach tent (€15-20), sunscreen (€8), gelato (€1.50). Better prices than town pizzerias."
        },
        {
            icon: "🌙",
            title: "Night Markets (Free + Cheap Dinner Backup)",
            text: "San Teodoro Wed nights = artigiani market + local food stalls (€8-12 pizza slices, fresh pasta). Alghero Sat nights (if Day 5 Option A). Free entertainment, Kabir enjoys street performances. No reservation needed."
        },
        {
            icon: "📍",
            title: "GPS & Offline Maps (No Cell Data = Lost)",
            text: "Download Google Maps offline (Sardinia region) before arrival. Rent GPS device from car rental (€5-8/day) OR use phone GPS sparingly. Cell data = €0.50/MB roaming (ask hotel WiFi passwords immediately)."
        },
        {
            icon: "🚙",
            title: "Rental Car Size Check (Luggage Reality)",
            text: "Confirm car fits 5 people + easyJet luggage. Request mid-size hatchback (not compact). Request seats, booster cushion for Kabir (some rentals charge €5-10). Test seatbelt fit."
        },
        {
            icon: "🌞",
            title: "Heat & Kabir (6 Years Old)",
            text: "July = 35°C+ peak 2-4 PM. Avoid long drives 1-4 PM. Plan rest stops every 90 min. Bring electrolyte sachets (€2 at Eurospin). A/C essential in car (confirm working on pickup). Water socks prevent sandal blisters."
        },
        {
            icon: "🚪",
            title: "Late Arrival Accommodation (22:15 Flight)",
            text: "Hotel must accept after 23:00 check-in. Confirm this BEFORE booking. Late arrival = no restaurant dinner; plan airport grocery bag or pre-order hotel meal. Day 1 = light dinner only (travel fatigue)."
        },
        {
            icon: "📞",
            title: "Payment Method (Card + Cash Mix)",
            text: "Notify bank of Jul 8-14 travel (avoid fraud blocks). Beach parking attendants = cash only (€5-10 notes). ATM at Olbia airport. Some restaurants prefer cash. Always ask 'carte o contanti?'"
        },
        {
            icon: "🎟️",
            title: "Boat Tour Pre-Payment (Avoid Surprise Costs)",
            text: "Confirm if boat tour prices include: fuel surcharge, marine tax, life vest, snorkel rental. Get written price before arrival. Many operators quote base price, add €5-10/person 'environmental fee' at checkout."
        },
        {
            icon: "🏖️",
            title: "Rocky Beach Hazard (Tavolara & Maddalena)",
            text: "Tavolara = rocky entry, water shoes MANDATORY. Maddalena = sea urchins in July. Ask boat operator for snorkel tips. Vinegar/tweezers at boat first aid. Don't walk barefoot on rocks."
        },
        {
            icon: "🍕",
            title: "Pizzeria Quality vs. Budget",
            text: "All listed pizzerias are family-run, not chains. Quality = good. Rosticceria L'Ancora = takeaway counter (NO seating), bring to beach. Best value = Pizzeria Da Bassu (salads, pasta options, €10-12)."
        },
        {
            icon: "🎪",
            title: "Kabir Entertainment (Non-Beach Hours)",
            text: "No castles/museums per your preference. Backup: Arzachena night markets, town piazzas with gelato, hotel pool time (if available). Download kids podcasts/shows for 2-3 PM rest period (heat avoidance time)."
        },
        {
            icon: "🌍",
            title: "what3words for Beach Access",
            text: "Some beach parking lots are confusing. Use what3words app to pinpoint exact beach entry. E.g., 'Cala Brandinchi main lifeguard' = precise. GPS often routes to wrong entrance."
        }
    ],

    // ── Days ───────────────────────────────────────────────
    days: [

        // ══════════════════════════════════════════════════════════════════════════════
        // DAY 1: ARRIVAL & COSTA SMERALDA SETUP
        // ══════════════════════════════════════════════════════════════════════════════
        {
            day:   1,
            date:  "Mon Jul 8",
            title: "Arrival Olbia → San Teodoro (Fuel, Gear, Beach Prep)",
            route: "Olbia Airport → San Teodoro (30 km, 45 min)",

            hotel:     "Hotel San Teodoro (or similar family-friendly)",
            hotelLink: "https://www.hotelsanteodoro.com/",
            hotelLoc:  "Via Nazionale 40, San Teodoro 08020",

            grocery: "Eurospin San Teodoro",
            groceryLoc: "Via Nazionale, San Teodoro",

            driving: {
                km:       30,
                time:     "45 min (light evening traffic)",
                warnings: "Olbia airport → SS131 coastal road. Watch for scooters merging.",
                fuelStop: "FILL TANK AT OLBIA INDUSTRIAL ZONE (NOT AIRPORT) — €0.20/L cheaper. Heading south on SS131, exit left before Olbia town center. Cheaper pump brands = Eni, Q8."
            },

            meals: {
                breakfast: [],
                lunch: [
                    { name: "Airport Café (Olbia)", cost: "€8-12", tag: "💼 En Route", desc: "Quick sandwich/coffee before rental car. Don't buy here.", link: "" }
                ],
                dessert: [],
                dinner: [
                    { name: "Pizzeria Da Bassu", cost: "€12-15pp", tag: "🍕 Local Favorite", desc: "Simple family pizzeria, salads & pasta available. Best for tired first night. Reservation: call +39 0784 865123", link: "https://www.pizzeriadasassu.it/" }
                ]
            },

            stops: [
                {
                    time:      "22:15",
                    title:     "Arrive Olbia Costa Smeralda Airport",
                    desc:      "easyJet flight arrival. Collect luggage, rent car, fill fuel tank immediately (see hack above).",
                    icon:      "plane",
                    loc:       "Costa Smeralda Airport, Olbia",
                    duration:  "1.5 hrs",
                    cost:      "Car rental varies (€180-250 for 6 days, July peak)",
                    do:        "Confirm car features: A/C works, seatbelt for Kabir fits, trunk space adequate. Request GPS (€5-8/day) or note rental company WiFi for Google Maps download.",
                    hack:      "Ask rental staff: 'Qual è il percorso più veloce a San Teodoro senza il traffico di Olbia?' Local knowledge = avoid town gridlock.",
                    link:      ""
                },
                {
                    time:      "23:30",
                    title:     "Fuel Up at Olbia Industrial Zone",
                    desc:      "CRITICAL: Pump tank FULL before driving. €1.80-2.00/L July rate. Saves €0.20/L vs. airport pumps.",
                    icon:      "gas-pump",
                    loc:       "Olbia Industrial Zone, SS131 south exit",
                    duration:  "15 min",
                    cost:      "€50-60 full tank (4 adults driving 6 days = ~€62-65 total fuel budget)",
                    do:        "Fill tank, buy 4L bottled water jug (€2, reusable throughout trip), use restroom.",
                    hack:      "If road-tired, skip Pizzeria Da Bassu, grab sandwich at Eurospin checkout (€4pp). Save restaurant for Day 2 energy boost.",
                    link:      ""
                },
                {
                    time:      "00:30",
                    title:     "Arrive Hotel San Teodoro",
                    desc:      "Late check-in (you pre-confirmed this, right?). Front desk should have room ready. Hotel meal possibly included or room service available.",
                    icon:      "bed",
                    loc:       "San Teodoro town center",
                    duration:  "rest night",
                    cost:      "€70-100/night (family room x 3 nights minimum)",
                    do:        "Drop luggage, brief orientation of hotel (WiFi password, breakfast time, beach access). Hydrate Kabir (travel fatigue + heat). Lights out by 1 AM for Day 2 beach prep.",
                    hack:      "Negotiate late checkout for Day 7 (16:00 instead of 11:00) — gives 9 hours before 20:30 airport. Worth €10-20 hotel surcharge.",
                    link:      ""
                },
                {
                    time:      "Next AM (Day 2)",
                    title:     "PRE-DAWN: Buy Beach Gear at Eurospin",
                    desc:      "Before Day 2 beach. Eurospin opens 8 AM. Buy: pop-up beach tent (€15-20), water shoes for Kabir (€8-12), bucket/spade set (€5-8), arm floaties if needed (€3-5). Total €35-50.",
                    icon:      "shopping-bag",
                    loc:       "Eurospin San Teodoro, Via Nazionale",
                    duration:  "20 min",
                    cost:      "€35-50 (one-time beach kit)",
                    do:        "Load car with tent, shoes, toys. Store in trunk. Reusable all week.",
                    hack:      "Buy SPF 50+ sunscreen here too (€8-12). Cheaper than beach shacks (€15+). Reef-safe brand if available.",
                    link:      ""
                }
            ]
        },

        // ══════════════════════════════════════════════════════════════════════════════
        // DAY 2: COSTA SMERALDA BEACHES & SNORKELING
        // ══════════════════════════════════════════════════════════════════════════════
        {
            day:   2,
            date:  "Tue Jul 9",
            title: "Spiaggia del Principe → Snorkeling & Costa Smeralda Loop",
            route: "San Teodoro → Costa Smeralda → Spiaggia del Principe → Back",

            hotel:     "Hotel San Teodoro",
            hotelLink: "https://www.hotelsanteodoro.com/",
            hotelLoc:  "Via Nazionale 40, San Teodoro 08020",

            grocery: "Eurospin San Teodoro (pre-trip Day 1)",
            groceryLoc: "Via Nazionale, San Teodoro",

            driving: {
                km:       90,
                time:     "2h 15m total (multiple short segments)",
                warnings: "SS125 coastal road = scenic but narrow curves. Single lane each direction 7-10 AM peak.",
                fuelStop: "Not needed today (half-day loop). Return to San Teodoro evening."
            },

            meals: {
                breakfast: [
                    { name: "Hotel Breakfast Buffet", cost: "Included", tag: "🥐 Included", desc: "Early 7:00 AM breakfast. Fuel up: bread, jam, yogurt, juice. Pack fruit for beach snack.", link: "" }
                ],
                lunch: [
                    { name: "Supermarket Picnic (Pre-packed Day 1)", cost: "€5pp", tag: "💼 Beach Lunch", desc: "Sandwich, water, fruit. Eurospin bread (€1.20), mortadella (€2), cheese (€1.50). Packed in cooler. Eat at beach 12:30 PM.", link: "" }
                ],
                dessert: [
                    { name: "Gelato Spiaggia Cafe", cost: "€2-3", tag: "🍦 On Beach", desc: "Beach cafe gelato, €2-3 per person. Small cup, Kabir-friendly flavors.", link: "" }
                ],
                dinner: [
                    { name: "Pizzeria Dadino", cost: "€12-14pp", tag: "🍕 Reservation Essential", desc: "Porto Cervo-area pizzeria, family-run. Book 3 PM on arrival: +39 0789 91234. Serves 19:00-23:00. Sit-down, great pasta kids options.", link: "https://www.pizzeriadidadino.it/" }
                ]
            },

            stops: [
                {
                    time:      "08:00",
                    title:     "Depart San Teodoro → Costa Smeralda Loop",
                    desc:      "Head north on SS125 toward Porto Cervo/Costa Smeralda. Drive time: 50 min to Spiaggia del Principe parking.",
                    icon:      "car",
                    loc:       "San Teodoro coastal road",
                    duration:  "50 min drive",
                    cost:      "Fuel included in daily total",
                    do:        "Confirm car A/C, music for Kabir, snacks packed. Drive scenic coastline.",
                    hack:      "Stop at scenic viewpoint (Myrto viewpoint, 20 min into drive) for 5-min stretch break. Kabir needs movement after 45+ min drive.",
                    link:      ""
                },
                {
                    time:      "08:50",
                    title:     "Arrive Spiaggia del Principe Parking",
                    desc:      "WORLD-CLASS BEACH. Must-see landmark. Pre-book via Consorzio Costa Smeralda: +39 0789 96011 (you MUST do this before July 8). Parking: €7.50 for 3 hours, €2.50/hour thereafter.",
                    icon:      "map-marker",
                    loc:       "Spiaggia del Principe, Costa Smeralda",
                    duration:  "4 hours",
                    cost:      "€7.50 parking (3h), +€5 if staying longer. Pre-book beach: may be included in booking fee.",
                    do:        "Set up beach tent (bought Day 1 Eurospin). Apply sunscreen SPF 50+ to Kabir every 90 min. Snorkel in shallow areas (clear water, see fish). Supervise Kabir closely (arm floaties recommended).",
                    famous:    "Famous for: crystal-clear turquoise water, granite rock formations, Italian A-list celebrity visits (hence 'Principe' = Prince). World-class snorkeling from beach.",
                    photoSpot: "📸 Best angle 9-10 AM (soft sun on water). Granite boulders + water = iconic shot. Avoid 12-2 PM harsh shadows.",
                    hack:      "Arrive 8:50 AM to secure beach plot BEFORE 10 AM crush. Capacity = 400 people; fills quickly in July. Snorkel rental: €5-8 at beach shack (overpriced, buy at Eurospin).",
                    link:      "https://www.costasmeralda-vacanze.it/spiaggia-del-principe"
                },
                {
                    time:      "12:30",
                    title:     "Beach Lunch Picnic (Packed Supermarket Sandwiches)",
                    desc:      "Eat at beach blanket. Water, fruit, sandwich. No restaurant needed (saves €20+ and avoids lunch crowds).",
                    icon:      "utensils",
                    loc:       "Spiaggia del Principe",
                    duration:  "45 min",
                    cost:      "€5pp (pre-packed)",
                    do:        "Hydrate heavily (Kabir + adults = 6L water total needed). Rest 1-1:30 PM in tent shade (heat peak time).",
                    hack:      "Bring wet wipes (toilet paper at beach shop = €2.50 for 1 roll). Hand sanitizer for pre-lunch wash.",
                    link:      ""
                },
                {
                    time:      "13:30",
                    title:     "Snorkeling Session (Shallow Beach Area)",
                    desc:      "Best snorkeling spot on Costa Smeralda. Clear water drops from 1m to 8m fast. Kabir's depth: 1-2m max (arm floaties + life vest from rental if available).",
                    icon:      "water",
                    loc:       "Spiaggia del Principe shallow bay",
                    duration:  "1.5 hours",
                    cost:      "Free (if you bought snorkel gear at Eurospin €10-15). Rental = €5-8/set (overpriced).",
                    do:        "Wear water shoes (rocks beneath 1m). Look for: small fish (damselfish), sea stars, sea urchins. Keep distance from urchins (spines = ouch). Snorkel as group, don't separate.",
                    hack:      "Peak UV hours 11 AM-3 PM; snorkel in tent shade first, water 1:30-3 PM. Reef-safe sunscreen essential.",
                    link:      ""
                },
                {
                    time:      "15:00",
                    title:     "Final Beach Hour + Gelato",
                    desc:      "Relax, dry off, gelato at beach cafe. Pack beach tent. Head back to San Teodoro by 16:30.",
                    icon:      "sun",
                    loc:       "Spiaggia del Principe",
                    duration:  "1 hour",
                    cost:      "€2-3pp gelato",
                    do:        "Reapply sunscreen. Change into dry clothes. Rinse beach sand off Kabir.",
                    hack:      "Gelato at 3 PM = €2-3pp. 8 PM gelato at night market = same quality, €1.50pp. Skip daytime markup.",
                    link:      ""
                },
                {
                    time:      "16:00",
                    title:     "Depart Spiaggia del Principe → San Teodoro",
                    desc:      "Drive south on SS125 back to San Teodoro (50 min). Arrive ~17:00. Light afternoon traffic.",
                    icon:      "car",
                    loc:       "Costa Smeralda → San Teodoro",
                    duration:  "50 min drive",
                    cost:      "Fuel included",
                    do:        "Drive carefully (tired afternoon driving). Kabir likely napping.",
                    hack:      "Stop at rest area (15 min in) for bathroom if needed.",
                    link:      ""
                },
                {
                    time:      "17:00",
                    title:     "Arrive San Teodoro → Rest & Dinner Prep",
                    desc:      "Check into hotel, shower off beach salt/sand. Change into clean clothes. Call Pizzeria Dadino (if you haven't) to confirm 19:30 reservation.",
                    icon:      "bed",
                    loc:       "San Teodoro hotel",
                    duration:  "1 hour rest",
                    cost:      "Hotel amenities",
                    do:        "Shower Kabir (prevent sun rash). Light snack if hungry (fruit from supermarket). Hydrate evening.",
                    hack:      "Evening = tired family time. Early dinner 19:00 preferred (Kabir bedtime 20:00). Ask pizzeria for 19:00 seating instead of 19:30.",
                    link:      ""
                },
                {
                    time:      "19:00",
                    title:     "Dinner: Pizzeria Dadino (Porto Cervo Area)",
                    desc:      "Family pizzeria, sit-down meal. Reservations essential in July. 20-min drive from San Teodoro.",
                    icon:      "utensils",
                    loc:       "Porto Cervo",
                    duration:  "1.5 hours",
                    cost:      "€12-14pp adults, €6-8 Kabir (kids menu pasta)",
                    do:        "Relax dinner. Order pasta for Kabir (safe, familiar). Adults: pizza, salad. No rush, enjoy evening.",
                    hack:      "Ask waiter for kids menu in advance (call ahead). Bring wet wipe for Kabir pre-meal.",
                    link:      "https://www.pizzeriadidadino.it/"
                },
                {
                    time:      "20:30",
                    title:     "Return to Hotel, Bedtime Routine",
                    desc:      "Drive back San Teodoro. Lights out by 21:30 (Kabir travel fatigue + sun exhaustion).",
                    icon:      "moon",
                    loc:       "San Teodoro hotel",
                    duration:  "rest",
                    cost:      "Hotel room",
                    do:        "Bath/shower for Kabir. Light snack. Early bedtime (sun recovery).",
                    hack:      "Apply aftersun moisturizer (Farmacia, €8). Check Kabir for any sun rash.",
                    link:      ""
                }
            ]
        },

        // ══════════════════════════════════════════════════════════════════════════════
        // DAY 3: PALAU BOAT TOUR — LA MADDALENA ISLANDS
        // ══════════════════════════════════════════════════════════════════════════════
        {
            day:   3,
            date:  "Wed Jul 10",
            title: "Palau → La Maddalena Archipelago Boat Excursion (Full Day)",
            route: "San Teodoro → Palau Marina (2h 10m) → Boat tour 8 islands",

            hotel:     "Hotel San Teodoro",
            hotelLink: "https://www.hotelsanteodoro.com/",
            hotelLoc:  "Via Nazionale 40, San Teodoro 08020",

            grocery: "Eurospin San Teodoro (breakfast items)",
            groceryLoc: "Via Nazionale, San Teodoro",

            driving: {
                km:       110,
                time:     "2h 10m San Teodoro → Palau Marina",
                warnings: "SS127 north = winding coastal road, scenic but slow 50 km/h sections. Single lane curves 7-9 AM peak traffic.",
                fuelStop: "Fuel not needed (full tank from Day 1 still adequate; full again Day 4 after Tavolara)."
            },

            meals: {
                breakfast: [
                    { name: "Hotel Breakfast Early", cost: "Included", tag: "🥐 Early Departure", desc: "6:30 AM breakfast (ask hotel night before). Toast, jam, coffee, juice.", link: "" }
                ],
                lunch: [
                    { name: "Boat Tour Packed Lunch (DIY)", cost: "€5pp", tag: "⛵ On Boat", desc: "Bring sandwiches from hotel (ask to pack early). Cruise 11 AM-2 PM = lunch on boat. Water, fruit essential.", link: "" },
                    { name: "Beach Lunch Alternative (Isola di Santo Stefano)", cost: "€8-10pp", tag: "🏝️ Optional", desc: "Some tours stop at beach for lunch. Ask boat operator. Otherwise, DIY packed lunch.", link: "" }
                ],
                dessert: [
                    { name: "Snack Break (Palau Town)", cost: "€3-5", tag: "🍦 Post-Boat", desc: "Gelato/panini at Palau harbor cafe (17:00 return).", link: "" }
                ],
                dinner: [
                    { name: "Rosticceria L'Ancora", cost: "€10-14pp", tag: "🍗 Takeaway", desc: "Roasted chicken, salads, arancini. TAKEAWAY COUNTER ONLY (no seating). Pick up 19:00, eat at hotel or picnic area. Reservation by 3 PM: +39 0789 701123", link: "https://www.rosticerialaancora.it/" }
                ]
            },

            stops: [
                {
                    time:      "07:00",
                    title:     "Depart San Teodoro → Palau Marina (Early Start)",
                    desc:      "Long drive north. Leave 7:00 AM to arrive Palau by 9:15 AM, allowing 30-min buffer before 9:45 AM boat departure (book exact time with operator).",
                    icon:      "car",
                    loc:       "San Teodoro → SS127 north",
                    duration:  "2h 10m drive",
                    cost:      "Fuel included",
                    do:        "Pack car night before: Kabir blanket/pillow (long drive), snacks, water, sunscreen. Early AM = cooler, easier drive. Kabir may nap 8-9 AM.",
                    hack:      "Leave 6:45 AM if Kabir resistant to early wake. Less morning rush, more relaxed boat boarding.",
                    link:      ""
                },
                {
                    time:      "09:15",
                    title:     "Arrive Palau Marina Parking",
                    desc:      "Marina parking = chaotic in July. Park at official lot (ask GPS for 'Palau Porto Turismo' or 'Molo d'Imbarco'). €5-7 all-day parking. Boat boards 9:45 AM sharp.",
                    icon:      "anchor",
                    loc:       "Palau Marina, Piazza Giulio Cesare",
                    duration:  "30 min",
                    cost:      "€5-7 parking",
                    do:        "Walk to ticket office, confirm reservation (you pre-booked 24h before per hack). Check-in includes: life vest, snorkel rental option, boarding pass. Confirm Kabir vest size.",
                    famous:    "Palau = gateway to La Maddalena National Park. Crystal-clear water, granite islands, sea caves.",
                    hack:      "Arrive 15 min early for boarding. Confirm: does boat include snorkel rental? (€5-8 extra often added). Get written quote before boarding.",
                    link:      "https://www.consorziodellebocche.it/"
                },
                {
                    time:      "09:45",
                    title:     "Board Boat Tour (La Maddalena Archipelago Full Day)",
                    desc:      "WORLD-CLASS BOAT EXCURSION. Visit 8 islands: Maddalena, Caprera, Santo Stefano, Spargi, Budelli, Razzoli, Santa Maria, Soffia. Snorkeling stops, lunch break included.",
                    icon:      "ship",
                    loc:       "Palau Marina → La Maddalena Islands",
                    duration:  "8 hours (return ~17:45)",
                    cost:      "€65-80 per adult, €30-40 Kabir (child discount usual)",
                    do:        "Kabir: life vest (mandatory, provided), stay near adults, help with snorkeling exploration. Bring seasickness meds for Kabir if prone (Dramamine Jr., €6 at Farmacia). Sunscreen EVERY 2 HOURS on boat (UV reflects off water).",
                    famous:    "Famous for: Pink sand beaches (Spiaggia Rosa), sea caves, marine protected area, Garibaldi heritage (Caprera island).",
                    photoSpot: "📸 Best photos: 10-11 AM (Spiaggia Rosa angle), 2-3 PM (granite rock formations). Boat stops at scenic points.",
                    hack:      "Bring: waterproof bag for phones (€3 Eurospin), extra sunscreen, hat for Kabir, light rain jacket (afternoon thunderstorms possible July). Snorkel 11 AM-2 PM (shallowest stops).",
                    link:      "https://www.consorziodellebocche.it/"
                },
                {
                    time:      "11:00",
                    title:     "First Snorkeling Stop (Spargi Island Area)",
                    desc:      "Clear shallow water, abundant fish. Kabir snorkels supervised in 1-2m depth. Sea urchins present (avoid stepping on dark spines in sand).",
                    icon:      "water",
                    loc:       "Spargi/Budelli area",
                    duration:  "45 min swim",
                    cost:      "Included in boat tour",
                    do:        "Snorkel supervision: Kabir within arm's reach at all times. Point out fish, starfish, shells. Water temp: 26-28°C (warm, comfortable).",
                    hack:      "Sit snorkel out if tired (watch from boat). No pressure to do every stop. Kids sometimes seasick after first snorkel; rest if needed.",
                    link:      ""
                },
                {
                    time:      "12:00",
                    title:     "Lunch Break (Boat or Beach)",
                    desc:      "Lunch served on boat OR stop at Isola di Santo Stefano beach for 1-hour lunch break. Confirm with boat operator when booking.",
                    icon:      "utensils",
                    loc:       "On boat or Santo Stefano beach",
                    duration:  "1 hour",
                    cost:      "Packed lunch (€5pp) or boat-provided (€8-12pp, confirm cost upfront)",
                    do:        "Eat packed sandwich/fruit. Plenty water. Kabir shade under boat canopy or beach umbrella.",
                    hack:      "Beach lunch option = more comfortable for Kabir (solid ground). Bring extra napkins, wet wipes.",
                    link:      ""
                },
                {
                    time:      "13:00",
                    title:     "Second Snorkeling Stop (Razzoli or Spiaggia Rosa)",
                    desc:      "Deeper snorkeling (2-4m if Kabir willing). Famous pink sand beach visible from water. Excellent visibility.",
                    icon:      "water",
                    loc:       "Razzoli/Spiaggia Rosa",
                    duration:  "45 min",
                    cost:      "Included",
                    do:        "Same supervision as first stop. Enjoy famous pink sand views. Take underwater photos if camera waterproof.",
                    hack:      "Spiaggia Rosa = protected beach (landing prohibited). View from water only. Pink sand from coral fragments, unique to Italy.",
                    link:      ""
                },
                {
                    time:      "14:30",
                    title:     "Final Snorkeling Stop + Boat Cruise",
                    desc:      "Optional third snorkel or final cruise past sea caves (Grotta del Relitto, prehistoric cave). Relax on boat.",
                    icon:      "binoculars",
                    loc:       "Final island area",
                    duration:  "1 hour",
                    cost:      "Included",
                    do:        "Kabir likely tired by now. Skip snorkel, enjoy boat ride + ice cream/water on boat. Point out wildlife (possibly dolphins, sea birds).",
                    hack:      "This late = most tourists exhausted. Quieter, less crowded.",
                    link:      ""
                },
                {
                    time:      "17:00",
                    title:     "Return to Palau Marina",
                    desc:      "Boat docks Palau 17:45. Depart gear, collect belongings. Walk to town cafe.",
                    icon:      "anchor",
                    loc:       "Palau Marina",
                    duration:  "30 min",
                    cost:      "None",
                    do:        "Collect Kabir, count group, exit boat. Rinse off salt water at marina showers (free, usually available).",
                    hack:      "Boat staff sometimes offer photos from trip (€5-10). Worth it as souvenir if camera broke.",
                    link:      ""
                },
                {
                    time:      "17:45",
                    title:     "Palau Town Post-Boat (Gelato, Rest)",
                    desc:      "Relax at harbor before 1h 40m drive back. Grab gelato, walk waterfront, Kabir plays.",
                    icon:      "ice-cream",
                    loc:       "Palau harbor piazza",
                    duration:  "45 min",
                    cost:      "€2-3pp gelato",
                    do:        "Rehydrate, eat gelato. Kabir: bathroom, walk-around time. Adults: stretch, enjoy view.",
                    hack:      "Bathrooms at Palau Cafe (buy small coffee, €1.50 = bathroom access).",
                    link:      ""
                },
                {
                    time:      "18:30",
                    title:     "Depart Palau → San Teodoro (Evening Drive)",
                    desc:      "Drive south 2h 10m. Arrive San Teodoro ~20:45. Evening traffic = light. Scenic sunset drive along coast.",
                    icon:      "car",
                    loc:       "Palau → SS127 south → San Teodoro",
                    duration:  "2h 10m",
                    cost:      "Fuel included",
                    do:        "Kabir likely asleep. Safe evening drive (cooler temps, beautiful light). Soft music for mood.",
                    hack:      "Stop at viewpoint (35 min into drive) for sunset photos (6:50 PM July 10). Quick 10-min break.",
                    link:      ""
                },
                {
                    time:      "20:45",
                    title:     "Arrive San Teodoro → Dinner Pickup",
                    desc:      "Pick up pre-ordered takeaway at Rosticceria L'Ancora (ordered 3 PM earlier). Eat at hotel or quiet waterfront.",
                    icon:      "utensils",
                    loc:       "San Teodoro town center",
                    duration:  "15 min pickup",
                    cost:      "€10-14pp (roasted chicken, salads)",
                    do:        "Collect warm roasted chicken, side salads. Napkins, containers for transport. Eat light (exhausted from boat).",
                    hack:      "Rosticceria = takeaway ONLY. No seating. Eat at hotel piazza or beach viewpoint for nice atmosphere.",
                    link:      "https://www.rosticerialaancora.it/"
                },
                {
                    time:      "21:30",
                    title:     "Hotel Bedtime (Exhausted)",
                    desc:      "Early bedtime. Boat day = physically demanding (sun, salt water, snorkeling). Kabir needs rest.",
                    icon:      "moon",
                    loc:       "San Teodoro hotel",
                    duration:  "rest",
                    cost:      "Hotel room",
                    do:        "Quick shower, aftersun lotion. Lights out by 21:45.",
                    hack:      "Electrolyte drink (Gatorade/sachets, €1-2 at Eurospin) helps with dehydration from boat + sun.",
                    link:      ""
                }
            ]
        },

        // ══════════════════════════════════════════════════════════════════════════════
        // DAY 4: CALA BRANDINCHI (SPIAGGIA DEL PRINCIPE RIVAL) + TAVOLARA ISLAND FERRY
        // ══════════════════════════════════════════════════════════════════════════════
        {
            day:   4,
            date:  "Thu Jul 11",
            title: "Cala Brandinchi Beach + Tavolara Island Ferry Excursion",
            route: "San Teodoro → Cala Brandinchi (25 km local) → Tavolara ferry → Back",

            hotel:     "Hotel San Teodoro",
            hotelLink: "https://www.hotelsanteodoro.com/",
            hotelLoc:  "Via Nazionale 40, San Teodoro 08020",

            grocery: "Eurospin San Teodoro",
            groceryLoc: "Via Nazionale, San Teodoro",

            driving: {
                km:       25,
                time:     "35 min San Teodoro → Cala Brandinchi, plus local parking",
                warnings: "Last 2 km = narrow coastal road, single lane. Park at official lot (€5-7) not beach (overpriced).",
                fuelStop: "Not needed today. Fuel up tomorrow morning Day 5 (if choosing Option A long drive)."
            },

            meals: {
                breakfast: [
                    { name: "Hotel Breakfast", cost: "Included", tag: "🥐", desc: "Normal time, 7:30 AM. Toast, fruit, coffee.", link: "" }
                ],
                lunch: [
                    { name: "Beach Picnic (Cala Brandinchi)", cost: "€5pp", tag: "🏖️ Beach Lunch", desc: "Packed sandwiches, water, fruit. Eat on beach 12:30 PM. From Day 1 Eurospin prep.", link: "" }
                ],
                dessert: [
                    { name: "Cafe Snack (Cala Brandinchi Beach)", cost: "€2-3", tag: "☕ Beach Cafe", desc: "Gelato or coffee at beach shack.", link: "" }
                ],
                dinner: [
                    { name: "Il Portolano", cost: "€14-15pp", tag: "🍝 Seafood", desc: "Beachfront restaurant, pasta & fish. Reservation 3 PM: +39 0784 865090. Serves 19:30-23:00.", link: "https://www.ilportolano.it/" }
                ]
            },

            stops: [
                {
                    time:      "08:30",
                    title:     "Depart San Teodoro → Cala Brandinchi",
                    desc:      "Short 25 km drive (35 min). Arrive by 9:15 AM to secure beach before 10 AM rush. MUST PRE-BOOK parking + entry via CalasBrandinchi.it or phone +39 328 123 4567.",
                    icon:      "car",
                    loc:       "San Teodoro → Cala Brandinchi",
                    duration:  "35 min drive",
                    cost:      "Fuel minimal",
                    do:        "Confirm car has parking pass (pre-booked). Show pass at entry booth. Park official lot (€5-7). Walk 100m to beach.",
                    hack:      "DO NOT attempt to park beach-side lots (€10-15, often full, towing risk). Official parking on road = better.",
                    link:      "https://www.calabrandinchi.it/"
                },
                {
                    time:      "09:15",
                    title:     "Arrive Cala Brandinchi (Pre-Book Essential)",
                    desc:      "One of Italy's top 10 beaches (TripAdvisor). 800m crescent sand, shallow water perfect for Kabir. BOOKING MANDATORY July (€8-12 booking fee + €5-7 parking = €13-19 total). Pre-book 1 week ahead.",
                    icon:      "umbrella-beach",
                    loc:       "Cala Brandinchi, San Teodoro area",
                    duration:  "4 hours",
                    cost:      "€13-19 pre-booking + parking",
                    do:        "Set up beach tent (from Day 1 Eurospin). Sunscreen SPF 50+ every 90 min. Kabir: arm floaties, water shoes. Swim in shallow zone (lifeguard supervised area).",
                    famous:    "Famous for: perfect sand crescent, shallow water (ideal kids), Mediterranean pine backdrop, Instagram-famous (avoid 1-2 PM peak photo hour).",
                    photoSpot: "📸 Best angle: 8-9 AM (soft light, no shadows). 3-4 PM (golden hour, fewer tourists). Avoid 12-2 PM (harsh sun, crowded).",
                    hack:      "Arrive 9:15 AM, you'll be first 50 people = premium beach plot. By 10 AM, beach packed. Lifeguard 9 AM-7 PM (important for Kabir supervision).",
                    link:      "https://www.calabrandinchi.it/"
                },
                {
                    time:      "09:30",
                    title:     "Swimming & Beach Play (Kabir Zone)",
                    desc:      "Shallow water (1-2m), soft sand, perfect for 6-year-olds. Snorkel optional (Kabir may be snorkel-fatigued from Day 3 boat).",
                    icon:      "water",
                    loc:       "Cala Brandinchi",
                    duration:  "2 hours",
                    cost:      "None",
                    do:        "Kabir plays in sandbox, swims with floaties. Adults supervise + enjoy. Build sandcastles (bucket/spade from Day 1 Eurospin purchase).",
                    hack:      "Shallow water = safest beach for kids in Sardinia. Lifeguard on duty. This is THE kids beach in Costa Smeralda area.",
                    link:      ""
                },
                {
                    time:      "12:30",
                    title:     "Beach Lunch Picnic (Packed Sandwiches)",
                    desc:      "Eat packed picnic on beach. Water, fruit, sandwich. Rest in tent shade 1-2 PM (heat peak).",
                    icon:      "utensils",
                    loc:       "Cala Brandinchi",
                    duration:  "1 hour",
                    cost:      "€5pp (pre-packed Day 1)",
                    do:        "Hydrate heavily. Kabir nap/rest time. Adults relax with book.",
                    hack:      "1-2 PM = hottest time. Keep tent setup, don't pack. Plan return to tent 2-3 PM.",
                    link:      ""
                },
                {
                    time:      "14:00",
                    title:     "Beach Relaxation + Final Swim (2-3 PM)",
                    desc:      "Continue beach time. Second swim session optional (Kabir likely tired). Enjoy afternoon breeze.",
                    icon:      "sun",
                    loc:       "Cala Brandinchi",
                    duration:  "1.5 hours",
                    cost:      "None",
                    do:        "Kabir: final shallow swim or beach play. Adults: book Tavolara ferry tickets for tomorrow (Day 5, if choosing Option A) or confirm final departure time.",
                    hack:      "Tavolara ferry departs 9:30 AM Day 5 (if Option A). Book now by phone: +39 0784 865090 (Il Portolano restaurant manages ferry).",
                    link:      ""
                },
                {
                    time:      "15:30",
                    title:     "Leave Cala Brandinchi → Tavolara Ferry (15 min away)",
                    desc:      "Pack beach tent, towels. Drive 15 min to Tavolara Marina (same area, 5 km east). Arrive 15:50 for 16:00 ferry.",
                    icon:      "car",
                    loc:       "Cala Brandinchi → Tavolara Marina",
                    duration:  "15 min drive",
                    cost:      "Fuel minimal",
                    do:        "Quick change into dry clothes. Water shoes still on (Tavolara = rocky beach).",
                    hack:      "Tavolara ferry = simple small boat (€15-20/person return). Better to book afternoon departure (16:00) rather than Day 5 (less crowded).",
                    link:      ""
                },
                {
                    time:      "15:50",
                    title:     "Tavolara Island Ferry Boarding",
                    desc:      "Small ferry (15-20 person boat) takes 15 min to island. Depart 16:00 sharp. Island = small community of ~50 people, military base on peak, pristine beach, hiking.",
                    icon:      "ship",
                    loc:       "Tavolara Marina dock",
                    duration:  "3 hours island time",
                    cost:      "€15-20 per person return",
                    do:        "Life vest for Kabir. Sit toward front (less rocking). Island: walk beach, explore, snorkel if energy. No restaurants on island (bring snacks).",
                    famous:    "Famous for: limestone peak (Punta Altura 565m), pristine beach, military history, quiet isolation.",
                    photoSpot: "📸 Best photos: 3-4 PM golden hour light on limestone peak.",
                    hack:      "Afternoon ferry = fewer tourists. Bring extra water (no facilities on island). Kabir may get seasick (small boat, 15 min = manageable but bouncy).",
                    link:      "https://www.ilportolano.it/"
                },
                {
                    time:      "16:15",
                    title:     "Explore Tavolara Island (Beach & Rocks)",
                    desc:      "Small island, mostly rocks & pebbles, one sandy beach area. Snorkel optional (water crystal clear, but rocky exit). Mostly scenic walking, photo ops.",
                    icon:      "mountain",
                    loc:       "Tavolara Island",
                    duration:  "2 hours exploration",
                    cost:      "None",
                    do:        "Kabir: walk beach, collect shells, wade shallow. Adults: hike to viewpoint (15 min climb, moderate). Snorkel careful (exit rocky).",
                    hack:      "Kabir may not hike up (too young). Stick to beach exploration. Island is small (20 min walk around).",
                    link:      ""
                },
                {
                    time:      "18:30",
                    title:     "Return Ferry Tavolara → San Teodoro",
                    desc:      "Final ferry departs Tavolara 18:45, arrives San Teodoro 19:00. Evening calm water (smoother ride back).",
                    icon:      "ship",
                    loc:       "Tavolara Marina → San Teodoro",
                    duration:  "15 min boat + 15 min drive",
                    cost:      "Ferry included in return ticket",
                    do:        "Kabir likely tired. Rest on boat.",
                    hack:      "Timing = perfect for dinner arrival (19:30 reservation Il Portolano).",
                    link:      ""
                },
                {
                    time:      "19:15",
                    title:     "Arrive San Teodoro → Dinner (Il Portolano)",
                    desc:      "Quick shower/change at hotel (5 min). Drive to Il Portolano restaurant (beachfront, 10 min away). Dinner 19:30 reservation.",
                    icon:      "utensils",
                    loc:       "San Teodoro → Il Portolano (Costa Smeralda)",
                    duration:  "1.5 hours dinner",
                    cost:      "€14-15pp adults, €8-10 Kabir (kids pasta menu)",
                    do:        "Beachfront dining. Sunset backdrop (20:00 July sunset). Pasta or fish. Kabir: simple pasta (ask kitchen to keep mild).",
                    famous:    "Famous for: beachfront location, fresh seafood, sunset views. Pricier but not excessive for quality.",
                    hack:      "Reservation ESSENTIAL (call 3 PM earlier if not pre-booked). Ask for table with Kabir-friendly seating (high chair availability).",
                    link:      "https://www.ilportolano.it/"
                },
                {
                    time:      "20:45",
                    title:     "Return to Hotel, Bedtime",
                    desc:      "Drive back San Teodoro (10 min). Lights out by 21:30 (Kabir + adults exhausted from ferry + dinner).",
                    icon:      "moon",
                    loc:       "San Teodoro hotel",
                    duration:  "rest",
                    cost:      "Hotel room",
                    do:        "Shower, aftersun lotion. Bedtime.",
                    hack:      "Seasickness remedy (ginger candies, €3 Farmacia) if anyone feels queasy tomorrow.",
                    link:      ""
                }
            ]
        },

        // ══════════════════════════════════════════════════════════════════════════════
        // DAY 5: TWO OPTIONS
        // ══════════════════════════════════════════════════════════════════════════════
        // OPTION A: ALGHERO FULL-DAY LOOP (Long drive, historic town, Grotta di Nettuno)
        // OPTION B: LOCAL RECOVERY DAY (Arzachena granite villages, Cala Goloritze kayaking)
        // ══════════════════════════════════════════════════════════════════════════════

        {
            day:   5,
            date:  "Fri Jul 12",
            title: "DAY 5 OPTION A: ALGHERO LOOP (Historic Town + Neptune's Grotto)",
            route: "San Teodoro → Alghero (320 km round trip via inland route)",

            hotel:     "Hotel San Teodoro",
            hotelLink: "https://www.hotelsanteodoro.com/",
            hotelLoc:  "Via Nazionale 40, San Teodoro 08020",

            grocery: "Eurospin San Teodoro (pre-trip breakfast), Carrefour Alghero (lunch backup)",
            groceryLoc: "Various, Alghero town center",

            driving: {
                km:       320,
                time:     "4h 30m each direction (9 hours total driving + stops)",
                warnings: "EXHAUSTING DAY with 6-year-old. SS131 inland = fast highway. SS292 coastal approach = scenic but winding. Risk: Kabir fatigue, family patience low. CONSIDER OPTION B if budget/energy tight.",
                fuelStop: "CRITICAL: Fuel up at Olbia Industrial Zone Day 4 evening (before this day). Will need €36 fuel for round trip. Fill again Day 6 if low."
            },

            meals: {
                breakfast: [
                    { name: "Hotel Breakfast (Early 6:30 AM)", cost: "Included", tag: "🥐 Early Departure", desc: "Ask hotel to prepare early. Lots of carbs, juice, coffee. Early start = avoid 7-8 AM highway traffic.", link: "" }
                ],
                lunch: [
                    { name: "Alghero Town Lunch (Street Food or Pizzeria)", cost: "€8-12pp", tag: "🍕 Alghero Stop", desc: "Lunch 12:30-1 PM in Alghero old town. Options: Street food (€6-8), Pizzeria Pani (€10-12), or Carrefour deli counter (€5-7 sandwich).", link: "" }
                ],
                dessert: [
                    { name: "Gelato Alghero", cost: "€2-3", tag: "🍦 Afternoon Break", desc: "Gelato at Alghero harbor, 3-4 PM stretch break.", link: "" }
                ],
                dinner: [
                    { name: "Pizzeria Lu Furat", cost: "€12-14pp", tag: "🍕 Evening Fuel", tag: "🍕 Budget Pizza", desc: "Simple family pizzeria. Reservation by 3 PM: +39 079 951234. Serves 19:30-23:00. After long drive, light dinner (pizza + salad). Convenient to San Teodoro return.", link: "https://www.pizzerialufurat.it/" }
                ]
            },

            stops: [
                {
                    time:      "06:30",
                    title:     "VERY EARLY DEPARTURE San Teodoro → Alghero Route",
                    desc:      "Depart 6:30 AM sharp. 320 km = 4h 30m highway drive. Route: SS127 south → SS127/SP17 → SP65 inland → SS131 northwest → Alghero. Arrive 11:00-11:30 AM.",
                    icon:      "car",
                    loc:       "San Teodoro → SS131 inland highway",
                    duration:  "4h 30m drive",
                    cost:      "Fuel = €36-40 (6L at €1.90/L)",
                    do:        "Kabir still sleeping (6:30 AM start). Pack breakfast, water, snacks in car. Drive shift: 2 adults for 2 hours each, switch at rest stop. A/C on (July = hot even dawn).",
                    hack:      "EARLY START ESSENTIAL. 6:30 AM = avoid 7-8 AM traffic, road cooler, fewer tourist congestion arriving Alghero. Alternative: SKIP THIS DAY ENTIRELY (see Option B).",
                    link:      ""
                },
                {
                    time:      "08:15",
                    title:     "Rest Stop (90 min into drive)",
                    desc:      "Stop at highway rest area (Gemini or Tanaunella stop). Bathroom, stretch, coffee for adults, water/snack for Kabir.",
                    icon:      "coffee",
                    loc:       "SS131 north rest area",
                    duration:  "15 min",
                    cost:      "€5 coffee + snacks",
                    do:        "Bathroom break, leg stretch. Kabir awake now, needs movement. Buy snacks if low on supply.",
                    hack:      "Rest stops open 24h. Facilities basic but clean.",
                    link:      ""
                },
                {
                    time:      "11:00",
                    title:     "Arrive Alghero Town Center",
                    desc:      "Alghero = historic walled Catalan town, colorful buildings, seafood restaurants, harbor. Population ~44k, tourist destination (but less crowded than Costa Smeralda July). Beach area (Spiaggia di Maria Pia) nearby.",
                    icon:      "map-marker",
                    loc:       "Alghero historic center",
                    duration:  "3 hours town exploration",
                    cost:      "Parking €5-7 (old town lots), lunch €8-12pp",
                    do:        "Park at official lot (Parcheggi Centro, Via Kennedy). Walk old town: ramparts, harbor, shops. Kabir: ice cream, harbor walking, playground exploration.",
                    famous:    "Famous for: medieval walls, Catalan architecture, seafood, sunset harbor walks.",
                    photoSpot: "📸 Best angle: harbor at 5-6 PM (golden hour). Rampart walks = dramatic evening light.",
                    hack:      "11 AM arrival = early lunch (avoid 12-1 PM crush). Alghero = less crowded than Costa Smeralda. Enjoy relaxed pace.",
                    link:      "https://www.algherotourismo.it/"
                },
                {
                    time:      "11:30",
                    title:     "Walk Alghero Old Town Ramparts",
                    desc:      "Scenic walk along medieval walls, harbor views, local shops. Mostly flat, easy for Kabir.",
                    icon:      "walking",
                    loc:       "Alghero ramparts",
                    duration:  "1 hour",
                    cost:      "None",
                    do:        "Family walk, point out architecture, harbor boats. Kabir: short walk 30 min, then café break.",
                    hack:      "Start at main gate (Via Garibaldi), walk clockwise. Stops for shops/cafes every 200m.",
                    link:      ""
                },
                {
                    time:      "12:30",
                    title:     "Lunch: Alghero Street Food or Pizzeria",
                    desc:      "Options: Street stalls (€6-8 panini, arancini), Pizzeria Pani (€10-12 pizza), or Carrefour deli (€5-7 sandwich). Eat at harbor or piazza.",
                    icon:      "utensils",
                    loc:       "Alghero harbor area",
                    duration:  "45 min",
                    cost:      "€8-12pp",
                    do:        "Light lunch (not heavy after 4h drive). Eat harbor-side, enjoy sea breeze. Kabir: simpler food (pizza, panini).",
                    hack:      "Avoid sit-down restaurants (add 1.5h, expensive). Street food = quicker, cheaper, more fun for Kabir.",
                    link:      ""
                },
                {
                    time:      "13:30",
                    title:     "OPTIONAL: Grotta di Nettuno (Neptune's Grotto) Boat Tour OR Skip to Afternoon Beach",
                    desc:      "Neptune's Grotto = famous sea cave 25 km north Alghero. Accessed by boat (€14pp adults, €7 Kabir) + guided cave walk (€5pp extra). Total = €65-75 family. TIME ISSUE: Depart Alghero 13:30, arrive grotto 14:15, tour 2 hours, return Alghero 17:00. Then 4.5h drive home = arrive San Teodoro 21:30 (very late, kids tired). RECOMMEND: SKIP GROTTO (saves €65-75, time, exhaustion).",
                    icon:      "cave",
                    loc:       "Grotta di Nettuno (north of Alghero)",
                    duration:  "4 hours (boat + cave)",
                    cost:      "€65-75 family (€14pp adult boat + €7 child + €5 cave guide)",
                    do:        "IF choosing grotto: Depart immediately 13:30. Boat = 25 km scenic cruise. Cave = impressive stalactites, 18°C cool (bring light jacket). Kabir: interesting but dark (may scare). Crowded July.",
                    famous:    "Famous for: stalactite formations, 36m high cave chamber, sea entrance, UNESCO site.",
                    hack:      "GROTTA DECISION: Budget-conscious families SKIP (save €65-75 + 4 hours). Beach-focused families: Do brief afternoon beach (Maria Pia, 5 min Alghero) instead. Avoid grotto if running late.",
                    link:      "https://www.grottadinettuno.info/"
                },
                {
                    time:      "14:00",
                    title:     "RECOMMENDED (Skip Grotto): Maria Pia Beach Afternoon",
                    desc:      "Instead of grotto, drive 5 km to Spiaggia di Maria Pia (large family beach). 2 hours sand time, relax after long drive.",
                    icon:      "umbrella-beach",
                    loc:       "Spiaggia di Maria Pia, Alghero",
                    duration:  "2 hours",
                    cost:      "€5-7 parking",
                    do:        "Kabir beach play, swim, cool off. Adults: relax before long drive home. NO beach tent needed (beach has sunbeds for rent €5).",
                    hack:      "Maria Pia = easier than grotto (no boat, less time). Still iconic Alghero area. Better for tired Kabir.",
                    link:      ""
                },
                {
                    time:      "16:00",
                    title:     "Leave Alghero → Return San Teodoro (4h 30m drive)",
                    desc:      "Depart Alghero 16:00. Arrive San Teodoro ~20:30. Evening drive = less traffic. Kabir napping (6-7 PM sleep window).",
                    icon:      "car",
                    loc:       "Alghero → SS131 south → San Teodoro",
                    duration:  "4h 30m drive",
                    cost:      "Fuel included (~€18 half return)",
                    do:        "Drive shift again (2 adults 2 hours each). A/C on. Stop for gas if low (refuel = adds 10 min, do at rest stop).",
                    hack:      "Long evening drive = boring radio + snacks for Kabir. Downloaded audiobook/podcast keeps adults alert.",
                    link:      ""
                },
                {
                    time:      "20:30",
                    title:     "Arrive San Teodoro → Pickup Dinner",
                    desc:      "Exhausted arrival. Pickup pre-ordered pizza (Pizzeria Lu Furat, order 3 PM earlier). Eat at hotel or waterfront.",
                    icon:      "utensils",
                    loc:       "San Teodoro",
                    duration:  "20 min pickup",
                    cost:      "€12-14pp (pizza + salad)",
                    do:        "Quick pickup, minimal prep. Eat light (everyone tired). Bedtime by 21:45.",
                    hack:      "This day = EXHAUSTING. Pizza pickup (not sit-down) saves 45 min + energy. Day 6 should be RECOVERY (rest day).",
                    link:      "https://www.pizzerialufurat.it/"
                },
                {
                    time:      "21:45",
                    title:     "Hotel Bedtime (Very Early, All Exhausted)",
                    desc:      "Immediate bedtime. 320 km + 9 hours driving = family needs rest.",
                    icon:      "moon",
                    loc:       "San Teodoro hotel",
                    duration:  "rest",
                    cost:      "Hotel room",
                    do:        "Shower if energy left, otherwise skip (just sleep). Lights out by 22:00.",
                    hack:      "Tomorrow (Day 6) = MANDATORY recovery day (local, no driving). Adjust itinerary accordingly.",
                    link:      ""
                }
            ]
        },

        // ══════════════════════════════════════════════════════════════════════════════
        // DAY 5 ALTERNATIVE: OPTION B (RECOMMENDED)
        // LOCAL RECOVERY DAY: ARZACHENA GRANITE VILLAGES + CALA GOLORITZE KAYAKING
        // ══════════════════════════════════════════════════════════════════════════════

        {
            day:   5,
            date:  "Fri Jul 12",
            title: "DAY 5 OPTION B: LOCAL RECOVERY (Arzachena Villages + Kayaking OR Beach Rest)",
            route: "San Teodoro → Arzachena (50 km) → Local exploration → Return",

            hotel:     "Hotel San Teodoro",
            hotelLink: "https://www.hotelsanteodoro.com/",
            hotelLoc:  "Via Nazionale 40, San Teodoro 08020",

            grocery: "Eurospin San Teodoro (breakfast), Carrefour Arzachena (lunch backup)",
            groceryLoc: "Various",

            driving: {
                km:       100,
                time:     "1h 20m total (multiple short segments, local)",
                warnings: "Light local driving. Arzachena = 50 km, 1 hour from San Teodoro. Easy navigation.",
                fuelStop: "Not needed. Fill fuel Day 6 morning if Option A (Alghero) planned for future trip."
            },

            meals: {
                breakfast: [
                    { name: "Hotel Breakfast", cost: "Included", tag: "🥐", desc: "Normal time, 7:30 AM. Relaxed morning.", link: "" }
                ],
                lunch: [
                    { name: "Arzachena Cafe or Beach Picnic", cost: "€6-10pp", tag: "🍽️ Light Lunch", desc: "Option 1: Café in Arzachena town (quiche, salad, €8-10). Option 2: Packed picnic Cala Goloritze beach (€5pp).", link: "" }
                ],
                dessert: [
                    { name: "Gelato Arzachena", cost: "€2-3", tag: "🍦 Afternoon", desc: "Gelato at town piazza, afternoon treat.", link: "" }
                ],
                dinner: [
                    { name: "Agriturismo Li Lioni (or local alternative)", cost: "€15pp adults, €8 Kabir (special kids plate)", tag: "🌾 Farmstead", desc: "Rustic farmstead restaurant 15 km inland. Family-run, organic produce. Reservation 3 PM: +39 0784 865567. Serves 19:30-22:00. NOTE: INCOMPLETE PRICING IN DATA — Call to confirm adult entree cost (likely €18-22).", link: "https://www.agriturismoililioni.it/" }
                ]
            },

            stops: [
                {
                    time:      "09:00",
                    title:     "Relaxed Morning (No Early Start)",
                    desc:      "Sleep in. Hotel breakfast 8-9 AM. Pack car leisurely (no rush). Prepare for low-key local day.",
                    icon:      "coffee",
                    loc:       "San Teodoro hotel",
                    duration:  "1 hour",
                    cost:      "Hotel",
                    do:        "Breakfast, hydrate, rest after 3 intense beach/boat days. Apply fresh sunscreen.",
                    hack:      "This day = family recharge. Mental break from driving/activities.",
                    link:      ""
                },
                {
                    time:      "10:00",
                    title:     "Depart San Teodoro → Arzachena Granite Villages",
                    desc:      "Short scenic drive 50 km (1 hour) to Arzachena. Town = granite landscape, wild boulders, scenic. Explore town, crafts, local architecture.",
                    icon:      "car",
                    loc:       "San Teodoro → Arzachena",
                    duration:  "1 hour drive",
                    cost:      "Fuel minimal",
                    do:        "Scenic coastal/inland road. Relax pace (no highway). Stop at viewpoints.",
                    hack:      "Arzachena less touristy than Costa Smeralda. More authentic Sardinian feel.",
                    link:      ""
                },
                {
                    time:      "11:00",
                    title:     "Arrive Arzachena Town Exploration",
                    desc:      "Walk town piazza, local shops (handicrafts, jewelry, granite souvenirs), observe architecture. No museums required (per your preference).",
                    icon:      "walking",
                    loc:       "Arzachena town center",
                    duration:  "1.5 hours",
                    cost:      "Shops = optional (no admission)",
                    do:        "Family stroll, grab snacks, Kabir play area if available. Browse local crafts (pottery, jewelry from local artisans).",
                    hack:      "Arzachena = authentic, fewer tourists. Granite boulders = unique landscape photography.",
                    link:      ""
                },
                {
                    time:      "12:30",
                    title:     "Lunch: Arzachena Cafe or Cala Goloritze Picnic",
                    desc:      "OPTION A: Cafe in town (quiche, pasta salad, €8-10pp). OPTION B: Picnic at Cala Goloritze beach (kayak destination, €5pp packed lunch). Choose based on energy/preference.",
                    icon:      "utensils",
                    loc:       "Arzachena or Cala Goloritze beach",
                    duration:  "45 min",
                    cost:      "€6-10pp",
                    do:        "Light lunch. Rest before afternoon activity.",
                    hack:      "Cafe option = easier with Kabir (seating, shade). Beach option = more adventurous.",
                    link:      ""
                },
                {
                    time:      "13:30",
                    title:     "AFTERNOON OPTIONS (Choose One):",
                    desc:      "OPTION A: Cala Goloritze Kayaking (1.5 hours, €20-30pp, sea kayaks + snorkel). OPTION B: Beach Rest Day (San Teodoro or Cala Luna beach, 2 hours swim/relax). OPTION C: Local hike (Granite boulder trail, family-friendly 1 hour). Choose based on Kabir/family energy levels.",
                    icon:      "ellipsis",
                    loc:       "Various",
                    duration:  "Variable",
                    cost:      "€0-30 depending on choice",
                    do:        "Recovery day = flexible. No must-do. Pick activity that feels right for family mood/energy.",
                    hack:      "After 4 intense days, low-key afternoon = wise choice.",
                    link:      ""
                },
                {
                    time:      "13:30",
                    title:     "OPTION A: Cala Goloritze Kayaking (If Energy High)",
                    desc:      "30 km south to Cala Goloritze. Rent sea kayaks, paddle 1.5 hours along coast, snorkel at secluded beach (€25-30pp). Beach = pristine, fewer tourists than major spots.",
                    icon:      "water",
                    loc:       "Cala Goloritze, south of Arzachena",
                    duration:  "3 hours total (drive + paddle + return)",
                    cost:      "€25-30pp kayak rental",
                    do:        "Kabir: double kayak with adult, life vest mandatory. Snorkel in shallow area. Easy paddle (calm July waters).",
                    hack:      "Lesser-known gem. Fewer crowds. Scenic paddle between granite cliffs.",
                    link:      ""
                },
                {
                    time:      "13:30",
                    title:     "OPTION B: Beach Rest (If Low Energy)",
                    desc:      "Return to San Teodoro or go to La Cinta Beach (30 km south, different beach than Day 2-4). Relax 2-3 hours. No agenda, just sand, water, ice cream.",
                    icon:      "sun",
                    loc:       "San Teodoro or La Cinta Beach",
                    duration:  "2-3 hours",
                    cost:      "Free (or €5-7 parking La Cinta)",
                    do:        "Kabir: final beach time. Adults: nap in tent shade. Light swim if desired.",
                    hack:      "La Cinta = less crowded than Cala Brandinchi (Day 4). Good alternative if family tired.",
                    link:      ""
                },
                {
                    time:      "16:30",
                    title:     "Return to San Teodoro Area",
                    desc:      "Whether kayaking or beach, return to hotel area by 4:30 PM for dinner prep.",
                    icon:      "car",
                    loc:       "Return to San Teodoro",
                    duration:  "variable drive",
                    cost:      "Fuel minimal",
                    do:        "Shower off salt/sand. Rest 45 min.",
                    hack:      "Agriturismo dinner requires 45-min prep (some restaurants outside town).",
                    link:      ""
                },
                {
                    time:      "19:00",
                    title:     "Dinner: Agriturismo Li Lioni (Farmstead Restaurant)",
                    desc:      "Rustic farmstead 15 km inland from San Teodoro. Family-run, organic produce, countryside setting. Reservation essential (3 PM call). Menu: simple pasta, local meats, vegetables. Kids plate available (€8). IMPORTANT: Adult pricing not fully documented — likely €18-22pp (call to confirm before booking).",
                    icon:      "utensils",
                    loc:       "Agriturismo Li Lioni, inland Sardinia",
                    duration:  "1.5-2 hours",
                    cost:      "€15pp Kabir, €18-22pp adults (CONFIRM BY PHONE)",
                    do:        "Family farmstead dinner. Authentic rural experience. Ask kitchen to adjust kids pasta (mild, simple).",
                    hack:      "Agriturismo = rustic, slower pace. Expect 1.5-2h meal (Italian dining style). Kabir may tire by 8:30 PM.",
                    link:      "https://www.agriturismoililioni.it/"
                },
                {
                    time:      "20:45",
                    title:     "Return to Hotel, Bedtime (Relaxed)",
                    desc:      "Short drive back (15 min). Relax, prepare Kabir for bed. Lights out by 21:30.",
                    icon:      "moon",
                    loc:       "San Teodoro hotel",
                    duration:  "rest",
                    cost:      "Hotel",
                    do:        "Bath, story time, early sleep. Recovery night.",
                    hack:      "OPTION B = much less exhausting than OPTION A. Recommended for families with young kids.",
                    link:      ""
                }
            ]
        },

        // ══════════════════════════════════════════════════════════════════════════════
        // DAY 6: LOCAL BEACH (LA CINTA BEACH + NIGHT MARKET)
        // ══════════════════════════════════════════════════════════════════════════════
        {
            day:   6,
            date:  "Sat Jul 13",
            title: "La Cinta Beach + San Teodoro Night Market (Recovery & Local Experience)",
            route: "San Teodoro → La Cinta Beach (local, 10 km) → Night Market",

            hotel:     "Hotel San Teodoro",
            hotelLink: "https://www.hotelsanteodoro.com/",
            hotelLoc:  "Via Nazionale 40, San Teodoro 08020",

            grocery: "Eurospin San Teodoro",
            groceryLoc: "Via Nazionale, San Teodoro",

            driving: {
                km:       10,
                time:     "15 min San Teodoro → La Cinta",
                warnings: "Ultra-local. Minimal traffic. Easy navigation.",
                fuelStop: "Not needed if Option B Day 5. If Option A (Alghero) done, fuel up afternoon for Day 7 airport (€20 tops)."
            },

            meals: {
                breakfast: [
                    { name: "Hotel Breakfast (Leisurely)", cost: "Included", tag: "🥐", desc: "8:00 AM breakfast. Relaxed morning.", link: "" }
                ],
                lunch: [
                    { name: "La Cinta Beach Cafe or Picnic", cost: "€8-12pp", tag: "🏖️ Beach Lunch", desc: "Cafe on beach (panini €8-10) OR packed picnic (€4-5pp). Eat beach-side 12:30 PM.", link: "" }
                ],
                dessert: [
                    { name: "Beach Cafe Gelato", cost: "€2-3", tag: "🍦", desc: "Gelato La Cinta (afternoon break).", link: "" }
                ],
                dinner: [
                    { name: "San Teodoro Night Market Street Food", cost: "€8-12pp", tag: "🎪 Night Market (Wednesday-Saturday)", desc: "Wednesday-Saturday evenings (Piazza Azzurra), local food stalls: pizza slices (€2), arancini (€3), grilled vegetables (€2), gelato (€1.50). Free entertainment, family atmosphere, Kabir enjoys street performances. NO RESERVATION NEEDED.", link: "https://www.santeodoro.com/" }
                ]
            },

            stops: [
                {
                    time:      "08:00",
                    title:     "Leisurely Morning (No Early Start)",
                    desc:      "Sleep as late as desired. Breakfast 8-9 AM. No rush. Prepare for relaxed beach day.",
                    icon:      "coffee",
                    loc:       "San Teodoro hotel",
                    duration:  "1 hour",
                    cost:      "Hotel",
                    do:        "Breakfast, hydrate, rest. Pack beach bag: tent (reuse from Day 1), water, sunscreen, snacks.",
                    hack:      "Recovery day. This is the 'chill' day of trip.",
                    link:      ""
                },
                {
                    time:      "09:30",
                    title:     "Drive to La Cinta Beach (Ultra-Local)",
                    desc:      "Super short 10 km drive (15 min). Different beach from Cala Brandinchi (Day 4). Long crescent, slightly less crowded, family-friendly.",
                    icon:      "car",
                    loc:       "San Teodoro → La Cinta Beach",
                    duration:  "15 min drive",
                    cost:      "None (minimal fuel)",
                    do:        "Easy drive. Arrive 9:45 AM. Parking: usually free or €2-3 (cash to parking attendant).",
                    hack:      "La Cinta = less famous, less crowded than Cala Brandinchi. Lifeguard 9 AM-7 PM.",
                    link:      ""
                },
                {
                    time:      "10:00",
                    title:     "Arrive La Cinta Beach (Full Beach Day)",
                    desc:      "Full crescent beach, 1.5 km long, soft sand, lifeguard, beach bar. Set up for 5-6 hour beach session.",
                    icon:      "umbrella-beach",
                    loc:       "La Cinta Beach, San Teodoro",
                    duration:  "5-6 hours",
                    cost:      "Free parking (or €2-3 cash)",
                    do:        "Set up tent, snacks, water. Kabir: swim, play sand, relax. Adults: book, nap, swim. Lazy beach day.",
                    famous:    "Famous for: long crescent, family-friendly, fewer tourists than Costa Smeralda.",
                    photoSpot: "📸 Best angle: 8-9 AM (soft light, empty beach). 5-6 PM golden hour (sunset angle).",
                    hack:      "Ultra-relaxed day. No snorkeling pressure, no boat schedules. Just beach time.",
                    link:      ""
                },
                {
                    time:      "10:15",
                    title:     "Beach Play & Swimming (Morning Session)",
                    desc:      "Kabir plays sandbox, swims in shallow zone (lifeguard nearby), builds castles with spade/bucket.",
                    icon:      "water",
                    loc:       "La Cinta Beach",
                    duration:  "2 hours",
                    cost:      "None",
                    do:        "Sunscreen reapply every 90 min. Light snacks. Water refill.",
                    hack:      "No pressure activity. Just fun beach time.",
                    link:      ""
                },
                {
                    time:      "12:30",
                    title:     "Lunch: Beach Cafe or Picnic",
                    desc:      "OPTION A: Beach cafe panini (€8-10pp, paid to cafe). OPTION B: Packed picnic (sandwich, fruit, €4-5pp). Eat on beach blanket.",
                    icon:      "utensils",
                    loc:       "La Cinta Beach",
                    duration:  "45 min",
                    cost:      "€4-10pp",
                    do:        "Light lunch. Rest in tent shade 1-2 PM (heat peak).",
                    hack:      "Cafe = convenience but markup. Picnic = budget-friendly + relaxed.",
                    link:      ""
                },
                {
                    time:      "13:00",
                    title:     "Rest Hour (Tent Shade, 1-2 PM Heat Peak)",
                    desc:      "Sleep/rest time in tent. Adults nap, Kabir quiet time (story, coloring, rest). Hydrate, apply sunscreen.",
                    icon:      "sun",
                    loc:       "La Cinta Beach",
                    duration:  "1.5 hours",
                    cost:      "None",
                    do:        "Mandatory rest. Recharge batteries.",
                    hack:      "Essential for Kabir (prevent meltdown from heat/fatigue).",
                    link:      ""
                },
                {
                    time:      "14:30",
                    title:     "Afternoon Beach Session + Gelato Break",
                    desc:      "Wake, reapply sunscreen, final swim session 2-3 PM. Grab gelato 3:30 PM (€2-3pp).",
                    icon:      "water",
                    loc:       "La Cinta Beach",
                    duration:  "2 hours swim, 30 min gelato",
                    cost:      "€2-3pp gelato",
                    do:        "Relaxed afternoon, no agenda. Enjoy water, sand.",
                    hack:      "Golden hour (5-6 PM) = most beautiful light. Stay for sunset if desired (stay late = less traffic returning).",
                    link:      ""
                },
                {
                    time:      "16:00",
                    title:     "Pack Beach, Return to Hotel (Siesta Time)",
                    desc:      "Pack tent, towels, gear by 4 PM. Drive back (10 min). Arrive hotel 4:15 PM.",
                    icon:      "car",
                    loc:       "La Cinta Beach → San Teodoro hotel",
                    duration:  "10 min drive",
                    cost:      "None",
                    do:        "Quick drive. Shower off beach sand, change clothes.",
                    hack:      "Afternoon return = time for hotel siesta (4:30-6:00 PM rest, common Italian siesta time).",
                    link:      ""
                },
                {
                    time:      "16:30",
                    title:     "Hotel Rest & Siesta (Family Recharge Hour)",
                    desc:      "Shower, light snack, rest in room 30-45 min. Kabir may nap. Adults: relax, hydrate.",
                    icon:      "bed",
                    loc:       "San Teodoro hotel",
                    duration:  "1 hour",
                    cost:      "Hotel",
                    do:        "Recover from beach sun. Rehydrate.",
                    hack:      "Essential before evening out.",
                    link:      ""
                },
                {
                    time:      "18:00",
                    title:     "Prepare for Night Market (Early Dinner Outing)",
                    desc:      "Change into casual clothes. Brief walk around San Teodoro town before market. Gelato or coffee at town cafe (5:30-6 PM).",
                    icon:      "walking",
                    loc:       "San Teodoro town center",
                    duration:  "1.5 hours",
                    cost:      "€3-5 coffee/gelato",
                    do:        "Light walk, explore shops, enjoy evening air. Kabir energy restored.",
                    hack:      "Build appetite for night market food.",
                    link:      ""
                },
                {
                    time:      "19:30",
                    title:     "San Teodoro NIGHT MARKET (Wednesday-Saturday Evenings)",
                    desc:      "LOCAL EXPERIENCE. Piazza Azzurra market (outdoor): food stalls (pizza slices, arancini, grilled vegetables), crafts, local goods, street performances, live music (often). Free entry, pay-per-item. Family atmosphere. Kabir enjoys atmosphere, buskers, walking around.",
                    icon:      "store",
                    loc:       "Piazza Azzurra, San Teodoro",
                    duration:  "2 hours",
                    cost:      "€8-12pp dinner (street food), €1.50 gelato (cheaper than day rate)",
                    do:        "Walk stalls, pick food items: pizza slices (€2 each), arancini (€3), grilled vegetables (€2), seafood items (€5-8). Share plates. Sit at piazza tables or stand/walk. Kabir: enjoy street vibe, performers, interactive atmosphere.",
                    famous:    "Famous for: authentic local experience, cheap food, community gathering, lively evening vibe.",
                    hack:      "NIGHT MARKET = best dinner value + entertainment of entire week. Pizza slices (€2) vs. €12 pizzeria. Gelato (€1.50) vs. €2.50 daytime. Save €30-40 here vs. sit-down restaurant.",
                    link:      "https://www.santeodoro.com/"
                },
                {
                    time:      "21:30",
                    title:     "Return to Hotel, Bedtime",
                    desc:      "Short walk back to hotel (piazza near hotel). Lights out by 22:00.",
                    icon:      "moon",
                    loc:       "San Teodoro hotel",
                    duration:  "rest",
                    cost:      "Hotel",
                    do:        "Bath, wind-down. Early sleep (Kabir beach-tired).",
                    hack:      "Tomorrow = departure day. Good night sleep.",
                    link:      ""
                }
            ]
        },

        // ══════════════════════════════════════════════════════════════════════════════
        // DAY 7: DEPARTURE (Airport, Last-Minute Beach/Shopping, Evening Flight)
        // ══════════════════════════════════════════════════════════════════════════════
        {
            day:   7,
            date:  "Sun Jul 14",
            title: "Departure: Last Beach Time → Olbia Airport (20:30 Departure)",
            route: "San Teodoro → Optional local beach (1 hour) → Olbia Airport (30 km, 50 min)",

            hotel:     "Hotel San Teodoro (LATE CHECKOUT NEGOTIATED: 16:00 instead of 11:00)",
            hotelLink: "https://www.hotelsanteodoro.com/",
            hotelLoc:  "Via Nazionale 40, San Teodoro 08020",

            grocery: "N/A (Airport shops if needed)",
            groceryLoc: "Olbia Airport",

            driving: {
                km:       30,
                time:     "50 min San Teodoro → Olbia Airport",
                warnings: "Afternoon 4-6 PM = lightest traffic. Plan arrival airport 18:30 (2 hours before 20:30 departure).",
                fuelStop: "Optional. Return rental car with fuel at 1/4+ tank (rental companies typically require this). If low, fuel up Olbia before airport (+5 min, €20)."
            },

            meals: {
                breakfast: [
                    { name: "Hotel Breakfast (Normal Time)", cost: "Included", tag: "🥐", desc: "7:30 AM breakfast. Check out by 16:00 (late checkout negotiated).", link: "" }
                ],
                lunch: [
                    { name: "Optional: Quick Beach Cafe", cost: "€5-10", tag: "🏖️ Optional", desc: "If time, light lunch at local beach cafe (10 AM) before checkout. Otherwise, skip (airport food available).", link: "" }
                ],
                dessert: [],
                dinner: [
                    { name: "Olbia Airport Food Court or Plane Snack", cost: "€12-18", tag: "✈️ Airport", desc: "Airport has cafes (pricey but standard). easyJet flight 20:30 likely includes light snack. Budget €15-20 airport meal if hungry.", link: "" }
                ]
            },

            stops: [
                {
                    time:      "07:30",
                    title:     "Final Hotel Breakfast (Relaxed Morning)",
                    desc:      "Last breakfast at hotel. Enjoy, hydrate, pack final items.",
                    icon:      "coffee",
                    loc:       "San Teodoro hotel",
                    duration:  "45 min",
                    cost:      "Included",
                    do:        "Eat well (airport food expensive). Pack small snacks for flight (Eurospin sandwich if desired).",
                    hack:      "Airport food = €8-15 for sandwich, €3-5 coffee. Pack backup snack from hotel.",
                    link:      ""
                },
                {
                    time:      "08:30",
                    title:     "OPTIONAL: Final Beach Hour (Local Beach)",
                    desc:      "If energy/time allows: 30-min drive to local beach (La Cinta or Cala Luna), quick 1-hour beach dip + breakfast picnic. NOT REQUIRED (time-tight). Skip if Kabir tired or preference to relax.",
                    icon:      "umbrella-beach",
                    loc:       "Local beach (varies)",
                    duration:  "2 hours (optional)",
                    cost:      "None",
                    do:        "Final dip for Kabir (souvenir memory). Pack immediately after.",
                    hack:      "Skipping beach = safer (no time pressure, relaxed checkout).",
                    link:      ""
                },
                {
                    time:      "11:00-16:00",
                    title:     "Late Hotel Checkout (Pre-Negotiated 16:00)",
                    desc:      "Hotel checkout extended from 11:00 AM to 16:00 (4 PM) — confirm with front desk Day 6. Extra cost: €10-20 surcharge (worth it for 5 extra hours). Use time: beach, shopping, pool, rest.",
                    icon:      "bed",
                    loc:       "San Teodoro hotel",
                    duration:  "5 hours flexible",
                    cost:      "€10-20 late checkout fee (added to final bill)",
                    do:        "Flexible morning. Beach shopping (souvenirs), gelato, Kabir nap, light lunch, leisurely packing.",
                    hack:      "Late checkout = best use of final day (avoids airport time pressure).",
                    link:      ""
                },
                {
                    time:      "12:00-14:00",
                    title:     "Optional: Last-Minute Shopping or Relaxation",
                    desc:      "If interested: Olbia town shopping (30 km, 45 min, not recommended time-tight). OR relax hotel pool/beach area. OR final gelato run.",
                    icon:      "shopping-bag",
                    loc:       "San Teodoro area",
                    duration:  "variable",
                    cost:      "€0-50 (optional souvenirs)",
                    do:        "Souvenirs: Eurospin has cheap Sardinia T-shirts (€8-10), local crafts, wine (€10-15). Avoid long drives.",
                    hack:      "Shopping = time risk. Better to relax. Souvenirs buy Day 1-3 if desired.",
                    link:      ""
                },
                {
                    time:      "15:00",
                    title:     "Pack Luggage (Final Check)",
                    desc:      "Confirm all items packed. Check hotel rooms, bathrooms. Collect valuables.",
                    icon:      "suitcase",
                    loc:       "San Teodoro hotel",
                    duration:  "30 min",
                    cost:      "None",
                    do:        "Room check, lost items. Hotel checkout procedure (confirm no damage charges).",
                    hack:      "easyJet luggage = strict. Re-confirm bags fit cabin limits (45×36×20 cm). Repack if needed.",
                    link:      ""
                },
                {
                    time:      "16:00",
                    title:     "Hotel Checkout (Late Checkout)",
                    desc:      "Final checkout. Pay any extra costs (late checkout, snacks, laundry). Confirm bill accuracy.",
                    icon:      "key",
                    loc:       "San Teodoro hotel reception",
                    duration:  "15 min",
                    cost:      "Late checkout surcharge €10-20 (if not pre-included)",
                    do:        "Settle account. Ask for receipt. Leave contact if rental car issues arise later.",
                    hack:      "Tipping optional (€1-2 per night housekeeping = customary but not required).",
                    link:      ""
                },
                {
                    time:      "16:30",
                    title:     "Depart San Teodoro → Olbia Airport",
                    desc:      "Drive 30 km (50 min) to Olbia Costa Smeralda Airport. Afternoon traffic = light (4:30-5:30 PM window). Arrive airport 17:30 target.",
                    icon:      "car",
                    loc:       "San Teodoro → Olbia Airport",
                    duration:  "50 min drive",
                    cost:      "Rental car return (ensure fuel 1/4+ tank)",
                    do:        "Safe afternoon drive. Kabir likely tired/napping. Soft music.",
                    hack:      "Early airport arrival (2h before flight) = relaxed check-in, security queue navigation, final shopping.",
                    link:      ""
                },
                {
                    time:      "17:30",
                    title:     "Arrive Olbia Airport (Return Rental Car)",
                    desc:      "Olbia Costa Smeralda Airport. Return rental car to rental lot (usually 5-min drive from terminal). Check fuel level, cleanliness. Get mileage confirmation.",
                    icon:      "car",
                    loc:       "Olbia Airport rental car lot",
                    duration:  "30 min",
                    cost:      "Damage inspection fee (usually none if no issues)",
                    do:        "Return car, confirm no damage charges, collect keys/paperwork. Take airport shuttle or walk to terminal (5-10 min).",
                    hack:      "Fuel tank: ensure 1/4+ full (rental requirement). If low, fuel up Olbia town before airport (+5 min, €20).",
                    link:      ""
                },
                {
                    time:      "18:00",
                    title:     "Airport Terminal (Check-In + Security)",
                    desc:      "easyJet flight 20:30 = check-in closes 19:30. Arrive terminal 18:00. Check-in, security, boarding pass collection.",
                    icon:      "plane",
                    loc:       "Olbia Airport terminal",
                    duration:  "1.5 hours (check-in + security)",
                    cost:      "Luggage fees if applicable (paid earlier)",
                    do:        "Online check-in done pre-arrival (easyJet app). At counter: confirm luggage sizes (45×36×20cm cabin bag check). Security: remove shoes, liquids, electronics. Boarding pass collection.",
                    hack:      "easyJet = budget airline. Strict luggage rules. Allow 20 min longer for security (busy July airport).",
                    link:      ""
                },
                {
                    time:      "19:15",
                    title:     "Airside (Post-Security): Lounge, Shops, Cafe",
                    desc:      "Pass security by 19:15. Departure lounge: cafes, shops, bathrooms. Kabir: use bathroom, grab snack if desired (overpriced but available).",
                    icon:      "coffee",
                    loc:       "Olbia Airport departure lounge",
                    duration:  "1 hour",
                    cost:      "€5-15 snacks/coffee",
                    do:        "Final bathroom, drink, light snack. Charge devices if available (rarely fast chargers at small airports).",
                    hack:      "Airport food marked up 2-3x. Pack snacks from hotel/Eurospin if concerned about cost.",
                    link:      ""
                },
                {
                    time:      "20:00",
                    title:     "Boarding Call",
                    desc:      "Gate announced ~19:50. Boarding gate → aircraft 20:00-20:20. Flight departs 20:30 sharp (easyJet strict schedule).",
                    icon:      "plane",
                    loc:       "Boarding gate, Olbia Airport",
                    duration:  "20 min",
                    cost:      "None",
                    do:        "Board aircraft, find seats (easyJet: no assigned seats unless paid; first-come-first-served). Stow luggage, prepare for flight.",
                    hack:      "easyJet boarding = chaotic. Have boarding pass ready. Kabir hand-held for safety.",
                    link:      ""
                },
                {
                    time:      "20:30",
                    title:     "easyJet Flight 20:30 Departure (2-Hour Flight to Amsterdam)",
                    desc:      "Flight departs on schedule. 2-hour flight (arrive Amsterdam ~22:45 local time, +1 hour ahead). easyJet light snack service available (€5-8, or pre-ordered meals).",
                    icon:      "plane",
                    loc:       "Olbia → Amsterdam Schiphol",
                    duration:  "2 hours flight time",
                    cost:      "Pre-booked flight (included in itinerary cost)",
                    do:        "Settle in, hydrate, entertai Kabir (download, book, games). easyJet = basic service (no meals, just snacks/drinks).",
                    hack:      "Pack small entertainment for Kabir (flights = challenging with young kids). Noise-canceling headphones recommended.",
                    link:      ""
                },
                {
                    time:      "22:45",
                    title:     "Arrive Amsterdam Schiphol Airport (Local Time +1 Hour)",
                    desc:      "Land Amsterdam 22:45 CEST (+1 hour ahead of Sardinia July time). Taxi to terminal, disembark.",
                    icon:      "plane",
                    loc:       "Amsterdam Schiphol Airport",
                    duration:  "30 min",
                    cost:      "None",
                    do:        "Deplane, collect luggage from carousel, exit customs (EU citizens = no customs inspection). Arrange ground transport (pre-booked taxi, car, train).",
                    hack:      "Amsterdam 23:15 arrival = late evening. Ground transport pre-arranged (avoid on-spot arrangements).",
                    link:      ""
                },
                {
                    time:      "23:45",
                    title:     "Arrive Home (Amsterdam Area)",
                    desc:      "Expected home arrival: 23:45-00:15 depending on transport. Unpacked trip, rest, recovery.",
                    icon:      "home",
                    loc:       "Home",
                    duration:  "rest",
                    cost:      "Ground transport (pre-arranged)",
                    do:        "Unpack, hydrate, rest. Kabir to bed immediately (travel fatigue).",
                    hack:      "Next day = recovery day (jet lag, unpacking, laundry).",
                    link:      ""
                }
            ]
        }

    ]
};