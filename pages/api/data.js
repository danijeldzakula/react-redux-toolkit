const data = [
  {
    id: "recZkNf2kwmdBcqd0",
    name: "accent chair",
    price: 25999,
    image: "https://images2.imgbox.com/38/85/iuYyO9RP_o.jpeg",
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  },
  {
    id: "recEHmzvupvT8ZONH",
    name: "albany sectional",
    price: 109999,
    image: "https://images2.imgbox.com/36/c5/mgSP2SV2_o.jpeg",
    colors: ["#000", "#ffb900"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
  },
  {
    id: "rec5NBwZ5zCD9nfF0",
    name: "albany table",
    price: 309999,
    image: "https://images2.imgbox.com/ca/86/S0xjwQ1l_o.jpeg",
    colors: ["#ffb900", "#0000ff"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "kitchen",
  },
  {
    id: "recd1jIVIEChmiwhe",
    name: "armchair",
    price: 12599,
    image: "https://images2.imgbox.com/7a/8e/4iSgp3eg_o.jpeg",
    colors: ["#000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
    shipping: true,
  },
  {
    id: "recotY5Nh00DQFdkm",
    name: "dining table",
    price: 42999,
    image: "https://images2.imgbox.com/45/1a/IhY9dl95_o.jpeg",
    colors: ["#00ff00", "#0000ff", "#ff0000"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "dining",
    shipping: true,
  },
  {
    id: "rec1Ntk7siEEW9ha1",
    name: "emperor bed",
    price: 23999,
    image: "https://images2.imgbox.com/ba/e2/q0XmH4ZV_o.jpeg",
    colors: ["#0000ff", "#000"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
    shipping: true,
  },
  {
    id: "recNZ0koOqEmilmoz",
    name: "entertainment center",
    price: 59999,
    image: "https://images2.imgbox.com/cb/69/cQ29pV1x_o.jpeg",
    featured: true,
    colors: ["#000", "#ff0000"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
  },
  {
    id: "recrfxv3EwpvJwvjq",
    name: "high-back bench",
    price: 39999,
    image: "https://images2.imgbox.com/b4/3d/2jm4sPHs_o.jpeg",
    featured: true,
    colors: ["#000", "#00ff00"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  },
  {
    id: "recoW8ecgjtKx2Sj2",
    name: "leather chair",
    price: 20099,
    image: "https://images2.imgbox.com/fa/23/Pqoxb7z6_o.jpeg",
    colors: ["#ff0000", "#ffb900", "#00ff00"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
  },
  {
    id: "recEOA6qtDag1hRbU",
    name: "leather sofa",
    price: 99999,
    image: "https://images2.imgbox.com/9e/54/5V5iZwX4_o.jpeg",
    colors: ["#00ff00", "#0000ff"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
  },
  {
    id: "recoAJYUCuEKxcPSr",
    name: "modern bookshelf",
    price: 31999,
    image: "https://images2.imgbox.com/c7/9c/2GpPoQKF_o.jpeg",
    featured: true,
    colors: ["#ffb900", "#ff0000", "#00ff00"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "kids",
  },
  {
    id: "recQ0fMd8T0Vk211E",
    name: "modern poster",
    price: 3099,
    image: "https://images2.imgbox.com/8b/13/XwC9OolK_o.jpeg",
    colors: ["#000"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
  },
  {
    id: "rec7CjDWKRgNQtrKe",
    name: "shelf",
    price: 30999,
    image: "https://images2.imgbox.com/5d/83/yeVuPMaL_o.jpeg",
    colors: ["#00ff00"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
  },
  {
    id: "recF0KpwlkF7e8kXO",
    name: "simple chair",
    price: 109999,
    image: "https://images2.imgbox.com/f6/25/Fo0YlBrZ_o.jpeg",
    colors: ["#0000ff"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
  },
  {
    id: "recs5BSVU3qQrOj4E",
    name: "sofa set",
    price: 129999,
    image: "https://images2.imgbox.com/38/09/ui4jmenR_o.jpeg",
    colors: ["#00ff00", "#ffb900"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
  },
  {
    id: "recroK1VD8qVdMP5H",
    name: "suede armchair",
    price: 15999,
    image: "https://images2.imgbox.com/a2/e2/eiCS6eiw_o.jpeg",
    colors: ["#ffb900"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
  },
  {
    id: "rec7JInsuCEHgmaGe",
    name: "utopia sofa",
    price: 79999,
    image: "https://images2.imgbox.com/38/3d/4LiiRiY9_o.jpeg",
    featured: true,
    colors: ["#ff0000", "#00ff00"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
  },
  {
    id: "rec3jeKnhInKHJuz2",
    name: "vase table",
    price: 120999,
    image: "https://images2.imgbox.com/7d/38/z0zPcZg3_o.jpeg",
    featured: true,
    colors: ["#ff0000"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
  },
  {
    id: "recv2ohxljlK2FZO7",
    name: "wooden bed",
    price: 250099,
    image: "https://images2.imgbox.com/6f/09/A0a3lGvb_o.jpeg",
    colors: ["#000", "#ffb900"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
  },
  {
    id: "recJIjREF3dlFi3sR",
    name: "wooden desk",
    price: 150999,
    image: "https://images2.imgbox.com/0f/f0/5OTgCNyH_o.jpeg",
    colors: ["#000"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
  },
  {
    id: "recm7wC8TBVdU9oEL",
    name: "wooden desk",
    price: 40099,
    image: "https://images2.imgbox.com/25/f2/Ce0d8fue_o.jpeg",
    colors: ["#0000ff", "#00ff00"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
  },
  {
    id: "rectfNsySwAJeWDN2",
    name: "wooden table",
    price: 234999,
    image: "https://images2.imgbox.com/44/7e/TJCBoMAa_o.jpeg",
    featured: true,
    colors: ["#ffb900", "#ff0000"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "kitchen",
    shipping: true,
  },
];

export { data };
