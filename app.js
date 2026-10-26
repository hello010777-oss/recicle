// ============================================================================
// 삐뽀삐뽀! 지구지킴이 탐험대 (app.js)
// ============================================================================

const RECYCLING_ITEMS = [
  {
    id: 'pet-bottle',
    num: 1,
    cardTitle: '페트병',
    shortTitle: '페트병 병뚜껑 분리하기',
    fullTitle: '1. 페트병 병뚜껑 분리하기',
    emoji: '🍼',
    aiLabel: '투명 페트병 (PET)',
    aiKeywords: [
      'bottle',
      'water bottle',
      'pop bottle',
      'soda bottle',
      'plastic bottle',
      'beer bottle',
      'wine bottle',
      'vase',
      'pitcher',
      'jug',
      'carafe',
      'beaker',
      'flask',
      'canteen',
      'dispenser'
    ],
    description:
      '이 물건은 물이나 음료수를 담는 <strong>투명 페트병(PET)</strong>이에요! 병 몸통은 투명한 플라스틱이지만, 겉에 붙은 비닐 라벨과 병뚜껑은 서로 다른 재질로 만들어져 있어요.',
    wrongMethods: [
      '비닐 라벨을 떼지 않고 페트병 그대로 휙 버리기',
      '병뚜껑과 뚜껑 고리를 분리하지 않고 꽉 잠근 채로 버리기',
      '안에 먹다 남은 음료수나 이물질이 들어있는 채로 배출하기'
    ],
    monsterQuote:
      '👾 쓰레기 괴물: "크하하! 비닐 라벨이랑 뚜껑을 안 떼고 그냥 버리면 재활용 공장에서 못 써서 전부 내 밥이 된다고~!"',
    practiceSteps: [
      '페트병 안의 남은 음료수를 깨끗이 비우고 물로 헹궈요',
      '겉에 붙은 비닐 라벨을 쭈욱 떼어내서 비닐류로 버려요',
      '페트병을 발로 꾹 밟아 납작하게 만든 뒤 병뚜껑을 분리해 배출해요'
    ]
  },
  {
    id: 'milk-carton',
    num: 2,
    cardTitle: '우유갑',
    shortTitle: '우유갑 헹구고 펼치기',
    fullTitle: '2. 우유갑 헹구고 펼치기',
    emoji: '🥛',
    aiLabel: '종이팩 / 우유갑',
    aiKeywords: [
      'milk',
      'milk can',
      'juice',
      'packet',
      'coffee mug',
      'mug',
      'espresso',
      'cream',
      'lotion',
      'sunscreen',
      'soap dispenser',
      'washbasin'
    ],
    description:
      '이 물건은 고소한 우유나 주스를 담는 <strong>우유갑(종이팩)</strong>이에요! 일반 종이처럼 보이지만 물에 젖지 않도록 안쪽과 바깥쪽에 얇은 비닐 코팅이 되어 있는 고급 천연펄프 종이팩이랍니다.',
    wrongMethods: [
      '우유가 남아있는 채로 헹구지 않고 그냥 버리기 (악취가 나고 썩어요!)',
      '우유갑을 펼치지 않고 통째로 일반 폐지(신문지·책)와 섞어서 버리기',
      '우유갑에 붙어있는 플라스틱 빨대나 비닐을 떼지 않고 버리기'
    ],
    monsterQuote:
      '👾 쓰레기 괴물: "우유갑을 안 씻고 일반 종이랑 섞어 버리면 썩어서 냄새나는 쓰레기 괴물 에너지만 잔뜩 올라간다구!"',
    practiceSteps: [
      '남은 우유를 비우고 깨끗한 물로 우유갑 안을 헹궈요',
      '가위나 손으로 우유갑을 넓게 펼쳐서 햇볕에 바짝 말려요',
      '일반 종이가 아닌 [종이팩 전용 수거함]에 따로 모아서 버려요'
    ]
  },
  {
    id: 'plastic-container',
    num: 3,
    cardTitle: '플라스틱 용기',
    shortTitle: '플라스틱 용기 씻어 버리기',
    fullTitle: '3. 플라스틱 용기 씻어 버리기',
    emoji: '🥡',
    aiLabel: '플라스틱 배달·음식 용기',
    aiKeywords: [
      'bowl',
      'cup',
      'soup bowl',
      'mixing bowl',
      'tub',
      'tray',
      'plate',
      'tupperware',
      'measuring cup',
      'bucket',
      'pail',
      'basin',
      'pot',
      'dish',
      'petri dish',
      'crock pot',
      'frying pan'
    ],
    description:
      '이 물건은 음식을 담았던 <strong>플라스틱 용기</strong>예요! 도시락통, 요거트 통, 배달 용기처럼 가볍고 단단한 플라스틱으로 만들어져 깨끗하면 다시 플라스틱으로 태어날 수 있어요.',
    wrongMethods: [
      '떡볶이 국물이나 음식물 찌꺼기가 묻은 채로 씻지 않고 그대로 버리기',
      '용기 테두리에 붙은 비닐 덮개를 떼어내지 않고 같이 버리기',
      '고추장·기름때가 빨갛게 물들어 안 지워지는데도 재활용 통에 넣기'
    ],
    monsterQuote:
      '👾 쓰레기 괴물: "헤헤! 양념이랑 음식물이 묻은 플라스틱 용기는 다른 깨끗한 재활용품까지 다 더럽혀서 내가 제일 좋아해!"',
    practiceSteps: [
      '용기에 남은 음식물 찌꺼기를 휴지로 닦거나 물로 깨끗이 씻어요',
      '용기 입구에 붙어있는 비닐 실링(덮개)과 스티커를 떼어내요',
      '물기를 털어낸 뒤 플라스틱 수거함에 차곡차곡 버려요'
    ]
  },
  {
    id: 'metal-can',
    num: 4,
    cardTitle: '캔',
    shortTitle: '캔 찌그러트리기',
    fullTitle: '4. 캔 찌그러트리기',
    emoji: '🥫',
    aiLabel: '알루미늄·철 캔',
    aiKeywords: [
      'can',
      'beer can',
      'soda can',
      'tin can',
      'pop',
      'oil filter',
      'cocktail shaker',
      'saltshaker',
      'canister',
      'cylinder',
      'barrel',
      'drum',
      'aerosol',
      'hair spray',
      'thermos'
    ],
    description:
      '이 물건은 음료수나 통조림이 들어있는 <strong>금속 캔(알루미늄·철 캔)</strong>이에요! 캔은 잘 재활용하면 새 캔으로 무한히 다시 태어날 수 있는 소중한 금속 자원이에요.',
    wrongMethods: [
      '캔을 찌그러트리지 않고 부피가 큰 상태 그대로 휙 던져 버리기',
      '캔 안에 담배꽁초나 휴지 같은 다른 쓰레기를 넣어서 버리기',
      '통조림 캔에 든 기름이나 내용물을 씻지 않고 그대로 버리기'
    ],
    monsterQuote:
      '👾 쓰레기 괴물: "캔 안에 이물질을 넣고 안 찌그러트려서 버리면 부피만 커지고 선별하기 힘들어서 내 힘이 솟아나지~!"',
    practiceSteps: [
      '캔 안의 남은 음료수나 내용물을 완전히 비우고 물로 헹궈요',
      '캔 속에 다른 쓰레기가 들어가지 않도록 확인해요',
      '손이나 발로 캔을 꾹 눌러 납작하게 찌그러트린 뒤 캔 수거함에 버려요'
    ]
  },
  {
    id: 'cardboard-box',
    num: 5,
    cardTitle: '박스',
    shortTitle: '박스 테이프 뜯고 압착하기',
    fullTitle: '5. 박스 테이프 뜯고 압착하기',
    emoji: '📦',
    aiLabel: '택배 종이 박스',
    aiKeywords: [
      'box',
      'carton',
      'crate',
      'cardboard',
      'chest',
      'ashcan',
      'hamper',
      'suitcase',
      'package',
      'parcel',
      'tissue box',
      'pencil box',
      'mailbox'
    ],
    description:
      '이 물건은 택배나 선물을 담아 오는 <strong>골판지 종이 박스</strong>예요! 종이 박스는 훌륭한 재활용 종이지만, 겉에 붙은 비닐 테이프와 운송장 스티커는 종이가 아니에요.',
    wrongMethods: [
      '박스에 붙은 비닐 박스테이프와 택배 송장 스티커를 안 떼고 그대로 버리기',
      '박스를 접지 않고 네모난 상자 모양 그대로 쌓아 두어 버리기',
      '박스 안에 들어있던 뽁뽁이(비닐)나 아이스팩을 빼지 않고 같이 버리기'
    ],
    monsterQuote:
      '👾 쓰레기 괴물: "우하하! 박스테이프랑 스티커가 붙은 채로 안 접고 버리면 종이 공장의 기계가 엉켜버려서 내가 신나지!"',
    practiceSteps: [
      '박스에 붙어있는 비닐 테이프와 택배 운송장 스티커를 싹 떼어내요',
      '박스를 반듯하게 펴서 납작하게 압착(접기)해요',
      '비에 젖지 않게 차곡차곡 묶어서 종이류 수거함에 배출해요'
    ]
  },
  {
    id: 'battery',
    num: 6,
    cardTitle: '건전지',
    shortTitle: '건전지 골라내기',
    fullTitle: '6. 건전지 골라내기',
    emoji: '🔋',
    aiLabel: '다 쓴 폐건전지',
    aiKeywords: [
      'battery',
      'remote control',
      'remote',
      'flashlight',
      'lighter',
      'lipstick',
      'torch',
      'cell',
      'spark plug',
      'whistle',
      'USB',
      'modem',
      'power',
      'switch',
      'microphone',
      'joystick'
    ],
    description:
      '이 물건은 장난감이나 리모컨에 들어가는 <strong>건전지(폐건전지)</strong>예요! 건전지 안에는 철, 아연, 니켈 같은 금속도 있지만 잘못 버리면 땅과 물을 오염시키는 위험한 물질도 들어있어요.',
    wrongMethods: [
      '다 쓴 건전지를 일반 쓰레기봉투(종량제 봉투)에 그냥 섞어서 버리기',
      '장난감이나 시계 안에 건전지를 빼지 않고 플라스틱 통에 통째로 버리기',
      '건전지를 물에 닿게 하거나 불 근처에 위험하게 버리기'
    ],
    monsterQuote:
      '👾 쓰레기 괴물: "건전지를 일반 쓰레기통에 그냥 버리면 땅속이 오염되고 불이 날 수도 있어서 독성 괴물이 되어버린다구!"',
    practiceSteps: [
      '장난감이나 전자제품을 버리기 전에 안에 든 건전지를 꼭 골라내요',
      '건전지에 물기가 닿지 않도록 따로 모아요',
      '아파트나 동주민센터에 있는 [폐건전지 전용 수거함]에 쏙 넣어요'
    ]
  },
  {
    id: 'medicine',
    num: 7,
    cardTitle: '약',
    shortTitle: '약은 따로 버리기',
    fullTitle: '7. 약은 따로 버리기',
    emoji: '💊',
    aiLabel: '먹다 남은 폐의약품(약)',
    aiKeywords: [
      'pill bottle',
      'medicine chest',
      'band aid',
      'syringe',
      'ointment',
      'vitamin',
      'capsule',
      'pill',
      'tablet',
      'drug',
      'vial',
      'dropper',
      'first aid'
    ],
    description:
      '이 물건은 유통기한이 지났거나 먹다 남은 <strong>약(폐의약품: 알약, 물약, 연고)</strong>이에요! 약은 화학 성분으로 되어 있어서 일반 쓰레기나 하수구에 버리면 강물과 토양이 아프게 돼요.',
    wrongMethods: [
      '먹다 남은 알약이나 가루약을 일반 쓰레기통에 그냥 버리기',
      '남은 물약(시럽)을 싱크대나 화장실 변기에 콸콸 흘려보내기',
      '약봉지와 플라스틱 약병에 약이 든 채로 재활용 통에 버리기'
    ],
    monsterQuote:
      '👾 쓰레기 괴물: "약을 변기나 일반 쓰레기통에 버리면 물고기와 땅이 약 성분에 오염돼서 내 부하가 된다고~!"',
    practiceSteps: [
      '유통기한이 지난 알약, 가루약, 물약, 연고를 종량제 봉투에 버리지 않고 따로 모아요',
      '종이 약상자만 분리하고, 약 알맹이와 물약은 한곳에 모아요',
      '동네 약국이나 보건소, 주민센터의 [폐의약품 전용 수거함]에 버려요'
    ]
  },
  {
    id: 'sharp-object',
    num: 8,
    cardTitle: '날카로운 물건',
    shortTitle: '날카로운 물건은 감싸서 버리기',
    fullTitle: '8. 날카로운 물건은 감싸서 버리기',
    emoji: '✂️',
    aiLabel: '깨진 유리·가위·칼 등 날카로운 물건',
    aiKeywords: [
      'scissors',
      'knife',
      'cleaver',
      'letter opener',
      'wine glass',
      'goblet',
      'fork',
      'can opener',
      'corkscrew',
      'screwdriver',
      'razor',
      'blade',
      'nail',
      'pin',
      'needle',
      'shears',
      'scalpel',
      'hatchet',
      'hammer',
      'pliers',
      'spatula'
    ],
    description:
      '이 물건은 <strong>깨진 유리, 낡은 가위, 칼날처럼 날카로운 물건</strong>이에요! 날카로운 부분이 그대로 드러나 있으면 쓰레기를 치워주시는 환경미화원 아저씨·아주머니나 이웃이 크게 다칠 수 있어요.',
    wrongMethods: [
      '날카로운 칼날이나 깨진 유리 조각을 감싸지 않고 쓰레기봉투에 그냥 넣기 (봉투가 찢어져요!)',
      '깨진 유리컵이나 도자기를 일반 유리병 재활용 수거함에 섞어서 버리기',
      '위험하다는 표시 없이 뾰족한 채로 배출하기'
    ],
    monsterQuote:
      '👾 쓰레기 괴물: "날카로운 물건을 그냥 버리면 봉투가 푹 찢어져서 쓰레기가 쏟아지고 사람들이 다칠 수 있지!"',
    practiceSteps: [
      '날카로운 물건은 두꺼운 신문지나 종이 상자로 여러 겹 안전하게 감싸요',
      '풀리지 않게 테이프로 칭칭 감고 겉면에 [위험! 날카로운 물건]이라고 크게 적어요',
      '어른과 함께 안전하게 지정된 방법(종량제 봉투 또는 불연성 마대)으로 배출해요'
    ]
  },
  {
    id: 'soiled-paper',
    num: 9,
    cardTitle: '오염된 종이',
    shortTitle: '오염된 종이 제거하기',
    fullTitle: '9. 오염된 종이 제거하기 (종이는 무조건 다 된다 X!)',
    emoji: '🧻',
    aiLabel: '오염된 종이·영수증·휴지',
    aiKeywords: [
      'paper towel',
      'toilet tissue',
      'tissue',
      'menu',
      'envelope',
      'book',
      'comic book',
      'napkin',
      'handkerchief',
      'notebook',
      'binder',
      'newspaper',
      'magazine',
      'receipt',
      'paper',
      'towel',
      'bib',
      'diaper',
      'wrapper'
    ],
    description:
      '이 물건은 <strong>음식물·기름이 묻은 종이, 사용한 휴지, 영수증(감열지)</strong>이에요! <strong>"종이는 무조건 다 재활용된다? 삐빅! 아니에요(X)!"</strong> 기름이나 오물이 묻은 종이와 영수증, 코팅된 종이는 재활용이 되지 않아요.',
    wrongMethods: [
      '종이라고 해서 치킨·피자 기름이 잔뜩 묻은 속종이를 종이 재활용함에 버리기',
      '코를 푼 휴지나 물티슈, 마트 종이 영수증을 일반 폐지와 함께 버리기',
      '비닐 코팅된 전단지나 금박·은박 포장지를 뜯지 않고 종이류에 버리기'
    ],
    monsterQuote:
      '👾 쓰레기 괴물: "종이면 무조건 다 재활용되는 줄 알았지? 기름 묻은 종이랑 휴지, 영수증을 종이함에 넣으면 깨끗한 종이까지 다 망가진다구!"',
    practiceSteps: [
      '피자·치킨 박스에서 기름이나 양념이 묻은 오염된 종이 부분은 따로 떼어내요',
      '사용한 휴지, 기름 묻은 종이, 영수증은 재활용(X)이 아니라 [일반 쓰레기(종량제 봉투)]에 버려요',
      '오염되지 않은 깨끗한 종이만 골라서 종이류로 분리수거해요'
    ]
  }
];

