import aiVisualImage from '../assets/ai-visual.jpg'
import haierImage from '../assets/haier-event-selected.jpg'
import portraitCourseImage from '../assets/portrait-interview-user.png'
import qinghongImage from '../assets/qinghong-chef-selected.jpg'
import sonyImage from '../assets/sony-tv-selected.jpg'

export type Project = {
  category: string
  title: string
  description: string
  label: string
  image: string
  alt: string
}

export type Capability = {
  index: string
  title: string
  description: string
}

export const portfolioData = {
  profile: {
    name: '姬忠宽',
    role: '商业影像项目负责人 / 摄像导演 / AI 内容制作',
    statement: '把一场内容项目，从想法做成现场。',
    introduction:
      '我是姬忠宽，摄影师、摄像导演与商业影像项目负责人。为品牌、人物与现场制作影像，也把 AI 融入策划、视觉创作和项目准备。',
    biography: [
      '我的工作从拍摄出发，涉及品牌产品、家电与电商内容、人物访谈、课程口播、活动展会、直播预热、美业与门店内容和微综艺。不同项目需要不同的镜头语言：产品要看清细节，人物要表达自然，现场要抓住节奏，商业内容要让信息被理解。',
      '可以按项目需要承担摄像、摄影、剪辑与包装，也可以向前参与创意、脚本和拍摄方案，配合现场调度、素材管理与交付。合作可以从一个明确的拍摄任务开始，也可以一起梳理整场内容项目。',
      'AI 是我实际使用的制作工具。从文案协作、片头、漫画与生成式视频，到用 vibe coding 制作辅助工具，我关注这些能力怎样进入真实工作，让前期准备更完整、视觉尝试更充分。',
    ],
  },
  metrics: [
    { value: '6 年', label: '商业影像项目经验' },
    { value: '多场景', label: '品牌、活动、人物与短内容' },
    { value: '全链路', label: '从内容判断到落地交付' },
  ],
  serviceFocus: ['品牌内容', '活动现场', '人物与口播', 'AI 视觉'],
  industryFocus: ['家电与电商', '美业与门店', '教育与知识', '企业与活动', '综艺与娱乐内容'],
  services: [
    { title: '品牌与产品', english: 'BRAND / PRODUCT', description: '品牌宣传、产品讲解、家电与电商视频。通过细节、使用情境和人物演示，把产品信息变成可观看的内容。', formats: '品牌短片 · 产品展示 · 卖点讲解 · 使用演示' },
    { title: '活动与展会', english: 'EVENT / EXHIBITION', description: '企业活动、发布会、展会和线下现场。兼顾现场氛围、关键人物与完整事件，为后续传播积累素材。', formats: '活动记录 · 展会视频 · 现场采访 · 回顾短片' },
    { title: '人物与口播', english: 'PEOPLE / INTERVIEW', description: '人物访谈、专业口播与账号内容。把表达、光线和环境放在一起考虑，让出镜者自然、信息清楚。', formats: '人物访谈 · 专业口播 · 人物故事 · 账号拍摄' },
    { title: '直播与商业短内容', english: 'LIVE / SOCIAL CONTENT', description: '直播预热与现场拍摄配合、门店内容、信息流视频和账号短内容。结合使用场景安排镜头、节奏和多版本输出。', formats: '直播预热 · 门店内容 · 信息流素材 · 抖音账号拍摄' },
    { title: '课程与知识内容', english: 'COURSE / EDUCATION', description: '课程、教学、培训与知识分享。让讲授者的状态、演示细节和画面节奏服务于内容理解。', formats: '课程拍摄 · 教学演示 · 培训记录 · 知识口播' },
    { title: '微综艺与项目策划', english: 'VARIETY / PLANNING', description: '从节目机制、环节和脚本到现场执行文件，协同视觉方向、内容组织与拍摄准备。', formats: '节目机制 · 流程脚本 · 手卡物料 · 前期统筹' },
    { title: '摄影与现场图片', english: 'PHOTOGRAPHY', description: '视频之外，也用照片记录人物、活动和商业现场。根据用途选择画面，提供适合展示与传播的图片。', formats: '活动摄影 · 人物记录 · 商业现场 · 图片交付' },
    { title: 'AI 视觉与制作协作', english: 'AI / CREATIVE WORKFLOW', description: 'AI 片头、漫画、生成式视频和视觉预演；结合文案协作与 vibe coding，把工具接入项目流程。', formats: 'AI 视频 · 片头漫画 · 文案协作 · 辅助工具' },
  ],
  collaboration: [
    { title: '明确任务的拍摄', description: '已有脚本或方案，配合摄像、摄影、采访与现场拍摄。' },
    { title: '一起完善内容', description: '从用途和受众出发，协作创意、文案、镜头清单与执行方案。' },
    { title: '拍摄与后期交付', description: '衔接素材、剪辑、调色与包装；已有素材也可以单独沟通剪辑。' },
  ],
  qinghongChef: {
    title: '青红厨师2',
    kicker: '微综艺全案 / AI 制作实践',
    summary: '以一档微综艺为样本：一个人配合 AI，把创意、视觉与现场准备推进成可执行的前期系统。',
    image: qinghongImage,
    chapters: [
      {
        title: '前期系统',
        description: '将节目创意落成赛制、分集流程、主持人口播、现场手卡、食材物料清单与执行文件，建立可用于现场的准备系统。',
      },
      {
        title: 'AI 视觉',
        description: '制作 AI 综艺片头与漫画化视觉，并用预演图探索包装方向，把生成式创作接入真实节目内容。',
      },
      {
        title: '执行工具',
        description: '一个人配合 AI 整理复杂前期工作；通过文案协作、文档生成与 vibe coding 辅助工具，连接创意和现场执行。',
      },
    ],
  },
  projects: [
    {
      category: '品牌与产品内容',
      title: '电视内容拍摄',
      description: '用产品环境、讲解节奏与使用情境，把参数信息转成更易观看的内容表达。',
      label: 'PRODUCT CONTENT',
      image: sonyImage,
      alt: '电视产品内容项目画面',
    },
    {
      category: '线下活动与品牌现场',
      title: '活动现场记录',
      description: '围绕现场节奏、人与空间组织拍摄，为后续传播保留可用的真实素材。',
      label: 'LIVE EVENT',
      image: haierImage,
      alt: '品牌活动现场项目画面',
    },
    {
      category: 'AI 视觉与生成式影像',
      title: 'AI 片头与视觉实验',
      description: '将生成式画面作为内容的一部分，用于片头、风格化叙事与项目预演。',
      label: 'AI VISUAL',
      image: aiVisualImage,
      alt: 'AI 视觉项目画面',
    },
    {
      category: '人物访谈与课程内容',
      title: '人物表达内容制作',
      description: '让人物、空间与表达同框，用稳定的构图和节奏保留真实而有质感的叙事。',
      label: 'PORTRAIT CONTENT',
      image: portraitCourseImage,
      alt: '人物访谈项目画面',
    },
  ] satisfies Project[],
  photoAlbums: [
    { title: '摄影作品集一', href: 'https://www.pailixiang.com/m/album_ia10113949854.html' },
    { title: '摄影作品集二', href: 'https://www.pailixiang.com/m/album_ia8472388618.html' },
  ],
  capabilities: [
    {
      index: '01',
      title: '内容策略',
      description: '脚本、镜头清单、提案与文案协作，让拍摄在开机前就有清楚的路径。',
    },
    {
      index: '02',
      title: '影像制作',
      description: '拍摄、剪辑、包装与多版本输出，保持内容在不同平台上的观看完整性。',
    },
    {
      index: '03',
      title: '项目执行',
      description: '现场调度、素材管理与多方协同，把创意要求转成可完成的执行节点。',
    },
    {
      index: '04',
      title: 'AI 制作系统',
      description: 'AIGC 视觉、AI 视频、vibe coding 与自动化文档，为制作流程留出更多创造空间。',
    },
  ] satisfies Capability[],
  contact: {
    phone: '18501237646',
    email: '18501237646@163.com',
    location: '上海 / 可沟通异地项目',
  },
}
