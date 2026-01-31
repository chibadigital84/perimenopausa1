import { motion } from 'framer-motion';
import mentorImage from '@/assets/mentor-anis.jpg';

export const MentorSection = () => {
  return (
    <section className="section-padding gradient-reveal">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-script text-2xl text-primary mb-4">Sua Mentora</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Quem vai te guiar nessa travessia
          </h2>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="golden-frame">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-muted">
                <img 
                  src={mentorImage} 
                  alt="Anis - Terapeuta e Mentora" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-script text-3xl text-primary mb-4">Anis</h3>
            <p className="font-serif text-xl text-foreground mb-4">
              Terapeuta breve, integrativa e sistêmica e mestra de espiritualidade feminina.
            </p>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Idealizadora da <strong className="text-foreground">Escola DESPERTA</strong>, 
                lugar de estudar, curar e viver a Alma Feminina, onde facilito grupos de estudo, 
                vivências e mentorias, orientando mulheres com o chamado forte para despertarem 
                seu feminino e viverem essa energia com profundidade e toda sua Espiritualidade, 
                sem conexões religiosas.
              </p>
              <p>
                Para mim, toda dor da alma é urgente e não pode ser julgada e sim acolhida. 
                Só você sabe a dimensão do seu desconforto ou dor. Todos os traumas, dramas e 
                violências contra a alma feminina são reais e devem ser olhados, acolhidos, 
                validados e curados.
              </p>
              <p>
                Foi nessa travessia profissional que criei o método <strong className="text-foreground">Perimenopausa Consciente</strong> — 
                unindo psicologia, espiritualidade não-religiosa e autocuidado profundo.
              </p>
              <p className="font-serif text-lg text-primary italic">
                "Hoje, minha missão é mostrar para cada mulher que essa fase não é um fim. É um despertar."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
