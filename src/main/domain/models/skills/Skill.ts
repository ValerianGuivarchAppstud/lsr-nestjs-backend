import { SkillStat } from './SkillStat'
import { DisplayCategory } from '../characters/DisplayCategory'
import { SuccessCalculation } from '../roll/SuccessCalculation'

export class Skill {
  name: string
  stat: SkillStat
  displayCategory: DisplayCategory
  pvCost: number
  pfCost: number
  ppCost: number
  dettesCost: number
  arcaneCost: number
  allowsPf: boolean
  allowsPp: boolean
  customRolls: string
  successCalculation: SuccessCalculation
  secret: boolean
  display: string
  position: number
  isArcanique: boolean
  invocationTemplateId?: string

  constructor(p: Skill) {
    this.name = p.name
    this.stat = p.stat
    this.displayCategory = p.displayCategory
    this.pvCost = p.pvCost
    this.pfCost = p.pfCost
    this.ppCost = p.ppCost
    this.dettesCost = p.dettesCost
    this.arcaneCost = p.arcaneCost
    this.allowsPp = p.allowsPp
    this.allowsPf = p.allowsPf
    this.customRolls = p.customRolls
    this.successCalculation = p.successCalculation
    this.secret = p.secret
    this.display = p.display
    this.position = p.position
    this.isArcanique = p.isArcanique
    this.invocationTemplateId = p.invocationTemplateId
  }
}
