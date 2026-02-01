import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import quebradaImage from '@/assets/quebrada.jpg';

const notForYou = [
  'Você busca uma solução mágica que resolva tudo sem esforço',
  'Você quer apenas informações médicas técnicas (procure um endocrinologista)',
  'Você não está disposta a olhar para dentro e fazer o trabalho emocional',
  'Você prefere culpar a idade, os hormônios ou a vida — em vez de se empoderar'
];

const forYou = [
  'Você está cansada de se sentir refém dos sintomas',
  'Você sente que há algo mais profundo acontecendo (e não é só físico)',
  'Você quer se reconectar consigo mesma — corpo, mente e espírito',
  'Você deseja atravessar essa fase com consciência e dignidade',
  'Você está pronta para se tornar a mulher que está emergindo'
];

export const ForWhoSection = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${quebradaImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-lilac-soft/30" />
      
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-script text-2xl text-primary mb-4">Seja honesta comigo (e com você)</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Você se reconhece aqui?
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Not for you */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-spiritual bg-rose-soft/40 border border-rose/20 backdrop-blur-sm"
          >
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <X className="w-6 h-6 text-destructive" />
              Este curso NÃO é para você se:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3 font-body text-muted-foreground">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* For you */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="card-spiritual bg-lilac-soft/40 border border-primary/20 backdrop-blur-sm"
          >
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-primary" />
              Este curso É para você se:
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3 font-body text-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
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
            🌸 Sim, este curso é para mim!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ForWhoSection;
