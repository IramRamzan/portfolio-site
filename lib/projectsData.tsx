type ProjectType = 'app' | 'logo'| 'logo1' | 'website1'|'website2'|'website3' |'website4'|'website5'|'website6'|'poster'|'poster1'|'poster2';
export interface Project {
  slug: string;
  title: string;
  description?: string;
  type: ProjectType;
  subtitle?: string;
  overview?: string;
  targetAudience?: string[];
  stats?: string[];
  problemStatement?: string;
  typography?: {
    fontUsed: string[];
    weights: string[];
    previewText: string;
  };
  colors?: {
    values?: { label: string; hex: string }[];
    primary?: string[];
    secondary?: string[];
    bgColor?:string;
  };
  coverImages?: string[];
  wireframes?: string[];
  goals?: string[];
  designProcess?: string[];
  softwareUsed?: string[];
  finalLogo?: string;
  variations?: string[];
  reflection?: string;
}
export const projects: Project[] = [
  {
    slug: "rideasy-mobile-app",
    title: "Rideasy",
    type: 'app' , 
    subtitle: "A Ride Sharing App with Carpooling",
    overview: `Rideasy is a user-friendly app designed to make ride-sharing and carpooling effortless and accessible. It connects passengers with drivers for cost-effective daily travel while reducing traffic and environmental impact. A standout feature is the option to choose a female driver, promoting safety and inclusivity for women.`,
    targetAudience: [
      "Urban Commuters & Students",
      "Women Prioritizing Safe Travel",
      "Budget-Conscious Riders"
    ],
    stats: [
      "72% of ride-hailing users in Pakistan find current services expensive.",
      "Nearly 80% of women in South Asia avoid public/shared transport at night due to safety."
    ],
    problemStatement: `Urban commuters struggle with expensive, unreliable, and often unsafe daily transport options, and there aren’t enough good carpooling choices to help cut costs or traffic. Many women don’t feel safe using shared or public transport at night, and most
          people find current ride-hailing services too pricey for daily use. Rideasy solves these problems by offering affordable,easy-to-use ride-sharing with the option to choose a female driver, making travel smarter, safer, and more inclusive for everyone..`,
    typography: {
      fontUsed: ["Poppins"],
      weights: ["Black", "Extra Bold", "Bold", "Semi Bold", "Medium", "Regular", "Light", "Extra Light", "Thin"],
      previewText: `ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    abcdefghijklmnopqrstuvwxyz
                    0123456789
                    !@#$%^&*()-_+=<>{}[]|:;"',.?/~\``
    },
    colors: {
    values: [
      { label: 'Primary', hex: '#6C63FF' },
      { label: 'Secondary', hex: '#F7C59F' }
    ]
  },
    coverImages: [
  "/images/Rideasycover1.png",
  "/images/Rideasycover2.png",
  
    ],
    wireframes: [
    "/images/rideasy-wireframe1.png",
    "/images/rideasy-wireframe2.png",
    "/images/rideasy-wireframe3.png",
    "/images/rideasy-wireframe4.png",
    "/images/rideasy-wireframe5.png",
    "/images/rideasy-wireframe6.png",
    "/images/rideasy-wireframe7.png",
    "/images/rideasy-wireframe8.png",
    "/images/rideasy-wireframe9.png",
    "/images/rideasy-wireframe10.png",
    "/images/rideasy-wireframe11.png",
    "/images/rideasy-wireframe12.png",
    "/images/rideasy-wireframe13.png",
    "/images/rideasy-wireframe14.png",
    "/images/rideasy-wireframe15.png"
    ],

  },

{
  slug: 'cyber-security-logo',
  type: 'logo',
  title: 'Cybersecurity Logo',
  subtitle: 'Logo design submitted for a cybersecurity internship competition',
  overview: 'This project was a branding challenge for a cybersecurity internship program. The goal was to design a logo that reflects digital safety, innovation, and trust.',
  goals: [
    'Create a professional and scalable logo for a cybersecurity organization',
    'Reflect core values such as protection, technology, and reliability',
    'Ensure clarity and balance in both print and digital formats'
  ],
  designProcess: [
    'Analyzed brief and industry references',
    'Sketched several icon ideas using shield, lock, and network metaphors',
    'Explored geometric and minimal typography',
    'Finalized 2 vector logo variations using Adobe Illustrator',
    'Refined based on feedback and contrast testing'
  ],  
  softwareUsed: ['Adobe Illustrator', 'Photoshop'],

  variations: [
    "/images/CYS-Logo.jpg",
    "/images/CYS-Logo-2.jpg"
  ],
  colors: {
  values: [
    { label: "White", hex: "#FFFFFF" },
    { label: "Navy Blue", hex: "#001F3F" },
  ]
},

  reflection: 'This logo project allowed me to blend aesthetics with technical symbolism. It was proudly selected among the top 2 submissions, validating my design approach. The experience sharpened my design thinking and strengthened my identity-focused workflow.',
},
{
  slug: 'securely-innovations',
  title: 'Securely Innovations',
  subtitle: 'Delivers user friendly software solutions to drive success',
  type: 'website1',
  overview: "Securely Innovations is a software solutions company dedicated to helping clients succeed with custom, user-friendly software. The website communicates their mission to make technology accessible and effective for everyone. It highlights their expertise in delivering tailored web, mobile, and data solutions. The design emphasizes reliability, ease of use, and strong client collaboration.  The goal is to create a modern, professional online presence that builds trust and engagement.",
  coverImages: [
  "/images/securelyCoverimage.png"
  
    ],
  problemStatement: "Many businesses struggle with off-the-shelf software that fails to meet their unique needs, leading to wasted time, poor user experiences, and limited growth. Clients often find technology solutions confusing, hard to use, or disconnected from their goals. Securely Innovations set out to solve this by offering custom, user-friendly software that is tailored to each client’s requirements, making technology accessible, effective, and truly supportive of their success.",
  goals:[
    'Redesigned the site from single-page to multi-page with dedicated service sections.',
    'Added interactive elements and animations for better user engagement.',
    'Conducted UX research to guide structure, content, and navigation.',
    'Performed UI research for a modern, on-brand, visually appealing design.',
    'Created detailed prototypes of user flows and page layouts for approval.'
  ],
  designProcess:[
    'Improved user experience with clear navigation and dedicated service pages.',
    'Increased visitor engagement through interactive and animated design elements.',
    'Enhanced brand credibility with a modern, professional, and user-friendly website.'
  ],
      typography: {
      fontUsed: ["Ubuntu"],
      weights: ["Bold", "Medium", "Regular", "Light"],
      previewText: `ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    abcdefghijklmnopqrstuvwxyz
                    0123456789
                    !@#$%^&*()-_+=<>{}[]|:;"',.?/~\``
    },
    colors: {
    values: [
      { label: 'Primary', hex: '#191F9A' },
      { label: 'Primary', hex: '#44494F' },
      { label: 'Secondary', hex: '#C9C9C9' },
      { label: 'Secondary', hex: '#E9F6FE' },
      { label: 'bgColor', hex: '#FFFDFD' },
    ]
  },
wireframes: [
    "/images/Home Page.png",   
    "/images/About Us.png",    
    "/images/Web App Development.png",
    "/images/Data Minning Service.png",    
    "/images/Desktop Development.png",
    "/images/Team page.png"
    ],
},
{
  slug: 'oman-oasis',
  title: 'Oman Oasis',
  subtitle: 'Provide Botteled Water Service',
  type: 'website2',
  overview: "Oman Oasis is an Omani company dedicated to delivering fresh, pure bottled water across the country. The website showcases their commitment to quality, hygiene, and reliable service, making it easy for customers to order water for homes, offices, and events. Designed to reflect trust and freshness, the site highlights their mission to provide safe, clean drinking water conveniently to every corner of Oman.",
  coverImages: [
  "/images/oman-cover.png"
  
    ],
  problemStatement: "Many people in Oman face challenges accessing reliable, clean, and safe bottled water for daily use, with limited convenient ordering options and inconsistent delivery services. Customers need a trustworthy provider that ensures high-quality, hygienic water delivered right to their doorstep. Woman Oasis aims to solve this by offering fresh, pure bottled water with a simple, dependable, and customer-friendly ordering experience across the country.",
  goals:[
    'Redesigned the site from single-page to multi-page with dedicated service sections.',
    'Added interactive elements and animations for better user engagement.',
    'Conducted UX research to guide structure, content, and navigation.',
    'Performed UI research for a modern, on-brand, visually appealing design.',
    'Created detailed prototypes of user flows and page layouts for approval.'
  ],
  designProcess:[
    'Improved user experience with clear navigation and dedicated service pages.',
    'Increased visitor engagement through interactive and animated design elements.',
    'Enhanced brand credibility with a modern, professional, and user-friendly website.'
  ],
      typography: {
      fontUsed: ["Lato","Montserrat"],
      weights: ["Black", "Extra Bold", "Bold", "Semi Bold", "Medium", "Regular", "Light", "Extra Light", "Thin"],
      previewText: `ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    abcdefghijklmnopqrstuvwxyz
                    0123456789
                    !@#$%^&*()-_+=<>{}[]|:;"',.?/~\``
    },
    colors: {
    values: [
      { label: 'Primary', hex: '#061675' },
      { label: 'Secondary', hex: '#D74793' },
      { label: 'Secondary', hex: '#E4EBEF' },
    ]
  },
wireframes: [
    "/images/Home.png",
    "/images/About.png",
    "/images/Products.png",
    "/images/Media.png",
    "/images/promotions.png",
    "/images/oman-Contact.png"
   
    ],
},
{
  slug: 'vitual-assistat',
  title: 'Hiring Virtual Assistant',
  subtitle: 'Modern Landing Page Design for Assistant Services',
  type: 'website3',
  overview: "This is a conceptual landing page design for a virtual assistant hiring service. The project was created to explore visual hierarchy, responsive design, and user engagement principles. It is a UI-focused demo without real client constraints or user research.",
  coverImages: [
  "/images/virtual-cover.png"
  
    ],
  problemStatement: "Small businesses and solo entrepreneurs often struggle to find reliable virtual assistants. This landing page is designed to help them quickly understand the service, explore benefits, and take action.",
  goals:[
    'Create a visually appealing, modern interface for both mobile and desktop.',
    'Encourage user conversion through strong CTAs and layout hierarchy.',
    'Demonstrate responsive design best practices.',
    'Performed UI research for a modern, on-brand, visually appealing design.',
    'Maintain accessibility with proper contrast and font sizes.'
  ],
      typography: {
      fontUsed: ["Poppins"],
      weights: ["Black", "Extra Bold", "Bold", "Semi Bold", "Medium", "Regular", "Light", "Extra Light", "Thin"],
      previewText: `ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    abcdefghijklmnopqrstuvwxyz
                    0123456789
                    !@#$%^&*()-_+=<>{}[]|:;"',.?/~\``
    },
    colors: {
    values: [
      { label: 'Primary', hex: '#E65612' },
      { label: 'Secondary', hex: '#FED7C4' },
      { label: 'bgColor', hex: '#FFFFFF' },
    ]
  },
wireframes: [
    "/images/virtual2.png",
    "/images/virtual1.png"   
    ],
},
{
  slug: 'renovate-o-matic',
  title: 'Renovate-o-Matic',
  subtitle: 'Custom Interior Design Solutions for Every Space',
  type: 'website4',
  overview: "Renovate-o-Matic is a conceptual interior design and renovation platform that offers personalized remodeling services for kitchens, bathrooms, backyards, and basements. The website aims to connect homeowners with professional renovation experts through an intuitive digital experience. The project focuses on showcasing service offerings, inspiring trust, and encouraging users to request a consultation with ease.",
  coverImages: [
  "/images/reno-cover1.png"
  
    ],
  problemStatement: "Homeowners often struggle to find reliable, design-focused renovation services that cater to their specific needs and style preferences. Existing platforms are either too generic, lack visual appeal, or fail to communicate the personalization and quality of craftsmanship offered by interior designers. There is a clear gap in the market for a platform that combines functional service browsing with design inspiration and trust-building content.",
  goals:[
    'Design a visually engaging and user-friendly website that reflects the creative and professional nature of Renovate-o-Matic’s services.',
    'Clearly present the four main renovation categories: kitchens, bathrooms, backyards, and basements.',
    'Build user trust through testimonials, high-quality visuals, and a transparent process.',
    'Drive conversions through strategic CTAs encouraging free consultations.'   
  ],
      typography: {
      fontUsed: ["Poppins"],
      weights: ["Black", "Extra Bold", "Bold", "Semi Bold", "Medium", "Regular", "Light", "Extra Light", "Thin"],
      previewText: `ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    abcdefghijklmnopqrstuvwxyz
                    0123456789
                    !@#$%^&*()-_+=<>{}[]|:;"',.?/~\``
    },
    colors: {
    values: [
      { label: 'Primary', hex: '#3A5B22' },
      { label: 'Secondary', hex: '#EBF0EF' },
      { label: 'bgColor', hex: '#FFFFFF' },
    ]
  },
wireframes: [
    "/images/estimate1.png",
    "/images/estimate2.jpg", 
    "/images/estimate3.png",
    "/images/estimate4.png",
    "/images/estimate5.png", 
    ],
},
{
  slug: 'eid-poster',
  type: 'poster',
  title: 'Eid Posters',
  subtitle: 'Eid-al-Adha Posters for Different Campaigns',
  overview: 'This project involved designing festive Eid-al-Adha posters for two different companies. The goal was to create visually appealing designs that celebrate the cultural essence of Eid while aligning with each brand’s identity and social media campaign requirements.',
  goals: [
    'Design two unique Eid-al-Adha posters for different companies',
    'Maintain cultural relevance while following brand guidelines',
    'Create visually engaging designs optimized for social media campaigns'
  ],
  designProcess: [
    'Reviewed each company’s branding and campaign requirements',
    'Researched Eid-al-Adha visual themes and festive design elements',
    'Created multiple poster layout variations in Photoshop and Illustrator',
    'Applied appropriate typography and color schemes for each brand',
    'Refined designs based on feedback and prepared final deliverables'
  ],
  softwareUsed: ['Canva', 'Adobe Photoshop'],

  variations: [
    "/images/Eid1.png",
    "/images/Eid2.jpg"
  ],

  colors: {
    values: [
      { label: "Dark Brown", hex: "#794b12" },
      { label: "White", hex: "#FFFFFF" },
      { label: "Gold", hex: "#D4AF37" },
      { label: "Dark Green", hex: "#004225" },
      { label: "Gray", hex: "#6e6b6a" },
      { label: "Dark Indigo", hex: "#1c1553" },

    ]
  },

  reflection: 'Designing these Eid-al-Adha posters allowed me to combine cultural creativity with brand consistency. Each poster successfully matched the client’s vision and received positive feedback, helping increase engagement during the festive campaign.'
},
{
  slug: 'fcai',
  title: 'FCAI Website',
  subtitle: 'Website Designed for Research and Enterprise Cell',
  type: 'website5',
  overview: "This project involved designing a website for FCAI (Faculty of Computing and Artificial Intelligence) at Air University. The platform was developed to merge the Research and Enterprise Cell into a single digital hub, enabling students to access resources, explore opportunities, and engage with a 2-year structured program focused on research and industry collaboration.",
  coverImages: [
    "/images/fcai-cover.png"
  ],
  problemStatement: "Students at Air University needed a unified platform to connect research initiatives with enterprise opportunities. The absence of a centralized hub created confusion and limited access to program details. This website solves the problem by integrating research and enterprise resources into one accessible and user-friendly platform.",
  goals: [
    'Design a modern, accessible, and responsive platform for students and faculty.',
    'Provide clear navigation for program details, resources, and events.',
    'Create a unified hub to merge Research and Enterprise Cell functions.',
    'Support the 2-year student program with structured information and resources.',
    'Ensure a professional and visually appealing UI that aligns with the university’s branding.'
  ],
  typography: {
    fontUsed: ["Poppins"],
    weights: ["Black", "Extra Bold", "Bold", "Semi Bold", "Medium", "Regular", "Light", "Extra Light", "Thin"],
    previewText: `ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  abcdefghijklmnopqrstuvwxyz
                  0123456789
                  !@#$%^&*()-_+=<>{}[]|:;"',.?/~\``
  },
  colors: {
    values: [
      { label: 'Primary', hex: '#002147' }, 
      { label: 'bg-color', hex: '#F5F5F5' }
    ]
  },
  wireframes: [
    "/images/FCAI1.png",
    "/images/FCAI2.png"
  ]
},
{
  slug: 'tym-contest',
  type: 'poster1',
  title: 'TYM Contest',
  subtitle: 'Posters for The Youth Matrix Contest Announcement and Winners',
  overview: 'This project involved creating posters for The Youth Matrix (TYM) Graphic Design and Content Writing Contest. The first poster was designed to announce the contest, while the second poster showcased the winners. The goal was to maintain a professional and engaging visual style that attracted participants and celebrated the winners effectively.',
  goals: [
    'Design a contest announcement poster that is clear and visually appealing',
    'Create a winner announcement poster that highlights the achievements of the participants',
    'Maintain brand consistency for The Youth Matrix throughout both posters',
    'Optimize designs for digital platforms and social media'
  ],
  designProcess: [
    'Reviewed contest requirements and branding guidelines of The Youth Matrix',
    'Designed an engaging announcement poster using bold typography and vibrant colors',
    'Developed a winners poster layout that showcased the winners professionally',
    'Refined both posters based on internal feedback and final approval for publishing'
  ],
  softwareUsed: ['Canva', 'Adobe Photoshop'],

  variations: [
    "/images/battle1.png",
    "/images/battle2.png"
  ],

  colors: {
    values: [
      { label: "Yellow", hex: "#ED950A" },
      { label: "Gray", hex: "#E1EAE7" },
      { label: "Blue", hex: "#184585" },
      { label: "Green", hex: "#337D51" }      
    ]
  },

  reflection: 'Designing the contest and winner posters for The Youth Matrix was an opportunity to combine clear communication with engaging design. Both posters effectively connected with the audience, boosted participation, and received positive feedback from the community.'
},
{
  slug: 'encodersden',
  title: 'EncodersDen Landing Page',
  subtitle: 'Redesign a Smart Tech Solutions Website Landing page',
  type: 'website6',
  overview: "This project involved redesigning the landing page for EncodersDen, a technology solutions provider. The goal was to create a modern, visually appealing, and conversion-focused interface that reflects the company's mission of delivering smart tech solutions to help businesses grow with custom-built services.",
  coverImages: [
    "/images/encoders-cover.png"
  ],
  problemStatement: "The previous landing page of EncodersDen lacked a clear visual hierarchy and strong calls-to-action, which reduced user engagement and lead conversions. The redesign aimed to improve user experience, reinforce brand identity, and communicate the value of EncodersDen's custom tech solutions effectively.",
  goals: [
    'Redesign a professional and modern landing page for EncodersDen.',
    'Highlight services, solutions, and business growth benefits clearly.',
    'Create a conversion-driven layout with well-placed CTAs.',
    'Ensure responsive design for seamless experience across devices.',
    'Align the UI with EncodersDen’s brand identity and tech-oriented aesthetics.'
  ],
  typography: {
    fontUsed: ["Poppins"],
    weights: ["Black", "Extra Bold", "Bold", "Semi Bold", "Medium", "Regular", "Light", "Extra Light", "Thin"],
    previewText: `ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  abcdefghijklmnopqrstuvwxyz
                  0123456789
                  !@#$%^&*()-_+=<>{}[]|:;"',.?/~\``
  },
  colors: {
    values: [
      { label: 'Primary', hex: '#0F2840' },
      { label: 'Secondary', hex: '#EAEAEA' },
      { label: 'Secondary', hex: '#F4D7B4' }    
    ]
  },
  wireframes: [
    "/images/Homey.png"
  ]
},

{
  slug: 'tym-logo',
  type: 'logo1',
  title: 'The Youth Matrix Logo',
  subtitle: 'Logo design for The Youth Matrix branding',
  overview: 'This project involved designing a logo for The Youth Matrix, an organization focused on youth empowerment and skill development. The aim was to create a bold and modern identity that represents growth, innovation, and collaboration.',
  goals: [
    'Create a professional and scalable logo for The Youth Matrix',
    'Reflect values of growth, innovation, and youth empowerment',
    'Ensure adaptability across digital and print formats'
  ],
  designProcess: [
    'Analyzed The Youth Matrix brand values and target audience',
    'Sketched multiple conceptual ideas for symbolic representation',
    'Designed 3 logo variants using vector-based tools',
    'Reviewed and refined designs based on visual balance and feedback',
    'Finalized the 3rd variant as the official logo'
  ],  
  softwareUsed: ['Adobe Illustrator', 'Photoshop'],

  variations: [
    "/images/tym-Logo-1.png",
    "/images/tym-Logo-2.png",
    "/images/tym-Logo-3.png"
  ],
  colors: {
    values: [
      { label: "Dark Green", hex: "#14733c" },
      { label: "Dark Indigo", hex: "#1c1551" },
      { label: "Orange", hex: "#e7ae29" }
    ]
  },

  reflection: 'Designing the logo for The Youth Matrix allowed me to merge creativity with strategic branding. After exploring three variants, the third design was finalized for its clarity, relevance, and strong visual identity that aligns perfectly with the organization’s vision.'
},

{
  slug: 'tym-summer-fellowship-2025',
  type: 'poster2',
  title: 'TYM Posters',
  subtitle: 'Poster designs for The Youth Matrix Summer Fellowship 2025',
  overview: 'This project involved designing promotional posters for The Youth Matrix Summer Fellowship 2025. The aim was to create visually appealing designs that communicated program details, attracted participants, and maintained brand consistency across all visual assets.',
  goals: [
    'Design posters that effectively promote the Summer Fellowship 2025 program',
    'Maintain The Youth Matrix branding guidelines and color identity',
    'Create engaging layouts optimized for both digital and print platforms',
    'Ensure clear presentation of program information and call-to-action'
  ],
  designProcess: [
    'Reviewed the Summer Fellowship program details and objectives',
    'Researched design trends for educational and fellowship-based campaigns',
    'Developed multiple poster layouts and visual concepts',
    'Incorporated The Youth Matrix branding and refined typography and colors',
    'Finalized the posters after feedback and ensured high-resolution export for distribution'
  ],
  softwareUsed: ['Canva', 'Adobe Photoshop'],

  variations: [
    "/images/post1.png",
    "/images/post2.png",
    "/images/post3.png"
  ],
  colors: {
    values: [
      { label: "Dark Green", hex: "#14733c" },
      { label: "Dark Indigo", hex: "#1c1551" },
      { label: "Orange", hex: "#e7ae29" },
      { label: "White", hex: "#FFFFFF" }
    ]
  },

  reflection: 'Designing the posters for The Youth Matrix Summer Fellowship 2025 allowed me to create professional and engaging visuals that attracted students and young professionals. These designs successfully conveyed program details while staying true to the brand’s identity and vision.'
}
    
]