// 상태 변수
let currentItemIndex = -1; // 처음에는 아직 스캔 전(-1), 버튼을 클릭하고 스캔하면 바로 설명 표시!
let completedItemIds = new Set();
let activeSpeechSection = null; // 'desc' | 'wrong' | 'correct' | null

// 카메라 & AI 모델 상태
let webcamStream = null;
let currentFacingMode = 'user'; // 기본값: 전면(셀카) 카메라로 시작 ('user' | 'environment')
let cocoModel = null;
let mobilenetModel = null;

// DOM 요소 참조
const itemsGrid = document.getElementById('itemsGrid');
const completedCountText = document.getElementById('completedCountText');
const aiWaitingState = document.getElementById('aiWaitingState');
const aiResultContainer = document.getElementById('aiResultContainer');
const objectIconBubble = document.getElementById('objectIconBubble');
const aiDetectionTag = document.getElementById('aiDetectionTag');
const objectTitle = document.getElementById('objectTitle');
const objectDescription = document.getElementById('objectDescription');
const wrongMethodList = document.getElementById('wrongMethodList');
const monsterWrongQuote = document.getElementById('monsterWrongQuote');
const practiceStepsList = document.getElementById('practiceStepsList');

const speakDescBtn = document.getElementById('speakDescBtn');
const speakWrongBtn = document.getElementById('speakWrongBtn');
const speakCorrectBtn = document.getElementById('speakCorrectBtn');
const revealAllCorrectBtn = document.getElementById('revealAllCorrectBtn');
const stopVoiceBtn = document.getElementById('stopVoiceBtn');
const resetGameBtn = document.getElementById('resetGameBtn');

