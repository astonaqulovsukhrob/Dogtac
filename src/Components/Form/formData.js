import { Form, Input, Select } from "antd";
const { Option } = Select;

// Sklad Data
export const skladDetali = [
  {
    form: [
      {
        type: "DATE",
        text: "Наименование",
        name: "date",
        gridColmun: "1 /3",
      },
      {
        type: "KOMMENT",
        text: "Комментарии:",
        name: "komment",
        gridColmun: "3 /7",
      },
      {
        type: "SELECT",
        label: "Поставшик:",
        nomi: "sklad",
        select: "Поставшик",
        gridRow: "2 / 2",
        gridColmun: "1 /3",
        selectVe: [
          {
            key: 8,
            value: "madel",
            text: "madel",
          },
          {
            key: 9,
            value: "female",
            text: "female",
          },
          {
            key: 10,
            value: "other",
            text: "other",
          },
        ],
      },
      {
        type: "SELECT",
        label: "Склад:",
        nomi: "sklad",
        select: "Склад",
        gridRow: "2 / 2",
        gridColmun: "3 /5",
        selectVe: [
          {
            key: 8,
            value: "madel",
            text: "madel",
          },
          {
            key: 9,
            value: "female",
            text: "female",
          },
          {
            key: 10,
            value: "other",
            text: "other",
          },
        ],
      },
    ],
  },
];

// Sklad_Detal
export const skladKomplekt = [
  {
    form: [
      {
        type: "DATE",
        text: "Date:",
        name: "date",
        gridColmun: "1 /3",
      },
      {
        type: "KOMMENT",
        text: "Комментарии:",
        name: "komment",
        gridColmun: "3 /7",
      },
      {
        type: "SELECT",
        text: "Поставшик:",
        nomi: "sklad",
        select: "Поставшик",
        gridColmun: "3 /7",
        selectVe: [
          {
            key: 8,
            value: "madel",
            text: "madel",
          },
          {
            key: 9,
            value: "female",
            text: "female",
          },
          {
            key: 10,
            value: "other",
            text: "other",
          },
        ],
      },
      {
        type: "SELECT",
        text: "Склад:",
        nomi: "sklad",
        select: "Склад",
        gridRow: "2 / 2",
        gridColmun: "1 /3",
        selectVe: [
          {
            key: 8,
            value: "madel",
            text: "madel",
          },
          {
            key: 9,
            value: "female",
            text: "female",
          },
          {
            key: 10,
            value: "other",
            text: "other",
          },
        ],
      },
    ],
  },
];

// Peremeshenie
export const peremeshenieData = [
  {
    form: [
      {
        type: "DATE",
        text: "Date:",
        name: "date",
        gridColmun: "1 /3",
      },
      {
        type: "KOMMENT",
        text: "Комментарии:",
        name: "komment",
        gridColmun: "3 /5",
      },
      {
        type: "SELECT",
        text: "Складдан:",
        nomi: "sklad",
        select: "Складдан",
        gridRow: "2 / 2",
        gridColmun: "1 /3",
        selectVe: [
          {
            key: 8,
            value: "madel",
            text: "madel",
          },
          {
            key: 9,
            value: "female",
            text: "female",
          },
          {
            key: 10,
            value: "other",
            text: "other",
          },
        ],
      },
      {
        type: "SELECT",
        text: "Складга:",
        nomi: "sklad",
        select: "Складга",
        gridRow: "2 / 2",
        gridColmun: "3 /5",
        selectVe: [
          {
            key: 8,
            value: "madel",
            text: "madel",
          },
          {
            key: 9,
            value: "female",
            text: "female",
          },
          {
            key: 10,
            value: "other",
            text: "other",
          },
        ],
      },
    ],
  },
];

// Prodaja
export const prodajaData = [
  {
    form: [
      {
        type: "DATE",
        text: "Date:",
        name: "date",
        gridColmun: "1 /3",
      },
      {
        type: "KOMMENT",
        text: "Комментарии:",
        name: "komment",
        gridColmun: "3 /5",
      },
      {
        type: "SELECT",
        text: "Склад:",
        nomi: "sklad",
        select: "Склад",
        gridRow: "2 / 2",
        gridColmun: "1 /3",
        selectVe: [
          {
            key: 8,
            value: "madel",
            text: "madel",
          },
          {
            key: 9,
            value: "female",
            text: "female",
          },
          {
            key: 10,
            value: "other",
            text: "other",
          },
        ],
      },
      {
        type: "SELECT",
        text: "Клиент:",
        nomi: "sklad",
        select: "Клиент",
        gridRow: "2 / 2",
        gridColmun: "3 /5",
        selectVe: [
          {
            key: 8,
            value: "madel",
            text: "madel",
          },
          {
            key: 9,
            value: "female",
            text: "female",
          },
          {
            key: 10,
            value: "other",
            text: "other",
          },
        ],
      },
      {
        type: "CHECKBOX",
        text: "Бронировано",
        gridRow: "2 / 2",
        gridColmun: "5 / 6",
      },
    ],
  },
];

