import { BattleState } from './BattleState'
import { Bloodline } from './Bloodline'
import { Classe } from './Classe'
import { Genre } from './Genre'
import { Apotheose } from '../apotheoses/Apotheose'
import { ApotheoseState } from '../apotheoses/ApotheoseState'

export class Character {
  name: string
  classe: Classe
  bloodline?: Bloodline
  chair: number
  esprit: number
  essence: number
  pv: number
  pvMax: number
  pf: number
  pfMax: number
  pp: number
  ppMax: number
  dettes: number
  arcanes: number
  arcanesMax: number
  arcanePrimes: number
  arcanePrimesMax: number
  munitions: number
  munitionsMax: number
  niveau: number
  lux: string
  umbra: string
  secunda: string
  notes: string
  apotheoseState: ApotheoseState
  currentApotheose?: Apotheose
  genre: Genre
  relance: number
  playerName?: string
  picture?: string
  pictureApotheose?: string
  background?: string
  buttonColor?: string
  textColor?: string
  boosted?: boolean
  battleState: BattleState
  restImproved: boolean
  isInvocation: boolean
  controlledBy?: string
  chairBonus: number
  espritBonus: number
  essenceBonus: number
  customData?: string
  dailyUse: Map<string, number>
  dailyUseMax: Map<string, number>

  constructor(p: Character) {
    this.name = p.name
    this.restImproved = p.restImproved
    this.classe = p.classe
    this.bloodline = p.bloodline
    this.currentApotheose = p.currentApotheose
    this.apotheoseState = p.apotheoseState
    this.chair = p.chair
    this.esprit = p.esprit
    this.essence = p.essence
    this.chairBonus = p.chairBonus
    this.espritBonus = p.espritBonus
    this.essenceBonus = p.essenceBonus
    this.pv = p.pv < 0 ? 0 : p.pv
    this.pvMax = p.pvMax
    this.pf = p.pf < 0 ? 0 : p.pf
    this.pfMax = p.pfMax
    this.pp = p.pp < 0 ? 0 : p.pp
    this.ppMax = p.ppMax
    this.dettes = p.dettes < 0 ? 0 : p.dettes
    this.arcanes = p.arcanes < 0 ? 0 : p.arcanes
    this.arcanesMax = p.arcanesMax
    this.munitions = p.munitions < 0 ? 0 : p.munitions
    this.munitionsMax = p.munitionsMax
    this.arcanePrimes = p.arcanePrimes < 0 ? 0 : p.arcanePrimes
    this.arcanePrimesMax = p.arcanePrimesMax
    this.niveau = p.niveau < 0 ? 0 : p.niveau
    this.lux = p.lux
    this.umbra = p.umbra
    this.secunda = p.secunda
    this.notes = p.notes
    this.genre = p.genre
    this.relance = p.relance < 0 ? 0 : p.relance
    this.playerName = p.playerName
    this.picture = p.picture
    this.pictureApotheose = p.pictureApotheose
    this.background = p.background
    this.buttonColor = p.buttonColor
    this.textColor = p.textColor
    this.boosted = p.boosted
    this.battleState = p.battleState
    this.isInvocation = p.isInvocation
    this.controlledBy = p.controlledBy
    this.customData = p.customData
    this.dailyUse = p.dailyUse
    this.dailyUseMax = p.dailyUseMax
  }

  static characterToCreateFactory(p: {
    name: string
    classeName: string
    bloodlineName?: string
    chair: number
    esprit: number
    essence: number
    pvMax: number
    pfMax: number
    ppMax: number
    arcanesMax: number
    arcanePrimesMax: number
    munitionsMax: number
    niveau: number
    lux: string
    umbra: string
    secunda: string
    genre?: Genre
    picture?: string
    pictureApotheose?: string
    background?: string
    buttonColor?: string
    textColor?: string
    playerName?: string
    customData?: string
  }): CharacterToCreate {
    const defaults = {
      chair: p.chair,
      esprit: p.esprit,
      essence: p.essence,
      chairBonus: 0,
      espritBonus: 0,
      essenceBonus: 0,
      pv: p.pvMax,
      pvMax: p.pvMax,
      pf: p.pfMax,
      pfMax: p.pfMax,
      pp: p.ppMax,
      ppMax: p.ppMax,
      playerName: p.playerName,
      // eslint-disable-next-line no-magic-numbers
      dettes: Math.floor(Math.random() * 11),
      arcanes: p.arcanesMax,
      arcanesMax: p.arcanesMax,
      arcanePrimes: p.arcanePrimesMax,
      arcanePrimesMax: p.arcanePrimesMax,
      munitions: p.munitionsMax,
      munitionsMax: p.munitionsMax,
      niveau: p.niveau,
      lux: p.lux,
      umbra: p.umbra,
      secunda: p.secunda,
      notes: '',
      apotheose: undefined,
      apotheoseState: ApotheoseState.NONE,
      // eslint-disable-next-line no-magic-numbers
      genre: p.genre ? p.genre : Math.random() < 0.5 ? Genre.HOMME : Genre.FEMME,
      relance: 0,
      boosted: false,
      battleState: BattleState.NONE,
      picture: p.picture,
      pictureApotheose: p.pictureApotheose,
      background: p.background,
      buttonColor: p.buttonColor,
      textColor: p.textColor,
      classe: Classe[p.classeName],
      bloodline: p.bloodlineName ? Bloodline[p.bloodlineName] : undefined,
      skills: [],
      proficiencies: [],
      restImproved: false,
      isInvocation: false,
      summoner: undefined,
      customData: p.customData,
      dailyUse: new Map<string, number>(),
      dailyUseMax: new Map<string, number>()
    }
    return Object.assign(defaults, p)
  }

  static invocationToCreateFactory(p: {
    name: string
    summoner: Character
    chair: number
    esprit: number
    essence: number
    pvMax: number
    picture?: string
    customData?: string
  }): CharacterToCreate {
    return {
      name: p.name,
      chair: p.chair,
      esprit: p.esprit,
      essence: p.essence,
      chairBonus: 0,
      espritBonus: 0,
      essenceBonus: 0,
      pv: p.pvMax,
      pvMax: p.pvMax,
      pf: 0,
      pfMax: 0,
      pp: 0,
      ppMax: 0,
      playerName: p.summoner.playerName,
      // eslint-disable-next-line no-magic-numbers
      dettes: 0,
      arcanes: 0,
      arcanesMax: 0,
      arcanePrimes: 0,
      arcanePrimesMax: 0,
      munitions: 0,
      munitionsMax: 0,
      niveau: p.summoner.niveau,
      lux: '',
      umbra: '',
      secunda: '',
      notes: '',
      battleState: p.summoner.battleState,
      apotheose: undefined,
      apotheoseState: ApotheoseState.NONE,
      // eslint-disable-next-line no-magic-numbers
      genre: p.summoner.genre,
      relance: 0,
      boosted: false,
      picture: p.picture,
      pictureApotheose: '',
      background: '',
      buttonColor: '',
      textColor: '',
      classe: p.summoner.classe,
      bloodline: p.summoner.bloodline,
      restImproved: false,
      isInvocation: true,
      controlledBy: p.summoner.name,
      customData: p.customData,
      dailyUse: new Map<string, number>(),
      dailyUseMax: new Map<string, number>()
    } as CharacterToCreate
  }
}

export type CharacterToCreate = Omit<Character, 'id' | 'classe' | 'bloodline' | 'apotheoses' | 'proficiencies'>
