import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: number



  @column()
  public name : string

  @column()
  public client_name:string
  @column()
  public description : string
  @column()
  public status : boolean
  @column()
  public pic_url : string
  @column()
  public priority: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