// Vozvrad
export const vozvradData = [
  {
    form: [
      {
        type: "DATE",
        text: "Date:",
        name: "date",
        gridColmun: "1 /3",
      },
      {
        type: "KOMMENT",
        text: "Комментарии:",
        name: "komment",
        gridColmun: "3 /5",
      },
      {
        type: "SELECT",
        text: "Поставшик:",
        nomi: "sklad",
        select: "Поставшик",
        gridRow: "2 / 2",
        gridColmun: "1 /3",
        selectVe: [
          {
            key: 8,
            value: "madel",
            text: "madel",
          },
          {
            key: 9,
            value: "female",
            text: "female",
          },
          {
            key: 10,
            value: "other",
            text: "other",
          },
        ],
      },
      {
        type: "SELECT",
        text: "Склад:",
        nomi: "sklad",
        select: "Склад",
        gridRow: "2 / 2",
        gridColmun: "3 /5",
        selectVe: [
          {
            key: 8,
            value: "madel",
            text: "madel",
          },
          {
            key: 9,
            value: "female",
            text: "female",
          },
          {
            key: 10,
            value: "other",
            text: "other",
          },
        ],
      },
      {
        type: "DATE",
        text: "Date:",
        name: "date",
        gridRow: "2 / 2",
        gridColmun: "5 / 7",
      },
    ],
  },
];

export const bronData = [
  {
    form: [
      {
        type: "DATE",
        text: "Date:",
        name: "date",
        gridColmun: "1 /3",
      },
      {
        type: "KOMMENT",
        text: "Комментарии:",
        name: "komment",
        gridColmun: "3 /5",
      },
      {
        type: "SELECT",
        text: "Поставшик:",
        nomi: "sklad",
        select: "Поставшик",
        gridRow: "2 / 2",
        gridColmun: "1 /3",
        selectVe: [
          {
            key: 8,
            value: "madel",
            text: "madel",
          },
          {
            key: 9,
            value: "female",
            text: "female",
          },
          {
            key: 10,
            value: "other",
            text: "other",
          },
        ],
      },
      {
        type: "SELECT",
        text: "Склад:",
        nomi: "sklad",
        select: "Склад",
        gridRow: "2 / 2",
        gridColmun: "3 /5",
        selectVe: [
          {
            key: 8,
            value: "madel",
            text: "madel",
          },
          {
            key: 9,
            value: "female",
            text: "female",
          },
          {
            key: 10,
            value: "other",
            text: "other",
          },
        ],
      },
      {
        type: "DATE",
        text: "Date:",
        name: "date",
        gridRow: "2 / 2",
        gridColmun: "5 / 7",
      },
    ],
  },
];

// Klient Data
export const klientData = [
  {
    form: [
      {
        type: "STRING",
        text: "Наименование",
        name: "nomi",
        gridColmun: "1 / 3",
      },
      {
        type: "STRING",
        text: "Дата рождения",
        name: "tug_sana",
        gridColmun: "3 / 5",
      },
      {
        type: "NUMBER",
        text: "Телефон номер 1",
        name: "phone1",
        gridColmun: "5 / 7",
      },
      {
        type: "NUMBER",
        text: "Телефон номер 2",
        name: "phone2",
        gridColmun: "7 / 9",
      },
      {
        type: "STRING",
        text: "Электронная почта",
        name: "email",
        gridRow: "2 /2",
        gridColmun: "1 / 3",
      },
      {
        type: "STRING",
        text: "Адрес",
        name: "adres",
        gridRow: "2 /2",
        gridColmun: "3 / 5",
      },
      {
        type: "SELECT",
        text: "Социалъные сети",
        select: "Select a option and change input text above",
        name: "select",
        gridRow: "2 /2",
        gridColmun: "5 / 7",
        selectVe: [
          {
            value: "madel",
            text: "madel",
          },
          {
            value: "female",
            text: "female",
          },
          {
            value: "other",
            text: "other",
          },
        ],
      },
    ],
  },
];

