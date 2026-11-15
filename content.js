/* Public, generic interface notes only. Personal inventory and account values stay in Notion. */
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
    }
  ]
};

