export const effects = [
  { id: 0, name: '疾病退散' },
  { id: 1, name: '体力減退' },
  { id: 2, name: 'マジカ減退' },
  { id: 3, name: 'マジカ回復減退' },
  { id: 4, name: 'スタミナ減退' },
  { id: 5, name: 'スタミナ減退回復' },
  { id: 6, name: '恐怖' },
  { id: 7, name: '変性上昇' },
  { id: 8, name: '交渉上昇' },
  { id: 9, name: '防御上昇' },
  { id: 10, name: '持ち運び重量上昇' },
  { id: 11, name: '召喚上昇' },
  { id: 12, name: '破壊上昇' },
  { id: 13, name: '付呪上昇' },
  { id: 14, name: '体力上昇' },
  { id: 15, name: '重装上昇' },
  { id: 16, name: '幻惑上昇' },
  { id: 17, name: '軽装上昇' },
  { id: 18, name: '開錠術上昇' },
  { id: 19, name: 'マジカ上昇' },
  { id: 20, name: '弓術上昇' },
  { id: 21, name: '片手武器上昇' },
  { id: 22, name: 'スリ上昇' },
  { id: 23, name: '回復上昇' },
  { id: 24, name: '鍛治上昇' },
  { id: 25, name: '隠密上昇' },
  { id: 26, name: 'スタミナ上昇' },
  { id: 27, name: '両手武器上昇' },
  { id: 28, name: '錯乱' },
  { id: 29, name: '透明化' },
  { id: 30, name: '体力減退(残存)' },
  { id: 31, name: 'マジカ減退(残存)' },
  { id: 32, name: 'スタミナ減退(残存)' },
  { id: 33, name: '麻痺' },
  { id: 34, name: '体力破壊' },
  { id: 35, name: 'マジカ破壊' },
  { id: 36, name: 'スタミナ破壊' },
  { id: 37, name: '体力を治癒' },
  { id: 38, name: 'マジカを回復' },
  { id: 39, name: 'スタミナを回復' },
  { id: 40, name: '炎耐性' },
  { id: 41, name: '冷気耐性' },
  { id: 42, name: '魔法耐性' },
  { id: 43, name: '毒耐性' },
  { id: 44, name: '雷撃耐性' },
  { id: 45, name: '体力治癒' },
  { id: 46, name: 'マジカ回復' },
  { id: 47, name: 'スタミナ回復' },
  { id: 48, name: '減速' },
  { id: 49, name: '水中呼吸' },
  { id: 50, name: '炎耐性ダウン' },
  { id: 51, name: '冷気耐性ダウン' },
  { id: 52, name: '魔法耐性ダウン' },
  { id: 53, name: '毒耐性ダウン' },
  { id: 54, name: '雷撃耐性ダウン' },
]

