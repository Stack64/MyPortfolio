import { Experience, Project, Education, Achievement } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Jio Platforms Limited",
    role: "Software Development Engineer I (Backend)",
    duration: "Dec 2023 - Present",
    description: [
      "Architected and maintained 15+ Spring Boot microservices for large-scale location tracking systems. Implemented resilience patterns including retries, fallback handling, and circuit breakers to achieve 99.9% production uptime.",
      "Developed a Kafka-driven asynchronous pipeline processing 150K+ GPS events/hour, reducing downstream latency by 30% using optimized consumers, batching, and dead-letter queue handling.",
      "Optimized PostgreSQL queries and Hazelcast distributed caching for geofencing workloads across 50M+ records, improving p95 response latency by 22% and reducing DB CPU utilization by 28%.",
      "Integrated Micrometer monitoring dashboards for Kafka consumer lag and API observability, reducing Mean Time to Detection (MTTD) by 40%.",
      "Currently building an enterprise-grade web portal for Reliance Jio using Angular, Spring Boot 4, and JDK 21, focused on scalable APIs, secure authentication, and modern responsive UI architecture."
    ],
    logo: "",
    color: "#0F766E",
    backgroundImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  }
];

export const projects: Project[] = [
  {
    title: "AI Gym Trainer",
    tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    description:
      "A real-time AI fitness trainer using computer vision for posture detection, exercise tracking, and repetition counting.",
    details: [
      "Built a real-time AI fitness trainer using OpenCV and MediaPipe for posture detection, exercise tracking, and repetition counting.",
      "Developed pose-estimation pipelines for motion analysis and live workout monitoring using webcam-based inference processing.",
      "Implemented real-time exercise feedback workflows with optimized frame processing for low-latency user interaction.",
      "Currently extending the platform with Spring Boot microservices, AI-powered backend integrations, and scalable API architecture."
    ],
    link: "https://github.com/Stack64",
    color: "#F59E0B"
  },
  {
    title: "Transaction Notification Service",
    tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "JWT"],
    description:
      "An asynchronous payment notification platform with idempotent delivery and high-volume export pipelines.",
    details: [
      "Engineered an asynchronous payment notification platform processing 10K+ daily events using Kafka exactly-once semantics for idempotent delivery.",
      "Built a high-volume export pipeline for 1M+ transaction records supporting CSV/JSON batch exports with optimized pagination and sub-500ms query execution.",
      "Contributed to backend module design, REST API development, and role-based access workflows for high-concurrency enterprise usage.",
      "Optimized performance across internal employee services with secure authentication and scalable API design."
    ],
    link: "https://github.com/Stack64",
    color: "#10B981"
  },
  {
    title: "Employee Workflow Platform",
    tech: ["Java", "Spring Boot", "Kafka", "Docker", "Microservices"],
    description:
      "A domain-driven microservices platform migrated from a legacy monolith with resilient failure recovery.",
    details: [
      "Migrated a legacy monolith into 6 domain-driven microservices using API Gateway and Dockerized deployment workflows, reducing deployment effort by 30%.",
      "Implemented Dead Letter Queue (DLQ) recovery processors, automatically recovering 95% of transient workflow failures without manual intervention."
    ],
    link: "https://github.com/Stack64",
    color: "#3B82F6"
  }
];

export const skills: Record<string, string[]> = {
  Languages: ["Java (8/11/17/21)", "Python", "SQL", "PL/SQL"],
  "Backend Technologies": [
    "Spring Boot",
    "Spring MVC",
    "Hibernate",
    "REST APIs",
    "OAuth2",
    "JWT",
    "Microservices",
    "Event-Driven Architecture"
  ],
  Frontend: ["Angular", "React JS", "JavaScript", "HTML", "CSS"],
  "Messaging & Distributed Systems": [
    "Apache Kafka",
    "Redis",
    "Hazelcast",
    "Async Processing",
    "DLQ",
    "Batch Consumers"
  ],
  Databases: [
    "PostgreSQL",
    "MySQL",
    "Oracle",
    "Query Optimization",
    "Indexing",
    "Partitioning"
  ],
  "AI / Computer Vision": [
    "OpenCV",
    "MediaPipe",
    "LangChain",
    "RAG",
    "OpenAI APIs",
    "Vector Databases",
    "AI Agents"
  ],
  "Cloud & DevOps": [
    "AWS (EC2, S3)",
    "Docker",
    "Jenkins",
    "CI/CD",
    "Git",
    "GitLab"
  ],
  "Observability & Testing": [
    "Micrometer",
    "Prometheus",
    "JUnit 5",
    "Mockito",
    "Testcontainers"
  ]
};

export const education: Education = {
  institution: "Chandigarh Group of Colleges",
  degree: "B.Tech in Information Technology",
  duration: "2019 - 2023",
  gpa: "CGPA: 8.2/10",
  courses: [
    "Data Structures and Algorithms",
    "Object Oriented Programming",
    "Operating Systems",
    "DBMS",
    "Computer Networks",
    "Software Engineering",
    "Distributed Systems"
  ]
};

export const contactInfo = {
  name: "Mohd Sohail Khan",
  email: "sohailrcp@gmail.com",
  phone: "+91 7021744274",
  linkedin: "https://linkedin.com/in/sohaailkhan",
  github: "https://github.com/Stack64",
  website: "https://sohaailkhan.vercel.app"
};

export const achievements: Achievement[] = [
  {
    title: "High-Throughput Event Pipeline",
    description:
      "Built distributed pipelines processing 150K+ events/hour with 99.9% availability using Kafka, batching, and DLQ handling.",
    color: "#EAB308"
  },
  {
    title: "Database Optimization at Scale",
    description:
      "Improved p95 latency by 22% and cut DB CPU utilization by 28% across 50M+ records via query tuning and Hazelcast caching.",
    color: "#3B82F6"
  },
  {
    title: "IBM Java Developer Professional Certificate",
    description: "Completed the IBM Java Developer Professional Certificate on Coursera (2026).",
    color: "#10B981"
  },
  {
    title: "Software Engineering Job Simulations",
    description:
      "Completed Forage job simulations with JPMorgan Chase, HPE, and Wells Fargo (2026).",
    color: "#F97316"
  }
];
