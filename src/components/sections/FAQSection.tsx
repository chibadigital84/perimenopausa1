import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'Quanto tempo dura o curso?',
    answer: 'São 8 aulas em vídeo, cada uma com 15-25 minutos. Você pode fazer no seu ritmo. Você tem acesso vitalício.'
  },
  {
    question: 'Preciso ter conhecimento prévio?',
    answer: 'Não! O curso foi feito para mulheres comuns, com linguagem acessível e sem jargões médicos complicados.'
  },
  {
    question: 'Em quanto tempo eu começo a ver resultados?',
    answer: 'Muitas mulheres relatam mudanças já nas primeiras semanas, especialmente ao aplicar os rituais diários e as práticas de regulação emocional. Cada jornada é única, mas o importante é começar — os resultados vêm com a prática constante.'
  },
  {
    question: 'Isso substitui acompanhamento médico?',
    answer: 'Não. O curso é complementar. Sempre recomendo que você mantenha acompanhamento médico. O que oferecemos é apoio emocional, espiritual e prático.'
  },
  {
    question: 'E se eu já tentei de tudo e nada funcionou?',
    answer: 'Este curso não é sobre "dar um jeito" ou "consertar" você. É sobre entender o que está vivendo, acolher suas emoções e ressignificar essa fase. Se você já tentou abordagens focadas apenas em sintomas, aqui você vai encontrar um caminho diferente — mais profundo e transformador.'
  },
  {
    question: 'E se eu não tiver tempo para fazer tudo?',
    answer: 'As aulas são adequadas para caber na sua rotina. E o acesso é vitalício — você pode assistir onde e quando quiser.'
  },
  {
    question: 'É um curso religioso?',
    answer: 'Não. Embora trate de espiritualidade, não há dogmas, religiões ou crenças impostas. É uma jornada pessoal de conexão interior.'
  },
  {
    question: 'Isso é só mais um ebook?',
    answer: 'Não. O curso inclui vídeos gravados, exercícios práticos e um caderno de práticas em PDF. É uma jornada completa de autoconhecimento, não apenas material de leitura.'
  },
  {
    question: 'Como funciona a garantia?',
    answer: 'Você tem 7 dias para pedir reembolso total, sem precisar justificar.'
  }
];

export const FAQSection = () => {
  return (
    <section className="section-padding gradient-section-light">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-script text-2xl text-primary mb-4">Dúvidas</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Perguntas Frequentes
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-spiritual border-none px-6"
              >
                <AccordionTrigger className="font-serif text-lg text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
