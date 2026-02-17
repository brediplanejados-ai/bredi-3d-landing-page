
import React, { useState, useEffect } from 'react';
import {
  Box,
  MessageSquare,
  FileText,
  Camera,
  Ruler,
  Wallet,
  ShieldCheck,
  Zap,
  Star,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  Smartphone,
  Check,
  Upload
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Sub-components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-dark/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Box className="text-primary w-8 h-8" />
          <span className={`font-black text-xl tracking-tight ${isScrolled ? 'text-white' : 'text-black'}`}>BREDI 3D Projetos</span>
        </div>
        <a
          href="https://wa.me/5515998148402?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20projeto%203D."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[linear-gradient(110deg,#BF953F,45%,#FCF6BA,55%,#B38728)] bg-[length:200%_100%] hover:bg-[100%_0] text-bg-dark font-bold px-5 py-2 rounded-lg text-sm transition-all duration-500 hover:shadow-[0_0_20px_rgba(191,149,63,0.5)] hover:brightness-110 hover:scale-105"
        >
          Orçamento
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/70 to-transparent z-10" />
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfv9NKmqGFVpCxvkmhJUhfMoIkPGL5IubhHCsU9iXChMFPyY-LSoIbGNHm3lgj_hjtfpPk21XiXgh71QqfrXT0cDwncN8zfR_JaQgz71uLkvEVdnKXRJaHaUeYEJkqOgY7bMslKBTgMoFBahtq_giwo1ACb6FqUj9r4naUYqDifE_rQ0ykqI1okB2Pr1Dbhix8c1e5SWMA6y07thxs8P9BQIpEhxn7tea2y0gunRWcR3rAWmHxpxDqu26P6q0k8SyntnPSUjvfvmDc"
          alt="Kitchen 3D Render"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto relative z-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Visualização Ultra-Realista
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Projetos 3D Profissionais para Móveis Planejados
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            Transforme suas ideias em realidade. Ideal para marceneiros e arquitetos que buscam fechar mais vendas com imagens de alta qualidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5515998148402?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20projeto%203D."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[linear-gradient(110deg,#BF953F,45%,#FCF6BA,55%,#B38728)] bg-[length:200%_100%] hover:bg-[100%_0] text-bg-dark font-bold py-5 px-8 rounded-xl transition-all duration-500 shadow-xl shadow-[#BF953F]/20 hover:shadow-[0_0_30px_rgba(191,149,63,0.6)] hover:brightness-110 hover:scale-105 group"
            >
              <Smartphone className="w-6 h-6" />
              Solicitar Orçamento pelo WhatsApp
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#orcamento"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-5 px-8 rounded-xl transition-all backdrop-blur-sm border border-white/10"
            >
              <FileText className="w-6 h-6" />
              Solicitar pelo Formulário
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Fix: Explicitly define props interface to avoid TS issues with 'key' when using spread operators in JSX.
interface BenefitCardProps {
  icon: any;
  title: string;
  description: string;
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => (
  <div className="bg-card-dark p-8 rounded-3xl border border-white/5 flex flex-col items-start gap-4 hover:border-primary/30 transition-all">
    <div className="p-4 bg-primary/10 rounded-2xl">
      <Icon className="text-primary w-8 h-8" />
    </div>
    <div>
      <h3 className="font-black text-xl mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const Benefits = () => {
  const items = [
    { icon: Camera, title: "Realismo", description: "Imagens fotorealistas que encantam clientes e garantem o fechamento." },
    { icon: Box, title: "Foco Profissional", description: "Feito sob medida para marceneiros e arquitetos exigentes." },
    { icon: Wallet, title: "Economia", description: "Evite desperdícios de materiais e erros caros na produção final." },
    { icon: ShieldCheck, title: "Segurança", description: "Medidas precisas para montagem perfeita sem dores de cabeça." },
    { icon: Zap, title: "Rapidez", description: "Sua proposta entregue em tempo recorde para não perder o timing." },
  ];

  return (
    <section className="py-24 px-6 bg-bg-dark">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-black mb-4">Por que nos escolher?</h2>
          <div className="h-1.5 w-20 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, idx) => (
            /* Fix: Pass props individually to BenefitCard instead of using a spread to resolve the 'key' type error. */
            <BenefitCard
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const BeforeAfter = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="py-24 px-6 bg-bg-dark/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Visualize Antes de Produzir</h2>
          <p className="text-gray-400">Elimine as dúvidas do seu cliente com renderizações perfeitas.</p>
        </div>

        <div
          className="relative group rounded-[2rem] overflow-hidden aspect-[16/10] shadow-2xl border border-white/10 cursor-col-resize select-none"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Layer (Full) */}
          <img
            src="/assets/render_3d.png"
            alt="3D Render"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Before Layer (Clipped) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img
              src="/assets/technical_sketch.png"
              alt="Technical Sketch"
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-primary/80 shadow-[0_0_15px_rgba(255,215,0,0.5)] z-30"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-bg-dark p-2 rounded-full shadow-lg">
              <Box className="w-6 h-6" />
            </div>
          </div>

          <div className="absolute bottom-8 left-8 z-40 bg-black/60 backdrop-blur px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest border border-white/10">Técnico</div>
          <div className="absolute bottom-8 right-8 z-40 bg-primary/80 backdrop-blur px-5 py-2 rounded-xl text-bg-dark text-xs font-black uppercase tracking-widest">Render 3D</div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="py-24 px-6 bg-bg-dark">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">Investimento</h2>
          <p className="text-gray-400 text-lg">Escolha o plano ideal para o seu projeto</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Plan 1 */}
          <div className="bg-card-dark p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden hover:border-white/20 transition-all">
            <h3 className="text-2xl font-black mb-2">Apenas 3D</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">Ideal para apresentação ao cliente final e aprovação visual rápida.</p>
            <div className="mb-10">
              <span className="text-5xl font-black">R$ 80,00</span>
              <span className="text-gray-500 font-bold ml-2">/ projeto</span>
            </div>
            <ul className="space-y-5 mb-10">
              <li className="flex items-center gap-4 text-sm font-medium">
                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                Renderização Ultra-realista
              </li>
              <li className="flex items-center gap-4 text-sm font-medium">
                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                Até 3 revisões inclusas
              </li>
            </ul>
            <a
              href="https://wa.me/5515998148402?text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20o%20projeto%20Apenas%203D."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 rounded-2xl border border-[#D4AF37]/30 text-[#D4AF37] font-black uppercase tracking-widest text-sm hover:bg-[#D4AF37]/10 transition-colors text-center"
            >
              Contratar Agora
            </a>
          </div>

          {/* Plan 2 (Featured) */}
          <div className="bg-card-dark p-10 rounded-[2.5rem] border-2 border-primary relative overflow-hidden shadow-[0_0_60px_-15px_rgba(255,215,0,0.3)] scale-105 z-10">
            <div className="absolute top-0 right-0 bg-primary text-bg-dark px-6 py-2 text-[11px] font-black uppercase rounded-bl-2xl tracking-tighter">MAIS CONTRATADO</div>
            <h3 className="text-2xl font-black mb-2 text-primary">3D + Plano de Corte</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">Solução completa para o marceneiro que quer ganhar produtividade.</p>
            <div className="mb-10">
              <span className="text-5xl font-black">R$ 120,00</span>
              <span className="text-gray-500 font-bold ml-2">/ projeto</span>
            </div>
            <ul className="space-y-5 mb-10">
              <li className="flex items-center gap-4 text-sm font-medium">
                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                Renderização Ultra-realista
              </li>
              <li className="flex items-center gap-4 text-sm font-medium">
                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                Lista de materiais detalhada
              </li>
              <li className="flex items-center gap-4 text-sm font-medium">
                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                Plano de Corte otimizado
              </li>
            </ul>
            <a
              href="https://wa.me/5515998148402?text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20o%20plano%20Completo%20(3D%20%2B%20Plano%20de%20Corte)."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 rounded-2xl bg-[linear-gradient(110deg,#BF953F,45%,#FCF6BA,55%,#B38728)] bg-[length:200%_100%] hover:bg-[100%_0] text-bg-dark font-black uppercase tracking-widest text-center text-sm transition-all duration-500 shadow-lg shadow-[#BF953F]/20 hover:shadow-[0_0_30px_rgba(191,149,63,0.6)] hover:brightness-110 hover:scale-[1.02]"
            >
              Contratar Completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    tipoProjeto: 'Cozinha',
    perfil: 'Marceneiro',
    medidas: '',
    peDireito: '',
    estilo: 'Moderno',
    prazo: 'Urgente (O mais rápido possível)',
    cores: '',
    fileCount: 0,
    detalhes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, fileCount: e.target.files.length }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `*NOVA SOLICITAÇÃO DE ORÇAMENTO*
--------------------------------
*Nome:* ${formData.nome}
*WhatsApp:* ${formData.whatsapp}
*Perfil:* ${formData.perfil}
*Tipo de Projeto:* ${formData.tipoProjeto}
--------------------------------
*Dados do Ambiente:*
*Medidas:* ${formData.medidas}
*Pé Direito:* ${formData.peDireito}
*Estilo:* ${formData.estilo}
*Prazo:* ${formData.prazo}
*Cores/Materiais:* ${formData.cores}
--------------------------------
*Detalhes:* 
${formData.detalhes}
--------------------------------
${formData.fileCount > 0 ? `📷 *TENHO ${formData.fileCount} ARQUIVO(S) PARA ENVIAR!* \n(Por favor, me indique para eu anexar as imagens aqui no chat)` : ''}`.trim();

    const encoded = encodeURIComponent(texto);
    window.open(`https://wa.me/5515998148402?text=${encoded}`, '_blank');
  };

  return (
    <section className="py-24 px-6 bg-bg-dark/80" id="orcamento">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-3">Peça seu Orçamento</h2>
          <p className="text-gray-400">Preencha os dados e entraremos em contato em breve</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Nome Completo</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Ex: João da Silva"
                className="w-full bg-card-dark border-white/5 rounded-2xl focus:ring-primary focus:border-primary text-white p-5 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">WhatsApp</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                className="w-full bg-card-dark border-white/5 rounded-2xl focus:ring-primary focus:border-primary text-white p-5 outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Tipo de Projeto</label>
              <select
                name="tipoProjeto"
                value={formData.tipoProjeto}
                onChange={handleChange}
                className="w-full bg-card-dark border-white/5 rounded-2xl focus:ring-primary focus:border-primary text-white p-5 outline-none appearance-none cursor-pointer"
              >
                <option>Cozinha</option>
                <option>Dormitório</option>
                <option>Banheiro</option>
                <option>Sala de Estar</option>
                <option>Comercial</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Você é...</label>
              <select
                name="perfil"
                value={formData.perfil}
                onChange={handleChange}
                className="w-full bg-card-dark border-white/5 rounded-2xl focus:ring-primary focus:border-primary text-white p-5 outline-none appearance-none cursor-pointer"
              >
                <option>Marceneiro</option>
                <option>Arquiteto</option>
                <option>Designer</option>
                <option>Cliente Final</option>
              </select>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 mt-2">
            <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-white">
              <Ruler className="text-primary w-5 h-5" />
              Dados do Ambiente
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Medidas (Largura x Comprimento)</label>
                <input
                  type="text"
                  name="medidas"
                  value={formData.medidas}
                  onChange={handleChange}
                  placeholder="Ex: 3,5m x 4,20m"
                  className="w-full bg-card-dark border-white/5 rounded-2xl focus:ring-primary focus:border-primary text-white p-5 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Pé Direito (Altura Teto)</label>
                <input
                  type="text"
                  name="peDireito"
                  value={formData.peDireito}
                  onChange={handleChange}
                  placeholder="Ex: 2,70m"
                  className="w-full bg-card-dark border-white/5 rounded-2xl focus:ring-primary focus:border-primary text-white p-5 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Estilo de Decoração</label>
                <select
                  name="estilo"
                  value={formData.estilo}
                  onChange={handleChange}
                  className="w-full bg-card-dark border-white/5 rounded-2xl focus:ring-primary focus:border-primary text-white p-5 outline-none appearance-none cursor-pointer"
                >
                  <option>Moderno</option>
                  <option>Clássico / Provençal</option>
                  <option>Industrial</option>
                  <option>Minimalista</option>
                  <option>Rústico</option>
                  <option>Retrô / Vintage</option>
                  <option>Não tenho certeza</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Prazo Desejado</label>
                <select
                  name="prazo"
                  value={formData.prazo}
                  onChange={handleChange}
                  className="w-full bg-card-dark border-white/5 rounded-2xl focus:ring-primary focus:border-primary text-white p-5 outline-none appearance-none cursor-pointer"
                >
                  <option>Urgente (O mais rápido possível)</option>
                  <option>Próximos 7 dias</option>
                  <option>Próximos 15 dias</option>
                  <option>Próximo mês</option>
                  <option>Estou apenas pesquisando</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Cores e Materiais de Preferência</label>
              <textarea
                rows={2}
                name="cores"
                value={formData.cores}
                onChange={handleChange}
                placeholder="Ex: MDF Carvalho, Lacca Branca, Metalon Preto, Vidro Reflecta..."
                className="w-full bg-card-dark border-white/5 rounded-2xl focus:ring-primary focus:border-primary text-white p-5 outline-none resize-none transition-all"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Anexar Imagens (Croqui / Referências)</label>
              <div className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all group relative ${formData.fileCount > 0 ? 'border-primary/50 bg-primary/5' : 'border-white/10 hover:border-primary/50 hover:bg-white/5'}`}>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  multiple
                  accept="image/*,.pdf"
                />
                <div className="p-4 bg-bg-dark rounded-full mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                  <Upload className={`w-6 h-6 ${formData.fileCount > 0 ? 'text-green-500' : 'text-primary'}`} />
                </div>
                <p className="text-sm font-bold text-white mb-1">
                  {formData.fileCount > 0 ? `${formData.fileCount} arquivo(s) selecionado(s)` : 'Clique para enviar ou arraste aqui'}
                </p>
                <p className="text-xs text-gray-500">JPG, PNG ou PDF (Máx. 10MB)</p>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Detalhes Adicionais / Observações</label>
              <textarea
                rows={4}
                name="detalhes"
                value={formData.detalhes}
                onChange={handleChange}
                placeholder="Descreva pontos de atenção (vigas, colunas, pontos elétricos/hidráulicos existentes) ou particularidades do seu projeto..."
                className="w-full bg-card-dark border-white/5 rounded-2xl focus:ring-primary focus:border-primary text-white p-5 outline-none resize-none transition-all"
              />
            </div>
          </div>

          <button className="w-full py-6 bg-[linear-gradient(110deg,#BF953F,45%,#FCF6BA,55%,#B38728)] bg-[length:200%_100%] hover:bg-[100%_0] text-bg-dark font-black text-xl rounded-2xl shadow-2xl shadow-[#BF953F]/30 uppercase tracking-tighter hover:scale-[1.02] transition-all duration-500 active:scale-95 hover:shadow-[0_0_30px_rgba(191,149,63,0.6)] hover:brightness-110">
            Enviar Solicitação Agora
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bg-dark border-t border-white/5 py-16 px-6">
      <div className="container mx-auto max-w-4xl flex flex-col items-center gap-10">
        <div className="flex items-center gap-2">
          <Box className="text-primary w-10 h-10" />
          <span className="font-black text-2xl tracking-tight text-white">BREDI 3D Projetos</span>
        </div>



        <p className="text-center text-gray-500 text-sm leading-relaxed max-w-sm">
          © 2024 BREDI 3D Projetos. Todos os direitos reservados.<br />
          Transformando sonhos em renders ultra-realistas.
        </p>

        {/* Developer Credit */}
        <a
          href="https://wa.me/5515998148402"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/40 border border-white/5 rounded-full py-2 px-5 flex items-center gap-3 hover:scale-105 transition-transform duration-300 group"
        >
          <span className="text-gray-400 text-xs font-medium">Site desenvolvido por</span>
          <div className="flex items-center gap-0.5" aria-label="Bredi">
            <span className="text-white font-black text-lg tracking-tighter">b</span>
            <span className="text-[#0066FF] font-black text-lg tracking-tighter">R</span>
            <span className="text-[#FF0000] font-black text-lg tracking-tighter">edi</span>
          </div>
          <span className="text-primary/80 text-xs font-mono ml-1 group-hover:text-primary transition-colors">
            (15) 99814-8402
          </span>
        </a>
      </div>
    </footer>
  );
};

const PortfolioCarousel = () => {
  const images = [
    '/assets/portfolio/project_01.jpg',
    '/assets/portfolio/project_02.png',
    '/assets/portfolio/project_03.png',
    '/assets/portfolio/project_04.png',
    '/assets/portfolio/project_05.png',
    '/assets/portfolio/project_06.png',
    '/assets/portfolio/project_07.jpg',
    '/assets/portfolio/project_08.png',
    '/assets/portfolio/project_09.png',
  ];

  // Duplicate images multiple times to create seamless loop for few items
  const carouselImages = [...images, ...images, ...images, ...images, ...images];

  return (
    <section className="py-24 bg-bg-dark border-t border-white/5 overflow-hidden">
      <div className="container mx-auto mb-12 px-6 text-center">
        <h2 className="text-4xl font-black mb-4">Portfólio em Destaque</h2>
        <p className="text-gray-400">Confira a qualidade ultra-realista dos nossos projetos recentes</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-dark to-transparent z-10" />

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {carouselImages.map((src, idx) => (
            <div
              key={idx}
              className="relative w-[400px] h-[300px] flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
            >
              <img
                src={src}
                alt={`Projeto ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Box className="text-white w-10 h-10" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-24 px-6 bg-card-dark border-t border-white/5 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group order-2 md:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#BF953F] to-[#B38728] rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 rounded-2xl" />
            <img
              src="/assets/specialist.png"
              alt="Especialista BREDI 3D"
              className="relative rounded-2xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 w-full object-cover aspect-[4/5] transform group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-2xl font-black text-white">Brendon</h3>
              <p className="text-primary font-bold">Especialista em 3D</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
              QUEM ESTÁ POR TRÁS
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Transformando <span className="text-primary">Projetos</span> em <br />
              <span className="text-white">Realidade Visual</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Olá! Sou o especialista responsável por dar vida aos seus projetos na BREDI. Com foco total em renderização ultra-realista para marcenaria e arquitetura, meu objetivo é simples: fazer seu cliente se apaixonar pelo projeto antes mesmo da execução.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Utilizo as tecnologias mais avançadas do mercado para garantir que cada textura, iluminação e detalhe transmita a qualidade do seu trabalho, ajudando você a fechar contratos com mais segurança e valor agregado.
            </p>

            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">+500</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">Projetos Entregues</span>
              </div>
              <div className="w-px bg-white/10 mx-4"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">100%</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">Satisfação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-bg-dark">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <BeforeAfter />

        {/* Quality Badge */}
        <div className="bg-primary py-12 px-6 overflow-hidden relative group">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 text-bg-dark">
            <div className="flex items-center gap-4 bg-bg-dark/10 p-4 rounded-2xl">
              <Zap className="w-12 h-12 fill-bg-dark" />
              <div>
                <h3 className="text-3xl font-black italic uppercase leading-none tracking-tighter">Entrega em até 3 dias</h3>
                <p className="font-bold opacity-80">Agilidade total para sua marcenaria não parar.</p>
              </div>
            </div>
          </div>
        </div>

        <Pricing />

        <PortfolioCarousel />

        <About />

        {/* Testimonials */}
        <section className="py-24 px-6 bg-bg-dark overflow-hidden">
          <div className="container mx-auto">
            <h2 className="text-4xl font-black mb-16 text-center">O que dizem nossos parceiros</h2>
            <div className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8">
              {[
                { name: "Ricardo Costa", role: "Marceneiro - SP", text: "Os projetos do 3D Projetos mudaram o patamar da minha marcenaria. Fecho 90% dos orçamentos após mostrar o render." },
                { name: "Ana Martins", role: "Arquiteta - RJ", text: "Qualidade impressionante e entrega sempre antes do prazo. O plano de corte vem perfeito para a produção." },
                { name: "Marcos Vinicius", role: "Marcenaria MV", text: "A melhor ferramenta de vendas que já usei. O cliente não tem dúvidas quando vê o projeto pronto no 3D." }
              ].map((t, idx) => (
                <div key={idx} className="min-w-[85%] md:min-w-[400px] snap-center bg-card-dark p-10 rounded-[2rem] border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex text-primary mb-6">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>
                    <p className="text-gray-300 italic text-lg leading-relaxed mb-8">"{t.text}"</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center font-black text-primary text-xl">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-black text-lg leading-none mb-1">{t.name}</p>
                      <p className="text-sm text-gray-500 font-bold">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5515998148402?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
        target="_blank"
        className="fixed bottom-8 right-8 z-[100] bg-[linear-gradient(110deg,#BF953F,45%,#FCF6BA,55%,#B38728)] bg-[length:200%_100%] hover:bg-[100%_0] text-bg-dark w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-[#BF953F]/40 hover:scale-110 active:scale-95 transition-all duration-500 hover:shadow-[0_0_30px_rgba(191,149,63,0.6)] hover:brightness-110 group"
      >
        <MessageSquare className="w-8 h-8 fill-current" />
        <span className="absolute right-20 bg-primary text-bg-dark font-black px-4 py-2 rounded-xl text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 shadow-lg pointer-events-none">
          Fale Conosco
        </span>
      </a>
    </div>
  );
}
