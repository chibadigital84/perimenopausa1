import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-lilac/70 via-rose-soft/50 to-sand/60" />
      
      {/* Mist overlay */}
      <div className="absolute inset-0 mist-overlay pointer-events-none" />
      
      {/* Light particles */}
      <div className="absolute inset-0 particles pointer-events-none" />
      
      <div className="container-wide section-padding flex flex-col items-center justify-center min-h-screen relative z-10">
        {/* Badge for 40+ women */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 right-8 md:top-12 md:right-12"
        >
          <div className="px-4 py-2 rounded-full bg-gradient-to-r from-gold-soft/90 to-gold/80 border border-gold/30 shadow-lg backdrop-blur-sm">
            <span className="font-serif text-sm md:text-base text-white font-medium">
              ✨ Para mulheres 40+
            </span>
          </div>
        </motion.div>
        
        {/* Script title */}
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-script text-2xl md:text-3xl text-primary mb-4"
        >
          ​
        </motion.p>
        
        {/* Main headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-center max-w-4xl leading-tight text-foreground mb-6 drop-shadow-sm"
        >
          Recupere o controle de sua vida, mesmo que você não entenda o que está acontecendo.
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-foreground/80 text-center max-w-2xl mb-10 drop-shadow-sm"
        >
          Aprenda, em duas semanas, a regular emoções, reduzir o caos interno com consciência e autonomia, usando um método prático de integração com o corpo, psique e espiritualidade.
        </motion.p>
        
        {/* CTA Button */}
        <motion.a
          href="https://pay.kiwify.com.br/KZs1cRv"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="btn-cta cursor-pointer"
        >
          🌸 Comece sua travessia agora
        </motion.a>
      </div>
      
      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
