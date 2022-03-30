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
  post "/products" do
    Product.create(title: params[:title],description: params[:description],category: params[:category],price: params[:price],image: params[:image])
  end
  post "/signup" do
    email = params[:email]
    pass = params[:password]
    first = params[:first_name]
    last = params[:last_name]
    if(User.find_by(email: email))
      return (
        status 401
        body 'Account already exists'
      )
    else
      u = User.create(first_name: first,last_name: last,password: BCrypt::Password.create(pass), email: email)
      u.to_json
    end
  end
  post "/login" do
    email = params[:email]
    pass = params[:password]
    y = User.find_by(email: email)
    if(y)
      x = BCrypt::Password.new(y.password)
      if(x == pass)
        return y.to_json
      else
        return (
          status 401
          body 'Incorrect Credentials Try again :D'
        )
      end
  else
    return(
      status 401 
      body "Account Doesn't exist"
    )
  end
    

  end

end
