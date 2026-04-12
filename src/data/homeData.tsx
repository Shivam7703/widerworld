import {
  about2,
  banner,
  banner2,
  banner3,
  bene2,
  box1,
  box2,
  box3,
  cl1,
  cl2,
  cl3,
  cl4,
  cl5,
  cl6,
  cl7,
  cl8,
  cl9,
  immigration,
  Career,
  ielts,
  jobAssist,
  PostLanding,
  profile,
  pte,
  visaDocument,
  famvisa,
  prvisa,
  business,
  touristvisa,
  contactb,
  logo2,
  process1,
  ukflag,
  visa1,
  canadaflag,
  ontario,
  bcPnpProgram,
  alberta,
  novaScotia,
  manitoba,
  saskatchewanPnp,
  bann,
  about,
  back,
} from "@/assets";
import { FaBriefcase, FaGlobeAmericas, FaPlaneDeparture } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiOutlineFlag, HiOutlineLightBulb } from "react-icons/hi";
import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import { MdAttachEmail, MdWifiCalling3 } from "react-icons/md";
import { RiUserFollowLine } from "react-icons/ri";

// homepage
export const navigationMenu = {
  primaryMenu: [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About Us", href: "/about-us" },

    {
      id: 3,
      label: "Our Services",
      href: "#",
      subNav: [
        { id: 1, label: "Visa Services", href: "/services/visa-services" },
        { id: 2, label: "Career Counselling", href: "/services/career-counselling" },
        { id: 3, label: "Profile Marketing", href: "/services/profile-marketing" },
        { id: 4, label: "Resume Writing", href: "/services/resume-writing" },
        {
          id: 5,
          label: "Post Landing Services",
          href: "/services/post-landing-services",
          subNav: [
            { id: 1, label: "Pre Hotel / PG", href: "/services/pre-hotel-pg" },
            { id: 2, label: "Bank Account", href: "/services/bank-account" },
            { id: 3, label: "Documentation", href: "/services/documentation" },
            { id: 4, label: "Orientation", href: "/services/orientation" },
          ],
        },
      ],
    },

    {
      id: 4,
      label: "Coaching",
      href: "#",
      subNav: [
        { id: 1, label: "IELTS", href: "/coaching/ielts" },
        { id: 2, label: "PTE", href: "/coaching/pte" },
        { id: 3, label: "TOEFL", href: "/coaching/toefl" },
        { id: 4, label: "CELPIP", href: "/coaching/celpip" },
        { id: 5, label: "OET", href: "/coaching/oet" },
      ],
    },

    {
      id: 5,
      label: "Updates",
      href: "#",
      subNav: [
        { id: 1, label: "News", href: "/news" },
        { id: 2, label: "Blogs", href: "/blogs" },
      ],
    },

    { id: 6, label: "Contact Us", href: "/contact-us" },
  ],

  secondaryMenu: [
   
        {
          id: 1,
          label: "Canada",
          href: "#",
          subNav: [
            { id: 1, label: "PR Visa", href: "/visa/canada-pr-visa" },
            { id: 2, label: "Work", href: "/visa/canada-work-visa" },
            { id: 3, label: "Study", href: "/visa/canada-study-visa" },
            { id: 4, label: "Visit", href: "/visa/canada-visit-visa" },
            { id: 5, label: "Business Visa", href: "/visa/canada-business-visa" },
            { id: 6, label: "Investor Visa", href: "/visa/canada-investor-visa" },
            { id: 7, label: "Spouse Visa", href: "/visa/canada-spouse-visa" },
            { id: 8, label: "Super Visa", href: "/visa/canada-super-visa" },
          ],
        },

        {
          id: 2,
          label: "Australia",
          href: "#",
          subNav: [
            { id: 1, label: "PR Visa", href: "/visa/australia-pr-visa" },
            { id: 2, label: "Work", href: "/visa/australia-work-visa" },
            { id: 3, label: "Study", href: "/visa/australia-study-visa" },
            { id: 4, label: "Visit", href: "/visa/australia-visit-visa" },
            { id: 5, label: "Business Visa", href: "/visa/australia-business-visa" },
            { id: 6, label: "Investor Visa", href: "/visa/australia-investor-visa" },
            { id: 7, label: "Spouse Visa", href: "/visa/australia-spouse-visa" },
          ],
        },

        {
          id: 3,
          label: "New Zealand",
          href: "#",
          subNav: [
            { id: 1, label: "PR Visa", href: "/visa/new-zealand-pr-visa" },
            { id: 2, label: "Work", href: "/visa/new-zealand-work-visa" },
            { id: 3, label: "Study", href: "/visa/new-zealand-study-visa" },
            { id: 4, label: "Visit", href: "/visa/new-zealand-visit-visa" },
          ],
        },

        {
          id: 4,
          label: "Europe",
          href: "#",
          subNav: [
            {
              id: 1,
              label: "Work Visa",
              href: "#",
              subNav: [
                { id: 1, label: "Ireland", href: "/visa/ireland-work-visa" },
                { id: 2, label: "Luxembourg", href: "/visa/luxembourg-work-visa" },
                { id: 3, label: "Malta", href: "/visa/malta-work-visa" },
                { id: 4, label: "Poland", href: "/visa/poland-work-visa" },
                { id: 5, label: "Netherlands", href: "/visa/netherlands-work-visa" },
                { id: 6, label: "Germany", href: "/visa/germany-work-visa" },
                { id: 7, label: "Sweden", href: "/visa/sweden-work-visa" },
                { id: 8, label: "Finland", href: "/visa/finland-work-visa" },
                { id: 9, label: "Italy", href: "/visa/italy-work-visa" },
                { id: 10, label: "Denmark", href: "/visa/denmark-work-visa" },
              ],
            },
          ],
        },

        {
          id: 5,
          label: "GCC",
          href: "#",
          subNav: [
            {
              id: 1,
              label: "Work Visa",
              href: "#",
              subNav: [
                { id: 1, label: "UAE", href: "/visa/uae-work-visa" },
                { id: 2, label: "Oman", href: "/visa/oman-work-visa" },
                { id: 3, label: "Kuwait", href: "/visa/kuwait-work-visa" },
                { id: 4, label: "Qatar", href: "/visa/qatar-work-visa" },
                { id: 5, label: "Saudi Arabia", href: "/visa/saudi-work-visa" },
              ],
            },
          ],
        },

        {
          id: 6,
          label: "USA",
          href: "#",
          subNav: [
            { id: 1, label: "Visit", href: "/visa/usa-visit-visa" },
            { id: 2, label: "Investor Visa", href: "/visa/usa-investor-visa" },
            { id: 3, label: "Business Visa", href: "/visa/usa-business-visa" },
          ],
        },

    {
      id: 12,
      label: "PNP Programs",
      href: "#",
      subNav: [
        { id: 1, label: "AAIP", href: "/visa/aaip" },
        { id: 2, label: "BC PNP", href: "/visa/bc-pnp" },
        { id: 3, label: "MPNP", href: "/visa/mpnp" },
        { id: 4, label: "NBPNP", href: "/visa/nbpnp" },
        { id: 5, label: "NLPNP", href: "/visa/nlpnp" },
        { id: 6, label: "NWTNP", href: "/visa/nwtnp" },
        { id: 7, label: "NSNP", href: "/visa/nsnp" },
        { id: 8, label: "AIP", href: "/visa/aip" },
        { id: 9, label: "OINP", href: "/visa/oinp" },
        { id: 10, label: "PEI PNP", href: "/visa/pei-pnp" },
        { id: 11, label: "SINP", href: "/visa/sinp" },
        { id: 12, label: "YNP", href: "/visa/ynp" },
      ],
    },

    {
      id: 13,
      label: "Points Calculator",
      href: "#",
      subNav: [
        { id: 1, label: "Canada 67 Points Calculator", href: "/calculator/canada-67-points" },
        { id: 2, label: "Australia Points Calculator", href: "/calculator/australia-points" },
        { id: 3, label: "New Zealand Points Calculator", href: "/calculator/new-zealand-points" },
      ],
    },

    {
      id: 4,
      label: "Other Visas",
      href: "#",
      subNav: [
        { id: 1, label: "Dubai Golden Visa", href: "/visa/dubai-golden-visa" },
        { id: 2, label: "Schengen Visa", href: "/visa/schengen-visa" },
        {
          id: 3,
          label: "Tourist Visa",
          href: "#",
          subNav: [
            { id: 1, label: "UK", href: "/visa/uk-tourist-visa" },
            { id: 2, label: "Germany", href: "/visa/germany-tourist-visa" },
            { id: 3, label: "Ireland", href: "/visa/ireland-tourist-visa" },
            { id: 4, label: "Luxembourg", href: "/visa/luxembourg-tourist-visa" },
            { id: 5, label: "Malta", href: "/visa/malta-tourist-visa" },
            { id: 6, label: "Poland", href: "/visa/poland-tourist-visa" },
            { id: 7, label: "Netherlands", href: "/visa/netherlands-tourist-visa" },
            { id: 8, label: "Portugal", href: "/visa/portugal-tourist-visa" },
            { id: 9, label: "Sweden", href: "/visa/sweden-tourist-visa" },
            { id: 10, label: "Italy", href: "/visa/italy-tourist-visa" },
            { id: 11, label: "France", href: "/visa/france-tourist-visa" },
            { id: 12, label: "Spain", href: "/visa/spain-tourist-visa" },
          ],
        },
      ],
    },
  ],
};

