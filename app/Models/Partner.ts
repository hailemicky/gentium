import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Partner extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public name:String
  @column()
  public priority:number
  @column()
  public pic_url
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
