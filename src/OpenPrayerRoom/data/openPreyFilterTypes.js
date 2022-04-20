const filterTypes = [
  {
    title: '신비의 종류',
    selectors: [
      {
        key: '전체',
        value: 'all',
        selected: true,
      },
      {
        key: '환희의 신비',
        value: 'all',
        selected: false,
      },
      {
        key: '고통의 신비',
        value: 'all',
        selected: false,
      },
      {
        key: '영광의 신비',
        value: 'all',
        selected: false,
      },
    ],
  },
  {
    title: '기도 구분',
    selectors: [
      {
        key: '전체',
        value: 'all',
        selected: true,
      },
      {
        key: '청원의 기도',
        value: 'all',
        selected: false,
      },
      {
        key: '감사의 기도',
        value: 'all',
        selected: false,
      },
    ],
  },
];

export default filterTypes;