export const sliderContent = [
 
  {
    id: 1, // Fix duplicate id issue by using unique ids
    img: banner2,
    welcome: "Best Agri-input & Crop Protection Firm ",
    title1: "Helping farmers grow more with ",
    title2: "simple and effective products.",
    para:
      "Making farming simple and effective. Your crops will be protected while the soil gets nourished for increased production.",
    btntext: "Contact Us",
    href: "/contact-us",
  },
  {
    id: 2, // Fix duplicate id issue by using unique ids
    img: bann,
    welcome: "Best Agri-input & Crop Protection Firm ",
    title1: "Leading the Future of Crop ",
    title2: "Protection & Growth",
    para:
      "Empowering farmers with innovative agri-solutions that ensure healthier crops and higher yields. Sustainable, effective, and farmer-focused—we help you grow with confidence.",
    btntext: "Contact Us",
    href: "/contact-us",
  },
];

export const aboutdata = {
  img1: about2,
  img2:about,
  title1: "ABOUT US",
  title2: "Trusted & Expert Immigration ",
  title3: "Consultant",
  para:
    "We deliver reliable, results-oriented immigration solutions backed by expert guidance, ethical practices, and structured processes. Recognized for offering the best immigration consultants in Noida, we support individuals and families from visa planning to final submission, ensuring clarity, confidence, and complete professional assistance throughout the process. We deliver reliable, results-oriented immigration solutions backed by expert guidance, ethical practices, and structured processes. Recognized for offering the best immigration consultants in Noida, we support individuals and families from visa planning to final process.",
  pointer: [
    {
      id: 1,
      heading: "Transparency",
      text: "Clear processes, honest advice, and no hidden commitments.",
      icon: <IoSearch />,
    },
    {
      id: 2,
      heading: "Client Satisfaction",
      text: "Focused on results, trust, and long-term client success.",
      icon: <RiUserFollowLine />,
    },     {
      id: 3,
      heading: "Transparency",
      text: "Clear processes, honest advice, and no hidden commitments.",
      icon: <IoSearch />,
    },
    {
      id: 4,
      heading: "Client Satisfaction",
      text: "Focused on results, trust, and long-term client success.",
      icon: <RiUserFollowLine />,
    },
  ],
};

