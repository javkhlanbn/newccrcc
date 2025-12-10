import { NavItem, Project, DocumentItem, NewsItem, TeamMember } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'projects',
    label: 'Төсөлүүд',
    children: [
      { id: 'p1', label: 'Нүүрстөрөгчийн бүртгэлийн сан', path: '/projects/carbon-registry' },
      { id: 'p2', label: 'Уур амьсгалын өөрчлөлтөд дасан зохицох төлөвлөлтийн процессыг боловсронгуй болгох чадавхыг бэхжүүлэх төсөл', path: '/projects/adaptation-planning' },
      { id: 'p3', label: 'Монгол орны хүлэрт газрыг удирдах, бэлчээрийн экосистем', path: '/projects/peatland-management' },
      { id: 'p4', label: 'Монгол орны метан хийн ялгарлыг бууруулах үндэсний замын зураглал', path: '/projects/methane-reduction' },
      { id: 'p5', label: 'НҮБ-ын УАӨСК-ын үндэсний 5-р тайлан, Ил тод байдлын тайлан', path: '/projects/unfccc-reports' },
    ]
  },
  {
    id: 'transparency',
    label: 'Ил тод байдал',
    children: [
      { id: 't1', label: 'Шилэн данс', path: '/transparency/glass-accounts' },
      { id: 't2', label: 'Төлөвлөгөө, төсөв, санхүү, аудит', path: '/transparency/finance-audit' },
    ]
  },
  {
    id: 'latest',
    label: 'Сүүлийн үеийн',
    children: [
      { id: 'l1', label: 'Байгууллагын мэдээ', path: '/news/org' },
      { id: 'l2', label: 'Бусад мэдээ, мэдээллүүд', path: '/news/other' },
      { id: 'l3', label: 'Байгаль орчин, эдийн засгийн бүртгэлийн систем', path: '/news/system' },
    ]
  },
  {
    id: 'about',
    label: 'Бидний тухай',
    children: [
      { id: 'a1', label: 'Бидний тухай', path: '/about/us' },
      { id: 'a2', label: 'Бидний нөлөө', path: '/about/impact' },
      { id: 'a3', label: 'Манай мэргэжилтнүүд', path: '/about/team' },
      { id: 'a4', label: 'Биднийг дэмжих', path: '/about/support' },
      { id: 'a5', label: 'Түгээмэл асуултууд', path: '/about/faq' },
      { id: 'a6', label: 'Ажлын байр', path: '/about/careers' },
    ]
  },
  {
    id: 'contact',
    label: 'Холбоо барих',
    path: '/contact'
  }
];

export const MOCK_PROJECTS: Record<string, Project> = {
  'carbon-registry': {
    id: 'p1',
    slug: 'carbon-registry',
    title: 'Нүүрстөрөгчийн бүртгэлийн сан',
    summary: 'Үндэсний хэмжээнд нүүрстөрөгчийн ялгарал, шингээлтийг бүртгэх нэгдсэн систем.',
    image: 'https://picsum.photos/800/600?random=1',
    status: 'Ongoing',
    objectives: [
      'Үндэсний бүртгэлийн нэгдсэн системийг бий болгох',
      'Олон улсын стандартад нийцүүлэх',
      'Мэдээллийн ил тод байдлыг хангах'
    ],
    activities: [
      'Програм хангамж хөгжүүлэлт',
      'Мэргэжилтнүүдийг сургах',
      'Өгөгдөл цуглуулах дэд бүтцийг сайжруулах'
    ],
    outputs: [
      'Ажиллах боломжтой бүртгэлийн систем',
      'Сургагдсан 50+ мэргэжилтэн',
      'Жил бүрийн тайлан'
    ]
  },
  'adaptation-planning': {
    id: 'p2',
    slug: 'adaptation-planning',
    title: 'Уур амьсгалын өөрчлөлтөд дасан зохицох төлөвлөлтийн процессыг боловсронгуй болгох',
    summary: 'Уур амьсгалын өөрчлөлтийн нөлөөлөлд хамгийн өртөмтгий салбаруудын дасан зохицох чадавхыг бэхжүүлэх.',
    image: 'https://picsum.photos/800/600?random=2',
    status: 'Ongoing',
    objectives: [
      'Салбар хоорондын уялдаа холбоог сайжруулах',
      'Эрсдэлийн үнэлгээний аргачлалыг нэвтрүүлэх'
    ],
    activities: [
      'Бодлогын баримт бичиг боловсруулах',
      'Орон нутгийн сургалт зохион байгуулах'
    ],
    outputs: [
      'Үндэсний дасан зохицох төлөвлөгөө (NAP)',
      'Салбарын стратеги төлөвлөгөө'
    ]
  },
  'peatland-management': {
    id: 'p3',
    slug: 'peatland-management',
    title: 'Монгол орны хүлэрт газрыг удирдах, бэлчээрийн экосистем',
    summary: 'Эмзэг экосистемийг хамгаалах, малчдын амьжиргааг дэмжих.',
    image: 'https://picsum.photos/800/600?random=3',
    status: 'Ongoing',
    objectives: ['Хүлэрт газрын зураглал гаргах', 'Бэлчээрийн даацыг тооцох'],
    activities: ['Хээрийн судалгаа', 'Малчдын бүлэг байгуулах'],
    outputs: ['Хамгааллын менежментийн төлөвлөгөө']
  },
  'methane-reduction': {
    id: 'p4',
    slug: 'methane-reduction',
    title: 'Метан хийн ялгарлыг бууруулах үндэсний замын зураглал',
    summary: 'Хүлэмжийн хийн томоохон эх үүсвэр болох метаныг бууруулах стратеги.',
    image: 'https://picsum.photos/800/600?random=4',
    status: 'Planned',
    objectives: ['Метаны эх үүсвэрийг тоолох', 'Технологийн шийдэл хайх'],
    activities: ['Суурь судалгаа', 'Технологийн туршилт'],
    outputs: ['Замын зураглал батлах']
  },
  'unfccc-reports': {
    id: 'p5',
    slug: 'unfccc-reports',
    title: 'НҮБ-ын УАӨСК-ын үндэсний тайлангууд',
    summary: 'Олон улсын гэрээгээр хүлээсэн үүргээ биелүүлж тайлагнах.',
    image: 'https://picsum.photos/800/600?random=5',
    status: 'Ongoing',
    objectives: ['Тайлан боловсруулах', 'Мэдээллийн санг шинэчлэх'],
    activities: ['Өгөгдөл боловсруулалт', 'Хэлэлцүүлэг'],
    outputs: ['Үндэсний 5-р тайлан']
  }
};

