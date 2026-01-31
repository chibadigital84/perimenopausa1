import { motion } from 'framer-motion';
import { BookOpen, Video, Infinity } from 'lucide-react';

const bonuses = [
  {
    icon: BookOpen,
    title: 'Ebook de Integração Profunda',
    description: 'Material de apoio ao conteúdo que será ministrado nas aulas.',
    value: 'R$ 49,90'
  },
  {
    icon: Video,
    title: 'Aula Especial "Quando a travessia se torna caminho"',
    description: 'Conexão entre perimenopausa consciente e aprofundamento espiritual. Como continuar sua jornada de autoconsciência com método e sustentação.',
    value: 'R$ 99,00'
  },
  {
    icon: Infinity,
    title: 'Acesso vitalício + atualizações futuras',
    description: 'Assista quando quiser, quantas vezes precisar. Novas aulas e conteúdos adicionados sem custo extra.',
    value: 'R$ 49,90'
  }
];

export const BonusSection = () => {
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
          <p className="font-script text-2xl text-accent mb-4">Presente Especial</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            🎁 Bônus Exclusivos
          </h2>
          <p className="font-body text-muted-foreground">
            Você também vai receber estes presentes ao se inscrever
          </p>
        </motion.div>
        
        {/* Bonus cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={bonus.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="card-bonus group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-gold-soft to-gold flex items-center justify-center glow-gold">
                <bonus.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Badge */}
              <span className="inline-block px-4 py-1 mb-4 text-xs font-body font-medium bg-accent/20 text-accent-foreground rounded-full">
                BÔNUS #{index + 1}
              </span>
              
              {/* Title */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {bonus.title}
              </h3>
              
              {/* Description */}
              <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                {bonus.description}
              </p>
              
              {/* Value */}
              <p className="font-serif text-lg">
                <span className="text-muted-foreground line-through mr-2">{bonus.value}</span>
                <span className="text-primary font-bold">GRÁTIS</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