export const aboutdata2 = {
  img1: about2,
  img2: box2,
  title1: "ABOUT US",
  title2: "Leading Immigration ",
  title3: "Consultancy",
  para:
    "Focused on clarity and compliance, we are the best immigration consultants in Noida, delivering profile-based immigration guidance and end-to-end visa support. Our expert team follows ethical practices and structured processes to help individuals and families achieve global opportunities with confidence.",

  pointer: [
    {
      id: 1,
      heading: "Leading Immigration Consultancy",
      text:
        "Delivering ethical guidance, expert support, and reliable solutions for global immigration success.",
      icon: <FaPlaneDeparture />,
    },
    {
      id: 2,
      heading: "Immigration Solutions That Work",
      text:
        "Structured processes and expert guidance to help you move abroad with confidence.",
      icon: <IoSettingsOutline />,
    },
  ],
};

export const visaSliderdata = {
  title1: "Wide Range of Visa Options",
  title2: "Structured Immigration Services for PR and Citizenship",

  cards: [
    {
      id: 1,
      img: visa1,
      heading: "Work Visa",
      text:
        "Support for work visa applications with proper documents and employer-compliant immigration procedures.",
    },
    {
      id: 2,
      img: prvisa,
      heading: "Permanent Residency Visa",
      text:
        "Guidance to apply for permanent residency through structured programs and accurate profile submission.",
    },
    {
      id: 3,
      img: famvisa,
      heading: "Family Sponsorship Visa",
      text:
        "Help families reunite abroad through legal sponsorship filing and complete documentation support.",
    },
    {
      id: 4,
      img: business,
      heading: "Business & Investor Visa",
      text:
        "Assistance for investors and entrepreneurs applying through approved business and investment immigration routes.",
    },
    {
      id: 5,
      img: touristvisa,
      heading: "Tourist / Visitor Visa",
      text:
        "Simple assistance for visitor visa applications with clear guidance and timely submission.",
    },
  ],
};

