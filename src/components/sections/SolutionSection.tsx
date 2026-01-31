import { motion } from 'framer-motion';
import { PlayCircle, BookOpen, Users } from 'lucide-react';

const features = [
  {
    icon: PlayCircle,
    title: '8 Aulas em Vídeo',
    description: 'Conteúdo transformador para assistir no seu ritmo'
  },
  {
    icon: BookOpen,
    title: 'Ebook de Integração',
    description: 'Material de apoio para aprofundar o aprendizado'
  },
  {
    icon: Users,
    title: 'Comunidade Feminina',
    description: 'Conexão e apoio de mulheres na mesma jornada'
  }
];

export const SolutionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-script text-2xl text-primary mb-4">A Solução</p>
        </motion.div>
        
        {/* Main course card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="card-price max-w-4xl mx-auto mb-12"
        >
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              PERIMENOPAUSA CONSCIENTE
            </h2>
            <p className="font-serif text-xl md:text-2xl text-primary mb-6">
              A travessia psicoemocional e espiritual da mulher 40+
            </p>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Um curso online completo para você compreender o que está acontecendo com seu corpo, 
              emoções e energia — e atravessar a perimenopausa com consciência, autonomia, leveza e conexão espiritual.
            </p>
          </div>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Promise points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {['Sem medicalizar demais', 'Sem dogmas religiosos', 'Sem soluções superficiais'].map((text, index) => (
            <div 
              key={text}
              className="px-6 py-3 bg-secondary/50 rounded-full font-body text-muted-foreground"
            >
              ✓ {text}
            </div>
          ))}
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="font-serif text-xl text-center text-foreground mt-8 mb-8"
        >
          Apenas clareza, acolhimento e transformação real.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
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
            🌸 Quero começar minha transformação
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
