# Dungeon Within｜攻略索引

繁體中文優先的靜態攻略站原型。資料以 `content.js` 維護，介面支援關鍵字搜尋、資料類型篩選、驗證狀態篩選，以及右側詳情檢視。

## 本機預覽

直接開啟 `index.html` 可瀏覽。若瀏覽器限制本機檔案，從此資料夾啟動簡易靜態伺服器：

```powershell
python -m http.server 4173
```

再開啟 `http://localhost:4173`。

## 資料規則

- `content.js` 只放通用功能導覽；個人帳號進度、資源數、戰績與遊戲截圖保留在私人 Notion。
- 每筆內容包含版本、來源、更新日期、介面觀察與待驗證事項。
- 「介面已觀察」代表畫面文字或欄位已讀取；不等於戰鬥機制已經實測。
- 新增魔物、設施或流派攻略前，先補上原文別名、版本與可查證來源。

## GitHub Pages

本目錄是可直接部署的純靜態網站，沒有後端、帳號系統或 API 金鑰。網站儲存庫為 [NekoMaTA864/dungeon-within-guide](https://github.com/NekoMaTA864/dungeon-within-guide)，Pages 發布來源已設為 **GitHub Actions**；`.github/workflows/pages.yml` 會在推送到 `main` 後部署目前目錄。

網站已於 2026-11-15 部署並確認可開啟：<https://nekomata864.github.io/dungeon-within-guide/>。部署工作流程使用 GitHub Actions，之後推送到 `main` 會自動更新網站。