export const countrytomigrate = {
  title1: "Countries We Offer",
  title2: "We Provide Expert Immigration And Destinations.",

  cards: [
    {
      id: 1,
      img: canadaflag,
      heading: "United States",
      link: "country/us",
      points: [
        "4 Years Business Visa",
        "Visa Apply Online",
        "Student Admission Visa",
        "24/7 Support",
      ],
    },
    {
      id: 2,
      img: ukflag,
      heading: "United Kingdom",
      link: "country/uk",
      points: [
        "4 Years Business Visa",
        "Visa Apply Online",
        "Student Admission Visa",
        "24/7 Support",
      ],
    },
    {
      id: 3,
      img: canadaflag,
      heading: "Canada",
      link: "country/canada",
      points: ["PR Pathways", "Express Entry", "Student Visa", "24/7 Support"],
    },
    {
      id: 4,
      img: ukflag,
      heading: "Australia",
      link: "country/australia",
      points: [
        "Skilled Migration",
        "Work Visa",
        "Student Visa",
        "24/7 Support",
      ],
    },
  ],
};


import { FiSettings } from "react-icons/fi";


export const workingprocess = {
  title1: "Our Working Process",
  title2: "Get Your Visa Approved in 4 Easy Steps.",

  cards: [
    {
      id: 1,
      img: process1,
      heading: "Initial Consultation",
      text:
        "Discuss your goals and assess eligibility for the best visa option.",
    },
    {
      id: 2,
      img: process1,
      heading: "Document Preparation",
      text:
        "Gather and organize all required documents for a smooth application.",
    },
    {
      id: 3,
      img: process1,
      heading: "Application Submission",
      text:
        "Submit your visa application accurately with expert guidance and follow-up.",
    },
    {
      id: 4,
      img: process1,
      heading: "Approval & Support",
      text:
        "Receive visa approval and get assistance with post-landing formalities.",
    },
  ],
};

