let cityNode = document.querySelector(".city");

// 1、新增城市节点
const cityArrs = [
  {
    key: "A",
    city: [
      {
        id: "A1",
        name: "安徽",
      },
      {
        id: "A2",
        name: "阿克苏",
      },
      {
        id: "A3",
        name: "阿拉善",
      },
      {
        id: "A4",
        name: "阿勒泰",
      },
      {
        id: "A5",
        name: "安庆",
      },
      {
        id: "A6",
        name: "鞍山",
      },
      {
        id: "A7",
        name: "安阳",
      },
      {
        id: "A8",
        name: "安顺",
      },
    ],
  },
  {
    key: "B",
    city: [
      {
        id: "B1",
        name: "北京",
      },
      {
        id: "B2",
        name: "白城",
      },
      {
        id: "B3",
        name: "布里尔顿",
      },
      {
        id: "B4",
        name: "泊位",
      },
    ],
  },
  {
    key: "C",
    city: [
      {
        id: "C1",
        name: "测试",
      },
      {
        id: "C2",
        name: "拆分",
      },
      {
        id: "C3",
        name: "财富时代",
      },
      {
        id: "C4",
        name: "长风渡",
      },
    ],
  },
  {
    key: "D",
    city: [
      {
        id: "D1",
        name: "大量",
      },
      {
        id: "D2",
        name: "打开",
      },
      {
        id: "D3",
        name: "大卫",
      },
      {
        id: "D4",
        name: "大事",
      },
    ],
  },
  {
    key: "E",
    city: [
      {
        id: "E1",
        name: "恩爱",
      },
      {
        id: "E2",
        name: "鄂拉山分",
      },
      {
        id: "E3",
        name: "额发顺丰",
      },
      {
        id: "E4",
        name: "恶搞",
      },
    ],
  },
  {
    key: "F",
    city: [
      {
        id: "F1",
        name: "发送到",
      },
      {
        id: "F2",
        name: "分类",
      },
      {
        id: "F3",
        name: "分开",
      },
      {
        id: "F4",
        name: "发生了卡萨帝",
      },
    ],
  },
  {
    key: "G",
    city: [
      {
        id: "G1",
        name: "高亮",
      },
      {
        id: "G2",
        name: "管理理论",
      },
      {
        id: "G3",
        name: "工请问请问",
      },
      {
        id: "G4",
        name: "管理权威",
      },
    ],
  },
  {
    key: "H",
    city: [
      {
        id: "H1",
        name: "文本",
      },
      {
        id: "H2",
        name: "文本",
      },
      {
        id: "H3",
        name: "文本",
      },
      {
        id: "H4",
        name: "文本",
      },
    ],
  },
  {
    key: "I",
    city: [
      {
        id: "I1",
        name: "文本",
      },
      {
        id: "I2",
        name: "文本",
      },
      {
        id: "I3",
        name: "文本",
      },
      {
        id: "I4",
        name: "文本",
      },
    ],
  },
  {
    key: "J",
    city: [
      {
        id: "J1",
        name: "文本",
      },
      {
        id: "J2",
        name: "文本",
      },
      {
        id: "J3",
        name: "文本",
      },
      {
        id: "J4",
        name: "文本",
      },
    ],
  },
  {
    key: "K",
    city: [
      {
        id: "K1",
        name: "文本",
      },
      {
        id: "K2",
        name: "文本",
      },
      {
        id: "K3",
        name: "文本",
      },
      {
        id: "K4",
        name: "文本",
      },
    ],
  },
  {
    key: "L",
    city: [
      {
        id: "L1",
        name: "文本",
      },
      {
        id: "L2",
        name: "文本",
      },
      {
        id: "L3",
        name: "文本",
      },
      {
        id: "L4",
        name: "文本",
      },
    ],
  },
  {
    key: "M",
    city: [
      {
        id: "M1",
        name: "文本",
      },
      {
        id: "M2",
        name: "文本",
      },
      {
        id: "M3",
        name: "文本",
      },
      {
        id: "M4",
        name: "文本",
      },
    ],
  },
  {
    key: "N",
    city: [
      {
        id: "N1",
        name: "文本",
      },
      {
        id: "N2",
        name: "文本",
      },
      {
        id: "N3",
        name: "文本",
      },
      {
        id: "N4",
        name: "文本",
      },
    ],
  },
  {
    key: "O",
    city: [
      {
        id: "O1",
        name: "文本",
      },
      {
        id: "O2",
        name: "文本",
      },
      {
        id: "O3",
        name: "文本",
      },
      {
        id: "O4",
        name: "文本",
      },
    ],
  },
  {
    key: "P",
    city: [
      {
        id: "P1",
        name: "文本",
      },
      {
        id: "P2",
        name: "文本",
      },
      {
        id: "P3",
        name: "文本",
      },
      {
        id: "P4",
        name: "文本",
      },
    ],
  },
  {
    key: "Q",
    city: [
      {
        id: "Q1",
        name: "文本",
      },
      {
        id: "Q2",
        name: "文本",
      },
      {
        id: "Q3",
        name: "文本",
      },
      {
        id: "Q4",
        name: "文本",
      },
    ],
  },
  {
    key: "R",
    city: [
      {
        id: "R1",
        name: "文本",
      },
      {
        id: "R2",
        name: "文本",
      },
      {
        id: "R3",
        name: "文本",
      },
      {
        id: "R4",
        name: "文本",
      },
    ],
  },
  {
    key: "S",
    city: [
      {
        id: "S1",
        name: "文本",
      },
      {
        id: "S2",
        name: "文本",
      },
      {
        id: "S3",
        name: "文本",
      },
      {
        id: "S4",
        name: "文本",
      },
    ],
  },
  {
    key: "T",
    city: [
      {
        id: "T1",
        name: "文本",
      },
      {
        id: "T2",
        name: "文本",
      },
      {
        id: "T3",
        name: "文本",
      },
      {
        id: "T4",
        name: "文本",
      },
    ],
  },
  {
    key: "U",
    city: [
      {
        id: "U1",
        name: "文本",
      },
      {
        id: "U2",
        name: "文本",
      },
      {
        id: "U3",
        name: "文本",
      },
      {
        id: "U4",
        name: "文本",
      },
    ],
  },
  {
    key: "V",
    city: [
      {
        id: "V1",
        name: "文本",
      },
      {
        id: "V2",
        name: "文本",
      },
      {
        id: "V3",
        name: "文本",
      },
      {
        id: "V4",
        name: "文本",
      },
    ],
  },
  {
    key: "W",
    city: [
      {
        id: "W1",
        name: "文本",
      },
      {
        id: "W2",
        name: "文本",
      },
      {
        id: "W3",
        name: "文本",
      },
      {
        id: "W4",
        name: "文本",
      },
    ],
  },
  {
    key: "X",
    city: [
      {
        id: "X1",
        name: "文本",
      },
      {
        id: "X2",
        name: "文本",
      },
      {
        id: "X3",
        name: "文本",
      },
      {
        id: "X4",
        name: "文本",
      },
    ],
  },
  {
    key: "Y",
    city: [
      {
        id: "Y1",
        name: "文本",
      },
      {
        id: "Y2",
        name: "文本",
      },
      {
        id: "Y3",
        name: "文本",
      },
      {
        id: "Y4",
        name: "文本",
      },
    ],
  },
  {
    key: "Z",
    city: [
      {
        id: "Z1",
        name: "文本",
      },
      {
        id: "Z2",
        name: "文本",
      },
      {
        id: "Z3",
        name: "文本",
      },
      {
        id: "Z4",
        name: "文本",
      },
    ],
  },
];

const collectLetterArr=[]
// 2、渲染数据
for(let i=0;i<cityArrs.length;i++){
    let divOneNode = document.createElement("div");
    divOneNode.innerHTML=cityArrs[i].key
    divOneNode.style.backgroundColor='#eee'
    divOneNode.setAttribute('class','titleName')
    cityNode.appendChild(divOneNode);
    // 3、收集数据(abc的距离顶部的距离和内容)
    collectLetterArr.push({
        key:divOneNode.innerText,
        top:divOneNode.offsetTop
    })
    for(let j=0;j<cityArrs[i].city.length;j++){
        let divTwoNode = document.createElement("div");
        divTwoNode.setAttribute('class','cityname')
        divTwoNode.innerHTML=cityArrs[i].city[j].name
        cityNode.appendChild(divTwoNode)
       
    }
}

