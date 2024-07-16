import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import '../components/contact.css'; // Certifique-se de criar e importar o arquivo CSS

const Contact = () => {
  return (
    <section id='contact' className='py-16 lg:section mt-22'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center lg:flex-row'>
          {/* text */}
          <div className='flex-1'>
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>
                Minhas Redes Sociais!
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Entre em <br /> Contato.
              </h2>
            </motion.div>
          </div>
          {/* icons */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 flex justify-center text-[90px]'
          >
            <div className="social-icons">
              <a href='https://github.com/RodrigoNexy' target="_blank" className='social-icon'>
                <FaGithub />
                <h1>Github</h1>
              </a>
              <a href='https://www.linkedin.com/in/rodrigo-carvalho-a30b14209/' target="_blank" className='social-icon'>
                <FaLinkedinIn />
                <h1>LinkedIn</h1>
              </a>
              <a href='wa.me/5548999593922' target="_blank" className='social-icon'>
                <FaWhatsapp />
                <h1 className='mb-12'>WhatsApp</h1>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