export const canadapnp = {
  bgImg:back,
  title1: "Countries We Offer",
  title2:
    "Offering skilled workers and entrepreneurs ",

  cards: [
    {
      id: 1,
      img: ontario,
      flag: canadaflag,
      cat:"abroad",
      heading: "Ontario Immigrant Nominee Program (OINP) ",
      points: ["• Processing: 3–6 Months", "• High Nomination Quota"],
      text:
        "Provincial nomination for skilled workers to live and work in Ontario.",
      link: "/canada-pnp",
    },
    {
      id: 2,
      img: bcPnpProgram,
      flag: canadaflag,
            cat:"mbbs",

      heading: "British Columbia PNP (BC PNP)",
      points: ["• Processing: 2–4 Months", "• Regular Invitation Rounds"],
      text:
        "Nominations for skilled workers and entrepreneurs targeting opportunities in British Columbia.",
      link: "/canada-pnp",
    },
    {
      id: 3,
      img: alberta,
      flag: canadaflag,
            cat:"abroad",

      heading: "Alberta Immigrant Nominee Program (AINP)",
      points: ["• Processing: 4–6 Months", "• Lower CRS Possibility"],
      text:
        "Streamlined immigration for workers with skills needed in Alberta’s labor market.",
      link: "/canada-pnp",
    },
    {
      id: 4,
      img: saskatchewanPnp,
      flag: canadaflag,
            cat:"abroad",

      heading: "Saskatchewan Immigrant",
      points: ["• Processing: 2–5 Months", "• In-Demand Occupation Stream"],
      text:
        "Offers pathways for workers, entrepreneurs, and farmers to settle in Saskatchewan.",
      link: "/canada-pnp",
    },
    {
      id: 5,
      img: manitoba,
      flag: canadaflag,
            cat:"mbbs",

      heading: "Manitoba Provincial Nominee Program (MPNP)",
      points: ["• Processing: 3–5 Months", "• Strong Provincial Support"],
      text:
        "Supports skilled workers and international graduates aiming to live in Manitoba.",
      link: "/canada-pnp",
    },
    {
      id: 6,
      img: novaScotia,
      flag: canadaflag,
            cat:"mbbs",

      heading: "Nova Scotia Nominee Program (NSNP)",
      points: ["• Processing: 3–6 Months", "• Express Entry Priority"],
      text:
        "Nomination stream focused on attracting workers and graduates to Nova Scotia.",
      link: "/canada-pnp",
    },
        {
      id: 7,
      img: manitoba,
      flag: canadaflag,
            cat:"abroad",

      heading: "Manitoba Provincial Nominee Program (MPNP)",
      points: ["• Processing: 3–5 Months", "• Strong Provincial Support"],
      text:
        "Supports skilled workers and international graduates aiming to live in Manitoba.",
      link: "/canada-pnp",
    },
    {
      id: 8,
      img: novaScotia,
      flag: canadaflag,
            cat:"abroad",

      heading: "Nova Scotia Nominee Program (NSNP)",
      points: ["• Processing: 3–6 Months", "• Express Entry Priority"],
      text:
        "Nomination stream focused on attracting workers and graduates to Nova Scotia.",
      link: "/canada-pnp",
    },
        {
      id: 9,
      img: manitoba,
      flag: canadaflag,
            cat:"mbbs",

      heading: "Manitoba Provincial Nominee Program (MPNP)",
      points: ["• Processing: 3–5 Months", "• Strong Provincial Support"],
      text:
        "Supports skilled workers and international graduates aiming to live in Manitoba.",
      link: "/canada-pnp",
    },
    {
      id: 10,
      img: novaScotia,
      flag: canadaflag,
            cat:"abroad",

      heading: "Nova Scotia Nominee Program (NSNP)",
      points: ["• Processing: 3–6 Months", "• Express Entry Priority"],
      text:
        "Nomination stream focused on attracting workers and graduates to Nova Scotia.",
      link: "/canada-pnp",
    },
  ],
};

export const Whychoose = {
  img: box1,

  title1: "Why Choose Us",
  title2: "India’s Best immigration consultants ",
  title3: "",
  para:
    "Wider World, the immigration consultants in Noida, offers reliable and result-driven immigration solutions backed by experienced professionals and transparent processes. We focus on profile-based guidance, accurate documentation, and legal compliance to ensure smooth visa applications. With a client-first approach, ethical practices, and personalized support, we help individuals and families in Noida achieve their global immigration goals with confidence and clarity.",

  success: [
    { id: 1, value: "100%", text: "Visa Success Rate" },
    { id: 2, value: "100%", text: "Clients Satisfaction" },
    { id: 3, value: "100%", text: "Transparency" },
  ],
};

export const testimonialData = {
  title1: "Testimonial",
  title2: "What Our Client Says",
  testimonials: [
    {
      title: "Suresh Dixit",
      text:
        "WiderWorldcore guided my Canada PR smoothly with honest advice, clear timelines, and perfect documentation. Truly the best immigration consultants in Noida for anyone seeking transparent, professional, and reliable immigration support.",
      img: cl1,
    },
    {
      title: "Mohan Rane",
      text:
        "Excellent support for my work permit application. The team explained every step, handled documents professionally, and kept me updated. Their guidance reduced stress and helped me make confident decisions abroad.",
      img: cl1,
    },
    {
      title: "Manoj Saini",
      text:
        "WiderWorldcore helped us reunite through family sponsorship with clear communication and ethical advice. We experienced the best Visa consultants in Noida, with personalized attention and smooth processing throughout the entire journey.",
      img: cl1,
    },
    {
      title: "Sam Goyal",
      text:
        "From IELTS coaching to visa filing, the service was professional and supportive. Trainers and consultants worked together to strengthen my profile and guide me confidently toward my overseas goals successfully.",
      img: cl1,
    },
  ],
};

