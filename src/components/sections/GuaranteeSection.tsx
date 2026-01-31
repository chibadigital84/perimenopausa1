import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-bonus flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
        >
          {/* Shield icon */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-soft to-gold flex items-center justify-center glow-gold">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Garantia Incondicional de 7 Dias
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Você tem 7 dias completos para assistir as aulas, fazer os exercícios e sentir a transformação.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Se por qualquer motivo você achar que o curso não é para você, basta enviar um email 
              e devolvemos <strong className="text-foreground">100% do seu investimento</strong>.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Sem perguntas. Sem burocracia. Sem ressentimentos.
            </p>
            <p className="font-serif text-xl text-primary mt-4 italic">
              "Todo o risco é meu. A transformação é sua."
            </p>
            
            {/* CTA Button */}
            <motion.a
              href="https://pay.kiwify.com.br/60PbV9F"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-cta inline-block mt-6"
            >
              🌸 Garantir minha vaga com segurança
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
