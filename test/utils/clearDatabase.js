import { map } from 'lodash'
import models from '../../server/models'

export default function clearDatabase () {
  const promises = map(models, model => model.remove({}))
  return Promise.all(promises)
}
