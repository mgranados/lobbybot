import { map } from 'lodash'
import * as models from '../../src/server/models'

export default function clearDatabase () {
  const promises = map(models, model => model.remove({}))
  return Promise.all(promises)
}
