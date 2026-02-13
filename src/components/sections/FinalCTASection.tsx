import { motion } from 'framer-motion';
import rodaImage from '@/assets/roda.jpg';
import mulheresImage from '@/assets/mulheres-diversas.png';

export const FinalCTASection = () => {
  return (
    <section className="relative gradient-hero section-padding overflow-hidden">
      {/* Background roda image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${rodaImage})` }}
      />
      
      {/* Mist overlay */}
      <div className="absolute inset-0 mist-overlay pointer-events-none" />
      
      {/* Light particles */}
      <div className="absolute inset-0 particles pointer-events-none" />
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="font-script text-2xl text-primary mb-6">Sua Escolha</p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
              A pergunta não é <span className="text-gradient-spiritual">SE</span> você vai atravessar a perimenopausa.
              <br />
              A pergunta é <span className="text-gradient-gold">COMO</span>.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { question: 'No caos...', answer: '...ou na consciência?' },
                { question: 'Na luta...', answer: '...ou no acolhimento?' },
                { question: 'Sozinha...', answer: '...ou amparada?' }
              ].map((item, index) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-spiritual text-center"
                >
                  <p className="font-serif text-base text-muted-foreground">{item.question}</p>
                  <p className="font-serif text-lg text-primary font-semibold">{item.answer}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="font-body text-lg text-muted-foreground">
                Compreender o que está acontecendo com você.
                <br />Acolher suas emoções sem julgamento.
                <br />Reconectar-se com seu corpo e sua espiritualidade.
                <br />Atravessar essa fase com consciência, leveza e poder.
                <br />Emergir como a mulher que você está se tornando.
              </p>
              
              <motion.a
                href="https://pay.kiwify.com.br/KZs1cRv"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-cta inline-block text-xl md:text-2xl px-12 py-6"
              >
                🌸 COMECE SUA TRAVESSIA AGORA
              </motion.a>
              
              <p className="font-body text-sm text-muted-foreground">
                Garantia de 7 dias • Acesso vitalício • Suporte humanizado
              </p>
            </motion.div>
          </motion.div>
          
          {/* Roda image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="rounded-3xl overflow-hidden glow-soft">
              <img 
                src={mulheresImage} 
                alt="Diversidade de mulheres unidas"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Lotus flower decoration */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-8xl opacity-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        🌸
      </motion.div>
    </section>
  );
};

export default FinalCTASection;
