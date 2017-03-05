/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import { GraphQLList as List, } from 'graphql'
import TechnologyType from '../types/TechnologyType'
import Technology from '../models/Technology'

const technologies = {

  type: new List(TechnologyType),
  resolve: () => {
    return new Promise((resolve, reject) => {
      Technology.find({}, (err, technologies) => {
        if (err) reject(err)
        else {
          resolve(technologies)
        }
      })
    })
  },
}

export default technologies
