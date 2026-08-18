const MOCK_NOW = '2026-02-24T09:00:00.000Z';
const MOCK_USER_IMAGE = '/icons/char_icon.png';

const jobs = [
  { id: 1, name: '프론트엔드 개발자' },
  { id: 2, name: '백엔드 개발자' },
  { id: 3, name: '데이터 분석가' },
  { id: 4, name: '프로덕트 디자이너' },
];

const careerLevels = [
  { id: 1, level: '신입' },
  { id: 2, level: '주니어' },
  { id: 3, level: '미들' },
  { id: 4, level: '시니어' },
];

const skills = [
  { id: 1, name: 'React', display_order: 1 },
  { id: 2, name: 'Next.js', display_order: 2 },
  { id: 3, name: 'TypeScript', display_order: 3 },
  { id: 4, name: 'Spring Boot', display_order: 4 },
  { id: 5, name: 'SQL', display_order: 5 },
];

const currentUser = {
  id: 101,
  email: 'mock.user@re-fit.kr',
  nickname: '목업 사용자',
  user_type: 'SEEKER',
  career_level: careerLevels[1],
  introduction: 'React와 TypeScript로 사용자 경험이 좋은 서비스를 만드는 주니어 개발자입니다.',
  profile_image_url: MOCK_USER_IMAGE,
  created_at: MOCK_NOW,
  updated_at: MOCK_NOW,
  jobs: [jobs[0]],
  skills: skills.slice(0, 3),
};

const experts = [
  {
    user_id: 201,
    nickname: '김리뷰',
    profile_image_url: MOCK_USER_IMAGE,
    introduction:
      '프론트엔드 개발자 채용 과정에서 이력서, 포트폴리오, 과제 리뷰를 함께 진행해왔습니다. 성과 표현과 사용자 문제 해결 경험을 구체화하는 피드백을 제공합니다.',
    career_level: careerLevels[3],
    company_name: 'Refit Labs',
    verified: true,
    verified_at: MOCK_NOW,
    rating_avg: 4.9,
    rating_count: 37,
    jobs: [jobs[0]],
    skills: skills.slice(0, 3),
    last_active_at: MOCK_NOW,
  },
  {
    user_id: 202,
    nickname: '박멘토',
    profile_image_url: MOCK_USER_IMAGE,
    introduction:
      '백엔드와 플랫폼 조직에서 면접관으로 참여했습니다. 시스템 설계 경험, 장애 대응 경험, 협업 방식이 문서에 드러나도록 돕습니다.',
    career_level: careerLevels[3],
    company_name: 'Cloud Works',
    verified: true,
    verified_at: MOCK_NOW,
    rating_avg: 4.7,
    rating_count: 24,
    jobs: [jobs[1]],
    skills: [skills[3], skills[4], skills[2]],
    last_active_at: MOCK_NOW,
  },
];