export const HomefaqData = {
  title1: "FAQs",
  title2: "Frequently Asked ",
  title3: " Questions",

  para1:
    "Our Frequently Asked Questions section answers common concerns about visas, eligibility, timelines, and documentation. ",
  Counts: [
    {
      value: 100,
      title: "Expert Guidance",
    },
    {
      value: 96,
      title: "Personalized Support",
    },
    {
      value: 94,
      title: "Global Expertise",
    },
  ],
  para2:
    "Designed to offer clarity and transparency, it helps you make informed decisions while choosing the Right immigration consultants in Noida for your global plans.",
  faqs: [
    {
      que: "How do I know which visa is right for me?",
      ans:
        "Visa selection depends on your age, education, work experience, language ability, and future goals. Our experts evaluate your complete profile and suggest the most suitable and compliant visa pathway, ensuring you receive the best immigration consultants.",
    },
    {
      que: "Can you guarantee visa approval?",
      ans:
        "No legitimate consultant can legally guarantee visa approval. We focus on correct documentation, ethical guidance, and proper program selection to maximize success while strictly following immigration laws and professional standards.",
    },
    {
      que: "Can you help if my application was refused?",
      ans:
        "Yes, we review refused applications to identify errors, gaps, or compliance issues. Our consultants suggest corrective strategies, improve documentation, and guide you on reapplication or alternative visa options to strengthen your chances of success.",
    },
    {
      que: "Why should I use a WiderWorldcore instead of applying on my own?",
      ans:
        "Immigration rules are complex and constantly changing. WiderWorldcore provides expert guidance, accurate documentation, and profile-based strategies to reduce mistakes, avoid refusals, and ensure your application meets legal and procedural requirements confidently.",
    },
    {
      que: "What does a Wider World consultant do?",
      ans:
        "A Wider World consultant evaluates your profile, recommends suitable visa pathways, manages documentation, files applications accurately, and provides continuous guidance from initial assessment to final decision, ensuring transparency, compliance, and personalized support throughout your immigration journey.",
    },
  ],
};

export const footer = {
  logo: logo2,
  text:
    "WiderWorldcore is a trusted consulting firm delivering reliable immigration and visa solutions through expert guidance, transparent processes, and personalized support, helping individuals and families achieve their global aspirations with confidence.",

  socials: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com//",
    linkedin: "https://www.linkedin.com/school//",
    youtube: "https://www.youtube.com/c/",
  },
  copyrightText: "Copyrights © 2026 . Designed and Manage by ",
  list1: {
    title: "Our Services",
    links: [
      { id: 1, label: "IELTS", href: "/services/ielts-coaching-preparation" },
      {
        id: 2,
        label: "PTE Exam",
        href: "/services/pte-exam-coaching-preparation",
      },
      {
        id: 3,
        label: "Post Landing Assistance",
        href: "/services/post-landing-assistance",
      },
      {
        id: 4,
        label: "Job Assistance",
        href: "/services/job-assistance",
      },
      {
        id: 5,
        label: "Immigration Services",
        href: "/services/immigration",
      },
    ],
  },

  list2: {
    title: "Our Services",
    links: [
      { id: 1, label: "IELTS", href: "about" },
      { id: 2, label: "PTE Exam", href: "career" },
      { id: 3, label: "Post Landing Assistance", href: "sustainability" },
      { id: 4, label: "Job Assistance", href: "blogs" },
      { id: 5, label: "Immigration Services", href: "contact-us" },
    ],
  },

  newLetter: {
    title: "Contact Us",
  },
};

