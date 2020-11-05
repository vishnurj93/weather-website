const bcrypt = require('bcryptjs')

const doWork = async () => {
   const password = 'Kelyane'
   const hashedpassword  = await bcrypt.hash(password, 8)
   console.log(password)
   console.log(hashedpassword)
}

doWork()