const user = {
  email: {
    type: String,
    required: true,
    unique: true,
    validate: () => { /* Email validations */ },
  },
  emailConfirmed: {
    type: Boolean,
    required: true,
  },
}

export default user
