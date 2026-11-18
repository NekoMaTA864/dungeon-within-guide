window.DW_CODEX = {
  "sources": {
    "latest": [
      "官方 v0.7.7 B223",
      "https://gamecoaster.notion.site/v0-7-7-Build-223-41a4966ac9c380d6b62adbcc0dc67f48"
    ],
    "index": [
      "GameCoaster 英文更新總表",
      "https://gamecoaster.notion.site/Dungeon-Within-Release-Note-EN-32e4966ac9c3808bba34f56a92457d39"
    ],
    "old": [
      "官方 v0.7.0 B208",
      "https://gamecoaster.notion.site/v0-7-0-Build-208-4084966ac9c3802aa2c2d8db083fb164"
    ],
    "asc": [
      "官方 v0.7.6 B222",
      "https://gamecoaster.notion.site/v0-7-6-Build-222-4174966ac9c3800d895ff12921a50f8d"
    ],
    "control": [
      "官方 v0.7.5 B221 控場遞減",
      "https://gamecoaster.notion.site/v0-7-5-Build-221-4154966ac9c38055b2c5d5c91c685070"
    ],
    "mid": [
      "官方 v0.7.3 B219",
      "https://gamecoaster.notion.site/v0-7-3-Build-219-4134966ac9c380869796c5e5e55775c1"
    ],
    "six": [
      "六位魔王社群心得｜2026-11，版本未註",
      "https://www.reddit.com/r/Dungeon_Within/comments/1xltbzw/thoughts_on_all_the_demon_lords_including_old_now/"
    ],
    "trap": [
      "扎莉亞陷阱｜T20、Stage 40，版本未註",
      "https://www.reddit.com/r/Dungeon_Within/comments/1xlnudt/grippy_dungeon/"
    ],
    "ostea": [
      "奧斯蒂雅 Endless 玩家案例｜版本未註",
      "https://www.reddit.com/r/Dungeon_Within/comments/1xo8njy/nothing_abnormal_about_these_numbers_at_all/"
    ],
    "behemoth": [
      "貝西摩斯逐槽玩家心得｜2026-07，早於 0.7",
      "https://www.reddit.com/r/Dungeon_Within/comments/1uy4lab/behemoth_full_set_variant_and_build/"
    ],
    "parts": [
      "魔物部件玩家討論｜2026-11，版本未註",
      "https://www.reddit.com/r/Dungeon_Within/comments/1xsvjza/list_of_best_monster_parts/"
    ],
    "gorgon": [
      "Gorgon 力場玩家案例｜C3 T30",
      "https://www.reddit.com/r/Dungeon_Within/comments/1ve2loy/gorgon_guide/"
    ],
    "rooms": [
      "日文 Wiki：設備｜案例版本需核對",
      "https://wikiwiki.jp/dunwith/%E8%A8%AD%E5%82%99"
    ],
    "twGuide": [
      "巴哈姆特繁中用語與巨人之壁配置｜B188",
      "https://forum.gamer.com.tw/Co.php?bsn=85358&sn=175"
    ],
    "hunting": [
      "日文 Wiki・狩獵場效果／配方，B223 待核對",
      "https://wikiwiki.jp/dunwith/%E7%8B%A9%E5%A0%B4"
    ],
    "formulas": [
      "巴哈姆特・繁中設施組合表，舊版",
      "https://forum.gamer.com.tw/C.php?bsn=85358&snA=90&tnum=1"
    ]
  },
  "lords": [
    {
      "id": "desponia",
      "name": "Desponia",
      "sub": "死靈・深淵",
      "summary": "以深淵爆發清波，讓同房不死隊吃到疊層。",
      "routes": [
        {
          "id": "abyss",
          "title": "深淵爆發／不死隊",
          "status": "官方機制已核對・配隊待實測",
          "layout": {
            "start": [
              {
                "x": 0,
                "y": 2,
                "name": "生命之泉",
                "kind": "hunt",
                "role": "不死隊續航",
                "w": 1,
                "h": 1
              },
              {
                "x": 1,
                "y": 2,
                "name": "魔力地脈",
                "kind": "support",
                "role": "同橫列候選",
                "w": 1,
                "h": 1
              }
            ],
            "cells": [
              {
                "x": 0,
                "y": 2,
                "name": "生命之泉",
                "kind": "hunt",
                "role": "不死主隊",
                "w": 1,
                "h": 1
              },
              {
                "x": 0,
                "y": 1,
                "name": "虛空迴廊",
                "kind": "hunt",
                "role": "心靈副攻／第二通道",
                "w": 1,
                "h": 1
              },
              {
                "x": 1,
                "y": 2,
                "name": "魔力地脈",
                "kind": "support",
                "role": "同橫列候選",
                "w": 1,
                "h": 1
              },
              {
                "x": 2,
                "y": 1,
                "name": "寧靜聖所",
                "kind": "support",
                "role": "前置支援候選",
                "w": 1,
                "h": 1
              }
            ],
            "note": "先把死靈主力留在生命之泉；有心靈副攻時才用虛空迴廊。範圍與狀態按當前說明核對，寧靜聖所為支援候選。"
          },
          "placement": "先把死靈主力留在生命之泉；有心靈副攻時才用虛空迴廊。範圍與狀態按當前說明核對，寧靜聖所為支援候選。",
          "team": "菲亞斯走死靈時可考慮本體 M／S2，吸血鬼領主 S1 作候選死靈弱點支援。死神可填清場或守衛，前期缺件用現有不死角色補位。先能穩定清波再投入高階部件。",
          "authority": "清波優先試能增加深淵觸發或範圍的權能／專精。單體過慢時改補直接傷害，避免只把資源堆在有多目標才有收益的選項。",
          "ascension": "死靈／精神輸出看 Abyssal Assimilation，深淵爆發看 Abyss Amplification。Nourishment of Death 的舊回血攻略已過時，B219 改為同場存活友軍成長。魔王特質優先同傷型或存活，具名順位待測。",
          "path": "尚未找到必拿遺物。缺核心先走能補不死魔物或部件的節點；主戰房開始穩定後才用菁英追高品質成長。遇死靈抗性卡關就補異傷型。",
          "version": "0.6 不死隊的分工仍可拿來試。B208 重做權能，B219 更改 Nourishment，B222 又改深淵傷害，舊權能和數值順位需重驗。",
          "sources": [
            "mid",
            "asc",
            "old",
            "six",
            "twGuide",
            "hunting"
          ]
        }
      ]
    },
    {
      "id": "aura",
      "name": "Aura",
      "sub": "光輝・回復",
      "summary": "先靠自然恩賜與回復保住主房，再用敏捷堆光輝清怪。",
      "routes": [
        {
          "id": "radiance",
          "title": "光輝／回復周回",
          "status": "官方機制已核對・配隊待實測",
          "layout": {
            "start": [
              {
                "x": 0,
                "y": 2,
                "name": "生命之泉",
                "kind": "hunt",
                "role": "光輝／回復主隊",
                "w": 1,
                "h": 1
              }
            ],
            "cells": [
              {
                "x": 0,
                "y": 2,
                "name": "世界樹之心",
                "kind": "hunt",
                "role": "回復主隊・合成占位",
                "w": 2,
                "h": 2
              },
              {
                "x": 2,
                "y": 2,
                "name": "魔力地脈",
                "kind": "support",
                "role": "同橫列候選",
                "w": 1,
                "h": 1
              },
              {
                "x": 0,
                "y": 3,
                "name": "巨人之壁",
                "kind": "support",
                "role": "前排保護",
                "w": 1,
                "h": 1
              }
            ],
            "note": "先用生命之泉守中線。世界樹之心是後續候選，讓會治療的角色進主房；依實際占地與範圍調整，缺合成材料就維持生命之泉，另補一房守第二通道。"
          },
          "placement": "先用生命之泉守中線。世界樹之心是後續候選，讓會治療的角色進主房；依實際占地與範圍調整，缺合成材料就維持生命之泉，另補一房守第二通道。",
          "team": "先配能穩定站住的前排和至少一隻能補光輝或回復的魔物。前排可測貝西摩斯，部件先補耐久。沒有證據支持特定 T9 為必備。",
          "authority": "B223 的 Radiant Arrow、Sunbeam、Flower Seed Burst、Solar Ray 吃 DEX。先試 Sunbeam 或 Solar Ray 的清怪表現，單體傷害不足再留直傷手段。舊 CHA／WIS 加點表需更新。",
          "ascension": "光輝走 Fruit of Light，缺自然恩賜看 Nature’s Reliquary，設施線再考慮 Blessing of the Earth。特質先依實際瓶頸挑 DEX／光輝或防守，具名最佳特質待查。",
          "path": "需要恩賜疊層或要修正配裝時提高休息處優先度。恩賜夠、主房可穩刷時再挑菁英。必拿遺物待查，先挑光輝輸出或能維持主房血線的效果。",
          "version": "0.6 Bloom／Full Bloom 是歷史案例。0.7 重做權能，B222 調整恩賜與光輝昇天，B223 又調整吃點。舊版固定選法需重驗。",
          "sources": [
            "old",
            "asc",
            "latest",
            "six",
            "twGuide",
            "hunting",
            "formulas"
          ]
        }
      ]
    },
    {
      "id": "rhea",
      "name": "Rhea",
      "sub": "野獸・物理／閃電",
      "summary": "野獸前排吸收第一波，靠 Valor 和閃電或物理輸出收尾。",
      "routes": [
        {
          "id": "valor",
          "title": "野獸前排／Valor 雷隊",
          "status": "官方機制已核對・配隊待實測",
          "layout": {
            "start": [
              {
                "x": 0,
                "y": 2,
                "name": "絕境要塞",
                "kind": "hunt",
                "role": "野獸前排",
                "w": 1,
                "h": 1
              },
              {
                "x": 1,
                "y": 2,
                "name": "巨人之壁",
                "kind": "support",
                "role": "保護前排",
                "w": 1,
                "h": 1
              }
            ],
            "cells": [
              {
                "x": 0,
                "y": 2,
                "name": "絕境要塞",
                "kind": "hunt",
                "role": "野獸承傷",
                "w": 1,
                "h": 1
              },
              {
                "x": 0,
                "y": 1,
                "name": "生命之泉",
                "kind": "hunt",
                "role": "雷輸出／接漏怪",
                "w": 1,
                "h": 1
              },
              {
                "x": 1,
                "y": 2,
                "name": "巨人之壁",
                "kind": "support",
                "role": "前排保護",
                "w": 1,
                "h": 1
              },
              {
                "x": 1,
                "y": 1,
                "name": "魔力地脈",
                "kind": "support",
                "role": "雷系技能吃豁免才上",
                "w": 1,
                "h": 1
              }
            ],
            "note": "野獸先放絕境要塞承傷。雷隊若真的受益於法術豁免難度才補魔力地脈；雷抗關保留物理副攻。"
          },
          "placement": "野獸先放絕境要塞承傷。雷隊若真的受益於法術豁免難度才補魔力地脈；雷抗關保留物理副攻。",
          "team": "貝西摩斯可負責承傷或鈍擊副輸出，涅默亞適合物理版測弱點支援。偏雷時，用技能確認為閃電傷害的後排補輸出，部件優先補同傷型、穿透或存活。",
          "authority": "前排能撐但清怪慢時，優先補能打多目標的雷權能。前排常倒則先選保護或拖延選項。B223 具體權能順位與魔王特質名單仍待核對。",
          "ascension": "輸出選 Crown of Valor；走 Honor 成長時看 Glory of Honor 和 Honor Level Enhancement。特質先看能否提升主力常用傷型或前排存活，不混用舊版特質表。",
          "path": "尚未確認必拿遺物。缺前排、雷輸出或物理副攻，先挑可補該缺口的節點。能維持前排再打菁英，遇高閃電抗性時帶物理副攻。",
          "version": "0.6 野獸／雷隊可作歷史骨架。B208 改權能且調整 Rhea，B222 又改 Valor／Honor；B223 的出手節奏也變快。",
          "sources": [
            "old",
            "asc",
            "latest",
            "six",
            "hunting"
          ]
        }
      ]
    },
    {
      "id": "zaria",
      "name": "扎莉亞",
      "sub": "Zaria・狂氣／流血",
      "summary": "先試敏捷流血。湊到核心陷阱、昇天和遺物，再考慮轉陷阱。",
      "routes": [
        {
          "id": "bleed",
          "title": "敏捷／狂氣流血",
          "status": "官方機制已核對・配隊待實測",
          "layout": {
            "start": [
              {
                "x": 0,
                "y": 2,
                "name": "角鬥士競技場",
                "kind": "hunt",
                "role": "近戰起手・譯名待核",
                "w": 1,
                "h": 1
              }
            ],
            "cells": [
              {
                "x": 0,
                "y": 2,
                "name": "血之鬥坑",
                "kind": "hunt",
                "role": "物理副攻・合成占位",
                "w": 2,
                "h": 2
              },
              {
                "x": 2,
                "y": 2,
                "name": "生命之泉",
                "kind": "hunt",
                "role": "副隊續航",
                "w": 1,
                "h": 1
              },
              {
                "x": 1,
                "y": 3,
                "name": "巨人之壁",
                "kind": "support",
                "role": "保護近戰",
                "w": 1,
                "h": 1
              }
            ],
            "note": "血之鬥坑為日文名暫譯，舊資料的效果偏物理，也可能讓場上友軍更脆。流血缺前排或房間效果不合時，改用絕境要塞／生命之泉守兩條通道。角鬥士競技場同為暫譯，後排命中代價需核對。"
          },
          "placement": "血之鬥坑為日文名暫譯，舊資料的效果偏物理，也可能讓場上友軍更脆。流血缺前排或房間效果不合時，改用絕境要塞／生命之泉守兩條通道。角鬥士競技場同為暫譯，後排命中代價需核對。",
          "team": "菲亞斯是流血／死靈候選，先看自身 M／S2 是否補到實際傷型。缺前排可用貝西摩斯。若要補直傷，先用手上能清怪的角色，避免整隊只能等流血。",
          "authority": "B223 的 Blade Shot、Bloodstorm、Boiling Blood、Cross Slash、Blade Hell 銜接 DEX。起手先比 Bloodstorm 的多目標表現與單體斬擊，再決定專精。",
          "ascension": "Blood Crusade 可作狂氣傷害線核心。Blood Imprint 在 B222 改為依每 5 狂氣獲得核心屬性、取得上限 1 次，舊版成長預期需重算。具名流血特質順位待測，先選能支援主輸出或疊層的效果。",
          "path": "尚無必拿遺物。開局優先補前排和流血核心，能穩吃菁英時才把菁英提上來。若王戰流血不夠快，先補直傷或穿透。",
          "version": "B222 提高 Blood Crusade 流血與骰傷收益，B223 多項權能改 DEX。兩者是版本證據，隊伍模板仍待跑關。",
          "sources": [
            "asc",
            "latest",
            "six",
            "hunting"
          ]
        },
        {
          "id": "traps",
          "title": "深淵之口／陷阱連動",
          "status": "舊社群案例・B223 待重測",
          "layout": {
            "start": [
              {
                "x": 0,
                "y": 2,
                "name": "絕境要塞",
                "kind": "hunt",
                "role": "補王傷",
                "w": 1,
                "h": 1
              },
              {
                "x": 2,
                "y": 2,
                "name": "深淵之口",
                "kind": "trap",
                "role": "依實際尺寸；缺件先空",
                "w": 1,
                "h": 1
              }
            ],
            "cells": [
              {
                "x": 0,
                "y": 2,
                "name": "絕境要塞",
                "kind": "hunt",
                "role": "補王傷",
                "w": 1,
                "h": 1
              },
              {
                "x": 0,
                "y": 1,
                "name": "生命之泉",
                "kind": "hunt",
                "role": "接漏怪",
                "w": 1,
                "h": 1
              },
              {
                "x": 2,
                "y": 2,
                "name": "深淵之口",
                "kind": "trap",
                "role": "預留起點，按走線與尺寸調整",
                "w": 1,
                "h": 1
              }
            ],
            "note": "先用魔王房前的狩獵場保命，深淵之口放在實際通過的路徑。缺狂氣連動、耐久或事件遺物時，維持流血／直傷主隊。"
          },
          "placement": "先用魔王房前的狩獵場保命，深淵之口放在實際通過的路徑。缺狂氣連動、耐久或事件遺物時，維持流血／直傷主隊。",
          "team": "原案例用陷阱主攻。起手魔物先放能拖時間的前排，再保留一個直傷位處理高血量王。貝西摩斯可測前排，部件以存活為先。",
          "authority": "選能穩定取得及消耗狂氣的權能／專精來餵 Cruel Aftermath。先在低試煉看發動與耐久，再決定是否把陷阱當主傷。",
          "ascension": "案例核心昇天為 Cruel Aftermath，優先補耐久。特質 Overcharged Chain 是案例的陷阱增傷選項。Blood Imprint 按 B222 新規評估，控場也要按 B221 遞減重測。",
          "path": "Overload Core 是原案例關鍵事件遺物，額外啟動會消耗耐久。有陷阱與耐久才優先追相關事件；缺組件先補房間或改走流血。原案例 T20 到 Stage 40 後卡在王戰耗時。",
          "version": "2026-11-02 的社群案例未註 Build，早於 B221 與 B223，舊版連控與後段效率都待驗證。",
          "sources": [
            "trap",
            "control",
            "asc",
            "latest",
            "hunting"
          ]
        }
      ]
    },
    {
      "id": "ostea",
      "name": "奧斯蒂雅",
      "sub": "Ostea・體質／殘骸",
      "summary": "由高 CON 前排吃殘骸和物理收益，依手上核心分貝西摩斯與死神兩線。",
      "routes": [
        {
          "id": "bone",
          "title": "體質殘骸／貝西摩斯",
          "status": "近期社群案例・新版吃點已核對",
          "layout": {
            "start": [
              {
                "x": 0,
                "y": 2,
                "name": "絕境要塞",
                "kind": "hunt",
                "role": "貝西摩斯承傷",
                "w": 1,
                "h": 1
              },
              {
                "x": 1,
                "y": 2,
                "name": "巨人之壁",
                "kind": "support",
                "role": "物理主隊支援",
                "w": 1,
                "h": 1
              }
            ],
            "cells": [
              {
                "x": 0,
                "y": 2,
                "name": "巨人要塞",
                "kind": "hunt",
                "role": "貝西摩斯／物理主隊",
                "w": 2,
                "h": 2
              },
              {
                "x": 0,
                "y": 3,
                "name": "巨人之壁",
                "kind": "support",
                "role": "",
                "w": 1,
                "h": 1
              },
              {
                "x": 1,
                "y": 3,
                "name": "巨人之壁",
                "kind": "support",
                "role": "",
                "w": 1,
                "h": 1
              },
              {
                "x": 0,
                "y": 0,
                "name": "巨人之壁",
                "kind": "support",
                "role": "",
                "w": 1,
                "h": 1
              },
              {
                "x": 1,
                "y": 0,
                "name": "巨人之壁",
                "kind": "support",
                "role": "",
                "w": 1,
                "h": 1
              },
              {
                "x": 2,
                "y": 2,
                "name": "戰神熔爐",
                "kind": "support",
                "role": "候選，效果待查",
                "w": 1,
                "h": 1
              }
            ],
            "note": "沒有巨人要塞就沿用絕境要塞，在第二條通道補生命之泉或現有狩獵場；戰神熔爐只列候選。"
          },
          "placement": "沒有巨人要塞就沿用絕境要塞，在第二條通道補生命之泉或現有狩獵場；戰神熔爐只列候選。",
          "team": "貝西摩斯先試本體 M／S2 加死神 S1。涅默亞提供弱點支援，缺她時先用現有物理或弱點角色替代。保留一格異傷型處理物抗。",
          "authority": "B223 的 Spinning Axe、Bone Bomb、Implosion、Bone Shrapnel、Bone Storm 改吃 CON。前期依需要先試平時清怪權能，骨系專精也優先與 CON 對齊。",
          "ascension": "優先確認 Weight of Bone、殘骸與 CON 相關昇天／強化對實戰面板的影響，再補物理或 Heavy Blow 相容的選項。具名魔王特質優先序待比較。",
          "path": "尚無已確認必拿遺物。缺部件或存活不穩，先補隊伍、設備和休息處，主房穩定後再用菁英換成長。遇物抗先靠弱點支援，仍卡關就保留異傷型。",
          "version": "B222 修正 Weight of Bone 類 CON 增益及殘骸結算，B223 又把多個骨系權能改吃 CON。Endless 玩家配隊仍須用目前試煉驗證。",
          "sources": [
            "asc",
            "latest",
            "ostea",
            "hunting",
            "formulas"
          ]
        },
        {
          "id": "reaper",
          "title": "死神主攻／物理混死靈",
          "status": "配隊候選・B223 待實測",
          "layout": {
            "start": [
              {
                "x": 0,
                "y": 2,
                "name": "絕境要塞",
                "kind": "hunt",
                "role": "死神／前排",
                "w": 1,
                "h": 1
              }
            ],
            "cells": [
              {
                "x": 0,
                "y": 2,
                "name": "絕境要塞",
                "kind": "hunt",
                "role": "死神和物理前排",
                "w": 1,
                "h": 1
              },
              {
                "x": 0,
                "y": 1,
                "name": "生命之泉",
                "kind": "hunt",
                "role": "守第二通道",
                "w": 1,
                "h": 1
              },
              {
                "x": 1,
                "y": 2,
                "name": "巨人之壁",
                "kind": "support",
                "role": "主房支援",
                "w": 1,
                "h": 1
              }
            ],
            "note": "死神所在房靠絕境要塞站場，生命之泉放在第二條通道；主房清怪穩定後可把死神調至魔王房收漏怪。"
          },
          "placement": "死神所在房靠絕境要塞站場，生命之泉放在第二條通道；主房清怪穩定後可把死神調至魔王房收漏怪。",
          "team": "死神自身 M 作起手，生存缺口再補 S1。涅默亞 S2 為物理／力場弱點候選，已有可靠對應傷型的 T6–T8 就能先填其餘位置。",
          "authority": "以 CON 骨系權能補魔王側物理輸出，隊伍已能清怪就挑解決單體或生存缺口的權能。",
          "ascension": "殘骸與 CON 仍可做魔王側主軸。魔王特質先按主要戰鬥的傷型取增傷或守線；死神吃到的相容增益要以結算核對。",
          "path": "無已確認的必拿遺物。先補能讓死神安全出手的前排或弱點件。主房能穩定清場再優先菁英，物抗關需要保留死靈副路。",
          "version": "此線是近期部件建議搭配 B223 骨系權能變更推導，與貝西摩斯線尚無同版本對照實績。",
          "sources": [
            "latest",
            "parts",
            "ostea",
            "hunting",
            "formulas"
          ]
        }
      ]
    },
    {
      "id": "quintessa",
      "name": "昆特莎",
      "sub": "Quintessa・火焰／寒冷／閃電",
      "summary": "火、冰、雷都能設計專精測試。先從單屬 INT 線開局，三屬線再按主要傷害分配能力值。",
      "routes": [
        {
          "id": "fire",
          "title": "火焰／INT 爆發",
          "status": "B223 機制已核對・流派待實測",
          "layout": {
            "start": [
              {
                "x": 0,
                "y": 2,
                "name": "絕境要塞",
                "kind": "hunt",
                "role": "火焰主隊",
                "w": 1,
                "h": 1
              },
              {
                "x": 1,
                "y": 2,
                "name": "魔力地脈",
                "kind": "support",
                "role": "同橫列 DC 候選",
                "w": 1,
                "h": 1
              }
            ],
            "cells": [
              {
                "x": 0,
                "y": 2,
                "name": "防護聖所",
                "kind": "hunt",
                "role": "火焰主隊・合成占位",
                "w": 2,
                "h": 2
              },
              {
                "x": 2,
                "y": 2,
                "name": "魔力地脈",
                "kind": "support",
                "role": "同橫列候選",
                "w": 1,
                "h": 1
              },
              {
                "x": 3,
                "y": 1,
                "name": "火焰陷阱候選",
                "kind": "trap",
                "role": "實際走線與效果待測",
                "w": 1,
                "h": 1
              }
            ],
            "note": "防護聖所為日文名暫譯。先確認是否受益於法術豁免難度與區域保護；缺合成件就用絕境要塞搭魔力地脈，第二通道另放現有狩獵場。"
          },
          "placement": "防護聖所為日文名暫譯。先確認是否受益於法術豁免難度與區域保護；缺合成件就用絕境要塞搭魔力地脈，第二通道另放現有狩獵場。",
          "team": "艾梅莉亞是元素候選。先讀部件和技能實際傷型，選能補 火焰輸出或弱點的魔物。缺前排先用現有坦；M 優先補主要出手，S1／S2 依存活與弱點缺口決定。",
          "authority": "Pillar of Fire 以 INT 為主；三屬權能的火段同樣吃 INT，可先測火柱搭三屬技能的火段。",
          "ascension": "優先測對應 火焰水晶與 Tri-Elemental Crystallography。特質找同屬傷害、穿透或能強化主權能的主屬性，具名最佳組合待查。",
          "path": "尚無已確認必拿遺物。開局先走能補 火焰核心或補坦的節點；主房不漏怪再打菁英。若王火抗高，用異屬或穿透；記錄王戰和同波清怪耗時。",
          "version": "B222 加強各屬水晶對應傷害。B223 的三個單屬權能統一吃 INT，三屬技能則依火 INT、冰 WIS、雷 CHA 分開吃點。這條是機制推導的測試配置。",
          "sources": [
            "latest",
            "asc",
            "six",
            "parts",
            "hunting"
          ]
        },
        {
          "id": "cold",
          "title": "寒冷／控場",
          "status": "B223 機制已核對・流派待實測",
          "layout": {
            "start": [
              {
                "x": 0,
                "y": 2,
                "name": "絕境要塞",
                "kind": "hunt",
                "role": "寒冷主隊",
                "w": 1,
                "h": 1
              },
              {
                "x": 1,
                "y": 2,
                "name": "魔力地脈",
                "kind": "support",
                "role": "同橫列 DC 候選",
                "w": 1,
                "h": 1
              }
            ],
            "cells": [
              {
                "x": 0,
                "y": 2,
                "name": "防護聖所",
                "kind": "hunt",
                "role": "寒冷主隊・合成占位",
                "w": 2,
                "h": 2
              },
              {
                "x": 2,
                "y": 2,
                "name": "魔力地脈",
                "kind": "support",
                "role": "同橫列候選",
                "w": 1,
                "h": 1
              },
              {
                "x": 3,
                "y": 1,
                "name": "寒冷陷阱候選",
                "kind": "trap",
                "role": "實際走線與效果待測",
                "w": 1,
                "h": 1
              }
            ],
            "note": "防護聖所為日文名暫譯。先確認是否受益於法術豁免難度與區域保護；缺合成件就用絕境要塞搭魔力地脈，第二通道另放現有狩獵場。"
          },
          "placement": "防護聖所為日文名暫譯。先確認是否受益於法術豁免難度與區域保護；缺合成件就用絕境要塞搭魔力地脈，第二通道另放現有狩獵場。",
          "team": "艾梅莉亞是元素候選。先讀部件和技能實際傷型，選能補 寒冷輸出或弱點的魔物。缺前排先用現有坦；M 優先補主要出手，S1／S2 依存活與弱點缺口決定。",
          "authority": "用 Frost Blast／Frozen Ground 就優先 INT；若主要靠三屬技能的冰段，才試 WIS。控場是否真能拖住需在 B221 遞減後實測。",
          "ascension": "優先測對應 寒冷水晶與 Tri-Elemental Crystallography。特質找同屬傷害、穿透或能強化主權能的主屬性，具名最佳組合待查。",
          "path": "尚無已確認必拿遺物。開局先走能補 寒冷核心或補坦的節點；主房不漏怪再打菁英。缺王傷先補直傷，避免只為延長控制而一直換房。",
          "version": "B222 加強各屬水晶對應傷害。B223 的三個單屬權能統一吃 INT，三屬技能則依火 INT、冰 WIS、雷 CHA 分開吃點。這條是機制推導的測試配置。",
          "sources": [
            "latest",
            "asc",
            "six",
            "parts",
            "hunting"
          ]
        },
        {
          "id": "lightning",
          "title": "閃電／連鎖",
          "status": "B223 機制已核對・流派待實測",
          "layout": {
            "start": [
              {
                "x": 0,
                "y": 2,
                "name": "絕境要塞",
                "kind": "hunt",
                "role": "閃電主隊",
                "w": 1,
                "h": 1
              },
              {
                "x": 1,
                "y": 2,
                "name": "魔力地脈",
                "kind": "support",
                "role": "同橫列 DC 候選",
                "w": 1,
                "h": 1
              }
            ],
            "cells": [
              {
                "x": 0,
                "y": 2,
                "name": "防護聖所",
                "kind": "hunt",
                "role": "閃電主隊・合成占位",
                "w": 2,
                "h": 2
              },
              {
                "x": 2,
                "y": 2,
                "name": "魔力地脈",
                "kind": "support",
                "role": "同橫列候選",
                "w": 1,
                "h": 1
              },
              {
                "x": 3,
                "y": 1,
                "name": "入口攔截候選",
                "kind": "trap",
                "role": "實際走線與效果待測",
                "w": 1,
                "h": 1
              }
            ],
            "note": "防護聖所為日文名暫譯。先確認是否受益於法術豁免難度與區域保護；缺合成件就用絕境要塞搭魔力地脈，第二通道另放現有狩獵場。"
          },
          "placement": "防護聖所為日文名暫譯。先確認是否受益於法術豁免難度與區域保護；缺合成件就用絕境要塞搭魔力地脈，第二通道另放現有狩獵場。",
          "team": "艾梅莉亞是元素候選。先讀部件和技能實際傷型，選能補 閃電輸出或弱點的魔物。缺前排先用現有坦；M 優先補主要出手，S1／S2 依存活與弱點缺口決定。",
          "authority": "Chain Lightning／Condensed Lightning 走 INT；只有三屬技能的雷段維持 CHA。先測哪種出手實際佔比最高。",
          "ascension": "優先測對應 閃電水晶與 Tri-Elemental Crystallography。特質找同屬傷害、穿透或能強化主權能的主屬性，具名最佳組合待查。",
          "path": "尚無已確認必拿遺物。開局先走能補 閃電核心或補坦的節點；主房不漏怪再打菁英。優先比較多目標清場和單王傷害，必要時留第二傷型。",
          "version": "B222 加強各屬水晶對應傷害。B223 的三個單屬權能統一吃 INT，三屬技能則依火 INT、冰 WIS、雷 CHA 分開吃點。這條是機制推導的測試配置。",
          "sources": [
            "latest",
            "asc",
            "six",
            "parts",
            "hunting"
          ]
        },
        {
          "id": "tri",
          "title": "三屬混合／抗性對策",
          "status": "B223 機制已核對・混合流待實測",
          "layout": {
            "start": [
              {
                "x": 0,
                "y": 2,
                "name": "絕境要塞",
                "kind": "hunt",
                "role": "三元素主隊",
                "w": 1,
                "h": 1
              },
              {
                "x": 1,
                "y": 2,
                "name": "魔力地脈",
                "kind": "support",
                "role": "同橫列 DC 候選",
                "w": 1,
                "h": 1
              }
            ],
            "cells": [
              {
                "x": 0,
                "y": 2,
                "name": "防護聖所",
                "kind": "hunt",
                "role": "三元素主隊・合成占位",
                "w": 2,
                "h": 2
              },
              {
                "x": 2,
                "y": 2,
                "name": "魔力地脈",
                "kind": "support",
                "role": "同橫列候選",
                "w": 1,
                "h": 1
              },
              {
                "x": 3,
                "y": 1,
                "name": "異傷型副隊",
                "kind": "hunt",
                "role": "實際走線與效果待測",
                "w": 1,
                "h": 1
              }
            ],
            "note": "防護聖所為日文名暫譯。先確認是否受益於法術豁免難度與區域保護；缺合成件就用絕境要塞搭魔力地脈，第二通道另放現有狩獵場。"
          },
          "placement": "防護聖所為日文名暫譯。先確認是否受益於法術豁免難度與區域保護；缺合成件就用絕境要塞搭魔力地脈，第二通道另放現有狩獵場。",
          "team": "先配一名元素輸出（艾梅莉亞為候選）和一名能獨立承傷的前排。第二輸出補第一輸出打不動的抗性，不急著湊齊三隻。",
          "authority": "試 Tri-Elemental Shot、Tri-Elemental Satellites 或 Hyper-Elemental Blast。看結算再分配 INT／WIS／CHA；三段吃點分開，前期可先養主要一段。",
          "ascension": "試 Tri-Elemental Crystallography，按實際拿到的水晶與權能調整方向。特質先補主段或生存，三屬都堆的成本要跟單屬相比。",
          "path": "必要遺物未查到。優先補主系輸出或前排，穩定後打菁英。若王抗只卡一系，先用另一系補傷，記錄改前改後的擊殺時間。",
          "version": "官方公告可確認三段各自吃點，尚無足夠的 B223 通關案例判定混合流優於單屬。",
          "sources": [
            "latest",
            "asc",
            "six",
            "hunting"
          ]
        }
      ]
    }
  ],
  "monsters": [
    {
      "id": "behemoth",
      "name": "貝西摩斯",
      "sub": "Behemoth・遊戲繁中：貝希摩斯",
      "summary": "起手先試本體 M、死神 S1、本體 S2；已有 M 時，鈍擊／CON 線優先比較本體 S2。",
      "status": "舊版逐槽案例＋近期社群方向・B223 待逐件核對",
      "sections": [
        [
          "M｜貝西摩斯自身",
          "保留自身主件，作鈍擊／重擊的起手。沒有該件先用現有主件，避免同時追第二種輸出套路。"
        ],
        [
          "S1｜死神 → 本體 S1 作替代",
          "死神 S1 是舊玩家案例的物理抗性／死靈防護候選。用本體 S1 則先確認鈍擊弱點代價能否補掉。涅默亞 S1 曾調整觸發條件，請讀當前面板再決定。"
        ],
        [
          "S2｜貝西摩斯自身",
          "舊案例指向生命與鈍擊的 CON 配合。未取得時先用已有耐久件或先留空，依支配力與實戰生存取捨。"
        ],
        [
          "搭配",
          "奧斯蒂雅體質線最直接，Rhea 野獸前排也可測。配涅默亞做弱點支援，主戰房先用巨人系狩獵場配巨人之壁。"
        ]
      ],
      "links": [
        "ostea",
        "rhea",
        "nemea",
        "grim",
        "rampart"
      ],
      "sources": [
        "behemoth",
        "parts",
        "asc",
        "latest"
      ]
    },
    {
      "id": "grim",
      "name": "死神",
      "sub": "Grim Reaper・清場／守衛",
      "summary": "可當物理混死靈清場，也可提供防守 S1 給前排。",
      "status": "社群候選・B223 待逐件核對",
      "sections": [
        [
          "M｜先用死神自身",
          "先看現有主件能否負責清場，尚無確認更優的跨魔物替換。"
        ],
        [
          "S1｜死神自身",
          "缺防守先測自身 S1，當前抗性與觸發以遊戲內文字為準。"
        ],
        [
          "S2｜依缺口",
          "暫無定案，先用對應主傷型或能維持站場的現有 S2。"
        ],
        [
          "搭配",
          "奧斯蒂雅物理混死靈或 Desponia 守衛。"
        ]
      ],
      "links": [
        "ostea",
        "desponia",
        "behemoth",
        "nemea"
      ],
      "sources": [
        "parts",
        "behemoth",
        "six"
      ]
    },
    {
      "id": "nemea",
      "name": "涅默亞",
      "sub": "Nemea・力場／物理弱點候選",
      "summary": "先用在需要力場或物理弱點的主戰房。",
      "status": "社群案例・部件效果待核對",
      "sections": [
        [
          "M｜先保留自身",
          "先測自身主件。隊伍只需要弱點時，M 的投入排在 S2 後。"
        ],
        [
          "S1｜視觸發條件",
          "自身 S1 的過往觸發條件曾變更，現況先看遊戲內。"
        ],
        [
          "S2｜涅默亞自身",
          "可試在力場或物理主房。純物理也可比較烏加魯 S2，先做一套。"
        ],
        [
          "搭配",
          "奧斯蒂雅物理隊、Gorgon 力場隊。"
        ]
      ],
      "links": [
        "ostea",
        "behemoth",
        "ley"
      ],
      "sources": [
        "gorgon",
        "parts",
        "behemoth"
      ]
    },
    {
      "id": "physis",
      "name": "菲亞斯",
      "sub": "Physis・死靈／流血",
      "summary": "先確認這局主打流血或死靈，再選部件和弱點支援。",
      "status": "社群候選・B223 待逐件核對",
      "sections": [
        [
          "M｜自身候選",
          "優先試自身主件和目標傷型是否吻合。"
        ],
        [
          "S1｜依玩法選",
          "死靈支援可比較吸血鬼領主 S1，先確認裝在隊友還是自身較有收益。流血線的指定 S1 待查。"
        ],
        [
          "S2｜自身候選",
          "先看自身 S2 是否能補主打法，缺件可先用手邊能維持出手頻率與生存的部件。"
        ],
        [
          "搭配",
          "扎莉亞走流血、Desponia 走死靈。"
        ]
      ],
      "links": [
        "zaria",
        "desponia"
      ],
      "sources": [
        "parts",
        "six",
        "asc"
      ]
    },
    {
      "id": "emmelia",
      "name": "艾梅莉亞",
      "sub": "Emmelia・元素輸出候選",
      "summary": "可拿來比較昆特莎的火、冰、雷或混合配置。",
      "status": "部件方向來自社群・逐槽待查",
      "sections": [
        [
          "M｜依實際傷型",
          "先用已持有且主要傷型對得上的主件。"
        ],
        [
          "S1／S2｜待核對",
          "目前無足夠資料指定供件魔物，先以存活、同屬弱點或穿透補缺口。"
        ],
        [
          "搭配",
          "昆特莎元素線。Rhea 雷隊可依實際傷型另外測試。"
        ]
      ],
      "links": [
        "quintessa",
        "rhea",
        "ley"
      ],
      "sources": [
        "parts",
        "six",
        "latest"
      ]
    }
  ],
  "facilities": [
    {
      "id": "rampart",
      "name": "巨人之壁",
      "sub": "Giant Rampart・主戰房支援",
      "summary": "先用一間主戰房測支援範圍，再決定是否擴成多房。",
      "status": "社群設施配置・B223 效果待核對",
      "sections": [
        [
          "怎麼擺",
          "靠核心狩獵場放，按目前面板確認受益範圍。"
        ],
        [
          "搭配與替代",
          "先測貝西摩斯前排、物理或力場戰區。拿不到用現有能保護主房的設施。"
        ]
      ],
      "links": [
        "fortress",
        "ostea",
        "behemoth"
      ],
      "sources": [
        "rooms",
        "ostea",
        "gorgon",
        "twGuide"
      ]
    },
    {
      "id": "fortress",
      "name": "巨人要塞",
      "sub": "Giant Fortress・主戰房候選",
      "summary": "用作核心隊伍的交戰點；先把一房配齊再擴張。",
      "status": "社群布局・B223 效果待核對",
      "sections": [
        [
          "怎麼擺",
          "可把主房設於較常入侵的路線或魔王房前。空間不足用已有狩獵場，先看實際走線。"
        ],
        [
          "搭配與替代",
          "巨人之壁支援，奧斯蒂雅可試物理主房；效果與尺寸依當前圖鑑。"
        ]
      ],
      "links": [
        "rampart",
        "ostea"
      ],
      "sources": [
        "rooms",
        "ostea"
      ]
    },
    {
      "id": "ley",
      "name": "魔力地脈",
      "sub": "Mana Ley Line・同列法術支援候選",
      "summary": "Gorgon 力場案例用同列配置，其他元素要再確認能否吃到效果。",
      "status": "歷史社群案例・B223 待重測",
      "sections": [
        [
          "怎麼擺",
          "先依 Gorgon 案例試放同列，查面板並比較移入／移出後主輸出變化。"
        ],
        [
          "搭配與替代",
          "Gorgon、涅默亞 S2 為案例候選。昆特莎元素隊需另外驗證，未確認時用可覆蓋主房的支援設施。"
        ]
      ],
      "links": [
        "nemea",
        "quintessa",
        "rampart"
      ],
      "sources": [
        "rooms",
        "gorgon"
      ]
    },
    {
      "id": "maw",
      "name": "深淵之口",
      "sub": "Maw of Abyss・陷阱",
      "summary": "扎莉亞陷阱流的核心候選，走線、耐久和王傷要一起看。",
      "status": "舊社群案例・控場待重測",
      "sections": [
        [
          "怎麼擺",
          "優先覆蓋主要入侵路徑，陷阱後方放能補王傷的狩獵場。"
        ],
        [
          "搭配與替代",
          "配 Cruel Aftermath、Overload Core 和早期耐久選項。缺關鍵組件時可回到流血主隊，把陷阱當輔助。"
        ]
      ],
      "links": [
        "zaria"
      ],
      "sources": [
        "trap",
        "control",
        "latest"
      ]
    },
    {
      "id": "last-stand",
      "name": "絕境要塞",
      "sub": "英雄狩獵場・前排承傷",
      "summary": "適合先守魔王房前，由前排接戰。",
      "status": "社群資料・B223 效果待核對",
      "sections": [
        [
          "位置",
          "3×3 放在中線靠魔王房，擴成 4×4 後可在另一條通道補生命之泉。"
        ],
        [
          "怎麼取捨",
          "日文 Wiki 記載區域內的力量、體質豁免，以及同欄防禦收益。巨人要塞的配方舊資料也用到這個房間。"
        ]
      ],
      "links": [
        "rhea",
        "ostea",
        "zaria"
      ],
      "sources": [
        "hunting",
        "formulas"
      ]
    },
    {
      "id": "fountain",
      "name": "生命之泉",
      "sub": "英雄狩獵場・續航",
      "summary": "可以單獨當主戰房，也能守魔王房第二條通道。",
      "status": "社群資料・B223 效果待核對",
      "sections": [
        [
          "位置",
          "讓要續航的隊伍在房內交戰；需要同橫列治療加成時，向同列延伸配置。"
        ],
        [
          "怎麼取捨",
          "適合先解決主隊掉血或副隊站場。Aura 成形後可試合成世界樹之心。"
        ]
      ],
      "links": [
        "aura",
        "desponia",
        "world-tree"
      ],
      "sources": [
        "hunting",
        "formulas"
      ]
    },
    {
      "id": "world-tree",
      "name": "世界樹之心",
      "sub": "合成狩獵場・回復隊候選",
      "summary": "有能主動治療的隊伍時，可從生命之泉轉這個配置。",
      "status": "舊社群配方・B223 效果與占地待核對",
      "sections": [
        [
          "配置",
          "預留魔王房前的中央空間，部署能用治療能力的魔物。"
        ],
        [
          "舊配方",
          "生命之泉、生命轉換室、不潔祭壇。開始合成前，以當前遊戲面板確認。"
        ]
      ],
      "links": [
        "aura",
        "fountain"
      ],
      "sources": [
        "hunting",
        "formulas"
      ]
    }
  ]
};
