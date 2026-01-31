import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Finalmente entendi que não estou 'ficando louca'. Achei que estava perdendo o controle da minha vida. O curso me mostrou que eu estava apenas em transição. Mudou tudo.",
    name: 'Maria',
    age: '47 anos',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=200&fit=crop&crop=face'
  },
  {
    quote: "Voltei a me sentir inteira. As ondas de calor continuam, mas agora eu as vejo de outra forma. Aprendi a respirar, a me acolher. Meu marido notou a diferença.",
    name: 'Cláudia',
    age: '52 anos',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face'
  },
  {
    quote: "Não é só sobre hormônios. É sobre quem eu sou. Esperava dicas práticas (e recebi), mas ganhei muito mais: reconexão comigo mesma, com minha espiritualidade, com meu corpo.",
    name: 'Fernanda',
    age: '44 anos',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face'
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-script text-2xl text-primary mb-4">Depoimentos</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            O que mulheres como você estão dizendo
          </h2>
        </motion.div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="card-testimonial"
            >
              {/* Quote mark */}
              <span className="quote-mark">"</span>
              
              {/* Quote text */}
              <p className="font-body text-foreground leading-relaxed mb-6 -mt-8">
                {testimonial.quote}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-secondary"
                />
                <div>
                  <p className="font-serif font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.age}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
