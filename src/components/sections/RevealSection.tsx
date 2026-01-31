import { motion } from 'framer-motion';
import womanEmergingImage from '@/assets/woman-emerging-light.jpg';

export const RevealSection = () => {
  return (
    <section className="relative gradient-reveal section-padding overflow-hidden">
      {/* Particles effect */}
      <div className="absolute inset-0 particles pointer-events-none" />
      
      <div className="container-wide relative z-10">
        {/* Main revelation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl text-primary mb-6">
            A VERDADE que ninguém te contou:
          </h2>
          <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight max-w-4xl mx-auto">
            Seu corpo não está falhando.
            <br />
            <span className="text-gradient-spiritual">Ele está se reorganizando.</span>
          </p>
        </motion.div>
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="glow-soft rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80">
            <img 
              src={womanEmergingImage} 
              alt="Mulher emergindo como luz" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        {/* Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="container-narrow text-center"
        >
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            O motivo lógico e biológico por trás de tudo isso é que você entrou no 
            <strong className="text-foreground"> portal da Perimenopausa</strong>. 
            A partir dos 40, seu corpo não está apenas mudando hormônios — 
            ele está reorganizando sua psique, sua energia e sua sensibilidade.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {['Não é uma doença.', 'Não é um defeito.', 'Não é o fim.'].map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="card-spiritual text-center"
              >
                <p className="font-serif text-xl text-foreground">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="card-price max-w-xl mx-auto"
          >
            <p className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              É uma <span className="text-gradient-gold font-bold">travessia</span>.
            </p>
            <p className="font-body text-muted-foreground">
              Uma passagem da mulher que você foi → para a mulher que está emergindo.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="container-narrow mt-12"
        >
          <p className="font-body text-lg text-center text-muted-foreground mb-8">
            E quando você compreende o que está acontecendo no seu corpo, emoções e energia...
            <br />Quando você acolhe essa transição em vez de lutar contra ela...
            <br />Quando você se conecta com algo maior do que apenas sintomas físicos...
          </p>
          
          <div className="flex flex-col items-center gap-4 mb-10">
            {['A ansiedade diminui.', 'A irritação dá lugar à clareza.', 'O caos interno se organiza.'].map((text, index) => (
              <motion.p
                key={text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                viewport={{ once: true }}
                className="font-serif text-xl md:text-2xl text-foreground"
              >
                ✨ {text}
              </motion.p>
            ))}
          </div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              href="https://pay.kiwify.com.br/60PbV9F"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-cta inline-block"
            >
              🌸 Quero atravessar consciente
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevealSection;
