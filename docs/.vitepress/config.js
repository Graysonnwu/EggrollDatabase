const base = '/EggrollDatabase/'
const faviconHref = `${base}favicon.png`

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
      { text: 'Github', link: 'https://github.com/Graysonnwu/EggrollDatabase' },

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
      { icon: 'github', link: 'https://github.com/Graysonnwu/EggrollDatabase' },
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
        {
          text: '21 ~ 30 期',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '21. 教会复兴“奴隶制”？美国人民表示情绪稳定', link: '/1-100期/21' },
            { text: '22. 中国在浙江沿岸救下了一条触礁的……蒙古船？！', link: '/1-100期/22' },
            { text: '23. 埃塞：工业不发达，我要建大坝 埃及：水资源匮乏，你建我就打', link: '/1-100期/23' },
            { text: '24. ', link: '/1-100期/24' },
            { text: '25. ', link: '/1-100期/25' },
            { text: '26. ', link: '/1-100期/26' },
            { text: '27. ', link: '/1-100期/27' },
            { text: '28. ', link: '/1-100期/28' },
            { text: '29. ', link: '/1-100期/29' },
            { text: '30. ', link: '/1-100期/30' },
          ]
        },
        {
          text: '31 ~ 40 期',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '31. ', link: '/1-100期/31' },
            { text: '32. ', link: '/1-100期/32' },
            { text: '33. ', link: '/1-100期/33' },
            { text: '34. ', link: '/1-100期/34' },
            { text: '35. ', link: '/1-100期/35' },
            { text: '36. ', link: '/1-100期/36' },
            { text: '37. ', link: '/1-100期/37' },
            { text: '38. ', link: '/1-100期/38' },
            { text: '39. ', link: '/1-100期/39' },
            { text: '40. ', link: '/1-100期/40' },
          ]
        },
        {
          text: '41 ~ 50 期',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '41. ', link: '/1-100期/41' },
            { text: '42. ', link: '/1-100期/42' },
            { text: '43. ', link: '/1-100期/43' },
            { text: '44. ', link: '/1-100期/44' },
            { text: '45. ', link: '/1-100期/45' },
            { text: '46. ', link: '/1-100期/46' },
            { text: '47. ', link: '/1-100期/47' },
            { text: '48. ', link: '/1-100期/48' },
            { text: '49. ', link: '/1-100期/49' },
            { text: '50. ', link: '/1-100期/50' },
          ]
        },
        {
          text: '51 ~ 60 期',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '51. ', link: '/1-100期/51' },
            { text: '52. ', link: '/1-100期/52' },
            { text: '53. ', link: '/1-100期/53' },
            { text: '54. ', link: '/1-100期/54' },
            { text: '55. ', link: '/1-100期/55' },
            { text: '56. ', link: '/1-100期/56' },
            { text: '57. ', link: '/1-100期/57' },
            { text: '58. ', link: '/1-100期/58' },
            { text: '59. ', link: '/1-100期/59' },
            { text: '60. ', link: '/1-100期/60' },
          ]
        },
        {
          text: '61 ~ 70 期',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '61. ', link: '/1-100期/61' },
            { text: '62. ', link: '/1-100期/62' },
            { text: '63. ', link: '/1-100期/63' },
            { text: '64. ', link: '/1-100期/64' },
            { text: '65. ', link: '/1-100期/65' },
            { text: '66. ', link: '/1-100期/66' },
            { text: '67. ', link: '/1-100期/67' },
            { text: '68. ', link: '/1-100期/68' },
            { text: '69. ', link: '/1-100期/69' },
            { text: '70. ', link: '/1-100期/70' },
          ]
        },
        {
          text: '71 ~ 80 期',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '71. ', link: '/1-100期/71' },
            { text: '72. ', link: '/1-100期/72' },
            { text: '73. ', link: '/1-100期/73' },
            { text: '74. ', link: '/1-100期/74' },
            { text: '75. ', link: '/1-100期/75' },
            { text: '76. ', link: '/1-100期/76' },
            { text: '77. ', link: '/1-100期/77' },
            { text: '78. ', link: '/1-100期/78' },
            { text: '79. ', link: '/1-100期/79' },
            { text: '80. ', link: '/1-100期/80' },
          ]
        },
        {
          text: '81 ~ 90 期',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '81. ', link: '/1-100期/81' },
            { text: '82. ', link: '/1-100期/82' },
            { text: '83. ', link: '/1-100期/83' },
            { text: '84. ', link: '/1-100期/84' },
            { text: '85. ', link: '/1-100期/85' },
            { text: '86. ', link: '/1-100期/86' },
            { text: '87. ', link: '/1-100期/87' },
            { text: '88. ', link: '/1-100期/88' },
            { text: '89. ', link: '/1-100期/89' },
            { text: '90. ', link: '/1-100期/90' },
          ]
        },
        {
          text: '91 ~ 100 期',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '91. ', link: '/1-100期/91' },
            { text: '92. ', link: '/1-100期/92' },
            { text: '93. ', link: '/1-100期/93' },
            { text: '94. ', link: '/1-100期/94' },
            { text: '95. ', link: '/1-100期/95' },
            { text: '96. ', link: '/1-100期/96' },
            { text: '97. ', link: '/1-100期/97' },
            { text: '98. ', link: '/1-100期/98' },
            { text: '99. ', link: '/1-100期/99' },
            { text: '100. ', link: '/1-100期/100' },
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
          text: '111 ~ 120 期',
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

  
  