export const DOCUMENTS: DocumentItem[] = [
  { id: '1', title: '2024 оны төсвийн төлөвлөгөө', type: 'PDF', date: '2024-01-15', size: '2.4 MB', category: 'Budget' },
  { id: '2', title: '2023 оны санхүүгийн аудитын тайлан', type: 'PDF', date: '2024-03-20', size: '5.1 MB', category: 'Audit' },
  { id: '3', title: 'Худалдан авалтын жагсаалт Q1', type: 'XLSX', date: '2024-04-10', size: '0.8 MB', category: 'Budget' },
  { id: '4', title: 'Стратеги төлөвлөгөө 2024-2030', type: 'DOCX', date: '2023-12-01', size: '1.2 MB', category: 'Plan' },
  { id: '5', title: 'Шилэн дансны мэдээлэл 2024 Q2', type: 'PDF', date: '2024-07-05', size: '1.5 MB', category: 'Report' },
  { id: '6', title: 'Байгаль орчны үнэлгээний тайлан', type: 'PDF', date: '2024-02-14', size: '8.3 MB', category: 'Report' },
];

export const TEAM: TeamMember[] = [
  { id: '1', name: 'Б. Бат-Эрдэнэ', position: 'Төслийн зохицуулагч', bio: 'Байгаль орчны салбарт 15 жил ажилласан туршлагатай.', photoUrl: 'https://picsum.photos/200/200?random=10' },
  { id: '2', name: 'Д. Сарангэрэл', position: 'Санхүүгийн менежер', bio: 'Олон улсын төслүүдийн санхүүжилтийг удирдаж байсан.', photoUrl: 'https://picsum.photos/200/200?random=11' },
  { id: '3', name: 'Г. Болд', position: 'Техникийн зөвлөх', bio: 'Уур амьсгалын өөрчлөлтийн чиглэлээр докторын зэрэг хамгаалсан.', photoUrl: 'https://picsum.photos/200/200?random=12' },
  { id: '4', name: 'Т. Оюун', position: 'Хяналт шинжилгээний мэргэжилтэн', bio: 'Төслийн хэрэгжилтэд хяналт тавих чиглэлээр мэргэшсэн.', photoUrl: 'https://picsum.photos/200/200?random=13' },
];

export const LATEST_NEWS: NewsItem[] = [
  { id: '1', title: 'Нүүрстөрөгчийн зах зээлийн шинэ боломжууд', excerpt: 'Монгол улс олон улсын нүүрстөрөгчийн зах зээлд оролцох бэлтгэл ажлыг хангаж байна.', date: '2024-05-15', category: 'Байгууллагын мэдээ', imageUrl: 'https://picsum.photos/600/400?random=20' },
  { id: '2', title: 'Хөвсгөл аймагт хэрэгжүүлж буй төслийн явц', excerpt: 'Хүлэрт газрыг хамгаалах ажлын хүрээнд орон нутгийн иргэдтэй уулзалт зохион байгууллаа.', date: '2024-05-10', category: 'Төслийн мэдээ', imageUrl: 'https://picsum.photos/600/400?random=21' },
  { id: '3', title: 'COP29 бага хуралд оролцох бэлтгэл', excerpt: 'Уур амьсгалын өөрчлөлтийн талуудын бага хуралд Монгол улсын баг бэлтгэж байна.', date: '2024-05-01', category: 'Гадаад харилцаа', imageUrl: 'https://picsum.photos/600/400?random=22' },
];