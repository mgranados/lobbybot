const Hotel = require('../../models/Hotel')
var moment = require('moment')

module.exports = {
  method: 'get',
  path: '/:uuid/places',
  handler: function *() {
    const {uuid} = this.params
    const hotel = yield Hotel.findOne({uuid})
    const data = {
      checkIn: hotel.checkIn
    }
    const onemore = moment().add(1, 'hour').format('ddd, h:mmA')

    this.body = {
      'messages': [
        {
          'attachment': {
            'type': 'template',
            'payload': {
              'template_type': 'generic',
              'elements': [
                {
                  'title': 'Chiquito taller de cocina',
                  'image_url': 'https://igx.4sqi.net/img/general/width960/8iNHOHJVOVUytPzfgXfefykAeRJNYmVBVMY-ABAYWKg.jpg',
                  'subtitle': 'Restaurante Italiano',
                  'buttons': [
                    {
                      'type': 'web_url',
                      'url': 'https://foursquare.com/v/chiquito-taller-de-cocina/4e6bdbad7d8b2c711b07b643',
                      'title': 'Muéstrame más'
                    }
                  ]
                },
                {
                  'title': 'Chiquito taller de cocina',
                  'image_url': 'https://igx.4sqi.net/img/general/width960/8iNHOHJVOVUytPzfgXfefykAeRJNYmVBVMY-ABAYWKg.jpg',
                  'subtitle': 'Restaurante Italiano',
                  'buttons': [
                    {
                      'type': 'web_url',
                      'url': 'https://foursquare.com/v/chiquito-taller-de-cocina/4e6bdbad7d8b2c711b07b643',
                      'title': 'Muéstrame más'
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    }
  }
}
