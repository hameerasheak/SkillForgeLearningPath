import { TargetJob, LearningTopic, RevisionItem } from '../types';

export const MOCK_TARGET_JOBS: TargetJob[] = [
  {
    id: 'software-developer',
    title: 'Software Developer',
    category: 'Software Engineering',
    iconName: 'Code2',
    tagline: 'Build scalable applications, APIs, and robust software architectures.',
    description: 'Design, write, and maintain production-grade software using object-oriented principles, algorithms, databases, and version control.',
    marketDemandLevel: 'Very High',
    marketMatchScore: 88,
    averageSalary: '$98,500 / yr',
    openingsCount: '48,000+ Active Roles',
    skills: [
      {
        id: 'java',
        name: 'Java',
        category: 'Core Language',
        status: 'Intermediate',
        priority: 'Critical',
        marketDemand: 92,
        description: 'Strongly typed OOP language standard in enterprise backend systems, Spring Boot microservices, and Android.',
        userProficiency: 65,
      },
      {
        id: 'python',
        name: 'Python',
        category: 'Core Language',
        status: 'Beginner',
        priority: 'High',
        marketDemand: 89,
        description: 'High-level language indispensable for scripting, automation, rapid API development, and data manipulation.',
        userProficiency: 40,
      },
      {
        id: 'sql',
        name: 'SQL',
        category: 'Data & Storage',
        status: 'Intermediate',
        priority: 'Critical',
        marketDemand: 95,
        description: 'Relational database queries, indexing, schema normalization, and data persistence for application backends.',
        userProficiency: 60,
      },
      {
        id: 'data-structures',
        name: 'Data Structures & Algorithms',
        category: 'CS Fundamentals',
        status: 'Required',
        priority: 'Critical',
        marketDemand: 98,
        description: 'Arrays, Hash Tables, Trees, Graphs, and algorithmic complexity (Big-O) essential for tech technical interviews.',
        userProficiency: 50,
      },
      {
        id: 'git',
        name: 'Git & GitHub',
        category: 'DevOps & Tools',
        status: 'Intermediate',
        priority: 'Critical',
        marketDemand: 94,
        description: 'Version control, branching workflows (Gitflow), pull requests, and multi-developer collaborative coding.',
        userProficiency: 70,
      },
      {
        id: 'problem-solving',
        name: 'Problem Solving & System Design',
        category: 'Problem Solving',
        status: 'Required',
        priority: 'High',
        marketDemand: 96,
        description: 'Deconstructing complex engineering problems, edge-case testing, and modular architecture design.',
        userProficiency: 45,
      },
    ],
    roadmap: [
      {
        id: 'step-1',
        stepNumber: 1,
        title: 'Programming Fundamentals',
        skillName: 'Core Computer Science',
        status: 'Completed',
        estimatedHours: 20,
        whyIncluded: 'Establishes syntactic fluency, memory basics, control flow, functions, and debugging methods needed before advanced languages.',
        keyObjectives: ['Variables, types & scopes', 'Conditionals & loops', 'Function decomposition', 'Basic error handling'],
        topicId: 'topic-fundamentals',
      },
      {
        id: 'step-2',
        stepNumber: 2,
        title: 'Java Object-Oriented Programming',
        skillName: 'Java',
        status: 'In Progress',
        estimatedHours: 35,
        whyIncluded: 'Enterprise standard language; teaches encapsulation, polymorphism, inheritance, and interface-driven design required in modern backends.',
        keyObjectives: ['Classes, Objects & Interfaces', 'Collections Framework (Lists, Sets, Maps)', 'Exception handling & Streams', 'Unit testing with JUnit'],
        topicId: 'topic-java-oop',
      },
      {
        id: 'step-3',
        stepNumber: 3,
        title: 'Data Structures & Algorithmic Efficiency',
        skillName: 'Data Structures & Algorithms',
        status: 'Not Started',
        estimatedHours: 40,
        whyIncluded: 'The cornerstone of technical interview screenings and designing high-performance applications with optimal time/space complexity.',
        keyObjectives: ['Time & Space Complexity (Big-O)', 'Arrays, Linked Lists & Hash Maps', 'Stacks & Queues operations', 'Binary Trees & Graph Traversals'],
        topicId: 'topic-data-structures',
      },
      {
        id: 'step-4',
        stepNumber: 4,
        title: 'Relational Databases & SQL Mastery',
        skillName: 'SQL',
        status: 'Not Started',
        estimatedHours: 25,
        whyIncluded: 'Every production web service relies on persisted data; understanding schema design, indexing, and complex joins prevents severe query bottlenecks.',
        keyObjectives: ['SELECT, WHERE & Aggregate Functions', 'INNER, LEFT, RIGHT & FULL OUTER Joins', 'Subqueries & CTEs', 'Indexes & Query Optimization'],
        topicId: 'topic-sql-joins',
      },
      {
        id: 'step-5',
        stepNumber: 5,
        title: 'Git Version Control & Team Collaboration',
        skillName: 'Git & GitHub',
        status: 'Not Started',
        estimatedHours: 15,
        whyIncluded: 'Day-one team survival skill. You must be comfortable branching, resolving merge conflicts, and writing clean pull requests without corrupting production code.',
        keyObjectives: ['Commit hygiene & staging', 'Branching strategies & rebase', 'Resolving merge conflicts', 'Collaborative GitHub Pull Requests'],
        topicId: 'topic-git-github',
      },
      {
        id: 'step-6',
        stepNumber: 6,
        title: 'Technical Problem Solving & Interview Prep',
        skillName: 'Problem Solving & System Design',
        status: 'Not Started',
        estimatedHours: 30,
        whyIncluded: 'Bridges raw coding knowledge to real-world technical assessments, whiteboard interviews, and structured system trade-off evaluations.',
        keyObjectives: ['Two-pointer & sliding window patterns', 'Greedy & dynamic programming intuition', 'Basic REST API architectural trade-offs', 'Mock interview simulations'],
        topicId: 'topic-problem-solving',
      },
    ],
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    category: 'Data & Analytics',
    iconName: 'BarChart3',
    tagline: 'Transform raw data into business intelligence and actionable insights.',
    description: 'Clean, query, visualize, and interpret complex datasets using SQL, Python, BI dashboards, and statistical models.',
    marketDemandLevel: 'Very High',
    marketMatchScore: 84,
    averageSalary: '$82,000 / yr',
    openingsCount: '36,500+ Active Roles',
    skills: [
      {
        id: 'sql-da',
        name: 'SQL (Advanced Querying)',
        category: 'Data & Storage',
        status: 'Required',
        priority: 'Critical',
        marketDemand: 98,
        description: 'Window functions, CTEs, aggregation rollups, and extracting analytical subsets from production databases.',
        userProficiency: 55,
      },
      {
        id: 'python-da',
        name: 'Python (Pandas & NumPy)',
        category: 'Core Language',
        status: 'Beginner',
        priority: 'Critical',
        marketDemand: 91,
        description: 'Automating data ingestion, handling missing values, transforming DataFrames, and exploratory data analysis.',
        userProficiency: 35,
      },
      {
        id: 'bi-tools',
        name: 'Tableau & PowerBI',
        category: 'DevOps & Tools',
        status: 'Required',
        priority: 'High',
        marketDemand: 86,
        description: 'Building executive KPI dashboards, interactive charts, and business storytelling visuals.',
        userProficiency: 45,
      },
      {
        id: 'statistics',
        name: 'Applied Statistics & Probability',
        category: 'CS Fundamentals',
        status: 'Intermediate',
        priority: 'High',
        marketDemand: 85,
        description: 'Hypothesis testing, A/B testing evaluation, distributions, and correlation vs causation analysis.',
        userProficiency: 60,
      },
      {
        id: 'excel',
        name: 'Advanced Excel Modeling',
        category: 'Data & Storage',
        status: 'Intermediate',
        priority: 'Medium',
        marketDemand: 80,
        description: 'XLOOKUP, pivot tables, scenario analysis, and rapid ad-hoc stakeholder reporting.',
        userProficiency: 75,
      },
    ],
    roadmap: [
      {
        id: 'da-step-1',
        stepNumber: 1,
        title: 'Analytical SQL & Data Extraction',
        skillName: 'SQL (Advanced Querying)',
        status: 'Completed',
        estimatedHours: 25,
        whyIncluded: 'Primary tool for retrieving metrics from data warehouses without needing engineering assistance.',
        keyObjectives: ['Window functions (RANK, ROW_NUMBER)', 'GROUP BY & HAVING filters', 'CTEs for readable pipelines', 'Date/Time transformations'],
        topicId: 'topic-sql-joins',
      },
      {
        id: 'da-step-2',
        stepNumber: 2,
        title: 'Python for Data Wrangling (Pandas)',
        skillName: 'Python (Pandas & NumPy)',
        status: 'In Progress',
        estimatedHours: 35,
        whyIncluded: 'Enables programmatic cleaning, anomaly detection, and handling datasets too large for traditional spreadsheets.',
        keyObjectives: ['DataFrames indexing & filtering', 'Imputing missing values', 'Merging & reshaping data', 'Automated data pipelines'],
        topicId: 'topic-python-data',
      },
      {
        id: 'da-step-3',
        stepNumber: 3,
        title: 'Business Dashboards & Storytelling',
        skillName: 'Tableau & PowerBI',
        status: 'Not Started',
        estimatedHours: 20,
        whyIncluded: 'Translates raw tabular findings into visual stories executive stakeholders can immediately act on.',
        keyObjectives: ['Choosing the right chart types', 'Calculated fields & DAX basics', 'Interactive filtering & drilldowns', 'Dashboard design principles'],
        topicId: 'topic-fundamentals',
      },
      {
        id: 'da-step-4',
        stepNumber: 4,
        title: 'A/B Testing & Hypothesis Validation',
        skillName: 'Applied Statistics',
        status: 'Not Started',
        estimatedHours: 25,
        whyIncluded: 'Protects business decisions from misleading noise by measuring statistical significance and p-values accurately.',
        keyObjectives: ['Sample size determination', 'Z-tests & T-tests', 'Confidence intervals', 'Detecting selection bias'],
        topicId: 'topic-problem-solving',
      },
    ],
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    category: 'Security & Infrastructure',
    iconName: 'ShieldCheck',
    tagline: 'Defend systems, monitor threats, and secure enterprise networks.',
    description: 'Detect vulnerabilities, analyze network anomalies, monitor SIEM telemetry, and safeguard digital assets against cyber attacks.',
    marketDemandLevel: 'Rapidly Growing',
    marketMatchScore: 82,
    averageSalary: '$94,000 / yr',
    openingsCount: '31,000+ Active Roles',
    skills: [
      {
        id: 'network-sec',
        name: 'Network Security & Protocols',
        category: 'Security & Cloud',
        status: 'Required',
        priority: 'Critical',
        marketDemand: 96,
        description: 'TCP/IP stack, DNS, TLS/SSL, firewalls, Wireshark packet inspection, and subnetting.',
        userProficiency: 50,
      },
      {
        id: 'linux-sec',
        name: 'Linux Administration',
        category: 'DevOps & Tools',
        status: 'Intermediate',
        priority: 'Critical',
        marketDemand: 92,
        description: 'CLI commands, file permissions, shell scripting, service management, and audit logs.',
        userProficiency: 65,
      },
      {
        id: 'siem-soc',
        name: 'SIEM & SOC Operations',
        category: 'Security & Cloud',
        status: 'Required',
        priority: 'Critical',
        marketDemand: 90,
        description: 'Log analysis with Splunk/ELK, threat hunting, alert triaging, and incident mitigation.',
        userProficiency: 30,
      },
      {
        id: 'vuln-assessment',
        name: 'Vulnerability Assessment',
        category: 'Problem Solving',
        status: 'Beginner',
        priority: 'High',
        marketDemand: 88,
        description: 'OWASP Top 10 vulnerabilities, Nessus scanning, port scanning with Nmap, and risk remediation.',
        userProficiency: 40,
      },
    ],
    roadmap: [
      {
        id: 'cs-step-1',
        stepNumber: 1,
        title: 'Networking & Packet Analysis',
        skillName: 'Network Security & Protocols',
        status: 'Completed',
        estimatedHours: 30,
        whyIncluded: 'You cannot defend what you cannot dissect. Packet inspection reveals active attacks, man-in-the-middle exploits, and data exfiltration.',
        keyObjectives: ['OSI Model vs TCP/IP', 'Wireshark packet captures', 'Firewall rule configurations', 'Subnetting & NAT'],
        topicId: 'topic-fundamentals',
      },
      {
        id: 'cs-step-2',
        stepNumber: 2,
        title: 'Hardening Linux Servers & CLI',
        skillName: 'Linux Administration',
        status: 'In Progress',
        estimatedHours: 25,
        whyIncluded: '90%+ of cloud infrastructure and critical security monitoring nodes operate on hardened Linux distributions.',
        keyObjectives: ['User groups & chmod permissions', 'SSH key hardening', 'Systemd services & log inspection', 'Bash automation scripts'],
        topicId: 'topic-git-github',
      },
      {
        id: 'cs-step-3',
        stepNumber: 3,
        title: 'Threat Detection & SIEM Triage',
        skillName: 'SIEM & SOC Operations',
        status: 'Not Started',
        estimatedHours: 35,
        whyIncluded: 'The everyday workstation requirement for Junior SOC analysts identifying malicious IP addresses and brute force spikes.',
        keyObjectives: ['Correlating security events', 'Log ingestion & queries', 'Detecting privilege escalation', 'Incident containment playbooks'],
        topicId: 'topic-problem-solving',
      },
    ],
  },
  {
    id: 'cloud-engineer',
    title: 'Cloud Engineer',
    category: 'Cloud & Infrastructure',
    iconName: 'Cloud',
    tagline: 'Architect, automate, and deploy scalable cloud infrastructure.',
    description: 'Manage cloud services (AWS/GCP), containerize applications with Docker, orchestrate microservices in Kubernetes, and automate with Terraform.',
    marketDemandLevel: 'Very High',
    marketMatchScore: 86,
    averageSalary: '$105,000 / yr',
    openingsCount: '42,000+ Active Roles',
    skills: [
      {
        id: 'cloud-arch',
        name: 'AWS / Cloud Architecture',
        category: 'Security & Cloud',
        status: 'Required',
        priority: 'Critical',
        marketDemand: 96,
        description: 'VPC networking, compute instances (EC2), managed storage (S3), IAM security roles, and serverless lambdas.',
        userProficiency: 55,
      },
      {
        id: 'docker',
        name: 'Docker & Containerization',
        category: 'DevOps & Tools',
        status: 'Intermediate',
        priority: 'Critical',
        marketDemand: 94,
        description: 'Multi-stage Dockerfiles, container image optimization, local compose stacks, and reproducible runtime environments.',
        userProficiency: 70,
      },
      {
        id: 'k8s',
        name: 'Kubernetes Orchestration',
        category: 'DevOps & Tools',
        status: 'Beginner',
        priority: 'High',
        marketDemand: 89,
        description: 'Deployments, Pods, Services, Ingress controllers, config maps, and rolling zero-downtime updates.',
        userProficiency: 35,
      },
      {
        id: 'terraform',
        name: 'Infrastructure as Code (Terraform)',
        category: 'DevOps & Tools',
        status: 'Required',
        priority: 'High',
        marketDemand: 88,
        description: 'Declarative resource provisioning, state management, modular configuration, and cloud consistency.',
        userProficiency: 40,
      },
    ],
    roadmap: [
      {
        id: 'ce-step-1',
        stepNumber: 1,
        title: 'Containerization with Docker',
        skillName: 'Docker & Containerization',
        status: 'Completed',
        estimatedHours: 20,
        whyIncluded: 'Modern microservices rely on lightweight container artifacts to eliminate the "works on my machine" dilemma.',
        keyObjectives: ['Writing efficient Dockerfiles', 'Volume mounting & networking', 'Docker Compose multi-service stacks', 'Image vulnerability scanning'],
        topicId: 'topic-fundamentals',
      },
      {
        id: 'ce-step-2',
        stepNumber: 2,
        title: 'Cloud Networking & Core Services (AWS)',
        skillName: 'AWS / Cloud Architecture',
        status: 'In Progress',
        estimatedHours: 35,
        whyIncluded: 'Foundation for building high-availability, fault-tolerant architectures across availability zones.',
        keyObjectives: ['VPCs, subnets, and route tables', 'EC2 compute & S3 storage', 'IAM least-privilege security', 'Load balancers & auto-scaling'],
        topicId: 'topic-sql-joins',
      },
      {
        id: 'ce-step-3',
        stepNumber: 3,
        title: 'Kubernetes Cluster Management',
        skillName: 'Kubernetes Orchestration',
        status: 'Not Started',
        estimatedHours: 40,
        whyIncluded: 'Industry-standard orchestrator for automated healing, horizontal pod scaling, and zero-downtime deployments.',
        keyObjectives: ['Pods, ReplicaSets & Deployments', 'Cluster networking & Ingress', 'Secrets & ConfigMaps', 'Helm package management'],
        topicId: 'topic-problem-solving',
      },
    ],
  },
];

