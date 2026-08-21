import ScrollReveal from '@/components/ui/ScrollReveal'

const stack = [
  { category: 'Core', items: ['Python', 'SQL', 'Java', 'C++', 'Git/GitHub'] },
  { category: 'ML', items: ['Scikit-learn', 'XGBoost', 'LightGBM', 'GridSearchCV'] },
  { category: 'Deep Learning', items: ['PyTorch', 'TensorFlow', 'Keras', 'CNN', 'RNN/LSTM', 'Transfer Learning'] },
  { category: 'NLP / LLM', items: ['Hugging Face', 'BERT', 'Transformers', 'LangChain', 'RAG', 'Groq'] },
  { category: 'Computer Vision', items: ['OpenCV', 'YOLO', 'ViT', 'Object Detection', 'Image Classification'] },
  { category: 'Deployment', items: ['FastAPI', 'Flask', 'Docker', 'Hugging Face Spaces', 'Streamlit'] },
]

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-10 py-24 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-mono text-neutral-600 mb-8 tracking-widest uppercase">Stack</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900">
          {stack.map((group, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="bg-black p-8 h-full hover:bg-neutral-950 transition-colors duration-300">
                <span className="text-xs font-mono text-neutral-700">0{i + 1}</span>
                <h3 className="text-base font-bold text-white mt-6 mb-5 tracking-wide">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="text-[10px] font-mono text-neutral-500 border border-neutral-800 px-2.5 py-1 rounded hover:border-neutral-600 hover:text-neutral-300 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
