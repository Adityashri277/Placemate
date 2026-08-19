export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  difficulty: Difficulty;
  codeSnippet?: string;
  tags?: string[];
}

export interface InterviewTopic {
  id: string;
  name: string;
  description: string;
  questions: InterviewQuestion[];
}

export interface InterviewCategory {
  id: string;
  name: string;
  tag: string;
  topics: InterviewTopic[];
}

export const INTERVIEW_CATALOG: InterviewCategory[] = [
  {
    id: 'core-cs',
    name: 'Core Computer Science',
    tag: 'CORE',
    topics: [
      {
        id: 'os-concurrency',
        name: 'Operating Systems & Threading',
        description: 'Key concepts covering process synchronization, deadlock prevention, and virtual memory.',
        questions: [
          {
            id: 'os-1',
            question: 'What is the difference between Process and Thread?',
            difficulty: 'Easy',
            answer: 'A process is an independent program execution with its own allocated memory space, whereas a thread is a lightweight unit of execution within a process that shares memory and resources with other threads in the same process.',
            tags: ['OS', 'Concurrency', 'Process Management'],
            codeSnippet: `// Example of process vs thread creation concept
// Process fork vs Thread spawn in C/Pthreads
pthread_t thread1;
pthread_create(&thread1, NULL, thread_function, NULL);`
          },
          {
            id: 'os-2',
            question: 'Explain the 4 necessary conditions for a Deadlock to occur.',
            difficulty: 'Medium',
            answer: 'The four Coffman conditions required for a deadlock are:\n1. Mutual Exclusion: At least one resource must be held in a non-shareable mode.\n2. Hold and Wait: A process holds resources while waiting for additional ones.\n3. No Preemption: Resources cannot be forcibly taken from a process.\n4. Circular Wait: A closed chain of processes exists where each waits for a resource held by the next.',
            tags: ['OS', 'Deadlocks']
          }
        ]
      },
      {
        id: 'dbms-sql',
        name: 'DBMS & Relational Architecture',
        description: 'Relational database theory, indexing internals, and SQL query execution.',
        questions: [
          {
            id: 'dbms-1',
            question: 'What are ACID properties in a Database Management System?',
            difficulty: 'Easy',
            answer: 'ACID stands for Atomicity (all-or-nothing transactions), Consistency (database transitions from one valid state to another), Isolation (concurrent transactions execute independently), and Durability (committed changes persist despite power or system failures).',
            tags: ['SQL', 'DBMS', 'Transactions']
          }
        ]
      }
    ]
  },
  {
    id: 'web-dev',
    name: 'Web Engineering & JS',
    tag: 'WEB',
    topics: [
      {
        id: 'js-async',
        name: 'JavaScript & Event Loop Engine',
        description: 'Asynchronous runtime behavior, event queue execution, and memory management.',
        questions: [
          {
            id: 'js-1',
            question: 'How does the JavaScript Event Loop work with Microtasks and Macrotasks?',
            difficulty: 'Medium',
            answer: 'The Event Loop constantly monitors the Call Stack and Task Queues. When the Call Stack clears, it executes ALL tasks in the Microtask queue (Promises, process.nextTick) before picking the NEXT single task from the Macrotask queue (setTimeout, setInterval).',
            tags: ['JavaScript', 'Async', 'Event Loop'],
            codeSnippet: `console.log('Start');
setTimeout(() => console.log('Timeout'), 0); // Macrotask
Promise.resolve().then(() => console.log('Promise')); // Microtask
console.log('End');
// Output Order: Start -> End -> Promise -> Timeout`
          }
        ]
      }
    ]
  },
  {
    id: 'backend-system',
    name: 'Backend & Systems Architecture',
    tag: 'SYS',
    topics: [
      {
        id: 'system-design',
        name: 'System Design & Scalability',
        description: 'Distributed systems architecture, caching strategies, and load balancing.',
        questions: [
          {
            id: 'sd-1',
            question: 'What is the difference between Horizontal and Vertical Scaling?',
            difficulty: 'Easy',
            answer: 'Vertical Scaling (Scaling Up) involves adding more resources (CPU, RAM) to an existing server, whereas Horizontal Scaling (Scaling Out) involves adding more machine instances to a cluster behind a load balancer.',
            tags: ['System Design', 'Scalability']
          }
        ]
      }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    tag: 'CYBER-SEC',
    topics: [
      {
        id: 'network-threat-defense',
        name: 'Network Security & Threat Defense',
        description: 'Core cybersecurity concepts covering threat models, intrusion detection, encryption, and defensive best practices.',
        questions: [
          {
            id: 'cyber-1',
            question: 'What is the CIA Triad in information security?',
            difficulty: 'Easy',
            answer: 'The CIA Triad is the foundational model for information security: Confidentiality (ensuring data is accessible only to authorized parties), Integrity (ensuring data remains accurate and unaltered), and Availability (ensuring systems and data are accessible when needed). Every security control can be mapped back to protecting one or more of these three pillars.',
            tags: ['Cybersecurity', 'Fundamentals', 'CIA Triad']
          },
          {
            id: 'cyber-2',
            question: 'What is the difference between an IDS and an IPS?',
            difficulty: 'Medium',
            answer: 'An Intrusion Detection System (IDS) passively monitors network or system traffic and raises alerts when it detects suspicious activity, but does not block it. An Intrusion Prevention System (IPS) sits inline with traffic flow and can actively block or drop malicious packets in real time, effectively acting as an active countermeasure rather than just a monitoring tool.',
            tags: ['Cybersecurity', 'Network Security', 'IDS/IPS']
          },
          {
            id: 'cyber-3',
            question: 'Explain the concept of a Zero-Day vulnerability.',
            difficulty: 'Medium',
            answer: 'A Zero-Day vulnerability is a software flaw that is unknown to the vendor and has no available patch at the time it is discovered or exploited. Attackers who find it before defenders can develop and deploy a fix have a window (the "zero days" of warning) to exploit it, making these vulnerabilities especially dangerous since traditional signature-based defenses are ineffective against them.',
            tags: ['Cybersecurity', 'Vulnerabilities', 'Threat Intelligence']
          },
          {
            id: 'cyber-4',
            question: 'What is a Distributed Denial of Service (DDoS) attack and how can it be mitigated?',
            difficulty: 'Medium',
            answer: 'A DDoS attack floods a target server or network with traffic from many compromised systems (a botnet) simultaneously, exhausting bandwidth, connections, or compute resources so legitimate users cannot access the service. Mitigation strategies include traffic scrubbing services, rate limiting, anycast routing to distribute load, Web Application Firewalls, and upstream ISP-level filtering to absorb or discard malicious traffic before it reaches the origin server.',
            tags: ['Cybersecurity', 'Network Security', 'DDoS']
          },
          {
            id: 'cyber-5',
            question: 'What is the difference between symmetric and asymmetric encryption?',
            difficulty: 'Easy',
            answer: 'Symmetric encryption uses a single shared secret key for both encryption and decryption, making it fast but requiring secure key distribution (e.g., AES). Asymmetric encryption uses a mathematically linked key pair, a public key for encryption and a private key for decryption, eliminating the key-distribution problem but at a higher computational cost (e.g., RSA). In practice, systems like TLS combine both: asymmetric encryption negotiates a session key, which is then used for fast symmetric encryption of the actual data.',
            tags: ['Cybersecurity', 'Cryptography', 'Encryption']
          },
          {
            id: 'cyber-6',
            question: 'What is social engineering and what are some common attack vectors?',
            difficulty: 'Easy',
            answer: 'Social engineering is the psychological manipulation of people into performing actions or divulging confidential information, bypassing technical controls by exploiting human trust. Common vectors include phishing (fraudulent emails impersonating trusted entities), pretexting (fabricating a scenario to extract information), baiting (leaving infected media for a victim to use), and tailgating (physically following an authorized person into a secure area).',
            tags: ['Cybersecurity', 'Social Engineering', 'Phishing']
          },
          {
            id: 'cyber-7',
            question: 'What is threat modeling and why is it important?',
            difficulty: 'Medium',
            answer: 'Threat modeling is a structured process of identifying, categorizing, and prioritizing potential threats to a system before or during design, so mitigations can be built in proactively rather than bolted on afterward. Frameworks like STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) help teams systematically walk through attack surfaces, data flows, and trust boundaries to uncover risks early, which is far cheaper than fixing vulnerabilities after deployment.',
            tags: ['Cybersecurity', 'Threat Modeling', 'Secure Design']
          },
          {
            id: 'cyber-8',
            question: 'What is the principle of least privilege and how is it applied in practice?',
            difficulty: 'Easy',
            answer: 'The principle of least privilege states that a user, process, or system should be granted only the minimum access rights necessary to perform its function, and nothing more. In practice this is enforced through role-based access control (RBAC), scoped API tokens, just-in-time privilege elevation, and regularly auditing and revoking unused permissions, all of which shrink the blast radius if an account or service is ever compromised.',
            tags: ['Cybersecurity', 'Access Control', 'Best Practices']
          }
        ]
      },
      {
        id: "cryptography-pki",
        name: "Cryptography & PKI",
        description: "Sub-topics: symmetric/asymmetric cryptography; hashing, MACs, and digital signatures; PKI, certificates, and TLS trust.",
        questions: [
          {
            id: "cyber-crypt-1",
            question: "What is the difference between encryption, hashing, and encoding?",
            difficulty: "Easy",
            answer: "Encryption is reversible using a key and is used to protect confidentiality. Hashing is designed to be one-way and is used for integrity checks and password verification. Encoding only changes representation for transport or compatibility, such as Base64, and provides no security by itself.",
            tags: ["Cybersecurity", "Cryptography", "Subtopic: Symmetric and Asymmetric Cryptography"],
          },
          {
            id: "cyber-crypt-2",
            question: "When should symmetric encryption be preferred over asymmetric encryption?",
            difficulty: "Easy",
            answer: "Symmetric encryption should be used for bulk data because algorithms such as AES are much faster and have lower computational overhead. Asymmetric cryptography is generally used for key exchange, identity, and signatures, after which a symmetric session key protects the actual data stream.",
            tags: ["Cybersecurity", "Cryptography", "Subtopic: Symmetric and Asymmetric Cryptography"],
          },
          {
            id: "cyber-crypt-3",
            question: "How does AES differ from RSA at a high level?",
            difficulty: "Easy",
            answer: "AES is a symmetric block cipher that uses the same secret key for encryption and decryption and is efficient for large data volumes. RSA is an asymmetric public-key algorithm used mainly for signatures and key establishment rather than high-volume data encryption.",
            tags: ["Cybersecurity", "Cryptography", "Subtopic: Symmetric and Asymmetric Cryptography"],
          },
          {
            id: "cyber-crypt-4",
            question: "What is forward secrecy and how do modern protocols achieve it?",
            difficulty: "Medium",
            answer: "Forward secrecy means compromise of a server's long-term private key does not expose previously captured sessions. Ephemeral Diffie-Hellman key exchange, such as ECDHE, gives each session a fresh temporary key pair so historical session keys remain independent.",
            tags: ["Cybersecurity", "Cryptography", "Subtopic: Symmetric and Asymmetric Cryptography"],
          },
          {
            id: "cyber-crypt-5",
            question: "What is a cryptographic nonce and why must it often be unique?",
            difficulty: "Medium",
            answer: "A nonce is a value intended to be used once within a defined cryptographic context. In modes such as AES-GCM, nonce reuse can reveal relationships between plaintexts and can seriously undermine confidentiality and authenticity, so implementations must guarantee uniqueness for a key.",
            tags: ["Cybersecurity", "Cryptography", "Subtopic: Symmetric and Asymmetric Cryptography"],
          },
          {
            id: "cyber-crypt-6",
            question: "What properties should a cryptographic hash function provide?",
            difficulty: "Easy",
            answer: "A secure cryptographic hash should be deterministic, efficiently computable, preimage resistant, second-preimage resistant, and collision resistant. Small changes in input should also cause a large and unpredictable change in the digest.",
            tags: ["Cybersecurity", "Cryptography", "Subtopic: Hashing and Signatures"],
          },
          {
            id: "cyber-crypt-7",
            question: "Why are SHA-256 and SHA-3 preferred over MD5 for security-sensitive integrity checks?",
            difficulty: "Easy",
            answer: "MD5 is considered cryptographically broken because practical collision attacks exist. SHA-256 and SHA-3 belong to modern secure hash families designed to provide much stronger collision and preimage resistance.",
            tags: ["Cybersecurity", "Cryptography", "Subtopic: Hashing and Signatures"],
          },
          {
            id: "cyber-crypt-8",
            question: "What is a message authentication code (MAC)?",
            difficulty: "Medium",
            answer: "A MAC is a keyed integrity mechanism that lets a receiver verify that a message was produced by someone possessing the shared secret key and was not modified in transit. HMAC is a common construction built from a cryptographic hash function.",
            tags: ["Cybersecurity", "Cryptography", "Subtopic: Hashing and Signatures"],
          },
          {
            id: "cyber-crypt-9",
            question: "How does a digital signature differ from a MAC?",
            difficulty: "Medium",
            answer: "A digital signature uses a private key to sign data and a corresponding public key to verify it, supporting non-repudiation properties in appropriate systems. A MAC uses a shared secret, so both parties can generate valid MACs and it cannot by itself prove which party created a message.",
            tags: ["Cybersecurity", "Cryptography", "Subtopic: Hashing and Signatures"],
          },
          {
            id: "cyber-crypt-10",
            question: "Why should passwords normally be stored using password hashing rather than encryption?",
            difficulty: "Easy",
            answer: "Applications do not need to recover a user's original password, so storing a reversible encrypted password creates unnecessary key-management risk. Password-specific hashing schemes such as Argon2, scrypt, or bcrypt are intentionally expensive and incorporate salts to make offline cracking harder.",
            tags: ["Cybersecurity", "Cryptography", "Subtopic: Hashing and Signatures"],
          },
          {
            id: "cyber-crypt-11",
            question: "What is PKI?",
            difficulty: "Easy",
            answer: "Public Key Infrastructure is the collection of technologies, policies, roles, and processes used to issue, validate, renew, revoke, and manage digital certificates and public keys. It establishes trust between identities and public keys at scale.",
            tags: ["Cybersecurity", "Cryptography", "Subtopic: PKI and TLS Trust"],
          },
          {
            id: "cyber-crypt-12",
            question: "What is the role of a Certificate Authority (CA)?",
            difficulty: "Easy",
            answer: "A CA is a trusted entity that signs digital certificates after performing the required validation. Clients use trusted CA roots or intermediates to build a certificate chain and determine whether a presented public key can be trusted for a specific identity.",
            tags: ["Cybersecurity", "PKI", "Subtopic: PKI and TLS Trust"],
          },
          {
            id: "cyber-crypt-13",
            question: "What information is typically contained in a TLS server certificate?",
            difficulty: "Medium",
            answer: "A certificate normally contains the subject identity or subject alternative names, the server's public key, validity period, issuer, signature algorithm, and the CA's digital signature. Modern hostname validation relies heavily on the Subject Alternative Name extension.",
            tags: ["Cybersecurity", "PKI", "TLS", "Subtopic: PKI and TLS Trust"],
          },
          {
            id: "cyber-crypt-14",
            question: "What is certificate revocation and how can clients detect revoked certificates?",
            difficulty: "Medium",
            answer: "Revocation invalidates a certificate before its scheduled expiration, for example after a private-key compromise. Common mechanisms include CRLs and OCSP; some deployments use stapled OCSP responses to let the server provide revocation status during TLS negotiation.",
            tags: ["Cybersecurity", "PKI", "Certificate Revocation", "Subtopic: PKI and TLS Trust"],
          },
          {
            id: "cyber-crypt-15",
            question: "At a high level, what does a TLS handshake accomplish?",
            difficulty: "Medium",
            answer: "The TLS handshake negotiates protocol parameters, authenticates the server using its certificate, establishes shared keying material, and derives symmetric session keys. After the handshake, application traffic is encrypted and integrity-protected using those session keys.",
            tags: ["Cybersecurity", "TLS", "PKI", "Subtopic: PKI and TLS Trust"],
          }
        ]
      },
      {
        id: "incident-response-forensics",
        name: "Incident Response & Forensics",
        description: "Sub-topics: incident response lifecycle; evidence acquisition and forensic analysis; containment, recovery, and lessons learned.",
        questions: [
          {
            id: "cyber-ir-1",
            question: "What are the major phases of an incident response lifecycle?",
            difficulty: "Easy",
            answer: "A common lifecycle includes preparation, detection and analysis, containment, eradication, recovery, and post-incident lessons learned. The exact labels vary by framework, but the goal is to move from readiness to controlled response and continuous improvement.",
            tags: ["Cybersecurity", "Incident Response", "Subtopic: Response Lifecycle"],
          },
          {
            id: "cyber-ir-2",
            question: "What is the difference between an event, an alert, and an incident?",
            difficulty: "Easy",
            answer: "An event is any observable occurrence in a system. An alert is an event or set of events that a security control flags for review. An incident is a confirmed or suspected security event that requires coordinated response because it threatens confidentiality, integrity, availability, or policy compliance.",
            tags: ["Cybersecurity", "Incident Response", "Subtopic: Response Lifecycle"],
          },
          {
            id: "cyber-ir-3",
            question: "Why is an incident response playbook useful?",
            difficulty: "Easy",
            answer: "A playbook provides predefined actions, decision points, ownership, and escalation paths for recurring scenarios such as phishing, ransomware, or credential compromise. It reduces reaction time and makes response more consistent under pressure.",
            tags: ["Cybersecurity", "Incident Response", "Subtopic: Response Lifecycle"],
          },
          {
            id: "cyber-ir-4",
            question: "What is the difference between containment, eradication, and recovery?",
            difficulty: "Easy",
            answer: "Containment limits damage and prevents further spread. Eradication removes the root cause and attacker persistence, such as malware or compromised credentials. Recovery restores normal operations safely while monitoring for signs of reinfection or recurrence.",
            tags: ["Cybersecurity", "Incident Response", "Subtopic: Response Lifecycle"],
          },
          {
            id: "cyber-ir-5",
            question: "Why should incident response teams define severity levels?",
            difficulty: "Medium",
            answer: "Severity levels help teams prioritize limited response resources and apply predictable escalation paths. A critical incident may require executive communication and emergency isolation, while a low-severity event can follow standard queue-based handling.",
            tags: ["Cybersecurity", "Incident Response", "Subtopic: Response Lifecycle"],
          },
          {
            id: "cyber-ir-6",
            question: "What is chain of custody in digital forensics?",
            difficulty: "Easy",
            answer: "Chain of custody is the documented history of how digital evidence was collected, handled, transferred, stored, and analyzed. It helps demonstrate that evidence remained controlled and unaltered and supports its credibility during investigations or legal proceedings.",
            tags: ["Cybersecurity", "Forensics", "Subtopic: Evidence Acquisition and Analysis"],
          },
          {
            id: "cyber-ir-7",
            question: "Why is a forensic disk image preferred over examining the original disk directly?",
            difficulty: "Easy",
            answer: "A forensic image creates a bit-for-bit copy that can be preserved and hashed, allowing investigators to work on duplicates while protecting the original evidence. This minimizes accidental modification and enables repeatable analysis.",
            tags: ["Cybersecurity", "Digital Forensics", "Subtopic: Evidence Acquisition and Analysis"],
          },
          {
            id: "cyber-ir-8",
            question: "What is memory forensics and when is it valuable?",
            difficulty: "Medium",
            answer: "Memory forensics analyzes volatile RAM contents to recover information such as running processes, network connections, injected code, credentials, or encryption keys that may not exist on disk. It is particularly valuable when investigating live malware or fileless attacks.",
            tags: ["Cybersecurity", "Forensics", "Memory Forensics", "Subtopic: Evidence Acquisition and Analysis"],
          },
          {
            id: "cyber-ir-9",
            question: "Why are cryptographic hashes used during evidence handling?",
            difficulty: "Easy",
            answer: "Hashes provide an integrity fingerprint for evidence. Investigators can hash a collected image or file at acquisition and later recalculate the hash to verify that the evidence has not changed.",
            tags: ["Cybersecurity", "Forensics", "Subtopic: Evidence Acquisition and Analysis"],
          },
          {
            id: "cyber-ir-10",
            question: "What is timeline analysis in digital forensics?",
            difficulty: "Medium",
            answer: "Timeline analysis reconstructs the sequence of relevant system and user activity from timestamps in logs, filesystem metadata, browser artifacts, process records, and other sources. It helps investigators understand what happened before, during, and after an intrusion.",
            tags: ["Cybersecurity", "Forensics", "Subtopic: Evidence Acquisition and Analysis"],
          },
          {
            id: "cyber-ir-11",
            question: "What is root-cause analysis after a security incident?",
            difficulty: "Easy",
            answer: "Root-cause analysis seeks the underlying control, process, configuration, or design weakness that enabled the incident rather than stopping at the visible symptom. Effective remediation addresses the cause so the same failure is less likely to recur.",
            tags: ["Cybersecurity", "Incident Response", "Subtopic: Containment, Recovery and Lessons Learned"],
          },
          {
            id: "cyber-ir-12",
            question: "What is an IOC and how is it used during incident response?",
            difficulty: "Easy",
            answer: "An Indicator of Compromise is an observable artifact associated with malicious activity, such as a file hash, domain, IP address, registry key, or unusual process. IOCs can be searched across endpoints and logs to scope the incident and identify additional affected systems.",
            tags: ["Cybersecurity", "Threat Hunting", "Subtopic: Containment, Recovery and Lessons Learned"],
          },
          {
            id: "cyber-ir-13",
            question: "What is an IOA and how does it differ from an IOC?",
            difficulty: "Medium",
            answer: "An Indicator of Attack describes suspicious behavior or attacker technique, such as credential dumping followed by lateral movement. An IOC is usually a concrete artifact left by that activity, while an IOA focuses more on the behavior pattern itself.",
            tags: ["Cybersecurity", "Threat Hunting", "Subtopic: Containment, Recovery and Lessons Learned"],
          },
          {
            id: "cyber-ir-14",
            question: "Why should compromised credentials often be rotated during recovery?",
            difficulty: "Easy",
            answer: "An attacker may retain valid sessions, API keys, passwords, or tokens after the initial intrusion. Rotating affected secrets cuts off continued access, especially when combined with session invalidation and validation that persistence mechanisms have been removed.",
            tags: ["Cybersecurity", "Incident Response", "Identity", "Subtopic: Containment, Recovery and Lessons Learned"],
          },
          {
            id: "cyber-ir-15",
            question: "What should a good post-incident review produce?",
            difficulty: "Easy",
            answer: "A post-incident review should document the timeline, impact, detection and response effectiveness, root causes, missed signals, and specific remediation actions with owners and deadlines. The goal is measurable improvement, not blame.",
            tags: ["Cybersecurity", "Incident Response", "Lessons Learned", "Subtopic: Containment, Recovery and Lessons Learned"],
          }
        ]
      },
      {
        id: "identity-access-management",
        name: "Identity & Access Management",
        description: "Sub-topics: authentication and federation; authorization and privilege models; identity lifecycle and access governance.",
        questions: [
          {
            id: "cyber-iam-1",
            question: "What is Identity and Access Management (IAM)?",
            difficulty: "Easy",
            answer: "IAM is the set of processes and technologies used to manage digital identities, authenticate subjects, authorize access, and govern the lifecycle of accounts and permissions. It aims to give the right identity the right access for the right reason and duration.",
            tags: ["Cybersecurity", "IAM", "Subtopic: Authentication and Federation"],
          },
          {
            id: "cyber-iam-2",
            question: "What are the main factors used in multi-factor authentication?",
            difficulty: "Easy",
            answer: "The common factors are something you know, something you have, and something you are. Strong MFA combines factors from different categories, such as a password plus a hardware security key, rather than using two knowledge factors.",
            tags: ["Cybersecurity", "MFA", "Authentication", "Subtopic: Authentication and Federation"],
          },
          {
            id: "cyber-iam-3",
            question: "What is Single Sign-On (SSO)?",
            difficulty: "Easy",
            answer: "SSO lets a user authenticate once with a trusted identity provider and then access multiple applications without independently logging in to each one. It improves usability and centralizes authentication controls.",
            tags: ["Cybersecurity", "SSO", "Subtopic: Authentication and Federation"],
          },
          {
            id: "cyber-iam-4",
            question: "What is the difference between SAML and OAuth 2.0?",
            difficulty: "Medium",
            answer: "SAML is commonly used for browser-based enterprise identity federation and carries authentication assertions. OAuth 2.0 is primarily an authorization framework for delegated access to resources; it does not by itself define user authentication, although OpenID Connect adds an identity layer on top of OAuth.",
            tags: ["Cybersecurity", "SAML", "OAuth", "Subtopic: Authentication and Federation"],
          },
          {
            id: "cyber-iam-5",
            question: "What is OpenID Connect and why is it useful?",
            difficulty: "Medium",
            answer: "OpenID Connect is an identity protocol built on OAuth 2.0. It lets a client verify the identity of a user and obtain standardized claims through an ID token, making it suitable for modern web and mobile login flows.",
            tags: ["Cybersecurity", "OpenID Connect", "Subtopic: Authentication and Federation"],
          },
          {
            id: "cyber-iam-6",
            question: "What is Role-Based Access Control (RBAC)?",
            difficulty: "Easy",
            answer: "RBAC assigns permissions to roles and then assigns users or service identities to those roles. It reduces direct user-to-permission sprawl and makes organizational access policies easier to review and manage.",
            tags: ["Cybersecurity", "RBAC", "Subtopic: Authorization and Privilege Models"],
          },
          {
            id: "cyber-iam-7",
            question: "How is Attribute-Based Access Control (ABAC) different from RBAC?",
            difficulty: "Medium",
            answer: "RBAC makes decisions primarily from assigned roles, while ABAC evaluates attributes such as user, resource, action, device, time, or location. ABAC can express more context-aware policies but is usually more complex to design and govern.",
            tags: ["Cybersecurity", "ABAC", "Authorization", "Subtopic: Authorization and Privilege Models"],
          },
          {
            id: "cyber-iam-8",
            question: "What is Privileged Access Management (PAM)?",
            difficulty: "Easy",
            answer: "PAM controls high-risk administrative accounts and access paths. Typical controls include credential vaulting, just-in-time elevation, session recording, approval workflows, and detailed auditing to reduce the blast radius of privileged compromise.",
            tags: ["Cybersecurity", "PAM", "Subtopic: Authorization and Privilege Models"],
          },
          {
            id: "cyber-iam-9",
            question: "What is just-in-time access?",
            difficulty: "Easy",
            answer: "Just-in-time access grants a privilege only when it is needed and for a limited duration rather than leaving it permanently enabled. This reduces standing privilege and limits the time window available to an attacker.",
            tags: ["Cybersecurity", "Least Privilege", "Subtopic: Authorization and Privilege Models"],
          },
          {
            id: "cyber-iam-10",
            question: "Why is deny-by-default a useful authorization principle?",
            difficulty: "Easy",
            answer: "Deny-by-default means access is refused unless a policy explicitly permits it. This reduces accidental exposure caused by forgotten permissions and makes new resources safer until an intended access rule is added.",
            tags: ["Cybersecurity", "Authorization", "Subtopic: Authorization and Privilege Models"],
          },
          {
            id: "cyber-iam-11",
            question: "What is identity lifecycle management?",
            difficulty: "Easy",
            answer: "Identity lifecycle management covers creation, modification, suspension, and deletion of accounts as people and workloads change. It connects access decisions to events such as joining, role changes, leave, and termination.",
            tags: ["Cybersecurity", "IAM", "Subtopic: Identity Lifecycle and Governance"],
          },
          {
            id: "cyber-iam-12",
            question: "Why is timely deprovisioning important when an employee leaves?",
            difficulty: "Easy",
            answer: "A stale account creates an unnecessary path back into the environment. Prompt disabling or deletion, token/session revocation, and removal of associated privileges reduce the chance that former identities or retained credentials can be abused.",
            tags: ["Cybersecurity", "IAM", "Offboarding", "Subtopic: Identity Lifecycle and Governance"],
          },
          {
            id: "cyber-iam-13",
            question: "What is access recertification?",
            difficulty: "Medium",
            answer: "Access recertification is a periodic review in which resource owners or managers confirm whether current permissions are still justified. It helps discover excessive, stale, or orphaned access that automated provisioning may not catch.",
            tags: ["Cybersecurity", "IAM Governance", "Subtopic: Identity Lifecycle and Governance"],
          },
          {
            id: "cyber-iam-14",
            question: "Why should service accounts be managed differently from human accounts?",
            difficulty: "Medium",
            answer: "Service accounts often run unattended workloads and may require noninteractive credentials, so their lifecycle, secret rotation, ownership, and permissions need automation. They should be tightly scoped and should avoid interactive login where possible.",
            tags: ["Cybersecurity", "Service Accounts", "Subtopic: Identity Lifecycle and Governance"],
          },
          {
            id: "cyber-iam-15",
            question: "What is identity federation?",
            difficulty: "Medium",
            answer: "Identity federation allows one organization or identity provider to authenticate a principal for another application or organization through established trust protocols. It avoids duplicating passwords while enabling centralized identity and policy management.",
            tags: ["Cybersecurity", "Federation", "IAM", "Subtopic: Identity Lifecycle and Governance"],
          }
        ]
      }
    ]
  },
  {
    id: 'devops-eng',
    name: 'DevOps & Automation',
    tag: 'DEVOPS',
    topics: [
      {
        id: 'ci-cd-orchestration',
        name: 'CI/CD & Container Orchestration',
        description: 'Automation pipelines, containerization, Kubernetes orchestration, and observability practices for modern delivery.',
        questions: [
          {
            id: 'devops-1',
            question: 'What is the difference between Continuous Integration, Continuous Delivery, and Continuous Deployment?',
            difficulty: 'Easy',
            answer: 'Continuous Integration (CI) is the practice of frequently merging code changes into a shared branch, with automated builds and tests running on every commit. Continuous Delivery (CD) extends this by ensuring the code is always in a deployable state, with releases triggered manually. Continuous Deployment goes one step further by automatically releasing every change that passes the pipeline to production without any manual approval gate.',
            tags: ['DevOps', 'CI/CD', 'Fundamentals']
          },
          {
            id: 'devops-2',
            question: 'What is the fundamental difference between a Docker container and a Virtual Machine?',
            difficulty: 'Medium',
            answer: 'A Virtual Machine virtualizes an entire hardware stack, including its own guest OS kernel, managed by a hypervisor, making it heavier and slower to boot. A Docker container virtualizes at the operating system level, sharing the host kernel while isolating processes, filesystem, and network via namespaces and cgroups, which makes containers far lighter, faster to start, and more resource-efficient than VMs.',
            tags: ['DevOps', 'Docker', 'Containers'],
            codeSnippet: `// A minimal Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
CMD ["node", "server.js"]`
          },
          {
            id: 'devops-3',
            question: 'What is a Kubernetes Pod, and how does it relate to containers?',
            difficulty: 'Medium',
            answer: 'A Pod is the smallest deployable unit in Kubernetes, representing one or more tightly coupled containers that share the same network namespace (IP address and port space) and storage volumes. Containers within a Pod are always scheduled together on the same node, which makes Pods ideal for a primary application container alongside helper "sidecar" containers such as log shippers or service mesh proxies.',
            tags: ['DevOps', 'Kubernetes', 'Orchestration']
          },
          {
            id: 'devops-4',
            question: 'What is Infrastructure as Code (IaC) and what problem does it solve?',
            difficulty: 'Easy',
            answer: 'Infrastructure as Code is the practice of defining and provisioning infrastructure (servers, networks, load balancers) through machine-readable configuration files rather than manual processes. Tools like Terraform or CloudFormation let teams version-control infrastructure changes, review them like application code, and reproduce identical environments reliably, eliminating configuration drift and the "it worked on my machine" class of problems at the infrastructure layer.',
            tags: ['DevOps', 'IaC', 'Terraform']
          },
          {
            id: 'devops-5',
            question: 'Explain the difference between Blue-Green deployment and Canary deployment strategies.',
            difficulty: 'Medium',
            answer: 'Blue-Green deployment maintains two identical production environments; traffic is instantly switched from the old (blue) to the new (green) version once it is validated, allowing near-zero-downtime releases and instant rollback by switching back. Canary deployment instead gradually shifts a small percentage of live traffic to the new version, monitoring error rates and performance before progressively increasing the rollout, which limits the blast radius of a bad release but takes longer to fully roll out.',
            tags: ['DevOps', 'Deployment Strategies', 'Release Engineering']
          },
          {
            id: 'devops-6',
            question: 'What is GitOps and how does it differ from traditional CI/CD?',
            difficulty: 'Medium',
            answer: 'GitOps is an operational model where the desired state of infrastructure and applications is declared in a Git repository, and an automated agent (like ArgoCD or Flux) continuously reconciles the live cluster state to match what is declared in Git, rather than pipelines pushing changes directly. This makes Git the single source of truth, gives a full audit trail through commit history, and enables easy rollback simply by reverting a commit.',
            tags: ['DevOps', 'GitOps', 'Kubernetes']
          },
          {
            id: 'devops-7',
            question: 'What are the three pillars of observability?',
            difficulty: 'Medium',
            answer: 'The three pillars of observability are Logs (discrete, timestamped records of events for detailed debugging), Metrics (aggregated numerical measurements over time, like CPU usage or request latency, useful for dashboards and alerting), and Traces (end-to-end records of a single request as it flows through multiple services, essential for diagnosing latency issues in distributed systems). Together they let engineers understand not just that something is wrong, but why.',
            tags: ['DevOps', 'Observability', 'Monitoring']
          },
          {
            id: 'devops-8',
            question: 'What is configuration drift and how does configuration management help prevent it?',
            difficulty: 'Easy',
            answer: 'Configuration drift occurs when running systems gradually diverge from their originally intended configuration due to manual, undocumented changes over time, leading to inconsistent and unpredictable environments. Configuration management tools like Ansible, Chef, or Puppet continuously enforce a defined, version-controlled desired state across servers, automatically correcting any manual deviations and ensuring environments remain consistent and reproducible.',
            tags: ['DevOps', 'Configuration Management', 'Ansible']
          },
          {
            id: 'devops-9',
            question: 'What are the 12-Factor App principles and why do they matter for cloud-native applications?',
            difficulty: 'Hard',
            answer: 'The 12-Factor App is a methodology for building software-as-a-service applications that are portable, scalable, and maintainable in cloud environments. Key principles include storing config in environment variables (not code), treating backing services as attached resources, achieving statelessness so processes can scale horizontally, and ensuring dev/prod parity. Following these principles makes applications naturally compatible with containerized and orchestrated deployment platforms like Kubernetes.',
            tags: ['DevOps', '12-Factor App', 'Cloud Native']
          }
        ]
      },
      {
        id: "kubernetes-deep-dive",
        name: "Kubernetes Deep Dive",
        description: "Sub-topics: Kubernetes architecture and scheduling; workloads, networking, and storage; configuration, security, and troubleshooting.",
        questions: [
          {
            id: "devops-k8s-1",
            question: "What are the main control-plane components in Kubernetes?",
            difficulty: "Easy",
            answer: "The control plane commonly includes the API server, etcd, scheduler, and controller manager. The API server is the entry point, etcd stores cluster state, the scheduler places Pods, and controllers continuously work to make actual state match desired state.",
            tags: ["DevOps", "Kubernetes", "Subtopic: Architecture and Scheduling"],
          },
          {
            id: "devops-k8s-2",
            question: "What is etcd and why is it critical?",
            difficulty: "Medium",
            answer: "etcd is a distributed key-value store that Kubernetes uses to persist cluster state and configuration. Losing or corrupting etcd can make recovery difficult because it contains the authoritative control-plane state.",
            tags: ["DevOps", "Kubernetes", "etcd", "Subtopic: Architecture and Scheduling"],
          },
          {
            id: "devops-k8s-3",
            question: "How does the Kubernetes scheduler decide where to place a Pod?",
            difficulty: "Medium",
            answer: "The scheduler filters nodes that cannot satisfy the Pod's requirements, then scores feasible nodes using factors such as resources, affinity, taints, and other constraints before binding the Pod to a selected node.",
            tags: ["DevOps", "Kubernetes", "Scheduler", "Subtopic: Architecture and Scheduling"],
          },
          {
            id: "devops-k8s-4",
            question: "What is the Kubernetes reconciliation loop?",
            difficulty: "Easy",
            answer: "Controllers repeatedly observe the desired state stored through the Kubernetes API and compare it with the current state. They take actions to reduce the difference, which makes Kubernetes resilient to many transient failures.",
            tags: ["DevOps", "Kubernetes", "Controllers", "Subtopic: Architecture and Scheduling"],
          },
          {
            id: "devops-k8s-5",
            question: "What are node taints and Pod tolerations?",
            difficulty: "Medium",
            answer: "A taint marks a node so Pods are rejected or evicted unless they declare a matching toleration. This lets operators reserve or isolate nodes for workloads with specific requirements.",
            tags: ["DevOps", "Kubernetes", "Scheduling", "Subtopic: Architecture and Scheduling"],
          },
          {
            id: "devops-k8s-6",
            question: "What is a Deployment in Kubernetes?",
            difficulty: "Easy",
            answer: "A Deployment manages a desired number of replicated Pods through ReplicaSets and supports declarative updates, rollout history, and rollback. It is the common controller for stateless applications.",
            tags: ["DevOps", "Kubernetes", "Deployments", "Subtopic: Workloads, Networking and Storage"],
          },
          {
            id: "devops-k8s-7",
            question: "What is the purpose of a Kubernetes Service?",
            difficulty: "Easy",
            answer: "A Service provides a stable virtual network endpoint for a set of Pods selected by labels. It decouples clients from individual Pod IPs, which can change as Pods are recreated.",
            tags: ["DevOps", "Kubernetes", "Services", "Subtopic: Workloads, Networking and Storage"],
          },
          {
            id: "devops-k8s-8",
            question: "What is the difference between ClusterIP, NodePort, and LoadBalancer services?",
            difficulty: "Easy",
            answer: "ClusterIP exposes a Service only inside the cluster. NodePort publishes it through a port on cluster nodes. LoadBalancer requests an external load-balancing integration, typically from the underlying cloud provider.",
            tags: ["DevOps", "Kubernetes", "Networking", "Subtopic: Workloads, Networking and Storage"],
          },
          {
            id: "devops-k8s-9",
            question: "What is an Ingress?",
            difficulty: "Easy",
            answer: "Ingress is a Kubernetes API for describing HTTP or HTTPS routing from outside the cluster to Services. An Ingress controller implements that configuration using a reverse proxy or load-balancing data plane.",
            tags: ["DevOps", "Kubernetes", "Ingress", "Subtopic: Workloads, Networking and Storage"],
          },
          {
            id: "devops-k8s-10",
            question: "What are PersistentVolumes and PersistentVolumeClaims?",
            difficulty: "Medium",
            answer: "A PersistentVolume represents storage made available to the cluster, while a PersistentVolumeClaim is a workload's request for storage with defined capacity and access characteristics. The separation decouples application manifests from the underlying storage implementation.",
            tags: ["DevOps", "Kubernetes", "Storage", "Subtopic: Workloads, Networking and Storage"],
          },
          {
            id: "devops-k8s-11",
            question: "What is a ConfigMap and when should it be used?",
            difficulty: "Easy",
            answer: "A ConfigMap stores non-secret configuration data separately from container images and application code. It can be consumed as environment variables or files, making configuration changes easier without rebuilding the image.",
            tags: ["DevOps", "Kubernetes", "ConfigMap", "Subtopic: Configuration, Security and Troubleshooting"],
          },
          {
            id: "devops-k8s-12",
            question: "How should Kubernetes Secrets be protected?",
            difficulty: "Medium",
            answer: "Kubernetes Secrets are intended for sensitive configuration, but their presence in the API does not automatically make them safe. Access should be restricted with RBAC, encryption at rest should be enabled, secrets should not be committed to Git, and stronger external secret managers may be appropriate.",
            tags: ["DevOps", "Kubernetes", "Secrets", "Subtopic: Configuration, Security and Troubleshooting"],
          },
          {
            id: "devops-k8s-13",
            question: "What is the difference between liveness and readiness probes?",
            difficulty: "Easy",
            answer: "A liveness probe determines whether a container should be restarted because it is unhealthy. A readiness probe determines whether the application is ready to receive traffic; a failed readiness check removes the Pod from normal Service endpoints without necessarily restarting it.",
            tags: ["DevOps", "Kubernetes", "Health Checks", "Subtopic: Configuration, Security and Troubleshooting"],
          },
          {
            id: "devops-k8s-14",
            question: "What does a NetworkPolicy do in Kubernetes?",
            difficulty: "Medium",
            answer: "NetworkPolicy defines which network traffic is allowed to or from selected Pods. When enforced by a compatible CNI, it can restrict east-west traffic and implement segmentation such as allowing a frontend to reach only approved backend services.",
            tags: ["DevOps", "Kubernetes", "NetworkPolicy", "Subtopic: Configuration, Security and Troubleshooting"],
          },
          {
            id: "devops-k8s-15",
            question: "How would you troubleshoot a Pod stuck in CrashLoopBackOff?",
            difficulty: "Medium",
            answer: "Start by checking Pod events and container logs, then inspect the exit code, probes, mounted configuration, environment variables, resource limits, and recent rollout changes. The key is to distinguish application startup failure from probe failure, resource exhaustion, or configuration errors.",
            tags: ["DevOps", "Kubernetes", "Troubleshooting", "Subtopic: Configuration, Security and Troubleshooting"],
          }
        ]
      },
      {
        id: "iac-terraform",
        name: "Infrastructure as Code & Terraform",
        description: "Sub-topics: Terraform fundamentals and workflow; modules, state, and dependencies; secure and scalable IaC practices.",
        questions: [
          {
            id: "devops-tf-1",
            question: "What is the purpose of Terraform's plan phase?",
            difficulty: "Easy",
            answer: "Terraform plan calculates the proposed infrastructure changes by comparing configuration with the recorded state and the provider's current view. It gives engineers an opportunity to review additions, changes, and deletions before applying them.",
            tags: ["DevOps", "Terraform", "Subtopic: Terraform Fundamentals and Workflow"],
          },
          {
            id: "devops-tf-2",
            question: "What is the difference between terraform plan and terraform apply?",
            difficulty: "Easy",
            answer: "Plan previews the changes without making them, while apply executes the selected plan against target infrastructure. In automated pipelines, a saved plan can be reviewed and then applied to reduce surprises.",
            tags: ["DevOps", "Terraform", "Subtopic: Terraform Fundamentals and Workflow"],
          },
          {
            id: "devops-tf-3",
            question: "What is a Terraform provider?",
            difficulty: "Easy",
            answer: "A provider is a plugin that teaches Terraform how to manage resources through an external API, such as AWS, Azure, Kubernetes, or GitHub. Providers define the resources and data sources available in a configuration.",
            tags: ["DevOps", "Terraform", "Providers", "Subtopic: Terraform Fundamentals and Workflow"],
          },
          {
            id: "devops-tf-4",
            question: "What is a Terraform resource?",
            difficulty: "Easy",
            answer: "A resource represents a managed infrastructure object, such as an EC2 instance, VPC, database, or DNS record. Terraform uses the resource block to declare how that object should exist.",
            tags: ["DevOps", "Terraform", "Resources", "Subtopic: Terraform Fundamentals and Workflow"],
          },
          {
            id: "devops-tf-5",
            question: "Why is terraform fmt and validation useful in CI pipelines?",
            difficulty: "Easy",
            answer: "terraform fmt enforces consistent formatting, while terraform validate checks configuration syntax and internal consistency. Running them automatically catches basic issues before a plan is generated or shared.",
            tags: ["DevOps", "Terraform", "CI/CD", "Subtopic: Terraform Fundamentals and Workflow"],
          },
          {
            id: "devops-tf-6",
            question: "What is a Terraform module?",
            difficulty: "Easy",
            answer: "A module is a reusable collection of Terraform configuration that exposes inputs and outputs. Modules reduce duplication and can standardize infrastructure patterns across environments or teams.",
            tags: ["DevOps", "Terraform", "Modules", "Subtopic: Modules, State and Dependencies"],
          },
          {
            id: "devops-tf-7",
            question: "What is Terraform state and why is it needed?",
            difficulty: "Easy",
            answer: "Terraform state records the relationship between configuration and real infrastructure, including resource identifiers and other metadata. It lets Terraform determine what needs to change on future plans and applies.",
            tags: ["DevOps", "Terraform", "State", "Subtopic: Modules, State and Dependencies"],
          },
          {
            id: "devops-tf-8",
            question: "Why should Terraform state usually be stored remotely for teams?",
            difficulty: "Medium",
            answer: "Remote state provides a shared source of truth and enables collaboration, locking, backup, and access control. It also prevents developers from applying changes from isolated local copies of state.",
            tags: ["DevOps", "Terraform", "Remote State", "Subtopic: Modules, State and Dependencies"],
          },
          {
            id: "devops-tf-9",
            question: "What is state locking?",
            difficulty: "Easy",
            answer: "State locking prevents multiple Terraform operations from modifying the same state concurrently. It reduces corruption and race conditions in team environments where several pipelines or engineers may run Terraform at the same time.",
            tags: ["DevOps", "Terraform", "State Locking", "Subtopic: Modules, State and Dependencies"],
          },
          {
            id: "devops-tf-10",
            question: "How does Terraform determine resource dependency order?",
            difficulty: "Medium",
            answer: "Terraform builds a dependency graph from explicit references between resources and other declared relationships. When dependencies are not expressed naturally, the depends_on meta-argument can make ordering explicit.",
            tags: ["DevOps", "Terraform", "Dependency Graph", "Subtopic: Modules, State and Dependencies"],
          },
          {
            id: "devops-tf-11",
            question: "How should secrets be handled in Terraform code?",
            difficulty: "Easy",
            answer: "Secrets should not be hard-coded into configuration or committed to source control. Use secret managers or securely injected variables, restrict state access because values may appear there, and apply encryption and least privilege to remote state storage.",
            tags: ["DevOps", "Terraform", "Secrets", "Subtopic: Secure and Scalable IaC"],
          },
          {
            id: "devops-tf-12",
            question: "What is infrastructure drift and how can Terraform help detect it?",
            difficulty: "Medium",
            answer: "Drift occurs when actual infrastructure changes outside Terraform's managed workflow. A Terraform plan can compare the recorded and real state and surface differences, enabling teams to reconcile or intentionally import the changes.",
            tags: ["DevOps", "Terraform", "Drift Detection", "Subtopic: Secure and Scalable IaC"],
          },
          {
            id: "devops-tf-13",
            question: "Why is immutable infrastructure attractive in IaC workflows?",
            difficulty: "Medium",
            answer: "Immutable infrastructure replaces machines or environments instead of making many manual in-place changes. This reduces configuration drift and makes deployments more reproducible, particularly when combined with versioned images and declarative provisioning.",
            tags: ["DevOps", "IaC", "Immutable Infrastructure", "Subtopic: Secure and Scalable IaC"],
          },
          {
            id: "devops-tf-14",
            question: "What is policy as code in infrastructure management?",
            difficulty: "Medium",
            answer: "Policy as code expresses compliance or security rules in machine-readable policies that can be evaluated automatically. It can stop risky infrastructure changes before deployment, such as public storage or unrestricted network access.",
            tags: ["DevOps", "Terraform", "Policy as Code", "Subtopic: Secure and Scalable IaC"],
          },
          {
            id: "devops-tf-15",
            question: "What are good practices for structuring Terraform across dev, staging, and production?",
            difficulty: "Medium",
            answer: "Keep reusable modules separate from environment-specific configuration, use isolated state per environment, apply consistent naming and tagging, protect production with approval controls, and validate plans automatically before changes are applied.",
            tags: ["DevOps", "Terraform", "Environments", "Subtopic: Secure and Scalable IaC"],
          }
        ]
      },
      {
        id: "monitoring-logging-observability",
        name: "Monitoring, Logging & Observability",
        description: "Sub-topics: metrics and monitoring design; logs and distributed tracing; SLOs, alerting, and incident-oriented observability.",
        questions: [
          {
            id: "devops-obs-1",
            question: "What is the difference between monitoring and observability?",
            difficulty: "Easy",
            answer: "Monitoring tells you whether known conditions or thresholds are healthy, while observability is the broader ability to infer internal system state from emitted telemetry. Monitoring is often dashboard- and alert-oriented; observability emphasizes understanding unexpected behavior.",
            tags: ["DevOps", "Observability", "Subtopic: Metrics and Monitoring"],
          },
          {
            id: "devops-obs-2",
            question: "What are the four golden signals of service monitoring?",
            difficulty: "Easy",
            answer: "The four golden signals are latency, traffic, errors, and saturation. Together they provide a compact view of user-facing performance and resource pressure.",
            tags: ["DevOps", "Monitoring", "Golden Signals", "Subtopic: Metrics and Monitoring"],
          },
          {
            id: "devops-obs-3",
            question: "What is the difference between a counter, gauge, and histogram metric?",
            difficulty: "Easy",
            answer: "A counter monotonically increases until reset and is useful for event totals. A gauge represents a value that can move up or down, such as memory usage. A histogram records observations into buckets and can help analyze distributions such as request latency.",
            tags: ["DevOps", "Metrics", "Subtopic: Metrics and Monitoring"],
          },
          {
            id: "devops-obs-4",
            question: "Why is high-cardinality telemetry dangerous?",
            difficulty: "Medium",
            answer: "High-cardinality labels create a very large number of unique time series or indexed records, increasing storage, memory, query, and operational cost. Labels such as raw user IDs or arbitrary request IDs should therefore be used carefully.",
            tags: ["DevOps", "Metrics", "Observability", "Subtopic: Metrics and Monitoring"],
          },
          {
            id: "devops-obs-5",
            question: "What is alert fatigue and how can teams reduce it?",
            difficulty: "Easy",
            answer: "Alert fatigue occurs when engineers receive too many low-value or noisy alerts and begin ignoring them. Good teams alert on actionable symptoms, use meaningful thresholds or multi-window conditions, deduplicate related alerts, and regularly review alert quality.",
            tags: ["DevOps", "Alerting", "Subtopic: Metrics and Monitoring"],
          },
          {
            id: "devops-obs-6",
            question: "What makes a production log useful?",
            difficulty: "Easy",
            answer: "Useful logs capture a timestamp, severity, component, event or message, and enough structured context to correlate the event with a request or operation. Structured logging in formats such as JSON makes filtering and analysis easier than arbitrary text.",
            tags: ["DevOps", "Logging", "Subtopic: Logs and Distributed Tracing"],
          },
          {
            id: "devops-obs-7",
            question: "Why should sensitive data not be written to application logs?",
            difficulty: "Easy",
            answer: "Logs are often copied to centralized systems and retained broadly, increasing the audience and lifetime of anything recorded. Passwords, tokens, private keys, and other secrets should therefore be excluded or redacted before logging.",
            tags: ["DevOps", "Logging", "Security", "Subtopic: Logs and Distributed Tracing"],
          },
          {
            id: "devops-obs-8",
            question: "What is distributed tracing?",
            difficulty: "Easy",
            answer: "Distributed tracing follows a logical request across multiple services and records spans for each operation. Trace context propagation lets engineers connect latency and failures across service boundaries rather than looking at each component in isolation.",
            tags: ["DevOps", "Tracing", "Subtopic: Logs and Distributed Tracing"],
          },
          {
            id: "devops-obs-9",
            question: "What is a trace span?",
            difficulty: "Easy",
            answer: "A span represents one timed operation within a trace, such as an HTTP handler, database query, or external API call. Parent-child relationships between spans reconstruct the request's path through the system.",
            tags: ["DevOps", "Tracing", "Subtopic: Logs and Distributed Tracing"],
          },
          {
            id: "devops-obs-10",
            question: "How do logs, metrics, and traces complement one another?",
            difficulty: "Medium",
            answer: "Metrics show that a system is behaving differently, logs provide detailed event context, and traces show where time and failure occurred across service boundaries. Correlating all three makes distributed troubleshooting much faster.",
            tags: ["DevOps", "Observability", "Subtopic: Logs and Distributed Tracing"],
          },
          {
            id: "devops-obs-11",
            question: "What is an SLI?",
            difficulty: "Easy",
            answer: "A Service Level Indicator is a measurable signal representing service performance or reliability from a defined perspective, such as successful request rate, latency, or availability.",
            tags: ["DevOps", "SRE", "SLI", "Subtopic: SLOs, Alerting and Incident Response"],
          },
          {
            id: "devops-obs-12",
            question: "What is an SLO and how is it related to an SLA?",
            difficulty: "Easy",
            answer: "An SLO is an internal or operational target for an SLI, such as 99.9% successful requests. An SLA is a contractual commitment that can carry customer or financial consequences; an SLO is usually an engineering objective that helps manage reliability.",
            tags: ["DevOps", "SRE", "SLO", "SLA", "Subtopic: SLOs, Alerting and Incident Response"],
          },
          {
            id: "devops-obs-13",
            question: "What is an error budget?",
            difficulty: "Medium",
            answer: "An error budget is the amount of unreliability permitted by an SLO over a given period. Teams can use it to balance feature velocity against reliability work, slowing risky releases when the budget is being consumed too quickly.",
            tags: ["DevOps", "SRE", "Error Budget", "Subtopic: SLOs, Alerting and Incident Response"],
          },
          {
            id: "devops-obs-14",
            question: "What should a good alert correspond to?",
            difficulty: "Easy",
            answer: "A good alert should represent an actionable condition that requires human or automated intervention. It should include enough context to identify the affected service, severity, likely impact, and the next operational step.",
            tags: ["DevOps", "Alerting", "Subtopic: SLOs, Alerting and Incident Response"],
          },
          {
            id: "devops-obs-15",
            question: "How can observability help diagnose a latency regression?",
            difficulty: "Medium",
            answer: "Start with latency metrics to establish when the regression began, then use traces to isolate slow downstream operations and logs to inspect corresponding errors or state. Correlating deployment markers with telemetry can reveal whether a release, dependency, or infrastructure change introduced the issue.",
            tags: ["DevOps", "Observability", "Troubleshooting", "Subtopic: SLOs, Alerting and Incident Response"],
          }
        ]
      }
    ]
  },
  {
    id: 'swe-core',
    name: 'Software Engineering Core',
    tag: 'SWE-CORE',
    topics: [
      {
        id: 'design-principles-sdlc',
        name: 'Design Principles & SDLC',
        description: 'Object-oriented design principles, design patterns, testing strategy, and the software development lifecycle.',
        questions: [
          {
            id: 'swe-1',
            question: 'What does the SOLID acronym stand for in object-oriented design?',
            difficulty: 'Medium',
            answer: 'SOLID stands for five design principles: Single Responsibility (a class should have only one reason to change), Open/Closed (entities should be open for extension but closed for modification), Liskov Substitution (subtypes must be substitutable for their base types without breaking correctness), Interface Segregation (clients should not be forced to depend on methods they do not use), and Dependency Inversion (depend on abstractions, not concrete implementations). Together they guide the creation of maintainable, extensible, and testable codebases.',
            tags: ['Software Engineering', 'SOLID', 'Design Principles']
          },
          {
            id: 'swe-2',
            question: 'What is the difference between coupling and cohesion?',
            difficulty: 'Easy',
            answer: 'Coupling measures how dependent different modules or classes are on one another; low coupling is desirable because it means modules can change independently. Cohesion measures how closely related the responsibilities within a single module are; high cohesion is desirable because it means a module has a single, well-defined purpose. Well-designed systems aim for low coupling between modules and high cohesion within each module.',
            tags: ['Software Engineering', 'Design Principles', 'Architecture']
          },
          {
            id: 'swe-3',
            question: 'Explain the Singleton design pattern and a scenario where it should be used cautiously.',
            difficulty: 'Medium',
            answer: 'The Singleton pattern restricts a class to a single instance and provides a global point of access to it, commonly used for shared resources like a configuration manager or connection pool. It should be used cautiously because it introduces global mutable state, makes unit testing harder (since the instance persists across tests), and can hide dependencies, so many teams prefer dependency injection over Singletons for better testability.',
            tags: ['Software Engineering', 'Design Patterns', 'Singleton'],
            codeSnippet: `class ConfigManager {
  private static instance: ConfigManager;
  private constructor() {}
  static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }
}`
          },
          {
            id: 'swe-4',
            question: 'What is the Testing Pyramid and why is it recommended?',
            difficulty: 'Medium',
            answer: 'The Testing Pyramid is a strategy that recommends having a large base of fast, cheap Unit tests, a smaller middle layer of Integration tests that verify components work together, and a small top layer of slow, expensive End-to-End tests that verify entire user flows. This shape is recommended because unit tests catch most bugs quickly and cheaply, while relying too heavily on slow E2E tests leads to a fragile, slow-to-run, and expensive-to-maintain test suite.',
            tags: ['Software Engineering', 'Testing', 'QA']
          },
          {
            id: 'swe-5',
            question: 'What is technical debt, and how should teams manage it?',
            difficulty: 'Easy',
            answer: 'Technical debt refers to the implied cost of future rework caused by choosing a quick, expedient solution now instead of a better, more robust approach that would take longer. It is not inherently bad if incurred deliberately and tracked, but unmanaged debt compounds over time and slows development. Teams manage it by tracking debt explicitly (e.g., in the backlog), allocating dedicated time each sprint to refactor, and weighing the trade-off between shipping speed and long-term maintainability.',
            tags: ['Software Engineering', 'Technical Debt', 'Best Practices']
          },
          {
            id: 'swe-6',
            question: 'What is the difference between Agile and Waterfall software development methodologies?',
            difficulty: 'Easy',
            answer: 'Waterfall is a linear, sequential methodology where each phase (requirements, design, implementation, testing, deployment) must fully complete before the next begins, making it predictable but inflexible to changing requirements. Agile is an iterative methodology that delivers working software in short cycles (sprints), allowing continuous feedback and adaptation to changing requirements throughout the project, at the cost of requiring more ongoing stakeholder involvement and less upfront predictability.',
            tags: ['Software Engineering', 'Agile', 'SDLC']
          },
          {
            id: 'swe-7',
            question: 'What is the purpose of a code review and what should reviewers focus on?',
            difficulty: 'Easy',
            answer: 'A code review is a systematic examination of proposed code changes by peers before merging, aimed at catching bugs, ensuring adherence to coding standards, and sharing knowledge across the team. Effective reviewers focus on correctness and edge cases, readability and maintainability, security implications, adequate test coverage, and alignment with architectural conventions, rather than nitpicking purely stylistic preferences that a linter could catch automatically.',
            tags: ['Software Engineering', 'Code Review', 'Best Practices']
          },
          {
            id: 'swe-8',
            question: 'What is idempotency in the context of API design, and why does it matter?',
            difficulty: 'Medium',
            answer: 'An operation is idempotent if performing it multiple times produces the same result as performing it once, such as an HTTP PUT that sets a resource to a specific state. Idempotency matters because it makes systems safe to retry after network failures or timeouts without risking duplicate side effects (e.g., double-charging a customer), which is why idempotency keys are commonly used for critical operations like payment processing.',
            tags: ['Software Engineering', 'API Design', 'Idempotency']
          }
        ]
      },
      {
        id: "data-structures-algorithms",
        name: "Data Structures & Algorithms",
        description: "Sub-topics: core data structures; algorithmic complexity and patterns; trees, graphs, and problem-solving techniques.",
        questions: [
          {
            id: "swe-dsa-1",
            question: "What is the difference between an array and a linked list?",
            difficulty: "Easy",
            answer: "An array stores elements in contiguous memory and provides O(1) indexed access, while a linked list stores nodes connected by pointers and provides O(n) access by position. Linked lists can insert or delete nodes efficiently when the node location is known, whereas arrays are usually better for cache-friendly indexed access.",
            tags: ["Software Engineering", "DSA", "Subtopic: Core Data Structures"],
          },
          {
            id: "swe-dsa-2",
            question: "When would you choose a hash table over a balanced binary search tree?",
            difficulty: "Easy",
            answer: "A hash table typically provides O(1) average lookup and is useful when ordering is not needed. A balanced BST provides O(log n) search and also maintains sorted order, making range queries and ordered traversal possible.",
            tags: ["Software Engineering", "DSA", "Hashing", "Subtopic: Core Data Structures"],
          },
          {
            id: "swe-dsa-3",
            question: "What is a stack and where is it commonly used?",
            difficulty: "Easy",
            answer: "A stack is a last-in, first-out structure with push and pop operations. Common uses include function-call management, expression evaluation, undo operations, depth-first search, and backtracking.",
            tags: ["Software Engineering", "Stack", "Subtopic: Core Data Structures"],
          },
          {
            id: "swe-dsa-4",
            question: "What is a queue and how does a deque differ from it?",
            difficulty: "Easy",
            answer: "A queue normally supports insertion at one end and removal at the other, following FIFO order. A deque supports insertion and removal at both ends and can therefore model both queue- and stack-like behavior.",
            tags: ["Software Engineering", "Queue", "Subtopic: Core Data Structures"],
          },
          {
            id: "swe-dsa-5",
            question: "What is the difference between a min-heap and a max-heap?",
            difficulty: "Easy",
            answer: "In a min-heap the smallest key is at the root, while in a max-heap the largest key is at the root. Both support insertion and root removal in O(log n) and are commonly used to implement priority queues.",
            tags: ["Software Engineering", "Heap", "Subtopic: Core Data Structures"],
          },
          {
            id: "swe-dsa-6",
            question: "What is Big-O notation?",
            difficulty: "Easy",
            answer: "Big-O notation describes an asymptotic upper bound on how an algorithm's resource usage grows with input size. It focuses on dominant growth rather than constant factors, helping compare scalability.",
            tags: ["Software Engineering", "Algorithms", "Big-O", "Subtopic: Complexity and Problem-Solving Patterns"],
          },
          {
            id: "swe-dsa-7",
            question: "What is the difference between time complexity and space complexity?",
            difficulty: "Easy",
            answer: "Time complexity estimates how running work scales with input size, while space complexity estimates additional memory usage. Both matter because an algorithm may be fast but memory-heavy or memory-efficient but computationally expensive.",
            tags: ["Software Engineering", "Algorithms", "Complexity", "Subtopic: Complexity and Problem-Solving Patterns"],
          },
          {
            id: "swe-dsa-8",
            question: "What is the sliding-window technique?",
            difficulty: "Medium",
            answer: "Sliding window maintains a moving contiguous range of elements while updating the state incrementally as the range expands or shrinks. It often turns repeated O(n) subarray calculations into O(n) total work.",
            tags: ["Software Engineering", "Algorithms", "Sliding Window", "Subtopic: Complexity and Problem-Solving Patterns"],
          },
          {
            id: "swe-dsa-9",
            question: "When is binary search applicable?",
            difficulty: "Easy",
            answer: "Binary search requires data or a decision function that supports an ordered, monotonic search space. Each comparison discards roughly half the remaining possibilities, yielding O(log n) search in the classic sorted-array case.",
            tags: ["Software Engineering", "Algorithms", "Binary Search", "Subtopic: Complexity and Problem-Solving Patterns"],
          },
          {
            id: "swe-dsa-10",
            question: "What is dynamic programming and what two conditions often suggest it?",
            difficulty: "Medium",
            answer: "Dynamic programming solves problems with overlapping subproblems and optimal substructure by reusing results rather than recomputing them. Solutions are commonly expressed with memoization or bottom-up tabulation.",
            tags: ["Software Engineering", "Algorithms", "Dynamic Programming", "Subtopic: Complexity and Problem-Solving Patterns"],
          },
          {
            id: "swe-dsa-11",
            question: "What is the difference between BFS and DFS?",
            difficulty: "Easy",
            answer: "Breadth-first search explores a graph level by level, typically using a queue, while depth-first search explores one branch deeply before backtracking, typically using recursion or a stack. BFS is useful for shortest unweighted paths; DFS is useful for traversal, cycle checks, and backtracking.",
            tags: ["Software Engineering", "Graphs", "BFS", "DFS", "Subtopic: Trees, Graphs and Advanced Patterns"],
          },
          {
            id: "swe-dsa-12",
            question: "What is a binary search tree and what makes it balanced?",
            difficulty: "Easy",
            answer: "A binary search tree maintains an ordering in which left-subtree keys are smaller and right-subtree keys are larger under the chosen ordering convention. A balanced BST keeps height approximately logarithmic, preserving efficient search, insertion, and deletion.",
            tags: ["Software Engineering", "Trees", "BST", "Subtopic: Trees, Graphs and Advanced Patterns"],
          },
          {
            id: "swe-dsa-13",
            question: "What is a topological sort used for?",
            difficulty: "Medium",
            answer: "Topological sorting orders vertices of a directed acyclic graph so every dependency appears before the node that depends on it. It is useful for build systems, scheduling prerequisites, and dependency resolution.",
            tags: ["Software Engineering", "Graphs", "Topological Sort", "Subtopic: Trees, Graphs and Advanced Patterns"],
          },
          {
            id: "swe-dsa-14",
            question: "What is the purpose of a union-find data structure?",
            difficulty: "Medium",
            answer: "Union-find, or disjoint set union, tracks membership in dynamic connected components. With path compression and union by rank or size, operations are near-constant amortized time and are useful in connectivity and minimum-spanning-tree algorithms.",
            tags: ["Software Engineering", "Graphs", "Disjoint Set", "Subtopic: Trees, Graphs and Advanced Patterns"],
          },
          {
            id: "swe-dsa-15",
            question: "How would you approach an unfamiliar algorithmic interview problem?",
            difficulty: "Easy",
            answer: "First clarify inputs, outputs, constraints, and edge cases. Then derive a simple correct approach, identify bottlenecks, choose suitable data structures or patterns, analyze complexity, and finally test the solution against normal and adversarial cases before optimizing further.",
            tags: ["Software Engineering", "DSA", "Problem Solving", "Subtopic: Trees, Graphs and Advanced Patterns"],
          }
        ]
      },
      {
        id: "api-microservices",
        name: "API Design & Microservices",
        description: "Sub-topics: API contracts and HTTP semantics; service decomposition and communication; resilience, consistency, and operational design.",
        questions: [
          {
            id: "swe-api-1",
            question: "What makes a REST API resource-oriented?",
            difficulty: "Easy",
            answer: "A REST API models business entities as resources identified by stable URIs and uses standard HTTP methods and representations to operate on them. Good resource design separates resource identity from how the server implements the underlying business logic.",
            tags: ["Software Engineering", "API Design", "REST", "Subtopic: API Contracts and HTTP Semantics"],
          },
          {
            id: "swe-api-2",
            question: "What are the most important HTTP methods for REST APIs?",
            difficulty: "Easy",
            answer: "GET is used to retrieve representations, POST commonly creates or triggers processing, PUT replaces a resource representation, PATCH partially updates a resource, and DELETE removes or schedules removal. Their exact use should align with API semantics rather than being chosen arbitrarily.",
            tags: ["Software Engineering", "API Design", "HTTP", "Subtopic: API Contracts and HTTP Semantics"],
          },
          {
            id: "swe-api-3",
            question: "What is the difference between PUT and PATCH?",
            difficulty: "Easy",
            answer: "PUT generally represents replacement of the target resource with the supplied representation and is expected to be idempotent in typical REST usage. PATCH represents a partial modification and may use a patch-specific document format or semantics.",
            tags: ["Software Engineering", "API Design", "HTTP", "Subtopic: API Contracts and HTTP Semantics"],
          },
          {
            id: "swe-api-4",
            question: "Why are HTTP status codes important in API design?",
            difficulty: "Easy",
            answer: "Status codes communicate standardized outcomes such as success, client error, or server error without requiring every client to understand application-specific text. Consistent use improves interoperability, debugging, and client behavior.",
            tags: ["Software Engineering", "API Design", "HTTP", "Subtopic: API Contracts and HTTP Semantics"],
          },
          {
            id: "swe-api-5",
            question: "What is API versioning and what are common strategies?",
            difficulty: "Medium",
            answer: "Versioning manages incompatible contract changes over time so existing clients can continue working. Common approaches include URI versions, custom headers, or media-type negotiation; whichever method is chosen should be documented and supported by a clear deprecation policy.",
            tags: ["Software Engineering", "API Design", "Versioning", "Subtopic: API Contracts and HTTP Semantics"],
          },
          {
            id: "swe-api-6",
            question: "What is the goal of splitting a monolith into microservices?",
            difficulty: "Easy",
            answer: "Microservices split an application into independently deployable services around business capabilities, allowing teams to scale, release, and own parts of the system separately. The trade-off is greater operational and distributed-system complexity.",
            tags: ["Software Engineering", "Microservices", "Subtopic: Service Decomposition and Communication"],
          },
          {
            id: "swe-api-7",
            question: "What is a good boundary for a microservice?",
            difficulty: "Medium",
            answer: "A service boundary should align with a cohesive business capability and minimize unnecessary coupling to other services. Strong boundaries reduce cross-service transactions and let a service evolve without coordinating every change with other teams.",
            tags: ["Software Engineering", "Microservices", "Architecture", "Subtopic: Service Decomposition and Communication"],
          },
          {
            id: "swe-api-8",
            question: "When should synchronous HTTP calls be replaced with asynchronous messaging?",
            difficulty: "Medium",
            answer: "Messaging is useful when work can be decoupled, buffered, retried, or processed later without blocking the caller. It can improve resilience and throughput, but introduces concerns such as eventual consistency, ordering, retries, and duplicate delivery.",
            tags: ["Software Engineering", "Microservices", "Messaging", "Subtopic: Service Decomposition and Communication"],
          },
          {
            id: "swe-api-9",
            question: "What is an API gateway?",
            difficulty: "Easy",
            answer: "An API gateway provides a centralized entry point for external clients and can handle concerns such as routing, authentication, rate limiting, request transformation, and aggregation. It can simplify client interaction but should not become an uncontrolled business-logic bottleneck.",
            tags: ["Software Engineering", "API Gateway", "Subtopic: Service Decomposition and Communication"],
          },
          {
            id: "swe-api-10",
            question: "What is service discovery?",
            difficulty: "Easy",
            answer: "Service discovery lets services find the current network location of other service instances instead of relying on static addresses. It can be implemented through DNS, a registry, or platform-native discovery mechanisms.",
            tags: ["Software Engineering", "Microservices", "Service Discovery", "Subtopic: Service Decomposition and Communication"],
          },
          {
            id: "swe-api-11",
            question: "Why are retries dangerous in distributed systems?",
            difficulty: "Medium",
            answer: "Retries can amplify load and create duplicate side effects when the original request actually succeeded but its response was lost. Safe retry design therefore requires bounded backoff, idempotent operations where possible, and careful classification of retryable failures.",
            tags: ["Software Engineering", "Distributed Systems", "Retries", "Subtopic: Resilience, Consistency and Operations"],
          },
          {
            id: "swe-api-12",
            question: "What is a circuit breaker pattern?",
            difficulty: "Easy",
            answer: "A circuit breaker detects repeated downstream failures and temporarily stops sending requests to the unhealthy dependency. This prevents cascading failures and gives the dependency time to recover before traffic resumes.",
            tags: ["Software Engineering", "Microservices", "Resilience", "Subtopic: Resilience, Consistency and Operations"],
          },
          {
            id: "swe-api-13",
            question: "What is eventual consistency?",
            difficulty: "Easy",
            answer: "Eventual consistency means replicas or services may temporarily disagree after a write, but under appropriate conditions they converge toward the same state. It enables scalable distributed architectures but requires application logic that tolerates temporary staleness.",
            tags: ["Software Engineering", "Distributed Systems", "Consistency", "Subtopic: Resilience, Consistency and Operations"],
          },
          {
            id: "swe-api-14",
            question: "What is a saga pattern?",
            difficulty: "Hard",
            answer: "A saga coordinates a distributed business transaction as a sequence of local transactions with compensating actions. It avoids requiring a single ACID transaction across services while still providing a way to recover from partial failure.",
            tags: ["Software Engineering", "Microservices", "Saga", "Subtopic: Resilience, Consistency and Operations"],
          },
          {
            id: "swe-api-15",
            question: "What should be considered when designing an API for idempotent retries?",
            difficulty: "Medium",
            answer: "Define which operations are idempotent, use stable idempotency keys for operations with side effects, persist deduplication state for the required period, and ensure repeated requests return consistent results rather than creating duplicate business effects.",
            tags: ["Software Engineering", "API Design", "Idempotency", "Subtopic: Resilience, Consistency and Operations"],
          }
        ]
      },
      {
        id: "concurrency-distributed-patterns",
        name: "Concurrency & Distributed Systems Patterns",
        description: "Sub-topics: threads, synchronization, and concurrent execution; distributed coordination and messaging; consistency, failure handling, and system patterns.",
        questions: [
          {
            id: "swe-dist-1",
            question: "What is a race condition?",
            difficulty: "Easy",
            answer: "A race condition occurs when program behavior depends on the timing of concurrent operations accessing shared state. It can produce nondeterministic results when accesses are not properly synchronized or coordinated.",
            tags: ["Software Engineering", "Concurrency", "Subtopic: Concurrency and Synchronization"],
          },
          {
            id: "swe-dist-2",
            question: "What is a mutex and how is it different from a semaphore?",
            difficulty: "Easy",
            answer: "A mutex provides mutual exclusion so one owner at a time can enter a critical section. A semaphore is a counting synchronization primitive that can permit a bounded number of concurrent holders, making it useful for resource pools as well as signaling.",
            tags: ["Software Engineering", "Concurrency", "Mutex", "Semaphore", "Subtopic: Concurrency and Synchronization"],
          },
          {
            id: "swe-dist-3",
            question: "What is deadlock in concurrent programming?",
            difficulty: "Easy",
            answer: "A deadlock occurs when threads or processes wait indefinitely for resources held by one another. Avoidance strategies include preventing circular wait, reducing lock scope, enforcing lock ordering, and using timeouts where appropriate.",
            tags: ["Software Engineering", "Concurrency", "Subtopic: Concurrency and Synchronization"],
          },
          {
            id: "swe-dist-4",
            question: "What is the difference between concurrency and parallelism?",
            difficulty: "Easy",
            answer: "Concurrency means multiple tasks can make progress during overlapping periods, while parallelism means tasks literally execute simultaneously on multiple processing resources. A single-threaded event loop can be concurrent without performing parallel CPU execution.",
            tags: ["Software Engineering", "Concurrency", "Subtopic: Concurrency and Synchronization"],
          },
          {
            id: "swe-dist-5",
            question: "Why can lock-free or wait-free algorithms be useful?",
            difficulty: "Medium",
            answer: "They reduce dependence on traditional blocking locks and can improve progress guarantees under contention. They are difficult to implement correctly, so they should be used when the performance or liveness benefit justifies the added complexity.",
            tags: ["Software Engineering", "Concurrency", "Lock-Free", "Subtopic: Concurrency and Synchronization"],
          },
          {
            id: "swe-dist-6",
            question: "What is leader election in distributed systems?",
            difficulty: "Medium",
            answer: "Leader election selects one process or node to coordinate a role such as scheduling or writes. Protocols must handle failures and split-brain scenarios so two nodes do not incorrectly believe they are both the leader.",
            tags: ["Software Engineering", "Distributed Systems", "Leader Election", "Subtopic: Distributed Coordination and Messaging"],
          },
          {
            id: "swe-dist-7",
            question: "What is a message broker and why is it useful?",
            difficulty: "Easy",
            answer: "A message broker mediates communication between producers and consumers, providing buffering, routing, and often durability or retry capabilities. It decouples services so producers do not need direct knowledge of consumer availability.",
            tags: ["Software Engineering", "Distributed Systems", "Messaging", "Subtopic: Distributed Coordination and Messaging"],
          },
          {
            id: "swe-dist-8",
            question: "What is the difference between at-most-once, at-least-once, and exactly-once delivery?",
            difficulty: "Hard",
            answer: "At-most-once may lose messages but avoids duplicates. At-least-once retries until acknowledged but can deliver duplicates. Exactly-once is difficult to guarantee end-to-end in distributed systems and usually depends on carefully scoped transactional or idempotent processing semantics.",
            tags: ["Software Engineering", "Distributed Systems", "Delivery Semantics", "Subtopic: Distributed Coordination and Messaging"],
          },
          {
            id: "swe-dist-9",
            question: "What is backpressure?",
            difficulty: "Medium",
            answer: "Backpressure is a mechanism for preventing producers from overwhelming slower consumers. A system may limit concurrency, buffer within bounds, slow producers, or reject work so latency and memory usage remain manageable.",
            tags: ["Software Engineering", "Distributed Systems", "Backpressure", "Subtopic: Distributed Coordination and Messaging"],
          },
          {
            id: "swe-dist-10",
            question: "What is the publish-subscribe pattern?",
            difficulty: "Easy",
            answer: "Publish-subscribe lets producers publish events to a topic while multiple independent consumers subscribe to receive them. It supports loose coupling and fan-out without requiring publishers to know each subscriber directly.",
            tags: ["Software Engineering", "Distributed Systems", "PubSub", "Subtopic: Distributed Coordination and Messaging"],
          },
          {
            id: "swe-dist-11",
            question: "What does the CAP theorem say?",
            difficulty: "Hard",
            answer: "CAP states that in the presence of a network partition, a distributed data system cannot simultaneously guarantee both strong consistency and availability for every operation. Partition tolerance is treated as necessary for distributed systems, so the practical trade-off is often between consistency and availability during partitions.",
            tags: ["Software Engineering", "Distributed Systems", "CAP", "Subtopic: Consistency and Failure Handling"],
          },
          {
            id: "swe-dist-12",
            question: "What is a quorum in a distributed database?",
            difficulty: "Medium",
            answer: "A quorum is a minimum number of replicas that must participate in an operation. With appropriate read and write quorum sizes, systems can balance consistency, availability, and fault tolerance while ensuring enough replica overlap for certain guarantees.",
            tags: ["Software Engineering", "Distributed Systems", "Quorum", "Subtopic: Consistency and Failure Handling"],
          },
          {
            id: "swe-dist-13",
            question: "What is a timeout budget and why is it important?",
            difficulty: "Medium",
            answer: "A timeout budget limits how long a request is allowed to consume resources across a call chain. Propagating deadlines prevents a slow dependency from holding threads, connections, or queues indefinitely and helps maintain predictable system behavior.",
            tags: ["Software Engineering", "Distributed Systems", "Timeouts", "Subtopic: Consistency and Failure Handling"],
          },
          {
            id: "swe-dist-14",
            question: "What is the bulkhead pattern?",
            difficulty: "Medium",
            answer: "The bulkhead pattern isolates resources so failure or overload in one workload does not exhaust resources needed by others. Separate connection pools, queues, or thread pools can prevent a localized dependency issue from becoming a system-wide outage.",
            tags: ["Software Engineering", "Resilience", "Bulkhead", "Subtopic: Consistency and Failure Handling"],
          },
          {
            id: "swe-dist-15",
            question: "Why are idempotency and deterministic state transitions important in distributed workflows?",
            difficulty: "Medium",
            answer: "Distributed operations are frequently retried or delivered more than once. Idempotent and deterministic handlers let systems safely reprocess messages, recover from partial failures, and converge on the intended state without duplicating side effects.",
            tags: ["Software Engineering", "Distributed Systems", "Idempotency", "Subtopic: Consistency and Failure Handling"],
          }
        ]
      }
    ]
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    tag: 'AI/ML',
    topics: [
      {
        id: 'ml-fundamentals',
        name: 'Machine Learning Fundamentals',
        description: 'Core ML theory spanning learning paradigms, model evaluation, optimization, and modern deep learning architectures.',
        questions: [
          {
            id: 'ml-1',
            question: 'What is the difference between Supervised and Unsupervised Learning?',
            difficulty: 'Easy',
            answer: 'Supervised learning trains a model on labeled data, where each input is paired with a known correct output, so the model learns to map inputs to outputs (e.g., classification, regression). Unsupervised learning works on unlabeled data and tries to discover hidden patterns or structure on its own, such as grouping similar data points (clustering) or reducing dimensionality, without any predefined correct answer to learn from.',
            tags: ['AI/ML', 'Fundamentals', 'Supervised Learning']
          },
          {
            id: 'ml-2',
            question: 'Explain the Bias-Variance tradeoff.',
            difficulty: 'Medium',
            answer: 'Bias is the error introduced by approximating a real-world problem with an overly simplistic model, causing it to underfit and miss relevant patterns. Variance is the error introduced by a model being overly sensitive to fluctuations in the training data, causing it to overfit and fail to generalize to new data. The tradeoff is that reducing one typically increases the other, so the goal is to find a model complexity that minimizes total error on unseen data.',
            tags: ['AI/ML', 'Model Evaluation', 'Bias-Variance']
          },
          {
            id: 'ml-3',
            question: 'What is Overfitting and what are common techniques to prevent it?',
            difficulty: 'Medium',
            answer: 'Overfitting occurs when a model learns the training data too well, including its noise and outliers, resulting in excellent training performance but poor generalization to new, unseen data. Common prevention techniques include regularization (L1/L2 penalties), dropout in neural networks, gathering more training data, early stopping based on validation loss, and cross-validation to reliably estimate generalization performance.',
            tags: ['AI/ML', 'Overfitting', 'Regularization']
          },
          {
            id: 'ml-4',
            question: 'What is Gradient Descent and how does it work?',
            difficulty: 'Medium',
            answer: 'Gradient Descent is an iterative optimization algorithm used to minimize a model\'s loss function by repeatedly adjusting its parameters in the direction opposite to the gradient (the direction of steepest ascent) of the loss with respect to those parameters. The size of each step is controlled by the learning rate; too large a rate can overshoot the minimum, while too small a rate makes convergence very slow.',
            tags: ['AI/ML', 'Optimization', 'Gradient Descent'],
            codeSnippet: `# Simplified gradient descent update rule
for epoch in range(epochs):
    predictions = model.forward(X)
    loss = loss_fn(predictions, y)
    gradients = compute_gradients(loss, model.parameters)
    model.parameters -= learning_rate * gradients`
          },
          {
            id: 'ml-5',
            question: 'What is the difference between Precision and Recall, and when would you optimize for one over the other?',
            difficulty: 'Medium',
            answer: 'Precision measures the proportion of positive predictions that were actually correct (minimizing false positives), while Recall measures the proportion of actual positives that were correctly identified (minimizing false negatives). You would optimize for Precision in scenarios where false positives are costly, like spam filtering flagging real emails as spam, and optimize for Recall where false negatives are costly, such as disease detection where missing a true case is dangerous.',
            tags: ['AI/ML', 'Model Evaluation', 'Precision-Recall']
          },
          {
            id: 'ml-6',
            question: 'What is the core architectural difference between a CNN and an RNN?',
            difficulty: 'Hard',
            answer: 'A Convolutional Neural Network (CNN) uses learnable filters that slide across spatial data (like images) to detect local patterns such as edges and textures, making it well suited for spatial data with grid-like structure. A Recurrent Neural Network (RNN) maintains a hidden state that is updated at each time step, allowing it to process sequential data by remembering information from previous steps, making it suited for sequences like text or time series, though vanilla RNNs struggle with long-range dependencies compared to LSTMs or Transformers.',
            tags: ['AI/ML', 'Deep Learning', 'CNN/RNN']
          },
          {
            id: 'ml-7',
            question: 'What is the "Attention Mechanism" in Transformer models, at a high level?',
            difficulty: 'Hard',
            answer: 'The attention mechanism allows a model to dynamically weigh the importance of different tokens in a sequence relative to each other when producing a representation for a given token, rather than processing the sequence strictly in order like an RNN. Self-attention computes a weighted sum of all tokens\' values, where the weights (attention scores) are derived from how relevant each token is to the current one, which allows Transformers to capture long-range dependencies efficiently and in parallel.',
            tags: ['AI/ML', 'Transformers', 'Attention Mechanism']
          },
          {
            id: 'ml-8',
            question: 'What is Hyperparameter Tuning and what are common strategies for it?',
            difficulty: 'Medium',
            answer: 'Hyperparameters are configuration values set before training (like learning rate, batch size, or number of layers) that are not learned from the data itself, and Hyperparameter Tuning is the process of searching for the combination that yields the best model performance. Common strategies include Grid Search (exhaustively trying every combination in a defined range), Random Search (sampling combinations randomly, often more efficient), and Bayesian Optimization (using past results to intelligently choose the next combination to try).',
            tags: ['AI/ML', 'Hyperparameter Tuning', 'Model Optimization']
          },
          {
            id: 'ml-9',
            question: 'What is Transfer Learning and why is it useful?',
            difficulty: 'Medium',
            answer: 'Transfer Learning is the technique of taking a model pre-trained on a large, general dataset (like ImageNet for vision or a large text corpus for language) and fine-tuning it on a smaller, task-specific dataset, rather than training a model from scratch. It is useful because it dramatically reduces the amount of labeled data and compute needed for a new task, since the pre-trained model has already learned general, reusable features.',
            tags: ['AI/ML', 'Transfer Learning', 'Deep Learning']
          }
        ]
      },
      {
        id: "deep-learning-neural-architectures",
        name: "Deep Learning & Neural Network Architectures",
        description: "Sub-topics: neural-network fundamentals and optimization; CNN/RNN/Transformer architectures; regularization and representation learning.",
        questions: [
          {
            id: "ml-dl-1",
            question: "What is the role of an activation function in a neural network?",
            difficulty: "Easy",
            answer: "Activation functions introduce nonlinearity so stacked layers can represent complex functions. Without nonlinear activations, multiple linear layers collapse into a single linear transformation.",
            tags: ["AI/ML", "Deep Learning", "Subtopic: Neural Network Fundamentals and Optimization"],
          },
          {
            id: "ml-dl-2",
            question: "Why is ReLU widely used in deep networks?",
            difficulty: "Easy",
            answer: "ReLU outputs zero for negative inputs and the input itself for positive values. It is computationally simple and usually reduces the severe gradient saturation seen with sigmoid or tanh in deep hidden layers.",
            tags: ["AI/ML", "Deep Learning", "ReLU", "Subtopic: Neural Network Fundamentals and Optimization"],
          },
          {
            id: "ml-dl-3",
            question: "What is backpropagation?",
            difficulty: "Easy",
            answer: "Backpropagation computes gradients of the loss with respect to trainable parameters by applying the chain rule through the network. An optimizer then uses those gradients to update the parameters.",
            tags: ["AI/ML", "Deep Learning", "Backpropagation", "Subtopic: Neural Network Fundamentals and Optimization"],
          },
          {
            id: "ml-dl-4",
            question: "Why can vanishing gradients make deep networks hard to train?",
            difficulty: "Medium",
            answer: "In repeated chain-rule multiplications, gradients can become extremely small as they move toward earlier layers. Very small gradients cause slow learning or nearly frozen early representations, particularly in some recurrent or saturating networks.",
            tags: ["AI/ML", "Deep Learning", "Optimization", "Subtopic: Neural Network Fundamentals and Optimization"],
          },
          {
            id: "ml-dl-5",
            question: "What is the difference between Adam and plain SGD?",
            difficulty: "Medium",
            answer: "SGD updates parameters using a learning-rate-scaled gradient, while Adam maintains running estimates of first and second moments of gradients to adapt the effective step size per parameter. Adam often converges quickly, whereas SGD can still perform very well with careful tuning.",
            tags: ["AI/ML", "Deep Learning", "Optimizers", "Subtopic: Neural Network Fundamentals and Optimization"],
          },
          {
            id: "ml-dl-6",
            question: "Why are convolutional layers effective for images?",
            difficulty: "Easy",
            answer: "Convolutional layers use local receptive fields and shared kernels, which exploit spatial locality and reduce parameter count compared with fully connected layers. Deeper layers can combine local patterns into increasingly complex visual features.",
            tags: ["AI/ML", "Deep Learning", "CNN", "Subtopic: CNN, RNN and Transformer Architectures"],
          },
          {
            id: "ml-dl-7",
            question: "What is pooling in a CNN?",
            difficulty: "Easy",
            answer: "Pooling down-samples feature maps to reduce spatial resolution and computation while retaining salient information. It can also make representations somewhat less sensitive to small spatial shifts.",
            tags: ["AI/ML", "Deep Learning", "CNN", "Subtopic: CNN, RNN and Transformer Architectures"],
          },
          {
            id: "ml-dl-8",
            question: "Why are LSTMs easier to train on long sequences than vanilla RNNs?",
            difficulty: "Medium",
            answer: "LSTMs use gated state updates and a dedicated cell state that provide a more controlled path for gradient flow. This helps preserve information over longer time spans and reduces some vanishing-gradient problems of basic RNNs.",
            tags: ["AI/ML", "Deep Learning", "LSTM", "RNN", "Subtopic: CNN, RNN and Transformer Architectures"],
          },
          {
            id: "ml-dl-9",
            question: "Why did Transformers largely replace recurrent architectures for many NLP workloads?",
            difficulty: "Medium",
            answer: "Transformers use self-attention to model relationships across a sequence while enabling much more parallel computation during training than strictly sequential recurrent processing. This scaling advantage made large pretraining practical.",
            tags: ["AI/ML", "Transformers", "Subtopic: CNN, RNN and Transformer Architectures"],
          },
          {
            id: "ml-dl-10",
            question: "What is multi-head attention?",
            difficulty: "Medium",
            answer: "Multi-head attention computes several attention operations in parallel using different learned projections. Each head can focus on different relationships or patterns, and their outputs are combined into a richer representation.",
            tags: ["AI/ML", "Transformers", "Attention", "Subtopic: CNN, RNN and Transformer Architectures"],
          },
          {
            id: "ml-dl-11",
            question: "What is dropout and why does it help generalization?",
            difficulty: "Easy",
            answer: "Dropout randomly masks a subset of activations during training, forcing the network not to rely too heavily on any single pathway. This acts as a form of regularization and can reduce overfitting.",
            tags: ["AI/ML", "Deep Learning", "Dropout", "Subtopic: Regularization and Representation Learning"],
          },
          {
            id: "ml-dl-12",
            question: "What is batch normalization used for?",
            difficulty: "Medium",
            answer: "Batch normalization normalizes intermediate activations using batch statistics during training and learned scale/shift parameters. It can stabilize optimization and often permits faster training, though its behavior differs between training and inference.",
            tags: ["AI/ML", "Deep Learning", "BatchNorm", "Subtopic: Regularization and Representation Learning"],
          },
          {
            id: "ml-dl-13",
            question: "What is residual learning and why do ResNets help train deep networks?",
            difficulty: "Medium",
            answer: "Residual blocks learn a transformation that is added to a shortcut connection. The shortcut provides a direct information and gradient path, making optimization of very deep networks easier than forcing every layer to learn a complete transformation.",
            tags: ["AI/ML", "Deep Learning", "ResNet", "Subtopic: Regularization and Representation Learning"],
          },
          {
            id: "ml-dl-14",
            question: "What is an embedding in deep learning?",
            difficulty: "Easy",
            answer: "An embedding is a learned dense vector representation in which semantically or structurally related items tend to occupy nearby regions of vector space. Embeddings are widely used for words, users, products, images, and other entities.",
            tags: ["AI/ML", "Embeddings", "Representation Learning", "Subtopic: Regularization and Representation Learning"],
          },
          {
            id: "ml-dl-15",
            question: "What is fine-tuning a neural network?",
            difficulty: "Easy",
            answer: "Fine-tuning starts from pretrained model parameters and updates some or all of them on a task-specific dataset. It usually requires less data and computation than training the architecture from scratch.",
            tags: ["AI/ML", "Deep Learning", "Fine-Tuning", "Subtopic: Regularization and Representation Learning"],
          }
        ]
      },
      {
        id: "nlp-llms",
        name: "NLP & LLMs",
        description: "Sub-topics: NLP preprocessing and representations; transformer language-model concepts; prompting, retrieval, and LLM evaluation.",
        questions: [
          {
            id: "ml-nlp-1",
            question: "What is tokenization in NLP?",
            difficulty: "Easy",
            answer: "Tokenization converts text into discrete units that a model processes, such as words, subwords, or characters. Modern LLMs commonly use subword tokenization to handle rare words and open vocabulary efficiently.",
            tags: ["AI/ML", "NLP", "Subtopic: NLP Preprocessing and Representations"],
          },
          {
            id: "ml-nlp-2",
            question: "Why do modern LLMs commonly use subword tokens instead of whole words?",
            difficulty: "Easy",
            answer: "Subword tokenization balances vocabulary size and coverage. Common words can be represented efficiently while rare or unseen words can be decomposed into reusable pieces rather than requiring a unique token for every possible word.",
            tags: ["AI/ML", "NLP", "Tokenization", "Subtopic: NLP Preprocessing and Representations"],
          },
          {
            id: "ml-nlp-3",
            question: "What is stemming and how does it differ from lemmatization?",
            difficulty: "Easy",
            answer: "Stemming applies heuristic rules to reduce words to rough roots, often producing forms that are not valid words. Lemmatization uses linguistic knowledge to map a word to its canonical lemma and is usually more precise but more computationally involved.",
            tags: ["AI/ML", "NLP", "Preprocessing", "Subtopic: NLP Preprocessing and Representations"],
          },
          {
            id: "ml-nlp-4",
            question: "What is TF-IDF and where is it useful?",
            difficulty: "Easy",
            answer: "TF-IDF scores a term based on how often it appears in a document while down-weighting terms that occur in many documents. It remains useful for interpretable sparse text features and lightweight information-retrieval baselines.",
            tags: ["AI/ML", "NLP", "TF-IDF", "Subtopic: NLP Preprocessing and Representations"],
          },
          {
            id: "ml-nlp-5",
            question: "Why are word or sentence embeddings useful in NLP?",
            difficulty: "Easy",
            answer: "Embeddings map textual units to dense vectors that capture statistical relationships learned from data. They allow models to compare semantic similarity and use continuous representations instead of treating each token as unrelated to every other token.",
            tags: ["AI/ML", "NLP", "Embeddings", "Subtopic: NLP Preprocessing and Representations"],
          },
          {
            id: "ml-nlp-6",
            question: "What is next-token prediction in an autoregressive language model?",
            difficulty: "Easy",
            answer: "The model estimates the probability distribution of the next token conditioned on preceding tokens. Training minimizes the negative log-likelihood or cross-entropy of the observed next token across many sequences.",
            tags: ["AI/ML", "LLM", "Language Modeling", "Subtopic: Transformer Language Models"],
          },
          {
            id: "ml-nlp-7",
            question: "What is the difference between encoder-only and decoder-only Transformers?",
            difficulty: "Medium",
            answer: "Encoder-only models are designed to build contextual representations from surrounding input and are common for classification or extraction. Decoder-only models generate tokens autoregressively and are the dominant architecture for many general-purpose chat and completion LLMs.",
            tags: ["AI/ML", "Transformers", "Subtopic: Transformer Language Models"],
          },
          {
            id: "ml-nlp-8",
            question: "Why is positional information needed in Transformers?",
            difficulty: "Easy",
            answer: "Self-attention alone does not inherently preserve the sequence order of tokens. Positional encodings or learned positional representations inject information about token positions so the model can distinguish different orders of the same elements.",
            tags: ["AI/ML", "Transformers", "Position Encoding", "Subtopic: Transformer Language Models"],
          },
          {
            id: "ml-nlp-9",
            question: "What is the context window of an LLM?",
            difficulty: "Easy",
            answer: "The context window is the amount of tokenized input and relevant generated context the model can consider in a single invocation under its configured limit. Larger windows allow longer documents or conversations but can increase memory and compute requirements.",
            tags: ["AI/ML", "LLM", "Context Window", "Subtopic: Transformer Language Models"],
          },
          {
            id: "ml-nlp-10",
            question: "What causes hallucinations in LLMs?",
            difficulty: "Easy",
            answer: "LLMs optimize for predicting plausible token sequences rather than guaranteeing factual truth. Weak grounding, ambiguous prompts, missing knowledge, and generation uncertainty can therefore produce fluent but incorrect statements.",
            tags: ["AI/ML", "LLM", "Hallucination", "Subtopic: Transformer Language Models"],
          },
          {
            id: "ml-nlp-11",
            question: "What is Retrieval-Augmented Generation (RAG)?",
            difficulty: "Easy",
            answer: "RAG retrieves relevant external documents or passages at inference time and includes them in the model context before generation. It can ground responses in current or private information without requiring the base model to memorize every source.",
            tags: ["AI/ML", "LLM", "RAG", "Subtopic: Prompting, Retrieval and Evaluation"],
          },
          {
            id: "ml-nlp-12",
            question: "Why does chunking matter in a RAG system?",
            difficulty: "Medium",
            answer: "Documents must be split into retrievable units that are small enough to fit efficiently into context but large enough to preserve semantic meaning. Poor chunk boundaries can hurt retrieval relevance or make the generated answer lack necessary context.",
            tags: ["AI/ML", "RAG", "Information Retrieval", "Subtopic: Prompting, Retrieval and Evaluation"],
          },
          {
            id: "ml-nlp-13",
            question: "What is prompt engineering?",
            difficulty: "Easy",
            answer: "Prompt engineering is the deliberate design of instructions, context, examples, constraints, and output formats to make model behavior more reliable for a task. Good prompts reduce ambiguity and make desired behavior easier to evaluate.",
            tags: ["AI/ML", "LLM", "Prompting", "Subtopic: Prompting, Retrieval and Evaluation"],
          },
          {
            id: "ml-nlp-14",
            question: "How can temperature affect text generation?",
            difficulty: "Easy",
            answer: "Temperature changes the sharpness of the token probability distribution during sampling. Lower values make generation more deterministic and conservative, while higher values increase diversity and can also increase the chance of less predictable outputs.",
            tags: ["AI/ML", "LLM", "Generation", "Subtopic: Prompting, Retrieval and Evaluation"],
          },
          {
            id: "ml-nlp-15",
            question: "How should an LLM application be evaluated beyond text similarity?",
            difficulty: "Medium",
            answer: "Evaluation can combine task success, factuality, relevance, safety, latency, cost, and human preference with automated tests. For grounded systems, it is also important to check retrieval quality and whether generated claims are actually supported by retrieved evidence.",
            tags: ["AI/ML", "LLM", "Evaluation", "Subtopic: Prompting, Retrieval and Evaluation"],
          }
        ]
      },
      {
        id: "mlops-model-deployment",
        name: "MLOps & Model Deployment",
        description: "Sub-topics: experiment and model lifecycle; serving and deployment patterns; monitoring, reproducibility, and governance.",
        questions: [
          {
            id: "ml-mlops-1",
            question: "What is MLOps?",
            difficulty: "Easy",
            answer: "MLOps applies software-engineering, automation, and operational practices to the machine-learning lifecycle, covering data, training, validation, deployment, monitoring, and retraining. Its goal is reliable and repeatable delivery of ML systems.",
            tags: ["AI/ML", "MLOps", "Subtopic: Lifecycle and Experiment Management"],
          },
          {
            id: "ml-mlops-2",
            question: "What is experiment tracking and why is it important?",
            difficulty: "Easy",
            answer: "Experiment tracking records configurations, code versions, datasets, metrics, and model artifacts so results can be reproduced and compared. Without it, teams quickly lose the ability to explain why one model performed differently from another.",
            tags: ["AI/ML", "MLOps", "Experiment Tracking", "Subtopic: Lifecycle and Experiment Management"],
          },
          {
            id: "ml-mlops-3",
            question: "What is a model registry?",
            difficulty: "Easy",
            answer: "A model registry stores versioned model artifacts plus metadata, evaluation results, and lifecycle status. It provides a controlled bridge between experimentation and deployment.",
            tags: ["AI/ML", "MLOps", "Model Registry", "Subtopic: Lifecycle and Experiment Management"],
          },
          {
            id: "ml-mlops-4",
            question: "Why is dataset versioning important for ML reproducibility?",
            difficulty: "Medium",
            answer: "Training a model depends on the exact data distribution and preprocessing rules used. Versioning datasets or immutable dataset snapshots lets teams reproduce results and trace which data produced a particular model version.",
            tags: ["AI/ML", "MLOps", "Data Versioning", "Subtopic: Lifecycle and Experiment Management"],
          },
          {
            id: "ml-mlops-5",
            question: "What is a training pipeline?",
            difficulty: "Easy",
            answer: "A training pipeline automates repeatable stages such as data ingestion, validation, preprocessing, training, evaluation, and artifact registration. Pipeline automation reduces manual variation and makes retraining safer and faster.",
            tags: ["AI/ML", "MLOps", "Training Pipeline", "Subtopic: Lifecycle and Experiment Management"],
          },
          {
            id: "ml-mlops-6",
            question: "What is online model serving?",
            difficulty: "Easy",
            answer: "Online serving exposes a trained model through a low-latency interface, commonly an HTTP or gRPC endpoint, so applications can request predictions in real time.",
            tags: ["AI/ML", "Model Serving", "Subtopic: Deployment and Serving Patterns"],
          },
          {
            id: "ml-mlops-7",
            question: "What is batch inference and when is it preferable?",
            difficulty: "Easy",
            answer: "Batch inference generates predictions for many records on a schedule or in bulk. It is preferable when low per-request latency is unnecessary and processing can be optimized for throughput and cost.",
            tags: ["AI/ML", "Inference", "Subtopic: Deployment and Serving Patterns"],
          },
          {
            id: "ml-mlops-8",
            question: "What is a canary deployment for ML models?",
            difficulty: "Medium",
            answer: "A canary rollout exposes a small portion of live traffic to a new model version while monitoring business and technical metrics. If the candidate model performs poorly, traffic can be rolled back before full deployment.",
            tags: ["AI/ML", "Model Deployment", "Canary", "Subtopic: Deployment and Serving Patterns"],
          },
          {
            id: "ml-mlops-9",
            question: "What is model shadowing?",
            difficulty: "Medium",
            answer: "Shadow deployment sends copies of production inputs to a candidate model while keeping the candidate's outputs out of the user-facing path. It enables realistic comparison without affecting customer decisions.",
            tags: ["AI/ML", "Model Deployment", "Shadowing", "Subtopic: Deployment and Serving Patterns"],
          },
          {
            id: "ml-mlops-10",
            question: "Why are feature preprocessing steps important at serving time?",
            difficulty: "Medium",
            answer: "Training and inference must apply compatible feature definitions and transformations. A mismatch causes training-serving skew, where a model sees input distributions during production that differ from those it was trained to handle.",
            tags: ["AI/ML", "MLOps", "Feature Engineering", "Subtopic: Deployment and Serving Patterns"],
          },
          {
            id: "ml-mlops-11",
            question: "What is data drift?",
            difficulty: "Easy",
            answer: "Data drift is a change in the statistical distribution of input features between training and production or over time. It can indicate that the environment has changed and that model performance may degrade.",
            tags: ["AI/ML", "Monitoring", "Drift", "Subtopic: Monitoring, Reproducibility and Governance"],
          },
          {
            id: "ml-mlops-12",
            question: "What is concept drift?",
            difficulty: "Medium",
            answer: "Concept drift occurs when the relationship between inputs and the target changes over time, even if the input distribution itself may remain similar. It can cause model accuracy to decline because learned relationships no longer match reality.",
            tags: ["AI/ML", "Monitoring", "Concept Drift", "Subtopic: Monitoring, Reproducibility and Governance"],
          },
          {
            id: "ml-mlops-13",
            question: "Which production metrics should be monitored for an ML service?",
            difficulty: "Easy",
            answer: "Monitor technical metrics such as latency, throughput, error rate, resource use, and cost, plus ML metrics such as input drift, prediction distribution, calibration, or delayed ground-truth performance when labels become available.",
            tags: ["AI/ML", "MLOps", "Monitoring", "Subtopic: Monitoring, Reproducibility and Governance"],
          },
          {
            id: "ml-mlops-14",
            question: "What is a reproducible ML pipeline?",
            difficulty: "Easy",
            answer: "A reproducible pipeline fixes or records versions for code, data, dependencies, configuration, random seeds where appropriate, and model artifacts so another run can recreate or closely reproduce the same result.",
            tags: ["AI/ML", "MLOps", "Reproducibility", "Subtopic: Monitoring, Reproducibility and Governance"],
          },
          {
            id: "ml-mlops-15",
            question: "Why are model governance and auditability important in production AI?",
            difficulty: "Medium",
            answer: "Production models can influence business, financial, or safety-sensitive outcomes, so teams need traceability for training data, model versions, approvals, evaluations, and deployed changes. Governance supports accountability, rollback, risk management, and compliance.",
            tags: ["AI/ML", "MLOps", "Governance", "Subtopic: Monitoring, Reproducibility and Governance"],
          }
        ]
      }
    ]
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    tag: 'CLOUD',
    topics: [
      {
        id: 'cloud-architecture-services',
        name: 'Cloud Architecture & Services',
        description: 'Cloud service models, elasticity, storage architecture, networking, and cost optimization strategies.',
        questions: [
          {
            id: 'cloud-1',
            question: 'What is the difference between IaaS, PaaS, and SaaS?',
            difficulty: 'Easy',
            answer: 'Infrastructure as a Service (IaaS) provides raw virtualized compute, storage, and networking, giving the most control but requiring the customer to manage the OS and runtime (e.g., AWS EC2). Platform as a Service (PaaS) abstracts away infrastructure management and provides a managed runtime environment for deploying applications (e.g., Heroku, AWS Elastic Beanstalk). Software as a Service (SaaS) delivers a fully managed, ready-to-use application over the internet, with the provider handling everything (e.g., Gmail, Salesforce).',
            tags: ['Cloud Computing', 'Fundamentals', 'IaaS/PaaS/SaaS']
          },
          {
            id: 'cloud-2',
            question: 'What is Serverless Computing and what are its key trade-offs?',
            difficulty: 'Medium',
            answer: 'Serverless computing (e.g., AWS Lambda, Azure Functions) lets developers deploy individual functions that automatically scale and are billed only for actual execution time, with the cloud provider fully managing the underlying servers. The key trade-offs are eliminating server management and enabling automatic scaling to zero, at the cost of "cold start" latency for infrequently invoked functions, execution time limits, and potential vendor lock-in due to provider-specific runtime constraints.',
            tags: ['Cloud Computing', 'Serverless', 'AWS Lambda']
          },
          {
            id: 'cloud-3',
            question: 'What is the difference between an Availability Zone and a Region in cloud architecture?',
            difficulty: 'Easy',
            answer: 'A Region is a distinct geographic area (e.g., us-east-1) containing multiple isolated data centers. An Availability Zone (AZ) is one or more discrete, physically separate data centers within a Region, each with independent power, cooling, and networking. Distributing resources across multiple AZs within a region provides high availability and fault tolerance against a single data center outage, while multi-region deployment protects against a broader regional disaster.',
            tags: ['Cloud Computing', 'Architecture', 'High Availability']
          },
          {
            id: 'cloud-4',
            question: 'What is auto-scaling and what metrics commonly trigger it?',
            difficulty: 'Medium',
            answer: 'Auto-scaling automatically adjusts the number of running compute instances in response to real-time demand, adding instances during traffic spikes and removing them during lulls to balance performance and cost. Common triggering metrics include CPU utilization, memory usage, request count per target, and custom application-level metrics (like queue depth), configured with defined thresholds and cooldown periods to avoid rapid oscillation ("flapping").',
            tags: ['Cloud Computing', 'Auto-Scaling', 'Elasticity']
          },
          {
            id: 'cloud-5',
            question: 'What is a Virtual Private Cloud (VPC) and why is it important?',
            difficulty: 'Medium',
            answer: 'A Virtual Private Cloud is a logically isolated section of a public cloud provider\'s network where you can launch resources within a virtual network you define, including custom IP address ranges, subnets, route tables, and gateways. It is important because it lets organizations control network isolation, segment public-facing resources from private backend systems, and enforce granular security group and network ACL rules, closely mimicking a traditional on-premises data center network.',
            tags: ['Cloud Computing', 'Networking', 'VPC']
          },
          {
            id: 'cloud-6',
            question: 'What is the difference between Object Storage, Block Storage, and File Storage?',
            difficulty: 'Medium',
            answer: 'Object Storage (e.g., AWS S3) stores data as discrete objects with metadata, accessed via an API, and is ideal for unstructured data like images, backups, and static assets at massive scale. Block Storage (e.g., AWS EBS) presents raw storage volumes that behave like a physical hard disk, ideal for databases and applications needing low-latency, high-performance I/O. File Storage (e.g., AWS EFS) provides a shared, hierarchical file system accessible over standard protocols like NFS, suited for applications needing concurrent shared access.',
            tags: ['Cloud Computing', 'Storage', 'Architecture']
          },
          {
            id: 'cloud-7',
            question: 'What is a Content Delivery Network (CDN) and how does it improve performance?',
            difficulty: 'Easy',
            answer: 'A CDN is a geographically distributed network of proxy servers (edge locations) that cache content closer to end users. When a user requests content, it is served from the nearest edge location rather than the origin server, significantly reducing latency, offloading traffic from the origin, and improving resilience against traffic spikes or origin outages.',
            tags: ['Cloud Computing', 'CDN', 'Performance']
          },
          {
            id: 'cloud-8',
            question: 'What strategies can be used to optimize cloud cost without sacrificing performance?',
            difficulty: 'Medium',
            answer: 'Common cost optimization strategies include right-sizing instances to match actual workload needs, using Reserved Instances or Savings Plans for predictable steady-state workloads, leveraging Spot Instances for fault-tolerant batch jobs at a steep discount, implementing auto-scaling to avoid paying for idle over-provisioned capacity, and setting up cost monitoring and alerting to catch anomalies or unused resources like orphaned volumes early.',
            tags: ['Cloud Computing', 'Cost Optimization', 'FinOps']
          }
        ]
      },
      {
        id: "aws-core-services",
        name: "AWS Core Services",
        description: "Sub-topics: compute and application services; storage and databases; identity, monitoring, and operational fundamentals.",
        questions: [
          {
            id: "cloud-aws-1",
            question: "What is Amazon EC2?",
            difficulty: "Easy",
            answer: "Amazon EC2 provides resizable virtual compute capacity where customers choose instance families, networking, storage, and operating environments. It is appropriate when applications require control over the runtime or operating system.",
            tags: ["Cloud Computing", "AWS", "EC2", "Subtopic: Compute and Application Services"],
          },
          {
            id: "cloud-aws-2",
            question: "What is AWS Lambda?",
            difficulty: "Easy",
            answer: "Lambda is a managed serverless compute service that runs functions in response to events. The platform handles provisioning and scaling while billing is based on invocation and execution characteristics rather than continuously running instances.",
            tags: ["Cloud Computing", "AWS", "Lambda", "Subtopic: Compute and Application Services"],
          },
          {
            id: "cloud-aws-3",
            question: "What is Amazon ECS and how does it differ conceptually from EKS?",
            difficulty: "Medium",
            answer: "ECS is AWS's managed container orchestration service with AWS-native task and service abstractions. EKS provides managed Kubernetes control-plane infrastructure, making it appropriate when a team wants the Kubernetes API and ecosystem.",
            tags: ["Cloud Computing", "AWS", "ECS", "EKS", "Subtopic: Compute and Application Services"],
          },
          {
            id: "cloud-aws-4",
            question: "What is Elastic Load Balancing used for?",
            difficulty: "Easy",
            answer: "Elastic Load Balancing distributes incoming traffic across healthy targets such as EC2 instances, containers, or IP addresses. It improves availability and lets applications scale horizontally without exposing clients to individual instance addresses.",
            tags: ["Cloud Computing", "AWS", "ELB", "Subtopic: Compute and Application Services"],
          },
          {
            id: "cloud-aws-5",
            question: "What is Auto Scaling in AWS?",
            difficulty: "Easy",
            answer: "AWS Auto Scaling adjusts the number of application resources according to demand or policy. It helps maintain performance during spikes and reduces cost when demand falls.",
            tags: ["Cloud Computing", "AWS", "Auto Scaling", "Subtopic: Compute and Application Services"],
          },
          {
            id: "cloud-aws-6",
            question: "What is Amazon S3 and what are its core concepts?",
            difficulty: "Easy",
            answer: "S3 is object storage built around buckets and objects identified by keys. It is designed for high durability and large-scale storage of data such as backups, media, logs, and static assets.",
            tags: ["Cloud Computing", "AWS", "S3", "Subtopic: Storage and Databases"],
          },
          {
            id: "cloud-aws-7",
            question: "What is EBS and how is it different from S3?",
            difficulty: "Easy",
            answer: "EBS provides block volumes attached to compute instances and behaves more like a disk for operating systems and databases. S3 is object storage accessed through APIs and is better suited to unstructured objects and large-scale storage rather than block-level I/O.",
            tags: ["Cloud Computing", "AWS", "EBS", "S3", "Subtopic: Storage and Databases"],
          },
          {
            id: "cloud-aws-8",
            question: "What is Amazon RDS?",
            difficulty: "Easy",
            answer: "Amazon RDS is a managed relational database service that automates many operational tasks such as provisioning, backups, patching, and certain forms of high availability for supported relational engines.",
            tags: ["Cloud Computing", "AWS", "RDS", "Subtopic: Storage and Databases"],
          },
          {
            id: "cloud-aws-9",
            question: "What is DynamoDB?",
            difficulty: "Easy",
            answer: "DynamoDB is a managed NoSQL database based primarily on key-value and document data models. It is designed for predictable low-latency access at large scale without requiring traditional relational joins.",
            tags: ["Cloud Computing", "AWS", "DynamoDB", "Subtopic: Storage and Databases"],
          },
          {
            id: "cloud-aws-10",
            question: "When would you choose S3 over EFS?",
            difficulty: "Medium",
            answer: "S3 is suited to object-based data and massive scalable storage, while EFS provides a shared hierarchical filesystem that multiple compute instances can mount concurrently over NFS. The choice depends on whether the application needs object semantics or a filesystem interface.",
            tags: ["Cloud Computing", "AWS", "S3", "EFS", "Subtopic: Storage and Databases"],
          },
          {
            id: "cloud-aws-11",
            question: "What is AWS IAM?",
            difficulty: "Easy",
            answer: "IAM controls identities, roles, policies, and permissions for AWS resources. It is central to least-privilege access and should be combined with short-lived credentials, strong authentication, and regular permission review.",
            tags: ["Cloud Computing", "AWS", "IAM", "Subtopic: Identity, Monitoring and Operations"],
          },
          {
            id: "cloud-aws-12",
            question: "What is Amazon CloudWatch?",
            difficulty: "Easy",
            answer: "CloudWatch collects metrics, logs, events, and related operational signals from AWS resources and applications. Teams use it for dashboards, alerting, troubleshooting, and automated responses.",
            tags: ["Cloud Computing", "AWS", "CloudWatch", "Subtopic: Identity, Monitoring and Operations"],
          },
          {
            id: "cloud-aws-13",
            question: "What is the purpose of CloudTrail?",
            difficulty: "Easy",
            answer: "CloudTrail records AWS API activity and management events, helping organizations investigate who performed an action, what API call occurred, and when it happened. It is important for auditability and security investigations.",
            tags: ["Cloud Computing", "AWS", "CloudTrail", "Subtopic: Identity, Monitoring and Operations"],
          },
          {
            id: "cloud-aws-14",
            question: "What is AWS KMS?",
            difficulty: "Medium",
            answer: "AWS Key Management Service provides managed cryptographic keys and APIs for encryption and decryption operations. Other AWS services can integrate with KMS so data can be protected with centrally governed key policies and audit logs.",
            tags: ["Cloud Computing", "AWS", "KMS", "Subtopic: Identity, Monitoring and Operations"],
          },
          {
            id: "cloud-aws-15",
            question: "What is the AWS shared responsibility model?",
            difficulty: "Easy",
            answer: "AWS is responsible for security of the underlying cloud infrastructure, while customers are responsible for security in the cloud according to the service used. Customer responsibilities can include identities, data, operating-system configuration, network rules, and application security.",
            tags: ["Cloud Computing", "AWS", "Shared Responsibility", "Subtopic: Identity, Monitoring and Operations"],
          }
        ]
      },
      {
        id: "cloud-networking-security",
        name: "Cloud Networking & Security",
        description: "Sub-topics: virtual network architecture; network controls and connectivity; cloud identity, encryption, and defense-in-depth.",
        questions: [
          {
            id: "cloud-netsec-1",
            question: "What is a subnet in a cloud VPC?",
            difficulty: "Easy",
            answer: "A subnet is an IP address range within a virtual network where resources are placed. Cloud architectures often separate public-facing and private workloads into different subnets with distinct routing controls.",
            tags: ["Cloud Computing", "Networking", "VPC", "Subtopic: Virtual Network Architecture"],
          },
          {
            id: "cloud-netsec-2",
            question: "What makes a subnet 'public' in a typical cloud design?",
            difficulty: "Easy",
            answer: "A subnet is commonly considered public when its route table provides a path through an internet gateway or equivalent and its resources can use public addressing as required. The label itself is architectural rather than a built-in security property.",
            tags: ["Cloud Computing", "Networking", "Public Subnet", "Subtopic: Virtual Network Architecture"],
          },
          {
            id: "cloud-netsec-3",
            question: "Why should databases usually be placed in private subnets?",
            difficulty: "Easy",
            answer: "Databases generally do not need direct internet reachability. Keeping them private reduces exposure and forces access through controlled application layers, security groups, proxies, or other approved network paths.",
            tags: ["Cloud Computing", "Security", "Subtopic: Virtual Network Architecture"],
          },
          {
            id: "cloud-netsec-4",
            question: "What is a route table in a cloud network?",
            difficulty: "Easy",
            answer: "A route table contains rules that determine where packets destined for specific IP ranges should be sent, such as to a local subnet, gateway, firewall, or peering connection.",
            tags: ["Cloud Computing", "Networking", "Routing", "Subtopic: Virtual Network Architecture"],
          },
          {
            id: "cloud-netsec-5",
            question: "What is VPC peering or private network connectivity used for?",
            difficulty: "Medium",
            answer: "Private connectivity mechanisms let networks communicate without exposing traffic to the public internet. They are useful for sharing services or linking application environments while retaining network-level isolation and controlled routing.",
            tags: ["Cloud Computing", "Networking", "VPC Peering", "Subtopic: Virtual Network Architecture"],
          },
          {
            id: "cloud-netsec-6",
            question: "What is the difference between a security group and a network ACL in AWS?",
            difficulty: "Easy",
            answer: "A security group is a stateful, instance- or interface-level virtual firewall, while a network ACL is a stateless subnet-level filter. Security groups are typically the primary fine-grained control, while ACLs can provide an additional coarse-grained boundary.",
            tags: ["Cloud Computing", "AWS", "Security Group", "NACL", "Subtopic: Network Controls and Connectivity"],
          },
          {
            id: "cloud-netsec-7",
            question: "Why are security groups stateful?",
            difficulty: "Easy",
            answer: "A stateful firewall remembers connection context so return traffic for an allowed connection is automatically permitted without requiring a separate reverse rule. This simplifies many application network policies.",
            tags: ["Cloud Computing", "Networking", "Firewall", "Subtopic: Network Controls and Connectivity"],
          },
          {
            id: "cloud-netsec-8",
            question: "What is a bastion host and what are its drawbacks?",
            difficulty: "Medium",
            answer: "A bastion host is a controlled administrative entry point into otherwise private infrastructure. It can centralize access logging and restrictions, but it also creates a high-value target and can become unnecessary when stronger identity-aware or managed access mechanisms are available.",
            tags: ["Cloud Computing", "Bastion", "Security", "Subtopic: Network Controls and Connectivity"],
          },
          {
            id: "cloud-netsec-9",
            question: "What is a WAF and what attacks can it help mitigate?",
            difficulty: "Easy",
            answer: "A Web Application Firewall inspects HTTP(S) requests and can block patterns associated with threats such as SQL injection, malicious bots, or some forms of cross-site scripting. It complements rather than replaces secure application code.",
            tags: ["Cloud Computing", "WAF", "Subtopic: Network Controls and Connectivity"],
          },
          {
            id: "cloud-netsec-10",
            question: "How can private connectivity to managed cloud services improve security?",
            difficulty: "Medium",
            answer: "Private endpoints or equivalent constructs keep service traffic on private network paths instead of requiring public internet routing. They can reduce exposure and allow tighter network and policy controls.",
            tags: ["Cloud Computing", "Networking", "Private Endpoint", "Subtopic: Network Controls and Connectivity"],
          },
          {
            id: "cloud-netsec-11",
            question: "Why is least privilege important in cloud IAM?",
            difficulty: "Easy",
            answer: "Cloud identities can often access many services and resources, so broad permissions increase blast radius when credentials are compromised or misused. Least privilege limits actions and resource scope to what is actually required.",
            tags: ["Cloud Computing", "IAM", "Security", "Subtopic: Cloud Identity, Encryption and Defense-in-Depth"],
          },
          {
            id: "cloud-netsec-12",
            question: "What is encryption at rest in cloud environments?",
            difficulty: "Easy",
            answer: "Encryption at rest protects stored data on services such as disks, databases, object stores, and backups. Managed key services often provide centralized key lifecycle, policy, and audit controls.",
            tags: ["Cloud Computing", "Encryption", "Subtopic: Cloud Identity, Encryption and Defense-in-Depth"],
          },
          {
            id: "cloud-netsec-13",
            question: "Why should TLS be used for service-to-service traffic inside a cloud?",
            difficulty: "Medium",
            answer: "Private network placement does not automatically eliminate interception or credential misuse risk. TLS protects confidentiality and integrity in transit and can also support workload or service identity through certificate-based authentication.",
            tags: ["Cloud Computing", "TLS", "Security", "Subtopic: Cloud Identity, Encryption and Defense-in-Depth"],
          },
          {
            id: "cloud-netsec-14",
            question: "What is defense in depth in cloud security?",
            difficulty: "Easy",
            answer: "Defense in depth uses multiple independent or partially independent controls across identity, network, compute, application, data, and monitoring layers. If one control fails, others still limit attacker movement or impact.",
            tags: ["Cloud Computing", "Security", "Defense in Depth", "Subtopic: Cloud Identity, Encryption and Defense-in-Depth"],
          },
          {
            id: "cloud-netsec-15",
            question: "What cloud security signals should be continuously monitored?",
            difficulty: "Medium",
            answer: "Monitor authentication anomalies, privilege changes, public exposure, suspicious network flows, configuration drift, data-access anomalies, control-plane activity, and resource changes. Security telemetry should be correlated with application and infrastructure logs for effective investigation.",
            tags: ["Cloud Computing", "Cloud Security", "Monitoring", "Subtopic: Cloud Identity, Encryption and Defense-in-Depth"],
          }
        ]
      },
      {
        id: "cloud-native-data-messaging",
        name: "Cloud-Native Data & Messaging",
        description: "Sub-topics: managed databases and storage patterns; queues and event streaming; consistency, scalability, and event-driven architectures.",
        questions: [
          {
            id: "cloud-data-1",
            question: "What is the difference between a queue and a publish-subscribe topic?",
            difficulty: "Easy",
            answer: "A queue usually distributes work so each message is processed by one consumer or consumer group, while a topic supports fan-out so multiple independent subscribers can receive the same event. The choice depends on whether the event represents work or shared information.",
            tags: ["Cloud Computing", "Messaging", "Subtopic: Databases and Storage Patterns"],
          },
          {
            id: "cloud-data-2",
            question: "What is a managed database and what operational work does it abstract?",
            difficulty: "Easy",
            answer: "A managed database shifts responsibilities such as provisioning, patching, backups, monitoring, and certain high-availability tasks to the provider. Customers still remain responsible for schema design, access controls, data quality, and application behavior.",
            tags: ["Cloud Computing", "Databases", "Subtopic: Databases and Storage Patterns"],
          },
          {
            id: "cloud-data-3",
            question: "When would a document database be preferred over a relational database?",
            difficulty: "Easy",
            answer: "A document database can fit workloads with flexible, nested records and access patterns that map naturally to documents rather than joins. Relational databases remain preferable when strong relational constraints, joins, and complex transactional semantics are central.",
            tags: ["Cloud Computing", "NoSQL", "Databases", "Subtopic: Databases and Storage Patterns"],
          },
          {
            id: "cloud-data-4",
            question: "What is read-after-write consistency?",
            difficulty: "Medium",
            answer: "Read-after-write consistency means a client that successfully writes a value can subsequently read that same value immediately under the relevant consistency scope. It is stronger than systems where reads may temporarily return older versions.",
            tags: ["Cloud Computing", "Consistency", "Subtopic: Databases and Storage Patterns"],
          },
          {
            id: "cloud-data-5",
            question: "What is the purpose of a cache in a cloud application?",
            difficulty: "Easy",
            answer: "A cache stores frequently accessed data closer to consumers so repeated reads avoid expensive database or downstream operations. It can reduce latency and load but introduces invalidation and staleness concerns.",
            tags: ["Cloud Computing", "Caching", "Subtopic: Databases and Storage Patterns"],
          },
          {
            id: "cloud-data-6",
            question: "What is a message queue used for in a cloud-native architecture?",
            difficulty: "Easy",
            answer: "A queue decouples producers from consumers, buffers bursts, and enables asynchronous processing. It also supports retries and failure isolation when designed with dead-letter handling and idempotent consumers.",
            tags: ["Cloud Computing", "Queues", "Subtopic: Queues and Event Streaming"],
          },
          {
            id: "cloud-data-7",
            question: "What is event streaming?",
            difficulty: "Easy",
            answer: "Event streaming continuously records ordered events and lets consumers process them in near real time or replay them later. It is suited to analytics, integration, and event-driven systems where retaining an event history is valuable.",
            tags: ["Cloud Computing", "Event Streaming", "Subtopic: Queues and Event Streaming"],
          },
          {
            id: "cloud-data-8",
            question: "What is consumer lag in an event-streaming system?",
            difficulty: "Easy",
            answer: "Consumer lag measures how far a consumer is behind the latest available events. Persistently high lag can indicate insufficient consumer capacity, slow processing, downstream bottlenecks, or operational problems.",
            tags: ["Cloud Computing", "Messaging", "Monitoring", "Subtopic: Queues and Event Streaming"],
          },
          {
            id: "cloud-data-9",
            question: "Why are dead-letter queues useful?",
            difficulty: "Easy",
            answer: "A dead-letter queue captures messages that cannot be processed successfully after the configured retry policy. It prevents poison messages from blocking normal work while preserving the failed payload for investigation or later replay.",
            tags: ["Cloud Computing", "Messaging", "DLQ", "Subtopic: Queues and Event Streaming"],
          },
          {
            id: "cloud-data-10",
            question: "What does idempotent message processing mean?",
            difficulty: "Easy",
            answer: "An idempotent consumer produces the same intended business result when it receives the same message more than once. This is important because many distributed messaging systems provide at-least-once delivery.",
            tags: ["Cloud Computing", "Messaging", "Idempotency", "Subtopic: Queues and Event Streaming"],
          },
          {
            id: "cloud-data-11",
            question: "What is event-driven architecture?",
            difficulty: "Easy",
            answer: "Event-driven architecture uses emitted events to communicate that something happened, allowing other components to react asynchronously. It promotes loose coupling but requires careful handling of eventual consistency, ordering, and observability.",
            tags: ["Cloud Computing", "Event Driven", "Subtopic: Consistency, Scalability and Event-Driven Architecture"],
          },
          {
            id: "cloud-data-12",
            question: "What is a partition key in a distributed data store?",
            difficulty: "Medium",
            answer: "A partition key determines how records are distributed across partitions or shards. A good key balances data and traffic while still supporting important query patterns; a poor key can create hot partitions.",
            tags: ["Cloud Computing", "Distributed Databases", "Partition Key", "Subtopic: Consistency, Scalability and Event-Driven Architecture"],
          },
          {
            id: "cloud-data-13",
            question: "What is a hot partition?",
            difficulty: "Medium",
            answer: "A hot partition receives disproportionately high traffic or data compared with other partitions. It can become the bottleneck that limits overall scalability even when the system has spare capacity elsewhere.",
            tags: ["Cloud Computing", "Scalability", "Subtopic: Consistency, Scalability and Event-Driven Architecture"],
          },
          {
            id: "cloud-data-14",
            question: "What is CQRS?",
            difficulty: "Hard",
            answer: "Command Query Responsibility Segregation separates write models used to handle commands from read models optimized for queries. It can improve scalability or domain clarity but adds synchronization and architectural complexity.",
            tags: ["Cloud Computing", "Architecture", "CQRS", "Subtopic: Consistency, Scalability and Event-Driven Architecture"],
          },
          {
            id: "cloud-data-15",
            question: "What is change data capture (CDC)?",
            difficulty: "Medium",
            answer: "CDC captures inserts, updates, and deletes from a source system and publishes them so downstream systems can react or replicate data. It is useful for analytics pipelines, cache updates, search indexing, and service integration.",
            tags: ["Cloud Computing", "Data Engineering", "CDC", "Subtopic: Consistency, Scalability and Event-Driven Architecture"],
          }
        ]
      }
    ]
  },
  {
    id: 'app-security',
    name: 'Application Security',
    tag: 'APP-SEC',
    topics: [
      {
        id: 'web-appsec-owasp',
        name: 'Web & Application Security (OWASP)',
        description: 'Application-layer security covering the OWASP Top 10, authentication, authorization, and secure data handling.',
        questions: [
          {
            id: 'appsec-1',
            question: 'What is Cross-Site Scripting (XSS) and how can it be prevented?',
            difficulty: 'Medium',
            answer: 'XSS is a vulnerability where an attacker injects malicious client-side scripts into a web page viewed by other users, allowing them to steal cookies, session tokens, or perform actions on behalf of the victim. It is prevented by properly encoding/escaping all user-generated output before rendering it in HTML, using Content Security Policy (CSP) headers to restrict script sources, and leveraging frameworks that auto-escape output by default, such as React\'s JSX.',
            tags: ['Security', 'XSS', 'OWASP']
          },
          {
            id: 'appsec-2',
            question: 'What is Cross-Site Request Forgery (CSRF) and how does a CSRF token prevent it?',
            difficulty: 'Medium',
            answer: 'CSRF tricks an authenticated user\'s browser into unknowingly submitting a malicious request to a web application where they are currently logged in, exploiting the fact that cookies are automatically sent with every request to that domain. A CSRF token, a unique unpredictable value tied to the user\'s session and embedded in forms, prevents this because the attacker\'s site cannot know or forge the correct token, so the server rejects requests missing a valid, matching token.',
            tags: ['Security', 'CSRF', 'OWASP']
          },
          {
            id: 'appsec-3',
            question: 'What is SQL Injection and what is the most effective way to prevent it?',
            difficulty: 'Easy',
            answer: 'SQL Injection occurs when untrusted user input is concatenated directly into a SQL query, allowing an attacker to alter the query\'s logic to read, modify, or delete data they should not have access to. The most effective prevention is using parameterized queries (prepared statements), which separate SQL code from data so user input is always treated as a literal value and never as executable SQL, combined with using an ORM and applying least-privilege database permissions.',
            tags: ['Security', 'SQL Injection', 'OWASP'],
            codeSnippet: `// Vulnerable: string concatenation
db.query(\`SELECT * FROM users WHERE id = \${userId}\`);

// Safe: parameterized query
db.query("SELECT * FROM users WHERE id = ?", [userId]);`
          },
          {
            id: 'appsec-4',
            question: 'What is the difference between Authentication and Authorization?',
            difficulty: 'Easy',
            answer: 'Authentication is the process of verifying who a user is, typically through credentials like a password, biometric, or token (answering "who are you?"). Authorization is the process of determining what an authenticated user is allowed to do, checking their permissions against protected resources (answering "what can you access?"). A system must authenticate a user first before it can meaningfully authorize their actions.',
            tags: ['Security', 'Authentication', 'Authorization']
          },
          {
            id: 'appsec-5',
            question: 'What are the security considerations when using JSON Web Tokens (JWT) for authentication?',
            difficulty: 'Hard',
            answer: 'JWTs should always be signed (and ideally use a strong algorithm like RS256 rather than allowing "none") to prevent tampering, and the signature must always be verified server-side rather than trusting the decoded payload blindly. Sensitive data should not be stored in the payload since it is only base64-encoded, not encrypted, and readable by anyone. Tokens should also have short expiration times, be transmitted only over HTTPS, and ideally be stored in httpOnly cookies rather than localStorage to reduce exposure to XSS-based token theft.',
            tags: ['Security', 'JWT', 'Authentication']
          },
          {
            id: 'appsec-6',
            question: 'What is the difference between encryption at rest and encryption in transit?',
            difficulty: 'Easy',
            answer: 'Encryption at rest protects data while it is stored on disk (databases, backups, file storage), typically using algorithms like AES-256, so that even if physical media is stolen the data remains unreadable without the key. Encryption in transit protects data as it moves across a network, typically using TLS/SSL, preventing eavesdroppers from intercepting and reading data while it travels between a client and server. A secure system needs both, since protecting one does not protect the other.',
            tags: ['Security', 'Encryption', 'Data Protection']
          },
          {
            id: 'appsec-7',
            question: 'What is the OWASP Top 10 and why is it significant for developers?',
            difficulty: 'Easy',
            answer: 'The OWASP Top 10 is a regularly updated, industry-standard awareness document listing the ten most critical web application security risks, such as Broken Access Control, Injection, and Cryptographic Failures, based on real-world data. It is significant because it gives development teams a prioritized, widely-recognized checklist to guide secure coding practices, security training, and code review focus, rather than trying to defend against every conceivable threat with no clear priorities.',
            tags: ['Security', 'OWASP', 'Best Practices']
          },
          {
            id: 'appsec-8',
            question: 'What is a security misconfiguration and give an example of one?',
            difficulty: 'Medium',
            answer: 'A security misconfiguration occurs when security settings are not defined, implemented, or maintained correctly, leaving unnecessary attack surface exposed even though no code vulnerability exists. Common examples include leaving default admin credentials unchanged, exposing verbose error messages or stack traces that reveal internal system details to attackers, leaving unnecessary ports or services open, or misconfiguring cloud storage buckets as publicly accessible when they should be private.',
            tags: ['Security', 'Misconfiguration', 'OWASP']
          }
        ]
      },
      {
        id: "secure-sdlc-devsecops",
        name: "Secure SDLC & DevSecOps",
        description: "Sub-topics: security requirements and design; automated security testing in CI/CD; vulnerability management and secure release practices.",
        questions: [
          {
            id: "appsec-sdlc-1",
            question: "What is a Secure SDLC?",
            difficulty: "Easy",
            answer: "A Secure Software Development Life Cycle integrates security activities across requirements, design, implementation, testing, deployment, and maintenance rather than treating security as a final gate. It aims to prevent vulnerabilities early and reduce remediation cost.",
            tags: ["Application Security", "Secure SDLC", "Subtopic: Security Requirements and Design"],
          },
          {
            id: "appsec-sdlc-2",
            question: "What is a security requirement?",
            difficulty: "Easy",
            answer: "A security requirement is a testable statement of protection the system must provide, such as mandatory MFA, encryption, tenant isolation, audit logging, or session timeout behavior. Good requirements are specific enough to validate.",
            tags: ["Application Security", "Secure SDLC", "Subtopic: Security Requirements and Design"],
          },
          {
            id: "appsec-sdlc-3",
            question: "Why should threat modeling happen during design?",
            difficulty: "Easy",
            answer: "Design-time threat modeling exposes trust boundaries, attack paths, and risky assumptions before implementation makes them expensive to change. Early mitigation often prevents entire classes of vulnerabilities rather than fixing individual defects later.",
            tags: ["Application Security", "Threat Modeling", "Subtopic: Security Requirements and Design"],
          },
          {
            id: "appsec-sdlc-4",
            question: "What is security by design?",
            difficulty: "Easy",
            answer: "Security by design means architectural decisions explicitly account for confidentiality, integrity, availability, identity, abuse cases, and failure modes from the beginning. Security is therefore part of system design rather than an add-on control.",
            tags: ["Application Security", "Secure Design", "Subtopic: Security Requirements and Design"],
          },
          {
            id: "appsec-sdlc-5",
            question: "What is abuse-case analysis?",
            difficulty: "Medium",
            answer: "Abuse-case analysis models how a malicious or unauthorized actor could misuse system features. It complements functional requirements by turning attacker behavior into concrete security scenarios and test cases.",
            tags: ["Application Security", "Threat Modeling", "Subtopic: Security Requirements and Design"],
          },
          {
            id: "appsec-sdlc-6",
            question: "What is SAST?",
            difficulty: "Easy",
            answer: "Static Application Security Testing analyzes source code, bytecode, or binaries without executing the application to detect patterns associated with vulnerabilities. It is commonly integrated early in CI pipelines.",
            tags: ["Application Security", "SAST", "Subtopic: Automated Security Testing"],
          },
          {
            id: "appsec-sdlc-7",
            question: "What is DAST?",
            difficulty: "Easy",
            answer: "Dynamic Application Security Testing evaluates a running application by interacting with it externally. It can identify runtime issues and misconfigurations that may not be visible through source-only analysis.",
            tags: ["Application Security", "DAST", "Subtopic: Automated Security Testing"],
          },
          {
            id: "appsec-sdlc-8",
            question: "What is SCA?",
            difficulty: "Easy",
            answer: "Software Composition Analysis identifies open-source and third-party dependencies, their versions, known vulnerabilities, licenses, and sometimes risky transitive dependencies. It helps teams manage supply-chain exposure.",
            tags: ["Application Security", "SCA", "Supply Chain", "Subtopic: Automated Security Testing"],
          },
          {
            id: "appsec-sdlc-9",
            question: "What is secret scanning?",
            difficulty: "Easy",
            answer: "Secret scanning looks for credentials such as API keys, passwords, and private keys in source repositories, commits, build artifacts, or other locations. Detection should be paired with immediate rotation and prevention controls.",
            tags: ["Application Security", "Secret Scanning", "Subtopic: Automated Security Testing"],
          },
          {
            id: "appsec-sdlc-10",
            question: "Why should security checks be layered rather than relying on one scanner?",
            difficulty: "Medium",
            answer: "Different techniques find different defect classes and have different false-positive and false-negative profiles. Combining code analysis, dependency scanning, dynamic tests, infrastructure checks, and runtime controls gives broader coverage.",
            tags: ["Application Security", "DevSecOps", "Subtopic: Automated Security Testing"],
          },
          {
            id: "appsec-sdlc-11",
            question: "What is a vulnerability exception and when is it acceptable?",
            difficulty: "Medium",
            answer: "An exception formally documents why a known risk is not being fixed immediately, including scope, compensating controls, owner, and expiration or review date. Exceptions should be temporary and risk-based rather than a way to permanently bypass security.",
            tags: ["Application Security", "Vulnerability Management", "Subtopic: Vulnerability Management and Secure Release"],
          },
          {
            id: "appsec-sdlc-12",
            question: "What is a software bill of materials (SBOM)?",
            difficulty: "Easy",
            answer: "An SBOM inventories the components and dependencies included in a software product. It improves supply-chain visibility and can speed up impact analysis when a vulnerable library or package is disclosed.",
            tags: ["Application Security", "SBOM", "Subtopic: Vulnerability Management and Secure Release"],
          },
          {
            id: "appsec-sdlc-13",
            question: "What is the difference between a security gate and a security check?",
            difficulty: "Medium",
            answer: "A security check produces a finding, while a security gate determines whether the finding is severe enough to block promotion or release. Gates should be risk-based to avoid either blocking harmless changes or allowing critical vulnerabilities into production.",
            tags: ["Application Security", "DevSecOps", "Subtopic: Vulnerability Management and Secure Release"],
          },
          {
            id: "appsec-sdlc-14",
            question: "Why should dependencies be pinned or otherwise controlled in production builds?",
            difficulty: "Easy",
            answer: "Uncontrolled dependency ranges can change without an application code change and introduce unexpected behavior or vulnerabilities. Lockfiles, checksums, approved registries, and reproducible builds make the supply chain more predictable.",
            tags: ["Application Security", "Supply Chain", "Subtopic: Vulnerability Management and Secure Release"],
          },
          {
            id: "appsec-sdlc-15",
            question: "What is DevSecOps?",
            difficulty: "Easy",
            answer: "DevSecOps integrates security practices, ownership, and automation into DevOps workflows so security feedback reaches developers quickly and continuously. It emphasizes shared responsibility, policy as code, and security controls throughout the delivery pipeline.",
            tags: ["Application Security", "DevSecOps", "Subtopic: Vulnerability Management and Secure Release"],
          }
        ]
      },
      {
        id: "crypto-implementation-flaws",
        name: "Cryptographic Implementation Flaws",
        description: "Sub-topics: insecure algorithm and mode selection; key, nonce, and randomness failures; protocol and implementation pitfalls.",
        questions: [
          {
            id: "appsec-crypto-1",
            question: "Why is using a weak or obsolete cipher dangerous even when it is encrypted?",
            difficulty: "Easy",
            answer: "Encryption only provides strong confidentiality when the chosen primitive, mode, key size, and implementation remain secure. Obsolete algorithms or inadequate key sizes may be vulnerable to practical attacks that make encrypted data recoverable.",
            tags: ["Application Security", "Cryptography", "Subtopic: Algorithm and Mode Selection"],
          },
          {
            id: "appsec-crypto-2",
            question: "Why should ECB mode generally be avoided for encrypting structured data?",
            difficulty: "Easy",
            answer: "ECB encrypts each block independently, so identical plaintext blocks produce identical ciphertext blocks. Repeated patterns therefore remain visible and can reveal structure even though the underlying block cipher is strong.",
            tags: ["Application Security", "Cryptography", "ECB", "Subtopic: Algorithm and Mode Selection"],
          },
          {
            id: "appsec-crypto-3",
            question: "What is authenticated encryption and why is it preferred?",
            difficulty: "Easy",
            answer: "Authenticated encryption provides confidentiality and integrity together, so a receiver can detect tampering as well as recover plaintext. Modes such as AES-GCM and ChaCha20-Poly1305 are common authenticated-encryption constructions.",
            tags: ["Application Security", "Cryptography", "AEAD", "Subtopic: Algorithm and Mode Selection"],
          },
          {
            id: "appsec-crypto-4",
            question: "What problem does key separation solve?",
            difficulty: "Medium",
            answer: "Key separation uses distinct keys for different purposes instead of reusing one key across unrelated operations. It limits the impact of a compromise and avoids unintended interactions between protocols or cryptographic constructions.",
            tags: ["Application Security", "Cryptography", "Key Separation", "Subtopic: Algorithm and Mode Selection"],
          },
          {
            id: "appsec-crypto-5",
            question: "Why should developers use vetted cryptographic libraries instead of implementing algorithms themselves?",
            difficulty: "Easy",
            answer: "Cryptography is difficult to implement safely because subtle errors in padding, randomness, memory handling, protocol state, or side-channel resistance can invalidate mathematically sound algorithms. Mature libraries provide tested primitives and safer APIs.",
            tags: ["Application Security", "Cryptography", "Secure Libraries", "Subtopic: Algorithm and Mode Selection"],
          },
          {
            id: "appsec-crypto-6",
            question: "What can happen if an AES-GCM nonce is reused with the same key?",
            difficulty: "Hard",
            answer: "Nonce reuse can expose relationships between plaintexts and can also break the integrity guarantees of GCM. A robust implementation must guarantee nonce uniqueness for every encryption under the same key.",
            tags: ["Application Security", "Cryptography", "Nonce Reuse", "Subtopic: Key, Nonce and Randomness Failures"],
          },
          {
            id: "appsec-crypto-7",
            question: "Why is predictable randomness a security vulnerability?",
            difficulty: "Easy",
            answer: "Security-sensitive values such as keys, session secrets, password-reset tokens, and nonces must be unpredictable or unique as required. Predictable random values can let attackers guess future secrets or reconstruct prior values.",
            tags: ["Application Security", "Cryptography", "Randomness", "Subtopic: Key, Nonce and Randomness Failures"],
          },
          {
            id: "appsec-crypto-8",
            question: "What is a salt in password hashing?",
            difficulty: "Easy",
            answer: "A salt is a unique random value combined with each password before hashing. It prevents identical passwords from producing the same stored hash and defeats the usefulness of precomputed rainbow-table attacks.",
            tags: ["Application Security", "Password Hashing", "Salt", "Subtopic: Key, Nonce and Randomness Failures"],
          },
          {
            id: "appsec-crypto-9",
            question: "Why should cryptographic keys have a lifecycle?",
            difficulty: "Easy",
            answer: "Keys need controlled generation, storage, rotation, suspension, backup, and destruction. Lifecycle management limits exposure when a key is compromised or reaches its intended cryptoperiod and supports operational recovery.",
            tags: ["Application Security", "Key Management", "Subtopic: Key, Nonce and Randomness Failures"],
          },
          {
            id: "appsec-crypto-10",
            question: "What is key hard-coding and why is it risky?",
            difficulty: "Easy",
            answer: "Hard-coding a secret in source code makes the secret easy to leak through repositories, build artifacts, logs, binaries, or developer access. Secrets should instead be injected from protected secret-management systems with appropriate rotation and access controls.",
            tags: ["Application Security", "Secrets", "Subtopic: Key, Nonce and Randomness Failures"],
          },
          {
            id: "appsec-crypto-11",
            question: "What is a padding oracle attack?",
            difficulty: "Hard",
            answer: "A padding oracle attack exploits a system that reveals whether decrypted ciphertext has valid padding. By observing this side channel over repeated requests, an attacker can recover plaintext or manipulate ciphertext without directly knowing the key.",
            tags: ["Application Security", "Cryptography", "Padding Oracle", "Subtopic: Protocol and Implementation Pitfalls"],
          },
          {
            id: "appsec-crypto-12",
            question: "What is a timing side channel?",
            difficulty: "Medium",
            answer: "A timing side channel occurs when secret-dependent operations take measurably different amounts of time. Attackers can sometimes use repeated measurements to infer information about keys or secret values, so constant-time techniques are important for sensitive operations.",
            tags: ["Application Security", "Side Channels", "Subtopic: Protocol and Implementation Pitfalls"],
          },
          {
            id: "appsec-crypto-13",
            question: "Why is certificate hostname validation important in TLS clients?",
            difficulty: "Easy",
            answer: "A trusted certificate chain alone does not prove that the certificate belongs to the intended server. Hostname validation binds the certificate identity to the requested destination and helps prevent man-in-the-middle attacks using a different valid certificate.",
            tags: ["Application Security", "TLS", "Certificate Validation", "Subtopic: Protocol and Implementation Pitfalls"],
          },
          {
            id: "appsec-crypto-14",
            question: "Why is disabling TLS certificate verification a serious flaw?",
            difficulty: "Easy",
            answer: "It removes a core authentication guarantee of TLS. An attacker who can intercept traffic may then impersonate the server while the connection still appears encrypted to the application.",
            tags: ["Application Security", "TLS", "Misconfiguration", "Subtopic: Protocol and Implementation Pitfalls"],
          },
          {
            id: "appsec-crypto-15",
            question: "What is a downgrade attack in a cryptographic protocol?",
            difficulty: "Medium",
            answer: "A downgrade attack tricks two parties into negotiating weaker protocol versions, algorithms, or parameters than they both support. Secure protocol design prevents unsupported fallbacks and authenticates the negotiation where appropriate.",
            tags: ["Application Security", "Cryptography", "Downgrade", "Subtopic: Protocol and Implementation Pitfalls"],
          }
        ]
      },
      {
        id: "api-cloud-security",
        name: "API & Cloud Security",
        description: "Sub-topics: API authentication and authorization; API abuse protection and data security; cloud-native application and service security.",
        questions: [
          {
            id: "appsec-apicloud-1",
            question: "Why should APIs enforce authorization on every sensitive resource operation?",
            difficulty: "Easy",
            answer: "A client being authenticated only proves identity; it does not prove that the caller may access a specific resource. Authorization must be evaluated against the requested object and action to prevent broken object-level authorization.",
            tags: ["Application Security", "API Security", "Subtopic: API Authentication and Authorization"],
          },
          {
            id: "appsec-apicloud-2",
            question: "What is broken object-level authorization (BOLA)?",
            difficulty: "Medium",
            answer: "BOLA occurs when an API exposes an object identifier and fails to verify whether the requesting principal is allowed to access that particular object. Simply changing an ID can then expose another user's data.",
            tags: ["Application Security", "API Security", "BOLA", "Subtopic: API Authentication and Authorization"],
          },
          {
            id: "appsec-apicloud-3",
            question: "What is the difference between API keys, OAuth access tokens, and session cookies?",
            difficulty: "Medium",
            answer: "API keys are commonly application credentials with coarse identity semantics. OAuth access tokens represent delegated authorization with defined scopes and lifetimes. Session cookies typically identify a user's authenticated browser session and rely on server-side session state or token semantics.",
            tags: ["Application Security", "API Security", "OAuth", "Subtopic: API Authentication and Authorization"],
          },
          {
            id: "appsec-apicloud-4",
            question: "Why should API tokens have narrow scopes and short lifetimes?",
            difficulty: "Easy",
            answer: "Narrow scopes reduce what a stolen token can do, while short lifetimes reduce the time available for abuse. This limits blast radius and makes credential rotation and incident response safer.",
            tags: ["Application Security", "API Security", "Least Privilege", "Subtopic: API Authentication and Authorization"],
          },
          {
            id: "appsec-apicloud-5",
            question: "What is mutual TLS (mTLS) and where is it useful?",
            difficulty: "Medium",
            answer: "mTLS authenticates both the server and client using certificates. It is useful for service-to-service communication or controlled partner integrations where workload identity and strong transport authentication are important.",
            tags: ["Application Security", "API Security", "mTLS", "Subtopic: API Authentication and Authorization"],
          },
          {
            id: "appsec-apicloud-6",
            question: "Why is rate limiting important for APIs?",
            difficulty: "Easy",
            answer: "Rate limiting controls how frequently a caller can make requests. It helps protect against brute force, resource exhaustion, accidental overload, scraping, and some forms of automated abuse.",
            tags: ["Application Security", "API Security", "Rate Limiting", "Subtopic: API Abuse Protection and Data Security"],
          },
          {
            id: "appsec-apicloud-7",
            question: "What is request validation and why should it happen server-side?",
            difficulty: "Easy",
            answer: "Server-side validation checks that incoming parameters, types, lengths, formats, and business constraints are acceptable before processing. Client-side validation improves user experience but cannot be trusted because attackers can send requests directly.",
            tags: ["Application Security", "API Security", "Validation", "Subtopic: API Abuse Protection and Data Security"],
          },
          {
            id: "appsec-apicloud-8",
            question: "Why should APIs avoid returning excessive data?",
            difficulty: "Easy",
            answer: "Returning unnecessary fields can expose sensitive information even when the endpoint itself is authorized. Responses should follow data-minimization principles and expose only the fields required by the caller and use case.",
            tags: ["Application Security", "API Security", "Data Exposure", "Subtopic: API Abuse Protection and Data Security"],
          },
          {
            id: "appsec-apicloud-9",
            question: "What is SSRF and why is it especially important in cloud environments?",
            difficulty: "Medium",
            answer: "Server-Side Request Forgery tricks an application into making attacker-chosen outbound requests. In cloud environments this can be dangerous because metadata services, internal APIs, or private network endpoints may expose credentials or sensitive information.",
            tags: ["Application Security", "SSRF", "Cloud Security", "Subtopic: API Abuse Protection and Data Security"],
          },
          {
            id: "appsec-apicloud-10",
            question: "How can API security logging help detect abuse?",
            difficulty: "Medium",
            answer: "Record authentication outcomes, authorization failures, unusual request rates, sensitive operation access, and relevant request identifiers while avoiding secret data. Correlating these events makes account takeover, scraping, and enumeration easier to detect.",
            tags: ["Application Security", "API Security", "Logging", "Subtopic: API Abuse Protection and Data Security"],
          },
          {
            id: "appsec-apicloud-11",
            question: "What is a workload identity in cloud-native systems?",
            difficulty: "Easy",
            answer: "Workload identity lets an application or service obtain credentials representing the workload itself rather than relying on long-lived embedded secrets. This supports short-lived, identity-based access to cloud resources.",
            tags: ["Application Security", "Cloud Security", "Workload Identity", "Subtopic: Cloud-Native Application Security"],
          },
          {
            id: "appsec-apicloud-12",
            question: "Why should cloud storage buckets and blobs default to private?",
            difficulty: "Easy",
            answer: "Most application data does not need anonymous public access. Private-by-default storage limits accidental exposure and forces teams to grant only the intended principals and access paths.",
            tags: ["Application Security", "Cloud Security", "Storage Security", "Subtopic: Cloud-Native Application Security"],
          },
          {
            id: "appsec-apicloud-13",
            question: "What is SSRF defense in cloud-native applications?",
            difficulty: "Hard",
            answer: "Defenses include strict URL allowlists, blocking metadata and loopback or private destinations where not required, resolving and validating destinations carefully, enforcing egress policies, and using cloud controls that require explicit authentication for sensitive metadata access.",
            tags: ["Application Security", "SSRF", "Cloud Security", "Subtopic: Cloud-Native Application Security"],
          },
          {
            id: "appsec-apicloud-14",
            question: "Why should cloud IAM roles be scoped to resources and actions?",
            difficulty: "Easy",
            answer: "A role granting broad permissions creates a large blast radius if a workload is compromised. Resource-level scoping and action-level restrictions let services access only the specific data and APIs they actually require.",
            tags: ["Application Security", "Cloud IAM", "Least Privilege", "Subtopic: Cloud-Native Application Security"],
          },
          {
            id: "appsec-apicloud-15",
            question: "What is defense in depth for a cloud API?",
            difficulty: "Medium",
            answer: "Layer controls so failure of one mechanism does not expose the application: strong identity, least privilege, API validation, rate limits, network restrictions, secure secret handling, encryption, monitoring, and safe application logic should reinforce one another.",
            tags: ["Application Security", "Cloud Security", "Defense in Depth", "Subtopic: Cloud-Native Application Security"],
          }
        ]
      }
    ]
  }
];