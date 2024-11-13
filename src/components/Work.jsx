// motion
import {motion} from 'framer-motion';
// variaveis
import {fadeIn} from '../variants';
//img
import img1 from '../assets/FLORIPA MOTO WEEK.png';
import img2 from '../assets/APPCORRIGIDO.png';
import img3 from '../assets/TEMPLATE.png';
import '../components/contact.css';
const Work = () => {
  return <section id='work' className='section doido'>
    <div className='container mx-auto '>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div variants={fadeIn('right', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
         viewport={{once: false, amount: 0.7}} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div className='flex-1 flex flex-col gap-y-10'>
            <h2 className='h2 leading-tight text-accent'>Meus Últimos <br />Trabalhos.</h2>
            <a href='https://github.com/RodrigoNexy' target="_blank"><button className='btn btn-sm'>Veja todos projetos no GitHub.</button></a>
          </div >
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img1}></img>
            <div className='absolute -bottom-full left-3 group-hover:top-5 transition-all duration-500 z-50'><span className='text-gradient'>Feito com WORDPRESS, ELEMENTOR, FIGMA, PHOTOSHOP.<br/>
            Site para o evento de motos realizado desde 2023 em Florianópolis</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
              <a target="_blank" href='https://floripamotoweek.com.br'><button className='btn btn-sm absolute -bottom-full  group-hover:top-0  transition-all duration-700 z-50'>Veja o Projeto.</button></a>
              </div >
          </div>
        </motion.div>
        <div className='flex-1 flex flex-col gap-y-10'>
          {/* img */}
          <motion.div variants={fadeIn('left', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
         viewport={{once: false, amount: 0.7}} className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img2}></img>
            <div className='absolute -bottom-full left-3 group-hover:top-2 transition-all duration-500 z-50'><span className='text-gradient'>Feito com ReactJs/NextJs<br/>
            Estou desenvolvendo uma aplicação para agendamento de salões de beleza, ou de outros nichos. (<b>aplicação fullstack</b>)<br/>
            PRETENDENDO FAZER EM REACT NATIVE.</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
            <a target="_blank" href='https://github.com/RodrigoNexy/'><button className='btn btn-sm absolute -bottom-full left-0 group-hover:top-0  transition-all duration-700 z-50'>Repositório.</button></a>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
         viewport={{once: false, amount: 0.7}} className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img3}></img>
            <div className='absolute -bottom-full left-3 group-hover:top-5 transition-all duration-500 z-50'><span className='text-gradient'>Feito com LIQUID, JavaScript, HTML.<br/>
            Desenvolvi um template para HIGIEPRO utilizar como modelos de LandingPage para seus produtos.</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
            <a target="_blank" href='https://github.com/RodrigoNexy/Theme_LandingPage'><button className='btn btn-sm absolute -bottom-full left-0 group-hover:top-0  transition-all duration-700 z-50'>Repositório.</button></a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>;
};

export default Work;
