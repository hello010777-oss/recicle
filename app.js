// ============================================================================
// 삐뽀삐뽀! 열매6반 지구지킴이 탐험대 (app.js)
// AI 카메라/보이스 없이 한눈에 미션 + 쓰레기 괴물 + 올바른 분리수거 방법이 보이는 버전
// ============================================================================

const RECYCLING_ITEMS = [
  {
    id: 'pet-bottle',
    num: 1,
    cardTitle: '페트병',
    emoji: '🍼',
    categoryLabel: '투명 페트병 (PET)',
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
    emoji: '🥛',
    categoryLabel: '종이팩 / 우유갑',
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
    emoji: '🥡',
    categoryLabel: '플라스틱 배달·음식 용기',
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
    emoji: '🥫',
    categoryLabel: '알루미늄·철 캔',
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
    emoji: '📦',
    categoryLabel: '택배 종이 박스',
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
    emoji: '🔋',
    categoryLabel: '다 쓴 폐건전지',
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
    emoji: '💊',
    categoryLabel: '먹다 남은 폐의약품(약)',
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
    emoji: '✂️',
    categoryLabel: '깨진 유리·가위·칼 등 날카로운 물건',
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
    emoji: '🧻',
    categoryLabel: '오염된 종이·영수증·휴지',
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

// 상태 변수 (처음부터 미션 1이 한눈에 보이도록 0으로 시작)
let currentItemIndex = 0;
let completedItemIds = new Set();

// DOM 요소 참조
const itemsGrid = document.getElementById('itemsGrid');
const completedCountText = document.getElementById('completedCountText');
const selectedMissionBadge = document.getElementById('selectedMissionBadge');
const panelMainTitle = document.getElementById('panelMainTitle');
const currentMissionSuccessBtn = document.getElementById('currentMissionSuccessBtn');

const objectIconBubble = document.getElementById('objectIconBubble');
const objectCategoryTag = document.getElementById('objectCategoryTag');
const objectTitle = document.getElementById('objectTitle');
const objectDescription = document.getElementById('objectDescription');
const wrongMethodList = document.getElementById('wrongMethodList');
const monsterWrongQuote = document.getElementById('monsterWrongQuote');
const practiceStepsList = document.getElementById('practiceStepsList');

const revealAllCorrectBtn = document.getElementById('revealAllCorrectBtn');
const resetGameBtn = document.getElementById('resetGameBtn');

const toastMessage = document.getElementById('toastMessage');
const victoryModalOverlay = document.getElementById('victoryModalOverlay');
const closeVictoryModalBtn = document.getElementById('closeVictoryModalBtn');
const restartFromVictoryBtn = document.getElementById('restartFromVictoryBtn');

// ============================================================================
// 효과음 생성기 (Web Audio API - 단일 AudioContext 재사용)
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

    if (type === 'select') {
      [523.25, 659.25].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
        gain.gain.setValueAtTime(0.1, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.08);
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
// 9가지 분리수거 미션 성공 체크 및 전체 완료 확인
// ============================================================================
function checkAllMissionsCompleted() {
  if (completedItemIds.size === RECYCLING_ITEMS.length) {
    playCuteSound('victory');
    victoryModalOverlay.classList.remove('hidden');
  }
}

function toggleMissionComplete(index) {
  const item = RECYCLING_ITEMS[index];
  if (completedItemIds.has(item.id)) {
    completedItemIds.delete(item.id);
    renderItemsGrid();
    updateCurrentMissionSuccessBtn();
    showToast(`미션 ${item.num} [${item.cardTitle}] 성공 표시를 취소했어요.`);
  } else {
    completedItemIds.add(item.id);
    playCuteSound('check');
    renderItemsGrid();
    updateCurrentMissionSuccessBtn();
    showToast(
      `🎉 미션 ${item.num} [${item.cardTitle}] 미션 성공! (${completedItemIds.size} / ${RECYCLING_ITEMS.length})`
    );
    checkAllMissionsCompleted();
  }
}

function updateCurrentMissionSuccessBtn() {
  const item = RECYCLING_ITEMS[currentItemIndex];
  const isCompleted = completedItemIds.has(item.id);
  currentMissionSuccessBtn.classList.toggle('done', isCompleted);
  currentMissionSuccessBtn.textContent = isCompleted
    ? `✅ 미션 ${item.num} 성공 완료!`
    : `⭕ 미션 ${item.num} 성공 체크하기!`;
}

// ============================================================================
// 왼쪽: 큼직한 9가지 분리수거 미션 카드 & 큰 성공 버튼 렌더링
// ============================================================================
function renderItemsGrid() {
  itemsGrid.innerHTML = '';
  RECYCLING_ITEMS.forEach((item, index) => {
    const isCompleted = completedItemIds.has(item.id);
    const cardDiv = document.createElement('div');
    cardDiv.className = `item-chip-card ${index === currentItemIndex ? 'active' : ''} ${
      isCompleted ? 'completed' : ''
    }`;
    cardDiv.dataset.index = index;

    // 상단: 물건 아이콘 + 미션 번호 + 제목 클릭 영역
    const mainBtn = document.createElement('button');
    mainBtn.type = 'button';
    mainBtn.className = 'chip-main-area';
    mainBtn.innerHTML = `
      <span class="chip-num">미션 ${item.num}</span>
      <span class="chip-emoji">${item.emoji}</span>
      <span class="chip-label">${item.cardTitle}</span>
    `;
    mainBtn.addEventListener('click', () => {
      playCuteSound('select');
      updateMissionDetailPanel(index);
    });

    // 하단: 크게 키운 [미션 성공] 버튼
    const successBtn = document.createElement('button');
    successBtn.type = 'button';
    successBtn.className = `mini-success-btn ${isCompleted ? 'done' : ''}`;
    successBtn.textContent = isCompleted ? '✅ 미션 성공!' : '⭕ 미션 성공';
    successBtn.title = `미션 ${item.num} ${item.cardTitle} 성공 체크`;
    successBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMissionComplete(index);
    });

    cardDiv.appendChild(mainBtn);
    cardDiv.appendChild(successBtn);
    itemsGrid.appendChild(cardDiv);
  });

  completedCountText.textContent = `🏆 미션 성공: ${completedItemIds.size} / ${RECYCLING_ITEMS.length}`;
}

// ============================================================================
// 오른쪽: 선택한 미션 설명 + 쓰레기 괴물 + 올바른 분리수거 방법 한눈에 업데이트
// ============================================================================
function updateMissionDetailPanel(index) {
  currentItemIndex = index;
  const item = RECYCLING_ITEMS[index];

  selectedMissionBadge.textContent = `미션 ${item.num}`;
  panelMainTitle.textContent = `${item.emoji} 미션 ${item.num} ${item.cardTitle}`;

  objectIconBubble.textContent = item.emoji;
  objectCategoryTag.textContent = item.categoryLabel;
  objectTitle.textContent = `미션 ${item.num} ${item.cardTitle}`;
  objectDescription.innerHTML = item.description;

  // 쓰레기 괴물이 추천하는 배출방법 렌더링
  wrongMethodList.innerHTML = '';
  item.wrongMethods.forEach((wrongText) => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="wrong-badge-x">괴물의 추천 ❌</span><span>${wrongText}</span>`;
    wrongMethodList.appendChild(li);
  });

  monsterWrongQuote.textContent = item.monsterQuote;

  // 아이들이 맞출 수 있게 정답을 가려두었다가 클릭하면 보여지는 올바른 분리수거 방법 렌더링
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
            <span class="step-text-content">올바른 분리수거 방법 ${stepIdx + 1}번째 정답은 무엇일까요?</span>
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
        showToast(`🌟 정답 확인 완료! [미션 성공] 버튼을 눌러 미션을 완료해 보세요!`);
      } else {
        revealAllCorrectBtn.textContent = '👀 정답 모두 보기';
      }
    });

    stepDiv._setRevealed = renderStepContent;
    practiceStepsList.appendChild(stepDiv);
  });

  updateCurrentMissionSuccessBtn();
  renderItemsGrid();
}

// 다시 시작하기
function resetGame() {
  completedItemIds.clear();
  victoryModalOverlay.classList.add('hidden');
  updateMissionDetailPanel(0);
  showToast('🔄 처음부터 다시 시작해요!');
}

// ============================================================================
// 이벤트 리스너 연결 및 초기화
// ============================================================================
currentMissionSuccessBtn.addEventListener('click', () => {
  toggleMissionComplete(currentItemIndex);
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
    showToast('👀 올바른 분리수거 방법 정답을 모두 공개했어요!');
  } else {
    revealAllCorrectBtn.textContent = '👀 정답 모두 보기';
    showToast('🙈 정답을 다시 가렸어요! 아이들과 함께 맞춰보세요.');
  }
});

resetGameBtn.addEventListener('click', resetGame);
closeVictoryModalBtn.addEventListener('click', () => {
  victoryModalOverlay.classList.add('hidden');
});
restartFromVictoryBtn.addEventListener('click', resetGame);

window.addEventListener('DOMContentLoaded', () => {
  updateMissionDetailPanel(0);
});
