import { DBSkillAttrs } from './DBSkillAttrs'
import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class DBSkill extends DBSkillAttrs {
  @PrimaryColumn({ type: 'varchar' })
  name: string

  @Column({ type: 'varchar' })
  shortName: string

  @Column({ type: 'varchar', nullable: true })
  longName: string | null

  @Column({ type: 'boolean', default: false })
  allAttribution: boolean

  @Column({ type: 'integer', default: 1 })
  position: number

  @Column({ type: 'varchar', default: 'fait un Jet ', nullable: true })
  display: string

  @Column({ type: 'boolean', default: false })
  isArcanique: boolean

  @Column({ type: 'varchar', default: '' })
  description: string
}
