/**
 * ============================================================
 * TRIP: SARDINIA 2026 — Budget Family Exploration
 * ============================================================
 */

window.TRIPS = window.TRIPS || {};

window.TRIPS["sardinia"] = {

    // ── Trip Identity ──────────────────────────────────────
    id:       "sardinia",
    name:     "Sardinia Summer 2026",
    emoji:    "🏖️",
    subtitle: "Famous Coastal Gems & Budget Family Hacks",
    dates:    "Jul 08 – Jul 14, 2026",
    gradient: "sky",

    // ── Emergency Info ─────────────────────────────────────
    emergency: {
        numbers: [
            { label: "Emergency (All)", value: "112", icon: "phone" },
            { label: "Roadside Assistance (ACI)", value: "803.116", icon: "car" }
        ],
        hospitals: [
            { name: "Ospedale Giovanni Paolo II (Olbia)", loc: "Via Bazzoni-Sircana, Olbia", phone: "+39 0789 552200" }
        ],
        apps: [
            "Google Maps (Offline Mode)", "Cuore di Sardegna (Beach Bookings)", "EasyPark"
        ]
    },

    // ── Hacks & Tips ──────────────────────────────────────
    hacks: [
        { icon: "🥪", title: "The €5 Lunch Hack", text: "Go to the deli counter (Salumeria) in supermarkets like Conad or Eurospin. They will make fresh 'panini' with local meats for a fraction of restaurant prices." },
        { icon: "🏖️", title: "Beach Bookings", text: "Famous beaches like La Pelosa and Brandinchi REQUIRE online booking days/weeks in advance for July. Check 'Cuore di Sardegna' app." },
        { icon: "⛽", title: "Petrol Prices", text: "Avoid fuel stations on the main SS131 highway. Fill up in industrial zones around Olbia (e.g., near the Auchan/Conad malls) for the lowest rates." },
        { icon: "🍦", title: "Ice Cream Strategy", text: "Look for 'Gelateria Artigianale'. A 'Coppetta' (cup) is usually better value and easier for a 6-year-old than a cone in the July heat." },
        { icon: "🎒", title: "EasyJet Space", text: "Buy cheap beach towels and sand toys at 'Eurospin' or 'Maury's' in Olbia upon arrival rather than packing them; leave them at the hotel for the next family when you depart." }
    ],

    // ── Days ───────────────────────────────────────────────
    days: [
        {
            day:   1,
            date:  "Jul 08",
            title: "Late Arrival & Base Setup",
            route: "Olbia Airport → San Teodoro / Golfo Aranci",
            hotel:     "Budget Apartment/Residence",
            hotelLoc:  "San Teodoro area",
            grocery:    "Eurospin Olbia",
            groceryLoc: "Via d'Annunzio",
            driving: {
                km:       30,
                time:     "35m",
                warnings: "Be careful of wild boar on rural roads at night.",
                fuelStop: "Q8 near Airport (Expensive, skip if possible)"
            },
            meals: {
                dinner: [
                    { name: "Pizzeria Da Bassu", cost: "€10-15pp", tag: "💰 Best Value", desc: "Open late, simple, family-friendly pizzas." }
                ]
            },
            stops: [
                {
                    time:  "22:15",
                    title: "Arrival at Olbia (OLB)",
                    desc:  "Collect rental car immediately. Head to the 24h fuel station if needed.",
                    icon:  "plane-arrival"
                }
            ]
        },
        {
            day:   2,
            date:  "Jul 09",
            title: "Costa Smeralda Luxury & Sunset",
            route: "San Teodoro → Porto Cervo → San Pantaleo",
            driving: {
                km:       90,
                time:     "1h 45m",
                fuelStop: "Arzachena outskirts"
            },
            meals: {
                lunch: [
                    { name: "Supermarket Deli", cost: "€5pp", tag: "💰 Best Value", desc: "Fresh panini with local Pecorino." }
                ],
                dinner: [
                    { name: "Pizzeria Dadino", cost: "€12pp", tag: "🔥 Trending", desc: "Best value pizza near the luxury zones." }
                ]
            },
            stops: [
                {
                    time:  "10:00",
                    title: "Spiaggia del Principe",
                    desc:  "The most famous beach of the Aga Khan era.",
                    duration: "3 hrs",
                    cost:  "Parking €2.50/hr",
                    do:    "Walk the short trail to the beach; great snorkeling for kids.",
                    famous: "Turquoise, heart-shaped bay."
                },
                {
                    time:  "15:30",
                    title: "Porto Cervo Marina",
                    desc:  "Walk the port to see the mega-yachts and designer windows.",
                    duration: "2 hrs",
                    cost:  "Free to walk",
                    do:    "Visit the Stella Maris church for a free view of the bay.",
                    photoSpot: "📸 The 'Piazzetta' overlooking the harbor."
                },
                {
                    time:  "18:00",
                    title: "San Pantaleo",
                    desc:  "Artist village in the granite mountains.",
                    duration: "1.5 hrs",
                    eat:   "Best gelato in the main piazza."
                }
            ]
        },
        {
            day:   3,
            date:  "Jul 10",
            title: "The Island Expedition",
            route: "San Teodoro → Palau (Boat Tour)",
            driving: {
                km:       110,
                time:     "2h 10m",
                fuelStop: "Palau Town Center"
            },
            meals: {
                lunch: [
                    { name: "Packed Lunch", cost: "€3pp", tag: "💰 Best Value", desc: "Crucial as boat food is expensive." }
                ],
                dinner: [
                    { name: "Rosticceria L'Ancora", cost: "€10-14pp", tag: "🌟 Must Visit", desc: "Roasted chicken and lasagna to go." }
                ]
            },
            stops: [
                {
                    time:  "10:00",
                    title: "La Maddalena Group Tour",
                    desc:  "Large motorboat tour from Palau port.",
                    duration: "7 hrs",
                    cost:  "€65-80 per adult",
                    do:    "Ensure the kid wears a life vest; check out the 'Pink Beach' from the deck.",
                    famous: "Crystal clear archipelago islands.",
                    hack:  "Book the 'Consorzio delle Bocche' tours for reliable budget pricing."
                }
            ]
        },
        {
            day:   4,
            date:  "Jul 11",
            title: "Little Tahiti & The Giant Rock",
            route: "San Teodoro → Cala Brandinchi → Tavolara",
            driving: {
                km:       25,
                time:     "45m",
                fuelStop: "Porto San Paolo"
            },
            meals: {
                lunch: [
                    { name: "Beach Picnic", cost: "€5pp", tag: "💰 Best Value", desc: "Avoid the Brandinchi beach bar (€€€)." }
                ],
                dinner: [
                    { name: "Il Portolano", cost: "€15pp", tag: "🍰 Unmissable", desc: "Stick to the pizza menu for the view." }
                ]
            },
            stops: [
                {
                    time:  "08:30",
                    title: "Cala Brandinchi",
                    desc:  "Known as 'Little Tahiti'.",
                    duration: "4 hrs",
                    cost:  "Booking fee + Parking",
                    do:    "Walk 50 meters out in knee-deep water. Perfect for the 6-year-old.",
                    famous: "White sand and shallow reef-like colors."
                },
                {
                    time:  "15:00",
                    title: "Tavolara Island Ferry",
                    desc:  "The 'Smallest Kingdom in the World'.",
                    duration: "3 hrs",
                    cost:  "€15-20 ferry",
                    do:    "Walk the 'Protonotari' path; very easy for kids.",
                    legend: "The King of Italy once recognized the local family as the Kings of Tavolara."
                }
            ]
        },
        {
            day:   5,
            date:  "Jul 12",
            title: "The Northwest Power Day",
            route: "San Teodoro → Alghero → Neptune's Grotto",
            driving: {
                km:       320,
                time:     "4h 30m total",
                warnings: "Long driving day; start early (07:30).",
                fuelStop: "Olbia Industrial Zone (Cheapest)"
            },
            meals: {
                lunch: [
                    { name: "Alghero Street Food", cost: "€8pp", tag: "🔥 Trending", desc: "Focaccia with local toppings." }
                ],
                dinner: [
                    { name: "Pizzeria Lu Furat", cost: "€12pp", tag: "🌟 Must Visit", desc: "Authentic Alghero vibes, budget-friendly." }
                ]
            },
            stops: [
                {
                    time:  "11:00",
                    title: "Alghero Old Town",
                    desc:  "Medieval walls and Spanish flair.",
                    duration: "3 hrs",
                    do:    "Walk the bastions; look for the red coral jewelry in shop windows.",
                    famous: "Catalan-style architecture."
                },
                {
                    time:  "15:00",
                    title: "Grotta di Nettuno",
                    desc:  "Stunning sea cave at Capo Caccia.",
                    duration: "2 hrs",
                    cost:  "€14 adults / €7 child",
                    do:    "Take the boat from Alghero Port to avoid the 600+ stairs with a child.",
                    photoSpot: "📸 The 'Escala del Cabirol' cliffside stairs."
                }
            ]
        },
        {
            day:   6,
            date:  "Jul 13",
            title: "Local Relaxation & Night Market",
            route: "Local San Teodoro area",
            driving: {
                km:       10,
                time:     "20m"
            },
            meals: {
                lunch: [
                    { name: "La Cinta Beach Bar", cost: "€10pp", tag: "💰 Best Value", desc: "Casual salads and sandwiches." }
                ],
                dessert: [
                    { name: "Gelateria d'Enza", cost: "€3", tag: "🍰 Unmissable", desc: "Top-rated artisan gelato." }
                ],
                dinner: [
                    { name: "Agriturismo (Nearby)", cost: "€15 (Kid)", tag: "🌟 Must Visit", desc: "Look for fixed-price family menus." }
                ]
            },
            stops: [
                {
                    time:  "10:00",
                    title: "La Cinta Beach",
                    desc:  "3km of white sand walking distance from town.",
                    duration: "5 hrs",
                    do:    "Look for flamingos in the lagoon behind the beach.",
                    famous: "The 'main' beach of San Teodoro."
                },
                {
                    time:  "20:00",
                    title: "San Teodoro Night Market",
                    desc:  "Town center becomes a pedestrian festival.",
                    duration: "3 hrs",
                    do:    "Buy local honey or small cork souvenirs (cheapest here).",
                    famous: "Summer evening atmosphere."
                }
            ]
        },
        {
            day:   7,
            date:  "Jul 14",
            title: "Olbia Charm & Departure",
            route: "San Teodoro → Olbia City → Airport",
            driving: {
                km:       35,
                time:     "45m",
                fuelStop: "Near Olbia Airport (Essential before return)"
            },
            meals: {
                lunch: [
                    { name: "Olbia Corso Umberto", cost: "€12pp", tag: "🔥 Trending", desc: "Final pasta/pizza in the city center." }
                ]
            },
            stops: [
                {
                    time:  "11:00",
                    title: "Olbia Corso Umberto",
                    desc:  "The historical shopping street.",
                    duration: "3 hrs",
                    do:    "Last minute shopping at 'Sapori di Sardegna' for food gifts.",
                    eat:   "Seadas (Honey-covered cheese pastry) — a must-try!"
                },
                {
                    time:  "18:30",
                    title: "Airport Car Return",
                    desc:  "Arrive 2 hours early to handle rental car inspection.",
                    icon:  "car"
                },
                {
                    time:  "20:30",
                    title: "Flight Departure",
                    desc:  "Goodbye Sardinia!",
                    icon:  "plane-departure"
                }
            ]
        }
    ]
};