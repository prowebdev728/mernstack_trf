
const userProfile = {

  userId: {
    type: String,
    unique: true,
  },

  displayName: {
    type: String,
    validate: () => { return this.type.length <= 100 },
  },

  picture: {
    type: String,
    validate: () => { return this.type.length <= 255 },
  },

  gender: {
    type: String,
    validate: () => { return this.type.length <= 50 },
  },

  location: {
    type: String,
    validate: () => { return this.type.length <= 100 },
  },

  website: {
    type: String,
    validate: () => { return this.type.length <= 100 },
  },

}

export default userProfile
