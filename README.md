# Dungeon Within｜流派與養成指南

繁體中文靜態攻略站，以 `content.js` 維護策略資料；網站支援關鍵字搜尋、依攻略類型與證據狀態篩選，以及多來源詳情檢視。

目前有 9 篇攻略，涵蓋建築所解鎖順序、精粹／訓練場／工坊的投資次序、Gorgon 力場隊、神話與魔王搭配、M／S1／S2 部件、設施組合、作戰室節點與 v0.7.6 更新。玩家案例會保留其版本和成績範圍，不等同 Build 222 排名。

## 本機預覽

直接開啟 `index.html` 可瀏覽。若瀏覽器限制本機檔案，從此資料夾啟動簡易靜態伺服器：

```powershell
python -m http.server 4173
```

再開啟 `http://localhost:4173`。

## 資料規則

- `content.js` 放通用流派和成長建議；個人帳號進度、資源數、戰績與遊戲截圖留在私人筆記。
- 每篇盡可能標示來源、適用版本、更新日期和驗證狀態。社群心得不是官方排名；來源未註版本時直接標示。
- 新增魔物、設施或流派建議時，補原文別名、版本、來源連結與案例條件；過時攻略先加版本提醒，不直接當成新版定論。

## GitHub Pages

此專案是純靜態網站，沒有後端、帳號系統或 API 金鑰。網站儲存庫為 [NekoMaTA864/dungeon-within-guide](https://github.com/NekoMaTA864/dungeon-within-guide)，Pages 發布來源已設為 **GitHub Actions**；`.github/workflows/pages.yml` 會在推送到 `main` 後部署網站。

公開網站：<https://nekomata864.github.io/dungeon-within-guide/>。

