import { motion } from 'framer-motion';
import { Moon, Zap, Heart, Brain } from 'lucide-react';

const symptoms = [
  {
    icon: Moon,
    title: 'Sono Perturbado',
    description: 'Você acorda de manhã e já se sente exausta, mesmo depois de dormir.'
  },
  {
    icon: Zap,
    title: 'Irritabilidade',
    description: 'Sua paciência evaporou — coisas pequenas te irritam de um jeito que nunca aconteceu antes.'
  },
  {
    icon: Heart,
    title: 'Desconexão',
    description: 'Olha no espelho e não reconhece mais a mulher que vê: cansada, distante de si mesma.'
  },
  {
    icon: Brain,
    title: 'Ansiedade',
    description: 'Tem dias em que sente uma tristeza sem causa aparente, ou uma ansiedade que não existia antes.'
  }
];

export const ProblemSection = () => {
  return (
    <section className="gradient-section-light section-padding">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Você se reconhece aqui?
          </h2>
          <div className="lotus-divider">
            <span className="text-primary text-2xl">🌸</span>
          </div>
        </motion.div>
        
        {/* Symptoms grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {symptoms.map((symptom, index) => (
            <motion.div
              key={symptom.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-spiritual flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <symptom.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {symptom.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {symptom.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional pain points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container-narrow"
        >
          <div className="card-spiritual bg-secondary/30">
            <p className="font-body text-muted-foreground mb-4 leading-relaxed">
              Sua libido desapareceu, seu sono virou uma batalha, e você se sente desconectada do próprio corpo.
            </p>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              <strong>Pior:</strong> você ouve que "é normal", que "faz parte da idade"... mas nada disso parece normal pra você.
            </p>
            
            <h4 className="font-serif text-xl font-semibold text-foreground mb-4">
              E aí começa o ciclo:
            </h4>
            <ul className="space-y-3 font-body text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Você busca ajuda médica. Te oferecem reposição hormonal (às vezes funciona, às vezes não).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Você pesquisa na internet. Encontra dietas milagrosas, suplementos caros e informações contraditórias.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Você tenta "se controlar". Mas quanto mais tenta, mais sente que algo está fora de controle.</span>
              </li>
            </ul>
            
            <div className="mt-8 p-6 bg-rose-soft/50 rounded-2xl border border-primary/10">
              <p className="font-serif text-xl md:text-2xl text-center text-foreground italic">
                "Eu vou me sentir assim para sempre?"
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="mt-8 text-center">
              <motion.a
                href="https://pay.kiwify.com.br/KZs1cRv"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-cta inline-block"
              >
                🌸 Existe um caminho diferente
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
