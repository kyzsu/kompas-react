import React from "react";
import "./index.css";

const FooterLogoAchieve = () => {
  return (
    <div className="logo__achieve">
      <div className="logo__achieve__subtitle">Penghargaan dan sertifikat:</div>
      <div className="logo__achieve__item">
        <a href="#" className="logo__achieve__link">
          <div className="logo__achieve__img">
            <img
              src="https://asset.kompas.com/data/2017/wp/images/logo-wowbrands-2019.png"
              alt="WOW Brand Indonesia 2019"
              title="WOW Brand Indonesia 2019"
            />
          </div>
        </a>
      </div>
      <div className="logo__achieve__item">
        <a
          href="https://money.kompas.com/read/2019/08/01/124215826/kompascom-kembali-jadi-pemenang-kategori-media-online-tepercaya"
          className="logo__achieve__link"
        >
          <div className="logo__achieve__img">
            <img
              src="https://asset.kompas.com/data/2017/wp/images/logo-superbrands-2019.png"
              alt="Superbrand Indonesia 2019 - Trusted Online News"
              title="Superbrands Indonesia 2019"
            />
          </div>
        </a>
      </div>
      <div className="logo__achieve__item">
        <a
          href="https://nasional.kompas.com/read/2018/10/17/08133311/kompascom-tersertifikasi-dalam-jaringan-internasional-penguji-informasi"
          className="logo__achieve__link"
        >
          <div className="logo__achieve__img">
            <img
              src="https://asset.kompas.com/data/2017/wp/images/logo-ifcn-small.png"
              alt="International Fact-Checking Network"
              title="International Fact-Checking Network"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default FooterLogoAchieve;
