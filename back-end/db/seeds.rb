require 'faker'
require 'bcrypt'

puts "🌱 Seeding Users..."
User.create(password: BCrypt::Password.create("123"), email: "Test@gmail.com")
50.times do 
    User.create(password: BCrypt::Password.create(Faker::Bank.account_number), email: Faker::Internet.unique.email)
end

puts "🌱 Seeding Products..."
category = [
    "Beauty","Home", "Furniture","Kids","Toys","Shoes","Jewelry","Gifts"
]
50.times do 
Product.create(name: Faker::Commerce.product_name,desc: Faker::Quote.famous_last_words, price: Faker::Number.between(from: 1, to: 500),category: category.sample)
end
puts "🌱 Seeding Reviews..."
50.times do 
Review.create(content: Faker::Quote.famous_last_words, rating: Faker::Number.between(from: 1, to: 5),user_id: User.ids.sample,product_id: Product.ids.sample)
end

# Seed your database here

puts "✅ Done seeding!"
