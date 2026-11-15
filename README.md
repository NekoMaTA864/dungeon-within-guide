# Dungeon Within｜繁體中文攻略索引

公開靜態攻略站，以 `content.js` 維護資料；網站支援關鍵字搜尋、依資料類型與驗證狀態篩選，以及來源連結詳情檢視。

目前網站有 14 筆資料：9 筆遊戲功能介面觀察、1 筆資料方法說明、1 筆官方 v0.7.6 更新摘要、2 筆有版本限制的社群 Wiki 摘要，以及 1 筆舊版攻略提示。社群 Wiki 的版本未註明或標有 v0.4.2 的資訊都標成待核對／歷史資料，並非 v0.7.6 的實測推薦。

## 本機預覽

直接開啟 `index.html` 可瀏覽。若瀏覽器限制本機檔案，從此資料夾啟動簡易靜態伺服器：

```powershell
python -m http.server 4173
```

再開啟 `http://localhost:4173`。

## 資料規則

- `content.js` 只放通用介面說明與可公開引用的攻略資料；個人帳號進度、資源數、戰績與遊戲截圖保留在私人 Notion。
- 每筆內容盡可能標示來源、適用版本、更新日期和驗證狀態；未註版本的社群資料明確標示待核對。
- 「介面已觀察」只代表讀取過遊戲畫面；「官方資料」代表摘要自開發者更新紀錄；「社群資料」不代表官方或目前版本已驗證；「歷史資料」不可直接當成新版建議。
- 新增魔物、設施或流派攻略時，先補原文別名、版本、來源連結和驗證狀態；過時 Wiki 內容先加版本警示，不直接搬成當前攻略。

## GitHub Pages

此專案是純靜態網站，沒有後端、帳號系統或 API 金鑰。網站儲存庫為 [NekoMaTA864/dungeon-within-guide](https://github.com/NekoMaTA864/dungeon-within-guide)，Pages 發布來源已設為 **GitHub Actions**；`.github/workflows/pages.yml` 會在推送到 `main` 後部署網站。

公開網站：<https://nekomata864.github.io/dungeon-within-guide/>。