export let blogData = {
  title1: "Latest Blogs",
  title2: "Get Updated With Our Recent Articles",
  blog: [
    {
      img: box3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Name",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Category",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Section",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Application",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: box3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Country",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
  ],
};

// about us
export const mission = {
  img: box1,
  title1: "Mission & Vision",
  title2: "Our Vision and ",
  title3: "Mission Statement",
  vision: [
    {
      icon: HiOutlineLightBulb,
      heading: "Our Vision",
      para:
        "Our vision is to become a trusted global name in immigration consulting by guiding people with honesty, clarity, and confidence. We aim to simplify complex immigration processes and help individuals and families build secure futures abroad through ethical practices and informed decision-making.",
    },
    {
      icon: HiOutlineFlag,
      heading: "Our Mission",
      para:
        "Our mission is to provide transparent, profile-based immigration guidance tailored to every client’s goals. We focus on accuracy, compliance, and continuous support at every stage, ensuring our clients feel informed, supported, and confident as they pursue opportunities across international borders.",
    },
  ],
};

export const whychooseus = {
  title1: "Why Choose Us",
  img: bene2,
  points: [
    {
      icon: <FaGlobeAmericas />,
      heading: "Transparent & Ethical Guidance",
      para:
        "We operate as immigration consultants in Noida, offering honest advice, compliant processes, realistic timelines, and clear communication throughout the application journey.",
    },
    {
      icon: <FaGlobeAmericas />,
      heading: "Profile-Based Strategy",
      para:
        "Our team works as visa consultants in Noida, delivering profile-based strategies, accurate documentation, and program selection aligned with immigration regulations.",
    },
    {
      icon: <FaGlobeAmericas />,
      heading: "Experienced Professionals",
      para:
        "Experienced immigration consultants in Noida manage applications with regulatory knowledge, structured workflows, attention to detail, and consistent follow-ups for outcomes.",
    },
    {
      icon: <FaGlobeAmericas />,
      heading: "End-to-End Support",
      para:
        "As visa consultants in Noida, we provide end-to-end support from assessment to post-landing assistance, ensuring clients are informed, supported, and confident.",
    },
  ],
};

// contat Us
export const contactBanner = {
  title: "Contact Us",
  para:
    "Connect With WiderWorld For Reliable Crop Protection & Farming Support. We're Here to Help Your Agriculture Thrive With Expert Solutions.",
  slug: "contact-us",
  img: contactb,
};

export const contactdetail = [
  {
    icon: <MdWifiCalling3 />,
    title: "Call Us",
    text: "+919311936564",
    slug: "tel:+919311936564",
  },
  {
    icon: <MdAttachEmail />,
    title: "Email Us",
    text: "info@WiderWorldcoreoverseas.com",
    slug: "mailto:info@WiderWorldcoreoverseas.com",
  },
  {
    icon: <FaMapLocationDot />,
    title: "Location",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    slug: "#",
  },
];

// services
export const serviceData = {
  title1: "Our Services",
  title2: "Smart solutions for global immigration",

  services: [
    {
      title: "IELTS",
      text: "Eligibility assessment and guidance",
      img: ielts,
      icon:<FaBriefcase />
    },
    {
      title: "PTE Exams",
      text: "Eligibility assessment and guidance",
      img: pte,
      icon:<FiSettings />
    },
    {
      title: "Profile Evaluation",
      text: "Eligibility assessment and guidance",
      img: profile,
            icon:<FiSettings />

    },
    {
      title: "Career Counselling",
      text: "Career planning and advice",
      img: Career,
            icon:<FiSettings />

    },
    {
      title: "Immigration Solutions",
      text: "Structured migration pathways",
      img: immigration,
            icon:<FiSettings />

    },
    {
      title: "Visa Documentation Support",
      text: "Accurate document preparation",
      img: visaDocument,
            icon:<FiSettings />

    },
    {
      title: "Job Search Assistance",
      text: "International employment guidance",
      img: jobAssist,
            icon:<FiSettings />

    },
    {
      title: "Post-Landing Support",
      text: "Settlement and integration assistance",
      img: PostLanding,
            icon:<FiSettings />

    },
  ],
};

export const servicechoose = {
  img: box1,
  title1: "Why Choose Us",
  title2: "Why Choose Wider World For Your ",
  title3: "Immigration Pathway?",
  para:
    "We provide structured, transparent immigration solutions designed to help individuals and families move abroad confidently through expert guidance, ethical practices, and end-to-end professional support.",

  vision: [
    {
      icon: HiOutlineLightBulb,
      heading: "Professional Immigration Expertise",
      para:
        "Customized guidance based on your profile and current international regulations.",
    },
    {
      icon: HiOutlineFlag,
      heading: "Clear & Honest Procedures",
      para:
        "Well-defined steps, realistic timelines, and fully compliant documentation.",
    },
    {
      icon: HiOutlineFlag,
      heading: "Complete Application Assistance",
      para: "Support provided from initial assessment to final visa approval.",
    },
  ],
};
