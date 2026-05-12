import { useState } from 'react';
import { motion } from 'motion/react';
const cozyonLogo = '/media/COZYON-LOGO.jpg';
const pujjiLogo = '/media/PUJJI-LOGO.jpg';
const viarLogo = '/media/VIAR-LOGO.png';
const uojomLogo = '/media/UOJOM-LOGO.jpg';
const tastySoundLogo = '/media/TASTYSOUND-LOGO.webp';
import { 
  ArrowRight, 
  Target, 
  Lightbulb, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Layers, 
  Megaphone,
  BarChart,
  CheckCircle2,
  Linkedin,
  MonitorPlay,
  Globe,
  ChevronDown,
  ArrowLeft,
  X
} from 'lucide-react';

const content = {
  id: {
    nav: {
      about: "Tentang Kami",
      services: "Layanan",
      portfolio: "Portofolio",
      contact: "Kontak",
      connect: "Terhubung",
      mainNav: "Navigasi Utama"
    },
    hero: {
      tag: "Est. 2025",
      title1: "Crafting",
      title2: "Impactful",
      title3: "Digital Identities.",
      desc: "Kami menggabungkan presisi arsitektural dengan sentuhan artistik untuk membangun brand yang mendefinisikan lanskap modern.",
      btn: "Mulai Proyek"
    },
    intro: {
      label: "Maksimal & Terukur",
      labelDesc: "Dampak nyata bagi brand",
      title1: "Tentang",
      title2: "Kami",
      p1Start: "PT Semarak Media Bisnis",
      p1End: "adalah perusahaan yang bergerak di bidang Marketing Agency & Penjualan Online yang didirikan pada sejarahnya sejak 21 Oktober 2025.",
      p2: "Kami berfokus pada pengembangan brand melalui strategi pemasaran yang tepat, berbasis data, serta eksekusi kreatif yang memberikan dampak maksimal dan terukur untuk mencapai kesuksesan jangka panjang."
    },
    visionMission: {
      title1: "Visi &",
      title2: "Misi",
      desc: "Visi dan misi kami menjadi landasan utama dalam menjalankan setiap strategi dan eksekusi, memastikan setiap langkah yang diambil selaras dengan tujuan jangka panjang perusahaan serta memberikan dampak nyata.",
      vTitle: "Visi",
      vDesc: "Menjadi mitra pemasaran terpercaya bagi brand-brand terkemuka di Indonesia, menghadirkan solusi kreatif yang mendorong pertumbuhan bisnis yang berkelanjutan dan terukur.",
      mTitle: "Misi",
      m1: "Membantu brand berkembang melalui strategi pemasaran yang terencana dan berbasis data.",
      m2: "Memastikan setiap campaign memberikan dampak maksimal dan hasil yang nyata.",
      m3: "Membangun kemitraan jangka panjang yang saling menguntungkan."
    },
    coreValues: {
      title1: "Nilai",
      title2: "Inti",
      desc: "Nilai-nilai inti kami menjadi fondasi dalam setiap keputusan dan tindakan, membentuk cara kami bekerja dan berkolaborasi.",
      v1: { t: "Integritas", d: "Menjunjung tinggi kejujuran dan transparansi dalam bisnis." },
      v2: { t: "Orientasi Hasil", d: "Dampak nyata dan terukur bagi pertumbuhan klien." },
      v3: { t: "Inovasi", d: "Pendekatan kreatif relevan dengan dinamika pasar." },
      v4: { t: "Kolaborasi", d: "Sinergi kuat antara tim dan mitra eksternal." }
    },
    services: {
      tag: "Layanan Kami",
      title1: "Apa yang",
      title2: "Kami Lakukan",
      s1: { t: "Strategic Marketing", d: "Perancangan dan pelaksanaan strategi pemasaran terpadu mulai dari riset pasar hingga evaluasi performa.", c: "Consulting" },
      s2: { t: "Creative Campaign", d: "Produksi konten berkualitas tinggi dan kampanye promosi yang menarik serta efektif di berbagai platform.", c: "Execution" },
      s3: { t: "Sales Optimization", d: "Pengelolaan dan optimalisasi saluran penjualan digital untuk meningkatkan jangkauan dan konversi.", c: "Growth" },
      btn: "Pelajari Lebih Lanjut"
    },
    whyUs: {
      title1: "Mengapa",
      title2: "Memilih",
      title3: "Kami",
      desc: "Keunggulan kami terletak pada kombinasi strategi yang terukur, kreativitas yang relevan, serta dukungan ekosistem yang kuat untuk memastikan setiap brand mendapatkan hasil yang optimal.",
      r1: { t: "Strategi Berbasis Data", d: "Setiap keputusan didukung oleh analisis data untuk memastikan strategi yang dijalankan lebih efektif, tepat sasaran, dan menghasilkan ROI yang optimal." },
      r2: { t: "Tim Kreatif Berpengalaman", d: "Didukung oleh tim yang memahami tren dan perilaku pasar, sehingga mampu menghasilkan ide kreatif yang relevan dan berdampak." },
      r3: { t: "Solusi End-to-End Terintegrasi", d: "Kami menangani seluruh proses dari perencanaan hingga eksekusi dalam satu sistem yang terintegrasi, memastikan efisiensi dan konsistensi hasil." }
    },
    portfolio: {
      tag: "Portofolio",
      title1: "Proyek",
      title2: "Pilihan",
      desc: "Lihat bagaimana kami mentransformasi visi klien menjadi kampanye yang sukses dan terukur.",
      viewAllFull: "Lihat Semua Proyek (24)",
      viewAll: "Lihat Semua Proyek",
      items: [
        { c: "Cozyon", cat: "E-Commerce Optimization", m: "Peningkatan Penjualan", img: cozyonLogo },
        { c: "Pujji Snack", cat: "Social Media Strategy", m: "Engagement Tinggi", img: pujjiLogo },
        { c: "Viar", cat: "Konten Sepeda Listrik", m: "Brand Awareness", img: viarLogo },
        { c: "Uojom", cat: "Social Media Strategy", m: "Pertumbuhan Audiens", img: uojomLogo },
        { c: "Tasty Sound", cat: "Video Pendek", m: "Dampak Viral Masif", img: tastySoundLogo }
      ]
    },
    contact: {
      tag: "Mari Terhubung",
      title1: "Siap untuk",
      title2: "Meningkatkan",
      title3: "Brand Anda?",
      desc: "Bersama-sama, kita bisa mencapai lebih banyak. Mari diskusikan kampanye besar Anda berikutnya bersama Semarak Media Bisnis.",
      btn: "Mulai Konsultasi",
      rights: "Semarak Media Bisnis",
      loc: "Jakarta / Global"
    }
  },
  en: {
    nav: {
      about: "About Us",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      connect: "Connect",
      mainNav: "Main Navigation"
    },
    hero: {
      tag: "Est. 2025",
      title1: "Crafting",
      title2: "Impactful",
      title3: "Digital Identities.",
      desc: "We combine architectural precision with artistic flair to build brands that define the modern landscape.",
      btn: "Start a Project"
    },
    intro: {
      label: "Maximum & Measurable",
      labelDesc: "Real impact for your brand",
      title1: "About",
      title2: "Us",
      p1Start: "PT Semarak Media Bisnis",
      p1End: "is a company engaged in Marketing Agency & Online Sales, founded on October 21, 2025.",
      p2: "We focus on brand development through appropriate, data-driven marketing strategies, and creative execution that provides maximum and measurable impact to achieve long-term success."
    },
    visionMission: {
      title1: "Vision &",
      title2: "Mission",
      desc: "Our vision and mission are the main foundation in executing every strategy, ensuring each step taken aligns with the company's long-term goals and provides real impact.",
      vTitle: "Vision",
      vDesc: "To be a trusted marketing partner for leading brands in Indonesia, presenting creative solutions that drive sustainable and measurable business growth.",
      mTitle: "Mission",
      m1: "Help brands grow through planned and data-driven marketing strategies.",
      m2: "Ensure every campaign delivers maximum impact and real results.",
      m3: "Build mutually beneficial long-term partnerships."
    },
    coreValues: {
      title1: "Core",
      title2: "Values",
      desc: "Our core values are the foundation of every decision and action, shaping how we work and collaborate.",
      v1: { t: "Integrity", d: "Upholding honesty and transparency in all business relations." },
      v2: { t: "Results Oriented", d: "Real and measurable impact for our clients' growth." },
      v3: { t: "Innovation", d: "Creative approaches relevant to market dynamics." },
      v4: { t: "Collaboration", d: "Strong synergy between our internal team and external partners." }
    },
    services: {
      tag: "Our Services",
      title1: "What",
      title2: "We Do",
      s1: { t: "Strategic Marketing", d: "Design and execution of integrated marketing strategies from market research to performance evaluation.", c: "Consulting" },
      s2: { t: "Creative Campaign", d: "High-quality content production and engaging promotional campaigns across various platforms.", c: "Execution" },
      s3: { t: "Sales Optimization", d: "Management and optimization of digital sales channels to increase reach and conversion.", c: "Growth" },
      btn: "Learn More"
    },
    whyUs: {
      title1: "Why",
      title2: "Choose",
      title3: "Us",
      desc: "Our excellence lies in the combination of measurable strategy, relevant creativity, and strong ecosystem support to ensure every brand gets optimal results.",
      r1: { t: "Data-Driven Strategy", d: "Every decision is supported by data analysis to ensure the strategy implemented is effective, targeted, and generates optimal ROI." },
      r2: { t: "Experienced Creative Team", d: "Supported by a team that understands market trends and behaviors, generating relevant and impactful creative ideas." },
      r3: { t: "Integrated End-to-End Solutions", d: "We handle the entire process from planning to execution in an integrated system, ensuring efficiency and consistency." }
    },
    portfolio: {
      tag: "Portfolio",
      title1: "Selected",
      title2: "Work",
      desc: "See how we transform our clients' vision into successful and measurable campaigns.",
      viewAllFull: "View All Projects (24)",
      viewAll: "View All Projects",
      items: [
        { c: "Cozyon", cat: "E-Commerce Optimization", m: "Sales Growth", img: cozyonLogo },
        { c: "Pujji Snack", cat: "Social Media Strategy", m: "High Engagement", img: pujjiLogo },
        { c: "Viar", cat: "E-Bike Content Creation", m: "Brand Awareness", img: viarLogo },
        { c: "Uojom", cat: "Social Media Strategy", m: "Audience Growth", img: uojomLogo },
        { c: "Tasty Sound", cat: "Short Video Production", m: "Massive Viral Impact", img: tastySoundLogo }
      ]
    },
    contact: {
      tag: "Let's Connect",
      title1: "Ready to",
      title2: "Elevate",
      title3: "your Brand?",
      desc: "Together, we can achieve more. Let's discuss your next big campaign with Semarak Media Bisnis.",
      btn: "Start a Conversation",
      rights: "Semarak Media Bisnis",
      loc: "Jakarta / Global"
    }
  },
  zh: {
    nav: {
      about: "关于我们",
      services: "业务范围",
      portfolio: "作品集",
      contact: "联系我们",
      connect: "建立联系",
      mainNav: "主导航"
    },
    hero: {
      tag: "始于 2025",
      title1: "塑造",
      title2: "具有影响力",
      title3: "的数字身份",
      desc: "我们将建筑般的严谨与艺术灵感相结合，打造定义现代景观的品牌。",
      btn: "启动项目"
    },
    intro: {
      label: "卓越且可衡量",
      labelDesc: "为您的品牌带来真实影响",
      title1: "关于",
      title2: "我们",
      p1Start: "PT Semarak Media Bisnis",
      p1End: "是一家致力于营销策划与线上销售的公司，成立于 2025 年 10 月 21 日。",
      p2: "我们专注于品牌发展，通过精准的、数据驱动的营销策略和创意执行，提供最大化且可衡量的影响力，助力实现长期成功。"
    },
    visionMission: {
      title1: "愿景与",
      title2: "使命",
      desc: "我们的愿景和使命是执行每项策略的核心基础，确保所走的每一步都与公司的长期目标保持一致并产生真实影响。",
      vTitle: "愿景",
      vDesc: "成为印尼领先品牌值得信赖的营销合作伙伴，提供推动可持续和可衡量业务增长的创意解决方案。",
      mTitle: "使命",
      m1: "通过有计划且数据驱动的营销策略帮助品牌成长。",
      m2: "确保每项活动都能产生最大的影响力并获得真实成果。",
      m3: "建立互利共赢的长期合作伙伴关系。"
    },
    coreValues: {
      title1: "核心",
      title2: "价值",
      desc: "我们的核心价值观是每项决策和行动的基石，塑造了我们的工作和协作方式。",
      v1: { t: "诚信", d: "在所有业务关系中坚持诚实和透明。" },
      v2: { t: "结果导向", d: "为客户的增长带来真实且可衡量的影响。" },
      v3: { t: "创新", d: "紧跟市场动态的创意方法。" },
      v4: { t: "协作", d: "内部团队与外部合作伙伴之间的强大协同效应。" }
    },
    services: {
      tag: "我们的服务",
      title1: "我们",
      title2: "做什么",
      s1: { t: "策略营销", d: "从市场研究到绩效评估的整合营销策略的设计与执行。", c: "咨询" },
      s2: { t: "创意活动", d: "在各种平台上制作高质量内容和具有吸引力的推广活动。", c: "执行" },
      s3: { t: "销售优化", d: "数字销售渠道的管理和优化，以扩大覆盖面并提高转化率。", c: "增长" },
      btn: "了解更多"
    },
    whyUs: {
      title1: "为何",
      title2: "选择",
      title3: "我们",
      desc: "我们的优势在于可衡量的策略、相关的创意以及强大的生态系统支持的结合，确保每个品牌都能获得最佳表现。",
      r1: { t: "数据驱动策略", d: "每项决策均有数据分析支持，确保执行的策略有效、精准并产生最佳投资回报率。" },
      r2: { t: "经验丰富的创意团队", d: "由了解市场趋势和行为的团队支持，产生相关且具有影响力的创意想法。" },
      r3: { t: "端到端整合解决方案", d: "我们在一个整合系统中处理从规划到执行的整个过程，确保效率和一致性。" }
    },
    portfolio: {
      tag: "作品集",
      title1: "精选",
      title2: "作品",
      desc: "了解我们如何将客户的愿景转化为成功且可衡量的营销活动。",
      viewAllFull: "查看所有项目 (24)",
      viewAll: "查看所有项目",
      items: [
        { c: "Cozyon", cat: "电商优化", m: "销售增长", img: cozyonLogo },
        { c: "Pujji Snack", cat: "社交媒体策略", m: "高参与度", img: pujjiLogo },
        { c: "Viar", cat: "电动自行车内容创作", m: "品牌知名度", img: viarLogo },
        { c: "Uojom", cat: "社交媒体策略", m: "受众增长", img: uojomLogo },
        { c: "Tasty Sound", cat: "短视频制作", m: "巨大的病毒传播力", img: tastySoundLogo }
      ]
    },
    contact: {
      tag: "联系我们",
      title1: "准备好",
      title2: "提升",
      title3: "您的品牌了吗？",
      desc: "齐心协力，我们可以成就更多。让我们与 Semarak Media Bisnis 讨论您的下一个重大活动。",
      btn: "开始对话",
      rights: "Semarak Media Bisnis",
      loc: "雅加达 / 全球"
    }
  }
} as const;

