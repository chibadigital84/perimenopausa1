import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-lotus-hands.jpg';
export const HeroSection = () => {
  return <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Mist overlay */}
      <div className="absolute inset-0 mist-overlay pointer-events-none" />
      
      {/* Light particles */}
      <div className="absolute inset-0 particles pointer-events-none" />
      
      <div className="container-wide section-padding flex flex-col items-center justify-center min-h-screen relative z-10">
        {/* Script title */}
        <motion.p initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="font-script text-2xl md:text-3xl text-primary mb-4">
          ​
        </motion.p>
        
        {/* Main headline */}
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="font-serif text-3xl md:text-5xl lg:text-6xl text-center max-w-4xl leading-tight text-foreground mb-6">
          "Quanto mais você tenta se ajustar, mais você se afasta de quem realmente é."
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="font-body text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-10">
          Existe um motivo lógico para isso — e um caminho simples para voltar ao centro, sem precisar virar outra pessoa.
        </motion.p>
        
        {/* Hero image */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1,
        delay: 0.8
      }} className="relative mb-10 w-full max-w-2xl">
          <div className="glow-soft rounded-3xl overflow-hidden">
            <img src={heroImage} alt="Mãos acolhendo uma flor de lótus iluminada" className="w-full h-auto object-cover" />
          </div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.a href="https://pay.kiwify.com.br/60PbV9F" target="_blank" rel="noopener noreferrer" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1
      }} whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.98
      }} className="btn-cta cursor-pointer">
          🌸 Comece sua travessia agora
        </motion.a>
      </div>
      
      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default HeroSection;