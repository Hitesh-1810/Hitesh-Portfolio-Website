import React from 'react';

const projects = [
  {
    id: '01',
    title: 'Intellifarm+: AI Crop Planner, Disease Detection & Market Price Forecaster',
    subtitle: 'Integrated Agricultural Decision Support System',
    image: '/Intellifarm project.jpg', 
    problem: 'Agricultural decision-making involves multiple complex factors—climate, soil, market dynamics, and crop health. Relying on traditional methods often results in suboptimal yield and financial loss.',
    solution: 'An integrated AI-based decision support system designed to provide real-time, data-driven recommendations across the entire agricultural lifecycle.',
    modules: ['Crop Recommendation', 'Disease Detection', 'Market Price Forecasting', 'Weather Forecasting', 'AI Assistant', 'Nearby Shop Finder'],
    technologies: ['Random Forest', 'DenseNet CNN', 'LSTM', 'Gemini 2.5 Flash', 'OpenWeatherMap', 'Google Maps'],
    architecture: ['User Inputs', 'Agri & Env Data', 'AI Models (CNN, LSTM, RF)', 'Predictions', 'Decision Support']
  },
  {
    id: '02',
    title: 'Content-Based Movie Recommendation System',
    subtitle: 'Personalized Cinematic Discoveries via NLP',
    image: '/Content Based Movie.jpg',
    problem: 'With thousands of movies available, users experience decision fatigue. Traditional collaborative filtering fails on new users and often ignores the actual plot and themes of the movie.',
    solution: 'A content-based recommendation engine utilizing Natural Language Processing (NLP) to analyze movie metadata, genres, and plots, delivering highly personalized suggestions.',
    modules: ['Data Preprocessing', 'Feature Extraction (TF-IDF/CountVectorizer)', 'Cosine Similarity Matrix', 'Recommendation Engine', 'Interactive UI'],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'NLTK', 'Streamlit'],
    architecture: ['User Selects Movie', 'Text Vectorization', 'Compute Similarity', 'Rank Matches', 'Display Recommendations']
  },
  {
    id: '03',
    title: 'Car Object Detection',
    subtitle: 'Deep Learning for Automated Vehicle Identification',
    image: '/car object detect.jpg',
    problem: 'Manual monitoring of traffic and vehicle counting is labor-intensive and error-prone, requiring robust automated systems capable of operating in various lighting and weather conditions.',
    solution: 'A deep learning-based computer vision model that accurately detects and tracks cars in real-time from images and video feeds using advanced convolutional neural networks.',
    modules: ['Dataset Augmentation', 'Transfer Learning', 'Bounding Box Regression', 'Non-Maximum Suppression', 'Real-time Inference'],
    technologies: ['Python', 'TensorFlow/Keras', 'OpenCV', 'YOLO/SSD', 'NumPy'],
    architecture: ['Input Image/Video', 'CNN Feature Extraction', 'Region Proposals', 'Classification', 'Output Visualization']
  },
  {
    id: '04',
    title: 'Satellite-Based Environmental Index Mapping',
    subtitle: 'Geospatial Analysis of the Godavari Basin',
    image: '/satelite based godavari.jpg',
    problem: 'Monitoring large-scale environmental changes, deforestation, and water bodies across massive river basins is impossible through ground surveys alone.',
    solution: 'A geospatial pipeline that processes multispectral satellite imagery to automatically compute critical environmental indices, providing actionable insights into ecological health.',
    modules: ['Satellite Imagery Acquisition', 'Band Math Operations', 'Index Calculation (NDVI, NDWI, BSI)', 'Geospatial Masking', 'Visual Mapping'],
    technologies: ['Python', 'Rasterio', 'EarthPy', 'NumPy', 'Matplotlib'],
    architecture: ['Sentinel-2 Imagery', 'Multispectral Processing', 'Compute Indices', 'Color Mapping', 'Environmental Insights']
  },
  {
    id: '05',
    title: 'Sentiment Analysis System',
    subtitle: 'Opinion Mining for Customer Feedback',
    image: '/sentiment analysis.jpg',
    problem: 'Businesses struggle to manually process thousands of customer reviews to gauge public opinion, leading to slow response times and missed insights.',
    solution: 'An NLP-powered sentiment analysis tool that automatically classifies textual feedback into positive, negative, or neutral categories with high accuracy.',
    modules: ['Text Tokenization', 'Stopword Removal', 'Vectorization', 'Sentiment Classification'],
    technologies: ['Python', 'NLTK', 'Scikit-learn', 'TF-IDF', 'Naive Bayes'],
    architecture: ['Raw Text Data', 'Preprocessing', 'Feature Extraction', 'Model Prediction', 'Sentiment Output']
  },
  {
    id: '06',
    title: 'Iris Flower Classification',
    subtitle: 'Botanical Species Identification',
    image: '/Iris Flower.jpg',
    problem: 'Classifying plant species manually requires expert botanical knowledge and is prone to human error when dealing with very similar species.',
    solution: 'A machine learning model trained on the classic Iris dataset to classify flowers into their precise species based on sepal and petal dimensions.',
    modules: ['Data Exploration', 'Feature Scaling', 'Model Training', 'Evaluation'],
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn', 'SVM'],
    architecture: ['Input Dimensions', 'Data Normalization', 'Classification Model', 'Species Prediction']
  },
  {
    id: '07',
    title: 'Diabetes Prediction Model',
    subtitle: 'Early Diagnostic Tool for Healthcare',
    image: '/Diabetes-Prediction.jpg',
    problem: 'Early detection of diabetes is critical for effective treatment, but identifying at-risk patients from large volumes of medical data is challenging.',
    solution: 'A predictive analytics system that evaluates patient medical metrics (like glucose levels, BMI, and age) to forecast the likelihood of developing diabetes.',
    modules: ['Data Imputation', 'Outlier Handling', 'Binary Classification', 'Risk Scoring'],
    technologies: ['Python', 'Scikit-learn', 'Logistic Regression', 'Random Forest'],
    architecture: ['Patient Medical Data', 'Data Cleaning', 'ML Classification', 'Diagnostic Alert']
  },
  {
    id: '08',
    title: 'Wine Quality Prediction',
    subtitle: 'Physicochemical Analysis & Grading',
    image: '/Wine prediction.jpg',
    problem: 'Determining the quality of wine traditionally requires expert sommeliers and time-consuming tasting sessions, which is not scalable for production.',
    solution: 'A regression and classification model that predicts wine quality scores strictly based on objective physicochemical tests (acidity, pH, alcohol content, etc.).',
    modules: ['Correlation Analysis', 'Data Balancing', 'Regression Modeling', 'Quality Categorization'],
    technologies: ['Python', 'NumPy', 'Pandas', 'XGBoost', 'Decision Trees'],
    architecture: ['Chemical Properties Input', 'Feature Engineering', 'Predictive Model', 'Quality Grade']
  },
  {
    id: '09',
    title: 'Color Recognition System',
    subtitle: 'Automated RGB and Color Name Detection',
    image: '/color recognition.jpg',
    problem: 'Accurately identifying and naming specific colors from digital images is difficult for visually impaired users or automated sorting systems.',
    solution: 'A computer vision application that processes image pixels and maps RGB values to their closest human-readable color names using a predefined dataset.',
    modules: ['Image Processing', 'RGB Extraction', 'Distance Calculation', 'Interactive UI'],
    technologies: ['Python', 'OpenCV', 'Pandas', 'NumPy'],
    architecture: ['Input Image', 'User Click Event', 'Extract RGB Values', 'Display Color Name']
  },
  {
    id: '10',
    title: 'Car Price Prediction Engine',
    subtitle: 'Market Value Estimation for Used Vehicles',
    image: '/Car Price Prediction.jpg',
    problem: 'The used car market is highly volatile, making it difficult for buyers and sellers to determine a fair market price based on historical data.',
    solution: 'A machine learning regression tool that analyzes features like mileage, brand, year, and fuel type to accurately estimate the current market value of a vehicle.',
    modules: ['Categorical Encoding', 'EDA', 'Model Training', 'Error Metric Evaluation'],
    technologies: ['Python', 'Scikit-learn', 'Linear Regression', 'Random Forest'],
    architecture: ['Vehicle Specifications', 'Data Preprocessing', 'Regression Model', 'Price Estimation']
  },
  {
    id: '11',
    title: 'Email Spam Filtering',
    subtitle: 'Automated Threat and Junk Mail Detection',
    image: '/email spam filter.jpg',
    problem: 'The exponential growth of unsolicited spam and phishing emails wastes user time and poses significant security threats to personal networks.',
    solution: 'A text-classification model that uses natural language processing to analyze email content and metadata, distinguishing between legitimate and spam messages.',
    modules: ['Text Cleaning', 'Word Embeddings', 'Spam Classification', 'False-Positive Tuning'],
    technologies: ['Python', 'NLTK', 'Scikit-learn', 'Naive Bayes'],
    architecture: ['Incoming Email Text', 'NLP Vectorization', 'Spam Classifier Model', 'Inbox Routing']
  },
  {
    id: '12',
    title: 'Fake News Classification',
    subtitle: 'Misinformation Detection via NLP',
    image: '/fake news classification.jpg',
    problem: 'The rapid spread of misinformation and unverified news articles on social media platforms causes public confusion and manipulation.',
    solution: 'An AI-driven fact-checking assistant that parses news headlines and article bodies to classify the content as reliable or fake based on linguistic patterns.',
    modules: ['Text Normalization', 'Deep Learning Classification', 'Probability Scoring'],
    technologies: ['Python', 'TensorFlow/Keras', 'LSTM', 'NLTK'],
    architecture: ['Article Text', 'Sequential Word Processing', 'Deep Neural Network', 'Authenticity Score']
  },
  {
    id: '13',
    title: 'Handwritten Digit Recognition',
    subtitle: 'Optical Character Recognition using CNNs',
    image: '/handwritten digit recognition.jpg',
    problem: 'Digitizing handwritten documents requires robust Optical Character Recognition (OCR) systems that can handle immense variations in human handwriting.',
    solution: 'A deep learning model trained on the MNIST dataset using Convolutional Neural Networks to achieve near-human accuracy in recognizing handwritten digits.',
    modules: ['Image Grayscaling', 'Convolutional Layers', 'Softmax Classification'],
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    architecture: ['Handwritten Input Image', 'CNN Feature Extraction', 'Dense Layers', 'Digit Classification Output']
  }
];