const resumes = [
  {
    resumeId: 301,
    resume_id: 301,
    title: '프론트엔드 개발자 이력서',
    status: 'READY',
    isFresher: false,
    is_fresher: false,
    educationLevel: '대학교 졸업',
    education_level: '대학교 졸업',
    fileUrl: '/mock/resume-frontend.pdf',
    file_url: '/mock/resume-frontend.pdf',
    contentJson: {
      summary:
        'React, Next.js, TypeScript 기반 웹 서비스를 2년 동안 개발했습니다. 채용 플랫폼의 이력서 관리, 전문가 추천, 실시간 채팅 화면을 담당했고, Core Web Vitals 개선과 컴포넌트 재사용성 향상을 함께 진행했습니다.',
      careers: [
        {
          company: 'Refit Labs',
          position: 'Frontend Engineer',
          start_date: '2024.03',
          end_date: '재직중',
          description:
            'Next.js App Router 기반 사용자 페이지와 BFF 연동 레이어를 구현했습니다. React Query 캐시 정책을 정리해 목록 전환 시 불필요한 재요청을 줄였습니다.',
        },
        {
          company: 'Open Career Bootcamp',
          position: 'Frontend Intern',
          start_date: '2023.07',
          end_date: '2024.02',
          description:
            '디자인 시스템 버튼, 입력 폼, 모달 컴포넌트를 정리하고 접근성 속성을 보강했습니다.',
        },
      ],
      projects: [
        {
          title: '이력서 자동 등록 및 편집 화면',
          start_date: '2025.10',
          end_date: '2026.01',
          description:
            'PDF 업로드 후 파싱 결과를 편집 폼에 자동 반영하는 흐름을 구현했습니다.\n- 업로드 진행 상태와 파싱 완료 상태를 분리\n- 사용자가 수정한 값이 자동 입력으로 덮이지 않도록 보호\n- 모바일 하단 CTA가 키보드와 겹치지 않도록 레이아웃 개선',
        },
        {
          title: '전문가 추천 및 채팅 요청 플로우',
          start_date: '2025.06',
          end_date: '2025.09',
          description:
            '전문가 목록 필터, 상세 페이지, 채팅 요청 생성까지의 사용자 흐름을 구현했습니다.\n- 직무/스킬/경력 필터 적용\n- 추천 점수와 검증 배지를 함께 노출\n- 요청 성공 후 채팅방 진입 경험 개선',
        },
        {
          title: '성능 및 안정성 개선',
          start_date: '2025.02',
          end_date: '2025.05',
          description:
            '이미지 최적화와 API 에러 처리 공통화를 진행했습니다. Lighthouse 기준 주요 페이지 성능 점수를 안정화하고, 네트워크 실패 시 사용자 메시지를 일관되게 보여주도록 정리했습니다.',
        },
      ],
      education: ['한국대학교 컴퓨터공학과 학사 | 2019.03 - 2023.02'],
      awards: ['2025 사내 서비스 개선 해커톤 우수상', '2024 오픈소스 컨트리뷰션 챌린지 참여'],
      certificates: ['정보처리기사', 'SQLD'],
      activities: [
        '프론트엔드 스터디 운영 | React 렌더링 최적화 세션 진행',
        '개발 블로그 운영 | Next.js App Router 전환 기록 작성',
      ],
    },
    content_json: {
      summary:
        'React, Next.js, TypeScript 기반 웹 서비스를 2년 동안 개발했습니다. 채용 플랫폼의 이력서 관리, 전문가 추천, 실시간 채팅 화면을 담당했고, Core Web Vitals 개선과 컴포넌트 재사용성 향상을 함께 진행했습니다.',
      careers: [
        {
          company: 'Refit Labs',
          position: 'Frontend Engineer',
          start_date: '2024.03',
          end_date: '재직중',
          description:
            'Next.js App Router 기반 사용자 페이지와 BFF 연동 레이어를 구현했습니다. React Query 캐시 정책을 정리해 목록 전환 시 불필요한 재요청을 줄였습니다.',
        },
        {
          company: 'Open Career Bootcamp',
          position: 'Frontend Intern',
          start_date: '2023.07',
          end_date: '2024.02',
          description:
            '디자인 시스템 버튼, 입력 폼, 모달 컴포넌트를 정리하고 접근성 속성을 보강했습니다.',
        },
      ],
      projects: [
        {
          title: '이력서 자동 등록 및 편집 화면',
          start_date: '2025.10',
          end_date: '2026.01',
          description:
            'PDF 업로드 후 파싱 결과를 편집 폼에 자동 반영하는 흐름을 구현했습니다.\n- 업로드 진행 상태와 파싱 완료 상태를 분리\n- 사용자가 수정한 값이 자동 입력으로 덮이지 않도록 보호\n- 모바일 하단 CTA가 키보드와 겹치지 않도록 레이아웃 개선',
        },
        {
          title: '전문가 추천 및 채팅 요청 플로우',
          start_date: '2025.06',
          end_date: '2025.09',
          description:
            '전문가 목록 필터, 상세 페이지, 채팅 요청 생성까지의 사용자 흐름을 구현했습니다.\n- 직무/스킬/경력 필터 적용\n- 추천 점수와 검증 배지를 함께 노출\n- 요청 성공 후 채팅방 진입 경험 개선',
        },
        {
          title: '성능 및 안정성 개선',
          start_date: '2025.02',
          end_date: '2025.05',
          description:
            '이미지 최적화와 API 에러 처리 공통화를 진행했습니다. Lighthouse 기준 주요 페이지 성능 점수를 안정화하고, 네트워크 실패 시 사용자 메시지를 일관되게 보여주도록 정리했습니다.',
        },
      ],
      education: ['한국대학교 컴퓨터공학과 학사 | 2019.03 - 2023.02'],
      awards: ['2025 사내 서비스 개선 해커톤 우수상', '2024 오픈소스 컨트리뷰션 챌린지 참여'],
      certificates: ['정보처리기사', 'SQLD'],
      activities: [
        '프론트엔드 스터디 운영 | React 렌더링 최적화 세션 진행',
        '개발 블로그 운영 | Next.js App Router 전환 기록 작성',
      ],
    },
    createdAt: MOCK_NOW,
    created_at: MOCK_NOW,
    updatedAt: MOCK_NOW,
    updated_at: MOCK_NOW,
  },
];

