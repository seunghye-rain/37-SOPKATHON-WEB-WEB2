import FlipCard from '@/shared/components/flip-card/flip-card';
import Symbol from '@/shared/assets/images/img-symbol.png';
import MatchingProfile from '@/shared/assets/images/img-matching-profile.png';
import * as s from './matching-complete.css';
import { useState } from 'react';
import Button from '@/shared/components/button/button';
import { buttonStyle } from '@/shared/components/button/button.css';
import LabelLang from '@/shared/components/label-lang/label-lang';

const MatchingComplete = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(true);
  };

  return (
    <div>
      <p>다음 정보를 확인 후 상대를 만나세요!</p>
      <div className={s.cardContainer}>
        <FlipCard isFlipped={isFlipped}>
          <FlipCard.Front>
            <div className={s.infoContainer}>
              <img
                src={MatchingProfile}
                alt='매칭 프로필 이미지'
                className={s.profileImage}
              />

              <div className={s.basicInfo}>
                <div className={s.basicContainer}>
                  <LabelLang color='default'>상대 언어</LabelLang>
                  <div className={s.basicFont}>nativeLanguage</div>
                </div>
                <div className={s.basicContainer}>
                  <LabelLang color='default'>회사원</LabelLang>
                  <div className={s.basicFont}>회사원</div>
                </div>
              </div>

              <div className={s.detailContainer}>
                <div className={s.InfoContainer}>
                  <p className={s.infoFont}>시간</p>
                  <div className={s.divider}></div>
                  <p className={s.detailFont}>startAt</p>
                </div>
                <div className={s.InfoContainer}>
                  <p className={s.infoFont}>장소</p>
                  <div className={s.divider}></div>
                  <p className={s.detailFont}>location</p>
                </div>
                <div className={s.InfoContainer}>
                  <p className={s.infoFont}>뱃지</p>
                  <div className={s.divider}></div>
                  <LabelLang color='primary'>매너왕</LabelLang>
                </div>
              </div>
            </div>
          </FlipCard.Front>

          <FlipCard.Back>
            <img src={Symbol} alt='심볼 이미지' className={s.symbolImage} />
          </FlipCard.Back>
        </FlipCard>
      </div>
      <Button size='large' onClick={handleFlip}>
        큰 선택 버튼
      </Button>
    </div>
  );
};

export default MatchingComplete;
