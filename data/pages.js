/**
 * pages.js — 페이지 목록 설정
 *
 * 모션테스트에서 옮길 때: pages/N 폴더를 복사하고(번호는 바꿔도 됨) 아래에 항목 추가.
 *   번호: {
 *     label : '버튼에 표시할 이름',
 *     url   : 'pages/번호/',
 *     cat   : 'docs' | 'game' | 'exp'   // 자료 정리 / 게임 / 체험 요소 (없으면 docs)
 *     thumb : '썸네일 이미지 경로 (없으면 null)',
 *     desc  : '버튼 아래 작은 설명 (없으면 null)',
 *   },
 *
 * 번호가 없는 칸은 빈 칸으로 표시됩니다. (설정 ⚙️ 에서 빈 칸 표시 켜기/끄기)
 */

const PAGES = {
  1: {
    label : '콘웨이의 생명실험',
    url   : 'pages/1/',
    cat   : 'exp',
    thumb : null,
    desc  : '셀룰러 오토마타 시뮬레이션',
  },

  2: {
    label : '브라이언의 뇌',
    url   : 'pages/2/',
    cat   : 'exp',
    thumb : null,
    desc  : '3상태 셀룰러 오토마타 · 신경세포 발화 시뮬레이션',
  },

  3: {
    label : '폭죽 불꽃놀이',
    url   : 'pages/3/',
    cat   : 'exp',
    thumb : null,
    desc  : '클릭 위치에 로켓이 날아가 터지는 폭죽 · 국화 · 버드나무 · 고리',
  },

  4: {
    label : '색 물결',
    url   : 'pages/4/',
    cat   : 'exp',
    thumb : null,
    desc  : '클릭한 지점에서 새 색이 물결처럼 퍼져 배경을 바꿈',
  },

  5: {
    label : '반응속도 테스트',
    url   : 'pages/5/',
    cat   : 'game',
    thumb : null,
    desc  : '원 크기·시간 설정 후 원이 사라지기 전에 눌러 반응속도 측정',
  },

  6: {
    label : '떨어지는 모래',
    url   : 'pages/6/',
    cat   : 'exp',
    thumb : null,
    desc  : '모래 물리 시뮬레이션 · 밀도·소환량 조절 · 밑 열기',
  },

  7: {
    label : '그늘 산책',
    url   : 'pages/7/',
    cat   : 'game',
    thumb : null,
    desc  : '마우스 포인터 쪽으로 걸으며 어두운 공간 7곳을 지나감 · 대사·글자 없음 · 죽지 않음 · 시야 차폐 조명, 절차적 지형, 합성 음향',
  },

  8: {
    label : '어느 들판',
    url   : 'pages/8/',
    cat   : 'exp',
    thumb : null,
    desc  : '방치용 생태 시뮬레이션 — 친해지고 미워하고 태어나고 죽는다 · 모여서 구역이 되고 갈라지고 싸우다 화해한다 · 함정을 묻고 알아채고 푼다 · 늪·열지대·들불이 일방적으로 때린다 · 배우고 가르치고 논다 · 똑똑함·무능함·순수함·배척 · 개체/변종 놓기, 지형 그리기, 재해, 화해·싸움 붙이기 등 개입 도구 11종 · 시점 자동 이동',
  },
};
