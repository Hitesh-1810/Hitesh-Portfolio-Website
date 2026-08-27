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
  }
];

export function Projects() {
  return (
    <section id="work" className="py-16 md:py-32 bg-charcoal text-white border-t border-white/5">
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
