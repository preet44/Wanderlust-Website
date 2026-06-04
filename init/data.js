const sampleListings = [
  {
    title: "Lakeside Serenity Stay ",
    description:
      "Wake up to peaceful lake views and gentle morning breezes. This calm retreat is perfect for relaxing away from city noise. Enjoy boating, sunsets, and quiet evenings by the water.",
      image:{
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1775322775249-a293de022cd2?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1500,
    location: "Deharadun",
    country: "India",
    category:"Boats",
  },
  {
    title: "The Boathouse Retreat",
    description:
      "Stay right beside the water in this charming boathouse getaway. Enjoy scenic views, boat rides, and a cozy atmosphere. Perfect for a peaceful and unique experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1629441485550-a925b0501d38?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1200,
    location: "Mumbai",
    country: "India",
    category:"Boats",
  },
  {
    title: "Blue Lagoon Resort",
    description:
       "Relax in a stunning resort featuring a crystal-clear pool and lush surroundings. Perfect for a refreshing and luxurious stay. Enjoy sunny days and calm poolside evenings.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
     category:"Pools"
    },
    price: 1000,
    location: "Delhi",
    country: "India",
    category:"Pools",
  },
  {
    title: "The Poolside Paradise",
    description:
     "Experience ultimate comfort with a beautiful pool just steps away. Lounge under the sun and unwind in a peaceful setting. Ideal for a refreshing and relaxing vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Deharadun",
    country: "India",
    category:"Pools"
  },
  {
    title: "Mountain Whisper Lodge",
    description:
        "Escape into the mountains where nature surrounds you. Enjoy fresh air, scenic views, and peaceful silence. A perfect retreat for nature lovers and adventure seekers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1757677050432-7da2d6a780ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 800,
    location: "Rishikesh",
    country: "India",
    category:"Mountains"
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step directly onto the sandy beach from your stay. Enjoy ocean waves, sunsets, and cool sea breezes. Perfect for a relaxing and scenic coastal getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Goa",
    country: "India",
    category:"Beach",

  },
  {
    title: "Mountain Retreat",
    description:
        "Surrounded by hills and greenery, this retreat offers calm and comfort. Enjoy peaceful mornings and breathtaking views. Ideal for a quiet escape in nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1726897035973-66dc7607b2d4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 900,
    location: "Rishikesh",
    country: "India",
    category:"Mountains"
  },
  {
    title: "SkyDome Retreat",
    description:
        "Stay in a unique dome under the open sky and stars. Enjoy a modern yet nature-connected experience. Perfect for a romantic and memorable getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1755686973374-59e93b2731e6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3500,
    location: "Jaipur",
    country: "India",
    category:"Dome"
  },
  {
    title: "The Dome Escape",
    description:
        "Stay in a unique dome under the open sky and stars. Enjoy a modern yet nature-connected experience. Perfect for a romantic and memorable getaway.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbF_pL-utj1xmbZa0OGlz6lX3hXERywI398Q&s",
    },
    price: 3000,
    location: "Jammu",
    country: "India",
    category:"Dome"
  },
  {
    title: "Cloudview Haven",
    description:
       "Enjoy breathtaking views above the clouds in this serene mountain stay. Perfect for relaxing and reconnecting with nature. Experience calm, comfort, and beauty.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Jammu",
    country: "India",
    category:"Mountains"
  },
  {
    title: "WildNest Camp",
    description:
        "Immerse yourself in nature with this cozy camping experience. Enjoy bonfires, fresh air, and peaceful surroundings. Perfect for adventure and relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Kerala",
    country: "India",
    category:"Camping"
  },
  {
    title: "Galaxy Nest Resort",
    description:
      "Experience luxury under the stars in this unique dome resort. Enjoy breathtaking night skies and modern comfort. A perfect blend of nature and elegance.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/13504750/pexels-photo-13504750.jpeg",
    },
    price: 10000,
    location: "Kerala",
    country: "India",
    category:"Dome"
  },
  {
    title: "Ocean Pearl Resort",
    description:
      "Stay near the ocean and enjoy stunning sea views. Relax with cool breezes and peaceful surroundings. Perfect for a calm and refreshing beach vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category:"Beach"
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Reconnect with nature in this eco-friendly camping retreat. Surrounded by greenery and fresh air, it’s perfect for relaxation. Enjoy peaceful trails and outdoor living.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "GreenTrail Stay",
    description:
       "Wake up to misty mountain views and cool fresh air. This peaceful retreat is perfect for a calm getaway. Enjoy nature, silence, and scenic beauty.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Boston",
    country: "Indonesia",
    category:"Camping"
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
     "Enjoy a cozy stay right on the beach with beautiful ocean views. Relax with the sound of waves and golden sunsets. Perfect for a tropical escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category:"Camping"
  },
  {
    title: "Art Deco Apartment ",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Jammu",
    country: "India",
    category:"Snow",
  
  
  },
  {
    title: "Misty Peak Retreat",
    description:
      "Wake up to misty mountain views and cool fresh air. This peaceful retreat is perfect for a calm getaway. Enjoy nature, silence, and scenic beauty.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category:"Mountains"
  },
  {
    title: "Beachfront Bungalow ",
    description:
       "Enjoy a cozy stay right on the beach with beautiful ocean views. Relax with the sound of waves and golden sunsets. Perfect for a tropical escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category:"Beach"
  },
  {
    title: "Desert Oasis",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category:"Cities"
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Aqua Bliss Retreat",
    description:
      "Relax in a serene retreat with refreshing poolside vibes. Enjoy comfort, calm surroundings, and modern amenities. Perfect for a peaceful and luxurious stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category:"Pools"
  },
  {
    title: "Coastal Breeze Hotel",
    description:
    "Enjoy fresh sea air and stunning coastal views. This hotel offers comfort and relaxation near the beach. Perfect for a peaceful seaside escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category:"Beach"
  },
  {
    title: "Summit Serenity Resort",
    description:
      "Stay high in the mountains with breathtaking scenic views. Enjoy calm surroundings and fresh air. Perfect for a relaxing and refreshing getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category:"Mountains"
  },
  {
    title: "Modern Apartment ",
    description:
      "Explore the vibrant city  from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category:"Cities"
  },
  {
    title: "The Rustic Escape",
    description:
      "Experience a cozy and simple stay surrounded by nature. Enjoy peaceful vibes and rustic charm. Perfect for disconnecting and relaxing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category:"Camping"
  },
  {
    title: "Luxury Villa",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category:"Boats",
  },
  {
    title: "Secluded Beach House ",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category:"Beach"
  },
];

module.exports = { data: sampleListings };