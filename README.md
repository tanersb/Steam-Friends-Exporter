<div align="center">

# 🎮 Steam Friends Exporter

![Version](https://img.shields.io/badge/version-1.2.3-blue?style=for-the-badge)
![Platform](https://img.shields.io/badge/platform-Tampermonkey-orange?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

**A powerful Userscript to export your Steam friends list to a structured CSV file.**
*Capture detailed info like status, last online time, and profile links without an API Key.*

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-how-to-use">How To Use</a> •
  <a href="#-csv-example">CSV Output</a>
</p>

</div>

---

## 🚀 Features

| Feature | Description |
| :--- | :--- |
| **🔑 No API Key Needed** | Works directly by scraping the DOM. No complex setup required. |
| **📄 Detailed Export** | Captures `SteamID`, `Name`, `AvatarURL`, `Status`, `LastOnline`, and more. |
| **🧠 Smart Sorting** | Automatically sorts the exported list by `SteamID` (ascending). |
| **📂 Dynamic Filename** | Generates descriptive filenames: `steam_friends_tanersb_150_09_01_2026.csv` |
| **🖱️ One-Click Action** | Adds a floating **"EXPORT FRIENDS CSV"** button to the Steam interface. |

---

## 📥 Installation

1.  **Install Manager:** Install **[Tampermonkey](https://www.tampermonkey.net/)** (Recommended) or Violentmonkey.
2.  **Install Script:** **[Click Here to Install the Script](https://github.com/tanersb/Steam-Friends-Exporter/raw/refs/heads/main/steam-friends-export.user.js)**.
3.  **Ready:** Go to any Steam Friends page to see it in action.

---

## ⚙️ How to Use

> **⚠️ IMPORTANT:** Steam uses **Lazy Loading** (infinite scroll). Please read step 2 carefully.

1.  **Navigate:** Go to your (or anyone's) Steam Friends page.
    * *Example:* `https://steamcommunity.com/id/yourid/friends/`
2.  **📜 SCROLL DOWN:** **You must scroll to the very bottom of the page** until all friends are loaded. The script can only export what is visible on the page.
3.  **Export:** Click the **"EXPORT FRIENDS CSV"** button located at the bottom right corner.
4.  **Save:** The CSV file will download automatically.

---

## 📊 CSV Output Example

The exported data is structured for easy analysis in Excel or Google Sheets:

| AccountID | SteamID | Name | LastOnline | Status | ProfileLink |
| :--- | :--- | :--- | :--- | :--- | :--- |
| tanersb | 76561198... | PlayerOne | Last Online 2 hrs ago | Online | https://steam... |
| tanersb | 76561198... | PlayerTwo | Last Online 5 days ago | In-Game | https://steam... |
| tanersb | 76561198... | PlayerThree | Last Online 100 days ago | Offline | https://steam... |

---

## 🛠 Compatibility

* **Browsers:** Chrome, Edge, Firefox, Opera, Brave.
* **URL Types:** Supports both Custom URLs (`/id/custom-url/`) and Profile IDs (`/profiles/765.../`).

---

<div align="center">

**Developed by [@tanersb](https://github.com/tanersb)**
*Distributed under the MIT License*

</div>
