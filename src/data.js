// All site content lives here. Edit text, links and skill levels in this file.
export const nav = [["home", "Home"], ["about", "Journey"], ["skills", "Skills"], ["projects", "Projects"], ["resume", "Resume"], ["contact", "Contact"]];
export const roles = ["Data Analyst", "Power BI Developer", "SQL & Python Analyst", "Full-Stack Developer"];
export const stats = [["7+", "Projects built"], ["3", "Data dashboards"], ["1,820", "Listings cleaned"], ["2,400+", "LinkedIn network"]];

export const bio = [
  "I started in web development: a front-end apprenticeship, then full-stack apps that use AI APIs. Along the way I kept getting pulled toward the data behind the product: what users do, what drives results, what the numbers say.",
  "In 2026 I made a deliberate move into data. I finished advanced Excel, joined a Data Science & AI course, and built three end-to-end projects on messy real-world-style data: property listings, HR attrition and customer churn.",
  "Today I am looking for a Data Analyst, MIS or Business Analyst role where I can clean data, build dashboards and explain what they mean. My web background means I can also ship the tools around the analysis.",
];

export const journey = [
  ["Oct 2024", "Google Arcade and GSSoC", "Cloud, BigQuery and ML labs, plus open-source work with distributed teams.", "Foundations"],
  ["Jan 2025", "Front End Apprentice, Athena Digital Solutions", "Co-built an e-commerce site in a two-person startup team and improved browsing speed by 30%.", "Work"],
  ["Nov 2025", "Full-stack builds with AI", "StoreIt, ResumeX and Memofy with Next.js, FastAPI, Supabase, Gemini and NVIDIA NIM.", "Build"],
  ["Jun 2026", "BCA graduate", "Mewar Institute of Management, Ghaziabad.", "Education"],
  ["Aug 2026", "Data Science & AI course", "Ducat (in progress), alongside hands-on Excel, Power BI and SQL practice.", "Pivot"],
  ["Sep 2026", "Data analytics projects", "MagicBricks, HR Attrition and Churn Intelligence, each with SQL or Power BI, a dashboard and a README.", "Data"],
  ["Now", "Open to Data Analyst, MIS and Business Analyst roles", "Based in Delhi, India. Ready to start.", "Next"],
];

export const milestones = [["Google Cloud Arcade Champion", "2024"], ["GSSoC Contributor", "2023"], ["Google Developers Group Member", "Oct 2023 - Present"], ["2,400+ LinkedIn network", "Ongoing"]];

// [name, icon, level %]. Levels are self-ratings: change them to what you can defend in an interview.
export const dataSkills = [["Advanced Excel", "microsoftexcel", 90], ["Python & Pandas", "python", 90], ["Power BI", "powerbi", 80], ["SQL", "mysql", 75], ["Data Visualization", "plotly", 80], ["Streamlit", "streamlit", 75], ["DuckDB", "duckdb", 70], ["scikit-learn & XGBoost", "scikitlearn", 70]];
export const webSkills = [["Next.js", "nextdotjs", 90], ["React", "react", 88], ["TypeScript", "typescript", 85], ["Tailwind CSS", "tailwindcss", 95], ["Node.js", "nodedotjs", 80], ["FastAPI", "fastapi", 82], ["Supabase", "supabase", 85], ["Firebase", "firebase", 80], ["Google Gemini", "googlegemini", 88], ["NVIDIA NIM", "nvidia", 75], ["Git", "git", 85], ["Linux", "linux", 78]];

export const projects = [
  { cat: "data", viz: "mb", title: "MagicBricks Property Analysis", sub: "Real estate data analysis", text: "Cleaned 1,820 messy property listings, queried them with SQL and found that city drives price the most: Mumbai costs about 4x Lucknow per sqft.", tech: ["Python", "Pandas", "DuckDB", "SQL", "Streamlit"], github: "https://github.com/LoG1604/MagicBricks-property-analysis" },
  { cat: "data", viz: "hr", title: "HR Attrition Intelligence", sub: "Power BI dashboard", text: "A 4-page dashboard on 1,470 employees covering attrition drivers, pay and satisfaction, and a flight-risk list of who HR should talk to first.", tech: ["Power BI", "HR analytics", "Dashboard design"], github: "https://github.com/LoG1604/hr-attrition-powerbi-dashboard" },
  { cat: "data", viz: "ch", title: "Churn Intelligence", sub: "Customer churn analytics", text: "Segments 3,368 customers by behavior, predicts churn with XGBoost, explains why with SHAP and turns the results into a retention plan.", tech: ["Python", "DuckDB", "XGBoost", "SHAP", "Streamlit"], github: "https://github.com/LoG1604/churn-intelligence" },
  { cat: "full", icons: ["nextdotjs", "fastapi", "googlegemini"], title: "ResumeX", sub: "AI resume analyzer", text: "Analyzes resume structure, keywords and job descriptions to give automated ATS scoring and tailored improvements.", tech: ["Next.js", "FastAPI", "Gemini 2.5 Flash", "TypeScript"], github: "https://github.com/LoG1604/ResumeX", live: "https://resume-70ok0aa1l-lakshays-projects-b33b965b.vercel.app" },
  { cat: "full", icons: ["nextdotjs", "nvidia", "supabase"], title: "Memofy", sub: "AI meeting assistant", text: "Transcribes meeting audio and generates highlights, tasks and follow-ups using NVIDIA NIM models.", tech: ["Next.js", "NVIDIA NIM", "Supabase", "Firebase"], github: "https://github.com/LoG1604/Memofy", live: "https://memofy-lilac.vercel.app" },
  { cat: "full", icons: ["nextdotjs", "typescript", "tailwindcss"], title: "StoreIt", sub: "Cloud storage app", text: "A secure storage platform with custom folders, file sharing, drag-and-drop uploads and dynamic file tagging.", tech: ["Next.js", "TypeScript", "Appwrite", "Tailwind CSS"], github: "https://github.com/LoG1604/storage_management_solution-main", live: "https://storeit-one-rho.vercel.app/sign-in" },
];
export const moreBuilds = [["Quorum", "Job application tracker SaaS", "https://github.com/LoG1604/quorum"], ["StudyMind", "Multi-provider LLM chatbot", "https://github.com/LoG1604/studymind"]];

