import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Career extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public job_title:string

  @column()
  public description:string

  @column()
  public file_url:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