const parsedResumeResult = {
  is_fresher: false,
  education_level: '대학교 졸업',
  content_json: resumes[0].content_json,
  raw_text_excerpt:
    'React, Next.js, TypeScript 기반 웹 서비스 개발 경험. 이력서 자동 등록, 전문가 추천, 실시간 채팅 화면 구현.',
};

const requester = {
  user_id: currentUser.id,
  nickname: currentUser.nickname,
  profile_image_url: currentUser.profile_image_url,
  user_type: currentUser.user_type,
};

const receiver = {
  user_id: experts[0].user_id,
  nickname: experts[0].nickname,
  profile_image_url: experts[0].profile_image_url,
  user_type: 'EXPERT',
};

const chats = [
  {
    chat_id: 401,
    requester,
    receiver,
    last_message: {
      message_id: 501,
      content: '이력서 핵심 성과를 더 구체적으로 정리해보면 좋겠습니다.',
      created_at: MOCK_NOW,
      last_message_at: MOCK_NOW,
      sender: receiver,
    },
    unread_count: 1,
    request_type: 'FEEDBACK',
    status: 'ACTIVE',
    created_at: MOCK_NOW,
    updated_at: MOCK_NOW,
  },
];

const chatMessages = [
  {
    message_id: 500,
    chat_id: 401,
    room_sequence: 1,
    sender: requester,
    message_type: 'TEXT',
    content:
      '안녕하세요. 프론트엔드 개발자 포지션으로 지원하려고 합니다. 이력서에서 프로젝트 설명이 너무 길어 보이는지, 성과가 잘 보이는지 피드백 부탁드립니다.',
    created_at: '2026-02-24T08:10:00.000Z',
  },
  {
    message_id: 501,
    chat_id: 401,
    room_sequence: 2,
    sender: receiver,
    message_type: 'TEXT',
    content:
      '전체 흐름은 좋습니다. 다만 프로젝트마다 맡은 역할, 문제 상황, 해결 방식, 결과 지표가 섞여 있어서 읽는 사람이 핵심을 바로 잡기 어렵습니다.',
    created_at: '2026-02-24T08:13:00.000Z',
  },
  {
    message_id: 502,
    chat_id: 401,
    room_sequence: 3,
    sender: requester,
    message_type: 'TEXT',
    content:
      '정량 지표가 부족한 편인데, 실제로 측정하지 못한 개선 사항은 어떻게 쓰는 게 좋을까요?',
    created_at: '2026-02-24T08:15:00.000Z',
  },
  {
    message_id: 503,
    chat_id: 401,
    room_sequence: 4,
    sender: receiver,
    message_type: 'TEXT',
    content:
      '정확한 수치가 없다면 범위를 과장하지 말고, 확인 가능한 전후 맥락을 쓰세요. 예를 들면 "이미지 로딩 방식을 개선해 첫 화면 체감 지연을 줄였고, Lighthouse 성능 점수를 기준으로 회귀를 확인했다"처럼 검증 방법을 함께 적는 방식이 좋습니다.',
    created_at: '2026-02-24T08:18:00.000Z',
  },
  {
    message_id: 504,
    chat_id: 401,
    room_sequence: 5,
    sender: receiver,
    message_type: 'TEXT',
    content:
      '현재 이력서에서 가장 좋은 소재는 "이력서 자동 등록 및 편집 화면"입니다. 사용자 입력 보호, 파싱 상태 처리, 모바일 CTA 대응은 실제 서비스 문제를 해결한 사례라서 상단에 배치하는 편이 좋겠습니다.',
    created_at: '2026-02-24T08:20:00.000Z',
  },
  {
    message_id: 505,
    chat_id: 401,
    room_sequence: 6,
    sender: requester,
    message_type: 'TEXT',
    content:
      '그럼 프로젝트 설명을 문제-해결-결과 순서로 다시 줄이고, 기술 스택은 별도로 묶어보겠습니다.',
    created_at: '2026-02-24T08:23:00.000Z',
  },
  {
    message_id: 506,
    chat_id: 401,
    room_sequence: 7,
    sender: receiver,
    message_type: 'TEXT',
    content:
      '좋습니다. 마지막으로 지원 공고의 "사용자 경험 개선", "Next.js 운영 경험", "협업 커뮤니케이션" 키워드가 이력서 안에 자연스럽게 드러나도록 문장을 다듬어보세요.',
    created_at: '2026-02-24T08:26:00.000Z',
  },
];

