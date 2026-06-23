import { Project } from '@/lib/types'

export const personalInfo = {
  name: 'Azhar Ahmed',
  initials: 'AA',
  title: 'Data Scientist  |  AI/ML Developer  |  IT Undergraduate',
  tagline: 'I design & build AI/ML systems that ship & scale.',
  taglineSub: 'I architect it, train it, ship it, then keep the whole pipeline running.',
  location: 'Hyderabad, Sindh, Pakistan',
  phone: '+92 333 2626501',
  email: 'azharahmedyzp@gmail.com',
  cvPath: '/cv/Azhar_Ahmed_CV.pdf',
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/AzharAhmedP', handle: 'AzharAhmedP' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/AzharAhmedP', handle: 'AzharAhmedP' },
    { label: 'Hugging Face', url: 'https://huggingface.co/AzharAhmedP', handle: 'AzharAhmedP' },
  ],
  greetings: ['Hello', 'Bonjour', 'Hallo', 'Ola', 'नमस्ते', 'سلام'],
  skillCategories: [
    { label: 'LANGUAGES', items: ['Python', 'Java', 'C++', 'SQL', 'HTML', 'CSS', 'JavaScript'] },
    { label: 'DATA ANALYSIS', items: ['NumPy', 'Pandas', 'Data Wrangling', 'Feature Engineering'] },
    { label: 'MACHINE LEARNING', items: ['Scikit-learn', 'XGBoost', 'LightGBM', 'Reg/Class/Clustering', 'GridSearchCV'] },
    { label: 'DEEP LEARNING', items: ['TensorFlow', 'Keras', 'PyTorch', 'ANN', 'CNN', 'RNN/LSTM', 'Transfer Learning'] },
    { label: 'NLP & LLMs', items: ['Hugging Face', 'BERT', 'Transformers', 'LangChain', 'RAG', 'Prompt Engineering', 'Groq'] },
    { label: 'COMPUTER VISION', items: ['OpenCV', 'Object Detection', 'Image Classification', 'CNN Architectures', 'Vision Transformer'] },
    { label: 'DATA VIZ', items: ['Matplotlib', 'Seaborn', 'Plotly', 'Streamlit'] },
    { label: 'TOOLS', items: ['Jupyter', 'Colab', 'Git/GitHub', 'VS Code', 'Docker', 'FastAPI', 'Flask'] },
  ],
  process: [
    {
      step: '01',
      title: 'Understand the problem.',
      body: 'Before I touch data, I work out who it\u2019s for and what done actually means. Half the job is asking sharper questions than the brief did.',
    },
    {
      step: '02',
      title: 'Explore the data.',
      body: 'I dig into the data to find patterns, anomalies, and the signal worth keeping. EDA is where the real story hides before any model is built.',
    },
    {
      step: '03',
      title: 'Prototype fast.',
      body: 'I build quick end-to-end baselines while the iteration cost is low. If the prototype doesn\u2019t hold up on real inputs, neither will production.',
    },
    {
      step: '04',
      title: 'Train it for real.',
      body: 'This is where I\u2019m strongest. Clean architectures, tuned hyperparameters, validated pipelines, and metrics that actually measure real-world success.',
    },
    {
      step: '05',
      title: 'Ship & monitor.',
      body: 'The last 10% is what users feel: graceful failure handling, model monitoring, and the edge case I kill before it kills inference.',
    },
  ],
  education: [
    {
      degree: 'BS in Information Technology',
      school: 'University of Sindh, Jamshoro',
      period: '2025 \u2013 2029',
    },
    {
      degree: 'FSc. Pre-Engineering',
      school: 'Federal Govt. Degree College, Hyd Cantt',
      period: '2022 \u2013 2024',
    },
  ],
  certifications: [
    { title: 'AI & Data Science Training Program', issuer: 'Saylani Mass IT Training', duration: '14 months' },
    { title: 'Introduction to Modern AI', issuer: 'Cisco Networking Academy (NetAcad)' },
    { title: 'Certified Java Developer', issuer: 'People\'s IT Training Programme (PITP)' },
    { title: 'Certified Web Developer', issuer: 'People\'s IT Training Programme (PITP)' },
  ],
  languages: [
    { name: 'English', level: 'Professional Working Proficiency' },
    { name: 'Urdu', level: 'Native' },
  ],
  interests: [
    'Machine Learning & Deep Learning',
    'Data Science & Predictive Analytics',
    'Artificial Intelligence Applications',
    'Data Visualization & BI',
    'Computer Vision',
    'AI-Powered Software Development',
  ],
}

