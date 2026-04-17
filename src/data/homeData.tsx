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
      href: "services",
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
    welcome: "Best Immigration Consultants in Delhi",
    title1: "Experts guiding your global career with ",
    title2: "complete visa support",
    para:
      "Get step-by-step assistance, accurate documentation, and reliable guidance to make your visa process smooth, secure, and successful.",
    btntext: "Contact Us",
    href: "/contact-us",
  },
  {
    id: 2, // Fix duplicate id issue by using unique ids
    img: bann,
    welcome: "Build Your Future Abroad with Confidence",
    title1: "Secure your future abroad with trusted",
    title2: "work and PR pathways",
    para:
      "We connect you with verified opportunities, strong profiles, and complete processing support to help you build a stable career and long-term settlement overseas.",
    btntext: "Contact Us",
    href: "/contact-us",
  },
];

export const aboutdata = {
  img1: about2,
  img2:about,
  title1: "ABOUT US",
  title2: "Professional & Trusted Visa",
  title3: "Consultants in Delhi",
  para:
    "We offer reliable, result-focused immigration solutions backed by expert knowledge, ethical practices, and a structured approach. Known for delivering dependable services, we assist individuals and families from visa planning to final submission, ensuring clarity, accuracy, and complete professional support throughout the entire process.",
  pointer: [
    {
      id: 1,
      heading: "Transparency",
      text: "Clear communication, honest advice, and straightforward processes with no hidden commitments.",
      icon: <IoSearch />,
    },
    {
      id: 2,
      heading: "Client Satisfaction",
      text: "Focused on trust, real results, and delivering a smooth experience for every client.",
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
  title2: "Visa Consultants in ",
  title3: "Delhi",
  para:
    "Focused on accuracy and transparency, we are among the leading immigration consultants in Delhi, offering profile-based immigration guidance and complete visa support. Our expert team follows ethical practices and structured processes to help individuals and families achieve global opportunities with confidence.",

  pointer: [
    {
      id: 1,
      heading: "Trusted Immigration Consultancy",
      text:
        "Expert guidance and reliable support for your immigration journey.",
      icon: <FaPlaneDeparture />,
    },
    {
      id: 2,
      heading: "Immigration Solutions That Deliver",
      text:
        "Structured processes to help you move abroad with clarity and confidence.",
      icon: <IoSettingsOutline />,
    },
  ],
};

export const visaSliderdata = {
  title1: "Diverse Range Of Visa Opportunities",
  title2: "Well-Planned Services for PR & Citizenship",

  cards: [
    {
      id: 1,
      img: visa1,
      heading: "Work Visa",
      text:
        " Opportunities to work abroad with proper visa support and complete process guidance",
    },
    {
      id: 2,
      img: prvisa,
      heading: "PR Visa",
      text:
        " Secure permanent residency with structured application support and accurate documentation assistance throughout",
    },
    {
      id: 3,
      img: famvisa,
      heading: "Family Sponsorship Visa",
      text:
        " Reunite with your family abroad through reliable sponsorship visa application assistance and support",
    },
    {
      id: 4,
      img: business,
      heading: "Business & Investor Visa",
      text:
        " Expand globally with business visa solutions and expert guidance for investment opportunities abroad",
    },
    {
      id: 5,
      img: touristvisa,
      heading: "Tourist/Visitor Visa",
      text:
        " Hassle-free travel visa assistance with proper documentation and smooth application processing support",
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
  title1: "Countries We Serve",
  title2:
    "Connecting You to Global Opportunities",
  cards: [
    {
      id: 1,
      img: ontario,
      flag: canadaflag,
      cat: "abroad",
      heading: "Canada",
      points: [
        "• Processing: 3–6 Months",
        "• High Nomination Quota",
        "• Top destination for study, work, and permanent residency with strong opportunities",
      ],
      text:
        "Top destination for study, work, and permanent residency with strong opportunities",
      link: "/canada-pnp",
    },
    {
      id: 2,
      img: bcPnpProgram,
      flag: canadaflag,
      cat: "mbbs",
      heading: "Australia",
      points: [
        "• Processing: 2–4 Months",
        "• Regular Invitation Rounds",
        "• Quality education, work opportunities, and clear pathways to permanent residency options",
      ],
      text:
        "Quality education, work opportunities, and clear pathways to permanent residency options",
      link: "/canada-pnp",
    },
    {
      id: 3,
      img: alberta,
      flag: canadaflag,
      cat: "abroad",
      heading: "New Zealand",
      points: [
        "• Processing: 4–6 Months",
        "• Lower CRS Possibility",
        "• Growing destination offering quality education, work visas, and a peaceful lifestyle benefits",
      ],
      text:
        "Growing destination offering quality education, work visas, and a peaceful lifestyle benefits",
      link: "/canada-pnp",
    },
    {
      id: 4,
      img: saskatchewanPnp,
      flag: canadaflag,
      cat: "abroad",
      heading: "Europe",
      points: [
        "• Processing: 2–5 Months",
        "• In-Demand Occupation Stream",
        "• Multiple countries offering work opportunities, study options, and diverse cultural experiences",
      ],
      text:
        "Multiple countries offering work opportunities, study options, and diverse cultural experiences",
      link: "/canada-pnp",
    },
    {
      id: 5,
      img: manitoba,
      flag: canadaflag,
      cat: "mbbs",
      heading: "GCC",
      points: [
        "• Processing: 3–5 Months",
        "• Strong Provincial Support",
        "• Attractive work destinations with tax-free income and growing career opportunities",
      ],
      text:
        "Attractive work destinations with tax-free income and growing career opportunities",
      link: "/canada-pnp",
    },
    {
      id: 6,
      img: novaScotia,
      flag: canadaflag,
      cat: "mbbs",
      heading: "USA",
      points: [
        "• Processing: 3–6 Months",
        "• Express Entry Priority",
        "• Global leader in education, innovation, and diverse career opportunities across industries",
      ],
      text:
        "Global leader in education, innovation, and diverse career opportunities across industries",
      link: "/canada-pnp",
    },

  ],

};

export const Whychoose = {
  img: box1,

  title1: "Why Choose Us",
  title2: "We provide trusted guidance with",
  title3: "a clear process",
  para:
    "Wider World, the best immigration consultants in Delhi, offers reliable and result-driven immigration solutions backed by experienced professionals and transparent processes. We focus on profile-based guidance, accurate documentation, and legal compliance to ensure smooth visa applications. With a client-first approach and personalized support, we help individuals and families achieve their global immigration goals with confidence and clarity.",

  success: [
    { id: 1, value: "100%", text: "Visa Success Rate" },
    { id: 2, value: "100%", text: "Clients Satisfaction" },
    { id: 3, value: "100%", text: "Transparency" },
  ],
};

export const testimonialData = {
 
  testimonials: [
    {
      title: "Suresh Dixit",
      text:
        "I had a very smooth experience with Wider World Immigration. From the initial consultation to the final submission, they guided me at every step and ensured my documents were accurate. The entire visa process felt well-managed and stress-free.",
      img: cl1,
    },
    {
      title: "Mohan Rane",
      text:
        "The team at Wider World Immigration is very supportive and easy to communicate with. They explained each step clearly and kept me informed throughout the process. Their guidance helped me avoid mistakes and complete my application without confusion. They are the best visa consultants in Delhi.",
      img: cl1,
    },
    {
      title: "Manoj Saini",
      text:
        "I was quite confused in the beginning, but Wider World Immigration provided clear and practical guidance. They helped me choose the right visa option and handled my documentation carefully. The entire experience was smooth, and I felt confident throughout the process.",
      img: cl1,
    },
    {
      title: "Sam Goyal",
      text:
        "Wider World Immigration has a very professional and reliable team. They managed my application from start to finish with proper attention to detail. Everything was done on time, and I am fully satisfied with their service and overall support.",
      img: cl1,
    },
  ],
};

export const offercountry = {
  title1: "Countries We Offer",
  title2:
    "Top global destinations with strong career and immigration opportunities",
   cards: [
    {
      id: 1,
      img: ontario,
      flag: canadaflag,
      cat: "abroad",
      heading: "Study in Canada",
      points: ["• High-Quality Education", "• Post-Study Work", "• PR Opportunities"],
      text: "High-quality education with post-study work and PR opportunities",
      link: "/canada-pnp",
    },
    {
      id: 2,
      img: bcPnpProgram,
      flag: canadaflag,
      cat: "abroad",
      heading: "Study in USA",
      points: ["• Top Universities", "• Diverse Courses", "• Global Career Opportunities"],
      text: "Top universities with diverse courses and global career opportunities",
      link: "/canada-pnp",
    },
    {
      id: 3,
      img: alberta,
      flag: canadaflag,
      cat: "abroad",
      heading: "Study in Australia",
      points: ["• Quality Education", "• Work Opportunities", "• Student-Friendly Environment"],
      text: "Quality education with work opportunities and a student-friendly environment",
      link: "/canada-pnp",
    },
    {
      id: 4,
      img: saskatchewanPnp,
      flag: canadaflag,
      cat: "abroad",
      heading: "Study in Dubai",
      points: ["• Modern Education Hub", "• Global Exposure", "• Tax-Free Benefits"],
      text: "Modern education hub with global exposure and tax-free benefits",
      link: "/canada-pnp",
    },
    {
      id: 5,
      img: manitoba,
      flag: canadaflag,
      cat: "abroad",
      heading: "Study in Italy",
      points: ["• Affordable Education", "• Rich Culture", "• European Degree"],
      text: "Affordable education with rich culture and European degree recognition",
      link: "/canada-pnp",
    },
    {
      id: 6,
      img: novaScotia,
      flag: canadaflag,
      cat: "abroad",
      heading: "Study in France",
      points: ["• Quality Education", "• Low Fees", "• Global Opportunities"],
      text: "Quality education with low fees and global career opportunities",
      link: "/canada-pnp",
    },
    {
      id: 7,
      img: manitoba,
      flag: canadaflag,
      cat: "abroad",
      heading: "Study in Malaysia",
      points: ["• Affordable", "• International Universities", "• Modern Infrastructure"],
      text: "Affordable education with international universities and modern infrastructure",
      link: "/canada-pnp",
    },
    {
      id: 8,
      img: novaScotia,
      flag: canadaflag,
      cat: "abroad",
      heading: "Study in New Zealand",
      points: ["• Safe Country", "• Quality Education", "• Post-Study Work"],
      text: "Safe country with quality education and post-study work options",
      link: "/canada-pnp",
    },
    {
      id: 9,
      img: manitoba,
      flag: canadaflag,
      cat: "abroad",
      heading: "Study in Ireland",
      points: ["• Strong Job Market", "• Excellent Education", "• Career Growth"],
      text: "Strong job market with excellent education and career growth",
      link: "/canada-pnp",
    },
    {
      id: 10,
      img: novaScotia,
      flag: canadaflag,
      cat: "abroad",
      heading: "Study in UK",
      points: ["• Globally Recognized", "• Short Duration", "• Flexible Courses"],
      text: "Globally recognized degrees with shorter course duration options",
      link: "/canada-pnp",
    },
    {
      id: 11,
      img: manitoba,
      flag: canadaflag,
      cat: "abroad",
      heading: "Study in Singapore",
      points: ["• World-Class Education", "• Industry Connections", "• Career Opportunities"],
      text: "World-class education with strong industry connections and career opportunities",
      link: "/canada-pnp",
    },
        {
      id: 1,
      img: ontario,
      flag: canadaflag,
      cat: "mbbs",
      heading: "MBBS in Philippines",
      points: ["• Affordable Fees", "• English Medium", "• Good Clinical Exposure"],
      text: "Affordable MBBS with English medium and good clinical exposure",
      link: "/canada-pnp",
    },
    {
      id: 2,
      img: bcPnpProgram,
      flag: canadaflag,
      cat: "mbbs",
      heading: "MBBS in Russia",
      points: ["• Globally Recognized", "• Affordable Fees", "• Quality Education"],
      text: "Globally recognized degrees with affordable fees and quality education",
      link: "/canada-pnp",
    },
    {
      id: 3,
      img: alberta,
      flag: canadaflag,
      cat: "mbbs",
      heading: "MBBS in Bangladesh",
      points: ["• Indian Syllabus", "• High FMGE Rate", "• Affordable Option"],
      text: "Similar syllabus to India with high FMGE passing rates",
      link: "/canada-pnp",
    },
    {
      id: 4,
      img: saskatchewanPnp,
      flag: canadaflag,
      cat: "mbbs",
      heading: "MBBS in Mauritius",
      points: ["• Safe Country", "• Multicultural Environment", "• Quality Education"],
      text: "Quality education in a safe and multicultural environment",
      link: "/canada-pnp",
    },
    {
      id: 5,
      img: manitoba,
      flag: canadaflag,
      cat: "mbbs",
      heading: "MBBS in Nepal",
      points: ["• Indian Curriculum", "• Easy Travel", "• Cultural Similarity"],
      text: "Indian-based curriculum with easy travel and cultural similarity",
      link: "/canada-pnp",
    },
    {
      id: 6,
      img: novaScotia,
      flag: canadaflag,
      cat: "mbbs",
      heading: "MBBS in Uzbekistan",
      points: ["• Affordable Fees", "• Modern Infrastructure", "• Experienced Faculty"],
      text: "Affordable fees with modern infrastructure and experienced faculty support",
      link: "/canada-pnp",
    },
    {
      id: 7,
      img: manitoba,
      flag: canadaflag,
      cat: "mbbs",
      heading: "MBBS in Kazakhstan",
      points: ["• Recognized Universities", "• Affordable", "• Good Facilities"],
      text: "Recognized universities with affordable education and good facilities",
      link: "/canada-pnp",
    },
    {
      id: 8,
      img: novaScotia,
      flag: canadaflag,
      cat: "mbbs",
      heading: "MBBS in Belarus",
      points: ["• High Quality Education", "• Advanced Labs", "• Strong Infrastructure"],
      text: "High-quality medical education with advanced labs and infrastructure",
      link: "/canada-pnp",
    },
    {
      id: 9,
      img: manitoba,
      flag: canadaflag,
      cat: "mbbs",
      heading: "MBBS in Georgia",
      points: ["• European Standard", "• English Medium", "• Recognized Degree"],
      text: "European standard education with English medium programs available",
      link: "/canada-pnp",
    },
    {
      id: 10,
      img: novaScotia,
      flag: canadaflag,
      cat: "mbbs",
      heading: "MBBS in Armenia",
      points: ["• Affordable", "• Safe Country", "• Quality Education"],
      text: "Affordable MBBS with quality education and a safe environment",
      link: "/canada-pnp",
    },
    {
      id: 11,
      img: manitoba,
      flag: canadaflag,
      cat: "mbbs",
      heading: "MBBS in China",
      points: ["• Top Universities", "• Advanced Technology", "• Global Recognition"],
      text: "Top universities with advanced technology and global recognition",
      link: "/canada-pnp",
    },
    {
      id: 12,
      img: novaScotia,
      flag: canadaflag,
      cat: "mbbs",
      heading: "MBBS in Poland",
      points: ["• European Degree", "• High Standards", "• Global Opportunities"],
      text: "European degree with high education standards and global opportunities",
      link: "/canada-pnp",
    },
    {
      id: 13,
      img: manitoba,
      flag: canadaflag,
      cat: "mbbs",
      heading: "MBBS in Germany",
      points: ["• Low Tuition Fees", "• Excellent Education", "• High Exposure"],
      text: "Low tuition fees with excellent medical education and exposure",
      link: "/canada-pnp",
    },
    {
      id: 14,
      img: novaScotia,
      flag: canadaflag,
      cat: "mbbs",
      heading: "MBBS in Malaysia",
      points: ["• Affordable", "• Modern Campus", "• International Recognition"],
      text: "Affordable education with modern campuses and international recognition",
      link: "/canada-pnp",
    },
    {
      id: 15,
      img: manitoba,
      flag: canadaflag,
      cat: "mbbs",
      heading: "MBBS in Kyrgyzstan",
      points: ["• Budget Friendly", "• Easy Admission", "• Good Training"],
      text: "Budget-friendly MBBS with a simple admission process and good training",
      link: "/canada-pnp",
    },
  ],
};


export const HomefaqData = {
  title1: "FAQs",
  title2: "Frequently Asked ",
  title3: " Questions",

  para1:
    "Find clear answers to your most common queries about visas, eligibility, processing time, and required documents—all in one place.",
faqs: [
    {
      que: "Which country is best for PR in 2026?",
      ans:
        "The best country for PR depends on your profile, skills, and goals. Countries like Canada, Australia, and Germany are popular due to strong job markets and clear PR pathways. Instead of following trends, it’s important to choose a country where your profile has higher chances of success.",
    },
    {
      que: "How long does the visa process usually take?",
      ans:
        "Visa processing time depends on the country, visa type, and your documentation. It can take anywhere from a few weeks to several months. Delays usually happen due to incomplete documents or high application volumes, so proper guidance and accurate submission can help speed up the process.",
    },
    {
      que: "Can I apply without IELTS or English tests?",
      ans:
        "Yes, some countries and visa types allow applications without IELTS, depending on your profile and the program you choose. However, having an English proficiency score can improve your chances. It’s always better to check all available options based on your qualifications and career goals.",
    },
    {
      que: "How much money is required to move abroad?",
      ans:
        "The cost depends on the country, visa type, and lifestyle. It usually includes visa fees, proof of funds, travel, and initial living expenses. Proper planning is important so you are financially prepared and avoid stress after moving. Guidance can help you estimate the exact cost.",
    },
    {
      que: "Can I get a job abroad before moving?",
      ans:
        "Yes, many countries allow you to apply for jobs before moving. Having a job offer can improve your visa chances. However, finding the right job requires proper profile building, resume preparation, and applying through the right platforms. Guidance can make this process easier and faster.",
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
  title2: "Smart solutions for",
  title3: "global immigration",

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