const webcamVideo = document.getElementById('webcamVideo');
const cameraPlaceholder = document.getElementById('cameraPlaceholder');
const startCameraBtn = document.getElementById('startCameraBtn');
const switchCameraBtn = document.getElementById('switchCameraBtn');
const toggleCameraBtn = document.getElementById('toggleCameraBtn');
const aiScanNowBtn = document.getElementById('aiScanNowBtn');
const imageUploadInput = document.getElementById('imageUploadInput');
const uploadedImagePreview = document.getElementById('uploadedImagePreview');
const scanLaser = document.getElementById('scanLaser');
const aiStatusBadge = document.getElementById('aiStatusBadge');
const toastMessage = document.getElementById('toastMessage');
const victoryModalOverlay = document.getElementById('victoryModalOverlay');
const closeVictoryModalBtn = document.getElementById('closeVictoryModalBtn');
const restartFromVictoryBtn = document.getElementById('restartFromVictoryBtn');

// ============================================================================
// 효과음 생성기 (Web Audio API - 단일 AudioContext 재사용으로 윈도우 브라우저 제한 방지)
// ============================================================================
let sharedAudioCtx = null;

function getAudioContext() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return null;
  if (!sharedAudioCtx || sharedAudioCtx.state === 'closed') {
    sharedAudioCtx = new AudioCtx();
  }
  if (sharedAudioCtx.state === 'suspended') {
    sharedAudioCtx.resume().catch(() => {});
  }
  return sharedAudioCtx;
}