export const socials = [["linkedin", "LinkedIn", "https://www.linkedin.com/in/lakshay-gupta-17b7ba244"], ["github", "GitHub", "https://github.com/LoG1604"], ["x", "X", "https://x.com/laks_1604"], ["instagram", "Instagram", "https://instagram.com/laksh_1604"], ["gmail", "Email", "mailto:lakshayguptabsr@gmail.com"]];

// ---- Resume content (same as the PDF) ----
export const contact = [
  { label: "Delhi, India" },
  { label: "lakshayguptabsr@gmail.com", href: "mailto:lakshayguptabsr@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/lakshay-gupta-17b7ba244" },
  { label: "GitHub", href: "https://github.com/LoG1604" },
];
export const summary = "Data analyst fresher (BCA, 2026) who cleans messy data, queries it with SQL, and turns it into dashboards people can actually use. Strong in Excel, Power BI and Python, with projects on property, HR and retail data. Open to Data Analyst, MIS Executive and Business Analyst roles.";
export const experience = [
  { title: "Apprentice, Front End Developer", org: "Athena Digital Solutions", date: "Jan 2025 - Oct 2025", points: [
    "Co-built a full e-commerce website in a two-person startup team, from design to deployment.",
    "Improved product browsing speed by 30% through optimized component architecture and seamless navigation flows.",
  ] },
];
export const education = [
  { title: "Bachelors in Computer Applications (BCA)", org: "Mewar Institute of Management, Vasundhara, Ghaziabad", date: "Graduation: Jun 2026" },
  { title: "Data Science & AI Course", org: "Ducat", date: "Aug 2026 - Jan 2027 (In progress)" },
];
export const resumeProjects = [
  { title: "MagicBricks Property Analysis", stack: "Python, Pandas, DuckDB, SQL, Streamlit, Plotly", href: "https://github.com/LoG1604/MagicBricks-property-analysis", points: [
    "Cleaned 1,820 messy property listings: removed duplicates, converted text prices like \"₹120.58 Lakh\" to numbers, fixed impossible areas and BHK values.",
    "Loaded the clean data into DuckDB and wrote SQL queries to answer pricing questions across 10 cities.",
    "Found city is the biggest price driver: median price per sqft is about 4x higher in Mumbai (~16,200) than Lucknow (~4,100).",
    "Built an interactive Streamlit dashboard with filters and KPI cards, and documented data limitations in the README.",
  ] },
  { title: "HR Attrition Dashboard", stack: "Power BI", href: "https://github.com/LoG1604/hr-attrition-powerbi-dashboard", points: [
    "Built a 4-page Power BI dashboard on 1,470 employees (IBM HR dataset): executive overview, attrition drivers, pay and satisfaction, flight risk.",
    "Added KPI cards, slicers and a Flight Risk page listing the 89 active employees in the High risk band, where actual attrition was 52.4% vs 6.2% in the Low band.",
    "Found overtime is the strongest warning sign: 30.5% attrition with overtime vs 10.4% without (2.9x), and Sales Representatives lose 39.8% of staff.",
  ] },
  { title: "Customer Churn Intelligence", stack: "Python, DuckDB, SQL, XGBoost, SHAP, Streamlit", href: "https://github.com/LoG1604/churn-intelligence", points: [
    "Cleaned the Online Retail II dataset with SQL and built RFM metrics per customer.",
    "Created a churn label and trained an XGBoost model, then used SHAP to explain which features drive churn.",
    "Segmented customers into 3 groups using KMeans and presented results in a Streamlit dashboard.",
  ] },
];
export const leadership = [
  { title: "Volunteer / Open-Source Contributor", org: "Google Arcade / GSSoC", date: "Oct 2024 - Jun 2025", points: [
    "Achieved Google Arcade Champion status: completed hands-on labs in Terraform, BigQuery, ML, and Gen AI.",
    "Contributed to Bubble.ai open-source project via GSSoC, collaborating with distributed teams on real codebases.",
  ] },
];
export const skillGroups = [
  ["Data Analysis", "Python (Pandas, NumPy), SQL (DuckDB, MySQL), data cleaning, EDA, RFM analysis"],
  ["Visualization & BI", "Power BI, Streamlit, Plotly, Excel dashboards, Tableau"],
  ["Excel & MS Office", "Advanced Excel (Pivot Tables, VLOOKUP, formulas, data cleaning), Word, PowerPoint"],
  ["ML Basics", "scikit-learn, XGBoost, SHAP, KMeans"],
  ["Tools", "Git, GitHub, Jupyter, VS Code, Linux"],
];
