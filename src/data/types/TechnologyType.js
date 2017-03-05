/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import { GraphQLObjectType as ObjectType, GraphQLString as StringType, GraphQLNonNull as NonNull, } from 'graphql'

const TechnologyType = new ObjectType({
  name: 'TechnologyItem',
  fields: {
    name: { type: new NonNull(StringType), },
    icon: { type: new NonNull(StringType), },
    url: { type: new NonNull(StringType), },
  },
})

export default TechnologyType