export function Projects() {
  return (
    <section id="work" className="py-12 md:py-20 bg-charcoal text-white border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-12 md:mb-24">
          <h2 className="text-xl md:text-2xl tracking-[0.2em] uppercase font-bold text-accent mb-4">PROJECTS</h2>
          <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-serif leading-[1.1] text-white">
            Featured Projects.
          </h3>
        </div>

        <div className="space-y-16 md:space-y-32">
          {projects.map((project) => (
            <div key={project.id} className="group relative border-t border-white/10 pt-16">
              
              <div className="flex flex-col lg:flex-row gap-16">
                {/* Left Column: Image & Abstract */}
                <div className="lg:w-1/2 flex flex-col">
                  <div className="mb-10">
                    <div className="text-accent font-serif text-2xl mb-4">{project.id}</div>
                    <h4 className="text-3xl md:text-5xl font-serif text-white mb-4 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h4>
                    {project.subtitle && (
                      <p className="text-xl text-white/70 font-light">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 mt-auto">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="lg:w-1/2 flex flex-col justify-center space-y-12">
                  
                  {/* Problem & Solution */}
                  <div className="space-y-8">
                    <div>
                      <h5 className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-3">Problem</h5>
                      <p className="text-base text-white/70 leading-relaxed border-l border-white/20 pl-4 text-justify">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h5 className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-3">Solution</h5>
                      <p className="text-base text-white/70 leading-relaxed border-l border-white/20 pl-4 text-justify">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Core Modules & Tech */}
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-4">Core Modules</h5>
                      <ul className="space-y-2">
                        {project.modules.map((module, i) => (
                          <li key={i} className="text-sm text-white/80 font-light flex items-center gap-2">
                            <span className="w-1 h-1 bg-accent rounded-full shrink-0"></span>
                            {module}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-4">Technologies Stack</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded-sm text-xs font-medium text-white/80">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Concise System Architecture Flow */}
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h5 className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-4">System Architecture Flow</h5>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.architecture.map((step, i) => (
                        <React.Fragment key={i}>
                          <span className={`text-xs font-medium px-3 py-1.5 rounded-md ${i === project.architecture.length - 1 ? 'bg-accent/20 text-accent border border-accent/30' : 'bg-white/5 text-white/80 border border-white/10'}`}>
                            {step}
                          </span>
                          {i < project.architecture.length - 1 && (
                            <span className="text-accent/50 text-xs">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