export const MOCK_TOPICS: Record<string, LearningTopic> = {
  'topic-java-oop': {
    id: 'topic-java-oop',
    title: 'Java OOP Principles & Collections Framework',
    skillName: 'Java',
    jobId: 'software-developer',
    estimatedMinutes: 18,
    summary: 'Master the four pillars of Object-Oriented Programming (OOP) in Java and learn why Collections like ArrayList, HashMap, and HashSet are the backbone of backend services.',
    conceptOverview: `Object-Oriented Programming models software around real-world data and behaviors rather than bare functions. In enterprise Java systems, four core pillars prevent chaotic codebases:

1. **Encapsulation**: Bundling state (fields) and behaviors (methods) while shielding internal data with private modifiers and controlled accessors (getters/setters).
2. **Inheritance**: Reusing common behaviors across subclasses using the 'extends' keyword.
3. **Polymorphism**: The ability for different objects to respond to the same interface or method call in unique ways (method overriding at runtime and method overloading at compile time).
4. **Abstraction**: Exposing clean interfaces or abstract classes while concealing internal execution complexity.

The **Java Collections Framework** provides standardized data storage. When choosing between collections:
- Use **ArrayList** for fast random read access via index O(1), but slower insertions in the middle O(n).
- Use **LinkedList** when frequently inserting or deleting at head or tail O(1).
- Use **HashMap<K, V>** for lightning-fast key-based lookups O(1) average time.
- Use **HashSet<E>** when enforcing uniqueness with no duplicate items.`,
    codeSnippet: {
      language: 'java',
      caption: 'Using Interfaces, Polymorphism & HashMap in Java',
      code: `// Interface defines the contract
public interface PaymentGateway {
    boolean processPayment(String orderId, double amount);
}

// Concrete implementation
public class StripeGateway implements PaymentGateway {
    @Override
    public boolean processPayment(String orderId, double amount) {
        System.out.println("Processing $" + amount + " via Stripe for Order " + orderId);
        return true;
    }
}

// In-memory customer repository using HashMap
import java.util.Map;
import java.util.HashMap;

public class OrderService {
    private final Map<String, Double> pendingOrders = new HashMap<>();

    public void addOrder(String orderId, double total) {
        pendingOrders.put(orderId, total); // O(1) average lookup
    }
}`,
    },
    keyTakeaways: [
      'Encapsulation prevents unexpected state mutation by keeping fields private.',
      'Program against Interfaces rather than concrete implementations for loose coupling.',
      'HashMap offers O(1) average time complexity for key lookups and insertions.',
      'Always implement equals() and hashCode() when using custom objects as HashMap keys.',
    ],
    quiz: [
      {
        id: 'q1',
        question: 'Which OOP pillar is best demonstrated by keeping class variables private and exposing them only via public getter and setter methods?',
        options: ['Polymorphism', 'Encapsulation', 'Multiple Inheritance', 'Dynamic Dispatch'],
        correctIndex: 1,
        explanation: 'Encapsulation restricts direct access to an object’s components, protecting internal state integrity through controlled methods.',
      },
      {
        id: 'q2',
        question: 'What is the average time complexity for retrieving a value by its key from a Java HashMap?',
        options: ['O(log n)', 'O(n)', 'O(1)', 'O(n²)'],
        correctIndex: 2,
        explanation: 'Under normal conditions with a well-distributed hash code, a HashMap retrieves entries in O(1) constant time.',
      },
      {
        id: 'q3',
        question: 'What happens if you attempt to add a duplicate element into a Java HashSet?',
        options: [
          'It throws a DuplicateElementException runtime error',
          'The add() method returns false and the duplicate is silently rejected',
          'It overwrites the entire collection',
          'It replaces the oldest entry with the new one',
        ],
        correctIndex: 1,
        explanation: 'HashSet guarantees unique elements. If an element already exists (determined via hashCode and equals), add() returns false and leaves the set unchanged.',
      },
    ],
  },
  'topic-data-structures': {
    id: 'topic-data-structures',
    title: 'Data Structures: Arrays, Hash Tables & Complexity',
    skillName: 'Data Structures & Algorithms',
    jobId: 'software-developer',
    estimatedMinutes: 20,
    summary: 'Analyze asymptotic time & space complexity (Big-O) and understand memory trade-offs between continuous array allocations and linked node structures.',
    conceptOverview: `Algorithms run at different rates depending on input size 'n'. Big-O notation describes the upper bound of growth:
- **O(1) Constant**: Execution time remains unchanged regardless of input size (e.g., accessing an array index).
- **O(log n) Logarithmic**: Divides the problem space in half each step (e.g., Binary Search on a sorted array).
- **O(n) Linear**: Iterates once across all n elements (e.g., finding the maximum value in an unsorted list).
- **O(n log n) Linearithmic**: Standard for optimal comparison-based sorting algorithms like Merge Sort and Quick Sort.
- **O(n²) Quadratic**: Nested loops comparing every pair (e.g., Bubble Sort).

**Array vs Hash Table**:
- **Array**: Stored in contiguous blocks of memory. Great for CPU caching and index lookups (O(1)), but resizing or inserting at index 0 requires shifting all subsequent elements (O(n)).
- **Hash Table**: Maps keys to array bucket indices using a hash function. Fast lookup, insert, and delete in O(1) expected time, but requires extra space and collision handling.`,
    codeSnippet: {
      language: 'typescript',
      caption: 'Two-Sum Problem solved in O(n) using a Hash Map',
      code: `// Given an array of integers, return indices of two numbers that add up to target
function twoSum(nums: number[], target: number): [number, number] | null {
  const seenMap = new Map<number, number>(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seenMap.has(complement)) {
      return [seenMap.get(complement)!, i]; // O(1) retrieval!
    }
    seenMap.set(nums[i], i);
  }
  return null; // Total runtime: O(n) instead of O(n^2) brute force
}`,
    },
    keyTakeaways: [
      'Big-O notation isolates runtime growth rate from specific CPU hardware variations.',
      'Arrays offer O(1) random access but require O(n) for arbitrary insertions.',
      'Using a Hash Map to trade O(n) space for O(1) lookup is one of the most common interview optimization techniques.',
      'Binary Search requires the underlying array to be pre-sorted.',
    ],
    quiz: [
      {
        id: 'ds-q1',
        question: 'What is the worst-case time complexity of finding a specific value in an unsorted array of n elements?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        correctIndex: 2,
        explanation: 'In an unsorted array, the target element could be at the very last position or absent, requiring inspection of all n elements (O(n)).',
      },
      {
        id: 'ds-q2',
        question: 'Why is a Hash Map able to achieve O(1) average lookup times?',
        options: [
          'It sorts keys in alphabetical order continuously',
          'It uses a hash function to directly compute the index where the value is stored',
          'It duplicates the data across multiple CPU threads',
          'It caches everything in browser local storage',
        ],
        correctIndex: 1,
        explanation: 'A hash function transforms the key into an integer index, pointing directly to the memory bucket without scanning other keys.',
      },
      {
        id: 'ds-q3',
        question: 'If an algorithm contains two nested loops, each iterating from 0 to n, what is its asymptotic time complexity?',
        options: ['O(2n)', 'O(n log n)', 'O(n²)', 'O(n³)'],
        correctIndex: 2,
        explanation: 'For each of the n iterations in the outer loop, the inner loop executes n times: n * n = O(n²) quadratic time complexity.',
      },
    ],
  },
  'topic-sql-joins': {
    id: 'topic-sql-joins',
    title: 'SQL Relational Queries & Joins',
    skillName: 'SQL',
    jobId: 'software-developer',
    estimatedMinutes: 15,
    summary: 'Understand relational algebra, database normalization, and master INNER, LEFT, RIGHT, and FULL OUTER joins to combine multi-table datasets cleanly.',
    conceptOverview: `Relational databases (PostgreSQL, MySQL, SQLite) break information into normalized tables to prevent duplicated data. **JOINs** reconnect these tables based on foreign key relationships:

1. **INNER JOIN**: Returns only records that have matching values in both tables. If a user has zero orders, they are excluded.
2. **LEFT JOIN (LEFT OUTER JOIN)**: Returns all records from the left table, plus matched records from the right table. Unmatched right columns become NULL. Essential for questions like "Find all users who haven't placed an order yet".
3. **RIGHT JOIN**: Returns all records from the right table and matched records from the left table.
4. **FULL OUTER JOIN**: Returns all records when there is a match in either left or right table.
5. **CROSS JOIN**: Produces the Cartesian product of both tables (every row matched with every row).

Indexing the joined foreign keys (e.g. \`orders.user_id\`) reduces scan complexity from O(M * N) down to index lookups.`,
    codeSnippet: {
      language: 'sql',
      caption: 'Combining Customers, Orders, and Items with LEFT and INNER JOINs',
      code: `-- Find each user's total spending, including users with 0 purchases
SELECT 
    u.id AS user_id,
    u.name,
    COUNT(o.id) AS total_orders,
    COALESCE(SUM(o.total_amount), 0.00) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.status = 'ACTIVE'
GROUP BY u.id, u.name
ORDER BY total_spent DESC;`,
    },
    keyTakeaways: [
      'INNER JOIN drops rows that do not satisfy the matching condition in both tables.',
      'LEFT JOIN preserves all rows from the primary table, filling missing columns with NULL.',
      'Always add indexes to Foreign Keys involved in JOIN conditions to prevent full table scans.',
      'Use COALESCE(column, 0) to replace NULL values in aggregation summaries.',
    ],
    quiz: [
      {
        id: 'sql-q1',
        question: 'Which type of JOIN would you use to list all registered students, even those who have not enrolled in any courses yet?',
        options: ['INNER JOIN', 'LEFT JOIN with students as left table', 'CROSS JOIN', 'NATURAL JOIN only'],
        correctIndex: 1,
        explanation: 'A LEFT JOIN keeps every row from the students table. Students with no course records will simply show NULL for the course columns.',
      },
      {
        id: 'sql-q2',
        question: 'What is the consequence of omitting the "ON" condition in a standard SQL JOIN?',
        options: [
          'It automatically joins on primary keys',
          'It generates a Cartesian Product (CROSS JOIN) matching every left row to every right row',
          'The SQL server throws an immediate syntax error in all dialects',
          'It returns only the first row of each table',
        ],
        correctIndex: 1,
        explanation: 'Without a join condition, the database calculates the Cartesian product, returning TableA_rows * TableB_rows.',
      },
      {
        id: 'sql-q3',
        question: 'What SQL function is commonly used with LEFT JOINs to convert NULL values in numeric calculations into 0?',
        options: ['NULLIF()', 'COALESCE()', 'CONVERT()', 'TRIM()'],
        correctIndex: 1,
        explanation: 'COALESCE(expression, fallback) returns the first non-null argument, ideal for changing NULL sales totals into 0.00.',
      },
    ],
  },
  'topic-git-github': {
    id: 'topic-git-github',
    title: 'Git Version Control & Branching Workflows',
    skillName: 'Git & GitHub',
    jobId: 'software-developer',
    estimatedMinutes: 14,
    summary: 'Master the Git object model, commit trees, clean branching strategies (Feature Branching / GitHub Flow), and resolving merge conflicts cleanly.',
    conceptOverview: `Git is a distributed version control system that tracks snapshots of project files over time. Unlike central systems, every developer has a full clone of the repository history.

Key stages of file tracking:
1. **Working Directory**: Your local untracked or modified files on disk.
2. **Staging Area (Index)**: Files selected via \`git add\` ready to be saved in the next snapshot.
3. **Repository (Local Commit Tree)**: Snapshots committed with \`git commit -m "feat: ..."\`.
4. **Remote (GitHub/GitLab)**: Central shared repository synced via \`git push\` and \`git pull\`.

**Branching & Conflict Resolution**:
- Create isolated feature branches: \`git checkout -b feature/auth-service\`.
- When two branches modify the exact same lines of code, Git pauses the merge and outputs conflict markers (\`<<<<<<< HEAD\`, \`=======\`, \`>>>>>>>\`).
- Inspect the differences, decide the final implementation, stage the file, and complete the merge commit.`,
    codeSnippet: {
      language: 'bash',
      caption: 'Standard Professional Feature Branch Lifecycle',
      code: `# 1. Pull latest main branch
git checkout main
git pull origin main

# 2. Create and switch to new feature branch
git checkout -b feat/user-dashboard

# 3. Work on code, inspect changes, and stage
git status
git add src/components/Dashboard.tsx
git commit -m "feat: add user metric cards to dashboard"

# 4. Push to remote and open a Pull Request
git push -u origin feat/user-dashboard`,
    },
    keyTakeaways: [
      'The staging area allows you to craft granular, atomic commits rather than dumping everything at once.',
      'Never commit secrets, API keys, or large binary packages (.env, node_modules) into Git.',
      'Merge conflicts are normal: they simply signal that Git refuses to guess which developer is right.',
    ],
    quiz: [
      {
        id: 'git-q1',
        question: 'Which Git command stages modified files into the index so they can be included in the next commit snapshot?',
        options: ['git push', 'git commit', 'git add', 'git checkout'],
        correctIndex: 2,
        explanation: 'git add moves changes from the working directory into the staging area (index).',
      },
      {
        id: 'git-q2',
        question: 'What is the primary difference between "git merge" and "git rebase"?',
        options: [
          'git merge deletes files while git rebase restores them',
          'git merge creates a dedicated merge commit preserving history; git rebase rewrites commits linearly onto the base branch',
          'git rebase is only used for deleting remote repositories',
          'There is no functional difference between them',
        ],
        correctIndex: 1,
        explanation: 'git merge combines branches with a merge commit, whereas rebase replays your commits one-by-one on top of the target branch, creating a clean linear timeline.',
      },
      {
        id: 'git-q3',
        question: 'What file should be placed at the root of a repository to prevent sensitive environment variables and dependencies from being committed?',
        options: ['.gitconfig', '.gitignore', 'README.md', 'package.json'],
        correctIndex: 1,
        explanation: '.gitignore specifies intentionally untracked files that Git should ignore, such as .env and node_modules/.',
      },
    ],
  },
  'topic-python-data': {
    id: 'topic-python-data',
    title: 'Python for Data Wrangling (Pandas & NumPy)',
    skillName: 'Python',
    jobId: 'data-analyst',
    estimatedMinutes: 16,
    summary: 'Learn vectorized operations with NumPy and data manipulation pipelines with Pandas DataFrames for automated analytical workflows.',
    conceptOverview: `Pandas is the premier Python library for data analysis. It introduces the **DataFrame**, a 2D tabular data structure with labeled axes (rows and columns).

Key capabilities:
- **Vectorization**: Instead of slow Python \`for\` loops, NumPy and Pandas execute batch operations in optimized C code under the hood.
- **Handling Dirty Data**: Detect missing values with \`df.isna().sum()\`, drop empty records with \`dropna()\`, or impute values with \`fillna(df.mean())\`.
- **Filtering & Grouping**: Execute relational queries like \`df.groupby('region')['sales'].sum()\` in a single readable line.`,
    codeSnippet: {
      language: 'python',
      caption: 'Cleaning and Aggregating Sales Data with Pandas',
      code: `import pandas as pd

# Load dataset
df = pd.read_csv('ecommerce_sales.csv')

# Clean missing values
df['customer_age'] = df['customer_age'].fillna(df['customer_age'].median())

# Vectorized transformation: Calculate discounted total
df['discounted_price'] = df['unit_price'] * (1 - df['discount_rate'])

# Group by category and compute summary metrics
summary = df.groupby('product_category').agg(
    total_revenue=('discounted_price', 'sum'),
    average_rating=('rating', 'mean')
).sort_values('total_revenue', ascending=False)`,
    },
    keyTakeaways: [
      'Vectorized operations in Pandas run hundreds of times faster than manual Python loops.',
      'Always inspect data types (.dtypes) and missing value distributions before starting modeling.',
      'Pandas DataFrames align data automatically based on index labels.',
    ],
    quiz: [
      {
        id: 'py-q1',
        question: 'Why are Pandas vectorized operations preferred over traditional Python "for" loops when processing large datasets?',
        options: [
          'They bypass memory allocation entirely',
          'They execute pre-compiled C-level loops with contiguous memory buffers',
          'They only work with text files',
          'They run on the GPU automatically',
        ],
        correctIndex: 1,
        explanation: 'Pandas and NumPy are written in C, allowing vectorized operations to leverage contiguous memory arrays and SIMD instructions for blazing speed.',
      },
      {
        id: 'py-q2',
        question: 'Which Pandas method is used to calculate summary aggregations (like sum or mean) across categorical subsets?',
        options: ['df.split()', 'df.groupby()', 'df.reindex()', 'df.pivot_table() only'],
        correctIndex: 1,
        explanation: 'df.groupby() splits the data into groups based on some criteria, applies a function (e.g. sum, mean), and combines the results.',
      },
    ],
  },
  'topic-fundamentals': {
    id: 'topic-fundamentals',
    title: 'Programming Fundamentals & Memory Management',
    skillName: 'Programming Fundamentals',
    jobId: 'software-developer',
    estimatedMinutes: 12,
    summary: 'Foundational concepts of variables, stack vs. heap memory allocation, references vs. primitives, and structured debugging.',
    conceptOverview: `Before mastering frameworks, programmers must understand how instructions execute in computer architecture:

1. **Stack Memory**: Fast, organized memory where local primitive variables and function call frames live. Variables are automatically cleaned up when the function exits.
2. **Heap Memory**: Dynamic memory where objects and complex data structures are allocated. In garbage-collected languages (Java, JavaScript, Python), runtime engines periodically sweep unreferenced heap objects.
3. **Pass-by-Value vs Reference**: Primitive types (integers, booleans) copy their actual literal value; object variables store memory addresses (references) pointing to heap instances.`,
    codeSnippet: {
      language: 'typescript',
      caption: 'Primitive vs Object Reference behavior in memory',
      code: `// Primitive pass-by-value
let a = 10;
let b = a;
b = 25;
console.log(a); // 10 (remains unchanged)

// Reference behavior
const userA = { name: "Alex", score: 85 };
const userB = userA; // Both variables point to the exact same heap memory address!
userB.score = 99;
console.log(userA.score); // 99 (modified because object reference was shared!)`,
    },
    keyTakeaways: [
      'Stack memory is fast and local; Heap memory holds dynamic objects.',
      'Modifying an object through one reference mutates the underlying heap state for all references pointing to it.',
    ],
    quiz: [
      {
        id: 'fund-q1',
        question: 'Where are complex dynamic objects typically allocated in memory during program execution?',
        options: ['Stack', 'Heap', 'CPU Cache L1 only', 'Hard Disk Swap exclusively'],
        correctIndex: 1,
        explanation: 'Objects whose sizes cannot be determined at compile time are allocated dynamically on the Heap.',
      },
      {
        id: 'fund-q2',
        question: 'What is the role of an automated Garbage Collector in languages like Java or Python?',
        options: [
          'To format indentation in source code files',
          'To scan the heap and reclaim memory from objects that are no longer reachable by any active reference',
          'To compile code into binary machine code',
          'To catch syntax errors before running',
        ],
        correctIndex: 1,
        explanation: 'Garbage collectors periodically sweep the heap, freeing memory allocated to objects no longer referenced by active code.',
      },
    ],
  },
  'topic-problem-solving': {
    id: 'topic-problem-solving',
    title: 'Technical Problem Solving & Algorithmic Patterns',
    skillName: 'Problem Solving & System Design',
    jobId: 'software-developer',
    estimatedMinutes: 18,
    summary: 'Tactics for breaking down technical interview questions: Two Pointers, Sliding Window, and trade-off evaluation.',
    conceptOverview: `Engineers solve complex challenges by recognizing repeating patterns:
1. **Two Pointers**: Used on sorted arrays or lists to search pairs without quadratic O(n²) nested loops.
2. **Sliding Window**: Captures continuous sub-arrays or sub-strings of variable or fixed length in O(n) time.
3. **Breadth-First vs Depth-First Search**: Exploring state spaces level-by-level (BFS with queue) or deep along branches (DFS with stack/recursion).
4. **System Trade-offs**: Speed vs Memory, Consistency vs Availability (CAP theorem).`,
    keyTakeaways: [
      'Always clarify problem constraints and edge cases before writing a line of code.',
      'State your brute-force solution first, then identify the bottleneck using data structures.',
    ],
    quiz: [
      {
        id: 'ps-q1',
        question: 'Which algorithmic pattern is best suited for finding the longest contiguous substring without repeating characters in O(n) time?',
        options: ['Binary Search', 'Sliding Window with a character frequency set', 'Greedy Knapsack', 'Bellman-Ford'],
        correctIndex: 1,
        explanation: 'The Sliding Window pattern expands the right edge of a window while contracting the left edge when duplicate characters are encountered, visiting each character at most twice (O(n)).',
      },
      {
        id: 'ps-q2',
        question: 'When asked a technical problem in a software interview, what is the best first step?',
        options: [
          'Start typing code immediately to show typing speed',
          'Clarify inputs, expected output, edge cases, and constraints with the interviewer',
          'Decline to answer if you have not memorized the solution',
          'Ask for the optimal answer right away',
        ],
        correctIndex: 1,
        explanation: 'Clarifying constraints, edge cases (empty input, negatives, overflow), and confirming understanding demonstrates engineering maturity.',
      },
    ],
  },
};

