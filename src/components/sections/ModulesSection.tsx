import { motion } from 'framer-motion';
import { Sparkles, Heart, BookHeart, Flower2, Wind, Sun, Users, Crown } from 'lucide-react';

const modules = [
  {
    number: 1,
    icon: Sparkles,
    title: 'Este não é o fim: é um portal',
    topics: [
      'Ressignifique a perimenopausa como uma transição positiva',
      'Entenda por que tantas mulheres se sentem "perdidas"',
      'Descubra a visão espiritual da transição feminina'
    ]
  },
  {
    number: 2,
    icon: Heart,
    title: 'O corpo fala: hormônios, emoções e sensibilidade',
    topics: [
      'Como hormônios instáveis impactam mood, ansiedade e sono',
      'Por que sua sensibilidade emocional aumentou',
      'A diferença entre "estar desequilibrada" e "estar em transição"'
    ]
  },
  {
    number: 3,
    icon: BookHeart,
    title: 'Emoções sem julgamento: acolher para transformar',
    topics: [
      'Pare de se julgar e comece a se escutar',
      'Emoções como mensageiras (não inimigas)',
      'Diário emocional como ferramenta de clareza'
    ]
  },
  {
    number: 4,
    icon: Flower2,
    title: 'Ritual diário de autocuidado',
    topics: [
      'Por que pequenos rituais mudam seu estado emocional',
      'Autocuidado como ato de maturidade (não egoísmo)',
      'Exemplos práticos de rituais de 5-15 minutos'
    ]
  },
  {
    number: 5,
    icon: Wind,
    title: 'A mente desacelera quando o corpo respira',
    topics: [
      'Regule seu sistema nervoso e diminua ondas de calor',
      'Como mindfulness atua no corpo hormonal',
      'Técnicas para melhorar sono e humor'
    ]
  },
  {
    number: 6,
    icon: Sun,
    title: 'Espiritualidade madura: conexão sem culpa',
    topics: [
      'Reconecte-se à sua espiritualidade interna',
      'Menos busca externa, mais escuta interna',
      'Intuição, ciclos, silêncio e sabedoria corporal'
    ]
  },
  {
    number: 7,
    icon: Users,
    title: 'Não atravessamos sozinhas',
    topics: [
      'Por que o isolamento agrava sintomas emocionais',
      'A importância das trocas femininas na maturidade',
      'Como criar conexões autênticas'
    ]
  },
  {
    number: 8,
    icon: Crown,
    title: 'A nova mulher que está nascendo',
    topics: [
      'Integre tudo o que aprendeu',
      'Defina quem você é agora e o que quer sustentar',
      'Conquiste autonomia emocional, espiritual e corporal'
    ]
  }
];

export const ModulesSection = () => {
  return (
    <section className="section-padding gradient-section-light">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-script text-2xl text-primary mb-4">Conteúdo do Curso</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            8 Aulas Transformadoras
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Cada módulo foi cuidadosamente criado para guiar você em sua jornada de autoconhecimento e transformação.
          </p>
        </motion.div>
        
        {/* Modules grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-module group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Module number */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <module.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-script text-lg text-primary">Módulo {module.number}</span>
              </div>
              
              {/* Title */}
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4 leading-tight">
                {module.title}
              </h3>
              
              {/* Topics */}
              <ul className="space-y-2">
                {module.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                    <span className="text-accent mt-0.5">✦</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