function playCuteSound(type) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === 'scan') {
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.1, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.08);
      });
    } else if (type === 'check') {
      [659.25, 880].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.14, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.12);
      });
    } else if (type === 'victory') {
      const notes = [523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5];
      const times = [0, 0.11, 0.22, 0.34, 0.48, 0.62];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + times[i]);
        gain.gain.setValueAtTime(0.18, now + times[i]);
        gain.gain.exponentialRampToValueAtTime(0.001, now + times[i] + 0.22);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + times[i]);
        osc.stop(now + times[i] + 0.22);
      });
    }
  } catch (e) {
    // 무시
  }
}

// ============================================================================
// 파트별 한국어 남성 음성 안내 (윈도우 Chrome/Edge SAPI 음성 끊김 방지 적용)
// ============================================================================
let cachedKoreanVoices = [];
let speechTimerId = null;

function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  cachedKoreanVoices = window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang && (v.lang.includes('ko') || v.lang.includes('KR')));
}

if ('speechSynthesis' in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

function getKoreanMaleVoice() {
  if (!cachedKoreanVoices.length) loadVoices();
  // 남성 음성 키워드 우선 탐색 (Edge/Windows/Chrome/Mac 한국어 남성 음성 이름)
  const maleKeywords = ['injoon', 'hyunsu', 'bongjin', 'seokmin', 'gookmin', 'male', '남성', 'man', 'minsu'];
  for (const v of cachedKoreanVoices) {
    const nameLower = v.name.toLowerCase();
    if (maleKeywords.some((kw) => nameLower.includes(kw))) {
      return v;
    }
  }
  return cachedKoreanVoices[0] || null;
}

function resetSpeakButtonLabels() {
  activeSpeechSection = null;
  speakDescBtn.classList.remove('speaking');
  speakWrongBtn.classList.remove('speaking');
  speakCorrectBtn.classList.remove('speaking');

  speakDescBtn.textContent = '🔊 물건 설명 듣기';
  speakWrongBtn.textContent = '🔊 괴물의 추천 듣기';
  speakCorrectBtn.textContent = '🔊 올바른 실천 듣기';
}

function stopSpeaking() {
  if (speechTimerId) {
    clearTimeout(speechTimerId);
    speechTimerId = null;
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  window._activeUtterance = null;
  resetSpeakButtonLabels();
}

function speakSection(sectionType) {
  if (!('speechSynthesis' in window)) {
    showToast('이 브라우저에서는 음성 읽기 기능을 지원하지 않아요.');
    return;
  }

  // 이미 같은 파트를 읽고 있는 중이면 즉시 멈추기 토글
  if (activeSpeechSection === sectionType) {
    stopSpeaking();
    showToast('🔇 AI 목소리를 멈췄어요.');
    return;
  }

  stopSpeaking();

  const safeIndex = currentItemIndex >= 0 ? currentItemIndex : 0;
  const item = RECYCLING_ITEMS[safeIndex];
  const plainDesc = item.description.replace(/<[^>]*>/g, '');
  let textToRead = '';
  let targetBtn = null;

  if (sectionType === 'desc') {
    textToRead = `미션 ${item.num}, ${item.cardTitle}. AI가 인식한 물건은 ${item.aiLabel}입니다. ${plainDesc}`;
    targetBtn = speakDescBtn;
  } else if (sectionType === 'wrong') {
    textToRead = `쓰레기 괴물이 추천하는 배출방법입니다. 첫째, ${item.wrongMethods[0]}. 둘째, ${item.wrongMethods[1]}. 셋째, ${item.wrongMethods[2]}.`;
    targetBtn = speakWrongBtn;
  } else if (sectionType === 'correct') {
    textToRead = `어린이 환경 수비대의 올바른 실천 미션 정답입니다! 첫째, ${item.practiceSteps[0]}. 둘째, ${item.practiceSteps[1]}. 셋째, ${item.practiceSteps[2]}.`;
    targetBtn = speakCorrectBtn;
  }

  if (!textToRead || !targetBtn) return;

  activeSpeechSection = sectionType;
  targetBtn.classList.add('speaking');
  targetBtn.textContent = '⏹️ 듣기 멈추기';

  // 윈도우 Chrome/Edge에서 cancel() 직후 speak() 호출 시 음성이 씹히는 현상 방지
  speechTimerId = setTimeout(() => {
    try {
      const utter = new SpeechSynthesisUtterance(textToRead);
      window._activeUtterance = utter; // 가비지 컬렉션으로 인한 중간 끊김 방지
      utter.lang = 'ko-KR';

      const maleVoice = getKoreanMaleVoice();
      if (maleVoice) {
        utter.voice = maleVoice;
      }

      // 남성 목소리 톤으로 낮고 또렷하게 설정
      utter.rate = 0.98;
      utter.pitch = sectionType === 'wrong' ? 0.62 : 0.72;

      utter.onend = () => {
        window._activeUtterance = null;
        resetSpeakButtonLabels();
      };
      utter.onerror = () => {
        window._activeUtterance = null;
        resetSpeakButtonLabels();
      };

      window.speechSynthesis.speak(utter);
    } catch (e) {
      resetSpeakButtonLabels();
    }
  }, 60);
}

// 토스트 메시지 표시
let toastTimer = null;
function showToast(msg) {
  toastMessage.textContent = msg;
  toastMessage.classList.remove('hidden');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastMessage.classList.add('hidden');
  }, 2600);
}

