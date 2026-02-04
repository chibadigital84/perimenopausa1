import { motion } from 'framer-motion';
import { Check, Clock, Sparkles, BookOpen, Gift, Infinity, RefreshCw, Lock, ShieldCheck } from 'lucide-react';
const valueStack = [{
  item: '8 módulos Transformadores',
  value: 'R$ 792,00'
}, {
  item: 'Bônus #1: Ebook',
  value: 'R$ 49,90'
}, {
  item: 'Bônus #2: Aula Especial',
  value: 'R$ 99,00'
}, {
  item: 'Bônus #3: Acesso Vitalício',
  value: 'R$ 49,90'
}];
const benefits = [{
  icon: Sparkles,
  text: 'Acesso todos os módulos'
}, {
  icon: BookOpen,
  text: 'Caderno de Práticas em PDF'
}, {
  icon: Gift,
  text: 'Aula Bônus exclusiva'
}, {
  icon: Infinity,
  text: 'Acesso vitalício ao conteúdo'
}, {
  icon: RefreshCw,
  text: 'Atualizações futuras gratuitas'
}];
export const PriceSection = () => {
  return <section id="oferta" className="section-padding gradient-reveal relative overflow-hidden">
      {/* Particles */}
      <div className="absolute inset-0 particles pointer-events-none" />
      
      <div className="container-narrow relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <p className="font-script text-2xl text-primary mb-4">Investimento</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Valor Total do Curso
          </h2>
        </motion.div>
        
        {/* Value stack */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} viewport={{
        once: true
      }} className="card-spiritual mb-8">
          {valueStack.map((item, index) => <div key={item.item} className="flex justify-between items-center py-3 border-b border-border last:border-0">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="font-body text-foreground">{item.item}</span>
              </div>
              <span className="font-body text-muted-foreground line-through">{item.value}</span>
            </div>)}
          
          <div className="flex justify-between items-center py-4 mt-4 border-t-2 border-primary/20">
            <span className="font-serif text-xl font-semibold text-foreground">VALOR TOTAL</span>
            <span className="font-serif text-xl text-muted-foreground line-through">R$ 990,80</span>
          </div>
        </motion.div>
        
        {/* Special offer card - redesigned */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} viewport={{
        once: true
      }} className="relative bg-gradient-to-b from-white to-rose-soft/30 rounded-3xl p-8 md:p-12 shadow-xl border border-gold/20">
          {/* Gold decorative border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-gold/30 pointer-events-none" />
          
          <div className="text-center">
            <div className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-primary to-lilac rounded-full">
              <span className="font-body font-semibold text-white">
                ✨ OFERTA ESPECIAL ✨
              </span>
            </div>
            
            <p className="font-body text-lg text-muted-foreground mb-2">
              Valor total do programa
            </p>
            <p className="font-serif text-2xl text-muted-foreground line-through mb-4">
              R$ 297,00
            </p>
            
            <p className="font-body text-lg text-primary mb-2">
              Hoje, por apenas
            </p>
            
            <div className="my-6">
              <p className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-gradient-spiritual">
                R$ 97<span className="text-4xl">,00</span>
              </p>
              <p className="font-body text-xl text-muted-foreground mt-4">
                ou <span className="text-foreground font-semibold">12x de R$ 10,03</span> no cartão
              </p>
            </div>
            
            {/* Benefits list */}
            <div className="max-w-md mx-auto my-8 text-left space-y-3">
              {benefits.map((benefit, index) => <motion.div key={benefit.text} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.4,
              delay: 0.4 + index * 0.1
            }} viewport={{
              once: true
            }} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-lilac-soft flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-body text-foreground">{benefit.text}</span>
                </motion.div>)}
            </div>
            
            {/* CTA Button */}
            <motion.a href="https://pay.kiwify.com.br/KZs1cRv" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.98
          }} className="btn-cta inline-block mb-6 text-lg px-10 py-5">
              🌸 QUERO GARANTIR MINHA VAGA AGORA
            </motion.a>
            
            {/* Security badge */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span className="font-body text-sm">Pagamento 100% seguro</span>
              <span className="mx-2">•</span>
              <ShieldCheck className="w-4 h-4" />
              <span className="font-body text-sm">Seus dados estão protegidos</span>
            </div>
          </div>
          
          {/* Urgency */}
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.6
        }} viewport={{
          once: true
        }} className="flex items-center justify-center gap-3 p-4 mt-8 bg-gradient-to-r from-rose-soft/50 to-lilac-soft/50 rounded-xl border border-primary/10">
            <Clock className="w-5 h-5 text-primary animate-pulse" />
            <p className="font-body text-sm text-foreground">
              <strong>OFERTA POR TEMPO LIMITADO:</strong> Preço exclusivo para as primeiras 100 mulheres. 
              <span className="text-primary font-semibold"> Já temos 45% das vagas preenchidas.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default PriceSection;