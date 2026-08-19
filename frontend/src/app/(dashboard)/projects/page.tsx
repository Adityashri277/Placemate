"use client";

import React, { useState } from "react";

interface Project {
  id: string;
  level: "beginner" | "intermediate" | "advanced";
  title: string;
  desc: string;
  tech: string[];
  blueprint: string;
  architectureSteps?: string[];
}

interface DomainData {
  label: string;
  desc: string;
  projects: Project[];
}

const PROJECT_DATA: Record<string, DomainData> = {
  devops: {
    label: "DevOps",
    desc: "CI/CD pipelines, infrastructure automation, and observability tooling.",
    projects: [
      {
        id: "PRJ-101",
        level: "intermediate",
        title: "PipeLine - Multi-Stage CI/CD Orchestrator",
        desc: "A self-hosted pipeline runner that builds, tests, and deploys containerized apps on every git push.",
        tech: ["GitHub Actions", "Docker", "Bash", "YAML"],
        blueprint: "Webhook-triggered runner spins up isolated Docker build stages, caches layers, and pushes images to a private registry before triggering a rolling deploy.",
        architectureSteps: [
          "Phase 1: Configure webhook listeners on repository events to trigger runner execution blocks.",
          "Phase 2: Spin up isolated multi-stage Docker build containers with layer caching enabled.",
          "Phase 3: Execute automated unit test suites and security container vulnerability scans.",
          "Phase 4: Push validated image tags to a private container registry and execute rolling server updates."
        ]
      },
      {
        id: "PRJ-102",
        level: "intermediate",
        title: "InfraCast - Infrastructure as Code Toolkit",
        desc: "Reusable Terraform modules that provision a full VPC, compute, and managed database in one apply.",
        tech: ["Terraform", "AWS", "HCL", "S3"],
        blueprint: "Modular Terraform stack with remote state in S3, environment-scoped variable files, and a plan/apply gate wired into CI.",
        architectureSteps: [
          "Phase 1: Structure root modules and child modules for VPC networking, subnets, and security groups.",
          "Phase 2: Configure remote backend state storage in S3 with DynamoDB state locking.",
          "Phase 3: Build compute EC2 instances and managed RDS relational database layers via HCL.",
          "Phase 4: Integrate automated terraform plan/apply checkpoints into the CI pipeline."
        ]
      },
      {
        id: "PRJ-103",
        level: "advanced",
        title: "KubeWatch - Kubernetes Cluster Autoscaler",
        desc: "A custom controller that watches pod queue depth and scales node pools before workloads stall.",
        tech: ["Kubernetes", "Go", "Prometheus", "Helm"],
        blueprint: "Controller polls Prometheus metrics via client-go, evaluates HPA-style thresholds, and patches node pool size through the cloud provider API.",
        architectureSteps: [
          "Phase 1: Initialize custom controller using Go and client-go libraries.",
          "Phase 2: Establish metrics polling loop against Prometheus query APIs for pod queue depth.",
          "Phase 3: Implement HPA-style threshold evaluation logic to determine scaling triggers.",
          "Phase 4: Interface with cloud provider node pool APIs to dynamically scale cluster worker nodes."
        ]
      },
      {
        id: "PRJ-104",
        level: "beginner",
        title: "LogHive - Centralized Log Aggregator",
        desc: "Ships container logs from multiple services into a searchable dashboard with alert rules.",
        tech: ["Fluentd", "Elasticsearch", "Kibana", "Docker Compose"],
        blueprint: "Fluentd sidecar tails container stdout, forwards structured JSON to Elasticsearch, with Kibana dashboards for query and alert threshold visualization.",
        architectureSteps: [
          "Phase 1: Configure Fluentd sidecar collectors to tail container stdout and stderr streams.",
          "Phase 2: Parse raw logs into structured JSON payloads with timestamp metadata.",
          "Phase 3: Index formatted log streams into Elasticsearch clusters.",
          "Phase 4: Create Kibana visualization dashboards and threshold alert rules."
        ]
      },
      {
        id: "PRJ-105",
        level: "intermediate",
        title: "ChaosForge - Fault Injection Framework",
        desc: "Deliberately kills pods, throttles network, and fills disk to validate service resilience.",
        tech: ["Kubernetes", "Python", "Chaos Toolkit"],
        blueprint: "Python scheduler triggers scripted chaos experiments against a staging cluster, logging recovery time and failure blast radius per run.",
        architectureSteps: [
          "Phase 1: Define chaos experiment scenarios (pod kills, latency injection, disk filling).",
          "Phase 2: Build execution engine using Python and Chaos Toolkit SDKs.",
          "Phase 3: Target isolated staging Kubernetes namespaces during fault injection experiments.",
          "Phase 4: Measure mean time to recovery (MTTR) and document failure blast radius logs."
        ]
      }
    ]
  },

  cybersecurity: {
    label: "Cybersecurity",
    desc: "Security tooling spanning network defense, vulnerability scanning, and secure application design.",
    projects: [
      {
        id: "PRJ-201",
        level: "intermediate",
        title: "VulnScope - Web App Vulnerability Scanner",
        desc: "Crawls a target site and flags common OWASP Top 10 issues like XSS and SQL injection points.",
        tech: ["Python", "Requests", "BeautifulSoup", "SQLite"],
        blueprint: "Crawler enumerates forms and endpoints, fires payload test vectors, and scores each finding against an OWASP-mapped rule set stored in SQLite.",
        architectureSteps: [
          "Phase 1: Build recursive URL crawler using BeautifulSoup and Requests.",
          "Phase 2: Enumerate input forms and parameter endpoints.",
          "Phase 3: Inject targeted OWASP Top 10 payloads (XSS, SQLi test vectors).",
          "Phase 4: Parse server responses, score vulnerabilities, and persist findings in SQLite."
        ]
      },
      {
        id: "PRJ-202",
        level: "advanced",
        title: "PacketSentry - Network Intrusion Detector",
        desc: "Monitors live traffic and raises alerts on suspicious packet patterns using signature and anomaly rules.",
        tech: ["Python", "Scapy", "Suricata Rules", "Redis"],
        blueprint: "Packet sniffer parses live traffic with Scapy, matches against a Suricata-style rule engine, and pushes real-time alerts through a Redis pub/sub channel.",
        architectureSteps: [
          "Phase 1: Hook into network interfaces using Scapy for live packet sniffing.",
          "Phase 2: Parse packet headers and payloads against signature rule sets.",
          "Phase 3: Detect statistical traffic anomalies and pattern deviations.",
          "Phase 4: Stream real-time alerts to frontend monitors via Redis pub/sub channels."
        ]
      },
      {
        id: "PRJ-203",
        level: "beginner",
        title: "VaultLite - Encrypted Secrets Manager",
        desc: "A CLI tool that stores API keys and passwords in an AES-encrypted local vault.",
        tech: ["Python", "AES-256", "Click", "SQLite"],
        blueprint: "Master-password-derived key encrypts each secret record with AES-256-GCM before persisting to a local SQLite file, decrypted only in memory on unlock.",
        architectureSteps: [
          "Phase 1: Implement PBKDF2 master key derivation from user input master password.",
          "Phase 2: Encrypt secret payload records with AES-256-GCM authenticated encryption.",
          "Phase 3: Store encrypted byte arrays safely within SQLite local storage files.",
          "Phase 4: Expose CLI command interface using Click for secure secret retrieval."
        ]
      },
      {
        id: "PRJ-204",
        level: "intermediate",
        title: "PhishNet - Phishing Email Classifier",
        desc: "Flags suspicious emails using header analysis, URL reputation checks, and text heuristics.",
        tech: ["Python", "scikit-learn", "Flask", "NLTK"],
        blueprint: "Feature pipeline extracts header anomalies, link entropy, and TF-IDF text signals, feeding a trained classifier exposed through a Flask review dashboard.",
        architectureSteps: [
          "Phase 1: Extract email raw headers, URL links, and body content for processing.",
          "Phase 2: Compute TF-IDF text matrices and URL domain reputation entropy scores.",
          "Phase 3: Train classification models on labeled phishing and legitimate datasets.",
          "Phase 4: Serve model inferences over Flask REST routes with an interactive review UI."
        ]
      },
      {
        id: "PRJ-205",
        level: "advanced",
        title: "ZeroTrust Gate - Identity-Aware Proxy",
        desc: "Sits in front of internal services and enforces per-request identity and device posture checks.",
        tech: ["Go", "OAuth2", "JWT", "Nginx"],
        blueprint: "Reverse proxy validates short-lived JWTs against an OAuth2 provider on every request, denying access when device posture claims fail policy checks.",
        architectureSteps: [
          "Phase 1: Implement Go-based reverse proxy middleware listening in front of services.",
          "Phase 2: Validate OAuth2 identity provider tokens on every incoming request.",
          "Phase 3: Verify client device posture claims embedded in short-lived JWTs.",
          "Phase 4: Block unauthorized requests and forward verified sessions to target upstreams."
        ]
      }
    ]
  },

  "software-engineering": {
    label: "Software Engineering",
    desc: "Systems design, distributed computing, and core backend engineering projects.",
    projects: [
      {
        id: "PRJ-301",
        level: "advanced",
        title: "ShardDB - Distributed Key-Value Store",
        desc: "A hash-partitioned KV store with replication and leader election across nodes.",
        tech: ["Go", "gRPC", "Raft", "BoltDB"],
        blueprint: "Consistent-hash ring partitions keys across nodes; Raft consensus handles leader election and log replication for each shard's write path.",
        architectureSteps: [
          "Phase 1: Implement consistent-hashing ring topology to partition keys across storage nodes.",
          "Phase 2: Build gRPC communication layer for inter-node RPC calls.",
          "Phase 3: Integrate Raft consensus protocol for leader election and state replication.",
          "Phase 4: Persist shard data locally using embedded BoltDB engines."
        ]
      },
      {
        id: "PRJ-302",
        level: "intermediate",
        title: "TaskForge - Distributed Job Queue",
        desc: "A background job processor with retries, priority queues, and dead-letter handling.",
        tech: ["Node.js", "Redis", "BullMQ", "PostgreSQL"],
        blueprint: "Producers enqueue jobs into Redis-backed priority queues; workers pull with exponential backoff retries, routing exhausted jobs to a dead-letter table.",
        architectureSteps: [
          "Phase 1: Establish job producer endpoints and queue schemas.",
          "Phase 2: Configure Redis-backed priority queues using BullMQ.",
          "Phase 3: Implement worker consumer processes with exponential backoff retry mechanisms.",
          "Phase 4: Route permanently failed jobs into a PostgreSQL dead-letter queue table."
        ]
      },
      {
        id: "PRJ-303",
        level: "intermediate",
        title: "GatewayX - API Gateway & Rate Limiter",
        desc: "A single entry point that routes requests to microservices and enforces per-client rate limits.",
        tech: ["Node.js", "Express", "Redis", "JWT"],
        blueprint: "Gateway authenticates via JWT, applies a token-bucket rate limiter backed by Redis, then proxies matched routes to downstream microservices.",
        architectureSteps: [
          "Phase 1: Construct Express routing gateway layer with JWT authentication middleware.",
          "Phase 2: Implement token-bucket rate limiting algorithms using atomic Redis operations.",
          "Phase 3: Setup dynamic upstream microservice proxy target mapping.",
          "Phase 4: Add request tracing headers and centralized latency logging."
        ]
      },
      {
        id: "PRJ-304",
        level: "beginner",
        title: "EventBus Lite - Pub/Sub Messaging Library",
        desc: "A lightweight in-process event bus supporting topic subscriptions and async handlers.",
        tech: ["TypeScript", "Node.js", "Jest"],
        blueprint: "Central emitter maintains a topic-to-handler registry, dispatching events asynchronously via a microtask queue with error isolation per handler.",
        architectureSteps: [
          "Phase 1: Design TypeScript topic registry interfaces and handler map collections.",
          "Phase 2: Implement asynchronous event dispatch queue using microtasks.",
          "Phase 3: Add error boundary isolation to prevent single subscriber crashes.",
          "Phase 4: Write full unit test coverage using Jest for edge cases and concurrency."
        ]
      },
      {
        id: "PRJ-305",
        level: "advanced",
        title: "ConsensusLab - Raft Protocol Simulator",
        desc: "An interactive simulator that visualizes leader election and log replication under network partitions.",
        tech: ["React", "TypeScript", "WebSockets", "D3.js"],
        blueprint: "Simulated node cluster runs the Raft state machine server-side, streaming state transitions over WebSockets to a D3-rendered cluster visualization.",
        architectureSteps: [
          "Phase 1: Implement Raft protocol state machine (Leader, Follower, Candidate states).",
          "Phase 2: Add virtual network partition injection handlers to simulate packet drops.",
          "Phase 3: Stream state machine events over WebSocket connection streams.",
          "Phase 4: Render node cluster graph states dynamically using D3.js."
        ]
      }
    ]
  },

  cloud: {
    label: "Cloud",
    desc: "Cloud-native architecture, serverless systems, and multi-region deployment patterns.",
    projects: [
      {
        id: "PRJ-014",
        level: "intermediate",
        title: "ServerlessSnap - Image Processing Pipeline",
        desc: "Auto-resizes and optimizes uploaded images using event-driven serverless functions.",
        tech: ["AWS Lambda", "S3", "SQS", "Sharp"],
        blueprint: "S3 upload event triggers a Lambda via SQS queue, which resizes images with Sharp and writes optimized variants back to a public bucket.",
        architectureSteps: [
          "Phase 1: Configure S3 bucket upload notification hooks.",
          "Phase 2: Pass processing payloads through AWS SQS message queues.",
          "Phase 3: Deploy AWS Lambda worker function utilizing the Sharp image processing library.",
          "Phase 4: Store optimized thumbnail and web-ready variants in a destination bucket."
        ]
      },
      {
        id: "PRJ-027",
        level: "advanced",
        title: "MultiRegion Sync - Global Data Replicator",
        desc: "Keeps a Postgres database in sync across three cloud regions with conflict resolution.",
        tech: ["PostgreSQL", "Debezium", "Kafka", "AWS"],
        blueprint: "Debezium captures WAL change events, streams them through Kafka topics per region, and applies last-write-wins conflict resolution on ingest.",
        architectureSteps: [
          "Phase 1: Configure PostgreSQL Write-Ahead Log (WAL) connectors with Debezium.",
          "Phase 2: Stream change data capture (CDC) events across multi-region Apache Kafka brokers.",
          "Phase 3: Implement consumer synchronization workers in target regions.",
          "Phase 4: Apply last-write-wins timestamp conflict resolution algorithms during ingest."
        ]
      },
      {
        id: "PRJ-005",
        level: "beginner",
        title: "CloudCost Watch - Spend Monitoring Dashboard",
        desc: "Pulls billing data via cloud APIs and visualizes daily spend trends per service.",
        tech: ["Python", "AWS Cost Explorer API", "Flask", "Chart.js"],
        blueprint: "Scheduled job pulls Cost Explorer data daily, stores normalized rows in SQLite, and renders trend charts through a lightweight Flask dashboard.",
        architectureSteps: [
          "Phase 1: Configure cron jobs to fetch daily metrics via AWS Cost Explorer API.",
          "Phase 2: Normalize and store billing records into SQLite databases.",
          "Phase 3: Expose aggregated cost data through Flask API routes.",
          "Phase 4: Render responsive spend trend charts using Chart.js on the frontend."
        ]
      },
      {
        id: "PRJ-006",
        level: "intermediate",
        title: "ContainerDeck - Multi-Cloud Deployment CLI",
        desc: "A CLI that deploys the same containerized app to AWS ECS, GCP Cloud Run, or Azure with one command.",
        tech: ["Go", "Docker", "AWS SDK", "GCP SDK"],
        blueprint: "CLI abstracts a common deployment interface, translating a single manifest into provider-specific API calls for ECS, Cloud Run, or Azure Container Apps.",
        architectureSteps: [
          "Phase 1: Design unified app manifest schema for multi-cloud deployment definitions.",
          "Phase 2: Interface with AWS SDK for ECS task definitions and deployment calls.",
          "Phase 3: Integrate GCP SDK for Cloud Run service provisions.",
          "Phase 4: Build Go CLI binary providing unified deploy and rollback commands."
        ]
      },
      {
        id: "PRJ-007",
        level: "advanced",
        title: "EdgeCache - Global CDN Simulator",
        desc: "Simulates edge caching behavior with TTL invalidation and origin shielding across regions.",
        tech: ["Node.js", "Redis Cluster", "Nginx", "Docker"],
        blueprint: "Regional edge nodes cache responses in local Redis instances with TTL expiry, falling back to a shielded origin layer on cache miss to prevent thundering herd.",
        architectureSteps: [
          "Phase 1: Setup containerized regional edge proxy nodes using Nginx and Node.js.",
          "Phase 2: Implement local edge cache layers backed by Redis Cluster instances.",
          "Phase 3: Build origin shield layer to collapse concurrent cache miss requests.",
          "Phase 4: Simulate TTL expiration and instant cache purge invalidation messages."
        ]
      }
    ]
  },

  "ai-ml": {
    label: "AI/ML",
    desc: "Applied machine learning systems from classical models to deployed inference pipelines.",
    projects: [
      {
        id: "PRJ-401",
        level: "intermediate",
        title: "ChurnGuard - Customer Churn Predictor",
        desc: "Predicts subscription churn risk from usage patterns and surfaces at-risk accounts.",
        tech: ["Python", "scikit-learn", "Pandas", "Flask"],
        blueprint: "Feature engineering pipeline aggregates usage logs into behavioral features, feeding a gradient-boosted classifier served through a Flask prediction endpoint.",
        architectureSteps: [
          "Phase 1: Aggregate user activity logs into behavioral feature matrices using Pandas.",
          "Phase 2: Train gradient-boosted classification models via scikit-learn.",
          "Phase 3: Evaluate model precision, recall, and ROC-AUC metrics.",
          "Phase 4: Deploy model artifact and expose inference API endpoints via Flask."
        ]
      },
      {
        id: "PRJ-402",
        level: "advanced",
        title: "VisionSort - Real-Time Object Detector",
        desc: "Detects and classifies objects in a live camera feed for a warehouse sorting use case.",
        tech: ["Python", "PyTorch", "YOLOv8", "OpenCV"],
        blueprint: "Fine-tuned YOLOv8 model runs inference on frame batches from OpenCV video capture, streaming bounding-box overlays back to a monitoring UI.",
        architectureSteps: [
          "Phase 1: Fine-tune YOLOv8 model on custom domain warehouse object datasets.",
          "Phase 2: Process real-time camera video streams using OpenCV image capture.",
          "Phase 3: Execute batched GPU frame inference with PyTorch acceleration.",
          "Phase 4: Stream annotated bounding box frames to monitoring web applications."
        ]
      },
      {
        id: "PRJ-403",
        level: "beginner",
        title: "TextTone - Sentiment Analysis API",
        desc: "A simple REST API that scores text input as positive, negative, or neutral sentiment.",
        tech: ["Python", "NLTK", "Flask", "scikit-learn"],
        blueprint: "Text preprocessing pipeline (tokenize, stopword removal, TF-IDF) feeds a Naive Bayes classifier exposed as a single scoring REST endpoint.",
        architectureSteps: [
          "Phase 1: Preprocess input text via tokenization and stopword removal with NLTK.",
          "Phase 2: Vectorize processed text into numerical feature vectors using TF-IDF.",
          "Phase 3: Train Naive Bayes sentiment classifier on labeled text corpora.",
          "Phase 4: Wrap inference logic inside a lightweight Flask REST API route."
        ]
      },
      {
        id: "PRJ-404",
        level: "advanced",
        title: "RAGStack - Document Q&A Retrieval System",
        desc: "Answers questions grounded in a private document set using retrieval-augmented generation.",
        tech: ["Python", "LangChain", "FAISS", "OpenAI API"],
        blueprint: "Documents are chunked and embedded into a FAISS vector index; queries retrieve top-k relevant chunks which are injected into an LLM prompt for grounded answers.",
        architectureSteps: [
          "Phase 1: Ingest and chunk private document corpora into manageable text blocks.",
          "Phase 2: Generate vector embeddings and index chunks inside a FAISS vector store.",
          "Phase 3: Implement semantic similarity search retrieval for incoming queries.",
          "Phase 4: Inject retrieved context chunks into LLM prompt templates for grounded responses."
        ]
      },
      {
        id: "PRJ-405",
        level: "intermediate",
        title: "ForecastFlow - Time Series Demand Forecaster",
        desc: "Forecasts product demand a few weeks out using historical sales data.",
        tech: ["Python", "Prophet", "Pandas", "Streamlit"],
        blueprint: "Historical sales are decomposed into trend/seasonality components via Prophet, with forecasts and confidence intervals rendered in a Streamlit dashboard.",
        architectureSteps: [
          "Phase 1: Clean and format historical time series sales data using Pandas.",
          "Phase 2: Train Facebook Prophet forecasting model with trend and seasonality parameters.",
          "Phase 3: Predict future demand windows and calculate confidence intervals.",
          "Phase 4: Render interactive trend forecast charts inside a Streamlit web application."
        ]
      }
    ]
  },

  "dsa-fundamentals": {
    label: "DSA & Fundamentals",
    desc: "Projects built to demonstrate core data structures, algorithms, and computer science fundamentals.",
    projects: [
      {
        id: "PRJ-501",
        level: "beginner",
        title: "PathFinder Viz - Pathfinding Algorithm Visualizer",
        desc: "An interactive grid where users watch BFS, DFS, Dijkstra, and A* find a path in real time.",
        tech: ["JavaScript", "HTML5 Canvas", "CSS3"],
        blueprint: "Grid state is modeled as an adjacency graph; each algorithm runs step-wise with the frontend re-rendering canvas cells on every visited-node tick.",
        architectureSteps: [
          "Phase 1: Construct interactive grid and cell state models in JavaScript.",
          "Phase 2: Implement BFS, DFS, Dijkstra, and A* graph traversal algorithms.",
          "Phase 3: Build asynchronous step-by-step execution ticker loops.",
          "Phase 4: Render visited nodes and shortest paths dynamically onto HTML5 Canvas."
        ]
      },
      {
        id: "PRJ-502",
        level: "intermediate",
        title: "TrieType - Autocomplete Engine",
        desc: "A fast prefix-search autocomplete built on a custom trie with frequency-ranked suggestions.",
        tech: ["JavaScript", "Node.js", "Trie Data Structure"],
        blueprint: "Custom trie stores words with frequency counts at terminal nodes; prefix queries traverse to the matching node and return top-k children by frequency.",
        architectureSteps: [
          "Phase 1: Implement custom Trie node and tree insertion data structures.",
          "Phase 2: Attach word frequency weights to terminal tree nodes.",
          "Phase 3: Build prefix search traversal algorithms returning top-k matching suggestions.",
          "Phase 4: Expose fast lookup APIs via Node.js backend handlers."
        ]
      },
      {
        id: "PRJ-503",
        level: "intermediate",
        title: "SortLab - Sorting Algorithm Benchmark Suite",
        desc: "Implements and benchmarks 8 sorting algorithms across array sizes and input distributions.",
        tech: ["Python", "Matplotlib", "NumPy"],
        blueprint: "Each algorithm is implemented from scratch and timed across randomized, sorted, and reverse-sorted inputs, with results plotted via Matplotlib.",
        architectureSteps: [
          "Phase 1: Implement 8 core sorting algorithms from scratch (Quick, Merge, Heap, etc.).",
          "Phase 2: Generate test array distributions (Random, Sorted, Reverse, Nearly Sorted).",
          "Phase 3: Execute execution timer loops measuring CPU ticks and memory usage.",
          "Phase 4: Plot comparative complexity performance curves using Matplotlib."
        ]
      },
      {
        id: "PRJ-504",
        level: "advanced",
        title: "SchedulerSim - OS Process Scheduler Simulator",
        desc: "Simulates FCFS, Round Robin, and Priority scheduling with Gantt chart output and wait-time stats.",
        tech: ["C++", "STL", "Data Structures"],
        blueprint: "Process control blocks are managed in queues per algorithm; the simulator advances a virtual clock tick-by-tick and logs context switches for the Gantt output.",
        architectureSteps: [
          "Phase 1: Model Process Control Blocks (PCB) with arrival time, burst time, and priority.",
          "Phase 2: Implement FCFS, Shortest Job First, Round Robin, and Priority queue schedulers.",
          "Phase 3: Advance virtual CPU clock ticks, tracking context switching overhead.",
          "Phase 4: Generate visual ASCII/console Gantt charts and calculate average turnaround times."
        ]
      },
      {
        id: "PRJ-505",
        level: "beginner",
        title: "GraphQuest - Graph Algorithms Playground",
        desc: "A hands-on tool for building custom graphs and running traversal, shortest-path, and MST algorithms.",
        tech: ["Python", "NetworkX", "Matplotlib"],
        blueprint: "User-defined edges build an adjacency list; selected algorithms (BFS/DFS/Dijkstra/Kruskal) run against it with each step rendered as a graph snapshot.",
        architectureSteps: [
          "Phase 1: Construct weighted graph adjacency list representations using NetworkX.",
          "Phase 2: Implement graph algorithms (BFS, DFS, Dijkstra, Kruskal Minimum Spanning Tree).",
          "Phase 3: Capture step-by-step state snapshots during algorithm execution.",
          "Phase 4: Render interactive step visualisations using Matplotlib."
        ]
      }
    ]
  }
};

