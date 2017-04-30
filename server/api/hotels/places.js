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
                      'title': 'Mina de Edén',
                  'image_url': 'https://foursquare.com/v/mina-el-ed%C3%A9n/4c92791cf600236a7c5fbd32?openPhotoId=51eafeb5498ee2a4d355e5',
                  'subtitle': 'Atraccion turistica',
                  'buttons': ['https://foursquare.com/v/mina-el-ed%C3%A9n/4c92791cf600236a7c5fbd32'
                    {
                      'type': 'web_url',
                      'url': 'https://foursquare.com/v/mina-el-ed%C3%A9n/4c92791cf600236a7c5fbd32',
                      'title': 'Muéstrame más'
                    }
                  ]
                },
                {
                  'title': 'Teleferico estación el grillo',
                  'image_url': 'https://foursquare.com/v/teleferico-estacion-el-grillo/4bb3728d715eef3b1f5286bb?openPhotoId=4fca40c4e4b04ba0d0ecf0cc',
                  'subtitle': 'atraccion turistica',
                  'buttons': [ 'https://foursquare.com/v/teleferico-estacion-el-grillo/4bb3728d715eef3b1f5286bb'
                    {
                      'type': 'web_url',
                      'url': 'https://foursquare.com/v/teleferico-estacion-el-grillo/4bb3728d715eef3b1f5286bb',
                      'title': 'Muéstrame más'
                    }
                  ]
              },{
                'title': 'La Mina Club',
                'image_url': 'https://foursquare.com/v/teleferico-estacion-el-grillo/4bb3728d715eef3b1f5286bb?openPhotoId=4fca40c4e4b04ba0d0ecf0cc',
                'subtitle': 'Antro',
                'buttons': [ 'https://foursquare.com/v/teleferico-estacion-el-grillo/4bb3728d715eef3b1f5286bb'
                  {
                    'type': 'web_url',
                    'url': 'https://foursquare.com/v/la-mina-club/4bf760595ec320a1e40587d3',
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
