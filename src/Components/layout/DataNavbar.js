const dataNav = [
  {
    key: 1,
    text: "Главная",
    path: "/",
    icons: <i className="bi bi-house-door-fill"></i>,
  },
  {
    type: "sklad",
    key: 2,
    text: "Склад",
    path: "/sklad",
    icons: <i className="bi bi-bag-plus-fill"></i>,
    children: [
      {
        type: "detal",
        key: 3,
        text: "Поступ.детали",
        path: "/postup-detali",
        icons: <i className="bi bi-download"></i>,
      },
      {
        type: "komplekt",
        key: 4,
        text: "Поступ.комплект",
        path: "/postup-komplekt",
        icons: <i className="bi bi-download"></i>,
      },

      {
        type: "peremeshenie",
        key: 5,
        text: "Перемешение",
        path: "/peremeshenie",
        icons: <i className="bi bi-arrow-left-right"></i>,
      },
    ],
  },

  {
    type: "prodaja",
    key: 6,
    text: "Продажа",
    path: "/prodaja",
    icons: <i className="bi bi-file-earmark-arrow-down-fill"></i>,
  },
  {
    type: "vozvrat",
    key: 7,
    text: "Bозврат",
    path: "/vozvrat",
    icons: <i className="bi bi-arrow-clockwise"></i>,
  },
  {
    type: "brony",
    key: 8,
    text: "Бронъ",
    path: "/brony",
    icons: <i className="bi bi-gear-wide"></i>,
  },
  {
    type: "spravochniki",
    key: 9,
    text: "Справочники",
    path: "/spravochniki",
    icons: <i className="bi bi-shield-fill"></i>,
  },
  {
    type: "sotrudniki",
    key: 10,
    text: "Сотрудники",
    path: "/sotrudniki",
    icons: <i className="bi bi-people-fill"></i>,
  },
  {
    type: "otcheny",
    key: 11,
    text: "Отчеты",
    path: "/otcheny",
    icons: <i className="bi bi-file-earmark-bar-graph-fill"></i>,
  },
  {
    type: "sms",
    key: 12,
    text: "СМС",
    path: "/sms",
    icons: <i className="bi bi-chat-left-dots-fill"></i>,
  },
];

export default dataNav;
