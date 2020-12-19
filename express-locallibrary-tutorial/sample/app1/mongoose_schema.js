
exports.makeSchema = (mongoose) {
  return new mongoose.Schema({
    a_string: String,
    a_date: Date
  })
}

