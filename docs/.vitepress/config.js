import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import mathjax3 from 'markdown-it-mathjax3';

const customElements = ['mjx-container'];

const links = []
const base = '/'
const faviconHref = `${base}favicon.png`

export default withMermaid(
  defineConfig({
    lang: 'zh-CN',
    title: '蛋卷数据库',
    description: '蛋卷数据库，睡前消息文字稿合集',

    base,
    lastUpdated: true,
    cleanUrls: 'without-subfolders',

    head: [
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: faviconHref }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: faviconHref }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: faviconHref }],
      ['link', { rel: 'shortcut icon', href: faviconHref }],
      ['meta', {name: "google-site-verification", content: "RsTVbfw9S-ETngErdoSzUWp0A5H-sgxmUJCFYTtWvcU"}],
      [
        "script",
        { src: '//unpkg.com/valine/dist/Valine.min.js'},
      ],
    ],

    // LaTex支持: markdown-it-mathjax3
    markdown: {
      config: (md) => {
        md.use(mathjax3);
      },
    },
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customElements.includes(tag),
        },
      },
    },

    // resolve: {
    //   alias: {
    //     // Use my custom component
    //     './VPFeature.vue': resolve(__dirname, '.vitepress/theme/components/VPFeature.vue'),
    //     './VPFeatures.vue': resolve(__dirname, '.vitepress/theme/components/VPFeatures.vue'),
    //   },
    // },

    transformHtml: (_, id, { pageData }) => {
      if (!/[\\/]404\.html$/.test(id))
        links.push({
          // you might need to change this if not using clean urls mode
          url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
          lastmod: pageData.lastUpdated
        })
    },
  
    buildEnd: ({ outDir }) => {
      const sitemap = new SitemapStream({ hostname: 'https://eggroll.cyou/' })
      const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
      sitemap.pipe(writeStream)
      links.forEach((link) => sitemap.write(link))
      sitemap.end()
    },

    themeConfig: {
      siteTitle: 'EggrollDatabase',
      logo: '/eggroll.png',
      editLink: {
        pattern: 'https://github.com/graysonnwu/EggrollDatabase/edit/main/docs/:path',
        text: '在 GitHub 上编辑此页'
      },
      lastUpdatedText: '最近更新',
      docFooter: {
        prev: '上一篇',
        next: '下一篇'
      },
      outline: [2,3],
      footer: {
        message: `<img style="width:23px;height:23px;vertical-align:bottom;display:inline;" src="/moe.png"/>
        <a href="https://icp.gov.moe" target="_blank">萌ICP备 </a>
        <a href="https://icp.gov.moe/?keyword=20222458" target="_blank"> 20222458号</a>`,
        copyright: 'Copyright © 2022 eggroll.cyou'
      },
      nav: [
        { text: '1~100期', link: '/1-100期/', activeMatch: '/1-100期/' },
        { text: '101~200期', link: '/101-200期/', activeMatch: '/101-200期/' },
        { text: '201~300期', link: '/201-300期/', activeMatch: '/201-300期/' },
        { text: '301~400期', link: '/301-400期/', activeMatch: '/301-400期/' },
        { text: '401~500期', link: '/401-500期/', activeMatch: '/401-500期/' },
        { text: '蛋卷俱乐部', link: '/club/', activeMatch: '/club/' },
        // { text: 'Github', link: 'https://github.com/Graysonnwu/EggrollDatabase' },

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
        // { icon: 'twitter', link: 'https://twitter.com/Graysonnosyarg' },
        {
          icon: {
                svg: '<svg t="1665589533305" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2412" width="1000" height="1000"><path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z" p-id="2413"></path></svg>',  // 这里贴上svg内容，太长了我就省略了，拷贝上面的就行
          },
          link: "https://space.bilibili.com/22245854",
        },
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
              { text: '13.5. 解放军打赢淮海战役，是如何在后勤上开挂的？', link: '/1-100期/13_5' },
              { text: '14. 巴西非但不想给亚马逊灭火，甚至有点想多烧一会', link: '/1-100期/14' },
              { text: '15. 四川主动送来高压电，江西为啥不想要？', link: '/1-100期/15' },
              { text: '16. 如果中国也收“单身税”，靠谁来生下一代？', link: '/1-100期/16' },
              { text: '17. 让蔡徐坤拿大奖的榜单，7年前就在台湾省丢过人', link: '/1-100期/17' },
              { text: '18. 日本：捕鱼配额不够怎么办？从台湾手里拿一点', link: '/1-100期/18' },
              { text: '19. 去武汉最偏僻的大学，洗大学里最贵的澡堂', link: '/1-100期/19' },
              { text: '19.5. 中国工程师动作太快，语文地理老师追不上了', link: '/1-100期/19_5' },
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
              { text: '24. 70年前在北京成立的这个国家，她叫中华人民共和国', link: '/1-100期/24' },
              { text: '25. 全球一半大工程来自中国？看看人均，还得造！', link: '/1-100期/25' },
              { text: '26. 有人想回老家种地？泼点冷水冷静一下', link: '/1-100期/26' },
              { text: '27. 香港，会走到要靠全国补贴养活的那一天吗？', link: '/1-100期/27' },
              { text: '28. 为了解释无锡立交桥事故，先回同济补课！', link: '/1-100期/28' },
              { text: '29. 没有“淮海省”，徐州还是有当“省会”的命？', link: '/1-100期/29' },
              { text: '30. 沙特三个机械旅被胡塞武装打尿——字面意思', link: '/1-100期/30' },
            ]
          },
          {
            text: '31 ~ 40 期',
            collapsible: true,
            collapsed: true,
            items: [
              { text: '31. 有钱能使佛搬家，五台山建到了加拿大', link: '/1-100期/31' },
              { text: '32. 王选，一位连中国键盘侠都没法黑的院士！', link: '/1-100期/32' },
              { text: '33. 不是准备骚乱就是在骚乱，香港要变成智利吗？', link: '/1-100期/33' },
              { text: '34. 德国高速公路不限速？你们还没见到开飞机的……', link: '/1-100期/34' },
              { text: '35. 看完《我和我的祖国》，给七部短片排个名', link: '/1-100期/35' },
              { text: '36. 加州人民：世界上只有一种扑不灭的火，穷火', link: '/1-100期/36' },
              { text: '37. 禁全韩之狗肉，结西方之欢心，韩国政府能成功吗？', link: '/1-100期/37' },
              { text: '38. 想让房价降下来，给土地拍卖限价可没用', link: '/1-100期/38' },
              { text: '39. 如何彻底消灭“豫章书院”？', link: '/1-100期/39' },
              { text: '40. 巴西犯罪集团最怕谁？答：另一个犯罪集团', link: '/1-100期/40' },
            ]
          },
          {
            text: '41 ~ 50 期',
            collapsible: true,
            collapsed: true,
            items: [
              { text: '41. 说川军“内战外行外战内行”，是夸奖四川人？', link: '/1-100期/41' },
              { text: '42. 中国学生真正需要的减负，是为了能合理增负', link: '/1-100期/42' },
              { text: '43. 特朗普请来的这位女牧师，身上“要素过多”了！', link: '/1-100期/43' },
              { text: '44. 吹捧“中国玩家无敌”，成了游戏营销新手段？', link: '/1-100期/44' },
              { text: '45. 相比新加坡，香港如何亲手葬送了优势？', link: '/1-100期/45' },
              { text: '46. FBI悬赏500万美元抓北大状元，是真的吗？', link: '/1-100期/46' },
              { text: '47. 美国打死IS头目，却一点没耽误IS扩张？', link: '/1-100期/47' },
              { text: '48. 苏州：别再提东方威尼斯了，那是意大利周庄！', link: '/1-100期/48' },
              { text: '49. 为什么印度雾霾爆表，莫迪却这么淡定？', link: '/1-100期/49' },
              { text: '50. 关于“251”事件，华为应该自己来解释清楚', link: '/1-100期/50' },
            ]
          },
          {
            text: '51 ~ 60 期',
            collapsible: true,
            collapsed: true,
            items: [
              { text: '51. 阿根廷男罪犯自称女性进了女子监狱，于是……', link: '/1-100期/51' },
              { text: '52. 什么，印度第一艘国产航母又要完工了？', link: '/1-100期/52' },
              { text: '53. 李子柒的支持者和反对者，都搞错了什么？', link: '/1-100期/53' },
              { text: '54. 用上了清洁煤的河北，中毒事故却反而变多了？', link: '/1-100期/54' },
              { text: '55. “春蕾计划”风波背后，中国慈善究竟应该怎么做？', link: '/1-100期/55' },
              { text: '56. 地中海发现新油气？土耳其已经坐不住了', link: '/1-100期/56' },
              { text: '57. 安倍想去印度，纪念当年日军带领印军共抗大英…', link: '/1-100期/57' },
              { text: '58. 给离婚加“冷静期”，只会让中国人更不想结婚', link: '/1-100期/58' },
              { text: '59. 年终盘点（上）：2019年，“特朗普三年”？', link: '/1-100期/59' },
              { text: '60. 年终盘点（中）：中国有些企业需要“社会主义改造”？', link: '/1-100期/60' },
            ]
          },
          {
            text: '61 ~ 70 期',
            collapsible: true,
            collapsed: true,
            items: [
              { text: '61. 年终盘点（下）：那些本身就是段子的新闻', link: '/1-100期/61' },
              { text: '62. 中国首获别国矿产勘探授权，为何是卢旺达？', link: '/1-100期/62' },
              { text: '63. 有了“山寨版”钱学森，台湾也要搞自主火箭？', link: '/1-100期/63' },
              { text: '64. 印度任命史上首个总参谋长？都在莫迪掌握中！', link: '/1-100期/64' },
              { text: '65. 伊朗的事说明未来战争靠无人机，中国：哪个牌子？', link: '/1-100期/65' },
              { text: '66. 江西拔除一恶势力团伙，平均年龄79岁……', link: '/1-100期/66' },
              { text: '67. 河南有个村，被三大运营商集体“拉黑”了……', link: '/1-100期/67' },
              { text: '68. 对开车进故宫这事，我们要批评到点子上！', link: '/1-100期/68' },
              { text: '69. 真正奇怪的是，竟然还有500多万台湾人选国民党？', link: '/1-100期/69' },
              { text: '70. 除夕夜，督工还有几件事想和大家聊聊！', link: '/1-100期/70' },
            ]
          },
          {
            text: '71 ~ 80 期',
            collapsible: true,
            collapsed: true,
            items: [
              { text: '71. 为什么说为了防疫反应过度，也会“杀死”国人？', link: '/1-100期/71' },
              { text: '72. 为什么总是红十字会？', link: '/1-100期/72' },
              { text: '73. 别忘了，还有一种更可怕的病：穷病', link: '/1-100期/73' },
              { text: '74. 李文亮医生去世，我们最愤怒的事是什么？⚠️', link: '/1-100期/74' },
              { text: '75. 我们对待湖北人民的方式，出了什么问题？', link: '/1-100期/75' },
              { text: '76. 为什么奖励主动承认病情的人，会对防疫有好处？', link: '/1-100期/76' },
              { text: '77. 为什么会出现“散装江苏”？还是太有钱了', link: '/1-100期/77' },
              { text: '78. 《美国工厂》，是一部无产阶级的悲剧片？', link: '/1-100期/78' },
              { text: '79. 重奖医护人员，但“子女择校权”是最好的方式吗？', link: '/1-100期/79' },
              { text: '80. 为什么我们应该宣传“为国效力，拿钱光荣”？', link: '/1-100期/80' },
            ]
          },
          {
            text: '81 ~ 90 期',
            collapsible: true,
            collapsed: true,
            items: [
              { text: '81. 今天的韩国，其实是个简化版的印度种姓社会？', link: '/1-100期/81' },
              { text: '82. 美国童子军协会被性侵案告到破产？老传统了……', link: '/1-100期/82' },
              { text: '83. 关于《外国人永久居留管理条例》，我们最该担心什么？', link: '/1-100期/83' },
              { text: '84. 举办“万家宴”的武汉百步亭，到底是个怎样的社区？', link: '/1-100期/84' },
              { text: '85. 粉丝闹出的事，肖战本人应该负多大责任？', link: '/1-100期/85' },
              { text: '86. 美国男子自制火箭遇难，真是为了证明“地平说”？', link: '/1-100期/86' },
              { text: '87. 刘亦菲吻戏被删？督工：都是迪士尼的阴谋！', link: '/1-100期/87' },
              { text: '88. 快手网红给武汉捐款1亿，这是“中国小贩”的究极形态了', link: '/1-100期/88' },
              { text: '89. 曾经的国产之光方正，为何沦落到还不起债？', link: '/1-100期/89' },
              { text: '90. 日本不愿取消东京奥运会，因为亏的钱实在太多了', link: '/1-100期/90' },
            ]
          },
          {
            text: '91 ~ 100 期',
            collapsible: true,
            collapsed: true,
            items: [
              { text: '91. 对于海外回来躲避疫情的中国人，该怎么看待？', link: '/1-100期/91' },
              { text: '92. 日本舰长兼职牛郎，究竟是道德的沦丧还是人性的扭曲', link: '/1-100期/92' },
              { text: '93. 中国驰援全球抗疫，当然少不了经济强省台湾', link: '/1-100期/93' },
              { text: '94. 面对不留后路的文在寅，韩国财阀也怕了', link: '/1-100期/94' },
              { text: '95. “老佛爷，我们又被收购了，这次是中国乡镇企业……”', link: '/1-100期/95' },
              { text: '96. 如何用一天时间体验完上海150年历史', link: '/1-100期/96' },
              { text: '97. 禁止吃狗肉，就是“现代人类文明”的体现？', link: '/1-100期/97' },
              { text: '98. 阳江核电站出现停堆事件，原因是：毛虾入侵……', link: '/1-100期/98' },
              { text: '99. 市政府搬到通州，为什么要“拆分”北京？', link: '/1-100期/99' },
              { text: '100. 蒙古改回成吉思汗时期文字，重新靠拢中国？', link: '/1-100期/100' },
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
              { text: '102. 内蒙古地界上，还有块黑龙江的“飞地”？', link: '/101-200期/102' },
              { text: '103. “剑桥论文证明新冠病毒起源美国”这种说法是怎么来的？', link: '/101-200期/103' },
              { text: '104. 别放过鲍毓明，更别忘了还会有更多“鲍毓明”', link: '/101-200期/104' },
              { text: '105. 帮美国企业免费搬出中国？是谁说话这么幽默？', link: '/101-200期/105' },
              { text: '106. 文在寅大胜，韩国财阀终于“敢”离婚了', link: '/101-200期/106' },
              { text: '107. 要求学生行作揖礼，衢州想要争“儒家圣地”？', link: '/101-200期/107' },
              { text: '108. 战斗民族：隔离？那不就等于放假了吗，度假去！', link: '/101-200期/108' },
              { text: '109. 在该不该禁止养狗的问题背后，永远是谁出钱的问题', link: '/101-200期/109' },
              { text: '110. 孟加拉：跨恒河不方便 中国：桥已经给你造好了', link: '/101-200期/110' },
            ]
          },
          {
            text: '111 ~ 120 期',
            collapsible: true,
            collapsed: true,
            items: [
              { text: '111. 深圳房价这样涨下去，会变成第二个香港么？', link: '/101-200期/111' },
              { text: '112. 阅文风波的背后，腾讯真的大到只手遮天了吗？', link: '/101-200期/112' },
              { text: '113. 制造业回到美国× 能源巨头直接去中国√', link: '/101-200期/113' },
              { text: '114. 中国媒体的战斗力，能有超越BBC那一天吗？', link: '/101-200期/114' },
              { text: '115. 印度首富身价压倒马云，什么叫垄断资本啊？', link: '/101-200期/115' },
              { text: '116. 美国政府罚了脸书50亿美元，这个我们真可以学？', link: '/101-200期/116' },
              { text: '117. 不是TVB衰落了，而是香港文化回到了它的合理地位', link: '/101-200期/117' },
              { text: '118. 《后浪》过后，如何看待B站又要《入海》？', link: '/101-200期/118' },
              { text: '119. 王石用别人的钱，给清华捐了53亿？', link: '/101-200期/119' },
              { text: '120. 美国女足要求和男足同工同酬，为什么被驳回？', link: '/101-200期/120' },
            ]
          },
        ],

        '/club/': [
          {
            text: '0 ~ 10 期',
            collapsible: true,
            collapsed: false,
            items: [
              { text: '第零期（22-07-17）试刊', link: '/club/0' },
              { text: '第一期（22-07-25）', link: '/club/1' },
              { text: '第二期（22-08-01）', link: '/club/2' },
              { text: '第三期（22-08-09）', link: '/club/3' },
              { text: '第四期（22-08-16）', link: '/club/4' },
              { text: '第五期（22-08-24）', link: '/club/5' },
              { text: '第六期（22-09-01）', link: '/club/6' },
              { text: '第七期（22-09-12）', link: '/club/7' },
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
      //   //         { text: 'Section A Item A1', link: '/1-100期/19_5' },
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
  })
);

  
  