// Postavchik Ddata
export const postavchikData = [
  {
    form: [
      {
        type: "STRING",
        text: "Наименование",
        name: "nomi",
        gridColmun: "1 / 3",
      },
      {
        type: "STRING",
        text: "Дата рождения",
        name: "tun_sana",
        gridColmun: "3 / 5",
      },
      {
        type: "STRING",
        text: "Телефон номер 1",
        name: "phone1",
        gridColmun: "5 / 7",
      },
      {
        type: "STRING",
        text: "Телефон номер 2",
        name: "phone1",
        gridColmun: "7 / 9",
      },
      {
        type: "STRING",
        text: "Электронная почта",
        name: "email",
        gridRow: "2 /2",
        gridColmun: "1 / 3",
      },
      {
        type: "STRING",
        text: "Адрес",
        name: "adres",
        gridRow: "2 /2",
        gridColmun: "3 / 5",
      },
    ],
  },
];

// Model Data
export const modelData = [
  {
    form: [
      {
        type: "STRING",
        text: "Наименование",
        name: "nomi",
        gridColmun: "1 / 6",
      },
      {
        type: "UPLOAD",
        text: "Фото",
        name: "img",
      },
    ],
    columns: [
      {
        title: "№",
        dataIndex: "key",
        render: (key, text, index) => ++index,
      },
      {
        title: "Nazvanie",
        dataIndex: "ostatka",
        render: () => (
          <Form.Item>
            <Select
              style={{ width: 300 }}
              placeholder="Select a option "
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
        ),
      },
      {
        title: "Kol-ov",
        dataIndex: "kolOv",
        render: () => (
          <Form.Item style={{ width: 80 }}>
            <Input type={"text"} />
          </Form.Item>
        ),
      },
      {
        title: "Foto",
        dataIndex: "foto",
        render: () => (
          <Form.Item name={"img"}>
            <label for="files" className="inputt">
              Rasim yuklash
            </label>
            <input
              id="files"
              style={{ visibility: "hidden" }}
              type="file"
            ></input>
          </Form.Item>
        ),
      },
    ],
  },
];

// Sklad Data
export const skladData = [
  {
    form: [
      {
        type: "STRING",
        text: "Наименование",
        name: "nomi",
        gridColmun: "1 / 9",
      },
    ],
  },
];

// Detal Data
export const detalData = [
  {
    form: [
      {
        type: "STRING",
        text: "Наименование",
        name: "nomi",
        gridColmun: "1 / 4",
      },
      {
        type: "STRING",
        text: "Штрих код",
        name: "shtrix_kod",
        gridColmun: "4 / 7",
      },
      {
        type: "UPLOAD",
        text: "Фото",
        name: "img",
        gridColmun: "7 / 8",
      },
    ],
  },
];

// Komplekt Data
export const komplektData = [
  {
    form: [
      {
        type: "STRING",
        text: "Наименование",
        name: "nomi",
        gridColmun: "1 / 4",
      },
      {
        type: "STRING",
        text: "Цена",
        name: "price",
        gridColmun: "4 / 7",
      },
      {
        type: "UPLOAD",
        text: "Фото",
        name: "img",
        gridColmun: "7 / 8",
      },
    ],
    columns: [
      {
        title: "№",
        dataIndex: "key",
        render: (key, text, index) => ++index,
      },
      {
        title: "Nazvanie",
        dataIndex: "ostatka",
        render: () => (
          <Form.Item>
            <Select
              style={{ width: 350 }}
              placeholder="Select a option "
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
        ),
      },
      {
        title: "Kol-ov",
        dataIndex: "kolOv",
        render: () => (
          <Form.Item>
            <Input type={"text"} />
          </Form.Item>
        ),
      },
      {
        title: "Foto",
        dataIndex: "foto",
        render: () => (
          <Form.Item name={"img"}>
            <label for="files" className="inputt">
              Rasim yuklash
            </label>
            <Input
              id="files"
              style={{ visibility: "hidden" }}
              type="file"
            ></Input>
          </Form.Item>
        ),
      },
    ],
  },
];

// Satsialni Data
export const SatsialniData = [
  {
    form: [
      {
        type: "STRING",
        text: "Наименование",
        name: "nomi",
        gridColmun: "1 / 9",
      },
    ],
  },
];

// Sotrudniki-Data
export const sotrudnikiData = [
  {
    form: [
      {
        type: "STRING",
        text: "Наименование",
        name: "nomi",
        gridColmun: "1 / 3",
      },
      {
        type: "STRING",
        text: "Login",
        name: "nomi",
        gridColmun: "3 / 5",
      },
      {
        type: "STRING",
        text: "Parol",
        name: "nomi",
        gridColmun: "5 / 7",
      },
      {
        type: "STRING",
        text: "Sklad",
        name: "nomi",
        gridColmun: "7 / 9",
      },
      {
        type: "STRING",
        text: "Dostup",
        name: "nomi",
        gridRow: "2 /2",
        gridColmun: "1 / 3",
      },
    ],
  },
];