const reports = [
  {
    reportId: 601,
    report_id: 601,
    title: '프론트엔드 이력서 피드백 리포트',
    status: 'COMPLETED',
    chatRoomId: 401,
    chat_room_id: 401,
    chatFeedbackId: 701,
    chat_feedback_id: 701,
    chatRequestId: 801,
    chat_request_id: 801,
    userId: currentUser.id,
    user_id: currentUser.id,
    expertId: experts[0].user_id,
    expert_id: experts[0].user_id,
    resumeId: resumes[0].resumeId,
    resume_id: resumes[0].resumeId,
    jobPostUrl: 'https://example.com/jobs/frontend',
    job_post_url: 'https://example.com/jobs/frontend',
    resultJson: {
      basic_info: {
        report_date: '2026.02.24',
        job_post_title: '프론트엔드 개발자',
        job_post_position: 'Next.js 서비스 개발 및 사용자 경험 개선',
      },
      overall_evaluation: {
        job_fit: '높음',
        pass_probability: '중상',
      },
      capability_matching: {
        matches: [
          {
            requirement: 'React와 Next.js 기반 서비스 개발 경험',
            mentor_assessment: '충족',
            ai_assessment: '충족',
            mentor_reason:
              '이력서 관리, 전문가 추천, 채팅 화면 등 실제 사용자 흐름을 Next.js 기반으로 구현한 경험이 명확합니다.',
            ai_reason:
              '프로젝트 설명에 App Router, React Query, 이미지 최적화 등 공고와 맞는 키워드가 포함되어 있습니다.',
          },
          {
            requirement: '사용자 경험 개선을 위한 문제 해결 능력',
            mentor_assessment: '부분 충족',
            ai_assessment: '부분 충족',
            mentor_reason:
              '모바일 CTA, 업로드 상태, 에러 메시지 개선 경험은 좋지만 사용자 지표나 검증 방식이 더 필요합니다.',
            ai_reason:
              '문제와 해결 방식은 보이나 개선 결과가 정량적으로 충분히 연결되어 있지는 않습니다.',
          },
          {
            requirement: '협업 및 운영 환경에서의 안정성 개선 경험',
            mentor_assessment: '충족',
            ai_assessment: '충족',
            mentor_reason:
              '공통 API 에러 처리, 타입 체크, Lighthouse 검증을 언급한 점이 운영 관점의 기본기를 보여줍니다.',
            ai_reason:
              '검증 도구와 장애 대응 관점의 문장이 포함되어 실무 협업 가능성을 보여줍니다.',
          },
        ],
      },
      strengths_analysis: {
        ai_reason:
          '기술 스택과 프로젝트 맥락이 분명하고, 화면 구현뿐 아니라 데이터 흐름과 상태 관리까지 설명하려는 방향이 좋습니다.',
        common_strengths: ['Next.js 실무 경험', '사용자 흐름 단위의 구현 경험', '타입 기반 안정성 개선'],
        ai_only_strengths: ['React Query 캐시 정책 정리', '모바일 레이아웃 이슈 대응'],
        mentor_only_strengths: ['문제 상황을 제품 관점에서 해석하려는 태도', '피드백 반영 가능성이 높은 문서 구조'],
      },
      improvements_analysis: {
        ai_reason:
          '성과가 "개선했다" 수준에 머물러 있어 전후 비교, 영향 범위, 검증 방법을 보강하면 설득력이 커집니다.',
        common_improvements: ['성과 지표 보강', '프로젝트별 본인 기여도 명확화', '지원 공고 키워드와 연결'],
        ai_only_improvements: ['문장 길이 축약', '중복 기술 키워드 정리'],
        mentor_only_improvements: ['가장 강한 프로젝트를 상단으로 이동', '문제-해결-결과 순서 통일'],
      },
      action_plan: {
        ai_actions: [
          '각 프로젝트 설명을 4줄 이내로 줄이고 첫 문장에 해결한 사용자 문제를 배치합니다.',
          '성과 수치가 없는 항목은 검증 방법, 영향을 받은 화면, 사용자 흐름을 함께 적습니다.',
          '지원 공고의 핵심 키워드 3개를 뽑아 이력서 요약과 프로젝트 설명에 자연스럽게 반영합니다.',
        ],
        mentor_actions: [
          '이력서 자동 등록 프로젝트를 첫 번째 대표 프로젝트로 올립니다.',
          '기술 스택 목록은 프로젝트 설명 안에 반복하지 말고 별도 영역으로 묶습니다.',
          '채팅/리포트 기능은 "상태 전환과 비동기 처리" 관점에서 한 문장 더 보강합니다.',
        ],
      },
      reliability: {
        confidence_score: 86,
        confidence_reason:
          '이력서 본문과 채팅 피드백이 일관되며, 공고 요구사항과 연결 가능한 프로젝트 소재가 충분합니다. 다만 실제 성과 수치가 제한적이라 일부 평가는 중간 신뢰도로 보았습니다.',
        unverifiable_items: ['실제 Lighthouse 점수 변화', '사용자 지표 개선폭', '팀 내 역할 비중'],
      },
      final_comment: {
        ai_comment:
          '문서의 방향은 좋습니다. 이제 핵심 프로젝트의 문제 정의와 결과를 더 선명하게 만드는 것이 우선입니다.',
        mentor_comment:
          '지원자의 강점은 "화면을 예쁘게 만든 경험"보다 "사용자가 막히는 지점을 제품 흐름 안에서 해결한 경험"입니다. 그 관점이 첫 화면에서 보이도록 재배치하세요.',
      },
    },
    result_json: {
      basic_info: {
        report_date: '2026.02.24',
        job_post_title: '프론트엔드 개발자',
        job_post_position: 'Next.js 서비스 개발 및 사용자 경험 개선',
      },
      overall_evaluation: {
        job_fit: '높음',
        pass_probability: '중상',
      },
      capability_matching: {
        matches: [
          {
            requirement: 'React와 Next.js 기반 서비스 개발 경험',
            mentor_assessment: '충족',
            ai_assessment: '충족',
            mentor_reason:
              '이력서 관리, 전문가 추천, 채팅 화면 등 실제 사용자 흐름을 Next.js 기반으로 구현한 경험이 명확합니다.',
            ai_reason:
              '프로젝트 설명에 App Router, React Query, 이미지 최적화 등 공고와 맞는 키워드가 포함되어 있습니다.',
          },
          {
            requirement: '사용자 경험 개선을 위한 문제 해결 능력',
            mentor_assessment: '부분 충족',
            ai_assessment: '부분 충족',
            mentor_reason:
              '모바일 CTA, 업로드 상태, 에러 메시지 개선 경험은 좋지만 사용자 지표나 검증 방식이 더 필요합니다.',
            ai_reason:
              '문제와 해결 방식은 보이나 개선 결과가 정량적으로 충분히 연결되어 있지는 않습니다.',
          },
          {
            requirement: '협업 및 운영 환경에서의 안정성 개선 경험',
            mentor_assessment: '충족',
            ai_assessment: '충족',
            mentor_reason:
              '공통 API 에러 처리, 타입 체크, Lighthouse 검증을 언급한 점이 운영 관점의 기본기를 보여줍니다.',
            ai_reason:
              '검증 도구와 장애 대응 관점의 문장이 포함되어 실무 협업 가능성을 보여줍니다.',
          },
        ],
      },
      strengths_analysis: {
        ai_reason:
          '기술 스택과 프로젝트 맥락이 분명하고, 화면 구현뿐 아니라 데이터 흐름과 상태 관리까지 설명하려는 방향이 좋습니다.',
        common_strengths: ['Next.js 실무 경험', '사용자 흐름 단위의 구현 경험', '타입 기반 안정성 개선'],
        ai_only_strengths: ['React Query 캐시 정책 정리', '모바일 레이아웃 이슈 대응'],
        mentor_only_strengths: ['문제 상황을 제품 관점에서 해석하려는 태도', '피드백 반영 가능성이 높은 문서 구조'],
      },
      improvements_analysis: {
        ai_reason:
          '성과가 "개선했다" 수준에 머물러 있어 전후 비교, 영향 범위, 검증 방법을 보강하면 설득력이 커집니다.',
        common_improvements: ['성과 지표 보강', '프로젝트별 본인 기여도 명확화', '지원 공고 키워드와 연결'],
        ai_only_improvements: ['문장 길이 축약', '중복 기술 키워드 정리'],
        mentor_only_improvements: ['가장 강한 프로젝트를 상단으로 이동', '문제-해결-결과 순서 통일'],
      },
      action_plan: {
        ai_actions: [
          '각 프로젝트 설명을 4줄 이내로 줄이고 첫 문장에 해결한 사용자 문제를 배치합니다.',
          '성과 수치가 없는 항목은 검증 방법, 영향을 받은 화면, 사용자 흐름을 함께 적습니다.',
          '지원 공고의 핵심 키워드 3개를 뽑아 이력서 요약과 프로젝트 설명에 자연스럽게 반영합니다.',
        ],
        mentor_actions: [
          '이력서 자동 등록 프로젝트를 첫 번째 대표 프로젝트로 올립니다.',
          '기술 스택 목록은 프로젝트 설명 안에 반복하지 말고 별도 영역으로 묶습니다.',
          '채팅/리포트 기능은 "상태 전환과 비동기 처리" 관점에서 한 문장 더 보강합니다.',
        ],
      },
      reliability: {
        confidence_score: 86,
        confidence_reason:
          '이력서 본문과 채팅 피드백이 일관되며, 공고 요구사항과 연결 가능한 프로젝트 소재가 충분합니다. 다만 실제 성과 수치가 제한적이라 일부 평가는 중간 신뢰도로 보았습니다.',
        unverifiable_items: ['실제 Lighthouse 점수 변화', '사용자 지표 개선폭', '팀 내 역할 비중'],
      },
      final_comment: {
        ai_comment:
          '문서의 방향은 좋습니다. 이제 핵심 프로젝트의 문제 정의와 결과를 더 선명하게 만드는 것이 우선입니다.',
        mentor_comment:
          '지원자의 강점은 "화면을 예쁘게 만든 경험"보다 "사용자가 막히는 지점을 제품 흐름 안에서 해결한 경험"입니다. 그 관점이 첫 화면에서 보이도록 재배치하세요.',
      },
    },
    createdAt: MOCK_NOW,
    created_at: MOCK_NOW,
    updatedAt: MOCK_NOW,
    updated_at: MOCK_NOW,
  },
];

