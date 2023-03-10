import Mock from "../mock";

const database = {
  information: {
    name: "Nazar Kruk",
    aboutContent:
      "I am highly efficient and reliable Software Engineer, who possesses a broad skill set for web and mobile applications development.",
    age: 24,
    phone: "",
    nationality: "American",
    language: "English, French",
    email: "",
    address: "121 King Street, Melbourne, Australia",
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "https://www.facebook.com/nazarkruk84/",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/nazar-kruk-soft",
      dribbble: "",
      github: "https://github.com/nazarkruk",
    },
    brandImage: "/images/brand-image-b.png",
    aboutImage: "/images/about-image-lg_n.jpg",
    aboutImageLg: "/images/about-image-lg_n.jpg",
    cvfile: "/files/nazar-kruk-resume.pdf",
  },
  services: [
    {
      title: "Web Design",
      icon: "brush-alt",
      details:
        "I’m passionate about pixel-perfect, cutting-edge interfaces and intuitively implemented UX.",
    },
    {
      title: "Web Development",
      icon: "code",
      details:
        "I enjoy bringing ideas to life in the browser, and like to create something from scratch.",
    },
    {
      title: "Mobile Application",
      icon: "mobile",
      details:
        "I build single-code base mobile apps with high performance and feel of a native application.",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: "Burdette Turner",
        designation: "Web Developer, Abc Company",
      },
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: "Susan Yost",
        designation: "Client",
      },
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: "Irving Feeney",
        designation: "Fiverr Client",
      },
    },
  ],
  skills: [
    {
      title: "HTML5",
      value: 95,
    },
    {
      title: "CSS3",
      value: 90,
    },
    {
      title: "Javascript",
      value: 85,
    },
    {
      title: "Node.js",
      value: 75,
    },
    {
      title: "ReactJS",
      value: 80,
    },
    {
      title: "MongoDB",
      value: 90,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://dribbble.com",
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "https://facebook.com",
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: "https://pinterest.com",
    },
    {
      id: 4,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: "#",
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    },
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: "https://twitter.com",
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    },
    {
      id: 10,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: "#",
    },
    {
      id: 11,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "https://facebook.com",
    },
    {
      id: 12,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: "https://pinterest.com",
    },
    {
      id: 13,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://dribbble.com",
    },
    {
      id: 14,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    },
    {
      id: 15,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    },
    {
      id: 16,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: "https://twitter.com",
    },
    {
      id: 17,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    },
    {
      id: 18,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    },
    {
      id: 19,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://dribbble.com",
    },
    {
      id: 20,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "https://facebook.com",
    },
    {
      id: 21,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: "https://pinterest.com",
    },
    {
      id: 22,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: "#",
    },
    {
      id: 23,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "June 2019 - Present",
        position: "Software Engineer",
        company: "HPH Hospitality",
        details:
          "Developing set of React, React Native applications including: Food Ordering App, Order Management Dashboard, Kitchen Display App. Integrating third-party delivery service APIs to complete applications workflow cycle. ",
      },
      {
        id: 2,
        year: "Feb 2018 - May 2019",
        position: "Software Quality Assurance Engineer",
        company: "Premium Soft Labs",
        details:
          "Built automation framework and test scripts using Selenium Web-Driver and Python for multiple platforms and browsers testing.  Developed automation test cases using Python and Selenium Web Driver, executed these test scripts and logged defects in JIRA.",
      },
      {
        id: 3,
        year: "Sep 2013 - Feb 2018",
        position: "QA Associate",
        company: "PEG",
        details:
          "Performed quality control checks, identify and track source documentation errors and non-conformances with requirements. Assisted in the preparation of reports for submission to regulatory authorities. ",
      },
      {
        id: 4,
        year: "Jul 2005 - Jun 2013",
        position: "IT Support Specialist",
        company: "Photo Mania",
        details:
          "Set up secure WIFI, LAN and VoIP networks at remote locations, leading client/server configuration and performance-tuning of crucial infrastructure to ensure seamless business operations.",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2022 - 2023",
        graduation: "Full Stack Web and Mobile Development Bootcamp",
        university: "Nucamp",
        details:
          "Server-side Development with NodeJS, Express and MongoDB. User authentication and fundamentals of cybersecurity.",
      },
      {
        id: 2,
        year: "2004- 2005",
        graduation: "Master of Science",
        university: "Lviv Polytechnic National University",
        details:
          "Institute of Computer Technologies, Automation and Metrology. Department of Specialized Computer Systems.",
      },
      {
        id: 3,
        year: "2001 - 2004",
        graduation: "Bachelor of Science",
        university: "Lviv Polytechnic National University",
        details:
          "Institute of Computer Technologies, Automation and Metrology. Department of Specialized Computer Systems.",
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: "LE DISTRICT REACT APP",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/le-district-app.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 2,
      title: "HPH ORDERS DASHBOARD",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/hph-orders-dashboard.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 3,
      title: "LIBERTY BISTRO KITCHEN DISPLAY APP",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/lb-kitchen-display.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 4,
      title: "L'APPART RESERVATIONS APP",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/lappart-reservation-app.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 5,
      title: "KREDENS GIFT ECOMMERCE APP",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/kredens-gift-ecommerce-app.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 6,
      title: "ST GEORGE CHURCH WEB APP",
      featuredImage: "/images/blog-image-6.jpg",
      filesource: "../../blog/st-george-church-app.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
  ],
  contactInfo: {
    phoneNumbers: ["+1 929-293-5412"],
    emailAddress: ["nazarkruk@icloud.com"],
    address: "Yonkers, New York 10701",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
