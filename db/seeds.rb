# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "\n\n##############"
puts "Creating users"
User.destroy_all
emails = ["rcostafl@gmail.com", "bibianameroni@gmail.com"]
emails.each{|email|
    user = User.create!(
        email: email,
        password: 123456
    )

    puts "User #{user.email} created!"
}

puts "\n\n##############"
puts "Creating shelves"
Shelf.destroy_all
shelves = ["E1","E2","E3","E4","C", "D1","D2","D3","D4"]

shelves.each{|s|
    new_shelf = Shelf.create!(
        name: s
    )
    puts "Shelf #{new_shelf.name} created!"
}
