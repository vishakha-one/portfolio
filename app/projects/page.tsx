import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "Bayer — Product Strategy & Go-to-Market",
      description: "Led product strategy and go-to-market validation for a new sustainable product line under NDA.",
      tags: ["Product Strategy", "Go-to-Market", "Customer Discovery", "Business Model Validation"],
      details:
        "Partnered with Bayer leadership to define product strategy for a sustainable product line through business model validation, customer discovery, and design-thinking iteration. Developed recommendations to balance cost, quality, and time-to-market while translating market insight into actionable go-to-market guidance aligned with leadership priorities.",
    },
    {
      title: "Landscape & Garden Supply Company — Market Entry & Channel Strategy",
      description: "Developed expansion strategy for new markets and distribution routes across a multi-market landscape.",
      tags: ["Market Entry", "Channel Strategy", "Supply Chain", "Competitive Analysis"],
      details:
        "Designed a multi-market geographic expansion strategy by evaluating retail and distribution partnerships across the supply chain. Assessed new product line viability using competitive and customer research to shape channel recommendations and support strategic market entry planning for leadership.",
    },
    {
      title: "Global BIC Data Consolidation & Insights",
      description: "Consolidates multi-country business code (BIC) folders into a single Excel sheet for strategic analysis.",
      tags: ["Python", "Excel", "Automation", "Business Analytics"],
      details:
        "Developed a Python automation tool to aggregate and analyze incoming and outgoing business streams from multiple country-specific BIC folders. Created a single consolidated Excel sheet enabling engineering and product leaders to gain actionable insights efficiently, reducing manual overhead and improving decision-making speed.",
    },
    {
      title: "Phantom Rows Automation for Large Excel Datasets",
      description: "Automated detection and removal of phantom/ghost rows in Excel files to reduce file size and improve data processing efficiency.",
      tags: ["Python", "Excel", "Automation", "Data Cleaning"],
      details:
        "Developed a Python-based tool to identify and remove phantom rows in Excel datasets, reducing file sizes by up to 95% and enabling faster loading and processing. The solution automated repetitive cleanup tasks, improving operational efficiency and ensuring accurate reporting for large datasets.",
    },
    {
      title: "Syllabus Dashboard — Interactive Curriculum Analytics",
      description: "Centralized academic curriculum analytics platform improving accessibility for students and faculty.",
      tags: ["Power BI", "Excel", "Data Modeling", "Education Analytics"],
      details:
        "Consolidated unstructured curriculum data into a standardized dataset and built an interactive Power BI dashboard with dynamic filters and calculated measures to improve clarity and academic insight accessibility.",
    },
    {
      title: "India Crime Analysis Dashboard",
      description: "Multi-year, region-wise crime trend analysis using public government datasets.",
      tags: ["Power BI", "Excel", "Government Data", "Data Visualization"],
      status: "First Prize – Techlogica National Level Project Competition",
      details:
        "Cleaned and modeled multi-year crime datasets to enable category, trend, and region-wise analysis. Built an interactive Power BI dashboard with KPIs and comparative metrics for insightful decision-making.",
    },
    {
      title: "CRCS Government Cooperative Insights Dashboard",
      description: "Interactive dashboard for monitoring Multi-State Cooperative Societies across India.",
      tags: ["Power BI", "Government Analytics", "Geo-Maps"],
      details:
        "Developed a drill-down enabled Power BI dashboard with geo-maps and sector-level insights to support monitoring and analysis for national policymakers.",
    },
    {
      title: "Financial Intelligence Unit (FIU) — Big Data Analytics",
      description: "Big-data processing pipeline to analyze financial activity logs for anomaly detection.",
      tags: ["Hadoop", "HDFS", "MapReduce", "Big Data"],
      details:
        "Processed large-scale financial activity logs using Hadoop technologies to detect anomalies and risk indicators. Built end-to-end workflows covering data ingestion, transformation, and reporting to understand fraud detection pipelines.",
    },
  ]

  return (
    <div className="pt-25 py-20 bg-muted/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-2">Projects</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 border-0 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden border-l-4 border-l-accent hover:border-l-primary"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-3">
                {project.description}
              </p>

              {/* Details */}
              <p className="text-xs text-muted-foreground mb-4 italic">
                {project.details}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-secondary/70 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Achievement */}
              {project.status && (
                <div className="mt-2 flex items-center gap-1 text-sm font-semibold text-primary">
                  <span className="text-base leading-none">🏆</span>
                  <span className="leading-tight">{project.status}</span>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
