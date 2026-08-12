import { PortfolioProfile } from "../types";

export const defaultProfile: PortfolioProfile = {
  name: "Bikalpa Chaulagain",
  title: "Mechanical Engineer | Entrepreneur | Creator",
  tagline:
    "Designing sustainable recycling systems, 3D printed medical devices, and intelligent industrial IoT platforms.",
  bio: "Mechanical Engineer (B.E., Kathmandu University, GPA 3.36) with extensive hands-on experience in digital manufacturing, plastic waste recycling machinery, medical hardware R&D, and machine learning for IoT condition monitoring. Co-founder of Nepal Fil Solutions & Regen Nepal, Principal Investigator for NAST-funded medical grants, and former researcher in AI for humanitarian action.",
  location: "Dhulikhel / Kathmandu, Nepal",
  timezone: "NPT (UTC+5:45)",
  availableForWork: true,
  availabilityText:
    "Available for Engineering R&D, Hardware Design & Advisory Roles",
  email: "bikalpa.ch1@gmail.com",
  phone: "(+977) 9862154898",
  website: "www.bikalpachaulagain.com.np",
  avatarUrl: "/dp4.jpg",
  resumeUrl: "#resume-modal",
  socials: [
    {
      platform: "email",
      url: "mailto:bikalpa.ch1@gmail.com",
      username: "bikalpa.ch1@gmail.com",
    },
    {
      platform: "phone",
      url: "tel:+9779862154898",
      username: "(+977) 9862154898",
    },
    {
      platform: "website",
      url: "https://www.bikalpachaulagain.com.np",
      username: "bikalpachaulagain.com.np",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com",
      username: "linkedin.com/in/bikalpachaulagain",
    },
    {
      platform: "github",
      url: "https://github.com",
      username: "github.com/bikalpach",
    },
  ],
  stats: [
    { label: "Startups Co-founded", value: "2" },
    { label: "Products & Jigs Built", value: "10+" },
    { label: "Students Trained", value: "80+" },
    { label: "Kathmandu Univ GPA", value: "3.36" },
  ],
  projects: [
    {
      id: "proj-regen-nepal",
      title: "Regen Nepal Pvt. Ltd. — Co-founder & R&D Lead",
      subtitle:
        "Manufacturing market-ready products from local recycled plastic waste & CNC laser-engraved merchandise",
      organization: "Regen Nepal Pvt. Ltd.",
      role: "Co-founder & R&D Lead",
      description:
        "Co-founded Regen Nepal Pvt. Ltd. to manufacture market-ready products from local materials while driving sustainability. Led R&D for custom recycling equipment, producing functional furniture and distributing 62 sets of desks & benches to local community schools.",
      fullDescription:
        "Regen Nepal Pvt. Ltd. is a startup co-founded with the primary goal of manufacturing market-ready products from local materials while actively contributing to sustainability. The company initially started with limited investment, focusing heavily on recycling plastic waste and transforming it into functional everyday items. To date, this initiative has successfully produced general-purpose tables and stools, as well as school desks and benches, reaching a major milestone by distributing 62 sets of these desks and benches to a local community school.\n\nAs the company grew, operations expanded into CNC laser-engraved products. By leveraging design skills, material knowledge, and research capabilities, Regen Nepal was able to offer customizable and unique products that remained affordable for customers.\n\nSpecific responsibilities in this venture were highly technical: leading the research and development for the fabrication of an oven, a cold press machine, and the necessary molds used in the process. Additionally, Bikalpa supervised the physical fabrication of these production machines and handled production planning along with ongoing technical supervision.",
      category: "Sustainable Materials & Recycling",
      tags: [
        "Heatpress Fabrication",
        "Plastic Extrusion",
        "Recycled HDPE",
        "CNC Laser Engraving",
        "3D Printing",
        "Product Design",
      ],
      featured: true,
      coverImage: "/recycledplastic/rp1.jpg",
      gallery: [
        {
          id: "media-regen-0",
          url: "/recycledplastic/rp1.jpg",
          caption:
            "Regen Nepal — Trash to Treasure campaign addressing plastic waste pollution in Nepal",
          type: "image",
        },
        {
          id: "media-regen-1",
          url: "/recycledplastic/rp2.jpg",
          caption:
            "Co-founders holding a heatpressed marble-texture recycled plastic sheet for furniture top",
          type: "image",
          isCover: true,
        },
        {
          id: "media-regen-2",
          url: "/recycledplastic/rp3.png",
          caption:
            "Shredded plastic waste raw material categorized before heat press and extrusion processes",
          type: "image",
        },
        {
          id: "media-regen-3",
          url: "/recycledplastic/rp4.jpg",
          caption:
            "On-site fabrication of custom plastic heat press melting oven & press machine wearing safety gear",
          type: "image",
        },
        {
          id: "media-regen-4",
          url: "/recycledplastic/rp5.png",
          caption:
            "Regen Nepal — Trash to Treasure campaign addressing plastic waste pollution in Nepal",
          type: "image",
        },
        {
          id: "media-regen-5",
          url: "/recycledplastic/rp6.png",
          caption:
            "Regen Nepal — Trash to Treasure campaign addressing plastic waste pollution in Nepal",
          type: "image",
        },
        {
          id: "media-regen-6",
          url: "/recycledplastic/rp7.gif",
          caption:
            "Regen Nepal — Trash to Treasure campaign addressing plastic waste pollution in Nepal",
          type: "image",
        },
      ],
      metrics: [
        { label: "School Desks Distributed", value: "62 Sets" },
        { label: "Innovation Award", value: "Top 15 Metro" },
        { label: "Product Lines", value: "Custom CNC & Furniture" },
      ],
      highlights: [
        "Led R&D for the fabrication of a custom heating oven, cold press machine, and specialized molds for plastic waste recycling",
        "Supervised physical machine fabrication, production planning, and ongoing technical operations",
        "Successfully produced general-purpose tables, stools, and distributed 62 sets of desks and benches to a local community school",
        "Expanded product range into CNC laser-engraved customized merchandise leveraging design and material knowledge",
      ],
      year: "2022 — Ongoing",
    },
    {
      id: "proj-nepal-fil",
      title: "Nepal Fil Solutions Pvt. Ltd. — Co-founder & Lead R&D Engineer",
      subtitle:
        "Pioneering recycled 3D printing filaments and ISO-tested 3D-printed prosthetic sockets",
      organization: "Nepal Fil Solutions Pvt. Ltd. / KU Design Lab",
      role: "Co-founder & Lead Researcher",
      description:
        "Co-founded Nepal Fil Solutions Pvt. Ltd. (Nepal PLA + Filament) to produce recycled 3D filaments. Strategic pivot to Polypropylene (PP) filament enabled expansion into healthcare, manufacturing ISO-standard tested 3D-printed prosthetic sockets.",
      fullDescription:
        'Operating alongside Regen Nepal, Nepal Fil Solutions Pvt. Ltd. was co-founded with a distinct but complementary objective. The company\'s name is a combination of "Nepal PLA"—referring to the polylactic acid plastic commonly used in 3D printing—and "fil," which is short for filament.\n\nInitially, the business model centered on importing extruders to produce in-house filament entirely from recycled 3D-printed waste. However, after identifying a significant market gap for Polypropylene (PP) filaments, and noting their ease of recyclability, the company strategically pivoted to manufacturing PP filaments instead.\n\nThis progression eventually allowed the startup to expand into the healthcare sector by producing 3D-printed prosthetic sockets using in-house PP filaments, which were rigorously tested according to ISO standards. Bikalpa\'s role centered on the research and development of both the filament production and the printing methods, as well as providing overall technical supervision.',
      category: "Sustainable Materials & Recycling",
      tags: [
        "Recycled PLA & PP",
        "3D Filament Extrusion",
        "Prosthetic Sockets",
        "ISO Testing",
        "TKR Surgical Jigs",
        "Medical 3D Printing",
      ],
      featured: true,
      coverImage: "/prostheticsocket/ps1.gif",
      gallery: [
        {
          id: "media-fil-0",
          url: "/prostheticsocket/ps1.gif",
          caption:
            "Setting up our first filament extruder setup",
          type: "image",
          isCover: true,
        },
        {
          id: "media-fil-1",
          url: "/prostheticsocket/ps2.gif",
          caption:
            "3D printed Polypropylene (PP) prosthetic socket undergoing ISO standard mechanical load testing",
          type: "image",
          isCover: true,
        },
        {
          id: "media-fil-2",
          url: "/prostheticsocket/ps3.jpg",
          caption:
            "Custom filament extruder setup producing high-tolerance 1.75mm recycled PP filament spools",
          type: "image",
        },
        {
          id: "media-fil-3",
          url: "/prostheticsocket/ps4.gif",
          caption:
            "3D printed Patient-Specific Surgical Cutting Jigs for Total Knee Replacement (TKR) trials",
          type: "image",
        },
      ],
      metrics: [
        { label: "Prosthetic Standard", value: "ISO Tested" },
        { label: "Filament Materials", value: "PLA & Recycled PP" },
        { label: "Clinical Partners", value: "KU Design Lab" },
      ],
      highlights: [
        "Led R&D for filament extrusion parameters and specialized 3D printing methods for recycled PLA and PP",
        "Strategically pivoted to Polypropylene (PP) filament production after identifying a major market gap and recyclability advantages",
        "Expanded into medical device manufacturing, producing 3D-printed prosthetic sockets using in-house PP filament",
        "Rigorously evaluated prosthetic sockets according to ISO standard load testing protocols",
      ],
      year: "2022 — Ongoing",
    },
    {
      id: "proj-nast-tens",
      title: "NAST-Funded TENS Medical Device — Principal Investigator (PI)",
      subtitle:
        "Locally manufactured, rechargeable electrotherapy pain management device for chronic & neurological rehabilitation",
      organization: "NAST Young Scientist Grant / Kathmandu University",
      role: "Principal Investigator (PI)",
      description:
        "Transformed a 3rd-year undergraduate academic project into a commercial medical product funded by a NAST Young Scientist Grant. As PI, guided circuit iteration, intern management, and clinical preparation for affordable pain relief in Nepal.",
      fullDescription:
        "The Transcutaneous Electrical Nerve Stimulation (TENS) machine project began as an academic project during 3rd year undergraduate studies at Kathmandu University and successfully transitioned into a full-fledged product development endeavor. A TENS device is a compact, battery-powered tool designed to alleviate temporary pain by sending mild electrical pulses to nerves via sticky skin pads.\n\nAfter developing multiple generations of the circuit, Bikalpa's efforts were recognized with a Young Scientist grant from the Nepal Academy of Science and Technology (NAST). This funding enabled hiring a dedicated electrical engineering intern while Bikalpa served as Principal Investigator (PI) to guide the project toward commercialization. Currently, the device is fully prepared for clinical trials and commercial release.\n\nThe core mission is to combat the limited availability of affordable pain management solutions in Nepal. By establishing local manufacturing capabilities for TENS devices, the project aims to lower cost barriers and improve healthcare access for patients suffering from chronic pain, neurological conditions, and musculoskeletal disorders. Comprehensive work included literature reviews, field visits, data analysis, and medical trial design.",
      category: "Medical & Surgical Devices",
      tags: [
        "Medical Device R&D",
        "TENS/EMS Circuit",
        "PCB Design",
        "PETG 3D Printing",
        "Clinical Trials",
        "NAST Grant",
      ],
      featured: true,
      coverImage: "/tens/tens2.jpg",
      gallery: [
        {
          id: "media-tens-1",
          url: "/tens/tens1.jpeg",
          caption:
            "Rechargeable TENS prototype unit with custom PETG enclosure and electrode lead connections",
          type: "image",
          isCover: true,
        },
        {
          id: "media-tens-2",
          url: "/tens/tens2.jpg",
          caption:
            "PCB circuit validation and oscilloscope waveform measurement for gentle nerve stimulation",
          type: "image",
        },
      ],
      metrics: [
        { label: "Role", value: "Principal Investigator" },
        { label: "Grant Award", value: "NAST Young Scientist" },
        { label: "Clinical Phase", value: "Trial & Market Ready" },
      ],
      highlights: [
        "Awarded NAST Young Scientist Grant and served as Principal Investigator (PI) managing engineering team & budget",
        "Engineered multiple generations of TENS electrical circuits and rechargeable battery power modules",
        "Prepared medical device for clinical trials aimed at chronic pain, neurological, and musculoskeletal rehabilitation",
        "Established local manufacturing feasibility in Nepal to drastically lower healthcare technology cost barriers",
      ],
      year: "2023 — Ongoing",
    },
    {
      id: "proj-iot-monitoring",
      title: "IoT-Based Condition Monitoring System — Lead Thesis Researcher",
      subtitle:
        "Real-time industrial sensor network & machine learning predictive maintenance tested at CGIP & Yeti Plastic",
      organization: "Kathmandu University Thesis / CGIP & Yeti Plastics",
      role: "Lead Researcher & IoT Developer",
      description:
        "Final year engineering thesis evaluating real-time machine learning & IoT condition monitoring networks in Nepalese factories during plant deployments at CGIP and Yeti Plastic.",
      fullDescription:
        'Bikalpa\'s final year engineering thesis, titled "COMPARATIVE STUDY OF MACHINE LEARNING ALGORITHMS FOR CONDITION MONITERING IN NEPALESE MANUFACTURING INDUSTRIES," culminated in an advanced IoT-based Condition Monitoring System.\n\nThis project focused on developing and evaluating a real-time monitoring network utilizing machine learning and IoT technologies to boost operational efficiency and proactive maintenance in Nepalese manufacturing settings. It involved identifying essential machinery across key industries, selecting appropriate sensors, and designing a network to collect real-time data to spot anomalies indicating impending equipment failure.\n\nData acquisition for electric current and vibration was deployed using ESP32 microcontrollers and IoT configurations. Testing was conducted in real-world industrial environments through collaborations with CGIP in Nawalparasi and Yeti Plastic Industries in Kavre. The results proved significant potential for improving equipment reliability and operational cost savings.',
      category: "IoT & Machine Learning",
      tags: [
        "ESP32 Microcontrollers",
        "Machine Learning",
        "Python",
        "Current & Vibration Sensors",
        "Predictive Maintenance",
        "Industrial IoT",
      ],
      featured: true,
      coverImage: "/iot2/iot9.jpg",
      gallery: [
        {
          id: "media-iot-1",
          url: "/iot2/iot1.jpg",
          caption:
            "ESP32 wireless IoT sensor module installed on continuous industrial rolling machine at CGIP",
          type: "image",
          isCover: true,
        },
        {
          id: "media-iot-2",
          url: "/iot2/iot2.jpg",
          caption:
            "Real-time telemetry dashboard rendering current signature spikes and machine learning anomaly classifications",
          type: "image",
        },
        {
          id: "media-iot-3",
          url: "/iot2/iot3.jpg",
          caption:
            "Real-time telemetry dashboard rendering current signature spikes and machine learning anomaly classifications",
          type: "image",
        },
        {
          id: "media-iot-4",
          url: "/iot2/iot4.jpg",
          caption:
            "Real-time telemetry dashboard rendering current signature spikes and machine learning anomaly classifications",
          type: "image",
        },
        {
          id: "media-iot-5",
          url: "/iot2/iot5.jpg",
          caption:
            "Real-time telemetry dashboard rendering current signature spikes and machine learning anomaly classifications",
          type: "image",
        },
        {
          id: "media-iot-6",
          url: "/iot2/iot6.jpg",
          caption:
            "Real-time telemetry dashboard rendering current signature spikes and machine learning anomaly classifications",
          type: "image",
        },
        {
          id: "media-iot-7",
          url: "/iot2/iot7.jpg",
          caption:
            "Real-time telemetry dashboard rendering current signature spikes and machine learning anomaly classifications",
          type: "image",
        },
        {
          id: "media-iot-8",
          url: "/iot2/iot8.jpg",
          caption:
            "Real-time telemetry dashboard rendering current signature spikes and machine learning anomaly classifications",
          type: "image",
        },
        {
          id: "media-iot-9",
          url: "/iot2/iot9.jpg",
          caption:
            "Real-time telemetry dashboard rendering current signature spikes and machine learning anomaly classifications",
          type: "image",
        },
      ],
      metrics: [
        { label: "Analysis Suite", value: "Current & Vibration" },
        { label: "Industrial Partners", value: "CGIP & Yeti Plastic" },
        { label: "Telemetry Hardware", value: "ESP32 IoT Network" },
      ],
      highlights: [
        "Engineered wireless ESP32 IoT hardware nodes for non-invasive current transformers and vibration sensor telemetry",
        "Deployed and validated monitoring network in active plants at CGIP (Nawalparasi) and Yeti Plastic Industries (Kavre)",
        "Trained ML classification models for real-time motor current anomaly detection",
        "Authored comprehensive thesis on predictive maintenance and machine learning for Nepalese manufacturing",
      ],
      year: "2023 — 2024",
    },
    {
      id: "proj-automatic-shower",
      title: "Automated Showering System for Pharmaceutical Facility",
      subtitle:
        "Custom automated decontamination shower engineered for TIZIG Pharmaceuticals",
      organization: "TIZIG Pharmaceuticals",
      role: "Design & Fabrication Engineer",
      description:
        "Designed and fabricated an automated showering system using local electronic sensors, control relays, and custom 3D printed fluid nozzles to replace expensive imported industrial units.",
      fullDescription:
        "Contracted by TIZIG Pharmaceuticals, Bikalpa engineered a cost-effective, adaptable automated showering station to meet cleanroom decontamination specifications. The unit incorporates proximity sensors, solenoid control valves, and custom SLA/FDM 3D printed spray nozzles tailored to local plumbing pressure.",
      category: "Automation & Manufacturing",
      tags: [
        "Automated Systems",
        "3D Printed Nozzles",
        "Cleanroom Hardware",
        "Custom Electronics",
        "Contract Engineering",
      ],
      featured: false,
      coverImage: "/tizig/tz1.jpg",
      gallery: [
        {
          id: "media-shower-1",
          url: "/tizig/tz1.jpg",
          caption:
            "Fabricated automated showering system with 3D printed nozzle array installed at TIZIG Pharmaceuticals",
          type: "image",
          isCover: true,
        },
        {
          id: "media-shower-2",
          url: "/tizig/tz2.jpg",
          caption:
            "Fabricated automated showering system with 3D printed nozzle array installed at TIZIG Pharmaceuticals",
          type: "image",
        },
        {
          id: "media-shower-3",
          url: "/tizig/tz3.gif",
          caption:
            "Fabricated automated showering system with 3D printed nozzle array installed at TIZIG Pharmaceuticals",
          type: "gif",
        },
      ],
      metrics: [
        { label: "Cost Savings", value: "Commercial Replacement" },
        { label: "Manufacturing", value: "Local Sourced" },
      ],
      highlights: [
        "Designed custom enclosure and sensor logic using locally available components",
        "Replaced expensive commercial shower unit with cost-effective custom engineering",
      ],
      year: "2024 — 2025",
    },
    {
      id: "proj-ucl-humanitarian",
      title: "AI in Humanitarian Action & Disaster Response Systems",
      subtitle:
        "Research on disaster technology needs in Nepal in collaboration with University College London",
      organization: "Kathmandu University Design Lab / UCL",
      role: "Research Assistant",
      description:
        "Contributed to research mapping Nepal's disaster response systems, evaluating technological needs, and engaging stakeholders to formulate AI-driven relief solutions.",
      fullDescription:
        'Working under the "AI in Humanitarian Action" grant with University College London (UCL), Bikalpa gathered empirical data on Nepal\'s disaster management infrastructure, interviewed government and private responders, and drafted strategic framework recommendations for AI integration in disaster mitigation.',
      category: "R&D Engineering",
      tags: [
        "Humanitarian AI",
        "Disaster Management",
        "Field Research",
        "UCL Collaboration",
        "Policy Analysis",
      ],
      featured: false,
      coverImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
      gallery: [
        {
          id: "media-ucl-1",
          url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
          caption:
            "Mapping disaster response data networks and stakeholders across Nepal provinces",
          type: "image",
          isCover: true,
        },
      ],
      metrics: [
        { label: "Partner University", value: "UCL (UK)" },
        { label: "Scope", value: "Nationwide Analysis" },
      ],
      highlights: [
        "Collected and analyzed disaster technology readiness data across Nepalese municipalities",
        "Engaged key government and private decision-makers to evaluate AI solutions for crisis management",
      ],
      year: "2024 — 2025",
    },
  ],
  skillCategories: [
    {
      title: "Digital Manufacturing & Hardware Fabrication",
      description:
        "Hands-on equipment operation, rapid prototyping, and production tooling.",
      skills: [
        {
          name: "3D Printing (FDM & SLA)",
          level: 98,
          categoryBadge: "Expert",
          featured: true,
        },
        {
          name: "3D Scanning & Slicing (Prusa, Cura)",
          level: 94,
          categoryBadge: "Expert",
          featured: true,
        },
        {
          name: "CNC Laser Cutting & Milling",
          level: 90,
          categoryBadge: "Advanced",
          featured: true,
        },
        {
          name: "Lathe, Drill & Milling Machines",
          level: 88,
          categoryBadge: "Fabrication",
        },
        {
          name: "Soldering, Welding & Assembly",
          level: 90,
          categoryBadge: "Hands-on",
        },
        {
          name: "Plastic Extrusion & Heatpress",
          level: 92,
          categoryBadge: "Specialist",
          featured: true,
        },
      ],
    },
    {
      title: "Design & Simulation Software",
      description:
        "Parametric CAD modeling, assembly design, and technical drawing generation.",
      skills: [
        {
          name: "SolidWorks (CSWA Certified)",
          level: 98,
          categoryBadge: "Cert ID: C-LEHGTUYDWK",
          featured: true,
        },
        {
          name: "Fusion 360",
          level: 90,
          categoryBadge: "CAD / CAM",
          featured: true,
        },
        { name: "Rhino 3D", level: 85, categoryBadge: "3D Surface" },
        {
          name: "PrusaSlicer / Cura / Slic3r",
          level: 95,
          categoryBadge: "Toolpathing",
          featured: true,
        },
        {
          name: "ANSYS / Basic CFD Analysis",
          level: 78,
          categoryBadge: "Simulation",
        },
      ],
    },
    {
      title: "Programming & Embedded Hardware",
      description:
        "Embedded firmware, sensor data pipelines, and microcontrollers.",
      skills: [
        {
          name: "Python",
          level: 88,
          categoryBadge: "Core Lang",
          featured: true,
        },
        {
          name: "C / C++",
          level: 85,
          categoryBadge: "Embedded",
          featured: true,
        },
        {
          name: "ESP32 & Arduino IoT",
          level: 92,
          categoryBadge: "Hardware IoT",
          featured: true,
        },
        { name: "MATLAB / Simulink", level: 80, categoryBadge: "Data Math" },
        {
          name: "Git & Technical Documentation",
          level: 88,
          categoryBadge: "Tooling",
        },
      ],
    },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Co-founder & Lead Engineer",
      company: "Nepal Fil Solutions",
      period: "Jan 2022 — Ongoing",
      location: "Dhulikhel, Kavrepalanchowk",
      type: "Co-founder",
      summary:
        "Pioneered sustainable material conversion of recycled PLA and Polypropylene (PP) into high-grade 3D printing filament and medical sockets.",
      highlights: [
        "Collaborated with KU Design Lab on UK Frontiers Project testing 3D printed PP prosthetic sockets",
        "Led R&D on Patient-Specific Instrumentation (PSI) surgical cutting jigs for Total Knee Replacement (TKR)",
      ],
      skillsUsed: [
        "Recycled PLA/PP",
        "Extrusion",
        "Prosthetic Design",
        "ISO Testing",
        "SolidWorks",
      ],
    },
    {
      id: "exp-2",
      role: "Co-founder",
      company: "Regen Nepal Pvt. Ltd.",
      period: "Jan 2022 — Ongoing",
      location: "Dhulikhel, Kavrepalanchowk",
      type: "Co-founder",
      summary:
        "Co-founded plastic waste recycling venture converting waste into school furniture and customized CNC products.",
      highlights: [
        "Built prototypes of tables, beams, and pots using custom heatpress and extrusion",
        "Selected as Top 15 business idea in nationwide Kathmandu Metro Idea & Innovation program",
        "Manufactured 10+ product lines including 62 school desk and bench sets",
      ],
      skillsUsed: [
        "Heatpress",
        "Extrusion",
        "CNC Laser",
        "CNC Milling",
        "R&D Fabrication",
      ],
    },
    {
      id: "exp-3",
      role: "3D Modelling Instructor (Part-time)",
      company: "GyanHub Pvt. Ltd.",
      period: "Aug 2025 — Aug 2026",
      location: "Kathmandu, Nepal",
      type: "Part-time",
      summary:
        "Delivering live online 3D modeling training in SolidWorks & parametric design to over 80 engineering students per batch.",
      highlights: [
        "Delivered online 3D modeling training to more than 80 engineering students in a single batch",
        "Covered part design, assembly constraints, technical drawings, and parametric modeling",
      ],
      skillsUsed: [
        "SolidWorks",
        "Parametric Modeling",
        "Assembly Design",
        "Technical Drawing",
        "Teaching",
      ],
    },
    {
      id: "exp-4",
      role: "Research Assistant",
      company: "Design Lab at Kathmandu University",
      period: "Sept 2024 — Feb 2025",
      location: "Dhulikhel, Kavrepalanchowk",
      type: "Research",
      summary:
        'Contributed to research on Nepal\'s humanitarian response for the "AI in Humanitarian Action" project with University College London (UCL).',
      highlights: [
        "Collected and analyzed technology readiness data on Nepal disaster management",
        "Engaged government and private stakeholders to formulate AI disaster response solutions",
      ],
      skillsUsed: [
        "Data Analysis",
        "Stakeholder Engagement",
        "Humanitarian AI",
        "Technical Writing",
      ],
    },
    {
      id: "exp-5",
      role: "Vice-President",
      company: "Engineers Without Borders — KU Chapter",
      period: "Oct 2023 — Sept 2024",
      location: "Dhulikhel, Kavrepalanchowk",
      type: "Leadership",
      summary:
        "Founded new chapter at Kathmandu University focusing on community transformation and tech intervention.",
      highlights: [
        "Established official EWB chapter at Kathmandu University",
        "Visited autism clinics and schools in Kathmandu Valley to study potential assistive tech solutions",
      ],
      skillsUsed: [
        "Team Leadership",
        "Community Outreach",
        "Assistive Technology",
        "Project Management",
      ],
    },
    {
      id: "exp-6",
      role: "Engineering Intern",
      company: "ASAP Incorporated",
      period: "Feb 2024 — Apr 2024",
      location: "Balkot, Bhaktapur",
      type: "Internship",
      summary:
        "Supervised Medical Gas Pipeline System (MGPS) works at Dhulikhel Hospital and designed 3D printed surgical guides for TKR surgery.",
      highlights: [
        "Supervised MGPS modifications under strict time and budget constraints",
        "Designed 3D printed surgical cutting guides for TKR surgery from patient CT scans",
      ],
      skillsUsed: [
        "Medical Piping (MGPS)",
        "CT DICOM Processing",
        "3D Surgical Guides",
        "Inventory Management",
      ],
    },
    {
      id: "exp-7",
      role: "UNG Researcher",
      company: "Design Lab at Kathmandu University",
      period: "July 2020 — Jan 2024",
      location: "Dhulikhel, Kavrepalanchowk",
      type: "Research",
      summary:
        "Operated FDM/SLA 3D printers, Boxford CNC machining, 5DoF Robotic Arms, and sorting mechanisms.",
      highlights: [
        "Proficient in FDM & SLA 3D printing technologies and Boxford CNC precision prototyping",
        "Built 5DoF Robotic Arm using forward kinematics, box-sorting mechanism, and FES units",
      ],
      skillsUsed: [
        "FDM/SLA 3D Printing",
        "Boxford CNC",
        "5DoF Kinematics",
        "Prototyping",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor in Mechanical Engineering",
      institution: "Kathmandu University (KU)",
      period: "Graduated June 2024",
      gpa: "GPA: 3.36 / 4.0",
      description:
        "Focused on digital manufacturing, CAD/CAM, fluid machinery, medical devices, and Machine Learning for IoT condition monitoring.",
    },
    {
      id: "edu-2",
      degree: "Diploma in Mechanical Engineering",
      institution: "Manmohan Memorial Polytechnic",
      period: "Graduated July 2016",
      description:
        "Foundational training in machining, lathe operation, welding, technical drawing, and workshop safety.",
    },
  ],
  publications: [
    {
      id: "pub-1",
      title:
        "Comparative numerical and experimental study of golden angle and conventional agitator impellers",
      authors:
        "Karki P. J., Subedi A., Gaihre A., Chaulagain B., Shrestha S., & Chitrakar S. ",
      journal:
        "Kathmandu University Journal of Science, Engineering and Technology (KUSET)",
      date: "Aug 2021",
      citation: "vol. 15, no. 2, p. 4, Aug. 2021",
      doiOrLink: "https://journals.ku.edu.np/kuset/article/view/514",
    },
  ],
};

export const presetProfiles: { label: string; profile: PortfolioProfile }[] = [
  {
    label: "Bikalpa Chaulagain (Official CV)",
    profile: defaultProfile,
  },
];
