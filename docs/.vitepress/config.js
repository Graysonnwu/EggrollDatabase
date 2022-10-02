const base = '/EggrollDatabase/'
const faviconHref = `${base}eggroll.png`

export default {
  title: 'EggrollDatabase',
  lang: 'zh-CN',
  base,
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: faviconHref }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: faviconHref }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: faviconHref }],
    ['link', { rel: 'shortcut icon', href: faviconHref }],
  ],
  themeConfig: {
    siteTitle: 'EggrollDatabase',
    logo: '/eggroll.png',

    nav: [
      { text: '1~100期', link: '/1-100期/', activeMatch: '/1-100期/' },
      { text: '101~200期', link: '/101-200期/', activeMatch: '/101-200期/' },
      { text: '201~300期', link: '/201-300期/', activeMatch: '/201-300期/' },
      { text: '301~400期', link: '/301-400期/', activeMatch: '/301-400期/' },
      { text: '401~500期', link: '/401-500期/', activeMatch: '/401-500期/' },
      { text: 'Github', link: 'https://github.com/Graysonnwu/SQXX-DB' },

      // {
      //   text: '下拉菜单',
      //   items: [
      //     { text: 'index', link: '/index' },
      //     { text: 'test', link: '/test' },
      //     { text: 'Github', link: 'https://github.com/Graysonnwu/SQXX-DB' }
      //   ]
      // },

      // {
      //   text: '下拉分隔菜单',
      //   items: [
      //     {
      //       text: 'Section A Title',
      //       items: [
      //         { text: 'Section A Item A1', link: '...' },
      //         { text: 'Section A Item A2', link: '...' }
      //       ]
      //     },
      //     {
      //       text: 'Section B Title',
      //       items: [
      //         { text: 'Section B Item B1', link: '...' },
      //         { text: 'Section B Item B2', link: '...' }
      //       ]
      //     }
      //   ]
      // },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Graysonnwu/SQXX-DB' },
      { icon: 'twitter', link: 'https://twitter.com/Graysonnosyarg' },
    ],

    sidebar: {
      '/1-100期/': [
        {
          text: '1 ~ 10 期',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '1. 卖大麻竟然都卖亏本，加拿大此刻啥心情？', link: '/1-100期/1' },
            { text: '2. 中国人在俄罗斯被抢劫，犯人是……俄国特种部队？', link: '/1-100期/2' },
            { text: '3. 有人因为没热搜就怀疑周杰伦不红？说明90后也老了', link: '/1-100期/3' },
            { text: '4. 英国终于要普及4G了？中国马上有5G换下来的设备……', link: '/1-100期/4' },
            { text: '5. 蔡英文走私万条香烟？误会了，分赃而已，常规操作', link: '/1-100期/5' },
            { text: '6. 薛蛮子们的柬埔寨梦：一块地割两波韭菜', link: '/1-100期/6' },
            { text: '7. 喝完这杯珍珠奶茶，大陆人民还记得起台湾什么？', link: '/1-100期/7' },
            { text: '8. 每年大量从日韩进口的PX，突然被中国“白菜化”了？', link: '/1-100期/8' },
            { text: '9. 大陆要用什么替代金马奖？台湾能用什么替代大陆？', link: '/1-100期/9' },
            { text: '10. 修高铁第一步需要做什么？意大利政府：内斗', link: '/1-100期/10' },
          ]
        },
        {
          text: '11 ~ 20 期',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '11. 为啥美国华人不想要华裔总统？', link: '/1-100期/11' },
            { text: '12. 在印度，你甚至可以找到全人工版“人工智能”', link: '/1-100期/12' },
            { text: '13. 院士被关五年，科研停了，却一份判决书都没有？', link: '/1-100期/13' },
            { text: '14. 巴西非但不想给亚马逊灭火，甚至有点想多烧一会', link: '/1-100期/14' },
            { text: '15. 四川主动送来高压电，江西为啥不想要？', link: '/1-100期/15' },
            { text: '16. 如果中国也收“单身税”，靠谁来生下一代？', link: '/1-100期/16' },
            { text: '17. 让蔡徐坤拿大奖的榜单，7年前就在台湾省丢过人', link: '/1-100期/17' },
            { text: '18. 日本：捕鱼配额不够怎么办？从台湾手里拿一点', link: '/1-100期/18' },
            { text: '19. 去武汉最偏僻的大学，洗大学里最贵的澡堂', link: '/1-100期/19' },
            { text: '20. 日本首相也“世袭”？小泉：又轮到我家了', link: '/1-100期/20' },
          ]
        },
      ],

      '/101-200期/': [
        {
          text: '101 ~ 110 期',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '101. 又是凉山火灾，又是19人牺牲，我们该吸取什么教训？', link: '/101-200期/101' },
            { text: '102. ', link: '/101-200期/102' },
            { text: '103. ', link: '/101-200期/103' },
            { text: '104. ', link: '/101-200期/104' },
            { text: '105. ', link: '/101-200期/105' },
            { text: '106. ', link: '/101-200期/106' },
            { text: '107. ', link: '/101-200期/107' },
            { text: '108. ', link: '/101-200期/108' },
            { text: '109. ', link: '/101-200期/109' },
            { text: '110. ', link: '/101-200期/110' },
          ]
        },
        {
          text: '11 ~ 20 期',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '111. 深圳房价这样涨下去，会变成第二个香港么？', link: '/101-200期/111' },
            { text: '112. ', link: '/101-200期/112' },
            { text: '113. ', link: '/101-200期/113' },
            { text: '114. ', link: '/101-200期/114' },
            { text: '115. ', link: '/101-200期/115' },
            { text: '116. ', link: '/101-200期/116' },
            { text: '117. ', link: '/101-200期/117' },
            { text: '118. ', link: '/101-200期/118' },
            { text: '119. ', link: '/101-200期/119' },
            { text: '120. ', link: '/101-200期/120' },
          ]
        },
      ],
    }


    // sidebar: [
    //   {
    //     text: '1~100期',
    //     collapsible: true,
    //     collapsed: true,
    //     items: [
    //       { text: '1~20期', link: '/1-100期/_nav/1-20' },
    //       { text: '21~40期', link: '/1-100期/_nav/21-40' },
    //     ]
    //   },
    //   {
    //     text: '101~200期',
    //     collapsible: true,
    //     collapsed: true,
    //     items: [
    //       { text: '101~120期', link: '/1-100期/19' },
    //       { text: '121~140期', link: '/1-100期/40' },
    //     ]
    //   },

    //   // {
    //   //   text: '201~300期',
    //   //   collapsible: true,
    //   //   collapsed: true,
    //   //   items: [
    //   //     {
    //   //       text: 'Section A Title',
    //   //       collapsible: true,
    //   //       collapsed: true,
    //   //       items: [
    //   //         { text: 'Section A Item A1', link: '/1-100期/19.5' },
    //   //         { text: 'Section A Item A2', link: '/1-100期/99' }
    //   //       ]
    //   //     },
    //   //     {
    //   //       text: 'Section B Title',
    //   //       collapsible: true,
    //   //       collapsed: true,
    //   //       items: [
    //   //         { text: 'Section B Item B1', link: '/1-100期/60' },
    //   //         { text: 'Section B Item B2', link: '/1-100期/1' }
    //   //       ]
    //   //     }
    //   //   ]
    //   // }
    // ]

  },
}

  
  