export default function App() {
  const [lang, setLang] = useState<'id' | 'en' | 'zh'>('id');
  const [currentPage, setCurrentPage] = useState<'home' | 'detail'>('home');
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = content[lang];

  const servicesData = [
    {
      id: 1,
      title: t.services.s1.t,
      desc: t.services.s1.d,
      category: t.services.s1.c,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      fullDesc: lang === 'id' 
        ? "Layanan Strategic Marketing kami mencakup analisis mendalam terhadap pasar dan kompetitor untuk merumuskan posisi brand yang unik. Kami tidak hanya memberikan rekomendasi, tetapi juga peta jalan operasional yang memastikan setiap departemen dalam bisnis Anda bergerak menuju tujuan yang sama." 
        : (lang === 'zh' ? "我们的战略营销服务包括对市场和竞争对手的深入分析，以制定独特的品牌定位。我们不仅提供建议，还提供运营路线图，确保您业务中的每个部门都朝着同一个目标迈进。" : "Our Strategic Marketing service covers deep analysis of the market and competitors to formulate a unique brand positioning. We don't just provide recommendations, but an operational roadmap ensuring every department in your business moves toward the same goal."),
      whyItMatters: lang === 'id'
        ? "Dalam pasar yang jenuh, tanpa strategi yang jelas, brand Anda hanyalah kebisingan. Strategi yang tepat menghemat biaya marketing Anda hingga 40% dengan menargetkan audiens yang benar-benar berpotensi."
        : (lang === 'zh' ? "在饱和的市场中，如果没有明确的战略，您的品牌只是噪音。通过定位真正有潜力的受众，正确的战略可以节省高达 40% 的营销成本。" : "In a saturated market, without a clear strategy, your brand is just noise. The right strategy saves your marketing costs by up to 40% by targeting true potential audiences."),
      methodology: lang === 'id' 
        ? [
            { t: "Deep Discovery", d: "Wawancara stakeholder dan pengumpulan data internal." },
            { t: "Market Mapping", d: "Identifikasi celah pasar yang belum digarap kompetitor." },
            { t: "Strategic Blueprint", d: "Penyusunan USP (Unique Selling Proposition) dan pesan inti." },
            { t: "Growth Roadmap", d: "Riset saluran distribusi dan perencanaan kampanye 12 bulan." }
          ]
        : (lang === 'zh' ? [
            { t: "深层探索", d: "利益相关者访谈和内部数据收集。" },
            { t: "市场映射", d: "识别竞争对手尚未利用的市场空白。" },
            { t: "战略蓝图", d: "制定 USP（独特销售命题）和核心信息。" },
            { t: "增长路线图", d: "分销渠道研究和 12 个月的活动策划。" }
          ] : [
            { t: "Deep Discovery", d: "Stakeholder interviews and internal data collection." },
            { t: "Market Mapping", d: "Identifying market gaps untapped by competitors." },
            { t: "Strategic Blueprint", d: "Formulating USP (Unique Selling Proposition) and core messaging." },
            { t: "Growth Roadmap", d: "Distribution channel research and 12-month campaign planning." }
          ]),
      features: lang === 'id' ? ["Analisis Pasar & Kompetitor", "Pemetaan Customer Journey", "Penyusunan Marketing Roadmap", "Evaluasi & Optimasi Performa"] : (lang === 'zh' ? ["市场与竞争对手分析", "客户旅程地图", "营销路线图制定", "绩效评估与优化"] : ["Market & Competitor Analysis", "Customer Journey Mapping", "Marketing Roadmap Design", "Performance Evaluation & Optimization"])
    },
    {
      id: 2,
      title: t.services.s2.t,
      desc: t.services.s2.d,
      category: t.services.s2.c,
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
      fullDesc: lang === 'id' 
        ? "Melalui Creative Campaign, kami mengubah pesan brand Anda menjadi cerita yang memikat. Kami percaya bahwa kreativitas tanpa strategi hanyalah dekorasi. Itulah mengapa setiap aset visual dan narasi yang kami buat didasarkan pada psikologi konsumen untuk memancing emosi dan aksi." 
        : (lang === 'zh' ? "通过创意活动，我们将您的品牌信息转化为迷人的故事。我们相信没有策略的创意只是装饰。这就是为什么我们创建的每个视觉资产和叙述都基于消费者心理，以引发情感和行动。" : "Through Creative Campaigns, we transform your brand message into captivating stories. We believe creativity without strategy is just decoration. That's why every visual asset and narrative we create is based on consumer psychology to trigger emotion and action."),
      whyItMatters: lang === 'id'
        ? "Konten yang memiliki resonansi emosional memiliki tingkat share 3x lebih tinggi. Kami membantu brand Anda tidak hanya dilihat, tapi diingat dan dibicarakan."
        : (lang === 'zh' ? "产生情感共鸣的内容分享率高出 3 倍。我们帮助您的品牌不仅被看到，还被记住和谈论。" : "Content with emotional resonance has a 3x higher share rate. We help your brand not just be seen, but remembered and talked about."),
      methodology: lang === 'id' 
        ? [
            { t: "Conceptualization", d: "Brainstorming ide besar yang sesuai dengan DNA brand." },
            { t: "Visual Directing", d: "Pemilihan gaya visual, moodboard, dan palet warna kampanye." },
            { t: "Content Engineering", d: "Produksi aset multimedia berkualitas tinggi (Foto/Video)." },
            { t: "Amplification", d: "Distribusi konten melalui KOL, Ads, dan organic viral loop." }
          ]
        : (lang === 'zh' ? [
            { t: "概念化", d: "头脑风暴符合品牌 DNA 的大想法。" },
            { t: "视觉导向", d: "视觉风格选择、情绪板和活动调色板。" },
            { t: "内容工程", d: "制作高质量多媒体资产（照片/视频）。" },
            { t: "放大传播", d: "通过 KOL、广告和有机病毒循环分发内容。" }
          ] : [
            { t: "Conceptualization", d: "Brainstorming big ideas aligned with brand DNA." },
            { t: "Visual Directing", d: "Visual style selection, moodboards, and campaign palettes." },
            { t: "Content Engineering", d: "High-quality multimedia asset production (Photo/Video)." },
            { t: "Amplification", d: "Content distribution via KOLs, Ads, and organic viral loops." }
          ]),
      features: lang === 'id' ? ["Produksi Konten Kreatif", "Manajemen Media Sosial", "Campaign Storytelling", "Visual Branding & Design"] : (lang === 'zh' ? ["创意内容制作", "社交媒体管理", "活动故事讲述", "视觉品牌与设计"] : ["Creative Content Production", "Social Media Management", "Campaign Storytelling", "Visual Branding & Design"])
    },
    {
      id: 3,
      title: t.services.s3.t,
      desc: t.services.s3.d,
      category: t.services.s3.c,
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop",
      fullDesc: lang === 'id' 
        ? "Sales Optimization berfokus pada hasil akhir. Banyak bisnis memiliki traffic tinggi tapi konversi rendah. Kami mendatangi setiap titik dalam corong penjualan (funnel) Anda, mengidentifikasi kebocoran, dan mengoptimalkannya dengan data untuk memastikan pertumbuhan pendapatan riil." 
        : (lang === 'zh' ? "销售优化专注于最终结果。许多企业的流量很高但转化率很低。我们检查您销售漏斗中的每个点，识别漏洞，并使用数据对其进行优化，以确保真实收入增长。" : "Sales Optimization focuses on the bottom line. Many businesses have high traffic but low conversion. We go into every point in your sales funnel, identify leaks, and optimize them with data to ensure real revenue growth."),
      whyItMatters: lang === 'id'
        ? "Kenaikan 1% pada konversi funnel dapat berarti kenaikan 20% pada profit bersih. Kami menjembatani celah antara marketing dan sales."
        : (lang === 'zh' ? "漏斗转化率提高 1% 可能意味着净利润提高 20%。我们弥合了营销和销售之间的差距。" : "A 1% increase in funnel conversion can mean a 20% increase in net profit. We bridge the gap between marketing and sales."),
      methodology: lang === 'id' 
        ? [
            { t: "Funnel Audit", d: "Analisis teknis terhadap hambatan user di website/marketplace." },
            { t: "Conversion Lab", d: "A/B testing pada landing page, copy, dan penawaran." },
            { t: "CRM Integration", d: "Otomasi follow-up untuk memastikan prospek tidak terabaikan." },
            { t: "Scalability Check", d: "Optimasi budget iklan untuk ROI (Return on Investment) maksimal." }
          ]
        : (lang === 'zh' ? [
            { t: "漏斗审计", d: "对网站/市场中用户障碍的技术分析。" },
            { t: "转化实验室", d: "对落地页、文案和报价进行 A/B 测试。" },
            { t: "CRM 集成", d: "自动化跟进以确保潜在客户不会被忽视。" },
            { t: "可扩展性检查", d: "优化广告预算以获得最大的 ROI（投资回报率）。" }
          ] : [
            { t: "Funnel Audit", d: "Technical analysis of user friction on website/marketplace." },
            { t: "Conversion Lab", d: "A/B testing on landing pages, copy, and offers." },
            { t: "CRM Integration", d: "Automated follow-ups to ensure leads aren't neglected." },
            { t: "Scalability Check", d: "Ad budget optimization for maximum ROI (Return on Investment)." }
          ]),
      features: lang === 'id' ? ["Konversi Funnel Analysis", "Channel Management", "E-commerce Optimization", "Revenue Forecasting"] : (lang === 'zh' ? ["转化漏斗分析", "渠道管理", "电商优化", "收入预测"] : ["Conversion Funnel Analysis", "Channel Management", "E-commerce Optimization", "Revenue Forecasting"])
    }
  ];

  const currentService = activeService !== null ? servicesData.find(s => s.id === activeService) : null;

  const languages = [
    { code: 'id', label: 'ID', name: 'Bahasa Indonesia' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'zh', label: 'ZH', name: '简体中文' }
  ] as const;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  if (currentPage === 'detail' && currentService) {
    return (
      <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary/20">
        <nav className="fixed w-full z-50 py-4 md:py-6 px-6 md:px-12 bg-dark/95 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <button 
              onClick={() => {
                setCurrentPage('home');
                setTimeout(() => {
                  const section = document.getElementById('layanan');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="flex items-center gap-3 text-white hover:text-primary transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest">{lang === 'id' ? 'Kembali' : (lang === 'zh' ? '返回' : 'Back')}</span>
            </button>
            
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex flex-col items-end leading-tight mr-2">
                <span className="font-sans font-medium text-[10px] tracking-tight text-white uppercase text-right">Semarak</span>
                <span className="text-[7px] uppercase font-bold tracking-widest text-primary">Media Bisnis</span>
              </div>
              <div className="w-8 h-8 rounded-sm overflow-hidden border border-white/10">
                <img src="/media/SEMARAK-ICON.png" alt="Semarak Media Logo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </nav>

        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-video w-full overflow-hidden border border-white/5 mb-12">
                <img src={currentService.img} alt={currentService.title} className="w-full h-full object-cover" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-light mb-8 text-white italic leading-tight">
                {currentService.title.split(' ')[0]} <span className="font-bold not-italic text-primary">{currentService.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              
              <div className="grid md:grid-cols-3 gap-12 mt-12">
                <div className="md:col-span-2 space-y-12">
                  <div>
                    <h3 className="text-[10px] uppercase font-black tracking-widest text-primary mb-6 border-b border-white/10 pb-4">Overview</h3>
                    <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                      {currentService.fullDesc}
                    </p>
                  </div>

                  <div className="bg-secondary/50 p-8 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                    <h4 className="text-xs uppercase font-bold tracking-widest text-white mb-4">Why This Matters</h4>
                    <p className="text-gray-400 italic">"{currentService.whyItMatters}"</p>
                  </div>

                  <div>
                    <h3 className="text-[10px] uppercase font-black tracking-widest text-primary mb-8 border-b border-white/10 pb-4">Our Methodology</h3>
                    <div className="grid sm:grid-cols-2 gap-8">
                      {currentService.methodology?.map((step: any, idx: number) => (
                        <div key={idx} className="group">
                          <div className="text-[10px] font-mono text-primary/50 mb-2">0{idx + 1} // PHASE</div>
                          <h5 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{step.t}</h5>
                          <p className="text-sm text-gray-500 leading-relaxed">{step.d}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  <div>
                    <h4 className="text-[10px] uppercase font-black tracking-widest text-primary mb-6 border-b border-white/10 pb-4">Key Features</h4>
                    <ul className="space-y-4">
                      {currentService.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 group-hover:scale-150 transition-transform"></div>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 border border-white/5 bg-dot-pattern rounded-sm">
                    <h4 className="text-[10px] uppercase font-black tracking-widest text-gray-500 mb-4">Service Type</h4>
                    <div className="flex items-center gap-3">
                      <Compass size={20} className="text-primary" />
                      <span className="text-lg font-serif italic text-white">{currentService.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-serif mb-2 italic">{lang === 'id' ? 'Tertarik dengan layanan ini?' : (lang === 'zh' ? '对这项服务感兴趣吗？' : 'Interested in this service?')}</h3>
                  <p className="text-gray-500 text-sm italic">{lang === 'id' ? 'Mari konsultasi gratis.' : (lang === 'zh' ? '让我们进行免费咨询。' : 'Let\'s have a free consultation.')}</p>
                </div>
                <a href="#kontak" onClick={() => setCurrentPage('home')} className="px-10 py-4 bg-primary text-dark font-bold uppercase tracking-widest text-xs hover:bg-white transition-all">
                  {t.contact.btn}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-[10px] uppercase tracking-widest font-bold">
          © {new Date().getFullYear()} {t.contact.rights} — {t.contact.loc}
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary/20 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 py-4 md:py-6 px-6 md:px-12 transition-all duration-300 border-b border-white/10 ${isMenuOpen ? 'bg-black' : 'bg-dark/90 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm overflow-hidden">
              <img src="/media/SEMARAK-ICON.png" alt="Semarak Media Logo" className="w-full h-full object-cover" />
            </div>
            <div className={`flex flex-col leading-tight ml-1 md:ml-2 transition-all duration-300 ${isMenuOpen ? 'scale-90 origin-left opacity-80' : 'scale-100'}`}>
              <span className="font-sans font-medium text-base md:text-lg tracking-tight text-white uppercase">Semarak</span>
              <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-primary">Media Bisnis</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            <a href="#tentang-kami" className="hover:text-white transition-colors uppercase">{t.nav.about}</a>
            <a href="#layanan" className="hover:text-white transition-colors uppercase">{t.nav.services}</a>
            <a href="#portofolio" className="hover:text-white transition-colors uppercase">{t.nav.portfolio}</a>
            <a href="#kontak" className="px-6 py-2 bg-primary text-dark font-bold hover:bg-white transition-all hover:shadow-lg hover:shadow-primary/30">{t.nav.contact}</a>
            <div className="relative group ml-4">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                onBlur={() => setTimeout(() => setIsLangOpen(false), 200)}
                className="flex items-center gap-2 hover:text-white transition-colors py-2 uppercase tracking-widest text-[10px] font-bold border-l border-white/10 pl-6"
              >
                <Globe size={14} className="text-primary" />
                <span>{lang.toUpperCase()}</span>
                <ChevronDown size={10} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full right-0 mt-2 w-40 bg-secondary border border-white/10 overflow-hidden shadow-2xl transition-all duration-300 z-50 ${isLangOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full px-5 py-3 text-[10px] text-left uppercase tracking-widest font-bold transition-colors hover:bg-white/5 ${lang === l.code ? 'text-primary' : 'text-gray-400'}`}
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Right Icons */}
          <div className={`md:hidden flex items-center gap-4 transition-all duration-300 relative ${isMenuOpen ? 'bg-black/50 px-3 py-1 rounded-full border border-white/5' : ''}`}>
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Selection Language"
              >
                <Globe size={20} />
              </button>
              
              {/* Mobile Language Dropdown */}
              <div className={`absolute top-full right-0 mt-4 w-48 bg-secondary border border-white/10 shadow-2xl transition-all duration-300 z-[110] rounded-lg overflow-hidden ${isLangOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <div className="p-3 border-b border-white/10 text-[9px] uppercase tracking-widest text-primary font-black">
                  Select Language
                </div>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full px-5 py-4 text-xs text-left uppercase tracking-widest font-bold transition-colors flex items-center justify-between hover:bg-white/5 ${lang === l.code ? 'text-primary bg-primary/5' : 'text-gray-300'}`}
                  >
                    <span>{l.name}</span>
                    {lang === l.code && <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>}
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-primary"
            >
              <div className="space-y-1.2 w-6">
                <div className={`h-0.5 w-6 bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`h-0.5 w-6 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className={`h-0.5 w-6 bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Menu */}
        <div className={`fixed inset-0 z-[100] bg-[#0a0a0a] transition-all duration-700 md:hidden flex flex-col ${isMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}>
          <div className="absolute top-0 right-0 p-6">
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-primary border border-primary/20 rounded-full hover:bg-white/5 transition-colors">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col justify-center px-10">
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary font-black mb-10 opacity-50">{t.nav.mainNav}</div>
            <nav className="space-y-6">
              {[
                { label: t.nav.about, href: "#tentang-kami" },
                { label: t.nav.services, href: "#layanan" },
                { label: t.nav.portfolio, href: "#portofolio" },
                { label: t.nav.contact, href: "#kontak" }
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isMenuOpen ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-3xl font-serif italic text-white hover:text-primary transition-all font-bold tracking-tight"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          <div className="p-10 bg-secondary/30 border-t border-white/5">
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-end">
                <div className="space-y-4">
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{t.nav.connect}</div>
                  <div className="flex gap-6">
                    <Linkedin size={22} className="text-gray-400 hover:text-primary transition-colors" />
                    <Globe size={22} className="text-gray-400 hover:text-primary transition-colors" />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-primary font-serif italic text-lg leading-none">Semarak</div>
                  <div className="text-[8px] uppercase tracking-widest text-gray-600 font-bold mt-1">Jakarta / 2026</div>
                </div>
              </div>
              <a 
                href="#kontak" 
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-5 bg-primary text-dark font-black uppercase tracking-widest text-[10px] text-center hover:bg-white transition-colors"
              >
                Mulai Proyek Sekarang
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Language Modal Overlay removed in favor of relative dropdown */}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-dark z-0">
          <div className="absolute top-1/4 -right-1/4 w-[40rem] md:w-[60rem] h-[40rem] md:h-[60rem] bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[30rem] md:w-[40rem] h-[30rem] md:h-[40rem] bg-gray-500/5 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-3 py-1 border border-primary/20 text-primary uppercase tracking-widest text-[10px] font-black mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              {t.hero.tag}
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black leading-[1.1] mb-8 text-white tracking-tighter">
              <span className="block italic font-light opacity-90">{t.hero.title1}</span>
              <span className="block text-primary transform scale-y-110 origin-left">{t.hero.title2}</span>
              <span className="block">{t.hero.title3}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed font-light">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a href="#layanan" className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-10 py-5 bg-primary text-dark font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-primary/10">
                {t.hero.btn} <ArrowRight size={18} />
              </a>

            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="aspect-[4/5] lg:aspect-square overflow-hidden border border-white/5 relative group p-4">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern corporate building skyline" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-[20px] border-dark/20 pointer-events-none"></div>
            </div>
            
            {/* Stats Overlay for Desktop */}
            <div className="absolute -bottom-10 -left-10 bg-secondary p-8 border border-white/10 shadow-2xl backdrop-blur-md">
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary font-serif">150+</div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold font-sans">Projects</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="tentang-kami" className="py-20 md:py-32 px-6 bg-secondary relative border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="relative order-2 md:order-1"
          >
            <div className="relative overflow-hidden shadow-2xl border border-white/5">
               <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="Team working on marketing strategy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-dark p-6 shadow-2xl max-w-xs border border-white/10 hidden md:block border-l-2 border-l-primary">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="font-bold text-white uppercase text-sm tracking-widest">{t.intro.label}</p>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{t.intro.labelDesc}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="order-1 md:order-2"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              {t.intro.title1} <span className="font-bold text-primary">{t.intro.title2}</span>
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-6 text-lg text-gray-400 font-light">
              <p>
                <strong className="text-white font-semibold flex items-center gap-2"><span className="text-primary text-xl">→</span> {t.intro.p1Start}</strong> {t.intro.p1End}
              </p>
              <p>
                {t.intro.p2}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              {t.visionMission.title1} <span className="font-bold text-primary">{t.visionMission.title2}</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-400 font-light">
              {t.visionMission.desc}
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-secondary p-10 md:p-12 border border-white/5 text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-4 mb-8">
                <Target size={32} className="text-primary" />
                <h3 className="text-3xl font-serif font-light">{t.visionMission.vTitle}</h3>
              </div>
              <p className="text-lg text-gray-400 font-light leading-relaxed">
                {t.visionMission.vDesc}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary p-10 md:p-12 border border-white/5 text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-4 mb-8">
                <Compass size={32} className="text-primary" />
                <h3 className="text-3xl font-serif font-light">{t.visionMission.mTitle}</h3>
              </div>
              <ul className="space-y-4 text-lg text-gray-400 font-light">
                <li className="flex gap-4">
                  <div className="pt-1"><span className="text-primary">→</span></div>
                  <p>{t.visionMission.m1}</p>
                </li>
                <li className="flex gap-4">
                  <div className="pt-1"><span className="text-primary">→</span></div>
                  <p>{t.visionMission.m2}</p>
                </li>
                <li className="flex gap-4">
                  <div className="pt-1"><span className="text-primary">→</span></div>
                  <p>{t.visionMission.m3}</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 px-6 bg-darker text-white border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
                {t.coreValues.title1} <span className="font-bold text-primary">{t.coreValues.title2}</span>
              </h2>
              <p className="text-lg text-gray-400 font-light">
                {t.coreValues.desc}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <ShieldCheck size={24} />, title: t.coreValues.v1.t, desc: t.coreValues.v1.d },
              { icon: <Target size={24} />, title: t.coreValues.v2.t, desc: t.coreValues.v2.d },
              { icon: <Lightbulb size={24} />, title: t.coreValues.v3.t, desc: t.coreValues.v3.d },
              { icon: <Users size={24} />, title: t.coreValues.v4.t, desc: t.coreValues.v4.d }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-secondary p-8 border border-white/5 hover:border-primary/50 transition-colors group"
              >
                <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform origin-left">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-sans tracking-tight">{value.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do (Services) */}
      <section id="layanan" className="py-20 md:py-32 px-6 bg-dark relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">{t.services.tag}</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white">
              {t.services.title1} <span className="font-bold">{t.services.title2}</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {servicesData.map((service, i) => (
               <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                onClick={() => {
                  setActiveService(service.id);
                  setCurrentPage('detail');
                  window.scrollTo(0, 0);
                }}
                className="group bg-secondary border border-white/5 cursor-pointer hover:border-primary/30 transition-all overflow-hidden flex flex-col"
              >
                <div className="h-48 overflow-hidden relative border-b border-white/5">
                  <div className="absolute inset-0 bg-dark/40 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-dark/80 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-primary border border-white/10 font-bold">{service.category}</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight font-sans tracking-tight">{service.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed text-sm mb-6 flex-1">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-primary text-[10px] uppercase tracking-widest font-black mt-auto opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-y-2 md:group-hover:translate-y-0">
                    {t.services.btn} <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 px-6 bg-secondary relative border-y border-white/5">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-dark to-transparent opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center flex-row-reverse relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 md:order-1"
          >
            <div className="aspect-[4/5] md:aspect-square border border-white/5 overflow-hidden shadow-2xl relative bg-dark">
              <div className="absolute inset-0 bg-dark/20 mix-blend-multiply z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Business metrics checking" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-80"
              />
              <div className="absolute top-8 right-8 w-[100px] h-[100px] border border-primary/40 z-20"></div>
              <div className="absolute bottom-8 left-8 w-[150px] h-[150px] border border-white/10 z-20 mix-blend-overlay"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              {t.whyUs.title1} <span className="font-bold">{t.whyUs.title2}</span> {t.whyUs.title3}
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-light leading-relaxed">
              {t.whyUs.desc}
            </p>

            <div className="space-y-8">
              {[
                { title: t.whyUs.r1.t, desc: t.whyUs.r1.d },
                { title: t.whyUs.r2.t, desc: t.whyUs.r2.d },
                { title: t.whyUs.r3.t, desc: t.whyUs.r3.d }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="mt-1">
                    <div className="w-8 h-8 flex items-center justify-center border border-white/10 group-hover:border-primary transition-colors">
                      <div className="w-2 h-2 bg-primary"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed font-light text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portofolio" className="py-20 md:py-32 px-6 bg-dark border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">{t.portfolio.tag}</span>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-white">
                {t.portfolio.title1} <span className="font-bold">{t.portfolio.title2}</span>
              </h2>
              <p className="text-lg text-gray-400 font-light">
                {t.portfolio.desc}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.portfolio.items.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden aspect-[4/5] cursor-pointer border border-white/5"
              >
                <img src={project.img} alt={project.c} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent flex flex-col justify-end p-8">
                  <div className="mb-2">
                    <span className="inline-block bg-dark/80 backdrop-blur-sm px-2 py-1 text-[10px] text-primary uppercase font-bold tracking-widest border border-white/10">
                      {project.cat}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white font-serif">{project.c}</h3>
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-dark/50 backdrop-blur-md w-fit">
                      <TrendingUp size={14} className="text-primary" />
                      <span className="font-bold text-xs uppercase tracking-widest">{project.m}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="kontak" className="bg-dark pt-24 pb-12 px-6 relative overflow-hidden flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto border border-white/5 bg-secondary p-8 sm:p-12 md:p-24 relative mb-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 border border-white/5 rotate-45 transform translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-6 block">{t.contact.tag}</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-8 italic leading-tight">
              {t.contact.title1} <span className="font-bold not-italic">{t.contact.title2}</span> {t.contact.title3}
            </h2>
            <p className="text-lg text-gray-400 mb-10 font-light">
              {t.contact.desc}
            </p>
            <a href="mailto:hello@semarakmedia.com" className="inline-flex items-center gap-4 px-8 py-4 bg-primary text-dark font-bold uppercase tracking-tighter text-sm hover:bg-white transition-all">
              {t.contact.btn} <ArrowRight size={18} />
            </a>
          </div>
        </div>
        
        <div className="max-w-7xl w-full mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            <div>&copy; {new Date().getFullYear()} {t.contact.rights}</div>
            <div className="flex gap-6">
              <a href="https://www.tiktok.com/@semarak.media" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
              <a href="https://www.linkedin.com/company/semarak-media-bisnis/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <div>{t.contact.loc}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const Compass = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
)

