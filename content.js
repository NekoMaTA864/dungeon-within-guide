/* Public guide notes and cited sources only. Personal inventory and account values stay in Notion. */
window.DW_CONTENT = {
  version: "v0.7.6 Build 222",
  updated: "2026-11-15",
  entries: [
    {
      id: "memory-ark",
      category: "功能導覽",
      title: "記憶方舟",
      english: "Memory Ark",
      aliases: ["方舟", "怪物", "設施", "部件", "召集", "鍛鍊"],
      summary: "查看跨局保存的怪物、設施與其他分類；讀清容量與操作需求再整理。",
      observation: [
        "介面列出怪物、設施、部件、召集與鍛鍊等分類。",
        "部分分類會同時顯示目前數量與容量，並提供擴建入口。",
        "選取條目時，右側會呈現屬性或效果摘要。"
      ],
      caution: "分類容量和開局提示中的其他記錄項目可能不是同一種數值。擴建、裝備或召集前，先確認消耗與目標。",
      status: "介面已觀察",
      mechanicStatus: "規則待驗證",
      source: "MuMu 遊戲介面觀察",
      tags: ["容量", "收藏", "怪物", "設施", "部件"],
      updated: "2026-11-15"
    },
    {
      id: "workshop",
      category: "功能導覽",
      title: "工坊",
      english: "Workshop",
      aliases: ["設施", "精密化", "狩獵場"],
      summary: "瀏覽設施清單與個別設施資訊；精密化操作會先顯示資源需求。",
      observation: [
        "設施卡片可按類別與等級瀏覽。",
        "選取設施後，詳情面板會顯示類型、尺寸或耐久等欄位。",
        "精密化按鈕旁會列出所需資源。"
      ],
      caution: "精密化可能消耗稀有資源；把它當作檢視入口時，停在按鈕前並先記下成本。",
      status: "介面已觀察",
      mechanicStatus: "規則待驗證",
      source: "MuMu 遊戲介面觀察",
      tags: ["設施", "精密化", "耐久", "清單"],
      updated: "2026-11-15"
    },
    {
      id: "training-ground",
      category: "功能導覽",
      title: "訓練場",
      english: "Training Ground",
      aliases: ["訓練", "注入", "單位卡片"],
      summary: "從單位名單檢視屬性與階段資訊；訓練操作會顯示所需資源。",
      observation: [
        "左側以卡片列出可查看的單位，選取卡片會切換右側屬性。",
        "詳情區可見屬性、階段與能力相關資訊。",
        "底部注入入口會顯示資源需求。"
      ],
      caution: "切換卡片只改變檢視對象；不要按注入來測試效果，除非已確認成本與預期變化。",
      status: "介面已觀察",
      mechanicStatus: "規則待驗證",
      source: "MuMu 遊戲介面觀察",
      tags: ["單位", "屬性", "階段", "注入"],
      updated: "2026-11-15"
    },
    {
      id: "essence-house",
      category: "功能導覽",
      title: "精粹之屋",
      english: "Essence House",
      aliases: ["精粹", "拆解", "注入", "零件生成率"],
      summary: "檢視單位相關的精粹、拆解機率與能力欄位。",
      observation: [
        "頁面以單位清單搭配詳細資訊面板呈現。",
        "面板可列出拆解時的零件生成機率與能力項目。",
        "注入入口會列出資源需求。"
      ],
      caution: "畫面顯示的機率不一定足以說明完整計算方式；先記錄版本與條件，再透過可重複的實測確認。",
      status: "介面已觀察",
      mechanicStatus: "規則待驗證",
      source: "MuMu 遊戲介面觀察",
      tags: ["精粹", "拆解", "機率", "注入"],
      updated: "2026-11-15"
    },
    {
      id: "war-room",
      category: "功能導覽",
      title: "作戰室",
      english: "War Room",
      aliases: ["路線", "節點", "戰鬥地圖"],
      summary: "以地圖節點呈現作戰路線；未揭露的節點內容需要逐步確認。",
      observation: [
        "畫面以多條路線與節點構成地圖。",
        "尚未揭露的路線會以問號顯示。",
        "畫面上可能同時出現多種圖示計數。"
      ],
      caution: "點擊節點可能開始戰鬥或觸發其他流程。只讀盤點時，停留在地圖總覽。",
      status: "介面已觀察",
      mechanicStatus: "規則待驗證",
      source: "MuMu 遊戲介面觀察",
      tags: ["作戰", "地圖", "節點", "路線"],
      updated: "2026-11-15"
    },
    {
      id: "demon-residence",
      category: "功能導覽",
      title: "魔王居所",
      english: "Demon Lord Residence",
      aliases: ["魔王", "角色畫廊", "居所"],
      summary: "以角色肖像展示魔王相關內容；選取後的效果與切換規則仍待核對。",
      observation: [
        "總覽以多個縱向肖像欄呈現角色。",
        "僅從總覽無法確認角色是否已解鎖或選取後會改變什麼。"
      ],
      caution: "探索時先讀取總覽；在確認選取行為前，不要把點擊肖像當成純預覽。",
      status: "介面已觀察",
      mechanicStatus: "規則待驗證",
      source: "MuMu 遊戲介面觀察",
      tags: ["魔王", "角色", "解鎖"],
      updated: "2026-11-15"
    },
    {
      id: "building-center",
      category: "功能導覽",
      title: "建築所",
      english: "Building Center",
      aliases: ["建築", "召喚結晶", "刻印結晶", "魔王之鏡"],
      summary: "集中列出多個建築與召集項目，選取條目後可讀取說明。",
      observation: [
        "清單包含魔王居所、魔王之鏡、記憶方舟、召喚結晶、刻印結晶與召集批次等項目。",
        "選取項目後，右側顯示名稱、目前數字或簡短說明。"
      ],
      caution: "清單上的勾號、計數與目前等級需要分開判讀；操作前先確認按鈕是否會建造或領取。",
      status: "介面已觀察",
      mechanicStatus: "規則待驗證",
      source: "MuMu 遊戲介面觀察",
      tags: ["建築", "解鎖", "召集", "進度"],
      updated: "2026-11-15"
    },
    {
      id: "shadow-exchange",
      category: "功能導覽",
      title: "暗影交易所",
      english: "Shadow Exchange",
      aliases: ["兌換", "碎片", "堅冰", "羊皮紙", "交易所"],
      summary: "瀏覽兌換項目、輸入與輸出資源，再決定是否交易。",
      observation: [
        "清單包含碎片、堅冰與羊皮紙等兌換項目。",
        "詳情區顯示兌換方向與數量控制。",
        "頁首展示多種資源圖示與數量。"
      ],
      caution: "數量滑桿與兌換按鈕屬於交易操作；圖示名稱未確認前，不要推定資源用途或餘額。",
      status: "介面已觀察",
      mechanicStatus: "規則待驗證",
      source: "MuMu 遊戲介面觀察",
      tags: ["資源", "兌換", "碎片", "商店"],
      updated: "2026-11-15"
    },
    {
      id: "otherworld-support",
      category: "功能導覽",
      title: "異世界支援",
      english: "Otherworld Support",
      aliases: ["商品", "付費商店", "精粹", "通行證"],
      summary: "列出遊戲內商品與購買資訊；商品與價格可能隨版本或地區變動。",
      observation: [
        "商品頁包含精粹、方舟、通行證等分類項目。",
        "選取商品時可查看說明、購買所得與本地化價格。"
      ],
      caution: "此頁可能涉及真實貨幣交易。網站只做介面索引，不提供購買建議，也不保存個人付款資訊。",
      status: "介面已觀察",
      mechanicStatus: "規則待驗證",
      source: "MuMu 遊戲介面觀察",
      tags: ["商品", "付費", "通行證", "價格"],
      updated: "2026-11-15"
    },
    {
      id: "reading-evidence",
      category: "資料方法",
      title: "怎麼讀驗證標籤",
      english: "Evidence labels",
      aliases: ["版本", "來源", "查核", "介面已觀察", "規則待驗證"],
      summary: "先看資料能支持哪種結論，再判斷它是否適用於目前版本。",
      observation: [
        "介面已觀察：確認遊戲畫面上的文字、欄位或數值。",
        "規則待驗證：尚未確認完整觸發條件、戰鬥效果或不同版本差異。",
        "可靠的攻略還需要標示版本、來源與查核日期。"
      ],
      caution: "單一畫面觀察只能支持畫面層級的描述；推薦配裝或機制結論需要額外的官方資料或可重複實測。",
      status: "介面已觀察",
      mechanicStatus: "規則待驗證",
      source: "本站資料整理規則",
      tags: ["證據", "來源", "版本", "驗證"],
      updated: "2026-11-15"
    },
    {
      id: "patch-076",
      category: "版本更新",
      title: "v0.7.6 更新摘要",
      english: "Patch Notes · Build 222",
      aliases: ["0.7.6", "Build 222", "永遠的戰爭", "Ascension", "遺骨", "耐久力"],
      summary: "官方更新調整魔王昇天效果、降低永遠的戰爭敵方生命成長，並修正戰鬥計算與介面問題。",
      observation: [
        "魔王昇天效果與數值有平衡調整；細節依 Desponia、Rhea、Aura、Zaria、Quintessa 分列。",
        "永遠的戰爭中，後續敵人的最大生命值成長幅度降低；官方列出第 10、20、30 階約 15%、30%、40% 的差異。",
        "修正耐久力增益、遺骨、一般戰鬥獎勵選項，以及方舟等介面的多項問題。"
      ],
      caution: "這是 Build 222 的官方更新摘要，不代表所有舊攻略都已重新測試。涉及角色數值的配置請對照完整更新紀錄與目前遊戲版本。",
      status: "官方資料",
      mechanicStatus: "Build 222 更新紀錄",
      source: "GameCoaster 官方 Release Note (EN)",
      sourceUrl: "https://gamecoaster.notion.site/v0-7-6-Build-222-4174966ac9c3800d895ff12921a50f8d",
      version: "v0.7.6 Build 222",
      tags: ["版本", "更新", "昇天", "永遠的戰爭", "戰鬥修正"],
      updated: "2026-11-15"
    },
    {
      id: "monster-formation-wiki",
      category: "魔物資料",
      title: "魔王室與狩獵場配置",
      english: "Demon Room & Hunting Ground",
      aliases: ["隊伍", "魔王房", "狩獵場", "部署", "前衛", "後衛"],
      summary: "社群 Wiki 記載魔王室與狩獵場的單位槽位；該頁未註明適用遊戲版本。",
      observation: [
        "Wiki 說明魔王室配置 1 名魔王與 3 隻魔物。",
        "狩獵場配置 4 隻魔物，負責與敵方單位直接交戰。",
        "這是社群資料摘錄，尚未用 v0.7.6 遊戲畫面核對。"
      ],
      caution: "原頁沒有標示資料版本；本條目只作為查詢線索，不作現行編隊建議。請以目前遊戲中的槽位與部署畫面為準。",
      status: "社群資料",
      mechanicStatus: "版本待核對",
      source: "Dungeon Within Wiki*：魔王・モンスター",
      sourceUrl: "https://wikiwiki.jp/dunwith/%E9%AD%94%E7%8E%8B%E3%83%BB%E3%83%A2%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC",
      version: "來源未註明版本",
      tags: ["魔物", "隊伍", "部署", "狩獵場", "槽位"],
      updated: "2026-11-15"
    },
    {
      id: "facility-types-wiki",
      category: "設施資料",
      title: "設施三分類",
      english: "Facility Categories",
      aliases: ["狩獵場", "陷阱", "設備", "設施分類"],
      summary: "社群 Wiki 將設施分為狩獵場、陷阱與設備，並簡述各自用途。",
      observation: [
        "狩獵場配置我方魔物，與入侵敵人交戰。",
        "陷阱對進入的敵人造成傷害或有害效果。",
        "設備提供地城或我方單位的支援效果。"
      ],
      caution: "Wiki 同頁另有未註版本的地城格數與耐久說明，本條目沒有照搬那些數值。三類設施的現行細節仍需對照 v0.7.6 遊戲內說明。",
      status: "社群資料",
      mechanicStatus: "版本待核對",
      source: "Dungeon Within Wiki*：施設",
      sourceUrl: "https://wikiwiki.jp/dunwith/%E6%96%BD%E8%A8%AD",
      version: "來源未註明版本",
      tags: ["設施", "狩獵場", "陷阱", "設備"],
      updated: "2026-11-15"
    },
    {
      id: "progression-guide-history",
      category: "版本提醒",
      title: "舊版新手流程需重測",
      english: "Progression Guide · Historical",
      aliases: ["新手", "開局", "流程", "v0.4.2", "舊攻略"],
      summary: "社群 Wiki 的流程頁包含明確標為 v0.4.2 的推薦與育成說明，不能直接當作 v0.7.6 建議。",
      observation: [
        "頁面介紹新手解鎖建築所、培養暫用隊伍與長期育成的階段流程。",
        "部分魔物與配件推薦明確寫著現行版本 v0.4.2，早於本站 v0.7.6 基線。",
        "可用來尋找待查主題；名稱、數值、解鎖條件及推薦都需按新版更新紀錄重核。"
      ],
      caution: "不要把頁面列出的 v0.4.2 隊伍或配件直接套用到 v0.7.6。此條目是版本警示，不是新手攻略或配隊推薦。",
      status: "歷史資料",
      mechanicStatus: "舊版未重測",
      source: "Dungeon Within Wiki*：ゲームの進め方",
      sourceUrl: "https://wikiwiki.jp/dunwith/%E3%82%B2%E3%83%BC%E3%83%A0%E3%81%AE%E9%80%B2%E3%82%81%E6%96%B9",
      version: "頁面部分推薦標示 v0.4.2",
      tags: ["新手", "攻略", "歷史資料", "版本差異"],
      updated: "2026-11-15"
    }
  ]
};
