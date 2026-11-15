/* Strategy-first public guide. Personal inventory, progress, and resource counts stay private. */
window.DW_CONTENT = {
  version: "v0.7.6 Build 222",
  updated: "2026-11-15",
  entries: [
    {
      id: "unlock-roadmap",
      category: "進度與加點",
      title: "先解鎖，再投資：通用養成順序",
      english: "Unlock & Progression",
      aliases: ["新手", "建築所", "記憶方舟", "魔物聖所", "精粹之屋", "解體", "解鎖順序"],
      summary: "先打通永久培養、魔物召回與拆解，再做出穩定刷關隊；試煉往上推到還能穩定通關的位置。",
      sections: [
        {
          heading: "建築所：先開成長鏈",
          items: [
            "先開精粹之屋。接著沿「祭祀道具 → 魔物聖所」打通合成與生贄；另一條線是「魔王居室 → 增築 → 記憶方舟」，讓強力魔物與設施能跨局保存。",
            "準備開始刷部件前，再開解體道具；交易所適合用來補短缺資源。魔界任務與魔王居室升級可在核心隊伍成形後補上。",
            "這是依社群 Wiki 的解鎖依賴與新手流程排出的建議。頁面未標明 Build 222，開啟前仍以遊戲內顯示的前置條件和成本為準。"
          ]
        },
        {
          heading: "先做能刷的隊伍，再追完美個體",
          items: [
            "先用手上能穩定通關的暫用隊推進，拿到一隻長期核心後再集中餵養和刷它需要的部件。不要在隊伍還常滅團時，把資源拆散到很多候選魔物。",
            "把核心魔物和一兩個常用設施刻印進方舟；擴充格數只在真的有更多值得帶走的目標時再花沙漏。",
            "穩定農場優先於最高試煉：能連續通關的難度，通常比偶爾打更高、但常失敗更適合累積精粹、圖紙和部件。這是養成效率上的建議，不是官方掉落率承諾。"
          ]
        }
      ],
      caution: "不同版本的解鎖前置與成本可能調整；本條目提供決策順序，不要求照表花完所有資源。",
      status: "社群攻略",
      mechanicStatus: "解鎖成本待遊戲內核對",
      sources: [
        { name: "Dungeon Within Wiki*：新手流程", url: "https://wikiwiki.jp/dunwith/%E3%82%B2%E3%83%BC%E3%83%A0%E3%81%AE%E9%80%B2%E3%82%81%E6%96%B9" },
        { name: "Dungeon Within Wiki*：Memento Mori／建築所", url: "https://wikiwiki.jp/dunwith/%E3%83%A1%E3%83%A1%E3%83%B3%E3%83%88%E3%83%BB%E3%83%A2%E3%83%AA" }
      ],
      version: "社群 Wiki；頁面未標示 Build 222",
      tags: ["建築所", "精粹之屋", "魔物聖所", "記憶方舟", "成長順序"],
      updated: "2026-11-15"
    },
    {
      id: "meta-upgrade-priority",
      category: "進度與加點",
      title: "精粹、訓練場、工坊：資源怎麼投",
      english: "Meta Upgrade Priorities",
      aliases: ["精粹", "精粹之屋", "精髓", "訓練", "訓練場", "工坊", "圖紙", "加點"],
      summary: "跨局精粹培養先於單局重複訓練；工坊先拿到改造功能，再把藍圖收益當作中期目標。",
      sections: [
        {
          heading: "精粹之屋／永久培養：先投主力與部件來源",
          items: [
            "先鎖定一隻主要輸出，再培養會提供它所需 M、S1 或 S2 的素材魔物。這樣精粹與拆解投資會直接服務同一個流派。",
            "玩家對比指出，精粹訓練可以累積跨局的魔物成長、部件取得機會與能力；優先投在會長期留在方舟或主力隊裡的魔物。"
          ]
        },
        {
          heading: "訓練場：先做本局急用，不必搶著點滿",
          items: [
            "訓練場升級主要強化同一場冒險裡反覆使用 Train 的收益，訓練效果不能原樣帶到下一局。若目前目標是帳號長期強度，玩家建議把它排在精粹培養後。",
            "若某一局正靠單一核心推關，或作戰室已解鎖重複訓練選項，再補訓練場會比較有感。"
          ]
        },
        {
          heading: "工坊：把改造與圖紙收益當里程碑",
          items: [
            "工坊 Lv.1 解鎖設施改造。社群 Wiki 的表格列出 Lv.5 圖紙獲得量 +8%、Lv.10 +11%、Lv.15 +14%；若你常改造設施，Lv.5 是較早可追的收益點。",
            "圖紙不是目前瓶頸時先停在解鎖或 Lv.5；不必為了數字把高階設施改造機率一路點滿。Wiki 表格版本未標示，升級前以工坊內的目前效果文字核對。"
          ]
        }
      ],
      caution: "Train 的永久／單局差異來自玩家測試與討論，不是官方數值表；「精粹優先」是長期帳號成長的建議，單局卡關時可調整。",
      status: "社群實測",
      mechanicStatus: "部分升級表待版本核對",
      sources: [
        { name: "Reddit：Essence and Training Grounds", url: "https://www.reddit.com/r/Dungeon_Within/comments/1w3we8h/essence_and_training_grounds/" },
        { name: "Dungeon Within Wiki*：Memento Mori／工坊", url: "https://wikiwiki.jp/dunwith/%E3%83%A1%E3%83%A2%E3%83%B3%E3%83%88%E3%83%BB%E3%83%A2%E3%83%AA" }
      ],
      version: "玩家討論約 2026-09；工坊表格版本未註明",
      tags: ["精粹", "訓練場", "工坊", "圖紙", "永久成長", "加點順序"],
      updated: "2026-11-15"
    },
    {
      id: "gorgon-force-build",
      category: "流派推薦",
      title: "Gorgon 力場爆發：魔力脈線 × 巨人之王",
      english: "Gorgon Force Burst",
      aliases: ["Gorgon", "歌貢", "石化蛇女", "魔力脈線", "Mana Ley Line", "Nemea", "Force", "力場", "King of Giants", "巨人之王"],
      summary: "以 Gorgon 開場的前排力場傷害為核心，用同列魔力脈線放大；一件 Nemea S2 就能補力場易傷。",
      sections: [
        {
          heading: "核心配置",
          items: [
            "神話選 King of Giants（巨人之王）：原作者明確推薦它支援狩獵場單位的傷害骰；該 Gorgon 配置不推薦 Swarm。",
            "把 Gorgon 放進大型狩獵場，並在同列安排 Mana Ley Line（魔力脈線）。原作者的 Titan’s Fortress 例子可放 8 隻 Gorgon 與 6 條脈線；實際格數依地城擴張與設施槽位確認。",
            "主能力先堆 CHA，次選 CON。Gorgon 自己的 M 通常即可；Nemea M 雖能補傷害，但原作者提醒支配力成本很高。"
          ]
        },
        {
          heading: "部件與魔王房",
          items: [
            "只給一隻 Gorgon 裝 Nemea S2「Mantle of Transcendence」，讓狩獵場敵人承受力場易傷；不必全隊重複裝。",
            "防守可選一件 Gorgon S2「Freezing Gaze」或 Mind Elemental S2「Phantom Shift」；Ethereal S2「Ether Shield」則提供房間內的物理抗性。額外部件會增加支配力成本。",
            "魔王房可放 Nemea、1–2 隻 Gorgon，Behemoth 作為可選防守位；原作者用 Behemoth 對付部分神話 Boss 的法術。"
          ]
        },
        {
          heading: "成形節奏與實測範圍",
          items: [
            "原作者先用已成形的過渡隊開局，早期遇到記憶祭壇時召 Gorgon 和脈線；到第 2 階段結束時，目標至少 3 隻 Gorgon + 3 條脈線，再切換到主隊。",
            "這篇玩家指南回報可穩定農 C3 T30。它是 2026 年 8 月的單一玩家案例，不能直接當作 Build 222 的通用保證。"
          ]
        }
      ],
      caution: "這是高投入的力場專門隊。先確認自己有足夠 Gorgon、魔力脈線與支配力；不要為了複製數量拆散目前唯一能穩定通關的隊伍。",
      status: "玩家實測",
      mechanicStatus: "C3 T30 案例；Build 222 待重測",
      sources: [
        { name: "Reddit：Gorgon Guide", url: "https://www.reddit.com/r/Dungeon_Within/comments/1ve2loy/gorgon_guide/" },
        { name: "Dungeon Within Wiki*：設施效果整理", url: "https://wikiwiki.jp/dunwith/%E8%A8%AD%E5%82%99" }
      ],
      version: "玩家案例約 2026-08；未證實為 Build 222",
      tags: ["流派", "Gorgon", "力場", "魔力脈線", "巨人之王", "Nemea S2"],
      updated: "2026-11-15"
    },
    {
      id: "myth-darklord-pairs",
      category: "神話與魔王搭配",
      title: "神話 × 魔王 × 魔物：先按打法配",
      english: "Myth & Dark Lord Pairings",
      aliases: ["War Machine", "戰爭機器", "Sole Sovereign", "唯一君王", "Fate Weaver", "命運編織者", "Swarm", "Rhea", "Aura", "Desponia", "Zaria", "Quintessa", "Pegasus", "Emmelia", "魔王搭配"],
      summary: "目前有證據的方向分成高行動主力、單核 Emmelia、暴擊 Pegasus、Gorgon 力場隊；它們不是互相通用的排行。",
      sections: [
        {
          heading: "先挑你要玩的核心",
          items: [
            "War Machine（戰爭機器）：社群把它當泛用主力神話，特別是核心能連續使用主動／反應能力時。先給你部件與升級最完整的強力魔物；不是每個隊伍都必須選它。",
            "King of Giants（巨人之王）：狩獵場群體輸出、Gorgon + 魔力脈線有直接玩家指南支持；用於該配置時比 Swarm 更有根據。",
            "Sole Sovereign（唯一君王）+ Emmelia：適合嘗試單核路線。玩家曾以 Rhea 配 Emmelia 做到 C3 T35–36；另有玩家建議用 Giant Fortress 做 2×2 堵口、Giant Rampart 保護單核。這些是舊版本案例。",
            "Fate Weaver（命運編織者）+ Pegasus + Sprout Knight 的 Blooming Blade：社群把它作為暴擊方向的組合提示；目前沒有同等詳盡、達成層數可比的完整測試。",
            "Swarm（蟲群）：同種魔物堆疊才能形成主題，例子有多隻 Ghast 或 Lamia；有玩家報告 Ghast 堆疊可到 T30，但也指出會佔大量方舟格。屬於高收藏成本的專門玩法。"
          ]
        },
        {
          heading: "魔王怎麼選",
          items: [
            "Rhea：社群討論偏向電系魔物，特別提到 Emmelia／Kirin；和 Sole Sovereign + Emmelia 的單核案例方向一致。",
            "Aura：社群列出她對 DEX／遊俠類型有傾向；先看手上核心的主能力值與技能，再決定是否沿這條線投資。",
            "Desponia、Zaria、Quintessa：目前找到的來源不足以列出可靠的現行「魔王 → 指定魔物 → 指定設施」完整配方，因此本站暫不硬湊。"
          ]
        },
        {
          heading: "一條實用選擇規則",
          items: [
            "先選能承擔主要輸出的魔物，再配合它的能力值與部件；神話補強該打法。不要只因神話名字看起來符合主題，就讓一隻沒練好的魔物吃掉全部資源。"
          ]
        }
      ],
      caution: "這些是玩家 build／討論，不是官方排名。Emmelia 舊單核成績、Aura 屬性方向與 Pegasus 暴擊建議的版本條件各異，Build 222 尚未全面複測。",
      status: "社群攻略整理",
      mechanicStatus: "多數為舊版案例",
      sources: [
        { name: "Reddit：Prioritizing late game goals（War Machine／King／Swarm）", url: "https://www.reddit.com/r/Dungeon_Within/comments/1wevjrk/prioritizing_late_game_goals/" },
        { name: "Reddit：Rhea + Solo Emmelia，B195", url: "https://www.reddit.com/r/Dungeon_Within/comments/1vylm31/060_bn195_rhea_solo_emmelia_c3t3536_grinding/" },
        { name: "Reddit：Emmelia 堵口、Giant Fortress 與 Giant Rampart 配置", url: "https://www.reddit.com/r/Dungeon_Within/comments/1wc50tb/howd_i_do/" },
        { name: "Reddit：Pegasus + Blooming Blade + Fate Weaver", url: "https://www.reddit.com/r/Dungeon_Within/comments/1xkxqmr/warning_endless_mode_can_reward_significantly/" },
        { name: "Reddit：Stat focus（Rhea／Aura 屬性方向）", url: "https://www.reddit.com/r/Dungeon_Within/comments/1w0b9sr/stat_focus/" },
        { name: "Reddit：Swarm vs. War Machine", url: "https://www.reddit.com/r/Dungeon_Within/comments/1vvnq43/swarm_vs_war_machine/" }
      ],
      version: "玩家討論約 2026-07 至 2026-11；版本不一",
      tags: ["神話", "魔王", "War Machine", "Sole Sovereign", "Fate Weaver", "Swarm", "Emmelia", "Rhea", "Aura"],
      updated: "2026-11-15"
    },
    {
      id: "part-build-matrix",
      category: "魔物部件",
      title: "M／S1／S2 怎麼挑：按主能力值查",
      english: "Part Selection by Stat",
      aliases: ["M部件", "S1部件", "S2部件", "主部件", "副部件", "CHA", "WIS", "INT", "STR", "DEX", "CON", "部件推薦"],
      summary: "先讓 M 部件服務魔物的主能力值，再用 S1／S2 補反應、抗性或易傷；別為了裝滿槽位硬加支配成本。",
      sections: [
        {
          heading: "社群個人清單：主能力值對照",
          items: [
            "CHA：M 可看 Physis、Transcendent、Emmelia；S1 常見 Transcendent，S2 常見 Physis。若隊伍裡有多隻帶 Transcendent S1 的魔物，再考慮 1–2 個 Transcendent S2。",
            "WIS：M 可看 Emmelia；Kirin S2 是常見搭配。若多隻魔物都裝 Kirin S2，再考慮 1–2 個 Emmelia S2。",
            "INT：M 可看 Nemea 或 Emmelia；Grim Reaper S1 偏防禦／反擊，不依賴反應次數；Nemea S1 是 Endless 暴擊祝福下的特化選項；Force 輸出隊或多個 Nemea S1 才考慮 1–2 個 Nemea S2。",
            "STR／DEX／CON：M 可看 Behemoth，Behemoth S2 是常見耐久選擇。先確認實際攻擊吃哪個能力值，不要只看魔物定位。"
          ]
        },
        {
          heading: "支援位的易傷 S 部件",
          items: [
            "Leech S1：Necrotic 易傷；Transcendent S2：Psychic；Ugallu S2：Physical + Nature；Emmelia S2：Fire／Cold／Lightning；Nemea S2：Force + Physical（純物理易傷則該玩家認為 Ugallu 更好）。",
            "Emmelia 的元素易傷被社群回覆為只作用在她所在房間；安排她做支援時，先看房間位置，不能當成全地城光環。"
          ]
        },
        {
          heading: "怎麼套用才不浪費",
          items: [
            "先拿主力的 M，再拿最能改變打法的一件 S1 或 S2；只在反應次數與能力互不衝突時才加第二件反應部件。",
            "部件會提高 Dominion 成本。若核心效果已成立，空槽比一件高成本但不觸發的部件更好。"
          ]
        }
      ],
      caution: "上表是 2026-11 社群貼文作者的個人選擇清單，不是全體玩家統計或官方最佳解；實際配件仍要看技能觸發、傷害類型、目標抵抗與反應限制。",
      status: "社群個人心得",
      mechanicStatus: "逐隊驗證觸發條件",
      sources: [
        { name: "Reddit：List of best monster parts?", url: "https://www.reddit.com/r/Dungeon_Within/comments/1xsvjza/list_of_best_monster_parts/" },
        { name: "Reddit：T9 Transcendent build／反應部件討論", url: "https://www.reddit.com/r/Dungeon_Within/comments/1uuh46u/t9_transcendent_full_build_is_she_the_queen/" }
      ],
      version: "社群貼文 2026-11-10；Build 222 附近",
      tags: ["M", "S1", "S2", "CHA", "WIS", "INT", "STR", "DEX", "CON", "易傷", "Dominion"],
      updated: "2026-11-15"
    },
    {
      id: "facility-combos",
      category: "設施與搭配",
      title: "設施組合：先做泛用核心，再做主題房",
      english: "Facility Combinations",
      aliases: ["設施組合", "巨人堡壘", "世界樹之心", "投石機", "魔力脈線", "巨人防壁", "生命之泉", "寧靜聖所"],
      summary: "組合表提供三個配方；真正優先度要看你的隊伍：巨型狩獵場泛用、世界樹之心續航、投石機偏功能路線。",
      sections: [
        {
          heading: "推薦先認識的組合配方",
          items: [
            "Giant Fortress：Last Stand Fortress + Titan’s Tank + Giant Rampart。適合把防線與支援集中在狩獵場的方向；先看合成後的房間格數、效果與成本是否符合你的核心站位。",
            "Heart of the World Tree：Fountain of Life + Vitality Conversion Room + Unclean Altar。屬於續航／回復主題；隊伍若常因續航倒下，比再塞一個輸出設施更值得評估。",
            "Catapult：Rolling Stone + Auto Interceptor Ballista。社群組合表列有此配方，但目前沒有相同條件的 B222 通關比較，先當作功能型方案，不把它排成必做核心。"
          ]
        },
        {
          heading: "依流派補單體設施",
          items: [
            "Gorgon 力場隊：Mana Ley Line 同列放大 Force；Giant Rampart 作為狩獵場支援。這組效果有玩家專門指南支持。",
            "通用防線：社群 Wiki 將 Giant Rampart 列為強勢設施；大型狩獵場通常比把每個小格都塞進不同弱隊更容易集中強化。",
            "控場：Serenity Sanctuary 可以是控制向工具，但 Build 221 加入行動控制遞減與免疫機制；舊版多間 Serenity 疊控套路不可不改就照抄。"
          ]
        },
        {
          heading: "泛用與情境怎麼分",
          items: [
            "優先評估：能直接服務主力傷害或生存的設施，例如對應傷害類型的脈線、Giant Rampart、Fountain of Life。",
            "情境選擇：Catapult、控制房或依賴很多改造的設施組合。要看地形、敵人路線、觸發條件和支配力，不等於它們弱。",
            "公開資料沒有設施使用率統計，因此本站不會把「攻略比較少」說成「玩家不常用」。"
          ]
        }
      ],
      caution: "組合配方來自玩家整理表，尚未逐項用 Build 222 遊戲畫面核對；合成前在遊戲內再次確認名稱、尺寸與實際效果。",
      status: "社群資料整理",
      mechanicStatus: "配方與新版本效果待核對",
      sources: [
        { name: "巴哈姆特：設施組合表（玩家整理）", url: "https://forum.gamer.com.tw/C.php?bsn=85358&snA=90&tnum=1" },
        { name: "Dungeon Within Wiki*：設施效果與玩家評語", url: "https://wikiwiki.jp/dunwith/%E8%A8%AD%E5%82%99" },
        { name: "官方 v0.7.5 Build 221 更新紀錄（控場遞減）", url: "https://gamecoaster.notion.site/v0-7-5-Build-221-4154966ac9c38055b2c5d5c91c685070" }
      ],
      version: "玩家配方表 2026-07；控場提醒 Build 221",
      tags: ["設施", "組合", "Giant Fortress", "Heart of the World Tree", "Catapult", "Mana Ley Line", "控制"],
      updated: "2026-11-15"
    },
    {
      id: "war-room-priority",
      category: "進度與加點",
      title: "作戰室：先點泛用節點，專門功能晚點補",
      english: "War Room Priorities",
      aliases: ["戰術節點", "加速", "魔法齒輪", "血之叫喊", "秘密實驗室", "休息室", "プリズム", "作戰室加點"],
      summary: "冷卻加速人人可用；魔法齒輪服務設施改造，支配力節點只在它是實際瓶頸時投資。",
      sections: [
        {
          heading: "泛用起手",
          items: [
            "加速（Acceleration）：每隔數秒縮短一般與輔助權能冷卻，屬於不綁單一魔物或設施流派的節點，適合先補通用戰鬥節奏。",
            "魔法齒輪（Magic Gear）：增加設施可反覆改造的次數；若你的核心建築需要多次改造才成形，優先度會高於只偶爾改一次的帳號。"
          ]
        },
        {
          heading: "依目前瓶頸選擇",
          items: [
            "血之叫喊（Blood Scream）：勝場增加最大支配力；只有當支配力常卡住部署或部件時，才優先投。",
            "巨人三銃士、秘密實驗室、休息室：都偏向反覆訓練、提升稀有訓練選項或重抽訓練。若你不重複訓練，先不急著走這條支線。",
            "稜鏡（Prism）：需啟用每一欄至少一個戰術設施，還要求敵人走過陷阱、狩獵場與設備；收益條件較多，通常等地城路線能穩定覆蓋再點。"
          ]
        }
      ],
      caution: "效果與解鎖成本取自社群 Wiki 的節點表，頁面未標 Build 222。請以遊戲內節點文字為準；這裡的先後順序是依泛用程度與觸發條件做的建議。",
      status: "社群 Wiki 建議",
      mechanicStatus: "節點表版本待核對",
      sources: [
        { name: "Dungeon Within Wiki*：作戰室節點效果與成本", url: "https://wikiwiki.jp/dunwith/%E4%BD%9C%E6%88%A6%E5%AE%A4" },
        { name: "Reddit：Essence and Training Grounds", url: "https://www.reddit.com/r/Dungeon_Within/comments/1w3we8h/essence_and_training_grounds/" }
      ],
      version: "社群 Wiki；頁面未標示 Build 222",
      tags: ["作戰室", "加速", "魔法齒輪", "支配力", "訓練", "稜鏡"],
      updated: "2026-11-15"
    },
    {
      id: "patch-076",
      category: "版本與查核",
      title: "Build 222：舊攻略要重新看哪裡",
      english: "Patch Notes · v0.7.6",
      aliases: ["v0.7.6", "Build 222", "永遠的戰爭", "魔王昇天", "生命值成長", "補丁"],
      summary: "官方調整魔王昇天並降低 Eternal War 後段敵人生命成長；這不等於每篇舊流派都已被重測。",
      sections: [
        {
          heading: "Build 222 官方變動",
          items: [
            "魔王 Ascension 的效果與數值有平衡調整。",
            "Eternal War 中敵人最大生命值成長降低；官方更新摘要列出第 10、20、30 階約 15%、30%、40% 的差異。",
            "也修正戰鬥計算、遺骨、獎勵選項與介面問題。"
          ]
        },
        {
          heading: "閱讀本站攻略時",
          items: [
            "標示玩家實測的條目，只代表作者當時版本與試煉條件；標示待核對的推薦，不會被包裝成 Build 222 排名。",
            "控制流派另外要注意 Build 221 的行動控制遞減機制。"
          ]
        }
      ],
      caution: "官方更新紀錄說明版本改動，未替社群配隊做效能保證。",
      status: "官方更新",
      mechanicStatus: "官方版本基線",
      sources: [
        { name: "GameCoaster 官方 Release Note：v0.7.6 Build 222", url: "https://gamecoaster.notion.site/v0-7-6-Build-222-4174966ac9c3800d895ff12921a50f8d" },
        { name: "GameCoaster 官方 Release Note：v0.7.5 Build 221", url: "https://gamecoaster.notion.site/v0-7-5-Build-221-4154966ac9c38055b2c5d5c91c685070" }
      ],
      version: "v0.7.6 Build 222",
      tags: ["版本", "官方更新", "Eternal War", "控場遞減", "Build 222"],
      updated: "2026-11-15"
    }
  ]
};

