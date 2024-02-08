import React from "react";

const Footer = () => {
  return (
    <footer className=" py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4  container mx-auto text-[14px] text-gray-400 px-20">
        <ul className="flex flex-col gap-2">
          <li>
            <a className="underline" href="">
              SSS
            </a>
          </li>
          <li>
            <a className="underline" href="">
              Yatırımcı İlişkileri
            </a>
          </li>
          <li>
            <a className="underline" href="">
              Kullanım Koşulları
            </a>
          </li>
          <li>
            <a className="underline" href="">
              Bize Ulaşın
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <a className="underline" href="">
              Yardım Merkezi
            </a>
          </li>
          <li>
            <a className="underline" href="">
              İş İmkanları
            </a>
          </li>
          <li>
            <a className="underline" href="">
              Gizlilik
            </a>
          </li>
          <li>
            <a className="underline" href="">
              Hız Testi
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <a className="underline" href="">
              Hesap
            </a>
          </li>
          <li>
            <a className="underline" href="">
              Hediye Kartı Kullan
            </a>
          </li>
          <li>
            <a className="underline" href="">
              Çerez Tercihleri
            </a>
          </li>
          <li>
            <a className="underline" href="">
              Yasal Hükümler
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <a className="underline" href="">
              Medya Merkezi
            </a>
          </li>
          <li>
            <a className="underline" href="">
              İzleme Yolları
            </a>
          </li>
          <li>
            <a className="underline" href="">
              Kurumsal Bilgiler
            </a>
          </li>
          <li>
            <a className="underline" href="">
              Sadece Netflix'te
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
