'use strict';

// モジュールを読込む。
const axios = require('axios');

const json = {
    "settings": {
        "address": "茨城県石岡市",
        "screen_name": "AbeShinzo",
        "count": "5",
        "recognition_flg": "false",
        "score": "0.6"
    },
    "tweets": [
        "心を無にする。\nプレミアムフライデーに、座禅を組みました。\n慌ただしい毎日ですが、久しぶりに静かなひと時を過ごし、すっきりと落ち着いた気持ちになりました。\n\nこの後、上野の博物館に行ってみようと思います。 https://t.co/kWB5vHluSF",
        "菅元総理は前々回の参院選挙の直前に突然、私を告訴しました。私を貶めることを目的とした売名行為にほかならず、菅元総理の猛省を求めます。",
        "元総理が現職の総理を告訴し、裁判で争うことになったことは残念でなりません。私は総理としての時間の一部を裁判のために割かざるを得ないことになりました。\n国会議員同士、一度も抗議を受ける事はありませんでした。",
        "最高裁の上告棄却により、まさに「真実の勝利」に最終判断が下りました。",
        "この決定により当方の勝訴が確定しました。\n昨年９月の高裁判決は菅総理の福島原発の海水注入に関連して「間違った判断と嘘」を伝えた私のメルマガ記事の主要な部分が真実であることを認めました。この判決を不服として菅元総理が最高裁に上告していました。"
    ],
    "images": [
        "https://pbs.twimg.com/media/C5al6CRVUAACf51.jpg"
    ],
    "classes": [
        ""
    ],
    "profile": {
        "word_count": 370,
        "word_count_message": "入力されたのは 370 語でした。 統計的に意味のある概算値を計算するためには最低 600 語、1,200 語以上が好ましい語数です",
        "processed_language": "ja",
        "personality": [
            {
                "trait_id": "big5_openness",
                "name": "知的好奇心",
                "category": "personality",
                "percentile": 0.8468972346965093,
                "raw_score": 0.6366274967909198,
                "children": [
                    {
                        "trait_id": "facet_adventurousness",
                        "name": "大胆性",
                        "category": "personality",
                        "percentile": 0.9981901927840793,
                        "raw_score": 0.7529343024622104
                    },
                    {
                        "trait_id": "facet_artistic_interests",
                        "name": "芸術的関心度",
                        "category": "personality",
                        "percentile": 0.7073374420663686,
                        "raw_score": 0.7005997807301084
                    },
                    {
                        "trait_id": "facet_emotionality",
                        "name": "情動性",
                        "category": "personality",
                        "percentile": 0.8542094229116612,
                        "raw_score": 0.6868881225778892
                    },
                    {
                        "trait_id": "facet_imagination",
                        "name": "想像力",
                        "category": "personality",
                        "percentile": 0.7074643650764891,
                        "raw_score": 0.7957977936179819
                    },
                    {
                        "trait_id": "facet_intellect",
                        "name": "思考力",
                        "category": "personality",
                        "percentile": 0.9405974711903582,
                        "raw_score": 0.6288782465744178
                    },
                    {
                        "trait_id": "facet_liberalism",
                        "name": "現状打破",
                        "category": "personality",
                        "percentile": 0.6175192875480546,
                        "raw_score": 0.5198758550004094
                    }
                ]
            },
            {
                "trait_id": "big5_conscientiousness",
                "name": "誠実性",
                "category": "personality",
                "percentile": 0.7114035257870547,
                "raw_score": 0.5036644840111758,
                "children": [
                    {
                        "trait_id": "facet_achievement_striving",
                        "name": "達成努力",
                        "category": "personality",
                        "percentile": 0.7089380410422457,
                        "raw_score": 0.5246126287128792
                    },
                    {
                        "trait_id": "facet_cautiousness",
                        "name": "注意深さ",
                        "category": "personality",
                        "percentile": 0.2935077448237956,
                        "raw_score": 0.4441212190244464
                    },
                    {
                        "trait_id": "facet_dutifulness",
                        "name": "忠実さ",
                        "category": "personality",
                        "percentile": 0.7071562102098636,
                        "raw_score": 0.6588761969118343
                    },
                    {
                        "trait_id": "facet_orderliness",
                        "name": "秩序性",
                        "category": "personality",
                        "percentile": 0.6613560681130859,
                        "raw_score": 0.339784572880177
                    },
                    {
                        "trait_id": "facet_self_discipline",
                        "name": "自制力",
                        "category": "personality",
                        "percentile": 0.7953946227788224,
                        "raw_score": 0.46500054742459673
                    },
                    {
                        "trait_id": "facet_self_efficacy",
                        "name": "自己効力感",
                        "category": "personality",
                        "percentile": 0.7983391040734811,
                        "raw_score": 0.6238956077575258
                    }
                ]
            },
            {
                "trait_id": "big5_extraversion",
                "name": "外向性",
                "category": "personality",
                "percentile": 0.7996466393286414,
                "raw_score": 0.5315625530453494,
                "children": [
                    {
                        "trait_id": "facet_activity_level",
                        "name": "活発度",
                        "category": "personality",
                        "percentile": 0.7346742603937307,
                        "raw_score": 0.47011052255541225
                    },
                    {
                        "trait_id": "facet_assertiveness",
                        "name": "自己主張",
                        "category": "personality",
                        "percentile": 0.9333374046096208,
                        "raw_score": 0.5745722488438827
                    },
                    {
                        "trait_id": "facet_cheerfulness",
                        "name": "明朗性",
                        "category": "personality",
                        "percentile": 0.6319224204004458,
                        "raw_score": 0.6272809594115524
                    },
                    {
                        "trait_id": "facet_excitement_seeking",
                        "name": "刺激希求性",
                        "category": "personality",
                        "percentile": 0.6651827542736166,
                        "raw_score": 0.6320203810129524
                    },
                    {
                        "trait_id": "facet_friendliness",
                        "name": "友好性",
                        "category": "personality",
                        "percentile": 0.5073361080050623,
                        "raw_score": 0.44150691438662637
                    },
                    {
                        "trait_id": "facet_gregariousness",
                        "name": "社交性",
                        "category": "personality",
                        "percentile": 0.13919335698938556,
                        "raw_score": 0.31619093133663667
                    }
                ]
            },
            {
                "trait_id": "big5_agreeableness",
                "name": "協調性",
                "category": "personality",
                "percentile": 0.4612155545663174,
                "raw_score": 0.5589201512407103,
                "children": [
                    {
                        "trait_id": "facet_altruism",
                        "name": "利他主義",
                        "category": "personality",
                        "percentile": 0.5423974862930838,
                        "raw_score": 0.6029064276999618
                    },
                    {
                        "trait_id": "facet_cooperation",
                        "name": "協働性",
                        "category": "personality",
                        "percentile": 0.43380172489031954,
                        "raw_score": 0.5390761239561068
                    },
                    {
                        "trait_id": "facet_modesty",
                        "name": "謙虚さ",
                        "category": "personality",
                        "percentile": 0.3267455086383102,
                        "raw_score": 0.4484982839864918
                    },
                    {
                        "trait_id": "facet_morality",
                        "name": "強硬さ",
                        "category": "personality",
                        "percentile": 0.46861305649712626,
                        "raw_score": 0.5604251823938305
                    },
                    {
                        "trait_id": "facet_sympathy",
                        "name": "共感度",
                        "category": "personality",
                        "percentile": 0.6830156737871942,
                        "raw_score": 0.4497851250131455
                    },
                    {
                        "trait_id": "facet_trust",
                        "name": "信用度",
                        "category": "personality",
                        "percentile": 0.537694348668368,
                        "raw_score": 0.6124409121585245
                    }
                ]
            },
            {
                "trait_id": "big5_neuroticism",
                "name": "感情起伏",
                "category": "personality",
                "percentile": 0.32544417194585307,
                "raw_score": 0.41836755192265085,
                "children": [
                    {
                        "trait_id": "facet_anger",
                        "name": "激情的",
                        "category": "personality",
                        "percentile": 0.11073690104843203,
                        "raw_score": 0.4673598811720875
                    },
                    {
                        "trait_id": "facet_anxiety",
                        "name": "心配性",
                        "category": "personality",
                        "percentile": 0.3190423109584325,
                        "raw_score": 0.6709220268136299
                    },
                    {
                        "trait_id": "facet_depression",
                        "name": "悲観的",
                        "category": "personality",
                        "percentile": 0.45296929466014385,
                        "raw_score": 0.6007673609575966
                    },
                    {
                        "trait_id": "facet_immoderation",
                        "name": "利己的",
                        "category": "personality",
                        "percentile": 0.2006298175517316,
                        "raw_score": 0.5446745081688514
                    },
                    {
                        "trait_id": "facet_self_consciousness",
                        "name": "自意識過剰",
                        "category": "personality",
                        "percentile": 0.47363893288317227,
                        "raw_score": 0.5270436811634699
                    },
                    {
                        "trait_id": "facet_vulnerability",
                        "name": "低ストレス耐性",
                        "category": "personality",
                        "percentile": 0.3152638111758499,
                        "raw_score": 0.4911461996348896
                    }
                ]
            }
        ],
        "needs": [
            {
                "trait_id": "need_challenge",
                "name": "挑戦",
                "category": "needs",
                "percentile": 0.25363632426283,
                "raw_score": 0.5747108710292333
            },
            {
                "trait_id": "need_closeness",
                "name": "親密",
                "category": "needs",
                "percentile": 0.43744328505251906,
                "raw_score": 0.748653999927135
            },
            {
                "trait_id": "need_curiosity",
                "name": "好奇心",
                "category": "needs",
                "percentile": 0.6421749551874797,
                "raw_score": 0.739735969788393
            },
            {
                "trait_id": "need_excitement",
                "name": "興奮",
                "category": "needs",
                "percentile": 0.554543459154039,
                "raw_score": 0.7032887381851525
            },
            {
                "trait_id": "need_harmony",
                "name": "調和",
                "category": "needs",
                "percentile": 0.3990731479366588,
                "raw_score": 0.811251796982803
            },
            {
                "trait_id": "need_ideal",
                "name": "理想",
                "category": "needs",
                "percentile": 0.4932134616141458,
                "raw_score": 0.7118060406151641
            },
            {
                "trait_id": "need_liberty",
                "name": "自由主義",
                "category": "needs",
                "percentile": 0.5843380015321672,
                "raw_score": 0.6391905702557645
            },
            {
                "trait_id": "need_love",
                "name": "社会性",
                "category": "needs",
                "percentile": 0.37836790578232254,
                "raw_score": 0.7003415281376754
            },
            {
                "trait_id": "need_practicality",
                "name": "実用主義",
                "category": "needs",
                "percentile": 0.31614218265263017,
                "raw_score": 0.698177471775074
            },
            {
                "trait_id": "need_self_expression",
                "name": "自己表現",
                "category": "needs",
                "percentile": 0.33840633130120734,
                "raw_score": 0.6301237866770592
            },
            {
                "trait_id": "need_stability",
                "name": "安定性",
                "category": "needs",
                "percentile": 0.8916055845759738,
                "raw_score": 0.782960436844422
            },
            {
                "trait_id": "need_structure",
                "name": "仕組",
                "category": "needs",
                "percentile": 0.5737638943953252,
                "raw_score": 0.6223579752192707
            }
        ],
        "values": [
            {
                "trait_id": "value_conservation",
                "name": "現状維持",
                "category": "values",
                "percentile": 0.03505744318699061,
                "raw_score": 0.6635170466519754
            },
            {
                "trait_id": "value_openness_to_change",
                "name": "変化許容性",
                "category": "values",
                "percentile": 0.7615579332324374,
                "raw_score": 0.7675695783749604
            },
            {
                "trait_id": "value_hedonism",
                "name": "快楽主義",
                "category": "values",
                "percentile": 0.2119481346261512,
                "raw_score": 0.8117165153378096
            },
            {
                "trait_id": "value_self_enhancement",
                "name": "自己増進",
                "category": "values",
                "percentile": 0.3797321878082042,
                "raw_score": 0.7006538899352697
            },
            {
                "trait_id": "value_self_transcendence",
                "name": "自己超越",
                "category": "values",
                "percentile": 0.09809543764558198,
                "raw_score": 0.7179373847036687
            }
        ],
        "consumption_preferences": [
            {
                "consumption_preference_category_id": "consumption_preferences_shopping",
                "name": "購入傾向",
                "consumption_preferences": [
                    {
                        "consumption_preference_id": "consumption_preferences_automobile_ownership_cost",
                        "name": "自動車を買うときは維持費用を重視する傾向があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_automobile_safety",
                        "name": "自動車を買うときは安全性を優先する傾向があります",
                        "score": 0.5
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_clothes_quality",
                        "name": "衣服を買うときは品質を優先する傾向があります",
                        "score": 1
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_clothes_style",
                        "name": "衣服を買うときはスタイルを優先する傾向があります",
                        "score": 1
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_clothes_comfort",
                        "name": "衣服を買うときは着心地を優先する傾向があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_influence_brand_name",
                        "name": "商品を購入するときはブランド名に左右される傾向があります",
                        "score": 1
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_influence_utility",
                        "name": "商品を購入するときは実用性を重視する傾向があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_influence_online_ads",
                        "name": "商品を購入するときはオンライン広告の影響を受ける傾向があります",
                        "score": 1
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_influence_social_media",
                        "name": "商品を購入するときはソーシャル・メディアの影響を受ける傾向があります",
                        "score": 1
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_influence_family_members",
                        "name": "商品を購入するときは家族の影響を受ける傾向があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_spur_of_moment",
                        "name": "衝動買いに走る傾向があります",
                        "score": 0.5
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_credit_card_payment",
                        "name": "買い物にクレジット・カードを使う傾向があります",
                        "score": 1
                    }
                ]
            },
            {
                "consumption_preference_category_id": "consumption_preferences_health_and_activity",
                "name": "健康活動傾向",
                "consumption_preferences": [
                    {
                        "consumption_preference_id": "consumption_preferences_eat_out",
                        "name": "頻繁に外食する傾向があります",
                        "score": 1
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_gym_membership",
                        "name": "スポーツ・ジムの会員である可能性があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_outdoor",
                        "name": "アウトドア活動を好む傾向があります",
                        "score": 0.5
                    }
                ]
            },
            {
                "consumption_preference_category_id": "consumption_preferences_environmental_concern",
                "name": "環境懸念傾向",
                "consumption_preferences": [
                    {
                        "consumption_preference_id": "consumption_preferences_concerned_environment",
                        "name": "環境問題について心配する傾向があります",
                        "score": 0.5
                    }
                ]
            },
            {
                "consumption_preference_category_id": "consumption_preferences_entrepreneurship",
                "name": "起業家精神",
                "consumption_preferences": [
                    {
                        "consumption_preference_id": "consumption_preferences_start_business",
                        "name": "数年後に起業することを考える傾向があります",
                        "score": 1
                    }
                ]
            },
            {
                "consumption_preference_category_id": "consumption_preferences_movie",
                "name": "映画の好み",
                "consumption_preferences": [
                    {
                        "consumption_preference_id": "consumption_preferences_movie_romance",
                        "name": "ロマンス映画を好む傾向があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_movie_adventure",
                        "name": "アドベンチャー映画を好む傾向があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_movie_horror",
                        "name": "ホラー映画を好む傾向があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_movie_musical",
                        "name": "ミュージカル映画を好む傾向があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_movie_historical",
                        "name": "歴史映画を好む傾向があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_movie_science_fiction",
                        "name": "SF 映画を好む傾向があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_movie_war",
                        "name": "戦争映画を好む傾向があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_movie_drama",
                        "name": "ドラマ映画を好む傾向があります",
                        "score": 1
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_movie_action",
                        "name": "アクション映画を好む傾向があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_movie_documentary",
                        "name": "ドキュメンタリー映画を好む傾向があります",
                        "score": 1
                    }
                ]
            },
            {
                "consumption_preference_category_id": "consumption_preferences_music",
                "name": "音楽の好み",
                "consumption_preferences": [
                    {
                        "consumption_preference_id": "consumption_preferences_music_rap",
                        "name": "ラップ・ミュージックを好む傾向があります",
                        "score": 1
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_music_country",
                        "name": "カントリー・ミュージックを好む傾向があります",
                        "score": 0.5
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_music_r_b",
                        "name": "R&B ミュージックを好む傾向があります",
                        "score": 1
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_music_hip_hop",
                        "name": "ヒップ・ホップ・ミュージックを好む傾向があります",
                        "score": 1
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_music_live_event",
                        "name": "ライブの音楽イベントに出席する可能性があります",
                        "score": 1
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_music_playing",
                        "name": "楽器演奏の経験がある可能性があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_music_latin",
                        "name": "ラテン音楽を好む傾向があります",
                        "score": 1
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_music_rock",
                        "name": "ロック・ミュージックを好む傾向があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_music_classical",
                        "name": "クラシック音楽を好む傾向があります",
                        "score": 0.5
                    }
                ]
            },
            {
                "consumption_preference_category_id": "consumption_preferences_reading",
                "name": "読書の好み",
                "consumption_preferences": [
                    {
                        "consumption_preference_id": "consumption_preferences_read_frequency",
                        "name": "よく本を読む傾向があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_books_entertainment_magazines",
                        "name": "娯楽雑誌を読む傾向があります",
                        "score": 0
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_books_non_fiction",
                        "name": "ノンフィクション作品を読む傾向があります",
                        "score": 1
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_books_financial_investing",
                        "name": "投資関連書籍を読む傾向があります",
                        "score": 1
                    },
                    {
                        "consumption_preference_id": "consumption_preferences_books_autobiographies",
                        "name": "自伝や伝記を読む傾向があります",
                        "score": 1
                    }
                ]
            },
            {
                "consumption_preference_category_id": "consumption_preferences_volunteering",
                "name": "ボランティア精神",
                "consumption_preferences": [
                    {
                        "consumption_preference_id": "consumption_preferences_volunteer",
                        "name": "社会貢献のためにボランティア活動をする傾向があります",
                        "score": 1
                    }
                ]
            }
        ],
        "warnings": [
            {
                "warning_id": "WORD_COUNT_MESSAGE",
                "message": "入力されたのは 370 語でした。 統計的に意味のある概算値を計算するためには最低 600 語、1,200 語以上が好ましい語数です"
            }
        ]
    },
    "weather": {
        "metadata": {
            "language": "ja-JP",
            "transaction_id": "1503896712899:-19786960",
            "version": "1",
            "latitude": 36.19,
            "longitude": 140.28,
            "units": "m",
            "expire_time_gmt": 1503897856,
            "status_code": 200
        },
        "forecasts": [
            {
                "class": "fod_long_range_daily",
                "expire_time_gmt": 1503897856,
                "fcst_valid": 1503871200,
                "fcst_valid_local": "2017-08-28T07:00:00+0900",
                "num": 1,
                "max_temp": 30,
                "min_temp": 23,
                "torcon": null,
                "stormcon": null,
                "blurb": null,
                "blurb_author": null,
                "lunar_phase_day": 6,
                "dow": "月曜",
                "lunar_phase": "三日月",
                "lunar_phase_code": "WXC",
                "sunrise": "2017-08-28T05:06:52+0900",
                "sunset": "2017-08-28T18:12:45+0900",
                "moonrise": "2017-08-28T11:12:34+0900",
                "moonset": "2017-08-28T22:09:54+0900",
                "qualifier_code": null,
                "qualifier": null,
                "narrative": "曇り。 最高気温29～31℃、最低気温22～24℃。",
                "qpf": 0,
                "snow_qpf": 0,
                "snow_range": "",
                "snow_phrase": "",
                "snow_code": "",
                "night": {
                    "fcst_valid": 1503914400,
                    "fcst_valid_local": "2017-08-28T19:00:00+0900",
                    "day_ind": "N",
                    "thunder_enum": 0,
                    "daypart_name": "今夜",
                    "long_daypart_name": "月曜夜",
                    "alt_daypart_name": "今夜",
                    "thunder_enum_phrase": null,
                    "num": 2,
                    "temp": 23,
                    "hi": 27,
                    "wc": 24,
                    "pop": 10,
                    "icon_extd": 2700,
                    "icon_code": 27,
                    "wxman": "wx1200",
                    "phrase_12char": "",
                    "phrase_22char": "",
                    "phrase_32char": "大体曇り",
                    "subphrase_pt1": "",
                    "subphrase_pt2": "",
                    "subphrase_pt3": "",
                    "precip_type": "rain",
                    "rh": 92,
                    "wspd": 8,
                    "wdir": 165,
                    "wdir_cardinal": "南南東",
                    "clds": 67,
                    "pop_phrase": "",
                    "temp_phrase": "最低気温23℃。",
                    "accumulation_phrase": "",
                    "wind_phrase": "南南東の風は変わりやすい。",
                    "shortcast": "大体曇り。",
                    "narrative": "大体曇り。 最低気温23℃。 南南東の風は変わりやすい。",
                    "qpf": 0,
                    "snow_qpf": 0,
                    "snow_range": "",
                    "snow_phrase": "",
                    "snow_code": "",
                    "vocal_key": "D2:DA02:X2800280021:S270021:TL23:W9902",
                    "qualifier_code": null,
                    "qualifier": null,
                    "uv_index_raw": 0,
                    "uv_index": 0,
                    "uv_warning": 0,
                    "uv_desc": "弱い",
                    "golf_index": null,
                    "golf_category": ""
                },
                "day": {
                    "fcst_valid": 1503871200,
                    "fcst_valid_local": "2017-08-28T07:00:00+0900",
                    "day_ind": "D",
                    "thunder_enum": 0,
                    "daypart_name": "今日",
                    "long_daypart_name": "月曜",
                    "alt_daypart_name": "午後",
                    "thunder_enum_phrase": null,
                    "num": 1,
                    "temp": 30,
                    "hi": 33,
                    "wc": 26,
                    "pop": 0,
                    "icon_extd": 2600,
                    "icon_code": 26,
                    "wxman": "wx1200",
                    "phrase_12char": "",
                    "phrase_22char": "",
                    "phrase_32char": "曇り",
                    "subphrase_pt1": "",
                    "subphrase_pt2": "",
                    "subphrase_pt3": "",
                    "precip_type": "rain",
                    "rh": 66,
                    "wspd": 8,
                    "wdir": 93,
                    "wdir_cardinal": "東",
                    "clds": 71,
                    "pop_phrase": "",
                    "temp_phrase": "最高気温30℃。",
                    "accumulation_phrase": "",
                    "wind_phrase": "東の風は変わりやすい。",
                    "shortcast": "曇り。",
                    "narrative": "曇り。 暑い。 最高気温30℃。 東の風は変わりやすい。",
                    "qpf": 0,
                    "snow_qpf": 0,
                    "snow_range": "",
                    "snow_phrase": "",
                    "snow_code": "",
                    "vocal_key": "D1:DA18:X2600260011:S260011:Q604:TH30:W9902",
                    "qualifier_code": null,
                    "qualifier": "暑い。",
                    "uv_index_raw": 3.59,
                    "uv_index": 4,
                    "uv_warning": 0,
                    "uv_desc": "中程度",
                    "golf_index": 8,
                    "golf_category": "とてもよい"
                }
            },
            {
                "class": "fod_long_range_daily",
                "expire_time_gmt": 1503897856,
                "fcst_valid": 1503957600,
                "fcst_valid_local": "2017-08-29T07:00:00+0900",
                "num": 2,
                "max_temp": 32,
                "min_temp": 25,
                "torcon": null,
                "stormcon": null,
                "blurb": null,
                "blurb_author": null,
                "lunar_phase_day": 7,
                "dow": "火曜",
                "lunar_phase": "上弦",
                "lunar_phase_code": "FQ",
                "sunrise": "2017-08-29T05:07:39+0900",
                "sunset": "2017-08-29T18:11:22+0900",
                "moonrise": "2017-08-29T12:07:42+0900",
                "moonset": "2017-08-29T22:47:43+0900",
                "qualifier_code": null,
                "qualifier": null,
                "narrative": "午前に曇りのち午後に晴れ。 最高気温31～33℃、最低気温24～26℃。",
                "qpf": 4.19,
                "snow_qpf": 0,
                "snow_range": "",
                "snow_phrase": "",
                "snow_code": "",
                "night": {
                    "fcst_valid": 1504000800,
                    "fcst_valid_local": "2017-08-29T19:00:00+0900",
                    "day_ind": "N",
                    "thunder_enum": 2,
                    "daypart_name": "明日の夜",
                    "long_daypart_name": "火曜夜",
                    "alt_daypart_name": "火曜夜",
                    "thunder_enum_phrase": null,
                    "num": 4,
                    "temp": 25,
                    "hi": 31,
                    "wc": 25,
                    "pop": 60,
                    "icon_extd": 3809,
                    "icon_code": 47,
                    "wxman": "wx2000",
                    "phrase_12char": "",
                    "phrase_22char": "",
                    "phrase_32char": "断続的な雷雨",
                    "subphrase_pt1": "",
                    "subphrase_pt2": "",
                    "subphrase_pt3": "",
                    "precip_type": "rain",
                    "rh": 88,
                    "wspd": 12,
                    "wdir": 198,
                    "wdir_cardinal": "南南西",
                    "clds": 68,
                    "pop_phrase": "降雨確率は60%。",
                    "temp_phrase": "最低気温25℃。",
                    "accumulation_phrase": "",
                    "wind_phrase": "南南西の風10～15キロメートル毎時。",
                    "shortcast": "所により雷雨。",
                    "narrative": "所により雷雨。 蒸し暑い。 最低気温25℃。 南南西の風10～15キロメートル毎時。 降雨確率は60%。",
                    "qpf": 4.19,
                    "snow_qpf": 0,
                    "snow_range": "",
                    "snow_phrase": "",
                    "snow_code": "",
                    "vocal_key": "D4:DA09:X3800380041:S380941:Q808:TL25:W09R02:P9061",
                    "qualifier_code": null,
                    "qualifier": "蒸し暑い。",
                    "uv_index_raw": 0,
                    "uv_index": 0,
                    "uv_warning": 0,
                    "uv_desc": "弱い",
                    "golf_index": null,
                    "golf_category": ""
                },
                "day": {
                    "fcst_valid": 1503957600,
                    "fcst_valid_local": "2017-08-29T07:00:00+0900",
                    "day_ind": "D",
                    "thunder_enum": 0,
                    "daypart_name": "明日",
                    "long_daypart_name": "火曜",
                    "alt_daypart_name": "火曜",
                    "thunder_enum_phrase": null,
                    "num": 3,
                    "temp": 32,
                    "hi": 37,
                    "wc": 26,
                    "pop": 20,
                    "icon_extd": 9003,
                    "icon_code": 30,
                    "wxman": "wx1130",
                    "phrase_12char": "",
                    "phrase_22char": "",
                    "phrase_32char": "午前、曇り／午後、晴れ",
                    "subphrase_pt1": "",
                    "subphrase_pt2": "",
                    "subphrase_pt3": "",
                    "precip_type": "rain",
                    "rh": 69,
                    "wspd": 17,
                    "wdir": 211,
                    "wdir_cardinal": "南南西",
                    "clds": 68,
                    "pop_phrase": "",
                    "temp_phrase": "最高気温32℃。",
                    "accumulation_phrase": "",
                    "wind_phrase": "南南西の風15～25キロメートル毎時。",
                    "shortcast": "午前に曇りのち午後に晴れ。",
                    "narrative": "午前に曇りのち午後に晴れ。 暑い。 最高気温32℃。 南南西の風15～25キロメートル毎時。",
                    "qpf": 0,
                    "snow_qpf": 0,
                    "snow_range": "",
                    "snow_phrase": "",
                    "snow_code": "",
                    "vocal_key": "D3:DA08:X2600300031:S900331:Q604:TH32:W09R03",
                    "qualifier_code": null,
                    "qualifier": "暑い。",
                    "uv_index_raw": 6.05,
                    "uv_index": 6,
                    "uv_warning": 0,
                    "uv_desc": "強い",
                    "golf_index": 8,
                    "golf_category": "とてもよい"
                }
            },
            {
                "class": "fod_long_range_daily",
                "expire_time_gmt": 1503897856,
                "fcst_valid": 1504044000,
                "fcst_valid_local": "2017-08-30T07:00:00+0900",
                "num": 3,
                "max_temp": 26,
                "min_temp": 21,
                "torcon": null,
                "stormcon": null,
                "blurb": null,
                "blurb_author": null,
                "lunar_phase_day": 8,
                "dow": "水曜",
                "lunar_phase": "凸型月",
                "lunar_phase_code": "WXG",
                "sunrise": "2017-08-30T05:08:25+0900",
                "sunset": "2017-08-30T18:09:57+0900",
                "moonrise": "2017-08-30T13:01:03+0900",
                "moonset": "2017-08-30T23:28:16+0900",
                "qualifier_code": null,
                "qualifier": null,
                "narrative": "午前、にわか雨。 最高気温25～27℃、最低気温20～22℃。",
                "qpf": 9.81,
                "snow_qpf": 0,
                "snow_range": "",
                "snow_phrase": "",
                "snow_code": "",
                "night": {
                    "fcst_valid": 1504087200,
                    "fcst_valid_local": "2017-08-30T19:00:00+0900",
                    "day_ind": "N",
                    "thunder_enum": 0,
                    "daypart_name": "水曜夜",
                    "long_daypart_name": "水曜夜",
                    "alt_daypart_name": "水曜夜",
                    "thunder_enum_phrase": null,
                    "num": 6,
                    "temp": 21,
                    "hi": 25,
                    "wc": 22,
                    "pop": 90,
                    "icon_extd": 1200,
                    "icon_code": 12,
                    "wxman": "wx2500",
                    "phrase_12char": "",
                    "phrase_22char": "",
                    "phrase_32char": "雨",
                    "subphrase_pt1": "",
                    "subphrase_pt2": "",
                    "subphrase_pt3": "",
                    "precip_type": "rain",
                    "rh": 90,
                    "wspd": 13,
                    "wdir": 42,
                    "wdir_cardinal": "北東",
                    "clds": 95,
                    "pop_phrase": "降雨確率は90%。",
                    "temp_phrase": "最低気温21℃。",
                    "accumulation_phrase": "約6 ミリメートルの雨。",
                    "wind_phrase": "北東の風10～15キロメートル毎時。",
                    "shortcast": "雨。",
                    "narrative": "雨。 最低気温21℃。 北東の風10～15キロメートル毎時。 降雨確率は90%。 約6 ミリメートルの雨。",
                    "qpf": 8.49,
                    "snow_qpf": 0,
                    "snow_range": "",
                    "snow_phrase": "",
                    "snow_code": "",
                    "vocal_key": "D6:DA11:X1200110041:S120041:TL21:W02R02:P9091:A6021",
                    "qualifier_code": null,
                    "qualifier": null,
                    "uv_index_raw": 0,
                    "uv_index": 0,
                    "uv_warning": 0,
                    "uv_desc": "弱い",
                    "golf_index": null,
                    "golf_category": ""
                },
                "day": {
                    "fcst_valid": 1504044000,
                    "fcst_valid_local": "2017-08-30T07:00:00+0900",
                    "day_ind": "D",
                    "thunder_enum": 0,
                    "daypart_name": "水曜",
                    "long_daypart_name": "水曜",
                    "alt_daypart_name": "水曜",
                    "thunder_enum_phrase": null,
                    "num": 5,
                    "temp": 26,
                    "hi": 28,
                    "wc": 24,
                    "pop": 60,
                    "icon_extd": 6103,
                    "icon_code": 39,
                    "wxman": "wx2500",
                    "phrase_12char": "",
                    "phrase_22char": "",
                    "phrase_32char": "午前、にわか雨",
                    "subphrase_pt1": "",
                    "subphrase_pt2": "",
                    "subphrase_pt3": "",
                    "precip_type": "rain",
                    "rh": 77,
                    "wspd": 18,
                    "wdir": 56,
                    "wdir_cardinal": "北東",
                    "clds": 90,
                    "pop_phrase": "降雨確率は60%。",
                    "temp_phrase": "最高気温26℃。",
                    "accumulation_phrase": "",
                    "wind_phrase": "北東の風15～25キロメートル毎時。",
                    "shortcast": "午前、にわか雨。",
                    "narrative": "午前、にわか雨。 最高気温26℃。 北東の風15～25キロメートル毎時。 降雨確率は60%。",
                    "qpf": 1.32,
                    "snow_qpf": 0,
                    "snow_range": "",
                    "snow_phrase": "",
                    "snow_code": "",
                    "vocal_key": "D5:DA10:X1100260031:S610331:TH26:W02R03:P9061",
                    "qualifier_code": null,
                    "qualifier": null,
                    "uv_index_raw": 3.79,
                    "uv_index": 4,
                    "uv_warning": 0,
                    "uv_desc": "中程度",
                    "golf_index": 8,
                    "golf_category": "とてもよい"
                }
            },
            {
                "class": "fod_long_range_daily",
                "expire_time_gmt": 1503897856,
                "fcst_valid": 1504130400,
                "fcst_valid_local": "2017-08-31T07:00:00+0900",
                "num": 4,
                "max_temp": 25,
                "min_temp": 20,
                "torcon": null,
                "stormcon": null,
                "blurb": null,
                "blurb_author": null,
                "lunar_phase_day": 9,
                "dow": "木曜",
                "lunar_phase": "凸型月",
                "lunar_phase_code": "WXG",
                "sunrise": "2017-08-31T05:09:11+0900",
                "sunset": "2017-08-31T18:08:32+0900",
                "moonrise": "2017-08-31T13:52:36+0900",
                "moonset": "",
                "qualifier_code": null,
                "qualifier": null,
                "narrative": "午前、にわか雨。 最高気温24～26℃、最低気温19～21℃。",
                "qpf": 0.2,
                "snow_qpf": 0,
                "snow_range": "",
                "snow_phrase": "",
                "snow_code": "",
                "night": {
                    "fcst_valid": 1504173600,
                    "fcst_valid_local": "2017-08-31T19:00:00+0900",
                    "day_ind": "N",
                    "thunder_enum": 0,
                    "daypart_name": "木曜夜",
                    "long_daypart_name": "木曜夜",
                    "alt_daypart_name": "木曜夜",
                    "thunder_enum_phrase": null,
                    "num": 8,
                    "temp": 20,
                    "hi": 23,
                    "wc": 20,
                    "pop": 20,
                    "icon_extd": 2900,
                    "icon_code": 29,
                    "wxman": "wx1600",
                    "phrase_12char": "",
                    "phrase_22char": "",
                    "phrase_32char": "所により曇り",
                    "subphrase_pt1": "",
                    "subphrase_pt2": "",
                    "subphrase_pt3": "",
                    "precip_type": "rain",
                    "rh": 76,
                    "wspd": 15,
                    "wdir": 17,
                    "wdir_cardinal": "北北東",
                    "clds": 55,
                    "pop_phrase": "",
                    "temp_phrase": "最低気温20℃。",
                    "accumulation_phrase": "",
                    "wind_phrase": "北北東の風10～15キロメートル毎時。",
                    "shortcast": "所により曇り。",
                    "narrative": "所により曇り。 最低気温20℃。 北北東の風10～15キロメートル毎時。",
                    "qpf": 0,
                    "snow_qpf": 0,
                    "snow_range": "",
                    "snow_phrase": "",
                    "snow_code": "",
                    "vocal_key": "D8:DA13:X3000300041:S290041:TL20:W01R02",
                    "qualifier_code": null,
                    "qualifier": null,
                    "uv_index_raw": 0,
                    "uv_index": 0,
                    "uv_warning": 0,
                    "uv_desc": "弱い",
                    "golf_index": null,
                    "golf_category": ""
                },
                "day": {
                    "fcst_valid": 1504130400,
                    "fcst_valid_local": "2017-08-31T07:00:00+0900",
                    "day_ind": "D",
                    "thunder_enum": 0,
                    "daypart_name": "木曜",
                    "long_daypart_name": "木曜",
                    "alt_daypart_name": "木曜",
                    "thunder_enum_phrase": null,
                    "num": 7,
                    "temp": 25,
                    "hi": 27,
                    "wc": 22,
                    "pop": 30,
                    "icon_extd": 6103,
                    "icon_code": 39,
                    "wxman": "wx2500",
                    "phrase_12char": "",
                    "phrase_22char": "",
                    "phrase_32char": "午前、にわか雨",
                    "subphrase_pt1": "",
                    "subphrase_pt2": "",
                    "subphrase_pt3": "",
                    "precip_type": "rain",
                    "rh": 74,
                    "wspd": 19,
                    "wdir": 47,
                    "wdir_cardinal": "北東",
                    "clds": 75,
                    "pop_phrase": "降雨確率は30%。",
                    "temp_phrase": "最高気温25℃。",
                    "accumulation_phrase": "",
                    "wind_phrase": "北東の風15～25キロメートル毎時。",
                    "shortcast": "午前、にわか雨。",
                    "narrative": "午前、にわか雨。 最高気温25℃。 北東の風15～25キロメートル毎時。 降雨確率は30%。",
                    "qpf": 0.2,
                    "snow_qpf": 0,
                    "snow_range": "",
                    "snow_phrase": "",
                    "snow_code": "",
                    "vocal_key": "D7:DA12:X4600300031:S610331:TH25:W02R03:P9031",
                    "qualifier_code": null,
                    "qualifier": null,
                    "uv_index_raw": 5.46,
                    "uv_index": 5,
                    "uv_warning": 0,
                    "uv_desc": "中程度",
                    "golf_index": 8,
                    "golf_category": "とてもよい"
                }
            }
        ]
    }
};

