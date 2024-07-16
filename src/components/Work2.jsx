// motion
import {motion} from 'framer-motion';
// variaveis
import {fadeIn} from '../variants';
//img
import img4 from '../assets/LAVANDERIA EFICIENTE.png';
import img5 from '../assets/SCHAPPO.png';
import img6 from '../assets/PROSUPPLY.png';
import img8 from '../assets/HIGIEPRO.png';
const Work2 = () => {
  return <section id='work' className=''>
    <div className='container mx-auto '>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-10'>
          {/* img */}
          <motion.div variants={fadeIn('left', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
         viewport={{once: false, amount: 0.7}} className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img5}></img>
            <div className='absolute -bottom-full left-3 group-hover:top-2 transition-all duration-500 z-50'><span className='text-gradient'>Feito com WORDPRESS, ELEMENTOR, FIGMA, Photoshop.<br/>
            Site feito para Advocacia Schappo, me pediu para fugir dos padrões dos templates de ADVOCACIAS.</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
              <a target="_blank" href='https://ls.adv.br'><button className='btn btn-sm absolute -bottom-full left-0 group-hover:top-0 transition-all duration-700 z-50'>Veja o Projeto.</button></a>
              </div>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
         viewport={{once: false, amount: 0.7}} className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img6}></img>
            <div className='absolute -bottom-full left-3 group-hover:top-5 transition-all duration-500 z-50'><span className='text-gradient'>Feito com LIQUID, JavaScript<br/>
            Loja Virtual, feita com a SHOPIFY, para a PROSUPPLY, que pertence a HIGIEPRO, foi utilizado base do template TRADE, com personalizações feita por mim, diretamente no codigo.</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
              <a target="_blank" href='https://prosupply.com.br'><button className='btn btn-sm absolute -bottom-full left-0 group-hover:top-0  transition-all duration-700 z-50'>Veja o Projeto.</button></a>
              <a target="_blank" href='https://github.com/RodrigoNexy/Playground_shopify'><button className='btn btn-sm absolute -bottom-full left-32 group-hover:top-0  transition-all duration-700 z-50'>Repositório.</button></a>
            </div>
          </motion.div>
        </div>
        <div className='flex-1 flex flex-col gap-y-10'>
          {/* img */}
          <motion.div variants={fadeIn('left', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
         viewport={{once: false, amount: 0.7}} className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img4}></img>
            <div className='absolute -bottom-full left-3 group-hover:top-2 transition-all duration-500 z-50'><span className='text-gradient'>Feito com WORDPRESS, ELEMENTOR, FIGMA, Photoshop.<br/>
            Landing Page feita para o evento ENCATHO, esta LandingPage terá sua segunda versão liberada no dia do evento</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
                <a target="_blank" href='https://lavanderiaeficiente.com.br'><button className='btn btn-sm absolute -bottom-full left-0 group-hover:top-0  transition-all duration-700 z-50'>Repositório.</button></a>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
         viewport={{once: false, amount: 0.7}} className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={img8}></img>
            <div className='absolute -bottom-full left-3 group-hover:top-5 transition-all duration-500 z-50'><span className='text-gradient'>Feito com, LARAVEL, PHP, HTML, JavaScript<br/>
            Dou suporte a algumas demandas relacionadas a este site, foi refeita toda a home.</span></div>
            <div className='absolute -bottom-full left-3 group-hover:bottom-14 transition-all duration-700 z-50'>
              <a target="_blank" href='https://higiepro.com.br'><button className='btn btn-sm absolute -bottom-full left-0 group-hover:top-0  transition-all duration-700 z-50'>Veja o Projeto.</button></a>
              </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>;
};

export default Work2;
