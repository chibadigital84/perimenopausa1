import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import guaranteeImage from '@/assets/guarantee-light.jpg';

export const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-bonus"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-2xl overflow-hidden glow-gold">
                <img 
                  src={guaranteeImage} 
                  alt="Mãos acolhendo luz dourada"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              {/* Shield icon */}
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-soft to-gold flex items-center justify-center glow-gold">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Garantia Incondicional de 7 Dias
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Você tem 7 dias completos para assistir as aulas, fazer os exercícios e sentir a transformação.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Se por qualquer motivo você achar que o curso não é para você, basta e pedir e devolvemos <strong className="text-foreground">100% do seu investimento</strong>.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Sem perguntas. Sem burocracia. Sem ressentimentos.
              </p>
              <p className="font-serif text-xl text-primary mt-4 italic">
                "Todo o risco é meu. A transformação é sua."
              </p>
              
              {/* CTA Button */}
              <motion.a
                href="https://pay.kiwify.com.br/KZs1cRv"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-cta inline-block mt-6"
              >
                🌸 Garantir minha vaga com segurança
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