// ============================================================================
// 9가지 분리수거 물건 그리드 렌더링 (카드 옆쪽에 작은 [미션 성공] 버튼 포함)
// ============================================================================
function checkAllMissionsCompleted() {
  if (completedItemIds.size === RECYCLING_ITEMS.length) {
    playCuteSound('victory');
    victoryModalOverlay.classList.remove('hidden');

    if ('speechSynthesis' in window) {
      stopSpeaking();
      speechTimerId = setTimeout(() => {
        try {
          const utter = new SpeechSynthesisUtterance(
            '우와! 아홉 가지 분리수거 미션을 모두 성공해서 쓰레기 괴물을 완전히 물리쳤어요! 이제 우리 동네와 지구가 반짝반짝 깨끗해졌어요!'
          );
          window._activeUtterance = utter;
          utter.lang = 'ko-KR';
          const maleVoice = getKoreanMaleVoice();
          if (maleVoice) utter.voice = maleVoice;
          utter.rate = 0.98;
          utter.pitch = 0.72;
          utter.onend = () => {
            window._activeUtterance = null;
          };
          window.speechSynthesis.speak(utter);
        } catch (e) {
          // 무시
        }
      }, 60);
    }
  }
}

function renderItemsGrid() {
  itemsGrid.innerHTML = '';
  RECYCLING_ITEMS.forEach((item, index) => {
    const isCompleted = completedItemIds.has(item.id);
    const cardDiv = document.createElement('div');
    cardDiv.className = `item-chip-card ${index === currentItemIndex ? 'active' : ''} ${
      isCompleted ? 'completed' : ''
    }`;
    cardDiv.dataset.index = index;

    // 왼쪽: 물건 아이콘 + 미션 제목 클릭 영역
    const mainBtn = document.createElement('button');
    mainBtn.type = 'button';
    mainBtn.className = 'chip-main-area';
    mainBtn.innerHTML = `
      <span class="chip-emoji">${item.emoji}</span>
      <span class="chip-text-col">
        <span class="chip-num">미션 ${item.num}</span>
        <span class="chip-label">${item.cardTitle}</span>
      </span>
    `;
    mainBtn.addEventListener('click', () => {
      triggerAIRecognitionForItem(index, '카메라 AI 물건 인식 완료');
    });

    // 오른쪽 옆: 작은 미션 성공 버튼
    const successBtn = document.createElement('button');
    successBtn.type = 'button';
    successBtn.className = `mini-success-btn ${isCompleted ? 'done' : ''}`;
    successBtn.textContent = isCompleted ? '✔ 성공!' : '미션 성공';
    successBtn.title = `미션 ${item.num} ${item.cardTitle} 성공 체크`;
    successBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (completedItemIds.has(item.id)) {
        completedItemIds.delete(item.id);
        renderItemsGrid();
        showToast(`미션 ${item.num} [${item.cardTitle}] 성공 표시를 취소했어요.`);
      } else {
        completedItemIds.add(item.id);
        playCuteSound('check');
        renderItemsGrid();
        showToast(`🎉 미션 ${item.num} [${item.cardTitle}] 미션 성공! (${completedItemIds.size} / ${RECYCLING_ITEMS.length})`);
        checkAllMissionsCompleted();
      }
    });

    cardDiv.appendChild(mainBtn);
    cardDiv.appendChild(successBtn);
    itemsGrid.appendChild(cardDiv);
  });

  completedCountText.textContent = `미션 성공: ${completedItemIds.size} / ${RECYCLING_ITEMS.length}`;
}