export default function ProjectRecommendationsPage() {
  const domainKeys = Object.keys(PROJECT_DATA);
  const [activeTab, setActiveTab] = useState<string>("cloud");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const currentDomain = PROJECT_DATA[activeTab];

  const filteredProjects = currentDomain.projects.filter((p) => {
    if (selectedDifficulty === "all") return true;
    return p.level === selectedDifficulty;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        :root {
          --bg: #050608;
          --bg-deep: #000000;
          --grid-line: rgba(79, 209, 232, 0.07);
          --grid-line-strong: rgba(79, 209, 232, 0.14);
          --cyan: #4FD1E8;
          --cyan-dim: rgba(79, 209, 232, 0.4);
          --amber: #F5A623;
          --coral: #FF6B5E;
          --green: #6EE7A8;
          --ink: #E8EEF5;
          --ink-dim: #93A9C7;
          --ink-faint: #5C7091;
          --card-bg: rgba(14, 16, 20, 0.6);
          --card-border: rgba(79, 209, 232, 0.2);
        }

        .blueprint-body {
          background: linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px),
            radial-gradient(ellipse at 20% 0%, #0a1420 0%, var(--bg) 55%),
            var(--bg);
          background-size: 40px 40px, 40px 40px, 100% 100%, 100% 100%;
          color: var(--ink);
          font-family: 'Space Grotesk', sans-serif;
          min-height: 100vh;
          padding: 56px 64px 100px;
          position: relative;
          overflow-x: hidden;
        }

        .blueprint-body::before {
          content: "";
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
              0deg,
              transparent,
              transparent 199px,
              var(--grid-line-strong) 200px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 199px,
              var(--grid-line-strong) 200px
            );
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
        }

        .mono {
          font-family: 'JetBrains Mono', monospace;
        }

       

        .blueprint-title {
          font-size: clamp(38px, 5.4vw, 58px);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0 0 14px;
          line-height: 1.02;
          opacity: 0;
          animation: riseIn 0.7s 0.08s cubic-bezier(0.2, 0.9, 0.25, 1) forwards;
        }

        .blueprint-title .accent {
          color: var(--cyan);
          position: relative;
        }

        .blueprint-lede {
          font-size: 17px;
          color: var(--ink-dim);
          max-width: 640px;
          line-height: 1.6;
          margin: 0 0 40px;
          opacity: 0;
          animation: riseIn 0.7s 0.16s cubic-bezier(0.2, 0.9, 0.25, 1) forwards;
        }

        @keyframes riseIn {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tabs {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 28px;
          opacity: 0;
          animation: riseIn 0.7s 0.24s cubic-bezier(0.2, 0.9, 0.25, 1) forwards;
          position: relative;
          z-index: 1;
        }

        .tab {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          font-weight: 500;
          padding: 11px 20px;
          border: 1px solid var(--card-border);
          background: rgba(9, 24, 48, 0.5);
          color: var(--ink-dim);
          border-radius: 3px;
          cursor: pointer;
          position: relative;
          transition: color 0.25s ease, border-color 0.25s ease, transform 0.15s ease;
          letter-spacing: 0.02em;
        }

        .tab:hover {
          color: var(--ink);
          border-color: var(--cyan-dim);
          transform: translateY(-2px);
        }

        .tab.active {
          color: var(--bg-deep);
          background: var(--cyan);
          border-color: var(--cyan);
          box-shadow: 0 0 0 1px var(--cyan), 0 6px 20px -6px rgba(79, 209, 232, 0.55);
        }

        .domain-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding: 18px 0 22px;
          border-bottom: 1px solid var(--card-border);
          margin-bottom: 40px;
          opacity: 0;
          animation: riseIn 0.7s 0.3s cubic-bezier(0.2, 0.9, 0.25, 1) forwards;
          position: relative;
          z-index: 1;
        }

        .domain-desc {
          font-size: 14px;
          color: var(--ink-faint);
          font-family: 'JetBrains Mono', monospace;
        }

        .domain-desc span {
          color: var(--cyan);
        }

        .filters {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .filters-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-faint);
        }

        .filter-group {
          display: flex;
          gap: 6px;
        }

        .filter-btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 7px 14px;
          border-radius: 20px;
          border: 1px solid var(--card-border);
          background: transparent;
          color: var(--ink-faint);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          color: var(--ink);
          border-color: var(--ink-dim);
        }

        .filter-btn.active {
          background: var(--ink);
          color: var(--bg-deep);
          border-color: var(--ink);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
          position: relative;
          z-index: 1;
        }

        .blueprint-card {
          background: var(--card-bg);
          backdrop-filter: blur(6px);
          border: 1px solid var(--card-border);
          border-radius: 4px;
          padding: 28px 26px 26px;
          position: relative;
          cursor: pointer;
          opacity: 0;
          transform: translateY(24px);
          animation: cardIn 0.6s cubic-bezier(0.2, 0.9, 0.25, 1) forwards;
          transition: border-color 0.35s ease, transform 0.35s cubic-bezier(0.2, 0.9, 0.25, 1),
            box-shadow 0.35s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .blueprint-card .corner {
          position: absolute;
          width: 14px;
          height: 14px;
          border-color: var(--cyan-dim);
          opacity: 0.5;
          transition: opacity 0.3s ease, border-color 0.3s ease, width 0.3s ease, height 0.3s ease;
        }
        .blueprint-card .corner.tl {
          top: 10px;
          left: 10px;
          border-top: 1.5px solid;
          border-left: 1.5px solid;
        }
        .blueprint-card .corner.tr {
          top: 10px;
          right: 10px;
          border-top: 1.5px solid;
          border-right: 1.5px solid;
        }
        .blueprint-card .corner.bl {
          bottom: 10px;
          left: 10px;
          border-bottom: 1.5px solid;
          border-left: 1.5px solid;
        }
        .blueprint-card .corner.br {
          bottom: 10px;
          right: 10px;
          border-bottom: 1.5px solid;
          border-right: 1.5px solid;
        }

        .blueprint-card:hover {
          border-color: var(--cyan-dim);
          transform: translateY(-6px);
          box-shadow: 0 20px 44px -20px rgba(79, 209, 232, 0.35),
            0 0 0 1px rgba(79, 209, 232, 0.15);
        }
        .blueprint-card:hover .corner {
          opacity: 1;
          width: 20px;
          height: 20px;
          border-color: var(--cyan);
        }

        .card-id-tag {
          position: absolute;
          top: 26px;
          right: 26px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--ink-faint);
          letter-spacing: 0.06em;
          opacity: 0.7;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 5px 11px 5px 9px;
          border-radius: 2px;
          margin-bottom: 18px;
          width: fit-content;
        }
        .badge::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
        .badge.beginner {
          background: rgba(110, 231, 168, 0.1);
          color: var(--green);
          border: 1px solid rgba(110, 231, 168, 0.3);
        }
        .badge.beginner::before {
          background: var(--green);
          box-shadow: 0 0 6px var(--green);
        }
        .badge.intermediate {
          background: rgba(245, 166, 35, 0.1);
          color: var(--amber);
          border: 1px solid rgba(245, 166, 35, 0.3);
        }
        .badge.intermediate::before {
          background: var(--amber);
          box-shadow: 0 0 6px var(--amber);
        }
        .badge.advanced {
          background: rgba(255, 107, 94, 0.1);
          color: var(--coral);
          border: 1px solid rgba(255, 107, 94, 0.3);
        }
        .badge.advanced::before {
          background: var(--coral);
          box-shadow: 0 0 6px var(--coral);
        }

        .blueprint-card h3 {
          font-size: 21px;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin: 0 0 12px;
          line-height: 1.25;
          max-width: 88%;
          color: var(--ink);
        }

        .blueprint-card p.desc {
          font-size: 14.5px;
          color: var(--ink-dim);
          line-height: 1.6;
          margin: 0 0 22px;
        }

        .sec-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink-faint);
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .sec-label::after {
          content: "";
          flex: 1;
          height: 1px;
          background: var(--card-border);
        }

        .tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 22px;
        }
        .tech-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          padding: 5px 11px;
          border: 1px solid var(--card-border);
          border-radius: 3px;
          color: var(--ink-dim);
          background: rgba(79, 209, 232, 0.03);
          transition: all 0.2s ease;
        }
        .blueprint-card:hover .tech-pill {
          border-color: rgba(79, 209, 232, 0.35);
          color: var(--ink);
        }

        .blueprint-box {
          border: 1px dashed var(--card-border);
          border-radius: 3px;
          padding: 16px 16px 16px 18px;
          position: relative;
          background: repeating-linear-gradient(
            45deg,
            rgba(79, 209, 232, 0.02) 0px,
            rgba(79, 209, 232, 0.02) 1px,
            transparent 1px,
            transparent 9px
          );
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.45s cubic-bezier(0.2, 0.9, 0.25, 1), opacity 0.35s ease,
            padding 0.45s ease, border-color 0.3s ease;
        }
        .blueprint-card:hover .blueprint-box {
          max-height: 220px;
          opacity: 1;
          border-color: var(--cyan-dim);
        }
        .blueprint-box p {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          line-height: 1.7;
          color: var(--ink-dim);
          margin: 0;
        }

        .blueprint-hint {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--cyan);
          opacity: 0.75;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: opacity 0.3s ease;
        }
        .blueprint-card:hover .blueprint-hint {
          opacity: 0;
          height: 0;
          overflow: hidden;
        }
        .blueprint-hint::after {
          content: "→";
          transition: transform 0.2s ease;
        }

        .sweep {
          position: absolute;
          top: 0;
          left: -40%;
          width: 40%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(79, 209, 232, 0.06),
            transparent
          );
          pointer-events: none;
          transition: left 0.9s cubic-bezier(0.3, 0.8, 0.3, 1);
        }
        .blueprint-card:hover .sweep {
          left: 120%;
        }

        .footer-note {
          margin-top: 56px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--ink-faint);
          opacity: 0;
          animation: riseIn 0.7s 1.0s cubic-bezier(0.2, 0.9, 0.25, 1) forwards;
          position: relative;
          z-index: 1;
        }
        .footer-note .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>

      <div className="blueprint-body">


        {/* Title & Lede */}
        <h1 className="blueprint-title">
          Project <span className="accent">Recommendations</span>
        </h1>
        <p className="blueprint-lede">
          Select a domain to inspect curated engineering blueprints for placement portfolios. Hover any spec sheet to unroll its architecture.
        </p>

        {/* Domain Tabs Navigation */}
        <div className="tabs">
          {domainKeys.map((key) => {
            const domain = PROJECT_DATA[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveTab(key);
                  setSelectedDifficulty("all");
                }}
                className={`tab ${isActive ? "active" : ""}`}
              >
                {domain.label}
              </button>
            );
          })}
        </div>

        {/* Domain Description Bar & Difficulty Filter */}
        <div className="domain-bar">
          
          <div className="filters">
            <span className="filters-label">Filter level:</span>
            <div className="filter-group">
              {["all", "beginner", "intermediate", "advanced"].map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`filter-btn ${selectedDifficulty === diff ? "active" : ""}`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-12 text-center text-sm text-[var(--ink-faint)] font-mono">
            // No blueprints found matching filter criteria in {currentDomain.label}.
          </div>
        ) : (
          <div className="grid">
            {filteredProjects.map((project, idx) => {
              return (
                <div
                  key={idx}
                  className="blueprint-card"
                  onClick={() => setActiveModalProject(project)}
                  style={{ animationDelay: `${0.35 + idx * 0.1}s` }}
                >
                  <span className="corner tl"></span>
                  <span className="corner tr"></span>
                  <span className="corner bl"></span>
                  <span className="corner br"></span>
                  <div className="sweep"></div>

                

                  <span className={`badge ${project.level}`}>
                    {project.level.toUpperCase()}
                  </span>

                  <h3>{project.title}</h3>
                  <p className="desc">{project.desc}</p>

                  <div className="sec-label">Tech Stack</div>
                  <div className="tech-row">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="sec-label">Roadmap</div>
                  <div className="blueprint-hint">Click for full steps</div>
                  <div className="blueprint-box">
                    <p>{project.blueprint}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

       

        {/* Full System Blueprint Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`badge ${activeModalProject.level} mb-2`}>
                    {activeModalProject.level.toUpperCase()}
                  </span>
                  <h2 className="text-2xl font-bold text-[var(--ink)] font-sans">
                    {activeModalProject.title}
                  </h2>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="rounded-lg bg-[rgba(14,16,20,0.8)] p-2 text-[var(--ink-dim)] hover:text-white border border-[var(--card-border)] transition-colors mono text-xs"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-[var(--ink-dim)] mb-6 leading-relaxed">
                {activeModalProject.desc}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-[var(--ink)] mb-2 mono tracking-wider uppercase">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs text-[var(--cyan)] bg-[rgba(79,209,232,0.06)] border border-[var(--card-border)] px-2.5 py-1 rounded-md mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[var(--ink)] mb-2 mono tracking-wider uppercase">Architecture Overview</h4>
                  <div className="bg-[var(--bg)] border border-[var(--card-border)] rounded-xl p-4 text-xs text-[var(--ink-dim)] leading-relaxed mono">
                    {activeModalProject.blueprint}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[var(--ink)] mb-3 mono tracking-wider uppercase">Step-by-Step Implementation Guide</h4>
                  <div className="space-y-3">
                    {activeModalProject.architectureSteps?.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-xl bg-[rgba(9,24,48,0.4)] border border-[var(--card-border)] p-3.5 text-xs text-[var(--ink)]"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--cyan)] text-[var(--bg-deep)] font-bold text-[10px] mono">
                          {idx + 1}
                        </span>
                        <p className="m-0 leading-normal text-[var(--ink-dim)] mono">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="rounded-xl bg-[var(--cyan)] border border-[var(--cyan)] px-6 py-2.5 text-xs font-semibold text-[var(--bg-deep)] hover:opacity-90 transition-opacity mono"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}