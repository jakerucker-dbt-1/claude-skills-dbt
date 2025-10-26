// FILE: lib/data.ts
export interface Metric {
  label: string;
  value: string;
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
}

export interface Education {
  school: string;
  degree: string;
  grad: string;
}

export interface Writing {
  title: string;
  url: string;
  date: string;
}

export interface PersonData {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  headline: string;
  summary: string;
  metrics: Metric[];
  experience: Experience[];
  education: Education[];
  skills: Record<string, string[]>;
  writing: Writing[];
  links: {
    pdf: string;
    github: string;
    website: string;
  };
}

export const JACOB: PersonData = {
  name: "Jacob Rucker",
  location: "Austin, Texas",
  phone: "702-785-2387",
  email: "jacobruckerpersonal@gmail.com",
  linkedin: "linkedin.com/in/jacob-rucker-35b695195",
  headline: "Commercial Sales Representative • GTM Engineer mindset",
  summary: "Shipping GTM automation and AI tooling. Building PitPal for elevator techs. Proven 100%+ quota attainment across roles.",
  metrics: [
    { label: "Quota Attainment (Ramp/Q2/Q3)", value: "104% / 102% / 107%" },
    { label: "Pipeline Generated", value: "$2.7M+ outbound" },
    { label: "Roles w/ 100%+ Attainment", value: "3 consecutive" }
  ],
  experience: [
    {
      company: "dbt Labs",
      role: "Commercial Sales Representative",
      dates: "Oct 2024 – Present",
      bullets: [
        "104% ramp, 102% Q2, 107% Q3; $2.7M+ outbound pipeline generated",
        "Sell cloud data transformation platform to analytics/data/platform teams",
        "Convert dbt Core → Cloud via POCs (governance, observability, CI/CD)",
        "Navigate SQL-based discovery and architecture reviews with technical buyers"
      ]
    },
    {
      company: "Motive",
      role: "Mid-Market Account Executive",
      dates: "May 2024 – Oct 2024",
      bullets: [
        "108% of ramping quota in first quarter",
        "New business motion for 50–99 truck operators across US/Canada",
        "3 onsite visits in ramp quarter to accelerate cycles"
      ]
    },
    {
      company: "Redis",
      role: "Corporate Sales Representative",
      dates: "Nov 2022 – May 2024",
      bullets: [
        "112% FY24 quota in consumption model across 150+ mid-market accounts",
        "Sold managed in-memory DB/caching to DevOps & platform teams",
        "Consistent competitive wins vs open-source through ops & geo-replication",
        "Led team in self-generated pipeline 3 consecutive quarters"
      ]
    },
    {
      company: "Redis",
      role: "Sales Development Representative",
      dates: "Nov 2021 – Oct 2022",
      bullets: [
        "Fastest promoted SDR in company history (10 months)",
        "$750K+ pipeline converted to closed revenue; supported 20+ AEs"
      ]
    }
  ],
  education: [
    {
      school: "Missouri Baptist University",
      degree: "B.S. Applied Management",
      grad: "Spring 2020"
    }
  ],
  skills: {
    "Modern Data Stack": ["dbt (Core & Cloud)", "Snowflake", "Databricks", "BigQuery", "Airflow", "SQL", "Vector DBs"],
    "Sales Expertise": ["Open-source → commercial", "MEDDIC", "Command of Message (cert.)", "PLG/developer-led", "Technical POCs"],
    "GTM Tools": ["Salesforce", "Gong", "Outreach", "ZoomInfo", "Sales Navigator", "Apollo", "Clay", "Claude", "Glean"],
    "Performance": ["100%+ quota (2022–present)", "4-yr collegiate baseball pitcher"]
  },
  writing: [
    { title: "Outbound Automation with Clay", url: "#", date: "2025-06-01" },
    { title: "From Open-Source to Revenue: dbt Cloud POCs", url: "#", date: "2025-05-10" }
  ],
  links: {
    pdf: "#",
    github: "#",
    website: "#"
  }
};

// Project placeholder data (design-only)
export const PROJECTS = [
  {
    title: "PitPal",
    description: "AI assistant for elevator technicians - field service optimization",
    tags: ["Next.js", "AI/ML", "Mobile-first"],
    status: "In Progress"
  },
  {
    title: "GTM Automation Suite",
    description: "Clay + Apollo workflows for outbound prospecting at scale",
    tags: ["Clay", "Automation", "Sales Ops"],
    status: "Active"
  },
  {
    title: "dbt POC Accelerator",
    description: "Framework for converting dbt Core users to Cloud deployments",
    tags: ["dbt", "Analytics", "DevOps"],
    status: "Internal Tool"
  }
];
