// Mock data for Lovely Ramchandani's Data Science Portfolio

export const portfolioData = {
  personal: {
    name: "Lovely Ramchandani",
    location: "Bengaluru, Karnataka",
    email: "lovelynarenderramchandani@gmail.com",
    phone: "+918600756348",
    linkedin: "https://www.linkedin.com/in/lovelyr",
    github: "https://github.com/datasciencejourney",
    whatsapp: "+918600756348"
  },
  
  about: {
    intro: "Ambitious and driven data science enthusiast having a solid background in statistics, machine learning, and data visualization. Proficient in R, Python, and SQL to mine complex data sets for useful insights.",
    highlights: [
      "Specialized in AI-assisted text detection and NLP research",
      "Recent Post-Graduate in Data Science (M.Sc Data Science)",
      "Expert in Python, Machine Learning, and Data Visualization",
      "Published research in AI-generated text detection"
    ]
  },
  
  skills: {
    "Programming & Analytics": ["Python", "SQL", "R", "Advanced Excel", "Scikit-learn", "Pandas", "NumPy", "TensorFlow"],
    "Machine Learning": ["Scikit-Learn", "TensorFlow", "Keras", "LSTM", "Transformers", "BERT", "RoBERTa", "DistilBERT"],
    "Data Visualization & BI": ["Power BI", "Tableau", "Matplotlib", "Streamlit", "Dash", "DAX"],
    "Cloud & Database": ["Microsoft Azure", "AWS", "MySQL", "SQL Server"],
    "Big Data & Streaming": ["Apache Kafka", "Apache Spark", "PySpark", "Structured Streaming"],
    "Tools & Technologies": ["Git", "Linux", "VS Code", "Flask", "BeautifulSoup", "Selenium"]
  },
  
  projects: [
    {
      id: 1,
      title: "Unmasking Deepfake Text with AI-Assisted Detection",
      description: "Designed and implemented a Flask-based web application that detects AI-generated vs. human-written text using RoBERTa, LSTM, and DistilBERT. Achieved 92.5% accuracy with a dataset of 1,000+ samples, reducing manual review time by 60%.",
      technologies: ["Python", "HuggingFace Transformers", "LSTM", "RoBERTa", "DistilBERT", "TensorFlow", "Power BI", "Dash", "Flask"],
      highlights: [
        "92.5% accuracy in AI text detection",
        "60% reduction in manual review time",
        "Research paper under review for publication",
        "Power BI dashboards for model performance monitoring"
      ],
      category: "AI/ML",
      githubUrl: "https://github.com/datasciencejourney/AI-Text-Detector"
    },
    {
      id: 2,
      title: "Extractive Hindi Text Summarization Using NLP",
      description: "Associated with REVA University - Developed an extractive text summarization project for Hindi language using NLP techniques, TextRank, and BERT-based embeddings. Curated a diverse dataset of 1,000 Hindi articles and implemented preprocessing pipelines using Indic NLP and iNLTK. Deployed the solution using cloud-based tools like Google Colab and Hugging Face, enhancing user experience and information accessibility for Hindi speakers. Contributed to the Hindi NLP ecosystem by addressing gaps in tools, datasets, and models, and objectively assessing summary quality using ROUGE metrics.",
      technologies: ["Natural Language Processing (NLP)", "NLP Libraries", "Text Summarization", "Machine Learning Algorithms", "Data Pre-processing", "Data Visualization", "Python", "BERT", "TextRank"],
      highlights: [
        "Enhanced user experience for Hindi speakers",
        "Contributed to Hindi NLP ecosystem",
        "Cloud deployment using Google Colab and Hugging Face",
        "Quality assessment using ROUGE metrics"
      ],
      category: "NLP",
      githubUrl: "https://github.com/datasciencejourney/hindi-text-summarization"
    },
    {
      id: 3,
      title: "Sales Insights - Data Analysis Project",
      description: "Processed over 1 lakh sales records for analyzing sales trends and patterns to identify key performance drivers. Delivered actionable insights that contributed to a potential 15% revenue increase in underperforming regions.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI", "MySQL"],
      highlights: [
        "Processed 100,000+ sales records",
        "15% potential revenue increase identified",
        "Interactive dashboards for stakeholder insights",
        "Key performance driver analysis"
      ],
      category: "Analytics",
      githubUrl: "https://github.com/datasciencejourney/sales_insights"
    },
    {
      id: 4,
      title: "Real-Time Data Pipeline",
      description: "Architected and implemented a scalable real-time data processing pipeline handling 1M+ records per hour. Achieved 99.5% data processing reliability through robust error handling and recovery mechanisms.",
      technologies: ["Apache Kafka", "Apache Spark", "Python", "PySpark", "SQL", "Structured Streaming"],
      highlights: [
        "1M+ records processed per hour",
        "99.5% data processing reliability",
        "Reduced data latency from 15min to <2min",
        "Robust error handling and recovery"
      ],
      category: "Big Data",
      githubUrl: "https://github.com/datasciencejourney/Real-Time-Data-Pipeline-Leveraging-Apache-Spark-and-Kafka.-master"
    }
  ],
  
  experience: [
    {
      type: "experience",
      title: "NLP Researcher Intern",
      company: "REVA University",
      duration: "Feb 2025 – Jul 2025",
      description: "Leveraged BERT embeddings within a Hindi text summarization project, improving summarization coherence scores by 15% compared to TF-IDF, evaluated by 5 independent linguistic experts.",
      responsibilities: [
        "Curated diverse dataset of 1,000 Hindi articles using BeautifulSoup and Selenium",
        "Executed preprocessing pipelines using Indic NLP and iNLTK",
        "Constructed interactive Power BI dashboards for real-time monitoring",
        "Achieved 15% improvement in summarization coherence scores"
      ],
      technologies: ["Python", "BERT", "TF-IDF", "TextRank", "BeautifulSoup", "Selenium", "Power BI", "Streamlit"]
    },
    {
      type: "education",
      title: "Recent Post-Graduate in Data Science (M.Sc Data Science)",
      company: "REVA University",
      duration: "Sep 2023 – Jul 2025",
      description: "Master of Science in Data Science with focus on Machine Learning, NLP, and Advanced Analytics.",
      responsibilities: [
        "Advanced coursework in Machine Learning and Deep Learning",
        "Specialized in Natural Language Processing",
        "Research in AI-assisted text detection",
        "Hands-on projects in real-time data processing"
      ],
      technologies: []
    },
    {
      type: "education",
      title: "Bachelor of Computer Applications",
      company: "Goa University",
      duration: "Jun 2020 – Aug 2023",
      description: "Bachelor of Computer Applications with strong foundation in programming and software development.",
      responsibilities: [
        "Core programming concepts and data structures",
        "Database management and system design",
        "Software development lifecycle",
        "Foundation in computer science principles"
      ],
      technologies: []
    }
  ],
  
  certifications: [
    {
      name: "Introduction to AI, NLP and Deep Learning",
      provider: "Infosys Springboard",
      year: "2024",
      category: "AI/ML"
    },
    {
      name: "Microsoft Power Platform Fundamentals PL900",
      provider: "Microsoft",
      year: "2024",
      category: "Data Analytics"
    },
    {
      name: "Microsoft Power BI Data Analyst PL300",
      provider: "Microsoft",
      year: "2024",
      category: "Data Visualization"
    }
  ]
};

export const codeSnippets = [
  "import pandas as pd\nfrom sklearn.model_selection import train_test_split",
  "from transformers import AutoTokenizer, AutoModelForSequenceClassification",
  "model = tf.keras.Sequential([\n    tf.keras.layers.LSTM(128, return_sequences=True),\n    tf.keras.layers.Dense(1, activation='sigmoid')\n])",
  "df = pd.read_csv('data.csv')\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)",
  "from kafka import KafkaProducer\nproducer = KafkaProducer(bootstrap_servers=['localhost:9092'])",
  "spark = SparkSession.builder.appName('RealTimeProcessing').getOrCreate()",
  "tokenizer = AutoTokenizer.from_pretrained('distilbert-base-uncased')",
  "accuracy = accuracy_score(y_true, y_pred)\nprint(f'Model Accuracy: {accuracy:.2%}')"
];