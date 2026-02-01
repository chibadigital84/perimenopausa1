import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Finalmente entendi que não estou 'ficando louca'. Achei que estava perdendo o controle da minha vida. O curso me mostrou que eu estava apenas em transição. Mudou tudo.",
    name: 'Maria',
    age: '47 anos',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop&crop=face'
  },
  {
    quote: "Voltei a me sentir inteira. As ondas de calor continuam, mas agora eu as vejo de outra forma. Aprendi a respirar, a me acolher. Meu marido notou a diferença.",
    name: 'Cláudia',
    age: '52 anos',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face'
  },
  {
    quote: "Não é só sobre hormônios. É sobre quem eu sou. Esperava dicas práticas (e recebi), mas ganhei muito mais: reconexão comigo mesma, com minha espiritualidade, com meu corpo.",
    name: 'Fernanda',
    age: '44 anos',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face'
  },
  {
    quote: "Depois de meses me sentindo estranha no meu próprio corpo, encontrei acolhimento e clareza. Hoje sei que não preciso 'voltar a ser quem eu era'. Estou me tornando quem eu sempre fui.",
    name: 'Regina',
    age: '49 anos',
    image: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=200&h=200&fit=crop&crop=face'
  },
  {
    quote: "Chorei assistindo as aulas. Não de tristeza, mas de alívio. Finalmente alguém me entendeu. A Anis fala com uma profundidade que me tocou na alma.",
    name: 'Sandra',
    age: '51 anos',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face'
  },
  {
    quote: "Minha filha disse que sou outra pessoa. Mais calma, mais presente. Eu digo que sou a mesma — só que agora me conheço melhor. Gratidão eterna por esse curso.",
    name: 'Luciana',
    age: '46 anos',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face'
  },
  {
    quote: "Passei anos tentando 'consertar' o que estava errado. O curso me ensinou que não há nada para consertar — há muito para compreender e honrar.",
    name: 'Patrícia',
    age: '53 anos',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face'
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
        
        {/* Testimonials grid - 7 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://pay.kiwify.com.br/KZs1cRv"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-cta inline-block"
          >
            🌸 Quero minha transformação também
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
