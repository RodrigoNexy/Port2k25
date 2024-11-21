import CountUp from 'react-countup';
// Interseção
import {useInView} from 'react-intersection-observer'
//motion
import {motion} from 'framer-motion'
// variaveis
import {fadeIn} from '../variants'
import {Link} from 'react-scroll'

const About = () => {
  const[ref, inView] =  useInView({
    threshold: 0.0, 
  });
  return <section id='about' className='section' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* IMG */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat  h-[700px] mix-blend-lighten bg-top'></motion.div>
        {/* Text */}
        <motion.div
        variants={fadeIn('left', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}} className='flex-1'>
          <h2 className='h2 text-accent'>Sobre Mim</h2>
          <h3 className='h3 mb-4'>Eu sou um Desenvolvedor FullStack e WebDesigner</h3>
          <p className='mb-6'>Me chamo Rodrigo Carvalho, cursando <strong>Analise e Desenvolvimento de Sistemas</strong> (Faculdade Descomplica),
          já atuei em áreas como Designer Gráfico, Editor de Video e Filmmaking, porém me encontrei na programação.<br/><br/>
          Tecnologias que trabalho: <b>ReactJs, JavaScript, Liquid, Php, Wordpress.</b><br/><br/>
          Após uma longa jornada querendo descobrir o que seria como profissional, me encontrei na programação, estou estudando desde 2019 onde tudo começou,
          em 2023 chegou minha maioridade (18 anos), e surgiu minha <b>primeira vaga na area de tecnologia</b>, na VistaSoftware, onde trabalhava como <b>Suporte Tecnico.</b><br/>
          Lá foi onde eu aprendi muito, em questão de <b>trabalhar em equipe, atender clientes, wordpress, Php, e algo de MySQL.</b>
          Trabalhei lá durante 8 meses, onde resolvi sair, pois apareceu uma oportunidade como <b>desenvolvedor</b>, que era o meu sonho, me tornar um desenvolvedor, e não um atendente de tickets
          e foi onde me surgiu a vaga na Higiepro, onde atuo com <b>Lojas Virtuais</b>, na SHOPIFY, onde tive um desafio grande, para aprender a linguagem utilizada, que é a LIQUID.<br/>
          Após 7 dias estudando já estava entendendo e desenvolvendo em LIQUID, e hoje já foram feitas algumas lojas, e landing pages para esta empresa. 
          </p>
          {/* Status */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={20} duration={5} /> : 20 } <p className='text-xs mt-2'>Meses</p>
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Experiência de <br />Trabalho</div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={20} duration={5} /> : 20 }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Serviços e<br /> projetos<br />Concluidos</div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={7} duration={5} /> : 7 }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Cursos <br />Concluidos</div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
          <Link to='contact'
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}>
        <button className='btn btn-lg'>Entre em Contato</button>
      </Link>
            <Link to='work'
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}>
        <button className='text-gradient btn-link'>Meu Portfólio</button>
      </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