// ============================================================================
// 선택한 물건의 AI 설명 + 쓰레기 괴물이 추천하는 배출방법 + 올바른 실천 미션 업데이트
// ============================================================================
function updateAIExplanationPanel(index, sourceTagText = '🤖 AI 카메라 인식 결과') {
  // 다른 물건으로 바꿀 때 이전 음성이 계속 나오지 않도록 즉시 중지
  stopSpeaking();

  currentItemIndex = index;
  const item = RECYCLING_ITEMS[index];

  objectIconBubble.textContent = item.emoji;
  aiDetectionTag.textContent = `${sourceTagText}: ${item.aiLabel}`;
  objectTitle.textContent = `미션 ${item.num} ${item.cardTitle}`;
  objectDescription.innerHTML = item.description;

  // 쓰레기 괴물이 추천하는 배출방법 (올바르지 않은 배출방법) 렌더링
  wrongMethodList.innerHTML = '';
  item.wrongMethods.forEach((wrongText) => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="wrong-badge-x">괴물의 추천 ❌</span><span>${wrongText}</span>`;
    wrongMethodList.appendChild(li);
  });

  monsterWrongQuote.textContent = item.monsterQuote;

  // 아이들이 맞출 수 있게 정답을 가려두었다가 클릭하면 보여지는 올바른 실천 미션 렌더링
  practiceStepsList.innerHTML = '';
  revealAllCorrectBtn.textContent = '👀 정답 모두 보기';

  item.practiceSteps.forEach((stepText, stepIdx) => {
    const stepDiv = document.createElement('div');
    stepDiv.className = 'practice-step-item masked';
    stepDiv.dataset.revealed = 'false';

    const renderStepContent = (isRevealed) => {
      if (isRevealed) {
        stepDiv.className = 'practice-step-item revealed';
        stepDiv.dataset.revealed = 'true';
        stepDiv.innerHTML = `
          <div class="step-left-wrap">
            <span class="step-check-circle">✔</span>
            <span class="step-text-content">${stepText}</span>
          </div>
          <span class="step-action-pill">정답 공개됨 ✨</span>
        `;
      } else {
        stepDiv.className = 'practice-step-item masked';
        stepDiv.dataset.revealed = 'false';
        stepDiv.innerHTML = `
          <div class="step-left-wrap">
            <span class="step-check-circle">?</span>
            <span class="step-text-content">올바른 실천 방법 ${stepIdx + 1}번째 정답은 무엇일까요?</span>
          </div>
          <span class="step-action-pill">👆 클릭해서 정답 보기</span>
        `;
      }
    };

    renderStepContent(false);

    stepDiv.addEventListener('click', () => {
      const currentlyRevealed = stepDiv.dataset.revealed === 'true';
      renderStepContent(!currentlyRevealed);
      playCuteSound('check');

      const allSteps = practiceStepsList.querySelectorAll('.practice-step-item');
      const revealedSteps = practiceStepsList.querySelectorAll('.practice-step-item.revealed');

      if (allSteps.length === revealedSteps.length) {
        revealAllCorrectBtn.textContent = '🙈 정답 다시 가리기';
        showToast(`🌟 정답 확인 완료! [미션 ${item.num} ${item.cardTitle}] 카드 옆의 [미션 성공] 버튼을 눌러보세요!`);
      } else {
        revealAllCorrectBtn.textContent = '👀 정답 모두 보기';
      }
    });

    // 외부(정답 모두 보기 버튼)에서 호출할 수 있도록 함수 저장
    stepDiv._setRevealed = renderStepContent;
    practiceStepsList.appendChild(stepDiv);
  });

  renderItemsGrid();
}

// 스캔 레이저 애니메이션과 함께 AI 물건 인식 실행 -> 바로 물건에 대한 설명 표시 & AI 남성 목소리로 설명 읽기!
function triggerAIRecognitionForItem(index, customTag = '🤖 AI 카메라 스캔 완료') {
  playCuteSound('scan');
  scanLaser.classList.remove('hidden');
  setTimeout(() => {
    scanLaser.classList.add('hidden');
  }, 650);

  // 스캔하면 대기 화면을 숨기고 바로 물건에 대한 설명을 표시
  aiWaitingState.classList.add('hidden');
  aiResultContainer.classList.remove('hidden');

  updateAIExplanationPanel(index, customTag);

  // 분리수거 물건을 클릭(또는 스캔)하면 바로 그 물건에 대한 설명을 AI 남성 목소리로 읽어줌
  speakSection('desc');

  const item = RECYCLING_ITEMS[index];
  showToast(`🤖 삐빅! [미션 ${item.num} ${item.cardTitle}] 물건 설명을 AI 목소리로 읽어줄게요!`);
}

// 다시 시작하기
function resetGame() {
  stopSpeaking();
  completedItemIds.clear();
  currentItemIndex = -1;
  victoryModalOverlay.classList.add('hidden');
  aiResultContainer.classList.add('hidden');
  aiWaitingState.classList.remove('hidden');
  renderItemsGrid();
  showToast('🔄 처음부터 다시 시작해요! 버튼을 클릭해 물건을 스캔해 보세요.');
}

// ============================================================================
// 실시간 AI 카메라 & TensorFlow.js 물건 인식 로직
// ============================================================================
let modelsLoadingPromise = null;

async function loadAIModels() {
  if (cocoModel && mobilenetModel) return;
  if (modelsLoadingPromise) return modelsLoadingPromise;

  modelsLoadingPromise = (async () => {
    try {
      aiStatusBadge.textContent = '🤖 AI 비전 모델 로딩 중...';
      if (window.tf && window.tf.ready) {
        await window.tf.ready();
      }
      const tasks = [];
      if (window.cocoSsd && !cocoModel) {
        tasks.push(
          window.cocoSsd.load({ base: 'lite_mobilenet_v2' }).then((m) => {
            cocoModel = m;
          })
        );
      }
      if (window.mobilenet && !mobilenetModel) {
        tasks.push(
          window.mobilenet.load({ version: 2, alpha: 1.0 }).then((m) => {
            mobilenetModel = m;
          })
        );
      }
      await Promise.allSettled(tasks);
      aiStatusBadge.textContent = '🤖 AI 카메라 준비 완료';
    } catch (err) {
      aiStatusBadge.textContent = '🤖 AI 스마트 인식 모드';
    }
  })();

  return modelsLoadingPromise;
}

function mapPredictionToRecyclingIndex(labelString) {
  const lower = (labelString || '').toLowerCase();

  for (let i = 0; i < RECYCLING_ITEMS.length; i++) {
    const item = RECYCLING_ITEMS[i];
    for (const kw of item.aiKeywords) {
      if (lower.includes(kw.toLowerCase())) {
        return i;
      }
    }
  }

  if (lower.includes('glass') || lower.includes('cup') || lower.includes('plastic')) return 2;
  if (lower.includes('paper') || lower.includes('tissue') || lower.includes('towel')) return 8;
  if (lower.includes('cell phone') || lower.includes('mouse') || lower.includes('electronic')) return 5;
  return -1;
}

async function startWebcam() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    showToast('이 브라우저에서는 카메라를 열 수 없어 사진 불러오기/물건 카드로 체험해요!');
    return;
  }

  // 기존 스트림이 열려 있으면 먼저 정리
  if (webcamStream) {
    webcamStream.getTracks().forEach((track) => track.stop());
    webcamStream = null;
  }

  try {
    // 휴대폰과 PC 모두 기본으로 전면(셀카: 'user') 카메라로 켜지도록 설정
    try {
      webcamStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: currentFacingMode }, width: { ideal: 640 }, height: { ideal: 480 } },
        audio: false
      });
    } catch (firstErr) {
      webcamStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      });
    }

    webcamVideo.srcObject = webcamStream;
    webcamVideo.classList.toggle('rear-cam', currentFacingMode === 'environment');
    await webcamVideo.play().catch(() => {});
    cameraPlaceholder.classList.add('hidden');
    uploadedImagePreview.classList.add('hidden');
    switchCameraBtn.classList.remove('hidden');
    toggleCameraBtn.classList.remove('hidden');
    showToast('📸 셀카(전면) 카메라가 켜졌어요! 물건을 비추고 [지금 물건 인식하기]를 눌러보세요.');
  } catch (err) {
    showToast('카메라 권한이 없거나 연결된 카메라가 없어요. 물건 카드나 사진을 눌러 스캔해 보세요!');
  }
}

async function switchCameraFacing() {
  currentFacingMode = currentFacingMode === 'user' ? 'environment' : 'user';
  await startWebcam();
  const modeLabel = currentFacingMode === 'user' ? '전면(셀카) 카메라' : '후면 카메라';
  showToast(`🔄 ${modeLabel}로 전환했어요!`);
}

function stopWebcam() {
  if (webcamStream) {
    webcamStream.getTracks().forEach((track) => track.stop());
    webcamStream = null;
  }
  cameraPlaceholder.classList.remove('hidden');
  switchCameraBtn.classList.add('hidden');
  toggleCameraBtn.classList.add('hidden');
}

// 비디오나 이미지를 오프스크린 캔버스에 캡처해 WebGL 텍스처 오류 없이 정확히 인식
function createSnapshotCanvas(sourceEl) {
  const canvas = document.createElement('canvas');
  const w = sourceEl.videoWidth || sourceEl.naturalWidth || sourceEl.width || 640;
  const h = sourceEl.videoHeight || sourceEl.naturalHeight || sourceEl.height || 480;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(sourceEl, 0, 0, w, h);
  return canvas;
}

async function recognizeElementWithAI(targetElement) {
  await loadAIModels();

  const snapshot = createSnapshotCanvas(targetElement);
  let matchedIndex = -1;

  // 1차: COCO-SSD 객체 탐지 (임계값 0.20으로 낮추어 작은 물체도 잘 잡히도록 개선)
  if (cocoModel) {
    try {
      const predictions = await cocoModel.detect(snapshot, 10, 0.2);
      const filtered = predictions
        .filter((p) => p.class !== 'person')
        .sort((a, b) => b.score - a.score);

      for (const p of filtered) {
        const idx = mapPredictionToRecyclingIndex(p.class);
        if (idx !== -1) {
          matchedIndex = idx;
          break;
        }
      }
    } catch (e) {
      // 무시
    }
  }

  // 2차: MobileNet 이미지 분류 (상위 5개 예측 클래스 전체 검색)
  if (matchedIndex === -1 && mobilenetModel) {
    try {
      const preds = await mobilenetModel.classify(snapshot, 5);
      for (const p of preds) {
        const idx = mapPredictionToRecyclingIndex(p.className);
        if (idx !== -1) {
          matchedIndex = idx;
          break;
        }
      }
    } catch (e) {
      // 무시
    }
  }

  return matchedIndex;
}

async function handleAIScanButton() {
  const targetElement = !uploadedImagePreview.classList.contains('hidden')
    ? uploadedImagePreview
    : webcamStream && webcamVideo.readyState >= 2
    ? webcamVideo
    : null;

  if (targetElement) {
    aiStatusBadge.textContent = '🔍 AI가 물건 스캔 중...';
    const matchedIndex = await recognizeElementWithAI(targetElement);
    aiStatusBadge.textContent = '🤖 AI 카메라 준비 완료';

    if (matchedIndex !== -1) {
      triggerAIRecognitionForItem(matchedIndex, '📸 AI 카메라 스캔 완료');
      return;
    }
  }

  // 카메라에 특정 물건이 잡히지 않았거나 카메라 없이 스캔 버튼을 누른 경우 순서대로 바로 스캔해서 설명 표시
  const nextIndex = (currentItemIndex + 1) % RECYCLING_ITEMS.length;
  triggerAIRecognitionForItem(nextIndex, '🔍 AI 스마트 스캔 완료');
}

imageUploadInput.addEventListener('change', (e) => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    uploadedImagePreview.src = ev.target.result;
    uploadedImagePreview.classList.remove('hidden');
    cameraPlaceholder.classList.add('hidden');

    uploadedImagePreview.onload = async () => {
      const fileNameLower = file.name.toLowerCase();
      let matchedIndex = mapPredictionToRecyclingIndex(fileNameLower);

      if (matchedIndex === -1) {
        aiStatusBadge.textContent = '🔍 AI 사진 분석 중...';
        matchedIndex = await recognizeElementWithAI(uploadedImagePreview);
        aiStatusBadge.textContent = '🤖 AI 카메라 준비 완료';
      }

      if (matchedIndex === -1) {
        matchedIndex = currentItemIndex >= 0 ? currentItemIndex : 0;
      }

      triggerAIRecognitionForItem(matchedIndex, '🖼️ AI 사진 스캔 완료');
    };
  };
  reader.readAsDataURL(file);
});

// ============================================================================
// 이벤트 리스너 연결 및 초기화
// ============================================================================
startCameraBtn.addEventListener('click', () => {
  currentFacingMode = 'user'; // 처음 카메라를 켤 때는 항상 셀카(전면) 카메라로 시작
  startWebcam();
});
switchCameraBtn.addEventListener('click', switchCameraFacing);
toggleCameraBtn.addEventListener('click', stopWebcam);
aiScanNowBtn.addEventListener('click', handleAIScanButton);

// 3개 파트별 개별 음성 듣기 버튼 연결
speakDescBtn.addEventListener('click', () => speakSection('desc'));
speakWrongBtn.addEventListener('click', () => speakSection('wrong'));
speakCorrectBtn.addEventListener('click', () => {
  // 올바른 실천 듣기를 누르면 가려진 정답도 함께 보여줌
  const allSteps = practiceStepsList.querySelectorAll('.practice-step-item');
  allSteps.forEach((stepDiv) => {
    if (stepDiv._setRevealed) stepDiv._setRevealed(true);
  });
  revealAllCorrectBtn.textContent = '🙈 정답 다시 가리기';
  speakSection('correct');
});

revealAllCorrectBtn.addEventListener('click', () => {
  const allSteps = practiceStepsList.querySelectorAll('.practice-step-item');
  const revealedSteps = practiceStepsList.querySelectorAll('.practice-step-item.revealed');
  const shouldRevealAll = revealedSteps.length < allSteps.length;

  allSteps.forEach((stepDiv) => {
    if (stepDiv._setRevealed) stepDiv._setRevealed(shouldRevealAll);
  });

  playCuteSound('check');
  if (shouldRevealAll) {
    revealAllCorrectBtn.textContent = '🙈 정답 다시 가리기';
    showToast('👀 올바른 실천 방법 정답을 모두 공개했어요!');
  } else {
    revealAllCorrectBtn.textContent = '👀 정답 모두 보기';
    showToast('🙈 정답을 다시 가렸어요! 아이들과 함께 맞춰보세요.');
  }
});

stopVoiceBtn.addEventListener('click', () => {
  stopSpeaking();
  showToast('🔇 AI 목소리를 멈췄어요.');
});

resetGameBtn.addEventListener('click', resetGame);
closeVictoryModalBtn.addEventListener('click', () => {
  victoryModalOverlay.classList.add('hidden');
});
restartFromVictoryBtn.addEventListener('click', resetGame);

window.addEventListener('DOMContentLoaded', () => {
  renderItemsGrid();
  loadAIModels();
});
