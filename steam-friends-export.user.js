// ==UserScript==
// @name         Steam Friends Exporter
// @namespace    https://github.com/tanersb/Steam-Friends-Exporter
// @version      1.2.3
// @description  Export Steam friends list to CSV with account owner info.
// @author       Taner Şahin
// @match        https://steamcommunity.com/*/friends*
// @updateURL    https://github.com/tanersb/Steam-Friends-Exporter/raw/refs/heads/main/steam-friends-export.user.js
// @downloadURL  https://github.com/tanersb/Steam-Friends-Exporter/raw/refs/heads/main/steam-friends-export.user.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function getAccountId() {
        const id = location.pathname.match(/^\/id\/([^\/]+)\//);
        if (id) return id[1];
        const prof = location.pathname.match(/^\/profiles\/([^\/]+)\//);
        if (prof) return prof[1];
        return "unknown";
    }

    function esc(v) {
        return `"${String(v).replace(/"/g, '""')}"`;
    }

    function collectFriends() {
        return [...document.querySelectorAll('.friend_block_v2[data-steamid]')].map(card => {
            const steamid = card.dataset.steamid || '';
            const nameNode = card.querySelector('.friend_block_content');
            const name = nameNode ? nameNode.childNodes[0].textContent.trim() : '';
            const avatarNode = card.querySelector('.player_avatar img');
            const avatarUrl = avatarNode ? avatarNode.src : '';
            const lastOnlineNode = card.querySelector('.friend_last_online_text');
            const lastOnline = lastOnlineNode ? lastOnlineNode.textContent.trim() : '';
            const statusNode = card.querySelector('.state_block');
            const status = statusNode ? statusNode.textContent.trim() : '';
            const profileLinkNode = card.querySelector('.selectable_overlay');
            const profileLink = profileLinkNode ? profileLinkNode.href : '';
            const miniProfile = card.dataset.miniprofile || '';
            return { steamid, name, avatarUrl, lastOnline, status, profileLink, miniProfile };
        }).sort((a,b)=>BigInt(a.steamid)>BigInt(b.steamid)?1:-1);
    }

    function exportCSV() {
        const owner = getAccountId();
        const friends = collectFriends();
        if (!friends.length) return alert("Friend list not loaded.");

        let csv = "AccountID,SteamID,Name,AvatarURL,LastOnline,Status,ProfileLink,MiniProfile\n";

        friends.forEach(f => {
            csv += [
                owner,
                f.steamid,
                esc(f.name),
                esc(f.avatarUrl),
                esc(f.lastOnline),
                esc(f.status),
                esc(f.profileLink),
                esc(f.miniProfile)
            ].join(",") + "\n";
        });

        // --- TARİH EKLEME KISMI BAŞLANGICI ---
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Aylar 0'dan başlar, o yüzden +1
        const year = now.getFullYear();
        const dateStr = `${day}_${month}_${year}`;
        // --- TARİH EKLEME KISMI BİTİŞİ ---

        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        // Dosya adı: steam_friends_kullanici_sayi_05_01_2026.csv
        a.download = `steam_friends_${owner}_${friends.length}_${dateStr}.csv`;
        a.click();
        URL.revokeObjectURL(a.href);
    }

    const panel = document.createElement("div");
    panel.style = "position:fixed;bottom:20px;right:20px;z-index:999999;background:#111;color:#fff;padding:12px;border-radius:10px;font-family:monospace";

    const btn = document.createElement("button");
    btn.textContent = "EXPORT FRIENDS CSV";
    btn.style = "background:#1b2838;color:#fff;border:1px solid #66c0f4;padding:8px 14px;border-radius:6px;cursor:pointer";
    btn.onclick = exportCSV;

    panel.appendChild(btn);
    document.body.appendChild(panel);
})();
