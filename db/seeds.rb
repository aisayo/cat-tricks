# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: "Mel", email: "test@test.com", password: "123456")

cat1 = Cat.create(name: "Hiboux", color: "Tortoiseshell")
cat2 = Cat.create(name: "Pigeon", color: "Gray tabby")

trick1 = Trick.create(name: "Sit")
trick2 = Trick.create(name: "Come")
trick3 = Trick.create(name: "High five")
trick4 = Trick.create(name: "Ring bell")

CatTrick.create(cat_id: 1, trick_id: 1)
CatTrick.create(cat_id: 1, trick_id: 2)
CatTrick.create(cat_id: 1, trick_id: 4)
CatTrick.create(cat_id: 2, trick_id: 2)
