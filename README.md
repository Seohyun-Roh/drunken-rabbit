# 프로젝트 기획서

**20팀 프로젝트 : Drunken Rabbit**                         

Drink Easy, Drunken Rabbit!

와인 초보자들을 위한 와인 검색 및 정보 전달 서비스입니다.

## 목차                                               

1. 프로젝트 소개 및 사용 소스
2. 프로젝트의 목표
3. 프로젝트 기능 설명
4. 기능 구현 및 서비스를 위한 데이터 분석법
5. 프로젝트 구상도
6. 프로젝트 팀원 별 역할
7. Q&A

## 프로젝트 소개 및 사용 소스                         

**프로젝트 소개**

와인을 잘 모르는 사람들에게 와인 진입 장벽을 낮추는 서비스.

더불어, 세계 여러 나라의 와인의 특징과 자신이 고른 와인과 비슷한 와인 추천, 

특정 와인과 잘 어울리는 안주 고르기 등 다양한 와인 경험에 관련된 서비스를 제공한다.

**서비스 내 사용 데이터**

1. Wine Reviews(<https://www.kaggle.com/datasets/zynicide/wine-reviews>)

- 11만개 이상 와인 종에 대한 review가 모아져 있는 데이터.

- 점수를 기준으로 모수를 줄일 수 있음

1. Wine Recommender
- Wine 선택지의 다양함(선택의 어려움)을 보여주기 위한 dataset
- A) 생산국의 다양성 B) 가격의 군집화를 하나의 데이터셋으로 시각화 가능
1. Alcohol consumption per capita
- 해가 갈수록 커지는 주류시장을 시각화하기 위해 사용한 dataset
1. 그 외 데이터셋
- Selenium을 활용해 크롤링한 wine image url 데이터셋
- Word2vec을 활용하여 만든 유사 와인 데이터셋(Wine Review와 결합)

**기술 스택**

1. Front-End
- HTML, CSS, JS, React
1. Back-End
- JS, NodeJS, MongoDB
1. Data Analysis
- Python, Jupyter, Google Cloud Platform

**활용 라이브러리**

- Mui
- Numpy
- Pandas
- wordCloud
- Seleinum
- Word2vec
- Chart.js
- worldMap.js
- genism

## 프로젝트의 개요 및 목표                                  
 
**프로젝트 개요**

2022년 현재, 코로나라는 긴 터널의 끝이 보임과 동시에 다시 주류 문화 및 음료/주류 시장의 팽창이 기대됩니다. 그 중에서도 와인은 전 세계인의 기호식품으로서, 한국에서도 그 입지가 날로 커져가고 좋은 와인을 찾는 애주가, 또 와인의 세계에 빠져보고 싶은 초보자들 역시 꾸준히 증가하고 있습니다. 하지만 와인이라는 술의 진입장벽 또한 높은 것이 사실입니다. 저희 20팀은 이 와인이라는 술에서 서비스의 가능성을 엿보고 과연 소비자들이 원하는, 수요가 있는 서비스를 어떻게 하면 이 와인이라는 전 세계적인 기호식품의 특성을 잘 반영하여 만들어볼 수 있을까 하는 물음에서 출발하여 서비스 개발에 착수하였습니다.

**프로젝트의 목적**

20팀의 Drunken Rabbit의 목적은 와인의 기존 customer, 혹은 potential customer로 하여금 저희 서비스를 이용하여 자신의 취향에 맞는 와인을 찾고, 또 자신의 취향과 비슷한 다른 와인들을 추천해주며 내가 어떤 스타일의 와인을 좋아하는지를 발견하게 해주는 것입니다. 또한 세계 각국별 와인의 특징, 그 와인과 잘 어울리는 안주 추천 등 와인 관련 종합 컨텐츠를 제공합니다. ‘나 와인 좀 안다!’라는 말이 나오도록 만들어 드리는 것이 저희 서비스의 목적입니다.

## 프로젝트의 기능 설명                                     

**메인 기능**