export const projects: Project[] = [
  {
    slug: 'fasalguard',
    title: 'FasalGuard',
    subtitle: 'AI-Powered Crop Disease Detection',
    category: 'Computer Vision · Mobile AI',
    year: '2026',
    client: 'Self-initiated',
    role: 'AI Engineer · Full Stack',
    stack: ['Python', 'YOLOv8', 'ViT', 'FastAPI', 'React Native', 'Groq'],
    status: 'Deployed on HF Spaces',

    showGithub: false,
    liveUrl: 'https://huggingface.co/spaces/azharahmedyzp',
    githubUrl: 'https://github.com/AzharAhmedP/FasalGuard',
    challenge: {
      title: 'Single-stage classifiers failed in the field.',
      body: 'Traditional single-stage classifiers trained on lab images performed poorly on real-world farmer photos with cluttered backgrounds. Splitting the pipeline into detection (crops the leaf) then classification (on the clean crop) boosted accuracy by 14% and made the system viable for field use.',
    },
    performance: [
      { label: 'Classification Accuracy', value: '93%' },
      { label: 'Detection mAP', value: '93%' },
      { label: 'Disease Classes', value: '38' },
      { label: 'Crop Species', value: '13' },
      { label: 'Inference Latency', value: '<2s' },
      { label: 'Pipeline Stages', value: '2' },
    ],
    dataset: [
      { label: 'Detection Dataset', value: '6,000+ images' },
      { label: 'Classification Dataset', value: '87,000+ images' },
      { label: 'Data Sources', value: '2 public datasets' },
      { label: 'Augmentation', value: 'Yes (rotation, flip, crop)' },
    ],
    nextSlug: 'pneumodetect',
    nextTitle: 'PneumoDetect',

    sections: [
      {
        type: 'context',
        title: 'Farmers need a field assistant, not a lab report.',
        body: 'Crop diseases cost farmers millions annually, but diagnosis often requires expert knowledge or sending samples to labs \u2014 slow and inaccessible for most. FasalGuard puts AI-powered diagnosis straight into a farmer\u2019s pocket: point, snap, and get disease identification, severity assessment, and treatment recommendations in seconds.',
      },
      {
        type: 'vision',
        title: 'A pocket lab for every farmer.',
        body: 'Two-stage architecture designed for real-world field conditions. First, YOLOv8 localizes and crops the leaf from a noisy background. Then, a Vision Transformer (ViT) fine-tuned on 87,000+ images classifies 38 disease classes across 13 crop species at 93% accuracy. A Groq-powered LLM chatbot provides conversational follow-up on diagnosis and treatment.',
      },
      {
        type: 'product',
        title: 'Snap. Diagnose. Treat.',
        body: 'The mobile app (React Native) connects to a FastAPI backend deployed on Hugging Face Spaces. Users photograph a leaf, the two-stage pipeline processes it in real-time, and returns disease name, severity assessment, and actionable treatment recommendations. The integrated chatbot provides conversational follow-up for any questions.',
      },
      {
        type: 'architecture',
        title: 'Under the hood.',
        body: 'A sequential detection-then-classification architecture designed for real-world, non-lab images.',
        layers: [
          { name: 'Mobile Client', tech: ['React Native', 'Cross-Platform'], description: 'Cross-platform mobile app for field use with camera integration and real-time results.' },
          { name: 'API Layer', tech: ['FastAPI', 'Python'], description: 'High-performance async API handling image upload, inference orchestration, and chatbot integration.' },
          { name: 'Stage 1 - Detection', tech: ['Object Detection', '6,000+ images'], description: 'Trained on public dataset to localize and crop leaf regions, isolating from background noise.' },
          { name: 'Stage 2 - Classification', tech: ['Vision Transformer', '87,000+ images'], description: 'Fine-tuned on public dataset for 38 disease classes across 13 crop species \u2014 93% accuracy.' },
          { name: 'LLM Chatbot', tech: ['Groq', 'LLM'], description: 'Conversational follow-up on diagnosis, severity, and treatment using Groq-powered LLM.' },
        ],
      },
      {
        type: 'outcome',
        title: 'What it is, in numbers.',
        body: '',
        stats: [
          { label: 'Detection Accuracy', value: '93%' },
          { label: 'Disease Classes', value: '38' },
          { label: 'Crop Species', value: '13' },
          { label: 'Pipeline Stages', value: '2' },
        ],
      },
      ],
  },
  {
    slug: 'pneumodetect',
    title: 'PneumoDetect',
    subtitle: 'Chest X-Ray Pneumonia Detection with ViT',
    category: 'Computer Vision · Healthcare',
    year: '2026',
    client: 'Self-initiated',
    role: 'AI Engineer · Full Stack',
    stack: ['Python', 'ViT', 'Flask', 'Docker', 'Hugging Face'],
    status: 'Live on HF Spaces',

    showLiveDemo: true,
    liveUrl: 'https://huggingface.co/spaces/azharahmedyzp/PneumoDetect',
    githubUrl: 'https://github.com/AzharAhmedP/PneumoDetect',
    challenge: {
      title: 'Balancing speed and medical accuracy.',
      body: 'Medical imaging demands both high accuracy and low latency. Ensemble approaches improve accuracy but add inference time. Switched to a single ViT backbone with global attention, removing traditional preprocessing (CLAHE) entirely \u2014 cutting latency by 40% while maintaining clinical-grade accuracy.',
    },
    performance: [
      { label: 'Model Architecture', value: 'ViT' },
      { label: 'Framework', value: 'Flask + Docker' },
      { label: 'Preprocessing', value: 'None needed' },
      { label: 'UI', value: 'Clinical Grade' },
    ],
    dataset: [
      { label: 'Base Model', value: 'Pre-trained ViT (chest X-ray)' },
      { label: 'Fine-Tuning', value: 'Chest X-Ray dataset' },
      { label: 'Image Type', value: 'Radiographic (X-Ray)' },
    ],
    nextSlug: 'spamshield-bert',
    nextTitle: 'SpamShield',

    sections: [
      {
        type: 'context',
        title: 'Radiology needs a second pair of eyes.',
        body: 'Pneumonia remains one of the leading causes of death worldwide, and chest X-ray interpretation can be subjective and time-consuming. PneumoDetect leverages Vision Transformers to provide instant, AI-powered pneumonia detection from chest X-rays, designed with a clinical-grade interface that puts diagnostics at your fingertips.',
      },
      {
        type: 'vision',
        title: 'A first diagnosis that feels certain.',
        body: 'Two principles guided the build. One: the interface must feel clinical, not gimmicky. Clean, calm, glassmorphism with high-tech scanning effects that inspire confidence. Two: the model must be state-of-the-art. ViT (Vision Transformer) was chosen over traditional CNNs for its ability to capture global context in radiographic images.',
      },
      {
        type: 'product',
        title: 'Upload, scan, diagnose.',
        body: 'The interface offers drag-and-drop X-ray uploads with instant scan previews. Results come back with confidence metrics and probability distribution visualizations, making the model\u2019s reasoning transparent to the clinician.',
      },
      {
        type: 'architecture',
        title: 'Under the hood.',
        body: 'Simplified single-backbone inference pipeline using a Vision Transformer.',
        layers: [
          { name: 'Frontend', tech: ['HTML5', 'CSS3', 'JavaScript'], description: 'Clinical-grade UI with glassmorphism, fluid animations, and scanning effects.' },
          { name: 'Backend', tech: ['Flask', 'Python'], description: 'Optimized Flask backend with streamlined preprocessing pipeline.' },
          { name: 'Model', tech: ['Vision Transformer', 'Hugging Face'], description: 'Fine-tuned ViT model for pneumonia detection. Captures global attention in radiographic data.' },
          { name: 'Runtime', tech: ['Docker', 'HF Spaces'], description: 'Containerized with Docker for portable, reproducible deployment.' },
        ],
      },
      {
        type: 'outcome',
        title: 'Performance metrics.',
        body: '',
        stats: [
          { label: 'Model', value: 'ViT' },
          { label: 'Backend', value: 'Flask' },
          { label: 'Container', value: 'Docker' },
          { label: 'Deploy', value: 'HF Spaces' },
        ],
      },
      ],
  },
  {
    slug: 'spamshield-bert',
    title: 'SpamShield',
    subtitle: 'Email Spam Detection with BERT',
    category: 'NLP · Transformer',
    year: '2026',
    client: 'Self-initiated',
    role: 'AI Engineer · Full Stack',
    stack: ['Python', 'DistilBERT', 'Flask', 'Hugging Face', 'PyTorch'],
    status: 'Live on HF Spaces',

    showLiveDemo: true,
    liveUrl: 'https://huggingface.co/spaces/azharahmedyzp/SpamShield-BERT-HF',
    githubUrl: 'https://github.com/AzharAhmedP/SpamShield-BERT',
    challenge: {
      title: 'Transformer inference on a CPU budget.',
      body: 'BERT models are powerful but typically need a GPU for real-time inference. DistilBERT solved this \u2014 retaining 97% of BERT\u2019s language understanding while running 60% faster on CPU. The challenge was optimizing the sampling strategy during fine-tuning so the dataset trained efficiently on consumer hardware.',
    },
    performance: [
      { label: 'Base Model', value: 'DistilBERT' },
      { label: 'Training Data', value: '190K emails' },
      { label: 'Context Window', value: '2,500 chars' },
      { label: 'Inference', value: 'CPU-ready' },
    ],
    dataset: [
      { label: 'Dataset', value: '190k emails (Spam/Ham)' },
      { label: 'Classes', value: '2 (Spam / Ham)' },
      { label: 'Sample Strategy', value: 'Optimized subset' },
      { label: 'GPU Auto-Detect', value: 'Yes' },
    ],
    nextSlug: 'heart-disease-prediction',
    nextTitle: 'Heart Disease Prediction',

    sections: [
      {
        type: 'context',
        title: 'Spam evolves. Detection must too.',
        body: 'Email spam is more than an annoyance\u2014it\u2019s a gateway for phishing, fraud, and security breaches. Traditional rule-based filters fall short against evolving language patterns. SpamShield brings Transformer-based NLP to email security, fine-tuning DistilBERT on 190,000+ emails for deep contextual understanding.',
      },
      {
        type: 'vision',
        title: 'Accurate, transparent, instant.',
        body: 'Two rules shaped the build. One: predictions must be explainable, not just a flag. Two: speed cannot be sacrificed for accuracy. DistilBERT gives Transformer-grade inference on standard CPUs, making it accessible without specialized hardware.',
      },
      {
        type: 'product',
        title: 'Paste. Detect. Trust.',
        body: 'A single-page dashboard where users paste email text and get instant spam/ham classification with confidence metrics. A scan log tracks session history, and the model analyzes up to 2,500 characters per email to catch subtle linguistic patterns.',
      },
      {
        type: 'architecture',
        title: 'Architecture.',
        body: 'Fine-tuned DistilBERT served through a Flask web application.',
        layers: [
          { name: 'Frontend', tech: ['HTML5', 'CSS3', 'JavaScript'], description: 'Midnight Boutique UI with holographic effects and staggered animations.' },
          { name: 'Backend', tech: ['Flask', 'Python'], description: 'Flask server handling inference, session logging, and model serving with GPU auto-detection.' },
          { name: 'Model', tech: ['DistilBERT', 'Hugging Face'], description: 'Fine-tuned on 190k spam/ham emails with optimized sampling for efficient training.' },
          { name: 'Runtime', tech: ['HF Spaces', 'CPU/GPU'], description: 'Deployed on Hugging Face Spaces with automatic GPU acceleration when available.' },
        ],
      },
      {
        type: 'outcome',
        title: 'In numbers.',
        body: '',
        stats: [
          { label: 'Model', value: 'DistilBERT' },
          { label: 'Training Data', value: '190K' },
          { label: 'Context', value: '2.5K chars' },
          { label: 'Inference', value: 'CPU ready' },
        ],
      },
      ],
  },
  {
    slug: 'heart-disease-prediction',
    title: 'Heart Disease Prediction',
    subtitle: 'ML-Based Cardiovascular Disease Detection',
    category: 'ML · Healthcare Analytics',
    year: '2024',
    client: 'Academic Project',
    role: 'Data Scientist',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
    status: 'Complete',

    liveUrl: 'https://heart-disease-prediction-using-mach-woad.vercel.app',
    githubUrl: 'https://github.com/AzharAhmedP/Heart_Disease_Prediction_Using_Machine_Learning',
    challenge: {
      title: 'Minimizing false negatives in healthcare.',
      body: 'In medical diagnosis, a false negative (missing a sick patient) is far more dangerous than a false positive. The challenge was tuning three models \u2014 Logistic Regression, Decision Tree, Random Forest \u2014 to maximize recall without destroying precision. Random Forest with tuned thresholds struck the best balance.',
    },
    performance: [
      { label: 'Models Compared', value: '3' },
      { label: 'Best Model', value: 'Random Forest' },
      { label: 'Tuning Method', value: 'GridSearchCV' },
      { label: 'Critical Metric', value: 'Recall' },
    ],
    dataset: [
      { label: 'Source', value: 'CVD dataset' },
      { label: 'Features', value: 'Age, BMI, BP, Glucose, etc.' },
      { label: 'Target', value: 'Binary (CVD / No CVD)' },
      { label: 'Preprocessing', value: 'Scaling + Encoding' },
    ],
    nextSlug: 'housing-price-ann',
    nextTitle: 'Housing Price ANN',

    sections: [
      {
        type: 'context',
        title: 'Catching heart disease before it\u2019s too late.',
        body: 'Cardiovascular disease remains one of the leading causes of mortality worldwide. Early prediction using patient health data can significantly improve prevention and treatment outcomes. This project builds and evaluates three ML classification models\u2014Logistic Regression, Decision Tree, and Random Forest\u2014for CVD prediction, emphasizing recall to minimize missed diagnoses.',
      },
      {
        type: 'vision',
        title: 'Data-driven prevention, not reaction.',
        body: 'The project compares traditional and ensemble approaches on a real CVD dataset, with GridSearchCV hyperparameter tuning and a focus on reducing false negatives\u2014the most critical metric in healthcare ML.',
      },
      {
        type: 'product',
        title: 'End-to-end ML pipeline.',
        body: 'The full pipeline: data loading, EDA, preprocessing (encoding, scaling, handling missing values), model training with hyperparameter tuning, and evaluation using Accuracy, Precision, Recall, F1-Score, and Confusion Matrix.',
      },
      {
        type: 'architecture',
        title: 'Stack.',
        body: 'Built entirely in Python with the Scikit-learn ecosystem.',
        layers: [
          { name: 'Analysis', tech: ['Pandas', 'NumPy'], description: 'Data manipulation, cleaning, and descriptive statistics.' },
          { name: 'Visualization', tech: ['Matplotlib', 'Seaborn'], description: 'Statistical visualization and feature importance analysis.' },
          { name: 'Models', tech: ['Scikit-learn'], description: 'Logistic Regression, Decision Tree, Random Forest with GridSearchCV tuning.' },
          { name: 'Environment', tech: ['Jupyter Notebook'], description: 'Interactive development with full documentation and analysis.' },
        ],
      },
      {
        type: 'outcome',
        title: 'Results.',
        body: '',
        stats: [
          { label: 'Models Compared', value: '3' },
          { label: 'Best Performer', value: 'Random Forest' },
          { label: 'Tuning Method', value: 'GridSearchCV' },
          { label: 'Critical Metric', value: 'Recall' },
        ],
      },
      ],
  },
  {
    slug: 'housing-price-ann',
    title: 'Housing Price ANN',
    subtitle: 'California Housing Price Prediction with Deep Learning',
    category: 'Deep Learning · Regression',
    year: '2024',
    client: 'Academic Project',
    role: 'Deep Learning Engineer',
    stack: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Matplotlib'],
    status: 'Complete',

    liveUrl: 'https://california-housing-price-prediction.vercel.app',
    githubUrl: 'https://github.com/AzharAhmedP/California_Housing_Price_Prediction-ANN',
    challenge: {
      title: 'Preventing overfitting on tabular data.',
      body: 'Neural networks on small tabular datasets (20k rows) overfit easily. Dropout (10%) and Early Stopping (patience=10) were essential \u2014 without them the validation loss diverged from training by epoch 50. The final model shows near-identical train/val curves, proof that deep learning can work on structured data with the right regularization.',
    },
    performance: [
      { label: 'Architecture', value: '128-64-1' },
      { label: 'Epochs', value: '200' },
      { label: 'Regularization', value: 'Dropout + Early Stopping' },
      { label: 'Optimizer', value: 'Adam' },
    ],
    dataset: [
      { label: 'Dataset', value: 'California Housing' },
      { label: 'Features', value: '8 (MedInc, HouseAge, etc.)' },
      { label: 'Target', value: 'Median House Price' },
      { label: 'Train/Test Split', value: '80/20' },
    ],
    nextSlug: 'fashion-mnist-cnn',
    nextTitle: 'Fashion MNIST CNN',

    sections: [
      {
        type: 'context',
        title: 'Predicting real estate with neural nets.',
        body: 'Real estate price prediction is a classic regression problem. This project applies a multi-layer Artificial Neural Network to a housing dataset, demonstrating how deep learning captures complex non-linear relationships in tabular data.',
      },
      {
        type: 'vision',
        title: 'Deep learning on structured data.',
        body: 'The goal was to show that ANNs can compete with traditional regression when properly designed\u2014ReLU activations, dropout regularization, early stopping, and the Adam optimizer all contribute to reliable generalization.',
      },
      {
        type: 'product',
        title: 'Neural network pipeline.',
        body: 'Pipeline includes dataset loading from sklearn, feature/target scaling with StandardScaler, a 128-64-1 ANN architecture with dropout, trained for 200 epochs with early stopping, evaluated on MSE.',
      },
      {
        type: 'architecture',
        title: 'Network architecture.',
        body: 'A 3-layer neural network with dropout regularization and early stopping.',
        layers: [
          { name: 'Input', tech: ['8 Features'], description: 'MedInc, HouseAge, AveRooms, AveBedrms, Population, AveOccup, Latitude, Longitude.' },
          { name: 'Hidden 1', tech: ['128 neurons', 'ReLU'], description: 'First dense layer with 10% dropout for regularization.' },
          { name: 'Hidden 2', tech: ['64 neurons', 'ReLU'], description: 'Second dense layer for refined pattern extraction.' },
          { name: 'Output', tech: ['1 neuron', 'Linear'], description: 'Linear activation for continuous regression. Loss: MSE, Optimizer: Adam.' },
        ],
      },
      {
        type: 'outcome',
        title: 'Training results.',
        body: '',
        stats: [
          { label: 'Epochs', value: '200' },
          { label: 'Optimizer', value: 'Adam' },
          { label: 'Regularization', value: 'Dropout' },
          { label: 'Overfitting', value: 'Minimal' },
        ],
      },
      ],
  },
  {
    slug: 'fashion-mnist-cnn',
    title: 'Fashion MNIST CNN',
    subtitle: 'Image Classification with Convolutional Neural Networks',
    category: 'Computer Vision · Deep Learning',
    year: '2024',
    client: 'Academic Project',
    role: 'ML Engineer',
    stack: ['Python', 'TensorFlow', 'Keras'],
    status: 'Complete',

    githubUrl: 'https://github.com/AzharAhmedP/CNN-Based_Image_Recognition_System_using_Flask',
    challenge: {
      title: 'From notebook to production-ready CNN.',
      body: 'The challenge was building a CNN pipeline that works reliably across all 10 clothing categories without overfitting. The solution: alternating Conv2D + MaxPooling layers for hierarchical feature extraction, paired with dropout for regularization. Achieved 90.12% accuracy with only 60k training samples.',
    },
    performance: [
      { label: 'Accuracy', value: '90.12%' },
      { label: 'F1-Score', value: '89.93%' },
      { label: 'Categories', value: '10' },
      { label: 'Training Set', value: '60K images' },
    ],
    dataset: [
      { label: 'Dataset', value: 'Fashion MNIST' },
      { label: 'Train/Test', value: '60K / 10K' },
      { label: 'Image Size', value: '28x28 grayscale' },
      { label: 'Classes', value: '10 clothing types' },
    ],
    nextSlug: 'data-dashboard',
    nextTitle: 'Data Dashboard',

    sections: [
      {
        type: 'context',
        title: 'Teaching machines to see clothes.',
        body: 'A standard clothing classification dataset with 60,000 grayscale images across 10 categories. This project builds a CNN to classify these images, demonstrating fundamental computer vision and deep learning concepts.',
      },
      {
        type: 'vision',
        title: 'CNN fundamentals, production mindset.',
        body: 'The goal was to build a robust CNN pipeline: convolutional and pooling layers for feature extraction, dense layers for classification, with careful evaluation beyond just accuracy.',
      },
      {
        type: 'product',
        title: 'CNN classification pipeline.',
        body: 'A convolutional neural network with feature extraction layers (Conv2D + MaxPooling), dropout for regularization, and dense classification layers. Achieved 90.12% accuracy with an F1-score of 89.93%.',
      },
      {
        type: 'architecture',
        title: 'Network design.',
        body: 'Standard CNN architecture for image classification.',
        layers: [
          { name: 'Input', tech: ['28x28 grayscale'], description: '60,000 training images, 10,000 test images across 10 clothing categories.' },
          { name: 'Feature Extraction', tech: ['Conv2D', 'MaxPooling'], description: 'Alternating convolutional and pooling layers for hierarchical feature learning.' },
          { name: 'Classification', tech: ['Dense', 'Dropout'], description: 'Fully connected layers with dropout regularization.' },
          { name: 'Output', tech: ['10 classes', 'Softmax'], description: '10 clothing categories with softmax activation for probability distribution.' },
        ],
      },
      {
        type: 'outcome',
        title: 'Performance.',
        body: '',
        stats: [
          { label: 'Accuracy', value: '90.12%' },
          { label: 'F1-Score', value: '89.93%' },
          { label: 'Categories', value: '10' },
          { label: 'Training Set', value: '60K' },
        ],
      },
      ],
  },
  {
    slug: 'data-dashboard',
    title: 'Data Dashboard',
    subtitle: 'Interactive EDA & Visualization App',
    category: 'Data Science · Dashboard',
    year: '2024',
    client: 'Self-initiated',
    role: 'Data Scientist · Developer',
    stack: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'Seaborn', 'NumPy'],
    status: 'Complete',

    githubUrl: 'https://github.com/AzharAhmedP/Data_Analysis_and_Visualization_Dashboard',
    challenge: {
      title: 'Making data analysis accessible to non-coders.',
      body: 'The hardest part wasn\u2019t the code \u2014 it was deciding which features to expose and which to automate. Too many options overwhelm users; too few make the tool useless. The sweet spot: upload CSV, auto-generate descriptive stats, offer 6 plot types, handle missing data in one click, and export results. Everything else stays under the hood.',
    },
    performance: [
      { label: 'Plot Types', value: '6' },
      { label: 'Framework', value: 'Streamlit' },
      { label: 'Missing Data', value: 'Auto-handle' },
      { label: 'Export', value: 'CSV Report' },
    ],
    dataset: [
      { label: 'Input', value: 'Any CSV file' },
      { label: 'Visualizations', value: 'Histogram, Bar, Box, Heatmap, Scatter, Pairplot' },
      { label: 'Missing Values', value: 'Detect, Drop, or Fill' },
      { label: 'Report', value: 'Downloadable CSV summary' },
    ],
    sections: [
      {
        type: 'context',
        title: 'Data exploration, no code required.',
        body: 'EDA often means rewriting the same boilerplate for every new dataset. This Streamlit dashboard replaces that with an interactive UI: upload a CSV and instantly get statistics, visualizations, missing-value reports, and downloadable summaries. Built for non-technical users who need insights without writing Python.',
      },
      {
        type: 'vision',
        title: 'Self-service data analysis.',
        body: 'The dashboard turns manual EDA into a self-service tool. Upload any CSV, preview the data, view descriptive stats, generate six types of plots (histogram, bar, box, heatmap, scatter, pairplot), handle missing values, and export a summary report.',
      },
      {
        type: 'product',
        title: 'Your data, analyzed instantly.',
        body: 'Single-page Streamlit app with upload, preview, statistics, 6 visualization types, missing data handling (drop or fill with mean), and CSV report export. All in one clean interface.',
      },
      {
        type: 'architecture',
        title: 'Stack.',
        body: 'Single-page Streamlit app powered by the Python data ecosystem.',
        layers: [
          { name: 'Framework', tech: ['Streamlit'], description: 'Interactive web framework for data dashboards.' },
          { name: 'Analysis', tech: ['Pandas', 'NumPy'], description: 'Data manipulation, statistics, and missing value handling.' },
          { name: 'Visualization', tech: ['Matplotlib', 'Seaborn'], description: '6 plot types: histogram, bar, box, heatmap, scatter, pairplot.' },
          { name: 'Export', tech: ['CSV Download'], description: 'Download summary statistics as a CSV report.' },
        ],
      },
      {
        type: 'outcome',
        title: 'Feature summary.',
        body: '',
        stats: [
          { label: 'Plot Types', value: '6' },
          { label: 'Framework', value: 'Streamlit' },
          { label: 'Missing Data', value: 'Handle' },
          { label: 'Export', value: 'CSV Report' },
        ],
      },
      ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
