import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Application extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public job_id: string;
  @column()
  public first_name: string;
  @column()
  public last_name: string;
  @column()
  public email: string;
  @column()
  public current_position: string;
  @column()
  public qualification: string;
  @column()
  public experience: string;
  @column()
  public construction_experience: boolean;

  @column()
  public cv_url:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