export const MOCK_REVISION_ITEMS: RevisionItem[] = [
  {
    id: 'rev-java-basics',
    title: 'Java Basics & OOP Principles',
    skillName: 'Java',
    topicId: 'topic-java-oop',
    dueLabel: 'Revision due today',
    urgency: 'critical',
    lastStudied: '3 days ago',
    nextInterval: 'Interval: 1 Day (Review 2/4)',
    retentionEstimate: 58,
    recallQuestion: 'Can an interface in modern Java contain method bodies, and what is the difference between an Abstract Class and an Interface?',
    answerSummary: 'Yes! Since Java 8, interfaces can contain default and static methods with concrete implementations. However, abstract classes can maintain state (instance variables) and constructors, whereas interfaces cannot maintain mutable instance state.',
    completed: false,
  },
  {
    id: 'rev-sql-joins',
    title: 'SQL Relational Queries & Joins',
    skillName: 'SQL',
    topicId: 'topic-sql-joins',
    dueLabel: 'Revision due tomorrow',
    urgency: 'moderate',
    lastStudied: '5 days ago',
    nextInterval: 'Interval: 3 Days (Review 3/4)',
    retentionEstimate: 72,
    recallQuestion: 'What is the exact result of a LEFT JOIN if a record in the left table has no matching row in the right table?',
    answerSummary: 'The left table row is retained in the output, and all columns corresponding to the right table are filled with NULL values.',
    completed: false,
  },
  {
    id: 'rev-ds-arrays',
    title: 'Data Structures: Arrays vs Hash Tables',
    skillName: 'Data Structures & Algorithms',
    topicId: 'topic-data-structures',
    dueLabel: 'Revision due in 3 days',
    urgency: 'upcoming',
    lastStudied: 'Yesterday',
    nextInterval: 'Interval: 7 Days (Review 1/4)',
    retentionEstimate: 85,
    recallQuestion: 'Why does an array have O(1) index lookup while inserting at index 0 requires O(n) operations?',
    answerSummary: 'Arrays store data in contiguous memory offsets, so accessing arr[i] is a single arithmetic pointer offset. Inserting at index 0 requires shifting all n existing elements one position to the right.',
    completed: false,
  },
  {
    id: 'rev-git-branching',
    title: 'Git Branching & Conflict Resolution',
    skillName: 'Git & GitHub',
    topicId: 'topic-git-github',
    dueLabel: 'Revision due next week',
    urgency: 'upcoming',
    lastStudied: '4 days ago',
    nextInterval: 'Interval: 14 Days (Review 4/4)',
    retentionEstimate: 91,
    recallQuestion: 'What command shows git branch commit history in a clean condensed graph in your terminal?',
    answerSummary: 'git log --oneline --graph --decorate --all provides a clear visual snapshot of branches and commits.',
    completed: false,
  },
];
