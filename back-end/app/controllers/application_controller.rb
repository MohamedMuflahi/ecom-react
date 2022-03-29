class ApplicationController < Sinatra::Base
  require 'bcrypt'
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  get "/users" do
    users = User.all
    users.to_json
  end
  get "/products" do
    products = Product.all
    products.to_json
  end
  get "/reviews" do
    reviews = Review.all
    reviews.to_json
  end
  post "/signup" do
    email = params[:email]
    pass = params[:password]
    if(User.find_by(email: email))
      return
    else
      User.create(password: BCrypt::Password.create(pass), email: email)
    end
  end
  post "/login" do
    email = params[:email]
    pass = params[:password]
    y = User.find_by(email: email)
    x = BCrypt::Password.new(y.password)
    if(x == pass)
      return y.to_json
    end

  end

end
