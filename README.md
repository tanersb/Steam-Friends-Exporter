<div align="center">

# 🎮 💎 Steam Friends Exporter 💎 🎮

![Version](https://img.shields.io/badge/version-1.2.3-blue?style=for-the-badge)
![Platform](https://img.shields.io/badge/platform-Tampermonkey-orange?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

**✨ Arkadaş listenizi tek tıkla yapılandırılmış bir CSV dosyasına aktarmanızı sağlayan güçlü bir araç! ✨**
*API Anahtarı gerekmeden durum, son görülme ve profil bağlantıları gibi detayları yakalayın.* 🔍

<p align="center">
  <a href="#-features">🚀 Özellikler</a> •
  <a href="#-installation">📥 Kurulum</a> •
  <a href="#-how-to-use">⚙️ Kullanım</a> •
  <a href="#-browser-console-method-f12">💻 Konsol Yöntemi</a> •
  <a href="#-csv-output-example">📊 Örnek Çıktı</a>
</p>

</div>

---

## 🚀 Özellikler (Features)

| Özellik | Açıklama |
| :--- | :--- |
| **🔑 API Key Gerekmez** | Doğrudan sayfa üzerinden çalışır, karmaşık kurulumlarla uğraştırmaz. |
| **📄 Detaylı Dışa Aktarma** | `SteamID`, `İsim`, `Avatar`, `Durum`, `Son Görülme` ve daha fazlasını toplar. |
| **🧠 Akıllı Sıralama** | Listeyi otomatik olarak `SteamID` değerine göre sıralar. |
| **📂 Dinamik Dosya Adı** | `steam_friends_kullaniciadi_tarih.csv` şeklinde otomatik isimlendirme yapar. |
| **🖱️ Tek Tıkla İşlem** | Steam arayüzüne şık bir **"CSV AKTAR"** butonu ekler. |

---

## 📥 Kurulum (Installation)

1️⃣ **Yöneticiyi Yükle:** **[Tampermonkey](https://www.tampermonkey.net/)** (Önerilen) kurun. 🛠️
2️⃣ **Script'i Yükle:** **[Buraya Tıklayarak Yükle](https://github.com/tanersb/Steam-Friends-Exporter/raw/refs/heads/main/steam-friends-export.user.js)**. 🔗
3️⃣ **Hazır!** Arkadaş listesi sayfasına girdiğinizde buton sağ altta görünecektir. ✅

---

## 💻 Tarayıcı Konsolu Yöntemi (F12) ⚡

Eklenti kullanmak istemiyorsanız, kodu her seferinde manuel olarak çalıştırabilirsiniz:

1️⃣ Arkadaş listesi sayfanıza gidin. 🌐
2️⃣ **F12** tuşuna basarak Geliştirici Araçlarını açın. 🛠️
3️⃣ **Console** sekmesine tıklayın. 🖥️
4️⃣ Aşağıdaki kodu kopyalayıp yapıştırın ve **Enter**'a basın: ⌨️

```javascript
(function(){'use strict';function esc(v){return`"${String(v).replace(/"/g,'""')}"`}function exportCSV(){const o=(()=>{const l=document.querySelector('.friends_header_name a');return l?{name:l.textContent.trim(),id:(l.href.match(/profiles\/(7656\d+)/)||[0,"unknown_id"])[1]}:{name:"Unknown",id:"unknown_id"}})();const f=[...document.querySelectorAll('.friend_block_v2[data-steamid]')].map(c=>({id:c.dataset.steamid,n:c.querySelector('.friend_block_content')?.childNodes[0].textContent.trim()||'',a:c.querySelector('.player_avatar img')?.src||'',l:c.querySelector('.friend_last_online_text')?.textContent.trim()||'',s:c.querySelector('.state_block')?.textContent.trim()||'',p:c.querySelector('.selectable_overlay')?.href||'',m:c.dataset.miniprofile||''})).sort((a,b)=>BigInt(a.id)>BigInt(b.id)?1:-1);if(!f.length)return alert("Liste bulunamadı!");let csv="AccountID,SteamID,Name,AvatarURL,LastOnline,Status,ProfileLink,MiniProfile\n";f.forEach(x=>{csv+=[o.id,x.id,esc(x.n),esc(x.a),esc(x.l),esc(x.s),esc(x.p),x.m].join(",")+"\n"});const d=new Date(),ds=`${d.getDate()}_${d.getMonth()+1}_${d.getFullYear()}`,b=new Blob([csv],{type:"text/csv;charset=utf-8;"}),a=document.createElement("a");a.href=URL.createObjectURL(b);a.download=`steam_friends_${o.name}_${f.length}_${ds}.csv`;a.click()}const p=document.createElement("div");p.style="position:fixed;bottom:20px;right:20px;z-index:9999;background:#111;padding:12px;border-radius:10px;border:1px solid #66c0f4";const b=document.createElement("button");b.textContent="CSV AKTAR ";b.style="background:#1b2838;color:#fff;cursor:pointer;padding:8px";b.onclick=exportCSV;p.appendChild(b);document.body.appendChild(p);})();
```



---

## ⚙️ Nasıl Kullanılır? (How to Use)

> **⚠️ ÖNEMLİ:** Steam arkadaşları siz aşağı kaydırdıkça yükler.
 
1️⃣ **📜 AŞAĞI KAYDIR:** Sayfanın **en altına kadar kaydırın** ki tüm arkadaşlarınız yüklensin. 🖱️
2️⃣ **Dışa Aktar:** Sağ alt köşede beliren **"CSV AKTAR"** butonuna basın. 📥
3️⃣ **Kaydet:** İndirilen dosyayı Excel veya Google Sheets ile açın. 📁

---

## 📊 Örnek CSV Çıktısı

| AccountID | SteamID | Name | LastOnline | Status |
| :--- | :--- | :--- | :--- | :--- |
| tanersb | 76561198... | PlayerOne | 2 saat önce | Online |
| tanersb | 76561198... | PlayerTwo | 5 gün önce | Offline |

---

## 🛠 Uyumluluk (Compatibility)

* **Tarayıcılar:** Chrome, Edge, Firefox, Opera, Brave. ✅
* **Sayfa Türleri:** Custom URL (`/id/`) ve Profile ID (`/profiles/`) desteklenir. ✅

---

<div align="center">

**Developed by [@tanersb](https://github.com/tanersb)** 💻
*Distributed under the MIT License* 📜

</div>
