import { Model } from '@nozbe/watermelondb'
import { field, date, readonly} from '@nozbe/watermelondb/decorators'

export default class AccessControl extends Model {
  static table = 'access_control'

  @field('code')
  code

  @field('direction')
  direction

  @field('status')
  status

  @readonly @date('created_at') createdAt
  @readonly @date('updated_at') updatedAt

}
