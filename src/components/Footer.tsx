import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-muted/50 border-t border-border">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-script text-xl text-primary">Perimenopausa Consciente</p>
            <p className="font-body text-sm text-muted-foreground mt-1">
              © 2026 Escola DESPERTA. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex items-center gap-6 font-body text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-xs text-muted-foreground">
            Este produto não substitui o parecer profissional de um médico. 
            Sempre procure um especialista para orientações sobre sua saúde.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
