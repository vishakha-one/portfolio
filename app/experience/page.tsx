import { Card } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      title: "Analyst",
      company: "BNY",
      period: "Jul 2024 – Present",
      highlights: [
        "Built executive dashboards for budgeting, headcount planning, and financial forecasting, supporting 10+ CXOs, improving reporting turnaround time by 30%, and reducing manual Excel dependency by ~40%.",
        "Developed Python-based automation pipelines and an efficient Excel data-cleaning tool, automating 15+ workflows, reducing Excel file sizes by up to 95%, and saving 8-10 hours of operational effort per week.",
        "Driving Agentic AI initiatives within the team, implementing 3+ automation solutions and AI-driven process enhancements.",
        "Serve as the Analysts’ Representative in India, contributing to professional development and engagement initiatives."
      ],
      achievements: [
        "Active contributor to GenEdge, Women’s Initiative Network, and Women in Engineering, supporting inclusion and social-impact efforts across the firm.",
        "Won 1st place in the GenEdge Idea Presentation Competition for presenting an innovation-focused solution.",
        "Selected from the analyst cohort for an exclusive networking session with Robin Vince, CEO of BNY, representing my team among hundreds of analysts.",
        "Delivered automation projects that significantly improved operational efficiency and reporting accuracy.",
        "Hosted fireside chats and internal leadership interactions with senior executives.",
        "Active in CSR initiatives including environmental programs, educational outreach, and NGO collaborations."
      ],
    },
    {
      title: "Winter Intern",
      company: "BNY",
      period: "Jan 2024 – Jun 2024",
      highlights: [
        "Built Python scripts to streamline BAU processes, automating 5+ repetitive tasks & reducing manual effort by ~30%.",
        "Analyzed daily database transfers involving thousands of records, identifying discrepancies, improving reporting accuracy by ~20%, and streamlining documentation to enable smoother team collaboration."
      ],
      achievements: [
        "Hosted the Analysts’ Graduation Ceremony alongside the CIO of BNY Mellon and the Head of India, representing the intern cohort at a leadership-level event.",
        "Actively participated in CSR initiatives aligned with BNY’s mission, including book-covering drives, summer camps for students, tree plantation drives, and school kit donation activities."
      ],
    },
    {
      title: "Research Intern — Customer Intelligence & CRM",
      company: "Vishwakarma Institute of Information Technology, Pune",
      period: "Jul 2023 – Dec 2023",
      highlights: [
        "Designed ML models for segmentation and churn prediction using Logistic Regression, Random Forest, SVM, and K-Means.",
        "Developed a Python-based synthetic CRM dataset generator to simulate realistic customer and transaction patterns.",
        "Conducted extensive EDA and visualization to uncover behavioral and financial patterns.",
        "Led research planning, documentation, writing, and dissemination."
      ],
      achievements: [
        "Research paper titled 'Elevating Business Dynamics: Customer-Centric Intelligence Management in Modern Banking and Financial Services' published in the Indian Journal of Technical Education.",
        "Presented at the Global Conference on Sustainable and Futuristic Technologies 2024."
      ],
    },
    {
      title: "Content & Outreach Intern",
      company: "Mitti Ke Rang (Non-Profit Social Startup)",
      period: "Oct 2021 – Dec 2021",
      highlights: [
        "Managed outreach and partnerships with women entrepreneurs under MKR’s livelihood and empowerment initiatives.",
        "Created content and marketing collateral to support fundraising campaigns and awareness drives.",
        "Coordinated onboarding workflows for NGO partners and collaborated with cross-functional volunteer teams.",
        "Worked on social storytelling to highlight real beneficiary impact and boost digital engagement."
      ],
      achievements: [
        "Contributed to successful campaigns supporting women-led micro-businesses across India.",
        "Recognized for strong communication, coordination, and community-focused project execution."
      ],
    }
  ]

  return (
    <div className="pt-25 py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-2">Professional Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 shadow-sm hover:shadow-md transition-all border-l-4 border-l-primary"
            >
              <div className="mb-6 flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-lg text-primary font-semibold">{exp.company}</p>
                </div>

                <p className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right whitespace-nowrap">
                  {exp.period}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Key Responsibilities</h4>
                <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {exp.achievements && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Achievements</h4>
                  <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
