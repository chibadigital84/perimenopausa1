import { motion } from 'framer-motion';
import { Check, Clock } from 'lucide-react';

const valueStack = [
  { item: '8 Aulas Transformadoras', value: 'R$ 792,00' },
  { item: 'Bônus #1: Ebook', value: 'R$ 49,90' },
  { item: 'Bônus #2: Aula Especial', value: 'R$ 99,00' },
  { item: 'Bônus #3: Acesso Vitalício', value: 'R$ 49,90' },
];

export const PriceSection = () => {
  return (
    <section id="oferta" className="section-padding gradient-reveal relative overflow-hidden">
      {/* Particles */}
      <div className="absolute inset-0 particles pointer-events-none" />
      
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-script text-2xl text-primary mb-4">Investimento</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Valor Total do Curso
          </h2>
        </motion.div>
        
        {/* Value stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="card-spiritual mb-8"
        >
          {valueStack.map((item, index) => (
            <div 
              key={item.item}
              className="flex justify-between items-center py-3 border-b border-border last:border-0"
            >
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="font-body text-foreground">{item.item}</span>
              </div>
              <span className="font-body text-muted-foreground line-through">{item.value}</span>
            </div>
          ))}
          
          <div className="flex justify-between items-center py-4 mt-4 border-t-2 border-primary/20">
            <span className="font-serif text-xl font-semibold text-foreground">VALOR TOTAL</span>
            <span className="font-serif text-xl text-muted-foreground line-through">R$ 990,80</span>
          </div>
        </motion.div>
        
        {/* Special offer card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="card-price text-center"
        >
          <div className="inline-block px-6 py-2 mb-6 bg-accent rounded-full">
            <span className="font-body font-semibold text-accent-foreground">
              ✨ OFERTA ESPECIAL ✨
            </span>
          </div>
          
          <p className="font-body text-lg text-muted-foreground mb-2">
            Não vai pagar R$ 990,80
          </p>
          <p className="font-body text-lg text-muted-foreground mb-2">
            Nem R$ 500... Nem R$ 250...
          </p>
          
          <div className="my-8">
            <p className="font-serif text-2xl text-foreground mb-2">Investimento de lançamento:</p>
            <p className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-spiritual">
              12x de R$ 10
            </p>
            <p className="font-serif text-2xl text-muted-foreground mt-4">
              ou <span className="text-foreground font-bold">R$ 97</span> à vista
            </p>
          </div>
          
          <p className="font-body text-muted-foreground mb-8">
            Menos de R$ 3,50 por dia para transformar sua relação com a perimenopausa.
          </p>
          
          {/* CTA Button */}
          <motion.a
            href="https://pay.kiwify.com.br/60PbV9F"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-cta inline-block mb-8"
          >
            🌸 QUERO COMEÇAR MINHA TRAVESSIA
          </motion.a>
          
          {/* Urgency */}
          <div className="flex items-center justify-center gap-3 p-4 bg-rose-soft/50 rounded-xl">
            <Clock className="w-5 h-5 text-primary animate-pulse" />
            <p className="font-body text-sm text-foreground">
              <strong>OFERTA POR TEMPO LIMITADO:</strong> Preço exclusivo para as primeiras 100 mulheres. 
              <span className="text-primary font-semibold"> Já temos 45% das vagas preenchidas.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceSection;
