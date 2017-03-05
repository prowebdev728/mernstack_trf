/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const userLogin = {

  name: {
    type: String,
    unique: true,
    validate: () => { return this.type.length <= 50 },
  },

  key: {
    type: String,
    unique: true,
    validate: () => { return this.type.length <= 100 },
  },

}

export default userLogin