export const materials = [
  { id: 0, name: 'アビシアン・ロングフィン', effectIds: [51, 25, 53, 23] },
  { id: 1, name: 'イワムシクイの卵', effectIds: [45, 21, 4, 52] },
  { id: 2, name: 'ウィスプ・ラッピング', effectIds: [47, 12, 10, 42] },
  { id: 3, name: 'エクトプラズム', effectIds: [46, 12, 19, 1] },
  { id: 4, name: 'エルフイヤー・リーフ', effectIds: [46, 20, 51, 40] },
  { id: 5, name: 'オレンジ・ダートウィング', effectIds: [47, 35, 22, 30] },
  { id: 6, name: 'カニスの根', effectIds: [4, 21, 20, 33] },
  { id: 7, name: 'クマの爪', effectIds: [47, 14, 21, 3] },
  { id: 8, name: 'クモの卵', effectIds: [4, 3, 18, 20] },
  { id: 9, name: 'グラス・ポッド', effectIds: [43, 35, 7, 46] },
  { id: 10, name: 'クリープ・クラスター', effectIds: [46, 5, 10, 52] },
  { id: 11, name: 'サーベルキャットの牙', effectIds: [47, 15, 24, 53] },
  { id: 12, name: 'サーベルキャットの目', effectIds: [47, 34, 2, 45] },
  { id: 13, name: 'シッスルの枝', effectIds: [41, 36, 43, 15] },
  { id: 14, name: 'シャウラスの卵', effectIds: [53, 26, 2, 29] },
  { id: 15, name: 'ジャズベイ・ブドウ', effectIds: [52, 19, 38, 34] },
  { id: 16, name: 'ジュニパーベリー', effectIds: [50, 20, 37, 5] },
  { id: 17, name: 'シルバーサイド・パーチ', effectIds: [47, 5, 34, 41] },
  { id: 18, name: 'シロディールのスペードテール', effectIds: [4, 23, 6, 34] },
  { id: 19, name: 'スキーヴァーの尻尾', effectIds: [5, 34, 1, 17] },
  { id: 20, name: 'スギタケ', effectIds: [52, 16, 39, 10] },
  { id: 21, name: 'スノーベリー', effectIds: [40, 13, 41, 44] },
  { id: 22, name: 'スプリガンの樹液', effectIds: [3, 13, 24, 7] },
  { id: 23, name: 'スローターフィッシュの卵', effectIds: [43, 22, 30, 26] },
  { id: 24, name: 'スローターフィッシュの鱗', effectIds: [41, 30, 15, 9] },
  { id: 25, name: 'ツンドラの綿', effectIds: [42, 19, 9, 8] },
  { id: 26, name: 'デイドラの心臓', effectIds: [45, 5, 2, 6] },
  { id: 27, name: 'デスベル', effectIds: [1, 36, 48, 53] },
  { id: 28, name: 'トロールの脂肪', effectIds: [43, 27, 28, 1] },
  { id: 29, name: 'ドワーフのオイル', effectIds: [52, 16, 38, 46] },
  { id: 30, name: 'ナミラキノコ', effectIds: [2, 18, 6, 37] },
  { id: 31, name: 'ニルンルート', effectIds: [1, 4, 29, 42] },
  { id: 32, name: 'ニンニク', effectIds: [43, 26, 38, 37] },
  { id: 33, name: 'ノルド・フジツボ', effectIds: [2, 49, 37, 22] },
  { id: 34, name: 'パール', effectIds: [47, 9, 46, 44] },
  { id: 35, name: 'パイン・スラッシュの卵', effectIds: [47, 18, 53, 44] },
  { id: 36, name: 'ハグレイヴンの羽', effectIds: [2, 11, 28, 54] },
  { id: 37, name: 'ハグレイヴンの爪', effectIds: [42, 31, 13, 8] },
  { id: 38, name: 'ハチ', effectIds: [47, 36, 39, 54] },
  { id: 39, name: 'ハチの巣', effectIds: [47, 9, 17, 36] },
  { id: 40, name: 'ハチの巣の殻', effectIds: [43, 17, 25, 12] },
  { id: 41, name: 'ヒストカープ', effectIds: [47, 19, 5, 49] },
  { id: 42, name: 'ファルメルの耳', effectIds: [1, 28, 43, 18] },
  { id: 43, name: 'ブライア・ハート', effectIds: [46, 9, 33, 19] },
  { id: 44, name: 'ブリスターワート', effectIds: [4, 28, 45, 24] },
  { id: 45, name: 'ブルー・ダートウィング', effectIds: [44, 22, 45, 6] },
  { id: 46, name: 'フロスト・ミリアム', effectIds: [41, 25, 35, 5] },
  { id: 47, name: 'ベニテングタケ', effectIds: [40, 27, 28, 39] },
  { id: 48, name: 'ベラドンナ', effectIds: [1, 3, 32, 12] },
  { id: 49, name: 'ホタルの腹部', effectIds: [47, 31, 52, 26] },
  { id: 50, name: 'マッドクラブの殻', effectIds: [47, 0, 43, 40] },
  { id: 51, name: 'マンモスの牙粉', effectIds: [47, 25, 50, 6] },
  { id: 52, name: 'ムーンシュガー', effectIds: [50, 41, 46, 38] },
  { id: 53, name: 'モラ・タピネラ', effectIds: [46, 30, 39, 16] },
  { id: 54, name: 'ラベンダー', effectIds: [42, 26, 35, 11] },
  { id: 55, name: 'リバー・ベティ', effectIds: [1, 7, 48, 10] },
  { id: 56, name: 'リュウノシタ', effectIds: [40, 8, 16, 27] },
  { id: 57, name: 'ルナ・モスの羽', effectIds: [2, 17, 37, 29] },
  { id: 58, name: '炎の塩鉱石', effectIds: [51, 40, 46, 38] },
  { id: 59, name: '塩', effectIds: [52, 23, 48, 38] },
  { id: 60, name: '奇妙な心臓', effectIds: [1, 2, 3, 28] },
  { id: 61, name: '奇妙な肉', effectIds: [1, 33, 46, 25] },
  { id: 62, name: '吸血鬼の遺灰', effectIds: [29, 46, 37, 0] },
  { id: 63, name: '巨人のつま先', effectIds: [4, 14, 10, 5] },
  { id: 64, name: '巨大地衣類', effectIds: [54, 34, 53, 46] },
  { id: 65, name: '虚無の塩', effectIds: [54, 42, 1, 19] },
  { id: 66, name: '鶏の卵', effectIds: [42, 3, 49, 32] },
  { id: 67, name: '光るキノコ', effectIds: [44, 12, 24, 14] },
  { id: 68, name: '骨の粉', effectIds: [4, 40, 11, 36] },
  { id: 69, name: '山の紫の花', effectIds: [47, 25, 31, 41] },
  { id: 70, name: '山の青い花', effectIds: [45, 11, 14, 3] },
  { id: 71, name: '山の赤い花', effectIds: [46, 35, 19, 1] },
  { id: 72, name: '主根', effectIds: [52, 16, 38, 46] },
  { id: 73, name: '出血の冠キノコ', effectIds: [50, 9, 53, 42] },
  { id: 74, name: '小さなパール', effectIds: [47, 21, 23, 41] },
  { id: 75, name: '小さな枝角', effectIds: [53, 23, 32, 1] },
  { id: 76, name: '小麦', effectIds: [45, 14, 5, 31] },
  { id: 77, name: '沼の群生キノコ', effectIds: [44, 31, 33, 45] },
  { id: 78, name: '焼け焦げたスキーヴァーの皮', effectIds: [47, 0, 43, 45] },
  { id: 79, name: '垂れ苔', effectIds: [2, 14, 3, 21] },
  { id: 80, name: '青い蝶の羽', effectIds: [4, 11, 3, 13] },
  { id: 81, name: '大きな枝角', effectIds: [47, 26, 48, 5] },
  { id: 82, name: '鷹のくちばし', effectIds: [47, 41, 10, 44] },
  { id: 83, name: '鷹の羽', effectIds: [0, 17, 21, 25] },
  { id: 84, name: '蝶の羽', effectIds: [45, 8, 32, 2] },
  { id: 85, name: '白かさキノコ', effectIds: [51, 15, 46, 35] },
  { id: 86, name: '発光する塵', effectIds: [2, 3, 12, 44] },
  { id: 87, name: '氷の塩鉱石', effectIds: [50, 41, 46, 11] },
  { id: 88, name: '氷の生霊の歯', effectIds: [51, 15, 29, 50] },
  { id: 89, name: '木椅子キノコ', effectIds: [1, 30, 33, 45] },
  { id: 90, name: 'グリームブロッサム', effectIds: [42, 6, 37, 33] },
  { id: 91, name: 'シャウラス・ハンターの触覚', effectIds: [4, 11, 3, 13] },
  { id: 92, name: 'ポイズン・ブルーム', effectIds: [1, 48, 10, 6] },
  { id: 93, name: '聖蚕の羽根', effectIds: [4, 11, 3, 13] },
  { id: 94, name: '黄色い山の花', effectIds: [43, 23, 14, 5] },
  { id: 95, name: '鷹の卵', effectIds: [42, 3, 49, 32] },
  { id: 96, name: 'イクラ', effectIds: [47, 49, 19, 38] },
  { id: 97, name: 'アッシェン・グラス・ポッド', effectIds: [40, 54, 18, 25] },
  { id: 98, name: 'アッシュクリープ・クラスター', effectIds: [4, 29, 40, 12] },
  { id: 99, name: 'アッシュホッパーのゼリー', effectIds: [45, 17, 44, 51] },
  { id: 100, name: 'イノシシの牙', effectIds: [26, 14, 9, 28] },
  { id: 101, name: 'スケイスクロー', effectIds: [34, 36, 35, 30] },
  { id: 102, name: 'スポーン・アッシュ', effectIds: [36, 40, 13, 35] },
  { id: 103, name: 'トラマの根', effectIds: [54, 10, 2, 48] },
  { id: 104, name: 'ネッチゼリー', effectIds: [33, 10, 47, 6] },
  { id: 105, name: 'バーン・スプリガンの木', effectIds: [50, 7, 3, 48] },
  { id: 106, name: 'フェルサートアジサイの羽', effectIds: [45, 17, 0, 42] },
  { id: 107, name: '皇帝カサダケ', effectIds: [1, 19, 37, 27] },
  // { id: 108, name: '', effectIds: [] },
  // { id: 109, name: '', effectIds: [] },
]

export default {
  effects,
  materials,
}
