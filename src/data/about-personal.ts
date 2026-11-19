export type SiteTimelineItem = {
  date: string;
  content: string[];
};

export type MusicTrack = {
  title: string;
  artist: string;
  url: string;
};

export type TravelProvince = {
  province: string;
  city: string;
  visited: boolean;
  lat?: number;
  lng?: number;
};

export type AboutPersonal = {
  intro: string;
  siteTimeline: SiteTimelineItem[];
  musicTracks: MusicTrack[];
  travelCities: TravelProvince[];
};

const aboutPersonal: AboutPersonal = {
  "intro": "cmchen, 一个奇怪的名字，不是吗？这个名字源于高中时的一个谐音梗。喜欢旅行，  尝试用我的足迹去探索这个世界的美丽。喜欢 R&B、电子、K-pop 路人选手。",
  "siteTimeline": [
    {
      "date": "2026.2.12",
      "content": [
        "开发最初框架"
      ]
    },
    {
      "date": "2026.2.14",
      "content": [
        "参考 Momo 开源页面进行设计"
      ]
    },
    {
      "date": "2026.2.15",
      "content": [
        "部署到 GitHub Pages"
      ]
    },
    {
      "date": "2026.2.17",
      "content": [
        "增加分类功能，优化响应速度"
      ]
    },
    {
      "date": "2026.2.19",
      "content": [
        "增加背景粒子交互效果"
      ]
    },
    {
      "date": "2026.2.20",
      "content": [
        "后台预制 Markdown 语法插入"
      ]
    },
    {
      "date": "2026.2.21",
      "content": [
        "窄屏栏目按钮改为侧边显示"
      ]
    },
    {
      "date": "2026.2.25",
      "content": [
        "后台支持一键插入友链结构"
      ]
    },
    {
      "date": "2026.2.26",
      "content": [
        "新增博客介绍弹窗与运行时间显示"
      ]
    },
    {
      "date": "2026.3.7",
      "content": [
        "博客图片支持点击放大与左右切换"
      ]
    },
    {
      "date": "2026.3.8",
      "content": [
        "合并分类和归档，增加字数统计"
      ]
    },
    {
      "date": "2026.3.14",
      "content": [
        "修复缩放白屏，增加目录功能"
      ]
    },
    {
      "date": "2026.3.16",
      "content": [
        "新增返回按钮、打字机签名和摘要系统"
      ]
    },
    {
      "date": "2026.3.23",
      "content": [
        "后台增加预选已发布主题按钮"
      ]
    },
    {
      "date": "2026.3.26",
      "content": [
        "阅读页支持同分类文章跳转"
      ]
    },
    {
      "date": "2026.3.28",
      "content": [
        "修复问题并增强博客更新提示"
      ]
    },
    {
      "date": "2026.3.31",
      "content": [
        "增加双击全屏阅读功能"
      ]
    },
    {
      "date": "2026.4.6",
      "content": [
        "修改归档分类按钮逻辑，优化过渡动画"
      ]
    },
    {
      "date": "2026.4.12",
      "content": [
        "新增旅行地图、音乐播放器，优化关于页面"
      ]
    },
    {
      "date": "2026.4.22",
      "content": [
        "增加后台 Markdown 预览功能"
      ]
    },
    {
      "date": "2026.5.2",
      "content": [
        "完善预览界面"
      ]
    },
    {
      "date": "2026.5.3",
      "content": [
        "增加阅读进度与热力图，完善后台导出"
      ]
    },
    {
      "date": "2026.5.7",
      "content": [
        "优化动画效果，导航栏置顶和透明"
      ]
    },
    {
      "date": "2026.5.10",
      "content": [
        "提升移动端体验，文章卡片增加封面图"
      ]
    },
    {
      "date": "2026.5.15",
      "content": [
        "友链改为工具栏，新增博客置顶"
      ]
    },
    {
      "date": "2026.5.29",
      "content": [
        "修复目录与回弹按钮，新增字号调节"
      ]
    },
    {
      "date": "2026.6.1",
      "content": [
        "分类页支持大小分类，优化移动端体验"
      ]
    },
    {
      "date": "2026.6.14",
      "content": [
        "清理冗余代码，拆分大文件，优化部署"
      ]
    },
    {
      "date": "2026.7.2",
      "content": [
        "拆分组件、按需图标，启用图片压缩"
      ]
    },
    {
      "date": "2026.7.3",
      "content": [
        "归档时间线增强、全局快捷键、接入 Giscus 评论"
      ]
    },
    {
      "date": "2026.7.8",
      "content": [
        "安全加固（PBKDF2 / XSS / Open Redirect）与依赖清理"
      ]
    },
    {
      "date": "2026.7.9",
      "content": [
        "合并重复函数，外部 URL 集中配置"
      ]
    },
    {
      "date": "2026.7.10",
      "content": [
        "实现推导浮层与三栏编辑器，接入 ESLint / Lighthouse CI"
      ]
    },
    {
      "date": "2026.7.26",
      "content": [
        "字体与大小逻辑调整，主题改为偏暖色调"
      ]
    },
    {
      "date": "2026.8.2",
      "content": [
        "集中修复后台与阅读体验问题，清理死代码"
      ]
    },
    {
      "date": "2026.8.3",
      "content": [
        "配色与图标收敛到变量，补齐可访问性与 SEO"
      ]
    },
    {
      "date": "2026.8.4",
      "content": [
        "后台预览可查看图片"
      ]
    },
    {
      "date": "2026.8.9",
      "content": [
        "仓库开源并初始化主题，新增站点信息编辑器"
      ]
    },
    {
      "date": "2026.8.12",
      "content": [
        "主题切换增加圆形揭示过渡动画"
      ]
    },
    {
      "date": "2026.8.18",
      "content": [
        "新增 8 种自定义样式语法与移动端浮动按钮"
      ]
    },
    {
      "date": "2026.8.19",
      "content": [
        "新增 RSS 与分享卡片，评论区增加加载态"
      ]
    },
    {
      "date": "2026.8.23",
      "content": [
        "安全加固、图片转 WebP、工程化清理"
      ]
    },
    {
      "date": "2026.8.27",
      "content": [
        "后台工具栏补齐全部自定义语法快捷插入"
      ]
    },
    {
      "date": "2026.9.4",
      "content": [
        "主题切换回退至原版圆形揭示动画"
      ]
    },
    {
      "date": "2026.9.9",
      "content": [
        "移动端顶栏支持滑动隐藏与显示"
      ]
    },
    {
      "date": "2026.9.10",
      "content": [
        "改用系统字体栈，修复顶栏字体丢失"
      ]
    },
    {
      "date": "2026.9.22",
      "content": [
        "统一设计令牌与动效，硬编码颜色改为主题变量"
      ]
    },
    {
      "date": "2026.9.23",
      "content": [
        "顶栏标题与 slogan 左移，避免遮挡卡片"
      ]
    },
    {
      "date": "2026.9.25",
      "content": [
        "归档改单行列表与平滑展开，新增三级分类"
      ]
    },
    {
      "date": "2026.9.29",
      "content": [
        "字号行高令牌化，弹层补齐统一退场动画"
      ]
    },
    {
      "date": "2026.10.10",
      "content": [
        "移动端快捷操作收进右上「+」浮动按钮"
      ]
    },
    {
      "date": "2026.11.15",
      "content": [
        "首页改单列图文融合布局，重调暖色配色"
      ]
    },
    {
      "date": "2026.11.16",
      "content": [
        "封面加分类图标与日期细节，归档移动端常显摘要"
      ]
    },
    {
      "date": "2026.11.19",
      "content": [
        "网站记录精简为短句并改用杂志日期样式，文章卡片增加描边光晕悬停反馈"
      ]
    }
  ],
  "musicTracks": [
    {
      "title": "Paris-in-the-Rain",
      "artist": "Lauv",
      "url": "/cmchen-blog/music/Lauv---Paris-in-the-Rain.mp3"
    }
  ],
  "travelCities": [
    {
      "province": "安徽省",
      "city": "黄山市",
      "visited": true
    },
    {
      "province": "北京市",
      "city": "朝阳区",
      "visited": true
    },
    {
      "province": "北京市",
      "city": "东城区",
      "visited": true
    },
    {
      "province": "北京市",
      "city": "海淀区",
      "visited": true
    },
    {
      "province": "北京市",
      "city": "西城区",
      "visited": true
    },
    {
      "province": "重庆市",
      "city": "江北区",
      "visited": true
    },
    {
      "province": "重庆市",
      "city": "南岸区",
      "visited": true
    },
    {
      "province": "重庆市",
      "city": "沙坪坝区",
      "visited": true
    },
    {
      "province": "重庆市",
      "city": "渝中区",
      "visited": true
    },
    {
      "province": "福建省",
      "city": "厦门市",
      "visited": true
    },
    {
      "province": "甘肃省",
      "city": "嘉峪关市",
      "visited": true
    },
    {
      "province": "甘肃省",
      "city": "酒泉市",
      "visited": true
    },
    {
      "province": "甘肃省",
      "city": "兰州市",
      "visited": true
    },
    {
      "province": "甘肃省",
      "city": "武威市",
      "visited": true
    },
    {
      "province": "甘肃省",
      "city": "张掖市",
      "visited": true
    },
    {
      "province": "广东省",
      "city": "潮州市",
      "visited": true
    },
    {
      "province": "广东省",
      "city": "广州市",
      "visited": true
    },
    {
      "province": "广东省",
      "city": "揭阳市",
      "visited": true
    },
    {
      "province": "广东省",
      "city": "汕头市",
      "visited": true
    },
    {
      "province": "广东省",
      "city": "珠海市",
      "visited": true
    },
    {
      "province": "广西壮族自治区",
      "city": "北海市",
      "visited": true
    },
    {
      "province": "广西壮族自治区",
      "city": "南宁市",
      "visited": true
    },
    {
      "province": "河北省",
      "city": "秦皇岛市",
      "visited": true
    },
    {
      "province": "河南省",
      "city": "三门峡市",
      "visited": true
    },
    {
      "province": "湖北省",
      "city": "恩施土家族苗族自治州",
      "visited": true
    },
    {
      "province": "湖北省",
      "city": "武汉市",
      "visited": true
    },
    {
      "province": "吉林省",
      "city": "白山市",
      "visited": true
    },
    {
      "province": "吉林省",
      "city": "延边朝鲜族自治州",
      "visited": true
    },
    {
      "province": "江苏省",
      "city": "南京市",
      "visited": true
    },
    {
      "province": "江苏省",
      "city": "苏州市",
      "visited": true
    },
    {
      "province": "江苏省",
      "city": "无锡市",
      "visited": true
    },
    {
      "province": "江西省",
      "city": "上饶市",
      "visited": true
    },
    {
      "province": "辽宁省",
      "city": "大连市",
      "visited": true
    },
    {
      "province": "辽宁省",
      "city": "沈阳市",
      "visited": true
    },
    {
      "province": "内蒙古自治区",
      "city": "呼伦贝尔市",
      "visited": true
    },
    {
      "province": "青海省",
      "city": "海南藏族自治州",
      "visited": true
    },
    {
      "province": "青海省",
      "city": "西宁市",
      "visited": true
    },
    {
      "province": "山东省",
      "city": "青岛市",
      "visited": true
    },
    {
      "province": "山西省",
      "city": "大同市",
      "visited": true
    },
    {
      "province": "山西省",
      "city": "太原市",
      "visited": true
    },
    {
      "province": "陕西省",
      "city": "西安市",
      "visited": true
    },
    {
      "province": "上海市",
      "city": "虹口区",
      "visited": true
    },
    {
      "province": "上海市",
      "city": "黄浦区",
      "visited": true
    },
    {
      "province": "上海市",
      "city": "闵行区",
      "visited": true
    },
    {
      "province": "上海市",
      "city": "浦东新区",
      "visited": true
    },
    {
      "province": "上海市",
      "city": "徐汇区",
      "visited": true
    },
    {
      "province": "四川省",
      "city": "成都市",
      "visited": true
    },
    {
      "province": "四川省",
      "city": "乐山市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "杭州市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "湖州市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "嘉兴市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "金华市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "丽水市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "宁波市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "绍兴市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "台州市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "温州市",
      "visited": true
    },
    {
      "province": "浙江省",
      "city": "舟山市",
      "visited": true
    }
  ]
};

export default aboutPersonal;
