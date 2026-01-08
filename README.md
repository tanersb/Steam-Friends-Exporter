# Steam Friends Exporter 🎮

![Version](https://img.shields.io/badge/version-1.2.3-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Platform](https://img.shields.io/badge/platform-Tampermonkey-orange?style=flat-square)

A powerful Userscript to export your Steam friends list to a **CSV file**. It captures detailed information about every friend, including their current status, last online time, and profile links, without requiring a Steam API Key.

---

## 🚀 Features

* **No API Key Needed:** Works directly by scraping the DOM of your friends page.
* **Detailed Data Export:** Captures the following fields for each friend:
    * `AccountID` (Owner's ID)
    * `SteamID` (Friend's 64-bit ID)
    * `Name`
    * `AvatarURL`
    * `LastOnline`
    * `Status` (In-Game, Online, Offline, etc.)
    * `ProfileLink`
    * `MiniProfile` ID
* **Smart Sorting:** Automatically sorts the list by `SteamID` (ascending).
* **Dynamic Filename:** Generates a descriptive filename including the owner's ID, total friend count, and today's date.
    * *Example:* `steam_friends_tanersb_150_09_01_2026.csv`
* **One-Click Action:** Adds a floating "EXPORT FRIENDS CSV" button to the Steam interface.

---

## 📥 Installation

1.  **Install a Userscript Manager:**
    * [Tampermonkey](https://www.tampermonkey.net/) (Recommended)
    * Violentmonkey
2.  **Install the Script:**
    * [**Click Here to Install**](https://github.com/tanersb/Steam-Friends-Exporter/raw/refs/heads/main/steam-friends-export.user.js)
    * *Or manually copy the script content into a new script file.*
3.  **Usage:**
    * Go to your (or anyone's) **Steam Friends** page (e.g., `https://steamcommunity.com/id/yourid/friends/`).
    * **Scroll down** to the bottom of the page to ensure all friends are loaded (Steam uses lazy loading).
    * Click the **"EXPORT FRIENDS CSV"** button located at the bottom right corner.

---

## 📊 CSV Output Example

The exported CSV will be formatted as follows:

| AccountID | SteamID | Name | LastOnline | Status | ProfileLink | ... |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| tanersb | 76561198... | PlayerOne | Last Online 2 hrs ago | Online | https://steam... | ... |
| tanersb | 76561198... | PlayerTwo | Last Online 5 days ago | In-Game | https://steam... | ... |

---

## ⚙️ Compatibility

* Works on Chrome, Edge, Firefox, and Opera via Tampermonkey.
* Compatible with both `/id/custom-url/` and `/profiles/765.../` URL structures.

---

## 📝 License

Distributed under the MIT License.

---
*Developed by **TanerSB***
