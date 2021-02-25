export interface Gear {
  id: number;
  /**
   * 装备类型
   * Weapon|Helmet->|Armor|Necklace|Ring|Boots
   */
  gear: string;
  // 装备等级
  rank: string;
  // 套装类别
  set: string;
  // 装备级别
  level: number;
  // 装备强化等级
  enhance: number;
  // 装备主属性类型
  maintype: string;
  // 装备主属性值
  mainvalue: number;
  // 装备副属性 为{type:string,value:number}[]的字符串格式;
  substats: { type: string; value: number }[];
}


export const gearType: {
    [key: string]: string
} = {
  Weapon: '武器',
  Helmet: '头盔',
  Armor: '衣服',
  Necklace: '项链',
  Ring: '戒指',
  Boots: '鞋子',
};

export const gearTypeList = [
  'Weapon',
  'Helmet',
  'Armor',
  'Necklace',
  'Ring',
  'Boots',
];

export const gearRankType: {
    [key: string]: string
} = {
    Epic: '传说',
    Heroic: '英雄',
    Rare: '稀有'
};

export const gearStateType: {
    [key: string]: string
} = {
    Attack: '攻击力',
    AttackPercent: '攻击力(%)',
    Health: '生命力',
    HealthPercent: '生命力(%)',
    Defense: '防御力',
    DefensePercent: '防御力(%)',
    CriticalHitChancePercent: '暴击(%)',
    CriticalHitDamagePercent: '暴击伤害(%)',
    Percent: '暴击伤害(%)',
    EffectivenessPercent: '效果命中(%)',
    EffectResistancePercent: '效果抗性(%)',
    Speed: '速度'
};