export const isMockApiEnabled = () => process.env.NEXT_PUBLIC_API_MOCKING !== 'false';

function normalizePath(input: RequestInfo | URL): string {
  const raw =
    typeof input === 'string'
      ? input
      : input instanceof URL
        ? input.toString()
        : 'url' in input
          ? input.url
          : '';

  try {
    const url = new URL(raw, 'http://mock.local');
    return url.pathname;
  } catch {
    return raw.split('?')[0];
  }
}

function normalizeMethod(init?: RequestInit): string {
  return (init?.method ?? 'GET').toUpperCase();
}

function pickById<T extends { user_id?: number; resumeId?: number; reportId?: number }>(
  items: T[],
  id: number,
): T {
  return (
    items.find((item) => item.user_id === id || item.resumeId === id || item.reportId === id) ??
    items[0]
  );
}

export function getMockApiData<T>(input: RequestInfo | URL, init?: RequestInit): T | undefined {
  if (!isMockApiEnabled()) return undefined;

  const path = normalizePath(input);
  const method = normalizeMethod(init);

  if (method === 'DELETE') return {} as T;
  if (path === '/api/v1/jobs') return { jobs } as T;
  if (path === '/api/v1/career-levels') return { career_levels: careerLevels } as T;
  if (path === '/api/v1/skills') return { skills } as T;
  if (path === '/bff/onboarding/metadata') {
    return { jobs, career_levels: careerLevels, skills } as T;
  }
  if (path === '/bff/auth/me') return { authenticated: true } as T;
  if (path === '/api/v1/users' && method === 'GET') {
    return { nickname: '목업사용자', exists: false, available: true } as T;
  }
  if (path === '/bff/users/me' || path === '/api/v1/users/me') {
    return currentUser as T;
  }
  if (path === '/bff/users/me/expert-status' || path === '/api/v1/users/me/expert-status') {
    return { is_expert: false, status: 'NONE' } as T;
  }
  if (path === '/api/v1/experts') {
    return { experts, next_cursor: null, has_more: false } as T;
  }
  if (path.startsWith('/api/v1/experts/') && !path.endsWith('/recommendations')) {
    return pickById(experts, Number(path.split('/').pop())) as T;
  }
  if (path === '/bff/experts/recommendations' || path === '/api/v1/experts/recommendations') {
    return {
      user_id: currentUser.id,
      recommendations: experts.map((expert, index) => ({
        ...expert,
        response_rate: 96 - index * 4,
        skills: expert.skills.map((skill) => skill.name),
        jobs: expert.jobs.map((job) => job.name),
        similarity_score: 0.92 - index * 0.08,
        filter_type: 'mock',
        ground_truth: '목업 추천 데이터',
      })),
      total_count: experts.length,
      evaluation: {},
    } as T;
  }
  if (path === '/bff/resumes' || path === '/api/v1/resumes') {
    if (method === 'POST') return { resumeId: 302, resume_id: 302 } as T;
    return { resumes } as T;
  }
  if (path.startsWith('/bff/resumes/') || path.startsWith('/api/v1/resumes/')) {
    if (path.includes('/title')) return null as T;
    return pickById(resumes, Number(path.split('/').filter(Boolean).at(-1))) as T;
  }
  if (path === '/bff/resumes/tasks' || path === '/api/v2/resumes/tasks') {
    return {
      task_id: 'mock-task-1',
      status: 'COMPLETED',
      result: parsedResumeResult,
      resume_id: resumes[0].resumeId,
    } as T;
  }
  if (path.includes('/resumes/tasks/')) {
    return {
      task_id: 'mock-task-1',
      status: 'COMPLETED',
      result: parsedResumeResult,
      resume_id: resumes[0].resumeId,
    } as T;
  }
  if (path === '/bff/uploads/presigned-url' || path === '/api/v1/uploads/presigned-url') {
    return {
      presignedUrl: '/mock/upload',
      presigned_url: '/mock/upload',
      fileUrl: '/mock/uploaded-file.pdf',
      file_url: '/mock/uploaded-file.pdf',
    } as T;
  }
  if (path === '/bff/chat' || path === '/api/v1/chats') {
    if (method === 'POST') return { chat_id: chats[0].chat_id } as T;
    return { chats, nextCursor: null, hasMore: false } as T;
  }
  if (path === '/bff/chat/requests' || path === '/api/v2/chats/requests') {
    if (method === 'POST') return { chat_request_id: 801 } as T;
    return {
      requests: [
        {
          chat_request_id: 801,
          requester,
          receiver,
          resume_id: resumes[0].resumeId,
          request_type: 'FEEDBACK',
          status: 'PENDING',
          job_post_url: 'https://example.com/jobs/frontend',
          created_at: MOCK_NOW,
          responded_at: null,
        },
      ],
      next_cursor: null,
      has_more: false,
    } as T;
  }
  if (path.match(/^\/(bff\/chat|api\/v1\/chats)\/\d+\/messages$/)) {
    return { messages: chatMessages, nextCursor: null, hasMore: false } as T;
  }
  if (path.match(/^\/(bff\/chat|api\/v1\/chats)\/\d+$/)) {
    return {
      chat_id: chats[0].chat_id,
      requester,
      receiver,
      resume_id: resumes[0].resumeId,
      resume: resumes[0],
      job_post_url: 'https://example.com/jobs/frontend',
      request_type: 'FEEDBACK',
      status: 'ACTIVE',
      created_at: MOCK_NOW,
      closed_at: null,
      has_report: true,
    } as T;
  }
  if (path === '/bff/chat/messages/read' || path.endsWith('/last-read-message')) return null as T;
  if (path === '/bff/job-posts/validate' || path === '/api/v2/job-posts/validate') {
    return {
      crawlable: true,
      source: 'mock',
      http_status: 200,
      title: '프론트엔드 개발자',
      company: 'Mock Company',
      job_post_id: 1001,
    } as T;
  }
  if (path.match(/^\/bff\/chat\/\d+\/feedback$/) || path.match(/^\/api\/v2\/chats\/\d+\/feedback$/)) {
    return {
      reportId: reports[0].reportId,
      report_id: reports[0].reportId,
      chat_feedback_id: 701,
      chat_id: 401,
    } as T;
  }
  if (path === '/bff/reports' || path === '/api/v2/reports') return { reports } as T;
  if (path.startsWith('/bff/reports/') || path.startsWith('/api/v2/reports/')) {
    return pickById(reports, Number(path.split('/').pop())) as T;
  }
  if (path === '/bff/notifications' || path === '/api/v2/notifications') {
    return {
      notifications: [
        {
          notification_id: 901,
          type: 'CHAT_MESSAGE',
          title: '새 메시지',
          content: '목업 전문가가 피드백을 남겼습니다.',
          is_read: false,
          read_at: null,
          created_at: MOCK_NOW,
        },
      ],
      next_cursor: null,
      has_more: false,
      unread_count: 1,
    } as T;
  }
  if (path.includes('/notifications')) return { updated_count: 1, deleted: true } as T;
  if (path.includes('/email-verifications')) {
    return {
      email: 'mock.user@re-fit.kr',
      code: '123456',
      expires_at: '2026-02-24T09:10:00.000Z',
      verified: true,
      success: true,
    } as T;
  }
  if (path.includes('/nickname')) return { available: true } as T;
  if (path === '/bff/auth/kakao/login' || path.includes('/api/v1/auth/oauth/kakao/login')) {
    return {
      status: 'LOGIN_SUCCESS',
      login_success: {
        user_id: currentUser.id,
        user_type: currentUser.user_type,
        access_token: 'mock-access-token',
        refresh_token: 'mock-refresh-token',
      },
      signup_required: null,
      restore_required: null,
    } as T;
  }
  if (path.includes('/auth/logout') || path.includes('/auth/restore') || path.includes('/auth/signup')) {
    return {} as T;
  }

  return undefined;
}

export function createMockApiResponse(input: RequestInfo | URL, init?: RequestInit): Response | undefined {
  const data = getMockApiData<unknown>(input, init);
  if (data === undefined) return undefined;

  return Response.json({
    code: normalizeMethod(init) === 'POST' ? 'CREATED' : 'OK',
    message: 'OK',
    data,
  });
}