const a = {
    "area": {
        "lat": "36.1023887",
        "lon": "139.9701535",
        "radius": "200000"
    },
    "insights": {
        "all_data": "{\"personality\": [{\"trait_id\":\"big5_openness\",\"category\":\"personality\",\"percentile\":0.9766320894841127,\"children\":[{\"trait_id\":\"facet_adventurousness\",\"category\":\"personality\",\"percentile\":0.9896067631592123}]}]}"
    },
    "weather": {
        "pop": "20",
        "wspd": "7"
    }
};

const insights = {
    "all_data": {
        "personality": [{
            "trait_id": "big5_openness",
            "category": "personality",
            "percentile": 0.9766320894841127,
            "children": [{
                "trait_id": "facet_adventurousness",
                "category": "personality",
                "percentile": 0.9896067631592123
            }]
        }]
    }
};


axios.post('https://oikaze-api.au-syd.mybluemix.net/v2/OikazeSagashi', {
    "headers": {
        "Content-Type": "application/json"
    },
    area: a.area,
    insights: JSON.stringify(a.insights),
    //insights: a.insights,
    weather: a.weather,
    "timeout": 10000
})
    .then((value) => {
        console.log(JSON.stringify(value.data, undefined, 2));
    })
    .catch((error) => {
        console.log('error:', error);
    });
